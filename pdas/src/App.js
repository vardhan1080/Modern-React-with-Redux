import 'bulma/css/bulma.css'
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
    return (
        <div>
            {/* <img src = {AlexaImage}/>
            <img src = {CortanaImage}/>
            <img src = {SiriImage}/> */}
            {/* <img src = "https://unsplash.com/photos/a-computer-screen-with-a-remote-control-on-it-s5kTY-Ve1c0"/> */}
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assitants</p>
                </div>
            </section>
            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard
                                title="Alexa"
                                handle="@alexa"
                                image={AlexaImage}
                                description="Alexa is created and owned by Amazon"
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard
                                title="Cortana"
                                handle="@cortana"
                                image={CortanaImage}
                                description="Cortana is created and owned by Microsoft"
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard
                                title="Siri"
                                handle="@siri"
                                image={SiriImage}
                                description="Siri is created and owned by Apple"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default App;