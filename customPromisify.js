
const util = require('util')

const test = function (obj, hanldeSuccess, data) {
    let { name, name1, err } = obj;
    if(err) {
        return hanldeSuccess(err)
    }
    return hanldeSuccess({name1, name, data});
};

let obj = {
    name: "test",
    name1: "test1",
    err: "y error"
};
let data = {test: "working"};
test[util.promisify.custom] = (obj, data) => {
    return new Promise((resolve, reject) => {
        test(obj, resolve, data);
    });
};

const promisified = util.promisify(test);

console.log(promisified === test[util.promisify.custom]);

test[util.promisify.custom](obj, data)
.then(console.log)
.catch(console.log)