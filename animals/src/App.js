import './App.css'
import { useState } from "react";
import AnimalShow from "./AnimalShow";

// function useState(defaultValue){
//     return {
//         yourState: defaultValue,
//         yourSetter: () => {}
//     }
// }

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse']
    return animals[Math.floor(Math.random() * animals.length)]
}

function App() {

    const [animals, setAnimals] = useState([]);

    // const stateConfig = useState(0);
    // const count =  stateConfig.yourState;

    //array destructuring
    // function makeArray(){
    //     return [1, 22, 34, 123, 434];
    // }
    // const [a, b] = makeArray();
    // console.log(a,b);

    // const [count, setCount] = useState(0);
    const handleClick = () => {
        // setCount(count + 1);
        setAnimals([...animals, getRandomAnimal()])
    }

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />;
    });

    return (
        <div className="app">
            {/* <button onClick={handleClick}>Add Animal</button> */}
            <button onClick={handleClick}>Add Animal</button>
            <div className="animal-list">{renderedAnimals}</div>
        </div>
    )
}

export default App;