import { Container } from "react-bootstrap";

function MeuHistorico()
{
    return(
        <div>
            <Container className=" d-flex flex-column mx-auto mt-5 ms-5">
                <h1>Histórico</h1>    
                <p className="lead paragrafos">Sem nenhum histórico de momento</p>
            </Container>
        </div>
    )
}
export default MeuHistorico;