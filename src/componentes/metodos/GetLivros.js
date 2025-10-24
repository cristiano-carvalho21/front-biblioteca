import { Container,Row, Col, Form} from "react-bootstrap";
import { useState, useEffect } from "react";
import api from "../Api";
import { Link } from "react-router-dom";

function GetLivros(){

    const [livros, setLivros] = useState([]);

    useEffect(() => {
        const fetchDados = async() => {
            try {
                const res = await api.get('/api/livros');
                setLivros(res.data);
                
            } catch (error) {
                console.error('Erro', error);
            }
        }
       fetchDados();
    }, []);    

    return(
        <Container className="gap-3">
            <Row className="d-flex flex-wrap g-3 ">
                {livros.map((livro) =>(
                        <Col  className="d-flex flex-wrap g-3">
                            <div>
                                <img className="img-fluid img-modal" src="./../imagens/capa1.jpg" alt=""/>
                                <Link to={livro.caminho}>{livro.titulo}</Link>
                                <p>
                                    {livro.paginas} páginas
                                    <Form>
                                        <Form.Check  type="checkbox"/>
                                    </Form>
                                </p>
                            </div> 
                        </Col> 
                ))}
            
            </Row>
        </Container>
    );
}
export default GetLivros; 