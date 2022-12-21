/** @jsx jsx */
import PropTypes from 'prop-types';
import '@/assets/icons/style.css';
import { jsx, css } from '@emotion/react';

const Icon = ({ icon, size, color, hoverColor, button, disabled }) => {
    Icon.color = color;
    return (
        <span
            className={`icon-${icon} flex justify-center items-center mx-1 ${
                button && 'cursor-pointer'
            }`}
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
                width: ${size}px;
                height: ${size}px;
            `}></span>
    );
};

Icon.defaultProps = {
    size: 16,
    color: '#5f5f67',
    hoverColor: '#a1a1aa',
    disabled: false
};

Icon.propTypes = {
    icon: PropTypes.string.isRequired
    // className: PropTypes.string
};

export default Icon;
