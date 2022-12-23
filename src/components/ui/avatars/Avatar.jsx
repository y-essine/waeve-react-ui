import clsx from 'clsx';
import { css } from '@emotion/react';

const Avatar = ({ src, size, className, border }) => {
    return (
        <div
            className={clsx(`relative rounded-full`, className, border && `border border-primary`)}
            css={css`
                width: ${size * 4}px;
                height: ${size * 4}px;
            `}>
            <img className={`rounded-full h-full w-full`} src={src} alt="" />
        </div>
    );
};

export default Avatar;
