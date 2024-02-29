function MemberRegister() {
    const goMemberRegister = () => {
        alert("회원등록!!!");
    }
    return (
        <div>
            <h1>MemberRegister</h1>
            <button type="button" onClick={goMemberRegister}>회원등록!!!</button>
        </div>
    );
}

export default MemberRegister;