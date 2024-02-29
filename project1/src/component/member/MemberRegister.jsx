function MemberRegister() {
    const [memberInfo, setMemberInfo] = useState({});
    const [idCheckYn, setIdCheckYn] = useState("N");

    const {userid, password, password2, username, phone, email} = memberInfo;

    //onChange 이벤트 처리 tag들에 id나 name 속성이 부여되어야 구분 가능하다
    const onChange = (e) => {
        // e는 이벤트 객체이다
        // e.target 이벤트가 발생한 객체 참조
        // e.target.value 입력된 값
        // e.target.name name속성값
        const {value, name} = e.target; 
        setMemberInfo({...memberInfo, [name]:value});
        console.log(memberInfo);
    }
    return (
        <div>
            <h1>MemberRegister</h1>
            <div className="container mt-3">
                <h1>회원가입</h1>

                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="아이디" name="userid" id="userid" onChange={onChange} value={userid} />
                    <div className="input-group-append">
                        <button className="btn btn-success" type="submit">중복체크</button>
                    </div>
                </div>

                <div className="input-group mb-3">
                    <input type="password" className="form-control" name="password" id="password" placeholder="패스워드" onChange={onChange} value={password}/>
                </div>

                <div className="input-group mb-3">
                    <input type="password" className="form-control" name="password2" id="password2" placeholder="패스워드확인" onChange={onChange} value={password2} />
                </div>

                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="이름" name="username" id="username" onChange={onChange} value={username} />
                </div>

                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="email" name="email" id="email" onChange={onChange} value={email} />
                </div>

                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="전화번호" name="phone" id="phone" onChange={onChange} value={phone} />
                </div>

                <div className="container" style={{"text-align":"right"}}>

                    <div className="btn-group">

                        <button type="button" className="btn btn-primary" onclick={()=>null}>등록</button>&nbsp;&nbsp;

                        <button type="button" className="btn btn-primary" onclick={()=>null}>취소</button>&nbsp;&nbsp;
                    </div>
                </div>
            </div >
        </div>
    );
}

export default MemberRegister;