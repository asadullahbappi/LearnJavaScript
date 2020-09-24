const willGetYouADog = new Promise ((resolve, reject) =>{
    setTimeout(() => {
        const rand = Math.random();
        if (rand < 0.5) {
            resolve();
        } else {
            reject();
        }
    }, 2000);
    
    
})
willGetYouADog.then(()=>{
    console.log("YAY WE GOT A DOG");
}).catch(()=>{
    console.log("NO DOG");
})