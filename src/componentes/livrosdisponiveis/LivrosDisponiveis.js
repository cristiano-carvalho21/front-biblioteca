import { Container, FloatingLabel, InputGroup, Form, Button, Row, Col} from "react-bootstrap";
//import styles from "./LivrosDisponiveis.module.css";
import { FiSearch } from "react-icons/fi";
import { useState, useEffect } from "react";
import api from "../Api";
import { Link } from "react-router-dom";

function LivrosDisponiveis()
{
    const [livros, setLivros] = useState([]);
    const [pesquisa, setPesquisa] = useState('');

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

    const livrosFiltrados =  pesquisa.trim() === "" ? livros :
        livros.filter((livro) =>
        livro.titulo.toLowerCase().includes(pesquisa.toLowerCase())
    );

    return(
        <div>
            <Container className="mt-5 ms-auto position-relative">
                <h1>Livros Disponivéis</h1>
                <InputGroup className="input-group w-50 mt-5 bordas mb-5">
                    <FloatingLabel controlId="pesquisarLivros" label="Pesquise o tiítulo de um livro" className=" w-50 campos-aluno">
                        <Form.Control type="search" aria-label="busca dos livros" value={pesquisa} onChange={(e) => setPesquisa(e.target.value)}/>
                    </FloatingLabel>
                    <InputGroup.Text className="pesquisar"> <Button className="bg-transparent border-0"><FiSearch size={24} className="btn-pesquisar"/></Button> </InputGroup.Text>
                </InputGroup>
                <Container className="card">
                        <Row>
                            {livrosFiltrados.length > 0 ? (
                                livrosFiltrados.map((livro) => (
                                    <Col xs={12} sm={6} md={4} lg={3}>
                                        <div className="card-livros">
                                            <img className="img-fluid pt-3 mt-3" src="./../imagens/img-primeiras_tags.jpg" alt="imagem carregando" loading="lazy"/>
                                            <Link to={livro.caminho}>{livro.titulo}</Link>
                                            <p>{livro.paginas} páginas</p>
                                        </div> 
                                    </Col>  
                                ))
                            
                            ):(
                                <Col xs={12} sm={6} md={4} lg={3}>
                                    <div className="card-livros">
                                        <p>Nenhum livro disponível</p>
                                    </div> 
                                </Col> 
                            )}
                        </Row>
                </Container>
            </Container>
           
        </div>
    )
}
export default LivrosDisponiveis;