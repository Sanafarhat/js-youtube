
// Promises are dependent on each other. if there are 3 blocks, and when the first block is executed, 
// then dependent on it the second block will be executed and so on.
// they process will show if the code is fullfulled or processing or not fulfilled 
// based on the code. the promise wil take two parameters. resolve and reject. if you don't call the parameteres
// then the result will be processing. and if you call, like resolve(), then it is fullfilled. to check it we use
// .then and .catch. they are like conditions. 



function fun1(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(1)
        },1000)
    })
}
function fun2(value){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(value + 1)
        },1000)
    })
}
function fun3(value){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(value + 1)
        },1000)
    })
}

// fun1().then(function(){
//     console.log("Fun-1 Completed");
//     fun2().then(function(){
//         console.log("Fun-2 Completed");
//         fun3().then(function(){
//             console.log("Fun-3 Completed");
//         })
//     })
// })

async function Execute() {
    try{
    const result1 = await fun1()
    const result2 = await fun2(result1)
    const result3 = await fun3(result2)
    console.log(result3);
    }
    catch(err){
        console.log(err)
        
    }
    
}

Execute();