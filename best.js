let profit = 0;
let stockArr = [7, 9, 5, 6, 3, 2];

function best(Arr){
    for(let i = 0; i < Arr.length; i++){
        for(let j = i + 1; j < Arr.length; j++){
            if (Arr[i] < Arr[j] && Arr[j] - Arr[i] > profit){
                profit = Arr[j] - Arr[i];
            }


        }
    }
    console.log(`The best possible profit for the day was $${profit} per share.`);
    
}

best(stockArr)

// function best(Arr){
//     for (let i = 0; i < Arr.length; i++){
//         let currentBuyNumber = Arr[i];
//         for (let k = i + 1; k < Arr.length; k++){
//             let currentSelNumber = Arr[k];
//             let currentProfit = currentSelNumber - currentBuyNumber;
//             if (currentProfit > profit){
//                 profit = currentProfit;
//             }
//         }
//     }
//     return profit
// }

// best(stockArr)
// console.log(`The best possible profit for the day was $${profit} per share.`);