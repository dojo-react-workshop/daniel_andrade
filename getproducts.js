function getProduct(arr){
    const afterProds = [];
    const beforeProds = [];
    let rollingProd = 1;

    for(let i = 0; i<arr.length; i+=1){
        beforeProds[i] = rollingProd;
        rollingProd *= arr[i];
    }
    

    rollingProd = 1;

    for(let i = arr.length-1; i>=0; i-=1){
        afterProds[i] = rollingProd;
        rollingProd *= arr[i];
    }

    const finalProds = [];
    for(let i = 0; i < arr.length; i+=1){
        finalProds[i] = beforeProds[i]*afterProds[i];
    }

    console.log(beforeProds, afterProds, finalProds)
}

getProduct([1,2,3,4])