import "./style.css";

const SignIn = () => {
    return (
        <div className="md:page-container p-5 md:p-10 ">
            <form className="login-form">
                <h1 className="login-title">Đăng nhập người dùng</h1>
                <div className="login-input">
                    <h3>Tên tài khoản</h3>
                    <input type="text" />
                </div>
                <div className="login-input mb-5" >
                    <h3>Mật khẩu</h3>
                    <input type="password" />
                </div>
                <button className="login-btn">Đăng nhập</button>
            </form>
        </div>
    );
};

export default SignIn;