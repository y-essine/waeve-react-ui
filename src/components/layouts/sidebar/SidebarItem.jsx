import Icon from '@/components/utils/icons/Icon';

const SidebarItem = ({ item, isSidebarOpen }) => {
    return (
        <div className="flex items-center cursor-pointer group py-3 rounded-lg duration-200">
            <Icon icon={item.icon} group size={item.size || 30} box={45} />
            {isSidebarOpen && (
                <span className="pl-2 font-medium text-zinc-400 group-hover:text-zinc-300 duration-200 select-none hidden smd:block">
                    {item.name}
                </span>
            )}
        </div>
    );
};

export default SidebarItem;
