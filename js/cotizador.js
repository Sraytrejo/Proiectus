let btnQuote = document.getElementById("btnQuote");
let btnPrint = document.getElementById("btnPrint");

btnQuote.addEventListener("click", function (e){
e.preventDefault();
let hours = parseInt(document.getElementById("inputHours").value);
let rate = parseFloat(document.getElementById("inputRate").value);
let iva = document.getElementById("checkIVA").checked; // checked para check box
let extras = document.getElementById("inputExtras");
let changes = parseInt(document.getElementById("inputChanges").value);
let fixedCost = parseFloat(document.getElementById("inputFCost").value);
let email = document.getElementById("inputEmail").value;
let name = document.getElementById("inputName").value;
let cardText = document.getElementById("cardText");
let cardCost = document.getElementById("cardCost");
changes = (isNaN(changes))?0:changes; //if ternario
fixedCost = (isNaN(fixedCost))?0:fixedCost; //if ternario
let flag = true;
//console.log(extras.selectedIndex);
//console.log(extras.options[extras.selectedIndex].value);
//console.log(iva);
//console.log(typeof(iva));


if (isNaN(hours)){ //isNaN valida si es o no un número. NaN = Not a number.
    console.log("Hours is not a number");
    console.log(document.getElementById("inputHours").style.borderColor);
    document.getElementById("inputHours").style.borderColor="#ff0000";
    flag=false;
}//if
else {
    document.getElementById("inputHours").value = hours;
}//else
if (isNaN(rate)){
    console.log("Rate is not a number");
    console.log(document.getElementById("inputRate").style.borderColor);
    document.getElementById("inputRate").style.borderColor="#ff0000";
    flag=false;
}//if
else {
    document.getElementById("inputRate").value = rate;
}//else
if (flag){
//cardText.innerHTML = "$"+quote(hours,rate,iva,extras.selectedIndex).toFixed(2);
//cardText.innerHTML = "$"+quote(hours,rate,iva,extras,changes,fixedCost).toFixed(2);
cardText.innerHTML = `Email: ${email} <br/>Name: ${name} <br>${getRequirements(extras)}`;
cardCost.innerHTML = "$"+quote(hours,rate,iva,extras,changes,fixedCost).toFixed(2);
}
});

btnPrint.addEventListener("click", function (e){ //Evento de botón para imprimir
    e.preventDefault();
    window.print();
});

const getRequirements = (ex) => { // JS + Bootstrap del diablo
    let str = `<br><ul class="list-group col-4">`;
    for (let i = 0; i < ex.options.length; i++) {
                console.log(ex.options[i].selected);       
                if(ex.options[i].selected){
                    str += `<li class="list-group-item list-group-item-action"> ${ex.options[i].text}</li>`;
               } // if
            } // for i
            str += `</ul`
            return str;
};



//CICLO DO WHILE
function quote(h,r,vat,ex,p,fc){
    p /= 100; // p = p/100 //Cost Management
    let result=(h*r)*(1+p);
//
let i=0; // Inicio
    do {
        console.log(ex.options[i].selected);      
        if(ex.options[i].selected){
            result += parseFloat(ex.options[i].value);
        } // if
        i++; // Incremento/Decremento
    } while (i < ex.options.length); //Condición
    result += fc; //Fixed costs
if (vat){
    result *= 1.16;
} // if vat
return result;
}
//---------------------------------------------------------------------------------------
//CICLO WHILE
// function quote(h,r,vat,ex){
//     let result=h*r;
// 
// let i=0; // Inicio
//     while (i < ex.options.length){ //Condición
//         console.log(ex.options[i].selected);      
//         if(ex.options[i].selected){
//             result += parseFloat(ex.options[i].value);
//         } // if
//         i++; // Incremento/Decremento
//     } // while
        
// if (vat){
//     result *= 1.16;
// } // if vat
// return result;
// }

//---------------------------------------------------------------------------------------
//CICLO NUMÉRICO
// function quote(h,r,vat,ex){
//     let result=h*r;
// // for ( inicio ;  condición  ; incremento o decremento)
//     for (let i = 0; i < ex.options.length; i++) {
//         console.log(ex.options[i].selected); //selected para lista de opciones       
//         if(ex.options[i].selected){
//             result += parseFloat(ex.options[i].value);
//         } // if
//     } // for i
        
// if (vat){
//     result *= 1.16;
// } // if vat
// return result;
// } //quote 
//---------------------------------------------------------------------------------------
//USO DE SWITCH
// function quote(h,r,vat,index){
//     let result=h*r;
//     switch (index) {
//         case 1:
//             result += 7000;
//             break;
        
//         case 2:
//             result +=1500;
//             break;

//         case 3: 
//             result +=12000;
//             break;
//         default:
//             break;
//     }

// if (vat){
//     result *= 1.16;
// }
// return result;
// }
//---------------------------------------------------------------------------------------
// USO DE ELSE IF
// function quote(h,r,vat,index){
//     let result=h*r;
   
//     if (index==1){ //Graphic Design
//             result += 7000;
//     }   else if (index==2){ //Hosting
//             result += 1500;
//     }   else if (index==3){ //Support
//             result += 12000
//     }//else if

//     if (vat){
//         result *=1.16;
//     }

//     return result;
// }

//---------------------------------------------------------------------------------------
//  PRIMER EJERCICIO
// function quote(h,r,vat){
//     if (vat==true){  //vat para este caso es un booleano, así que esto es un pleonasmo.
//         return h*r*1.16;
//     } else{
//         return h*r; 
//     }
// } 