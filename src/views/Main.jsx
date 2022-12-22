import { Outlet } from 'react-router-dom';
import Navbar from '@/components/layouts/Navbar/Navbar';
import Sidebar from '@/components/layouts/SideBar/Sidebar';

function Main() {
    return (
        <div className="flex justify-center py-5 px-5 sm:px-10">
            <div className="w-[1280px] h-full">
                {/* navbar */}
                <Navbar className="mb-10" />
                <div className="flex">
                    {/* sidebar */}
                    <Sidebar />
                    {/* content */}
                    <div className="ml-8">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
