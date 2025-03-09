'use client'

import Image from 'next/image'

import classes from './styles/header.module.scss'

import { InnerProps } from './dto/innerProps.type'

import { useGoBack } from './hooks/useGoBack'

export function Header({ prevQuestionId, surveyId }: InnerProps) {
    const handlerGoBack = useGoBack({ prevQuestionId, surveyId })

    return (
        <header className={classes['header']}>
            {prevQuestionId ? (
                <button className={classes['header-back']} onClick={handlerGoBack}>
                    <Image src="/chevron.svg" alt="chevron" width={24} height={24} priority />
                </button>
            ) : null}

            <Image src="/logo.svg" alt="obrio logo" width={16} height={16} priority />
        </header>
    )
}
