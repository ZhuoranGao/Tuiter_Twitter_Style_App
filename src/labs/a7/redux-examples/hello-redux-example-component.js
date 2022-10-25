import React from "react";
import {useSelector} from "react-redux";

// const HelloReduxExampleComponent = () => {
//     const message = useSelector((hello) => hello.message);
//     return(
//         <h3 className='text-black'>{message}</h3>
//     );
// };
const HelloReduxExampleComponent = () => {
    const message = useSelector((state) => state.hello.message);
    return(
        <h1 className='text-black bg-white'>{message}</h1>
    );
};


export default HelloReduxExampleComponent;