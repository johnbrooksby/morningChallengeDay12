let minNum = 1000000000000000;
let maxNum = 0;
let stockArr = [30, 2, 1, 21, 5];

function best(Arr){
    for(let i = 0; i < Arr.length; i++){
        for(let j = 1; j < Arr.length; j++){
            if (Arr[i] < Arr[j] && Arr[i] < minNum){
                minNum = Arr[i];
            }
            if (Arr[j] > Arr[i] && Arr[j] > maxNum){
                maxNum = Arr[j];
            }
        }
    }
    console.log(`The best possible profit for the day was $${maxNum - minNum} per share.`);
    
}

best(stockArr)