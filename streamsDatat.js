process.stdin.resume();
process.stdin.setEncoding("utf-8")
var stdin_input = "";

process.stdin.on('data', (data) =>{
    stdin_input += data;
})

process.stdin.on('end', () =>{
    /* Extra code to get string trimmed from the input */
    main(stdin_input.trim().split('\n').map(string => {
        return string.trim();
    }))
})

function main(input) {

    /* Extra code to get input in format (still in array format need to change it depending on the problem being solved) */
    let line1 = input[0].split(" ").map(x => Number(x));
    let line2 = input[1].split(" ").map(x => Number(x));
    line2 = Array.from(line2).map(x => Number(x))

    /* --------------Ends--------------------- */
    

    /*
        When we have time limit on the coding test, we expect to get input
        which is already processed. Figuring out the input in every single
        prblem is time consuming and reduces the time for test itself
    */

    process.stdout.write("Hi,   " + input + ".")

}