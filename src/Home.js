import React from 'react'

function Home() {
    const handleclick = () => {
        console.log("Hello this is "+"Mohan");
    }
    const handleclickagain = (name,e) => {
        console.log("Hello this is "+ name,e.target);
    }
    return (
        <div className='home'>
            <h2>HomePage</h2>
            <button onClick={handleclick()}>click me</button>
            <button onClick={(e)=>handleclickagain('Sathish',e)}>click me again</button>
        </div>
    );
}
export default Home;