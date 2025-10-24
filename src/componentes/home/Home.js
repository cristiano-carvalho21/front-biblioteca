import styles from "./Home.module.css";
import { Container, Carousel, Card, Row, Col } from "react-bootstrap";
import { MdPerson } from "react-icons/md";
//import axios from "axios";
//import { useState, useEffect } from "react";

function Home()
{
    const nome = localStorage.getItem('nome');
    const categoria = localStorage.getItem('categoria');
    const cat =  (categoria !=='' ? categoria : 'usuário');
    return(
        <div>
            <Container className="d-flex flex-column ms-auto">
                <Row>
                    <Col>
                        <Card className=" d-flex shadow-sm mt-5 ms-auto card-aluno rounded " style={{width:'260px'}}>
                            <Card.Body className="d-flex">
                                <MdPerson size={60}/>
                                <Card.Text className="campos-aluno ms-2" >{nome} <br/> {cat}</Card.Text>
                            </Card.Body>
                        </Card>
                    
                        <div className={styles.jumbotron}>
                            <h1 className="display-4"> Minha Biblioteca </h1>
                            <p className="lead paragrafos">
                                Óla seja bem-vindo a tua biblioteca virtual, aqui voçê encontra os livros que precisas para o teu
                                desenvolvimento acadêmico
                            </p>
                            <p className="lead paragrafos" >
                                Conheça o seu novo espaço de aprendizado, e desfrute dos melhores conteúdos disponiblizados aqui
                            </p>
                            <div className="center">
                                <hr className="my-4"/>
                                <h2 className="lead mb-3">Ler é aprender;</h2>
                                <h2 className="lead mb-3">Aprender é desenvolver;</h2>
                                <h2 className="lead mb-3">Desenvolver é evoluir</h2>
                            </div>
                        </div>
                    
                        <Card className="mt-5 mb-5 border-0 center container-img-home d-flex mx-auto">
                            <Carousel fade interval={3000} controls={false} indicators={false} >

                                <Carousel.Item>
                                    <div className="center">
                                        <img className="img-fluid" src="./../imagens/img-main.jpg" alt="Primeira imagem" style={{width: '750px'}}/>
                                    </div>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <div className="center">
                                        <img className="img-fluid" src="./../imagens/img1.jpg" alt="Segunda imagem"/>
                                    </div>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <div className="center">
                                        <img className="img-fluid" src="./../imagens/img2.jpg" alt="Terceira imagem" style={{width: '750px'}}/>
                                    </div>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <div className="center">
                                        <img className="img-fluid" src="./../imagens/img3.jpg" alt="Quarta imagem" style={{width: '750px'}}/>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
       
    )
}
export default Home;