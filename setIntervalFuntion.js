var count = 0;
var timerId;
var printMsg = () => {
    if ( count < 5) {
        console.log(`Hello wrold`);
        count++;
    } else {
        clearInterval(timerId);
    }
};

timerId = setInterval(printMsg, 1 * 1000);
