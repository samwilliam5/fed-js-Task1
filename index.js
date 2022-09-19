//sum of digits
var addnum = prompt('Enter a number');
var sum = 0;
while (addnum > 0) {
    let rem = addnum % 10;
    sum = sum + rem;
    addnum = parseInt(addnum / 10);

}
console.log(`sum of digit:`, sum);


//number in words
var revnum=prompt('Enter a number');
var rem=0;
while(revnum>0){
     rem=revnum%10
    switch (rem) {
       case 0: console.log('0');
       break;
       case 1: console.log('1');
       break;
       case 2: console.log('2');
       break;
       case 3: console.log('3');
       break;
       case 4: console.log('4');
       break;
       case 5: console.log('5');
       break;
       case 6: console.log('6');
       break;
       case 7: console.log('7');
       break;
       case 8: console.log('8');
       break;
       case 9: console.log('9');
       break;
        default:
            break;
    }
    revnum=(revnum-rem)/10;
}


//number in rev order
var revnum=prompt('Enter a number');
var rem=0;
while(revnum>0){
     rem=revnum%10
    switch (rem) {
       case 0: console.log('zero');
       break;
       case 1: console.log('one');
       break;
       case 2: console.log('Two');
       break;
       case 3: console.log('Three');
       break;
       case 4: console.log('Four');
       break;
       case 5: console.log('Five');
       break;
       case 6: console.log('Six');
       break;
       case 7: console.log('Seven');
       break;
       case 8: console.log('Eight');
       break;
       case 9: console.log('Nine');
       break;
        default:
            break;
    }
    revnum=(`number in rev order`,revnum-rem)/10;
}

