import clsx from 'clsx';
import { Link } from 'react-router-dom';
import Icon from '@/components/utils/icons/Icon';

const SidebarItem = ({ item, isSidebarOpen, isActive }) => {
    return (
        <Link
            to={item.path}
            className="flex items-center cursor-pointer group rounded-lg w-12 smd:w-32">
            <Icon icon={item.icon} group size={item.size || 30} box={48} isActive={isActive} />
            {isSidebarOpen && (
                <span
                    className={clsx(
                        'ml-2 font-medium text-zinc-400 group-hover:text-zinc-300 duration-200 select-none hidden smd:block',
                        isActive && '!text-zinc-300'
                    )}>
                    {item.name}
                </span>
            )}
        </Link>
    );
};

export default SidebarItem;
