import "./Dashboard.css";
import { Container, Button, Table, Modal, Form, FloatingLabel } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";


function Dashboard()
{
    const [livros, setLivros] = useState([]);
    const [livroSelecionado, setLivroSelecionado] = useState(null);
    const [editando, setEditando] = useState([]);
    const [dado, setDado] = useState('');
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);



    useEffect(() =>{
        axios.get('http://localhost:8000/api/livros')
        .then(res => setLivros(res.data))
        .catch(error => console.error('Erro:', error));
    }, []);


    const abrirModalEdit = (livro) => {
        setEditando(livro);
        setDado(livro.titulo);
        setShowModalEdit(true);
    }

    const handleChange = (e) => {
        setEditando({...editando, [e.target.name] : e.target.value});
    }

    const salvarEdicao = async () => {
        try {
            await axios.put(`http://localhost:8000/api/livros/${editando.id}`, editando);
            setShowModalEdit(false);
            alert('Dados Editados com sucesso');
            <Navigate to="/livrosdisponiveis" />
        } catch (error) {
            console.error('Erro ao editar os dados dos livros');
            alert('Erro ao editar os dados dos livros');
        }

    }
    const fecharModalEdit = () => setShowModalEdit(false);
    

    const abrirModalDelete = (livro) => {
        setLivroSelecionado(livro);
        setDado(livro.titulo);
        setShowModalDelete(true);
    } 
    const excluirLivro = async () => {
        try {
            console.log('Livro a excluir com o id: ',livroSelecionado.id);
            await axios.delete(`http://localhost:8000/api/livros/${livroSelecionado.id}`);
            alert('Livro excluído com sucesso');
            setShowModalDelete(false);
            <Navigate to="/livrosdisponiveis" />

        } catch (error) {
            console.error('Erro na exclusão do livro:',error)
            alert('Falha na exclusão do livro');
        }
    }
    
    const fecharModalDelete = () => setShowModalDelete(false);



    return(
        <div>
            <Container className="d-flex flex-column ms-auto">
                <h1>Dashboard</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th className="text-center campos-aluno">#</th>
                            <th className="text-center campos-aluno">Título</th>
                            <th className="text-center campos-aluno">Autor</th>
                            <th className="text-center campos-aluno">Páginas</th>
                            <th className="text-center campos-aluno">Editora</th>
                            <th className="text-center campos-aluno">Acções</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map((livro) =>(
                            <tr>
                                <td className="text-center"> {livro.id} </td>
                                <td className="text-center"> {livro.titulo} </td>
                                <td className="text-center"> {livro.autor} </td>
                                <td className="text-center"> {livro.paginas} </td>
                                <td className="text-center"> {livro.editora} </td>
                                <td className="d-flex gap-3 text-center justify-content-center">
                                    <Button className="btn-secondary" onClick={() => abrirModalEdit(livro)} >Editar </Button>
                                    <Button className="btn-danger" onClick={() => abrirModalDelete(livro)}>Excluir</Button>
                                </td>
                            </tr>
                        ))};
                    </tbody>
                </Table>

                <Modal show={showModalEdit} onHide={fecharModalEdit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editando livro {dado}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> 
                        <Form onSubmit={salvarEdicao}>
                            <FloatingLabel controlId="dataTitulo" label="Informe o título do livro" className="bordas mb-3">
                                <Form.Control type="text" name="titulo" aria-label="titulo do livro" value={editando.titulo} onChange={handleChange}/>
                            </FloatingLabel>
                            <FloatingLabel controlId="dataAutor" label="Informe o nome do autor" className="bordas mb-3">
                                <Form.Control type="text" name="autor" aria-label="autor do livro" value={editando.autor} onChange={handleChange}/>
                            </FloatingLabel>
                            <FloatingLabel controlId="dataEditora" label="Informe a editora do livro" className="bordas mb-3">
                                <Form.Control type="text" name="editora" aria-label="editora do livro" value={editando.editora} onChange={handleChange}/>
                            </FloatingLabel>
                            <FloatingLabel controlId="dataPaginas" label="Informe a quantidade de páginas do livro" className="bordas mb-3">
                                <Form.Control type="number" name="paginas" aria-label="numero de paginas do livro" value={editando.paginas} onChange={handleChange}/>
                            </FloatingLabel>
                            <Button type="submit" className="btn-success">Editar</Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={fecharModalEdit} className="btn-danger">Cancelar</Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={showModalDelete} onHide={fecharModalDelete}>
                    <Modal.Header closeButton>
                        <Modal.Title>Excluindo livro {dado}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> 
                        Tens a certeza que pretendes excluir este livro ?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={fecharModalDelete} className="btn-success">Cancelar</Button>
                        <Button onClick={excluirLivro} className="btn-danger">Deletar</Button>
                    </Modal.Footer>
                </Modal>

            </Container>
        </div>
    );
}
export default Dashboard;