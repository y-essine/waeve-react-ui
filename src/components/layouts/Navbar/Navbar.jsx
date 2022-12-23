import clsx from 'clsx';
import Avatar from '@/components/ui/avatars/Avatar';
import Icon from '@/components/ui/icons/Icon';
import Badge from '@/components/ui/icons/Badge';
import Card from '@/components/ui/card/Card';

const Navbar = ({ className }) => {
    return (
        <div className={clsx('flex', className)}>
            <div className="flex items-center pr-8 w-20 smd:w-40">
                <div className="pl-0 smd:pl-12">
                    <Icon icon="waev" color="#D95353" button size={48} />
                </div>
            </div>
            <div className="flex flex-grow justify-between">
                <div className="pr-3">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="px-4 py-1 h-full hidden xs:block w-24 xs:w-32 md:w-64 lg:w-96 duration-200 transition-w"
                    />
                </div>
                <div className="flex items-center space-x-6">
                    <Icon icon="book" button size={26} disabled />
                    <Icon icon="chat" button size={26} />
                    <Icon icon="notifs" button size={26}>
                        <Badge />
                    </Icon>
                    <Card
                        className="cursor-pointer group hover:bg-secondary duration-200"
                        px
                        hfull
                        vcenter>
                        <div className="flex justify-between items-center space-x-4">
                            <Avatar src="/2.jpg" size={6} />
                            <span className="text-sm text-text-prim font-bold duration-200 capitalize hidden sm:block">
                                YESSINE
                            </span>
                            <Icon icon="caret-down" end group size={8} />
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
