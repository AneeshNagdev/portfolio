import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: 'info', message: 'Sending...' });

        try {
            const response = await fetch('http://localhost:8000/api/contact.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.sent) {
                setStatus({ type: 'success', message: 'Message sent successfully!' });
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus({ type: 'danger', message: result.message || 'Failed to send message.' });
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus({ type: 'danger', message: 'An error occurred. Please try again later.' });
        }
    };

    return (
        <section id="contact" className="py-20 bg-gray-900 text-white relative">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={8} className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4 text-cyan-400">Get In Touch</h2>
                        <p className="text-gray-400">
                            Have a project in mind or just want to say hi? I'd love to hear from you.
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col lg={6}>
                        <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-xl">
                            {status && (
                                <Alert variant={status.type} onClose={() => setStatus(null)} dismissible>
                                    {status.message}
                                </Alert>
                            )}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-4" controlId="formName">
                                    <Form.Label className="text-gray-300">Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Your Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="bg-gray-900 border-gray-700 text-white focus:border-cyan-500 focus:ring-cyan-500"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="formEmail">
                                    <Form.Label className="text-gray-300">Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="your.email@example.com"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="bg-gray-900 border-gray-700 text-white focus:border-cyan-500 focus:ring-cyan-500"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-6" controlId="formMessage">
                                    <Form.Label className="text-gray-300">Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={5}
                                        placeholder="Your message..."
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="bg-gray-900 border-gray-700 text-white focus:border-cyan-500 focus:ring-cyan-500"
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit" size="lg" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 border-none font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
                                    Send Message
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;
