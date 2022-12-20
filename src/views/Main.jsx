import { Outlet } from 'react-router-dom';

function Main() {
    return (
        <div className="flex h-screen w-screen">
            <div className="flex justify-center w-[20rem] p-5 bg-zinc-800">
                <h1>Nav</h1>
            </div>
            <div className="flex-1 py-5 px-10 bg-zinc-900">
                <div className="header mb-12">
                    <h1 className="mb-3">Main</h1>
                    <h2 className="text-md opacity-50">Bread &gt; Crumb</h2>
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Main;
