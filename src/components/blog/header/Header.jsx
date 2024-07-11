import './header.css'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Header({ type }){
    const navigate = useNavigate();
    const [isProfile, setIsProfile] = useState(false);

    useEffect(() => {
        switch (type){
            case "write": setIsProfile(false);
                break;
            case "profile": setIsProfile(true);
                break;
        }
    }, [isProfile])

    const logout = () => {
        alert('로그아웃버튼');
    }

    const writeBlog = () => {
        navigate('/blog/write')
    }

    return (
        <div id="header">
            <img className="logo" src="/logo.svg" alt="logo" />
            {
                isProfile ? (
                    <div className="btnBox">
                        <div className="logoutBtn" onClick={logout}>로그아웃</div>
                        <div className="writeBtn" onClick={writeBlog}>포스트 작성</div>
                    </div>
                ) : (<div></div>)
            }
        </div>
    );
}

export default Header;