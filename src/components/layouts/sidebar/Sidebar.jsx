import { useState } from 'react';
import SidebarItem from './SidebarItem';
import Icon from '@/components/utils/icons/Icon';
import clsx from 'clsx';

const items = [
    {
        name: 'Home',
        icon: 'home',
        path: '/'
    },
    {
        name: 'Explore',
        icon: 'explore',
        path: '/explore'
    }
];

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div
            className={clsx(
                'flex flex-col items-center lg:w-[18rem] md:w-[10rem] p-5 bg-zinc-900',
                !isOpen && 'lg:w-[10rem]'
            )}>
            <span className="cursor-pointer bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-3xl font-black h-fit select-none">
                Wynd
            </span>

            <div className="flex flex-col mt-10 relative">
                <div
                    className="absolute -right-10"
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}>
                    <Icon icon="pushpin" button />
                </div>
                {items.map((item, index) => (
                    <SidebarItem key={index} item={item} isSidebarOpen={isOpen} />
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
