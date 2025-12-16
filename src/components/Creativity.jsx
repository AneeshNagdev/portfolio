import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

const images = [
    '/portfolio/creativity_1.png',
    '/portfolio/creativity_2.png',
    '/portfolio/creativity_3.png',
    '/portfolio/creativity_4.png',
    '/portfolio/creativity_5.png',
];

const Creativity = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const getVisibleImages = () => {
        const total = images.length;
        const prev = (activeIndex - 1 + total) % total;
        const next = (activeIndex + 1) % total;
        return { prev, current: activeIndex, next };
    };

    const { prev, current, next } = getVisibleImages();

    return (
        <section id="creativity" className="py-20 bg-gray-900 text-white overflow-hidden">
            <Container className="text-center">
                <h2 className="text-4xl font-bold mb-4 text-purple-400 font-mono">Creativity</h2>
                <p className="text-gray-300 italic mb-12 text-xl font-light">
                    "Creativity begins with noticing what others overlook"
                </p>

                <div className="relative h-[400px] flex items-center justify-center perspective-1000">
                    {images.map((img, index) => {
                        let position = 'hidden';
                        if (index === current) position = 'center';
                        else if (index === prev) position = 'left';
                        else if (index === next) position = 'right';

                        // Base styles
                        let styles = "absolute transition-all duration-700 ease-in-out rounded-xl shadow-2xl object-cover";
                        let transforms = "";

                        if (position === 'center') {
                            styles += " z-30 opacity-100 w-[275px] h-[275px] md:w-[375px] md:h-[375px] border-4 border-purple-500/50";
                            transforms = "scale(1.1) translateX(0)";
                        } else if (position === 'left') {
                            styles += " z-20 opacity-60 w-[175px] h-[175px] md:w-[225px] md:h-[225px] blur-[2px]";
                            transforms = "translateX(-120%) scale(0.9)";
                        } else if (position === 'right') {
                            styles += " z-20 opacity-60 w-[175px] h-[175px] md:w-[225px] md:h-[225px] blur-[2px]";
                            transforms = "translateX(120%) scale(0.9)";
                        } else {
                            styles += " z-10 opacity-0 w-[0px] h-[0px]";
                        }

                        return (
                            <img
                                key={index}
                                src={img}
                                alt={`Creative ${index + 1}`}
                                className={styles}
                                style={{ transform: transforms }}
                            />
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};

export default Creativity;
