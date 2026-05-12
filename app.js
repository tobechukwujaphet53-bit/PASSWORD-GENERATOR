// const outPut = document.getElementById("out-put");
// const generateBtn = document.getElementById("generate");
// const copyBtn = document.getElementById("copy");

// if(generateBtn && outPut){
//     generateBtn.addEventListener("click", () => {
//          const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//          const lowerCase = "abcdefghijklmnopqrstuvwxyz";
//          const numbers = "0123456789";
//          const symbols = "~!#$%^&*()_+";
        
//          const allOptions = upperCase + lowerCase + numbers + symbols;
         
//     let password = "";

//     for(let i = 0; i < 8;  i++ ){      
//         const randomIndex = (Math.floor(Math.random() * allOptions.length));
//         password += allOptions[randomIndex];
//     }
//       outPut.value = password;
//     });
// }

// if(copyBtn && outPut){
//     copyBtn.addEventListener("click", () => {
//         if(outPut.value === ""){
//             alert("Generate password");
//         }

//         else{
//             outPut.select();
//             navigator.clipboard.writeText(outPut.value);
//             alert("password copied to clipboard");
//         }
//     });
// }
















const inputArea = document.getElementById("out-put");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copybtn");
const copyRight = document.getElementById("copyright");

generateBtn.addEventListener("click", ()=>{
    const upperCase = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
    const lowerCase = "abcdefghijkmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "@#!$%&*~:,.";

    const altogether = upperCase + lowerCase + numbers + symbols;

    let password = "";

    for(let i = 0; i < 10; i++){
        const loop = (Math.floor(Math.random() * altogether.length));
        password += altogether[loop];
    }

    inputArea.value = password;
});


copyBtn.addEventListener("click", () =>{
    if(inputArea.value ===""){
       alert("GENERATE CODE");
    }

    else{
        inputArea.select();
        navigator.clipboard.writeText(inputArea.value);
        alert("CODE COPIED TO CLIPBORAD");
    }
});


const year = new Date().getFullYear();

copyRight.innerText = "©" + year + " All Right Reserved";
