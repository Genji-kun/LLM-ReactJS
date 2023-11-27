import TreeView from "../../components/TreeView";
import "./style.css";
import { FaCaretDown } from "react-icons/fa6";


const Dictionary = () => {
    return (
        <div >
            <h1 className="title">Bộ pháp điển điện tử</h1>
            <div className="search-grid">
                <div className="relative">
                    <select className="select-title" >
                        <option selected value="">-- Xem theo chủ đề --</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                    <FaCaretDown className="arrow" />
                </div>
                <div className="relative">
                    <select className="select-title" >
                        <option selected>-- Xem theo Đề mục --</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                    <FaCaretDown className="arrow" />
                </div>
                <div >
                    <input className="search-input" type="text" placeholder="Nhập từ khóa để tìm kiếm" />
                </div>
            </div>
            <div className="p-2 lg:p-10">
                <TreeView></TreeView>
            </div>
        </div>
    );
};

export default Dictionary;  