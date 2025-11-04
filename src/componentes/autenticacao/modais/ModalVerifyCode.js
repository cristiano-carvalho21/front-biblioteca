//import './ModalVerifyCode.css';
import {Modal,Form,Button,Row,Col} from "react-bootstrap";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../Api";

function ModalVerifyCode({show,onHide,onVerificar})
{
     const [codigo, setCodigo] = useState(new Array(6).fill(''));
     const [etapa, setEtapa] = useState('');
     const inputsRef = useRef([]);
    const navigate = useNavigate();

     const handleChange = (index, value) => {
        if(!/^\d?$/.test(value)){
            return;
        }
        const novoCodigo = [...codigo];
        novoCodigo[index] = value;
        setCodigo(novoCodigo);

        if(value && index < 5){
            inputsRef.current[index + 1]?.focus();    
        }
     };

     const handleVerificarCodigo = async (emailSocial) => {
        
        
        const codigoFinal = codigo.join('');
        onVerificar(codigoFinal);
        const res = await api.post(`/api/verifyCode/${emailSocial}`,{codigoFinal});
        const data = await res.json();
        if(data.token){
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('email', res.data.email);
            setEtapa('codigo');
            navigate('/home');
        }else{
            alert('Codigo invalido ou incorreto');
        }
    }
     /*const handleSubmit = (e) => {
        e.preventDefault();
        const codigoFinal = codigo.join('');
        onVerificar(codigoFinal);
     }
      */

    return(
        <Modal size="sm" show={show} onHide={onHide} centered >
            <Modal.Header closeButton>
                <Modal.Title>Código de Verificação</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className="text-center">Insira o código de 6 dígitos que enviamos no seu email.</p>
                <Form onSubmit={handleVerificarCodigo}>
                    <Row className="justify-content-center">
                        {codigo.map((num,i) => (
                            <Col xs={2} key={i}>
                                <Form.Control type="text" key={i} maxLength={1} value={num} onChange={(e) => handleChange(i, e.target.value)} ref={(el) => (inputsRef.current[i] = el)} className="text-center border-bottom border-dark bg-transparent text-dark fs-4" />
                            </Col>
                        ))}
                        <Button type="submit" className="mt-3 btn-add" >Confirmar</Button>
                    </Row>
                </Form>
            </Modal.Body>
        </Modal>
    );
}
export default ModalVerifyCode;