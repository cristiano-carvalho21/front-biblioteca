import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FloatingLabel, InputGroup, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import api from "../Api";

function Login()
{
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigate = useNavigate();

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
            alert('Falha no Login');
            console.log('Erro: ',error);
        }
    }

    return(
        <div id="initial" className="intro">
            <Container>
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
                    </Form>
                    <Button as={Link} to="/register" className="btn-add center w-50">Cadastrar-se</Button>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}
export default Login;