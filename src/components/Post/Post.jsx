import moment from 'moment';
import Icon from '@/components/utils/icons/Icon';
import Avatar from '@/components/utils/avatars/Avatar';
import AvatarList from '@/components/utils/avatars/AvatarList';

const Post = ({ post }) => {
    // get created at and format with moment to ago
    const createdAt = moment(post.createdAt).fromNow();

    return (
        <div className="w-full group hover:bg-secondary rounded-md duration-200 px-4 py-3">
            {/* top section */}
            <div className="flex justify-between">
                <div className="flex items-center">
                    <div className="mr-4">
                        <Avatar src={post.author.avatar} size={10} className="cursor-pointer" />
                    </div>
                    <div className="text-sm font-bold capitalize hover:text-zinc-300/80 text-zinc-300 cursor-pointer">
                        {post.author.name}
                    </div>
                    <Icon icon="divide" size={12} />
                    <div className="text-xs font-normal opacity-50 hover:opacity-75 cursor-pointer">
                        @{post.author.username}
                    </div>
                    <Icon icon="divide" size={12} />
                    <div className="text-xs font-normal opacity-30">{createdAt}</div>
                </div>
                <div className="flex items-center">
                    <Icon icon="ellipsis" button round size={14} />
                </div>
            </div>
            {/* content section */}
            <div className="mt-2">
                <div className="text-sm font-normal pr-2 text-zinc-300">{post.content}</div>
            </div>
            {/* interactions section */}
            <div className="flex items-center mt-4">
                <div className="flex items-center">
                    {post.likes.length > 0 && (
                        <>
                            {/* likes avatars */}
                            <div className="mr-2">
                                <AvatarList users={post.likes} size={5} limit={3} />
                            </div>
                            {/* divider dot */}
                            <div>
                                <Icon icon="divide" size={12} />
                            </div>
                        </>
                    )}
                    {/* like comment share icons */}
                    <div className="flex items-center">
                        <Icon icon="favorite" button size={14} />
                        <Icon icon="comment" button size={14} />
                        <Icon icon="share" button size={14} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
