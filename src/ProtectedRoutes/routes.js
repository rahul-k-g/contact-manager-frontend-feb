import { Outlet, Navigate } from "react-router-dom";
const ProRoutes=()=>{
    return(
        localStorage.getItem('token') ? <Outlet/> : <Navigate to = "/login"/>
    )
}
export default ProRoutes; 