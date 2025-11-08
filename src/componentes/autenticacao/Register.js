import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { Form, FloatingLabel, InputGroup, Button, Container, Row, Col } from "react-bootstrap";
import api from "../Api";
import { Link } from "react-router-dom";

function Register()
{
    
        const [email, setEmail] = useState('');
        const [senha, setSenha] = useState('');
        const[nome, setNome] = useState('');
        

        const navigate = useNavigate();
  

        const handRegister = async (e) => {
            e.preventDefault();
            try {
                await api.post('/api/register', {email,password: senha,nome});
                alert('Cadastro realiado com sucesso');
                navigate('/login');
            } catch (error) {
                alert('Erro ao cadastrar, verifique se o email está bem escrito');
                console.log(error);
            }
        }

    return(
        <div id="initial" className="intro">
            <Container>
                <Row className="center">
                    <Col>
                        <h1 className="mt-5 mb-5">CADASTRO</h1>
                        <Form onSubmit={handRegister} >
                            <FloatingLabel controlId="userName" label="Insira o seu nome" className="bordas">
                                <Form.Control type="text" aria-label="nome do usuario" value={nome} onChange={(e) => setNome(e.target.value)} required/>
                            </FloatingLabel>
                            <InputGroup className="input-group  mt-5 bordas mb-5">
                                <InputGroup.Text>@</InputGroup.Text>
                                <FloatingLabel controlId="userEmail" label="Insira o seu endereço de email">
                                    <Form.Control type="email" aria-label="email do usuario" value={email}  onChange={(e) => setEmail(e.target.value)} required/>
                                </FloatingLabel>
                            </InputGroup>
                            <FloatingLabel controlId="userPassword" label="Insira a sua senha" className="bordas">
                                <Form.Control type="password" aria-label="password do usuario" value={senha} onChange={(e) => setSenha(e.target.value)} required/>
                            </FloatingLabel>

                            <Button type="submit" className="mt-5 btn-add center w-50">Cadastrar</Button>
                        </Form>
                        <p className="mt-2">
                            Já possuís uma conta ?
                            <Link to="/login" className="ms-2 link">Faça o Login</Link>
                        </p>  
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Register;