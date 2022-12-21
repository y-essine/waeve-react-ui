const Avatar = ({ src, size, className }) => {
    return (
        <div className={`relative rounded-full ${className}`}>
            <img className={`w-${size} h-${size} rounded-full`} src={src} alt="" />
        </div>
    );
};

export default Avatar;
