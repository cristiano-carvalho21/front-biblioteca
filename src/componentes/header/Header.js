import styles from "./Header.module.css";
import { Container,Nav,Navbar, NavDropdown, Button } from "react-bootstrap";
import {Link} from "react-router-dom";
import { GiBookshelf } from 'react-icons/gi';
import { FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";


function Header()
{
    const categoria = localStorage.getItem('categoria');
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login')
    };

    return(
        <div>
            <Navbar className="header-container"  expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/home" className="guide">Minha Biblioteca<GiBookshelf className={styles.icon_livros} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className={styles.guides} as={Link} to="/livrosdisponiveis">Livros Disponivéis</Nav.Link>
                            <Nav.Link className={styles.guides} as={Link} to="/meuslivros">Meus Livros</Nav.Link>
                            <Nav.Link className={styles.guides} as={Link} to="/lerdepois">Ler Depois</Nav.Link>
                            <Nav.Link className={styles.guides} as={Link} to="/instituicional">Instituicional</Nav.Link>
                            <NavDropdown title={ <FaUserCircle size={24} color="#ffffff"/> } align="end"> 
                                <NavDropdown.Item as={Link} to="/meuperfil">Meu Perfil</NavDropdown.Item>
                                {categoria === 'admin' && (
                                    <>
                                        <NavDropdown.Item as={Link} to="/postlivros">Cadastrar Livros</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/dashboard">Dashboard</NavDropdown.Item>
                                    </>
                                )}
                                <NavDropdown.Divider/>
                                <NavDropdown.Item as={Button} onClick={handleLogout}> <FiLogOut size={18}/> Terminar Sessão</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default Header;