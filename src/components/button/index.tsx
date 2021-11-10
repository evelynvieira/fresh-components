import React, { ButtonHTMLAttributes, FC } from 'react'
import * as S from './Button.styled'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

const Button: FC<ButtonProps> = ({ children, ...props }) => {
    return (<S.Button type="button" {...props}>{children}</S.Button>)
}

export default Button