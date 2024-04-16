import 'bulma/css/bulma.css'
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App(){
    return(
        <div>
            {/* <img src = {AlexaImage}/>
            <img src = {CortanaImage}/>
            <img src = {SiriImage}/> */}
            {/* <img src = "https://unsplash.com/photos/a-computer-screen-with-a-remote-control-on-it-s5kTY-Ve1c0"/> */}
            <div>Personal Digital Assitants</div>
            <ProfileCard title="Alexa" handle="@alexa" image={AlexaImage}/>
            <ProfileCard title="Cortana" handle="@cortana" image={CortanaImage}/>
            <ProfileCard title="Siri" handle="@siri" image={SiriImage}/>
        </div>
    )
}

export default App;