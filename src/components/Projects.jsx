import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

const projects = [
    {
        id: 1,
        title: "Intrusion Detection System",
        description: "Developed a Python-based Intrusion Detection System (IDS) using Scapy to capture, analyze, and classify network packets, improving anomaly-detection accuracy by ~35%. Designed modular logging pipelines generating 500+ structured logs per run with <2s latency.",
        tags: ["Python", "Scapy", "Logging", "CLI", "Network Security"],
        link: "https://github.com/AneeshNagdev/Simple-IDS",
        image: "https://placehold.co/600x400/1e293b/red?text=IDS+System"
    },
    {
        id: 2,
        title: "Password Strength Analyzer",
        description: "Designed a Flask-based web application analyzing 5,000+ passwords using entropy scoring and Regex validation. Implemented NIST and OWASP-aligned password policies, reducing weak credential usage by ~30%.",
        tags: ["Python", "Flask", "Regex", "HTML/CSS", "Security"],
        link: "https://github.com/AneeshNagdev/Password-Strength-Analyzer",
        image: "https://placehold.co/600x400/1e293b/purple?text=Password+Analyzer"
    },
    {
        id: 3,
        title: "E-Commerce Website",
        description: "A secure full-stack e-commerce solution. Focus on secure authentication, input validation, and protection against common web vulnerabilities.",
        tags: ["Web Security", "PHP", "React"],
        link: "https://github.com/AneeshNagdev/E-Commerce-Website",
        image: "https://placehold.co/600x400/1e293b/cyan?text=Secure+E-Commerce"
    },
    {
        id: 4,
        title: "YouTube Content Downloader",
        description: "Automated content retrieval tool. Demonstrates understanding of HTTP protocols, API interaction, and data handling.",
        tags: ["Automation", "Python", "Networking"],
        link: "https://github.com/AneeshNagdev/YouTube-Content-Downloader",
        image: "https://placehold.co/600x400/1e293b/green?text=Content+Downloader"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-gray-800 text-white">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-green-400 font-mono">&lt;Security_Projects /&gt;</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto font-mono">
            // Executing project showcase...
                        <br />
            // Displaying recent security implementations.
                    </p>
                </div>
                <Row>
                    {projects.map((project) => (
                        <Col lg={6} key={project.id} className="mb-8">
                            <Card className="h-100 bg-gray-900 border-gray-700 hover:border-green-500 transition-all duration-300 hover:-translate-y-2 shadow-lg">
                                <div className="overflow-hidden h-48">
                                    <Card.Img
                                        variant="top"
                                        src={project.image}
                                        className="h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <Card.Body className="flex flex-col">
                                    <Card.Title className="text-xl font-bold text-green-400 mb-3 font-mono">{project.title}</Card.Title>
                                    <Card.Text className="text-gray-300 mb-4 flex-grow text-sm leading-relaxed">
                                        {project.description}
                                    </Card.Text>
                                    <div className="mb-4 flex flex-wrap gap-2">
                                        {project.tags.map((tag, index) => (
                                            <Badge key={index} bg="dark" className="text-green-400 border border-green-500/50 font-mono">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                    <Button href={project.link} target="_blank" variant="outline-success" className="w-full mt-auto font-mono hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]">View Code</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Projects;
