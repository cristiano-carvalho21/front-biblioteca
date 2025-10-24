import { Container } from "react-bootstrap";

function About()
{
    return(
        <div>
            <Container className="ms-5 mt-5">
                <h2>Sobre Nós</h2>
                <p className="lead paragrafos">
                    Somos uma companhia que visa promover o progresso do aluno, apoiando-o de forma digital obtendo 
                    os recursos e conteúdos necessário, para o seu aprendizado
                </p>
                <h2>Contactos</h2>
                <p className="lead paragrafos">
                    974107262
                </p>
                <h2>Politica de Privacidade</h2>
                <p className="lead paragrafos">
                    Use a biblioteca apenas para estudar
                </p>
                <h2>Termos e Usos</h2>
                <p className="lead paragrafos">
                    Desfrute dos nossos serviços e divulgue-nos
                </p>
            </Container>
          
        </div>
    )
}
export default About;