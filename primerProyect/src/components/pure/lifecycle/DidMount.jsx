/* eslint-disable no-unused-vars */
import React,{useEffect} from 'react';

const DidMount = () => {
    
    useEffect(() => {
        console.log("Comportamiento antes de que el componente sea añadido al dom, (renderice)")
        
    }, []);
    
    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}

export default DidMount;
