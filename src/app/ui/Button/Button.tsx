'use client'

import { ComponentProps, ReactNode } from 'react'
import classNames from 'classnames'
import classes from './styles/button.module.scss'

interface ButtonProps {
    onClick?: ComponentProps<'button'>['onClick']
    type: 'primary' | 'accent'
    children: ReactNode
    btnType?: 'button' | 'submit' | 'reset'
    disabled?: boolean
}

export function Button({ onClick, type, children, btnType = 'button', disabled }: ButtonProps) {
    return (
        <button type={btnType} onClick={onClick} disabled={disabled} className={classNames(classes['button'], classes[`button-${type}`])}>
            {children}
        </button>
    )
}
