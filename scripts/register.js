//object literal: name, address{}, telephone number, hours{}, pets{}
let business = {
    name:"Dawg Place",
    telephone:"8091035530",
    address:{
        country:"USA",
        state:"Georgia",
        city:"Atlanta",
        zip:"10051"
    },


    hours:{
        open:"06:00 am",
        close:"17:00"    
    },

    pets:[
        {
            name:"oso",
            age:30,
            gender:"male",
            service:"grooming",
            breed:"Rottweiler"
        },
        {
            name:"loba",
            age:20,
            gender:"female",
            service:"trim",
            breed:"Shiba Inu"
        },
        {
            name:"canibal",
            age:70,
            gender:"male",
            service:"vaccines",
            breed:"Chihuahua"
        }
    ]

 }


function init()
{
    displayPetNames();
}

window.onload=init; 




function displayPetNames(){
for(let i=0; i<business.pets.length; i++){
    document.getElementById("pets").innerHTML+=`
    <li class"pets"> ${business.pets[i].name}</li>`
}

document.getElementById("petSummary").innerHTML=`<h3> Number of Pets registered: ${business.pets.length} </h3> `

}
