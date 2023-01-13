// Name: Nathália Pimentel de Assis
//University: University of Brasilia
//Bachelor student in eletronic engineering course
//Date: November 4th 2022


function trocaVogais(string) {
  let arr = "";
  for (let i = 0; i < string.length; i++){
    let char = string[i];
    if(char === "a" ||char === "e" ||char=== "i" ||char=== "o" ||char=== "u"){
      arr = arr +  "1";
    } else {
      arr += char;
    }
  }return arr;
}
