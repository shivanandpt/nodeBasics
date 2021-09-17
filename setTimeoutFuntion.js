var printMsg = (seconds) => {
    console.log(`Hello after ${seconds} seconds`)
};

setTimeout(printMsg, 4 * 1000, 4);
setTimeout(printMsg, 8 * 1000, 8);      