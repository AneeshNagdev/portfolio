import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const skills = [
    { category: "Languages", items: ["Python", "C", "Java", "SQL", "JavaScript", "HTML/CSS", "PHP"] },
    { category: "Web Development", items: ["React", "Tailwind CSS", "Bootstrap", "Vite", "REST APIs"] },
    { category: "Systems & Networking", items: ["Linux/Unix", "Scapy", "Logging", "CLI tools", "Wireshark"] },
    { category: "Frameworks & Libraries", items: ["Flask", "Streamlit", "Pandas", "NumPy", "Matplotlib"] },
    { category: "Testing & Quality", items: ["Unit Testing", "API Testing", "Pytest", "Flask testing utilities"] },
    { category: "Tools & Development", items: ["Git/GitHub", "VS Code", "IntelliJ IDEA", "JIRA", "AWS", "Azure"] }
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-gray-900 text-white relative overflow-hidden">
            {/* Matrix-like background effect hint */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://media.giphy.com/media/U3qYN8S0j3bpK/giphy.gif')] bg-cover bg-center mix-blend-screen"></div>

            <Container className="relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-green-400 font-mono">&lt;Technical_Skills /&gt;</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto font-mono">
            // Loading technical competencies...
                        <br />
            // System ready.
                    </p>
                </div>

                <Row className="mb-16 justify-content-center">
                    {skills.map((skillGroup, index) => (
                        <Col md={6} lg={4} key={index} className="mb-6">
                            <Card className="h-100 bg-gray-950 border border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.1)] hover:shadow-[0_0_25px_rgba(34,197,94,0.3)] transition-all duration-300">
                                <Card.Body>
                                    <Card.Title className="text-xl font-bold text-green-400 mb-4 font-mono border-b border-green-500/30 pb-2">
                                        {skillGroup.category}
                                    </Card.Title>
                                    <ul className="list-none p-0 space-y-2">
                                        {skillGroup.items.map((item, idx) => (
                                            <li key={idx} className="text-gray-300 font-mono text-sm flex items-center">
                                                <span className="text-green-500 mr-2">&gt;</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <div className="text-center bg-gray-950/80 p-8 rounded-2xl border border-green-500/30 backdrop-blur-sm max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold mb-6 text-white font-mono">Establish Connection</h3>
                    <div className="flex flex-wrap justify-center gap-4">
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
                            href="mailto:aneesh.ca255@gmail.com"
                            variant="outline-success"
                            size="lg"
                            className="font-mono border-green-500 text-green-400 hover:bg-green-500 hover:text-black hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-all px-8"
                        >
                            Email
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Skills;
