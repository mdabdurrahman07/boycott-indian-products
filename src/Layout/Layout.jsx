import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

const Layout = () => {
    return (
        <div className="min-h-screen h-full">
            <div className="max-w-[92%] lg:max-w-[1300px] mx-auto">
                <Header />
                <Outlet/>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;