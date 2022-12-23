import moment from 'moment';
import Card from '@/components/ui/card/Card';
import Icon from '@/components/ui/icons/Icon';
import Avatar from '@/components/ui/avatars/Avatar';
import AvatarList from '@/components/ui/avatars/AvatarList';

const Post = ({ post }) => {
    // get created at and format with moment to ago
    const createdAt = moment(post.createdAt).fromNow();

    return (
        <Card px py hover>
            <div className="post flex">
                <div className="mr-4">
                    <Avatar src={post.author.avatar} size={10} className="cursor-pointer" />
                </div>
                <div className="w-full h-full">
                    <div className="top-part">
                        <div className="flex flex-grow justify-between">
                            <div className="flex items-center">
                                <div className="text-sm font-bold capitalize hover:text-primary-t/80 text-primary-t cursor-pointer">
                                    {post.author.name}
                                </div>
                                {post.author.verified && (
                                    <div className="pl-3">
                                        <Icon icon="fire" color="#f5911e" size={14} />
                                    </div>
                                )}
                                <Icon icon="dot" size={16} box={30} disabled />
                                <div className="text-xs font-normal opacity-50 hover:opacity-75 cursor-pointer">
                                    @{post.author.username}
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Icon icon="ellipsis" button round size={14} box={25} darker />
                            </div>
                        </div>
                        <div className="text-xs font-normal opacity-30">{createdAt}</div>
                    </div>
                    <div className="content-part mt-3 pr-3">
                        <div className="text-sm font-normal text-slate-300">{post.content}</div>
                    </div>
                    <div className="reactions-part mt-2">
                        <div className="flex items-center">
                            <Icon
                                icon="favorite"
                                size={6}
                                box={16}
                                color="white"
                                circle="#d95353"
                            />
                            <Icon icon="comment" size={6} box={16} color="white" circle="#d95353" />
                            <Icon icon="undo2" size={6} box={16} color="white" circle="#d95353" />
                        </div>
                    </div>
                    <div className="buttons-part pt-2 pr-3">
                        <div className="flex justify-between">
                            <button className="flex items-center justify-center py-2 text-sm font-medium text-tertiary-t hover:text-primary-t duration-200 rounded-lg group">
                                <Icon
                                    icon="favorite"
                                    size={16}
                                    box={20}
                                    group
                                    hoverColor="#d95353"></Icon>
                                <span className="ml-2 text-xs font-semibold hidden xs:block">
                                    Like
                                </span>
                            </button>
                            <button className="flex items-center justify-center py-2 text-sm font-medium text-tertiary-t hover:text-primary-t duration-200 rounded-lg group">
                                <Icon icon="comment" size={16} box={20} group></Icon>
                                <span className="ml-2 text-xs font-semibold hidden xs:block">
                                    Comment
                                </span>
                            </button>
                            <button className="flex items-center justify-center py-2 text-sm font-medium text-tertiary-t hover:text-primary-t duration-200 rounded-lg group">
                                <Icon icon="undo2" size={16} box={20} group></Icon>
                                <span className="ml-2 text-xs font-semibold hidden xs:block">
                                    Repost
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default Post;
