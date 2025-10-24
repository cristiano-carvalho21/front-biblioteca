import { Button, Container, Modal, Row, Col } from "react-bootstrap";
import { useState} from "react";
import GetLivros from "../metodos/GetLivros";

function LivrosALer()
{
    const [showModal, setShowModal] = useState(false);
    const abrirModal = () => setShowModal(true);
    const fecharModal = () => setShowModal(false);

    return(
        <div>
            <Container className="mt-5 ms-5 mb-3">
                <Row>
                    <Col>
                        <h1>Ler Depois</h1>
                        <p className="lead paragrafos">Clique em adicionar para colocar em fileira livros interessantes que pretendes ler</p>
                        <Button className="mt-5 mb-3 btn-add" onClick={abrirModal}>Adicionar +</Button>
                    </Col>
                </Row>

                 <Row className="d-flex flex-wrap">
                    <Col className="d-flex flex-wrap">
                        <Modal show={showModal} onHide={fecharModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>Coletando Livros</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="modal-body-scrool" > 
                                <Row className="d-flex flex-wrap">
                                <Col  className="d-flex flex-wrap"> <GetLivros/> </Col>
                                </Row>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={fecharModal} className="btn-secondary">Cancelar</Button>
                                <Button className="btn-success">Adicionar</Button>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}
export default LivrosALer;