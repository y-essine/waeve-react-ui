import moment from 'moment';
import Icon from '@/components/utils/Icon';

const Card = ({ card }) => {
    // get created at and format with moment to ago
    const createdAt = moment(card.createdAt).fromNow();

    const dividerIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
    );

    return (
        <div className="w-full hover:bg-zinc-500/5 rounded-md duration-200 px-3 py-2">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <div className="w-10 h-10 bg-zinc-500 rounded-full mr-4 cursor-pointer">
                        <img
                            src={card.author.avatar}
                            alt=""
                            className="w-full h-full rounded-full"
                        />
                    </div>
                    <div>
                        <div
                            className="text-sm font-medium capitalize hover:text-zinc-300/90 cursor-pointer"
                            style={{ fontFamily: 'sans-serif', fontWeight: 600 }}>
                            {card.author.name}
                        </div>
                    </div>
                    <div className="mx-1">
                        <div className="opacity-20">{dividerIcon}</div>
                    </div>
                    <div>
                        <div className="text-xs font-normal opacity-50 hover:opacity-75 cursor-pointer">
                            @{card.author.username}
                        </div>
                    </div>
                    <div className="mx-1">
                        <div className="opacity-20">{dividerIcon}</div>
                    </div>
                    <div>
                        <div className="text-xs font-normal opacity-30">{createdAt}</div>
                    </div>
                </div>
                <div className="flex items-center">
                    <Icon icon="ellipsis" size={14} />
                </div>
            </div>
            <div className="mt-2">
                <div className="text-sm font-normal">{card.content}</div>
            </div>
            <div>
                <div className="flex items-center mt-2">
                    <div className="flex items-center">
                        <div className="w-4 h-4 bg-zinc-500 rounded-full cursor-pointer">
                            <img
                                src={card.author.avatar}
                                alt=""
                                className="w-full h-full rounded-full"
                            />
                        </div>
                        <div className="mx-2">
                            <div className="opacity-20">{dividerIcon}</div>
                        </div>
                        {/* like comment share icons */}
                        <div className="flex items-center">
                            <Icon icon="heart" size={12} />
                            <Icon icon="bubble2" size={12} />
                            <Icon icon="redo2" size={12} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
