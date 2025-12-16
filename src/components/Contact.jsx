import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-900 text-white relative">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={8} className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4 text-cyan-400">Get In Touch</h2>
                        <p className="text-gray-400 mb-8">
                            Have a project in mind or just want to say hi? I'd love to hear from you.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Button
                                href="mailto:aneesh.ca255@gmail.com"
                                variant="outline-success"
                                size="lg"
                                className="font-mono border-green-500 text-green-400 hover:bg-green-500 hover:text-black hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-all px-8"
                            >
                                Email
                            </Button>
                            <Button
                                href="https://linkedin.com/in/aneesh-nagdev"
                                target="_blank"
                                variant="outline-success"
                                size="lg"
                                className="font-mono border-green-500 text-green-400 hover:bg-green-500 hover:text-black hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-all px-8"
                            >
                                LinkedIn
                            </Button>
                            <Button
                                href="https://github.com/AneeshNagdev"
                                target="_blank"
                                variant="outline-success"
                                size="lg"
                                className="font-mono border-green-500 text-green-400 hover:bg-green-500 hover:text-black hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-all px-8"
                            >
                                GitHub
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;
