import { Button, Container, Modal, Row, Col } from "react-bootstrap";
import { useState} from "react";
//import { Link } from "react-router-dom";
import GetLivros from "../metodos/GetLivros";

function MeusLivros()
{
    const [showModal, setShowModal] = useState(false);
    
    const abrirModal = () => setShowModal(true);
    const fecharModal = () => setShowModal(false);

    return(
        <div>
            <Container className="mt-5 ms-5 mb-3">
                <Row className="gap-4">
                    <Col>
                        <h1>Meus Livros</h1>
                        <p className="lead paragrafos">Clique em adicionar, para adicionar os seus livros, e colocá-los de forma organizada</p>
                        <Button  className="mt-5 mb-3 btn-add" onClick={abrirModal}>Adicionar + </Button>
                    </Col>
                </Row>
                <Row className="d-flex flex-wrap g-3">
                    <Col className="d-flex flex-wrap g-3">
                        <Modal show={showModal} onHide={fecharModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>Coletando Livros</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="modal-body-scrool"> 
                                <Row className="d-flex flex-wrap g-3">
                                    <Col className="d-flex flex-wrap"> <GetLivros/> </Col>
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
export default MeusLivros;