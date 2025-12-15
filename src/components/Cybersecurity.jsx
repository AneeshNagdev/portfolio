import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

const labs = [
    {
        id: 1,
        title: "Firewall Evasion",
        description: "Explored techniques to bypass firewall rules using packet manipulation and tunneling. Demonstrated how attackers can evade detection and how network administrators can strengthen firewall policies to prevent such breaches.",
        tools: ["Ubuntu (seed lab VM)", "SSH Tunneling", "SOCKS5 Proxy", "Wireshark", "Iptables", "Python", "Curl", "Telnet"],
        image: "/portfolio/firewall-evasion.png",
        link: "https://seedsecuritylabs.org/Labs_20.04/Files/Firewall_Evasion/Firewall_Evasion.pdf",
        report: "https://drive.google.com/file/d/1vdyW8hzZJE1fYHLFGOapBDqzxrQS39XV/view?usp=drive_link",
        readmore: "https://seedsecuritylabs.org/Labs_20.04/Networking/Firewall_Evasion/"
    }
];

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
                    {labs.map((lab) => (
                        <Col lg={6} key={lab.id} className="mb-8">
                            <Card className="h-100 bg-gray-950 border border-green-500/30 hover:border-green-500 transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.1)] hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                                <div className="overflow-hidden h-48 relative group">
                                    <div className="absolute inset-0 bg-green-500/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                                    <Card.Img
                                        variant="top"
                                        src={lab.image}
                                        className="h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <Card.Body className="flex flex-col p-6">
                                    <Card.Title className="text-xl font-bold text-green-400 mb-3 font-mono">{lab.title}</Card.Title>
                                    <Card.Text className="text-gray-300 mb-4 flex-grow text-sm leading-relaxed font-mono">
                                        {lab.description}
                                    </Card.Text>

                                    <div className="mb-4">
                                        <div className="flex flex-wrap gap-2">
                                            {lab.tools.map((tool, index) => (
                                                <Badge key={index} bg="dark" className="text-cyan-400 border border-cyan-500/50 font-mono text-xs">
                                                    {tool}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-auto flex gap-2">
                                        <Button href={lab.link} target="_blank" variant="outline-success" className="flex-1 font-mono text-sm hover:shadow-[0_0_10px_rgba(34,197,94,0.4)]">
                                            View Task
                                        </Button>
                                        <Button href={lab.report} target="_blank" variant="outline-info" className="flex-1 font-mono text-sm border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white hover:shadow-[0_0_10px_rgba(6,182,212,0.4)]">
                                            View Report
                                        </Button>
                                        <Button href={lab.readmore} target="_blank" variant="outline-light" className="flex-1 font-mono text-sm border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white hover:border-gray-500">
                                            Read More
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Cybersecurity;
