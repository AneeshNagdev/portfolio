import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center bg-gray-900 text-white pt-16 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            <Container className="relative z-10">
                <Row className="align-items-center">
                    <Col lg={6} className="mb-5 mb-lg-0">
                        <h2 className="text-cyan-400 font-mono text-xl mb-2">Hello, I'm</h2>
                        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                            Aneesh
                        </h1>
                        <h3 className="text-2xl md:text-3xl text-gray-300 mb-6">
                            Cybersecurity Enthusiast
                        </h3>
                        <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
                            3rd Year Computer Science Student at <span className="text-cyan-400">Toronto Metropolitan University</span>.
                            <br className="mb-2" />
                            Dedicated to securing digital infrastructures and analyzing vulnerabilities.
                            Passionate about penetration testing, network security, and building resilient systems.
                        </p>
                        <div className="flex gap-4">
                            <Button href="https://drive.google.com/file/d/1v8ofvJFv4wSS026L29MsWZz78dG6gAZZ/view?usp=sharing" target="_blank" variant="outline-info" size="lg" className="rounded-full px-8 py-3 font-semibold hover:bg-cyan-500 hover:text-white transition-all">
                                Resume
                            </Button>
                            <Button href="#contact" variant="primary" size="lg" className="rounded-full px-8 py-3 font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 border-none hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
                                Contact Me
                            </Button>
                        </div>
                    </Col>
                    <Col lg={6} className="text-center">
                        <div className="relative inline-block">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl transform rotate-6 opacity-50 blur-lg"></div>
                            <div className="relative bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-2xl max-w-md mx-auto transform hover:-translate-y-2 transition-transform duration-300">
                                <div className="flex gap-2 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="text-left font-mono text-sm text-gray-300 overflow-hidden">
                                    <p><span className="text-purple-400">const</span> <span className="text-yellow-400">student</span> = <span className="text-blue-400">{'{'}</span></p>
                                    <p className="pl-4">name: <span className="text-green-400">'Aneesh'</span>,</p>
                                    <p className="pl-4">university: <span className="text-green-400">'TMU'</span>,</p>
                                    <p className="pl-4">year: <span className="text-orange-400">3</span>,</p>
                                    <p className="pl-4">focus: <span className="text-green-400">'Cybersecurity'</span>,</p>
                                    <p className="text-blue-400">{'}'}</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
