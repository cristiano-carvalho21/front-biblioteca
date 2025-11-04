import "./Dashboard.css";
import { Container, Button, Table, Modal} from "react-bootstrap";
import { useState, useEffect } from "react";
import api from "../Api";
import ModalEdit from "./modais/ModalEdit";
import ModalDelete from "./modais/ModalDelete";

function Dashboard()
{
    const [livros, setLivros] = useState([]);
    const [livroSelecionado, setLivroSelecionado] = useState(null);
    const [editando, setEditando] = useState([]);
    const [dado, setDado] = useState('');
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);

    useEffect(() =>{
        api.get('/api/livros')
        .then(res => setLivros(res.data))
        .catch(error => console.error('Erro:', error));
    }, []);


    const abrirModalEdit = (livro) => {
        setEditando(livro);
        setDado(livro.titulo);
        setShowModalEdit(true);
    }

 
    const fecharModalEdit = () => setShowModalEdit(false);
    

    const abrirModalDelete = (livro) => {
        setLivroSelecionado(livro);
        setDado(livro.titulo);
        setShowModalDelete(true);
    } 

    
    const fecharModalDelete = () => setShowModalDelete(false);



    return(
        <div>
            <Container className="d-flex flex-column ms-auto">
                <h1>Dashboard</h1>
                <Table striped bordered hover responsive>
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
                
                <ModalEdit show={showModalEdit} onHide={fecharModalEdit}/>
                <ModalDelete show={showModalDelete} onHide={fecharModalDelete} />

            </Container>
        </div>
    );
}
export default Dashboard;