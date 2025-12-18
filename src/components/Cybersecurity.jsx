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
    },
    {
        id: 2,
        title: "Buffer Overflow Vulnerability (Set-UID)",
        description: "Investigated buffer overflow vulnerabilities in Set-UID programs. Exploited memory corruption to gain root privileges by injecting shellcode and manipulating the return address, demonstrating the critical importance of bounds checking and safe coding practices.",
        tools: ["GDB", "GCC", "C", "Shellcode", "Ubuntu (Seed Lab VM)", "Stack Smashing", "Memory Layout"],
        image: "/portfolio/buffer-overflow.png",
        link: "https://seedsecuritylabs.org/Labs_20.04/Files/Buffer_Overflow_Setuid/Buffer_Overflow_Setuid.pdf",
        report: "https://drive.google.com/file/d/1UhJhSaNK4egveB6V9-H78n2SQmP3nq5H/view?usp=sharing",
        readmore: "https://seedsecuritylabs.org/Labs_20.04/Software/Buffer_Overflow_Setuid/"
    },
    {
        id: 3,
        title: "RSA Encryption & Digital Signature",
        description: "Implemented RSA encryption and digital signature algorithms. Explored key generation, message signing, and verification processes, gaining deep insights into public-key cryptography and algebraic number theory mechanics.",
        tools: ["C", "OpenSSL", "BIGNUM", "Public-Key Cryptography", "Digital Signatures", "Encryption/Decryption", "Ubuntu (Seed Lab VM)"],
        image: "/portfolio/rsa-lab.png",
        link: "https://seedsecuritylabs.org/Labs_20.04/Files/Crypto_RSA/Crypto_RSA.pdf",
        report: "https://drive.google.com/file/d/1lGAspz6jBo-wGb_xrBPbNQpvHXlEpP20/view?usp=sharing",
        readmore: "https://seedsecuritylabs.org/Labs_20.04/Crypto/Crypto_RSA/"
    },
    {
        id: 4,
        title: "Public Key Infrastructure (PKI)",
        description: "Functioned as a Certificate Authority (CA) to design and secure a digital infrastructure. Created digital certificates, enabled HTTPS, and executed Man-in-the-Middle (MITM) attacks to demonstrate the critical role of certificate validation in establishing network trust.",
        tools: ["OpenSSL", "Certificate Authority", "HTTPS", "Apache", "Docker", "MITM", "Wireshark", "Ubuntu (Seed Lab VM)"],
        image: "/portfolio/pki-lab.png",
        link: "https://seedsecuritylabs.org/Labs_20.04/Files/Crypto_PKI/Crypto_PKI.pdf",
        report: "https://drive.google.com/file/d/1ay2ThNvz5ZJFmtwtqaHSGBG5sslk5YbP/view?usp=sharing",
        readmore: "https://seedsecuritylabs.org/Labs_20.04/Crypto/Crypto_PKI/"
    },
    {
        id: 5,
        title: "Packet Sniffing & Spoofing",
        description: "Implemented a packet sniffer using Scapy to capture and analyze network traffic. Focused on understanding the underlying mechanisms of packet interception and manipulation, completing the initial phase of the lab (Task 2.1A).",
        tools: ["Python", "Scapy", "Wireshark", "Ubuntu (Seed Lab VM)", "Network Protocols"],
        image: "/portfolio/sniffing-spoofing.png",
        link: "https://seedsecuritylabs.org/Labs_20.04/Files/Sniffing_Spoofing/Sniffing_Spoofing.pdf",
        report: "https://drive.google.com/file/d/1uuzuQH2oWjj_s2-7aJxhV1dIAseUWIAb/view?usp=sharing",
        readmore: "https://seedsecuritylabs.org/Labs_20.04/Networking/Sniffing_Spoofing/"
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
