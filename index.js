
function writeCards(array, string){
    let arr = [];
for (let i = 0; i < array.length; i++){
    arr[i] = "Thank you, " + array[i] + ", for the wonderful " + string + " gift!";
}
return arr;
}

writeCards();

function countDown(count){
while (count >= 0){
    console.log(count--)
}
}
countDown(10);