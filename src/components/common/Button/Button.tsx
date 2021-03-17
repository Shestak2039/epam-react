import React from 'react';

import './button.scss';

interface ButtonProps {
    title: string;
    primary: boolean;
    action?: () => void;
}

const Button: React.FunctionComponent<ButtonProps> = ({title, primary, action}) => (
    <div className={primary ? 'button primary' : 'button default'} onClick={() => action && action()}>
        {title}
    </div>
);

export default Button;
