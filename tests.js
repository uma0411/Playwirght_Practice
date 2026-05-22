// function revString(str){
//     let revstr='';
//     for(let i=str.length-1;i>=0;i--){
//         revstr+=str[i];

//     }
//     return revstr;
// }
// console.log(revString("satyauma"))

function revwords(str){
    let words=str.split(' ');
    let result='';
    for(let i=0;i<words.length;i++){
        let word=words[i];
        let rev='';
        for(let j=word.length-1;j>=0;j--){
            rev+=word[j];
        }
        result+=rev;
        if(i!=words.length-1){
            result+=' ';
        }
    }
    return result;
}
console.log(revwords('satya uma'))

function revwords1(str){
    let words1=str.split(' ');
    let result1=''
    for(i=0;i<words1.length;i++){
        let word1=words1[i];
        let rev='';
        for(let j=word1.length-1;j>=0;j--){
            rev+=word1[j]
        }
        result1+=rev
        if(i!=word1.length-1){
            result1+=' '
        }
    }
    return result1;
}
console.log(revwords1("venkata satya"))