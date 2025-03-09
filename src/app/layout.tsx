import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { Providers } from '@/store'
import classNames from 'classnames'

import '../styles/global.scss'

const openSans = Open_Sans({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    variable: '--font-open-sans',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Obrio questionnaire',
    description: 'Create your questionnaire',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={classNames(openSans.variable, 'body')}>
                <Providers>
                    <section className='container'>{children}</section>
                </Providers>
            </body>
        </html>
    )
}
