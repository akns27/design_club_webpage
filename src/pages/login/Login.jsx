import React from "react";
import { useNavigate } from "react-router-dom";
import Input from '../../components/login&signup/input/Input';
import Logo from '../../components/login&signup/logo/Logo';
import Submit from '../../components/login&signup/submit/Submit';
import './login.css'

function Login(){
    const navigator = useNavigate();

    const goSignup = () => {
        navigator('/signup');
    }

    return (
        <div id='login'>
            <Logo />
            <div className='frm'>
                <p>로그인</p>
                <div className="inputBox">
                    <Input className="id" placeholder="아이디를 입력해주세요" />
                    <Input className='pwd' placeholder="비밀번호를 입력해주세요" />
                </div>
                <Submit type="로그인" />
                <div className='signup' onClick={goSignup}>회원가입</div>
            </div>
        </div>
    );
}

export default  Login;