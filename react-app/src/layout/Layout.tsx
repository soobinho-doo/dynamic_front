import { Outlet } from "react-router-dom";
import Header from "./Haeader";

const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
}
export default Layout;