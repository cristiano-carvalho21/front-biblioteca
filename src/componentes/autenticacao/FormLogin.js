import {Form,FloatingLabel,InputGroup,Button,Row,Col} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaApple, FaGoogle} from "react-icons/fa";
import {Link} from "react-router-dom";
import api from "../Api";

function FormLogin({onclickGoogle,onclickApple})
{
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post('/api/login', {email,password: senha});
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('categoria', res.data.categoria);
            localStorage.setItem('nome', res.data.nome);
            localStorage.setItem('email', res.data.email);
            localStorage.setItem('password', res.data.password);
            console.log(res.data.categoria);
            navigate('/home')
        } catch (error) {
            alert("Falha no Login verifica se os dados são realmente esses, ou então a sua conexão a internet")
            console.log('Erro: ',error);
        }
    }

    return(
        <Row className="center">
            <Col> 
            <h1 className="mt-5 mb-5 center">LOGIN</h1>
            <Form onSubmit={handleLogin}>
                <InputGroup className="input-group mt-5 bordas mb-5">
                    <InputGroup.Text>@</InputGroup.Text>
                    <FloatingLabel controlId="userEmail" label="Insira o seu endereço de email" >
                        <Form.Control type="email" aria-label="email do usuario" value={email} onChange={(e) => setEmail(e.target.value)}   required/>
                    </FloatingLabel>
                </InputGroup>
                <FloatingLabel controlId="userPassword" label="Insira a sua senha" className="bordas mb-5">
                    <Form.Control type="password" aria-label="password do usuario" value={senha} onChange={(e) => setSenha(e.target.value)}   required/>
                </FloatingLabel>
                <Button type="submit" className="btn-add mb-3 center w-50">Login</Button>
                <hr/>
            
                {/*
                    
                <p className="text-center text-black fw-bold">Ou</p>
                <Button className="btn-add mb-3 d-flex w-50  center-no-text" onClick={onclickGoogle}> <FaGoogle size={25} className="bi bi-gear-fill"/>  <span className="ms-2">Entrar com o Google</span> </Button>
                <Button className="btn-add mb-3 d-flex w-50  center-no-text" onClick={onclickApple}> <FaApple size={25} className="bi bi-gear-fill"/>  <span className="ms-2">Entrar com a Apple</span> </Button>
                */}    
                
            </Form>
                  <p className="mt-5 ">
                      Não possuís uma conta ?
                      <Link to="/register" className="ms-2 link">Cadastrar-se</Link>  
                  </p>
            </Col>
        </Row>
    );
}
export default FormLogin;