import './submit.css';

function Submit({ type }){
    const sub = () => {
        alert('회원가입이 완료되었습니다');
    }

    return (
        <div id="submit" onClick={sub}>
            {type}
        </div>
    );
}

export default Submit;