import {Modal,Form, InputGroup, Button, FloatingLabel} from "react-bootstrap";
import { useState } from "react";
import { FcGoogle} from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import api from "../../Api";

function ModalEmailGoogle({text,show,onHide,clickContinuar,clickCancelar})
{
    
    const [emailSocial, setEmailSocial] = useState('');
    const [etapa, setEtapa] = useState('');
    const navigate = useNavigate();

 

        const handleLoginWithGoogle = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            if(token){
                const res = await api.get('/api/loginWithGoogle',{emailSocial});
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('email', res.data.email);
                setEtapa('email');
                navigate('/home');
            }else{
                await api.get('/api/loginWithGoogle',{emailSocial});
                setEtapa('codigo');
            }
        } catch (error) {
            console.error('Erro',error);
        }
    }

    return(
        <Modal  show={show} onHide={onHide}>
            <Modal.Header closeButton className="bg-dark text-white">
                <FcGoogle size={30} className="me-2"/>
                <Modal.Title> {text} </Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-dark text-white"> 
                <Form onSubmit={handleLoginWithGoogle}>
                    <InputGroup className="bordas mb-3">
                        <InputGroup.Text>@</InputGroup.Text>
                        <FloatingLabel controlId="userEmail" label="Insira o seu endereço de email" >
                            <Form.Control type="email" aria-label="email do usuario" value={emailSocial} onChange={(e) => setEmailSocial(e.target.value)}   required/>
                        </FloatingLabel>
                    </InputGroup>
                    <Button type="submit" onClick={clickContinuar} className="btn-add">Continuar</Button>
                </Form>
            </Modal.Body>
            <Modal.Footer className="bg-dark text-white">
                <Button  className="btn-secondary fw-bold" onClick={clickCancelar}>Cancelar</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default ModalEmailGoogle;