import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="flex items-center justify-between max-w-[95%] lg:max-w-[1300px] mx-auto">
                <h2>Copyright © 2024 <span className="font-semibold">Boycott Indian Products</span> all right reserved</h2>
                <h2>Developed by <Link to={"https://devashraful.netlify.app"} className="font-bold underline underline-offset-2" target="_blank">Ashraful</Link> & <Link to={"https://github.com/mdabdurrahman07"} className="font-bold underline underline-offset-2" target="_blank">Jamil</Link>
                </h2>
            </div>
        </div>
    );
};

export default Footer;