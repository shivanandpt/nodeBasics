var promisify = require('util').promisify;

var test = function(obj, cb, data) {
    let { name, name1 } = obj;
    return cb(null, {name1, name, data});
}

var testPromise = promisify(test);

testPromise({
    name: "test",
    name1: "test2",
    name3: "test3"
}, null,{ test: "yo "})
.then(val => console.log(val))
.catch(err => console.log("erro", err))


// async function callTest () {
//     let t = await testPromise({
//         name: "test",
//         name1: "test2",
//         name3: "test3"
//     },console.log);
//     console.log("result", typeof t);
// }

// callTest();