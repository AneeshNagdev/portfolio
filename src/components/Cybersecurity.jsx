import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Cybersecurity = () => {
    return (
        <section id="cybersecurity" className="py-20 bg-gray-900 text-white border-t border-gray-800">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-green-400 font-mono">&lt;Cybersecurity /&gt;</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto font-mono">
                        // Analyzing security postures...
                        <br />
                        // Documenting lab reports and findings.
                    </p>
                </div>

                <h3 className="text-2xl font-bold mb-8 text-green-400 font-mono border-b border-gray-700 pb-2 inline-block">Seed Labs</h3>

                <Row>
                    <Col>
                        <p className="text-gray-400 font-mono">
                            // Seed Lab reports will be populated here.
                            <br />
                            // Stay tuned for detailed security analysis.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Cybersecurity;
