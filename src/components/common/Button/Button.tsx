import React from 'react';

import './button.scss';

interface ButtonProps {
    title: string;
    primary: boolean;
    type?: 'submit';
    action?: () => void;
}

const Button: React.FunctionComponent<ButtonProps> = ({title, primary, action, type}) => (
    <button className={primary ? 'button primary' : 'button default'} onClick={() => action && action()} type={type} data-testid={title}>
        {title}
    </button>
);

export default Button;
