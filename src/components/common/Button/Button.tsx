import React from 'react';

import './button.scss';

interface ButtonProps {
    title: string;
    primary: boolean;
}

const Button: React.FunctionComponent<ButtonProps> = ({title, primary}) => (
    <div className={primary ? 'button primary' : 'button default'}>
        {title}
    </div>
);

export default Button;
