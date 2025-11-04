import {Card} from "react-bootstrap";
import { MdPerson } from "react-icons/md";

function CartaoAluno()
{
    const nome = localStorage.getItem('nome');
    
    return(
        <Card className="shadow-sm mt-5 mb-5 card-aluno rounded position-relative " style={{width:'450px', height:'220px'}}>
        <Card.Body>
            <div className="d-flex justify-content-between">
                <Card.Text><span className=" campos-aluno">Área de Formação:</span> <br/> <strong>Informática</strong>
                <br/> <span className=" campos-aluno">Curso:</span> <strong>Técnico de Gestão de Sistemas Informáticos</strong>
                </Card.Text>
                <Card.Text className="ms-3">
                    <span className=" campos-aluno">Nome:</span> <strong> {nome} </strong> <br/>
                    <span className=" campos-aluno">Sala:</span> <strong></strong> <br/>
                    <span className=" campos-aluno">Nº Proceso:</span> <strong></strong> <br/>
                </Card.Text>
            </div>
            <Card.Text className="pt-3 ms-3">
                <span className=" campos-aluno">07 - IG13A</span>
            </Card.Text>
            <div className="d-flex justify-content-center position-absolute top-40 start-50 translate-middle ">
                <MdPerson size={60}/>
            </div>
        </Card.Body>
    </Card>
    );
}
export default CartaoAluno;