import { Outlet } from 'react-router-dom';

function Main() {
    return (
        <div className="flex w-full h-full">
            <div className="flex justify-center w-[18rem] p-5 bg-zinc-800">
                <h1>Nav</h1>
            </div>
            <div className="py-5 bg-zinc-900">
                <div className="header px-10 mb-12">
                    <h1 className="mb-3">Main</h1>
                </div>
                <Outlet />
            </div>
        </div>
    );
}

export default Main;
