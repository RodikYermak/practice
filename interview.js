// console.log('You got this!');

const isPalindrome = (str) => {
    // console.log(str);
    let left = 0;
    let right = str.length - 1;

    // for(let i = 0; i < str.length; i++) {
    //     // console.log(str[i]);
    //     if(str[left] === str[right]){
    //         left++;
    //         right--;
    //     } else {
    //         console.log(false);
    //         return false;
    //     }

    //     console.log(true);
    //     return true;
    // }

    // return str;

    // write pailndrome checking loop with left and right pointers
    // while(left < right) {
    //     if(str[left] !== str[right]) {
    //         console.log(false);
    //         return false;
    //     }
    //     left++;
    //     right--;
    // }

    // console.log(true);
    // return true;

    // write hash mat that store count of each character
    // let hash = {};
    // for(let i = 0; i < str.length; i++) {
    //     if(hash[str[i]]) {
    //         hash[str[i]]++;
    //     } else {
    //         hash[str[i]] = 1;
    //     }
    // }
    // console.log(hash);

    // // check if more than one character has odd count
    // let oddCount = 0;
    // for(let key in hash) {
    //     if(hash[key] % 2 !== 0) {
    //         oddCount++;
    //     }
    // }
    // console.log(oddCount);

    // write a matrix to store count of each character
    // let matrix = [];
    // for(let i = 0; i < str.length; i++) {
    //     matrix[i] = [];
    // }
    // console.log(matrix);

    //  write an example of array manipulation
    let arr = [1, 2, 3, 4, 5];
    console.log(arr);
    // arr.push(6);
    // console.log(arr);
    // arr.pop();
    // console.log(arr);
    // arr.shift();
    // console.log(arr);
    // arr.unshift(1);
    // console.log(arr);
    // arr.splice(1, 0, 2);
    // console.log(arr);
    // arr.splice(2, 1);
    // console.log(arr);
    // arr.splice(1, 1, 3);
    // console.log(arr);
};

isPalindrome('racemcar');
// isPalindrome('racecad');
// isPalindrome('racezar');
