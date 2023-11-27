import "./style.css";

const SendNews = () => {
    return (
        <div className="bg-white p-5">
            <h1 className="title">Gửi văn bản, tài liệu</h1>
            <form className="send-form">
                <div className="send-input">
                    <h3>Người gửi</h3>
                    <input type="text" />
                </div>
                <div className="send-input" >
                    <h3>Email người gửi</h3>
                    <input type="email" />
                </div>
                <div className="send-input" >
                    <h3>Cơ quan công tác</h3>
                    <input type="text" />
                </div>
                <div className="send-input" >
                    <h3>Xác thực</h3>
                    <input type="text" />
                </div>
                <div className="send-input mb-5" >
                    <h3>File đính kèm</h3>
                    <input type="file" className="file-input file-input-bordered file-input-md w-full" />
                </div>

                <button className="send-btn">Gửi tài liệu</button>
            </form>
        </div>
    );
};

export default SendNews;