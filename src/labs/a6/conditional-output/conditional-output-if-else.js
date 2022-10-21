const ConditionalOutputIfElse = () => {
    const loggedIn = true;
    if(loggedIn) {
        return (<h2 className='text-black bg-white'>Welcome If Else</h2>);
    } else {
        return (<h2 className='text-black bg-white'>Please login If Else</h2>);
    }
};
export default ConditionalOutputIfElse;