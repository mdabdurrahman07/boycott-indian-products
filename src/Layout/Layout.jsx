import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const Layout = () => {
    return (
        <div className="min-h-screen">
            <div className="max-w-[92%] lg:max-w-[1300px] mx-auto">
                <div>Header</div>
                <Outlet/>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;