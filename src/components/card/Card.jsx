function Card(props) {
    return (
        <div className="w-full">
            <div className="flex items-center">
                <div className="w-10 h-10 bg-zinc-500 rounded-full"></div>
                <div className="ml-3">
                    <div className="text-sm font-medium">{props.card.title}</div>
                </div>
            </div>
        </div>
    );
}

export default Card;
