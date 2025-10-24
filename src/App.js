import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Container, Spinner } from 'react-bootstrap';
import React, {lazy, Suspense} from "react";
const Home = lazy(() => import ('./componentes/home/Home'));
const Instituicional = lazy(() => import ('./componentes/about/Instituicional'));
const Header = lazy(() => import ('./componentes/header/Header'));
const LivrosDisponiveis = lazy(() => import ('./componentes/livrosdisponiveis/LivrosDisponiveis'));
const MeusLivros = lazy(() => import ('./componentes/meuslivros/MeusLivros'));
const LerDepois = lazy(() => import ('./componentes/ler/LerDepois'));
const MeuPerfil = lazy(() => import ('./componentes/meuperfil/MeuPerfil'));
const PostLivros = lazy(() => import ('./componentes/metodos/PostLivros'));
const Dashboard = lazy(() => import ('./componentes/metodos/Dashboardd'));
const Footer = lazy(() => import ('./componentes/footer/Footer'));
const AdminRoute = lazy(() => import ('./componentes/meuslivros/AdminRoute'));
const PrivateRoute = lazy(() => import ('./componentes/PrivateRoute'));
const Register = lazy(() => import ('./componentes/autenticacao/Register'));
const Login = lazy(() => import ('./componentes/autenticacao/Login'));



function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Suspense fallback={<Spinner animation='border'/>}>
          <Container className='container-body m-0 p-0 ps-0 mr-0'>
            <Routes>
              <Route path='/register'
                element={<Register/>}
              />
              <Route path='/login'
                element={<Login/>}
              />
              <Route path='/livrosdisponiveis'
                element={ <PrivateRoute> <LivrosDisponiveis/> </PrivateRoute> }
              />
                <Route path='/meuslivros'
                element={ <PrivateRoute> <MeusLivros/> </PrivateRoute> }
              />
                <Route path='/lerdepois'
                element={<PrivateRoute> <LerDepois/> </PrivateRoute> }
              />
              <Route path='/instituicional'
                element={ <PrivateRoute> <Instituicional/> </PrivateRoute> }
              />
              <Route path='/home'
                element={ <PrivateRoute> <Home/> </PrivateRoute> }
              />
              <Route path='/meuperfil'
                element={ <PrivateRoute> <MeuPerfil/> </PrivateRoute> }
              />
              <Route path='/postlivros'
                element={ <AdminRoute> <PostLivros/> </AdminRoute> }
              />
              <Route path='/dashboard'
                element={ <AdminRoute> <Dashboard/> </AdminRoute> }
              />
            </Routes>
          </Container>
        </Suspense>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
