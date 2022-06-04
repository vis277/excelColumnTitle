/**
 * iterate in the loop till input is greater than zero
 * find the rem by dividing it by zero
 * if rem===0 then unshift z to empty array
 * change input to input=(input-26)/26
 * if input >26
 * then  input=parseInt(input/26);
 * 
 */

let input=705;
 var convertToTitle = function(input) {
    let obj={
    1:"A",
    2:"B",
    3:"C",
    4:"D",
    5:"E",
    6:"F",
    7:"G",
    8:"H",
    9:"I",
    10:"J",
    11:"K",
    12:"L",
    13:"M",
    14:"N",
    15:"O",
    16:"P",
    17:"Q",
    18:"R",
    19:"S",
    20:"T",
    21:"U",
    22:"V",
    23:"W",
    24:"X",
    25:"Y",
    26:"Z"  
    }
    // console.log(obj[3]);
    
    // let input= 702;
    let arr=[];
    let rem=0;
    let blank="";
    let count=0;
    while(input>0){
        rem=input%26;
    if(rem===0){
    arr.unshift(obj[26]);
     input=(input-26)/26;
//     if(input>26){
//         input=parseInt(input/26);
//     }
    
    
    
    }
    else{
    
        arr.unshift(obj[rem]);
        
        input=parseInt(input/26);
    }
    
        
        
    }
    for(let i=0;i<arr.length;i++){
        blank =blank+arr[i];
    }
    
     return blank
    };

    console.log(convertToTitle(input));
