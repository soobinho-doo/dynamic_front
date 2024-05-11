import { useAppSelector, useAppDispatch } from "../utils/hooks";
import { login, logout } from "../reducer/isLoggedIn";

const IsLoggedIn = () => {
    const wetherLogin = useAppSelector((state)=> {return state.isLoggedIn.value});
    const dispatch = useAppDispatch();
    
    const loginAction = () => {
        dispatch(login());
    }
    const logoutAction = () => {
        dispatch(logout());
    }

    if(wetherLogin){
        return (
            <div>
                <button type="button" onClick={logoutAction}>로그아웃</button>
                <span>로그인 중 입니다</span>
            </div>
        );
    }else{
        return (
            <div>
                <button type="button" onClick={loginAction}>로그인</button>
                <span>로그인 해야 돼</span>
            </div>
        );
    }
}
export default IsLoggedIn;