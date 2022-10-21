const ConditionalOutputInline = () => {
    const loggedIn = false;
    return (
        <>
            { loggedIn && <h2 className='text-black bg-white'>Welcome Inline</h2>}
            {!loggedIn && <h2 className='text-black bg-white'>Please login Inline</h2>}
        </>
    );
};
export default ConditionalOutputInline;