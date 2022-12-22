import clsx from 'clsx';
import Avatar from '@/components/utils/avatars/Avatar';
import Icon from '@/components/utils/icons/Icon';
import Card from '@/components/Card/Card';

const Navbar = ({ className }) => {
    return (
        <div className={clsx('flex justify-between h-[45px]', className)}>
            <div className="flex items-center smd:contents">
                <Icon icon="waev" hoverColor="#D95353" button size={45} />
                <input
                    type="text"
                    placeholder="Search..."
                    className="hidden sm:block ml-8 lg:ml-0 px-4 py-1 h-full w-[6rem] sm:w-[10rem] md:w-[18rem] lg:w-[35%] duration-200 transition-w"
                />
            </div>
            <div className="flex items-center space-x-6">
                <Icon icon="chat" button size={26} />
                <Icon icon="notifs" button size={26} />
                <Card className="cursor-pointer group" px hfull vcenter>
                    <div className="flex justify-between items-center space-x-4">
                        <Avatar src="https://picsum.photos/200/200" size={6} />
                        <span className="text-sm text-text-prim font-bold duration-200 capitalize hidden 2xs:block">
                            Yassine K.
                        </span>
                        <Icon icon="caret-down" end group size={8} />
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Navbar;
