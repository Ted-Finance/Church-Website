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
            {variant === 'nav' && <button className={`w-[180px] h-[56px] bg-primary-500 text-secondary text-[16px] hover:bg-primary-600 rounded-[12px] uppercase transition-all duration-[.3s] ${additionalStyle}`}>{label}</button>}
            {variant === 'primary' && <button className={` bg-primary-500 text-[16px] text-secondary hover:bg-primary-600 rounded-[12px] px-[64px] py-[24px] w-fit uppercase transition-all duration-[.3s] ${additionalStyle}`}>{label}</button>}
            {variant === 'secondary' && <button className={` bg-secondary text-[16px] text-primary-500 hover:text-white rounded-[12px] px-[64px] py-[24px] uppercase w-fit transition-all duration-[.3s] ${additionalStyle}`}>{label}</button>}
        </>
    )

}

export default Button