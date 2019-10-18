/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
    console.time('main1');
    let arePrimeList = [];
    const isPrimeNumber = n => {
        if (n === 2) return true // 2 is a special case
        if (n % 2 === 0) return false
        for (var i = 3; i <= Math.sqrt(n); i = i + 2) {
          if (!isPrimeNumber(i)) continue // <-- recursion here
          if (n % i === 0) return false
        }
        return true;
      }
     for(let i =0;i<2000000;i++){
       arePrimeList.push(isPrimeNumber(i));
     }       
     
    postMessage(arePrimeList);
    console.timeEnd('main1');
});