'use client'

import Image from 'next/image'

import classes from './styles/header.module.scss'

import { InnerProps } from './dto/innerProps.type'

import { useGoBack } from './hooks/useGoBack'

// Для іконок я намагався використовувати svg спрайт, який повинен був лежать у public
// та використовувати окремий компонент Icon. Іконки би змінювали свій колір по color в body
// Але щось пішо не так і воно не завелося. Не було часу розбиратися у чому там причини

export function Header({ prevQuestionId, surveyId, isWhite }: InnerProps) {
    const handlerGoBack = useGoBack({ prevQuestionId, surveyId })

    return (
        <header className={classes['header']}>
            {prevQuestionId ? (
                <button className={classes['header-back']} onClick={handlerGoBack}>
                    <Image src={isWhite ? '/chevron-white.svg' : '/chevron.svg'} alt="chevron" width={24} height={24} priority />
                </button>
            ) : null}
            <Image src={isWhite ? '/logo-white.svg' : '/logo.svg'} alt="obrio logo" width={16} height={16} priority />
        </header>
    )
}
