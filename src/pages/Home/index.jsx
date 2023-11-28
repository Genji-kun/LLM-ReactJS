import { Link } from "react-router-dom";
import "./style.css";
import { LuArrowUpRight } from "react-icons/lu";

const Home = () => {

    return (
        <>
            <div className="grid grid-cols-2 gap-2 w-full items-center">
                <div className="flex flex-col py-10">
                    <h1 className="home-title">Khám phá bộ pháp điển điện tử về bộ <span className="home-title px-4 py-2 text-white bg-secondary shadow-3xl"> Luật Việt Nam</span></h1>
                    <Link to="/legal-dictionary" className="view-now styled-button" >
                        <span>Xem ngay</span>
                        <LuArrowUpRight size="23" />
                    </Link>
                </div>
                <div className="h-[70vh]"></div>
            </div>

        </>

    );

};

export default Home;