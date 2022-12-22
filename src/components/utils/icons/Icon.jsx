import PropTypes from 'prop-types';
import '@/assets/icons/style.css';
import { css } from '@emotion/react';
import clsx from 'clsx';

const Icon = ({
    icon,
    size,
    color,
    hoverColor,
    button,
    disabled,
    end,
    className,
    group,
    round,
    box
}) => {
    Icon.color = color;
    return (
        <span
            className={clsx(
                `icon-${icon} flex justify-center items-center duration-200`,
                button && 'cursor-pointer',
                className,
                !color && 'text-primary-t',
                !hoverColor && 'hover:text-zinc-300',
                group && 'group-hover:text-zinc-300',
                disabled && 'opacity-50',
                round && 'rounded-full hover:bg-zinc-100/10 p-3'
            )}
            css={css`
                color: ${color};
                ${button &&
                !disabled &&
                `
                    &:hover {
                        color: ${hoverColor};
                    }
                `}
                font-size: ${size}px;
                ${size &&
                !box &&
                `
                    width: ${size}px;
                    height: ${size}px;
                    `}
                ${box &&
                `
                    width: ${box}px;
                    height: ${box}px;
                    `}
                ${end && 'justify-content: end !important;'}
            `}></span>
    );
};

Icon.defaultProps = {
    size: 16,
    disabled: false
};

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default Icon;
