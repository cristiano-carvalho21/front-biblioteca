import { Container, Button, Form } from "react-bootstrap";

function InfoAluno()
{
    const nome = localStorage.getItem('nome');
    const email = localStorage.getItem('email');
    const senha = localStorage.getItem('password');

    return(
        <Container>
            <h2 className="mt-3" >Dados Pessoais</h2> <hr/>
            <p>
                <strong>Nome:</strong> {nome} <br/>
            </p>
            <h2 className="mt-3" >Contactos</h2> <hr/>
            <p>
                <strong>Email:</strong> {email}
            </p>
            <h2 className="mt-3" >Segurança</h2> <hr/>
            <p>
                <strong>Senha:</strong> {senha} <br/>
                <Button className="mt-3 mb-3 btn-add">Editar</Button>
            </p>
            <h2 className="mt-3 mb-3" >Preferências de Notificações</h2> <hr/>
            <p>
                Deseja que te notifiquemos sempre que se fizer uma atualização sobre novos livros ?
            </p>
            <Form className="d-flex ">
                <Form.Label className="me-3 fw-bold">Sim</Form.Label>
                <Form.Check type="switch"/>
            </Form>
        </Container>
    );
}
export default InfoAluno;