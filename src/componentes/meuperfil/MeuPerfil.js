import { Container} from "react-bootstrap";
import CartaoAluno from"./card/CartaoAluno";
import InfoAluno from "./card/InfoAluno";

function MeuPerfil ()
{
  
    
    return(
        <div>
            <Container className=" d-flex flex-column mx-auto mb-5">
                <CartaoAluno/>
                <InfoAluno/>
            </Container>
        </div>
    )
}
export default MeuPerfil;