import React from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'nav';

type ButtonProps = {
    variant: ButtonVariant;
    label: string;
    additionalStyle?: string
};

const Button: React.FC<ButtonProps> = ({ variant, label, additionalStyle}) => {
    return (
        <>
            {variant === 'nav' && <button className={`w-[180px] h-[56px] bg-primary-500 text-secondary hover:bg-primary-600 rounded-[12px] uppercase ${additionalStyle}`}>{label}</button>}
            {variant === 'primary' && <button className={`rounded-[12px] bg-primary-500 text-secondary hover:bg-primary-600 rounded-md px-[64px] py-[24px] w-fit uppercase ${additionalStyle}`}>{label}</button>}
            {variant === 'secondary' && <button className={`rounded-[12px] bg-secondary hover:text-white rounded-md px-[64px] py-[24px] uppercase w-fit ${additionalStyle}`}>{label}</button>}
        </>
    )

}

export default Button