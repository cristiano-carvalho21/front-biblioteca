import { Navigate } from "react-router-dom";

function AdminRoute({children})
{
    const categoria = localStorage.getItem('categoria');
        if(categoria !== 'admin'){
         alert('Só Administradores têm acesso a esses conteúdos');
         return <Navigate to = "/home" />
        }
        return children;
    
}
export default AdminRoute;