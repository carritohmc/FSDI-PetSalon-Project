function displayPetCards(){
let card="";
const DIV = document.getElementById("pets");




for(let i=0; i<business.pets.length; i++){
    let color="";

    let pet=business.pets[i];
    if (pet.service=="brush") {
        color="#fff8e8";
    }
    if (pet.service=="vaccine") {
        color="#8c92ac";
    }
    if (pet.service=="nails") {
        color="#a7c2cc";
    }
    if (pet.service=="bath") {
        color="#d7ba89";
    }
    card+=`
    <div>
    <h6>${pet.name}</h6>
    <p>${pet.age}</p>
    <p>${pet.gender}</p>
    <p>${pet.breed}</p>
    <p>${pet.type}</p>
    <p>${pet.service}</p>
    <p>${pet.color}</p>
    
    </div>`;
}
console.log(card);
DIV.innerHTML=card;
document.getElementById("petSummary").innerHTML=`<h3> Number of Pets registered: ${business.pets.length} </h3> `
}

function displayTable(){
    let tableDisplay="";
    const DIV = document.getElementById("petsRow");
    for(let i=0; i<business.pets.length; i++){

        let color="";

        let pet=business.pets[i];
        if (pet.service=="brush") {
            color="#fff8e8";
        }
        if (pet.service=="vaccine") {
            color="#bdd9bf";
        }
        if (pet.service=="nails") {
            color="#ff7f50";
        }
        if (pet.service=="bath") {
            color="#fef250";
        }

        
   
        tableDisplay+=`
        <tr id ="${pet.id}" class="pet" style="background-color:${color}; width:300px">
        <td>${pet.name}</td>
        <td>${pet.age}</td>
        <td>${pet.gender}</td>
        <td>${pet.breed}</td>
        <td>${pet.type}</td>
        <td>${capitalizeFirstLetter(pet.service)}</td>
        <td>${pet.color}</td>
        <td style="width:50px;"; > <button onclick="deletePet(${pet.id});">Delete</button> </td>
        </tr>
        `;
    }
DIV.innerHTML=tableDisplay;
document.getElementById("petSummary").innerHTML=`<h4> Number of Pets registered: ${business.pets.length} </h4> `



}



function capitalizeFirstLetter(word){
    return word.charAt(0).toUpperCase()+word.slice(1);
}

function displayPetNames(){
    for(let i=0; i<business.pets.length; i++){
        document.getElementById("pets").innerHTML+=`
        <li class"pets"> ${business.pets[i].name}</li>`
    }
    
    document.getElementById("petSummary").innerHTML=`<h3> Number of Pets registered: ${business.pets.length} </h3> `
    
    }
    

    function alertDelete(){
        alertDiv.innerHTML =`<div class ="alert">
        Congratulations, a pet was deleted successfully!
        </div>`
        setTimeout(function(){
            alertDiv.innerHTML ="";
        },3000)
        }