import React from 'react';
import classNames from 'classname';
import './Button.scss';

const Button = ({children, size, color, outline}) => {
    return (
        <button className={classNames('button', size, color, {outline})}>{children}</button>
    );
};

export default Button;