import { AdkContainer } from '@advisible/adk-react'

export default function Home() {
    return (
        <div className="home">
            <p>Current route: /</p>
            <AdkContainer id="native-article" />
            {/* <AdkContainer id="my-container" /> */}
        </div>
    )
}
