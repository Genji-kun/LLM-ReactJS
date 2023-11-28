import "./style.css";

const SignIn = () => {
    return (
        <div className="md:page-container p-5 md:p-24 ">
            <form className="login-form">
                <h1 className="login-title">Đăng nhập người dùng</h1>
                <div className="">
                    <h3 className="mb-2">Tên tài khoản</h3>
                    <input className="styled-input" type="text" />
                </div>
                <div className="mb-12" >
                    <h3 className="mb-2">Mật khẩu</h3>
                    <input className="styled-input" type="password" />
                </div>
                <button className="login-btn">Đăng nhập</button>
            </form>
        </div>
    );
};

export default SignIn;