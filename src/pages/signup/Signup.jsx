import Input from '../../components/login&signup/input/Input';
import Logo from '../../components/login&signup/logo/Logo';
import Submit from '../../components/login&signup/submit/Submit';
import './signup.css'

function Signup(){
    return (
        <div id='signup'>
            <Logo />
            <div className='frm'>
                <p>회원가입</p>
                <Input className="id" placeholder="아이디를 입력해주세요" />
                <div className='pwd'>
                    <Input placeholder="비밀번호를 입력해주세요" />
                    <Input placeholder="비밀번호를 다시 입력해주세요" />
                </div>
                <Submit type="회원가입" />
            </div>
        </div>
    );
}

export default  Signup;