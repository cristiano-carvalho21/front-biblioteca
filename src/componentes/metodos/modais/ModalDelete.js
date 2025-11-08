import {Modal, Button} from "react-bootstrap";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import api from "../../Api";

function ModalDelete({show, onHide})
{
    const [livroSelecionado] = useState(null);
    const [dado, setDado] = useState('');
    const [setShowModalDelete] = useState(false);

    const excluirLivro = async () => {
        try {
            console.log('Livro a excluir com o id: ',livroSelecionado.id);
            setDado(livroSelecionado.titulo);
            await api.delete(`/api/livros/${livroSelecionado.id}`);
            alert("Livro excluído com sucesso")
            
            setShowModalDelete(false);
            <Navigate to="/livrosdisponiveis" />

        } catch (error) {
            console.error('Erro na exclusão do livro:',error);
            alert("Falha na exclusão do livro");
            
            
        }
    }

    return(
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Excluindo livro {dado}</Modal.Title>
            </Modal.Header>
            <Modal.Body> 
                Tens a certeza que pretendes excluir este livro ?
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide} className="btn-success">Cancelar</Button>
                <Button onClick={excluirLivro} className="btn-danger">Deletar</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default ModalDelete;