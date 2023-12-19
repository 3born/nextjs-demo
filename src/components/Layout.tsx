import Head from 'next/head'
import { ReactNode } from 'react'
import { AdkContainer } from '@advisible/adk-react'

import { Header } from './Header'

type Props = {
    children: ReactNode
}

export const Layout = (props: Props) => {
    const { children } = props
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" />
                <title>Advisible | Next.js Demo</title>
            </Head>
            <Header />
            <main>
                <p>Clicking the RELOAD button reloads all containers with the <code>reloadable</code> prop.</p>
                <div>
                    <h3>AdkContainers in <code>Layout.tsx</code> (rendered on all routes)</h3>
                    <p>The AdkContainers are attached on the inital render cycle and stay attached until page refresh, or by passing the <code>reloadable</code> prop and calling <code>reloadContainers()</code>.</p>
                </div>
                <section>
                    <p>Always rendered</p>
                    <div>
                        <small>Only reloaded on page refresh:</small>
                        <AdkContainer id="my-container" />
                    </div>
                    <div>
                        <small>Also reloaded by clicking RELOAD button:</small>
                        <AdkContainer id="my-container" reloadable="testId" />
                    </div>
                    <div>
                        <small>Also reloaded on route change:</small>
                        <AdkContainer id="my-container" reloadable="routeChange" />
                    </div>
                </section>
                <div>
                    <h3>AdkContainer inside page component (<code>index.tsx</code> or <code>test.tsx</code>)</h3>
                    <p>The AdkContainer is attached when the page component is rendered. Changing route detaches the currently rendered AdkContainer and attaches the AdkContainer in the newly rendered page component.</p>
                </div>
                {children}
            </main>
        </>
    )
}