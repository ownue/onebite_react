import {useState} from 'react';

const Button = ({ text, color, children }) => {
    const onClickButton = (e) => {
        console.log(e);
        console.log(text);
    };

    return (
        <button 
            onClick={onClickButton}
            //  onMouseEnter={onClickButton}
            style={{ color: color }}
        >
            {text} - {color.toUpperCase()}
            {children}
        </button>
    );
};

export default Button;