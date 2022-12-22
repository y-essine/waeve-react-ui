import { useState } from 'react';
import SidebarItem from '@/components/layouts/Sidebar/SidebarItem';
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
        icon: 'compass2',
        path: '/explore'
    },
    {
        name: 'Settings',
        icon: 'wrench',
        path: '/settings',
        size: 26
    }
];

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className={clsx('w-fit', !isOpen && 'w-[4rem]')}>
            <div className="flex flex-col relative w-full space-y-3">
                {/* <div
                    className="absolute -right-10"
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}>
                    <Icon icon="pushpin" button />
                </div> */}
                {items.map((item, index) => (
                    <SidebarItem key={index} item={item} isSidebarOpen={isOpen} />
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
