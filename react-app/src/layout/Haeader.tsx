import { Link } from "react-router-dom";
import '../styles/header.css'

const Header = () => {
    return (
        <header>
            <Link to={'/'}>메인 페이지</Link>
            <Link to={'/test'}>테스트 페이지</Link>
        </header>
    );
}
export default Header;
