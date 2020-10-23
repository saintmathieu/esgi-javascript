function ucfirst(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

console.log(ucfirst('Bonjour la france'));



function capitalize(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
       let splitStr = chaine.toLowerCase().split(' ');
   for (let i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   return splitStr.join(' '); 
}

console.log(capitalize('Bonjour la france'));



function camelCase(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    let splitStr = chaine.toLowerCase().split(' ');
   for (let i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   return splitStr.join(''); 

}

console.log(camelCase('Bonjour la france'));


function snake_case(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    var splitStr = chaine.toLowerCase().split(' ');
    return splitStr.join('_'); 
}

console.log(snake_case('Bonjour la france'));



function leet(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    let crypt = chaine.replace(/[aA]/g, '4').replace(/[eE]/g, '3').replace(/[iI]/g, '1').replace(/[oO]/g, '0').replace(/[uU]/g, '(_)').replace(/[yY]/g, '7');
    return crypt;
}

console.log(leet('anaconda'));




let prairie = { 
    animal: {
        type: {
            name : 'chien'
        }
    }
}

function propAccess(obj, type) {

}

propAccess(prairie, "animal.type.name");