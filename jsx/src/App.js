function App(){

    // let message = "Bye";
    // if(Math.random() > 0.5 ){
    //     message = 'Hello';
    // }

    // const date = new Date();
    // const time = date.toLocaleTimeString();
    
    // const inputType = "number";
    // const minValue = 5;
    
    // const message = "hello"

    // return(
    //     <input 
    //     type="number" 
    //     minValue={5}
    //     maxValue={10}
    //     list={[1,2,3]}
    //     style={{color:'red'}}
    //     alt={message}
    //     />
    // ) 
    // return (
    //     <input placeholder="hi there" />
    //   );
    return (
        <div className="wrapper">
          <textarea
            readOnly
            maxLength={3}
            spellCheck={true}
            style={{ backgroundColor: 'gray' }}
          />
        </div>
      ); 
};


export default App;

// const msg = 'hlo'
// export {msg}

export const msg = 'hlo'