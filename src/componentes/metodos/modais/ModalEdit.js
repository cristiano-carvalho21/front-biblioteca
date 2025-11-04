import {Button, Modal, Form, FloatingLabel} from "react-bootstrap";
import { useState} from "react";
import api from "../../Api";
import { Navigate } from "react-router-dom";

function ModalEdit({show,onHide})
{
    const [editando, setEditando] = useState([]);
    const [dado, setDado] = useState('');
    const [showModalEdit, setShowModalEdit] = useState(false);
    
    const handleChange = (e) => {
        setEditando({...editando, [e.target.name] : e.target.value});
    }

    const salvarEdicao = async () => {
        try {
            await api.put(`/api/livros/${editando.id}`, editando);
            alert("Dados Editados com sucesso");
            
            setShowModalEdit(false);
            <Navigate to="/livrosdisponiveis"/>
        } catch (error) {
            console.error('Erro ao editar os dados dos livros');
            alert("Erro ao editar os dados dos livros")
          
            
        }

    }

    return(
        <Modal show={show} onHide={onHide}>
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
                <Button onClick={onHide} className="btn-danger">Cancelar</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default ModalEdit;