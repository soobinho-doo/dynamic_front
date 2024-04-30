import { Link } from "react-router-dom";
import '../styles/header.css'

const Header = () => {
    return (
        <header>
            <ul>
                <li>
                    <Link to={'/'}>메인 페이지</Link>
                </li>
                <li>
                    <Link to={'/test'}>테스트 페이지</Link>
                </li>
            </ul>
        </header>
    );
}
export default Header;
