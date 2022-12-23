import { Outlet } from 'react-router-dom';
import Navbar from '@/components/layouts/navbar/Navbar';
import Sidebar from '@/components/layouts/sidebar/Sidebar';

function Main() {
    return (
        <div className="flex justify-center ">
            <div className="w-[1280px] h-full">
                {/* navbar */}
                <Navbar className="py-5 px-5 sm:px-8" />
                <div className="flex py-5 px-5 sm:px-8">
                    {/* sidebar */}
                    <Sidebar />
                    {/* content */}
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Main;
