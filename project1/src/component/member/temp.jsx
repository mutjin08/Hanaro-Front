<div className="container mt-3">
    <h1>회원가입</h1>

    <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="아이디" name="user_id" id="user_id" />
        <div className="input-group-append">
            <button className="btn btn-success" type="submit">중복체크</button>
        </div>
    </div>

    <div className="input-group mb-3">
        <input type="password" className="form-control" name="password" id="password" placeholder="페스워드" />
    </div>

    <div className="input-group mb-3">
        <input type="password" className="form-control" name="password2" id="password2" placeholder="패스워드확인" />
    </div>

    <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="이름" name="username" id="username" />
    </div>

    <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="닉네임" name="nickname" id="nickname" />
    </div>

    <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="email" name="email" id="email" />
    </div>

    <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="전화번호" name="phone" id="phone" />
    </div>

    <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="우편번호" name="zipcode" id="zipcode" />
    </div>
    <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="도로주소" name="address1" id="address1" />
    </div>

    <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="상세주소" name="address2" id="address2" />
    </div>

    <div className="container" style="text-align:right">

        <div className="btn-group">

            <button type="button" className="btn btn-primary" onclick="goWrite()">등록</button>&nbsp;&nbsp;

            <button type="button" className="btn btn-primary" onclick="goCancel()">취소</button>&nbsp;&nbsp;
        </div>
    </div>
</div >