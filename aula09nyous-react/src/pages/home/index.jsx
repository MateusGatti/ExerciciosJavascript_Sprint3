import React from 'react';
import { Carousel, Jumbotron, Button, Container, Row, Col, Card } from 'react-bootstrap';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';

const Home = () => {
    return (
        <div>
            <Menu />
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.discordapp.com/attachments/355466584036343811/767923498076209172/b58b294466cdd6de5f31771616db656b.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>
            <Jumbotron className="text-center">
                <h1>Diversos eventos em um só local</h1>
                <p>
                    Encontre os mais diversos eventos de forma mais rápida
                </p>
                <p>
                    <Button variant="primary" href="/login">Login</Button><Button variant="success" href="/cadastrar">Cadastrar</Button>
                </p>
            </Jumbotron>
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Tecnologia</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Inovação</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        </Col>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Educação</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card></Col>
                </Row>
            </Container>
            <Rodape />
        </div>
    )
}

export default Home; 