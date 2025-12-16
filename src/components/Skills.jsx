import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const skills = [
    { category: "Languages", items: ["Python", "C", "Java", "SQL", "JavaScript", "HTML/CSS", "PHP", "Assembly", "Shellcode"] },
    { category: "Web Development", items: ["React", "Tailwind CSS", "Bootstrap", "Vite", "REST APIs", "Flask"] },
    { category: "Systems & Networking", items: ["Linux/Unix", "Scapy", "Logging", "CLI tools", "Wireshark", "GDB", "Set-UID", "Buffer Overflow", "Memory Layout"] },
    { category: "Frameworks & Libraries", items: ["Streamlit", "Pandas", "NumPy", "Matplotlib"] },
    { category: "Testing & Quality", items: ["Unit Testing", "API Testing", "Pytest", "Flask testing utilities"] },
    { category: "Tools & Development", items: ["Git/GitHub", "VS Code", "IntelliJ IDEA", "JIRA", "AWS", "Azure", "Seed Labs VM"] }
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

                <Row className="justify-content-center">
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
            </Container>
        </section>
    );
};

export default Skills;
