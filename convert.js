


    
    
   


function returnText(){
    let sphere = document.getElementById("sphere").value;
    let cylinder = document.getElementById("cylinder").value;
    let axis = document.getElementById("axis").value;

    let sphere1 = parseFloat(sphere)
    let cylinder1 = parseFloat(cylinder)
    let axis1 = parseInt(axis)
    
    //alert(`${sphere1} ${cylinder1} ${axis1}`)

    let prescription = convertNotation(sphere1,cylinder1,axis1)
    alert('Your prescription is' + `${prescription}`) 
    
    








}


function convertNotation(sphere, cylinder, axis){
    let sphere3= sphere + cylinder
    let cylinder3 = cylinder * -1
    let axis3 = axis + 90
    if(axis3 > 180) axis3 = axis3 -180;
    if(axis3 < 100) axis3 = 0 + `${axis3}`

    let sphere4 = formatPrescription(sphere3)
    let cylinder4 = formatPrescription(cylinder3)

     return (`${sphere4} ${cylinder4}`+ ' x' + `${axis3}` )
    

    
}







function formatPrescription(prescriptionF){
    let formattedPres = String(prescriptionF)
    if(prescriptionF < 0 ) return formattedPres;
    if(prescriptionF > 0 ) formattedPres = ( "+" + formattedPres);
    let fp = formattedPres
    return fp
    
}




/*  ----------------------part of original
let prescription = convertNotation(sphere2,cylinder2,axis2)
alert(prescription)

function convertNotation(sphere, cylinder, axis){
    let sphere3= sphere + cylinder
    let cylinder3 = cylinder * -1
    let axis3 = axis + 90
    if(axis3 > 180) axis3 = axis3 -180;
    if(axis3 < 100) axis3 = 0 + `${axis3}`

    let sphere4 = formatPrescription(sphere3)
    let cylinder4 = formatPrescription(cylinder3)

     return (`${sphere4} ${cylinder4}`+ ' x' + `${axis3}` )
    

    
}

function formatPrescription(prescriptionF){
        let formattedPres = String(prescriptionF)
        if(prescriptionF < 0 ) return formattedPres;
        if(prescriptionF > 0 ) formattedPres = ( "+" + formattedPres);
        let fp = formattedPres
        return fp
        
}

*/
