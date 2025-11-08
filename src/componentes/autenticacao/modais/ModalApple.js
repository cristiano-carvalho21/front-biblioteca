import {Modal,Form, InputGroup, Button, FloatingLabel} from "react-bootstrap";
import { useState } from "react";
import { FaApple} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import api from "../../Api";

function ModalApple({text,show,onHide,clickCancelar})
{
    const [emailSocial, setEmailSocial] = useState('');
    const [etapa, setEtapa] = useState('');
    const [showModalA, setShowModalA] = useState(false);
    const [showModalVerifyCode, setShowModalVerifyCode] = useState(false);

    const navigate = useNavigate();

    const handleLoginWithApple = async (e) => {
        e.preventDefault();

        try {
        const token = localStorage.getItem('token');
        if(token){
            const res = await api.get('/api/loginWithApple',{emailSocial});
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('email', res.data.email);
            setEtapa('email');
            navigate('/home');
        }else{
                await api.get('/api/loginWithApple',{emailSocial});
                setShowModalVerifyCode(true);
                setShowModalA(false);
        }
        } catch (error) {
            console.error('Erro',error);
        }
        
    }



    return(
        <Modal  show={show} onHide={onHide}>
            <Modal.Header closeButton className="bg-dark text-white">
                <FaApple size={30} className="me-2"/>
                <Modal.Title> {text} </Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-dark text-white"> 
                <Form onSubmit={handleLoginWithApple}>
                    <InputGroup className="bordas mb-3">
                        <InputGroup.Text>@</InputGroup.Text>
                        <FloatingLabel controlId="userEmail" label="Insira o seu endereço de email" >
                            <Form.Control type="email" aria-label="email do usuario" value={emailSocial} onChange={(e) => setEmailSocial(e.target.value)}   required/>
                        </FloatingLabel>
                    </InputGroup>
                    <Button type="submit" className="btn-add">Continuar</Button>
                </Form>
            </Modal.Body>
            <Modal.Footer className="bg-dark text-white">
                <Button  className="btn-secondary fw-bold" onClick={clickCancelar}>Cancelar</Button>
            </Modal.Footer>
            
        </Modal>
    );
}
export default ModalApple;