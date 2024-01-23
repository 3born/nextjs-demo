import { AdkContainer } from '@advisible/adk-react'

export default function Home() {
    return (
        <div className="home">
            <p>Current route: /</p>
            {/* <AdkContainer id="native-marking" /> */}
            <AdkContainer id="native-article" />
            {/* <AdkContainer id="native-scroll" /> */}
            {/* <AdkContainer id="native-teaser" /> */}
            {/* <AdkContainer id="my-container" /> */}
        </div>
    )
}
