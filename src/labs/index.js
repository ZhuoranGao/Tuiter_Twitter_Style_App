import Assignment6 from "./a6";
import Nav from "../nav";
import Assignment7 from "./a7";
import {Routes, Route} from "react-router";
// import '../vendors/bootstrap/css/bootstrap.min.css';

// function Labs() {
//     return (
//         <div className='text-black bg-white'>
//             <Nav/>
//             <Assignment6/>
//         </div>
//     );
// }
// export default Labs;
function Labs() {
    return (
        <div >
            <Nav/>
            <Routes>
                <Route index
                       element={<Assignment6/>}/>
                <Route path="a7"
                       element={<Assignment7/>}/>
            </Routes>
        </div>
    );
}

export default Labs;