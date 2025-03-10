import { ReactNode } from 'react'
import classNames from 'classnames'

interface PageWrapProps {
    children: ReactNode
    className?: string
}

export function PageWrap({ children, className }: PageWrapProps) {
    return (
        <section className={classNames('body-section', className)}>
            <section className="container">{children}</section>
        </section>
    )
}
