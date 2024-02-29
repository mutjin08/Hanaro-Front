import { useNavigate } from "react-router-dom";

function MainPage() {
    const navigate = useNavigate();
    const goMemberRegister = () => {
        alert("회원가입 페이지로 이동!!!");
        navigate("/member");
    }
    return (
        <div>
            <h1>MainPage</h1>
            <button type="button" onClick={goMemberRegister}>회원가입</button>
        </div>
    );
}

export default MainPage;