import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

const hackathons = [
    {
        id: 1,
        title: "OMOI",
        event: "Hackathon Project",
        description: "An innovative solution designed to assist non-verbal autistic children. This project focuses on accessibility and communication, leveraging technology to bridge gaps and provide a voice to those who need it most.",
        tags: ["Accessibility", "Social Impact", "Hackathon"],
        link: "https://github.com/ammar/amplify_GDG", // Placeholder link based on user description, user should verify
        image: "https://placehold.co/600x400/1e293b/orange?text=OMOI"
    }
];

const HackathonProjects = () => {
    return (
        <section id="hackathons" className="py-20 bg-gray-900 text-white border-t border-gray-800">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-green-400 font-mono">&lt;Hackathon_Projects /&gt;</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto font-mono">
            // Rapid prototyping and innovation...
                    </p>
                </div>
                <Row className="justify-content-center">
                    {hackathons.map((project) => (
                        <Col lg={8} key={project.id} className="mb-8">
                            <Card className="bg-gray-950 border border-green-500/30 hover:border-green-500 transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.1)]">
                                <Row className="g-0 align-items-center">
                                    <Col md={5}>
                                        <Card.Img
                                            src={project.image}
                                            className="h-full w-full object-cover rounded-l-lg min-h-[250px]"
                                        />
                                    </Col>
                                    <Col md={7}>
                                        <Card.Body className="p-6">
                                            <div className="flex justify-between items-start mb-2">
                                                <Card.Title className="text-2xl font-bold text-green-400 font-mono">{project.title}</Card.Title>
                                                <Badge bg="warning" text="dark" className="font-mono">{project.event}</Badge>
                                            </div>
                                            <Card.Text className="text-gray-300 mb-4 leading-relaxed">
                                                {project.description}
                                            </Card.Text>
                                            <div className="mb-6 flex flex-wrap gap-2">
                                                {project.tags.map((tag, index) => (
                                                    <Badge key={index} bg="dark" className="text-green-400 border border-green-500/50 font-mono">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                            <Button href={project.link} target="_blank" variant="outline-success" className="font-mono hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]">
                                                View Project
                                            </Button>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default HackathonProjects;
