import Icon from '@/components/utils/icons/Icon';

const SidebarItem = ({ item, isSidebarOpen }) => {
    return (
        <div className="flex items-center cursor-pointer group hover:bg-zinc-500/10 p-3 rounded-lg duration-200">
            <Icon icon={item.icon} group size={20} />
            {isSidebarOpen && (
                <span className="ml-3 text-sm font-medium text-zinc-400 group-hover:text-zinc-300 duration-200 select-none">
                    {item.name}
                </span>
            )}
        </div>
    );
};

export default SidebarItem;
