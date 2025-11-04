import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container,Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalVerifyCode from "./modais/ModalVerifyCode";
import ModalEmailGoogle from "./modais/ModalEmailGoogle";
import ModalApple from "./modais/ModalApple";
import FormLogin from "./FormLogin";



function Login()
{
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [emailSocial, setEmailSocial] = useState('');
    const [etapa, setEtapa] = useState('');
    const [codigo, setCodigo] = useState('');

    const [showModalG, setShowModalG] = useState(false);
    const [showModalA, setShowModalA] = useState(false);
    
    const [showModalVerifyCode, setShowModalVerifyCode] = useState(false);
    const navigate = useNavigate();

    const abrirModalGoogle = () => {
        setShowModalG(true);
    }
    const abrirModalApple = () => {
        setShowModalA(true);
    }
    const abrirModalVerifyCode = () => {
        setShowModalVerifyCode(true);
        setShowModalA(false);
        setShowModalG(false);
    }
    const VerificarCodigo = (codigo) => {
        console.log('Código digitado: ', codigo)
    }
    
    return(
        <div id="initial" className="intro">
            <Container>
                
                {etapa === 'email' && (
                    <>
                        <ModalEmailGoogle show={showModalG} onHide={() => setShowModalG(false)} text="Entrando com a sua conta Google" clickContinuar={() => abrirModalVerifyCode(emailSocial)} clickCancelar={() => setShowModalG(false)}/>
                        <ModalApple show={showModalA} onHide={() => setShowModalA(false)} text="Entrando com a sua conta Apple" clickContinuar={() => abrirModalVerifyCode(emailSocial)} clickCancelar={() => setShowModalA(false)}/>
                    </>
                )}
                
                {etapa === 'codigo' &&(
                     <ModalVerifyCode onVerificar={VerificarCodigo} show={showModalVerifyCode} onHide={() => setShowModalVerifyCode(false)}/>
                )}
            
                <ModalEmailGoogle show={showModalG} onHide={() => setShowModalG(false)} text="Entrando com a sua conta Google" clickContinuar={() => abrirModalVerifyCode(emailSocial)} clickCancelar={() => setShowModalG(false)}/>
                <ModalApple show={showModalA} onHide={() => setShowModalA(false)} text="Entrando com a sua conta Apple" clickContinuar={() => abrirModalVerifyCode(emailSocial)} clickCancelar={() => setShowModalA(false)}/>
                <ModalVerifyCode onVerificar={VerificarCodigo} show={showModalVerifyCode} onHide={() => setShowModalVerifyCode(false)}/>
                
                <FormLogin onclickGoogle={abrirModalGoogle} onclickApple={abrirModalApple}/>
                <Button as={Link} to="/register" className="btn-add mt-3"></Button>
            </Container>

        </div>
    );
}
export default Login;