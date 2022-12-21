import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/layouts/sidebar/Sidebar';

function Main() {
    return (
        <div className="flex w-full h-full">
            {/* sidebar */}
            <Sidebar />
            <div className="flex flex-grow flex-col pb-5 bg-zinc-900">
                {/* header */}
                <div className="p-10"></div>
                {/* content */}
                <Outlet />
            </div>
        </div>
    );
}

export default Main;
