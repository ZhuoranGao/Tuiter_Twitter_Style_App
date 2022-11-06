// import React from "react";
// import homeArray from "./homepost.json";
// import HomePostitem from "./HomePostitem";
// import "./index.css";
//
//
// const HomePostSummeryList = () =>{
//
//     return(
//
//         homeArray.map(home =>
//                          <HomePostitem
//                              key={home._id}
//                              home={home}/>
//
//         )
//
// )
// };
//
// export default HomePostSummeryList;
import React from "react";
import Index from "../tuits";
import WhatsHappening from "./whats-happening";
import "bootstrap-icons/font/bootstrap-icons.css";
const HomeComponent = () => {
    return(
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <Index/>
        </>
    );
};
export default HomeComponent;