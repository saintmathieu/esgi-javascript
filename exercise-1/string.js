function ucfirst(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}



function capitalize(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
       let splitStr = chaine.toLowerCase().split(' ');
   for (let i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   return splitStr.join(' '); 
}


function camelCase(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    let splitStr = chaine.toLowerCase().split(' ');
   for (let i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   return splitStr.join(''); 

}


function snake_case(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    var splitStr = chaine.toLowerCase().split(' ');
    return splitStr.join('_'); 
}


function leet(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    let crypt = chaine.replace(/[aA]/g, '4').replace(/[eE]/g, '3').replace(/[iI]/g, '1').replace(/[oO]/g, '0').replace(/[uU]/g, '(_)').replace(/[yY]/g, '7');
    return crypt;
}



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


/* Exos - partie 2 */

function typeCheckV1(arg1, arg2){
    let verifType = '';
    if(typeof(arg1) == 'number' && arg2 == 'number') {
        verifType = true;
    }
    else if(typeof(arg1) == 'string' && arg2 == 'string'){
        verifType = true;
    }
    else if(typeof(arg1) == 'boolean' && arg2 == 'boolean') {
        verifType = true;
    }
    else if(arg1 == '' && arg2 == 'null') {
        verifType = true;
    }
    console.log(verifType);
}
typeCheckV1('','null');