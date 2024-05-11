import { Link } from "react-router-dom";
import '../styles/header.css'
import IsLoggedIn from "../components/IsLoggedInC";

const Header = () => {
    
    return (
        <header>
            <div>
                <ul>
                    <li>
                        <Link to={'/'}>메인 페이지</Link>
                    </li>
                    <li>
                        <Link to={'/test'}>테스트 페이지</Link>
                    </li>
                </ul>
                <IsLoggedIn/>
            </div>
        </header>
    );
    
}
export default Header;
