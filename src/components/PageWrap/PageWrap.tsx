import { ReactNode } from 'react'
import classNames from 'classnames'

interface PageWrapProps {
    children: ReactNode
    className?: string
}

export function PageWrap({ children, className }: PageWrapProps) {
    return (
        <body className={classNames('body', className)}>
            <section className="container">{children}</section>
        </body>
    )
}
