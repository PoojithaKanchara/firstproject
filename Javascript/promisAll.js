const promis1= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("promis1 resolvd")
    }, 1000)
})

const promis2= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("promis2 resolvd")
    }, 1500)
})
const promis3= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("promis3 resolvd")
    }, 2000)
})


Promise.allSettled([promis1,promis2,promis3]).then(data=>{
    console.log(data)
}).then(err=>{
    console.log(err);
})
