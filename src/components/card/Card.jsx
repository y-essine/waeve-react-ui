import clsx from 'clsx';

const Card = ({ className, children, title, px, py, center, hcenter, vcenter, hfull }) => {
    return (
        <div
            className={clsx(
                'bg-primary rounded-xl text-slate-300 flex-col h-fit overflow-hidden',
                className,
                center && 'flex items-center justify-center',
                hcenter && 'flex items-center',
                vcenter && 'flex justify-center',
                hfull && '!h-full'
            )}>
            {title && <div className="text-slate-300 font-semibold px-5 py-3">{title}</div>}
            <div className={clsx(px && 'px-5', py && 'py-3')}>{children}</div>
        </div>
    );
};

export default Card;
