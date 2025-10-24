import { useNavigate } from "react-router-dom";
import { Form, FloatingLabel, Button, Container, Row, Col } from "react-bootstrap";
import api from "../Api";
import { Link } from "react-router-dom";
import { useState } from "react";

function PostLivros()
{
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [paginas, setPaginas] = useState('');
    const [editora, setEditora] = useState('');
    const [caminho, setCaminho] = useState('');

    const navigate = useNavigate();

    const handRegister = async (e) => {
        e.preventDefault();
        try {
            await api.post('http://localhost:8000/api/livros/cadastro',{titulo,autor,paginas,editora,caminho});
            alert('Livro cadastrado com sucesso');
            navigate('/dashboard');
        } catch (error) {
            alert('Falha ao cadastrar livro');
            console.log(error);
        }
    }
/*      
Titulo, Autor, Paginas, Editora, Genero, Link/Rota, Ano d publicação, Link da imagem, Idioma, Categoria, 
Formato do livroTamanho do livro, disponível para download(booleano), status
*/

    return(
        <div>
            <Container className="center m-auto">
                <Row>
                    <Col>
                        <h1 className="mt-5 mb-5">CADASTRAR LIVROS</h1>
                        <Form onSubmit={handRegister}>
                            <FloatingLabel controlId="dataTitulo" label="Informe o título do livro" className="bordas mb-3">
                                <Form.Control type="text" aria-label="titulo do livro" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
                            </FloatingLabel>
                            <FloatingLabel controlId="dataAutor" label="Informe o nome do autor" className="bordas mb-3">
                                <Form.Control type="text" aria-label="autor do livro" value={autor} onChange={(e) => setAutor(e.target.value)}/>
                            </FloatingLabel>
                            <FloatingLabel controlId="dataEditora" label="Informe a editora do livro" className="bordas mb-3">
                                <Form.Control type="text" aria-label="editora do livro" value={editora} onChange={(e) => setEditora(e.target.value)}/>
                            </FloatingLabel>
                            <FloatingLabel controlId="dataPaginas" label="Informe a quantidade de páginas do livro" className="bordas mb-3">
                                <Form.Control type="number" aria-label="numero de paginas do livro" value={paginas} onChange={(e) => setPaginas(e.target.value)}/>
                            </FloatingLabel>
                            <FloatingLabel controlId="dataCaminho" label="Informe o caminho/localização do livro" className="bordas mb-3">
                                <Form.Control type="text" aria-label="caminho do livro" value={caminho} onChange={(e) => setCaminho(e.target.value)}/>
                            </FloatingLabel>

                            <Button type="submit" className="mt-5 btn-add center w-50">Cadastrar</Button>
                        </Form>
                        <p className="mt-2 text-black">
                            Voltar para
                            <Link to="/home" className="ms-2 ">Página Inicial</Link>
                        </p>  
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default PostLivros;