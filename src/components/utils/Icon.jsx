/** @jsx jsx */
import PropTypes from 'prop-types';
import '@/assets/icons/style.css';
import { jsx, css } from '@emotion/react';

const Icon = ({ size, color, icon, disabled }) => {
    Icon.color = color;
    return (
        <span
            className={`icon-${icon} flex justify-center items-center mx-1`}
            css={css`
                color: ${color};
                font-size: ${size}px;
            `}></span>
    );
};

Icon.defaultProps = {
    size: 16,
    color: '#5f5f67',
    viewBox: '0 0 24 24',
    disabled: false
};

Icon.propTypes = {
    icon: PropTypes.string.isRequired
    // className: PropTypes.string
};

export default Icon;
