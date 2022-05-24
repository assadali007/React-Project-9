import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Arrayadd() {

    const [thingsArray,setThingsArray] = React.useState(['Thing 1', 'Thing 2'])
    console.log(thingsArray)

    const thingsElements = thingsArray.map(item => <p key={item}>{item}</p>)

    function addItem() {
        setThingsArray(prestate => ([...prestate,`Thing ${thingsArray.length + 1}`]))
    }


    return (
        <>
        <button onClick={addItem}>Add item</button>
        {thingsElements}
        </>
    )

    
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Arrayadd />

);


