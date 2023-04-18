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

    ]

 }

 function Pets(n,a,g,s,b,t){
this.name =n;
this.age =a;
this.gender =g;
this.service =s;
this.breed =b;
this.type =t;
 }
 
let inputName= document.getElementById("txtName");
let inputAge= document.getElementById("txtAge");
let inputGender= document.getElementById("txtGender");
let inputService= document.getElementById("txtService");
let inputBreed= document.getElementById("txtBreed");
let inputType =document.getElementById("txtType"); 

 function register(){
    console.log("register");

    console.log(inputName.value,inputAge.value, inputGender.value, inputService.value,inputBreed.value, inputType.value);
    let newPet = new Pets(inputName.value,inputAge.value, inputGender.value, inputService.value,inputBreed.value, inputType.value);
    if (isValid(newPet)){
        business.pets.push(newPet);
    }
    else {
      //  alert("Please fill out the name");
    }
    console.log(business.pets.inputService);
    clearInputs();
 }
 
 
 function init()
 {
    let pet = new Pets("Oso",30,"male","grooming","Rottweiler");
    let pet1 = new Pets("Loba",20,"female","trim","Shiba Inu");
    let pet2 = new Pets("Canibal",70,"male","vaccines","Chihuahua");
    business.pets.push(pet,pet1,pet2);
    displayPetNames();
}

function clearInputs(){
inputName.value="";
inputAge.value="";
inputGender.value="";
inputService.value="";
inputBreed.value="";
inputType.value="";
}

window.onload=init; 

function isValid(aPet){
    let valid=true;

    inputName.classList.remove('error'); 
    inputAge.classList.remove('error'); 
    inputGender.classList.remove('error'); 
    inputService.classList.remove('error'); 
    inputBreed.classList.remove('error'); 
    inputType.classList.remove('error'); 

    if(aPet.name=="") {
        valid=false;
        inputName.classList.add("error");
    }
    if(aPet.age=="") {
        valid=false;
        inputAge.classList.add("error");
    }
    if(aPet.gender=="") {
        valid=false;
        inputGender.classList.add("error");
    }
    if(aPet.service=="") {
        valid=false;
        inputService.classList.add("error");
    }
    if(aPet.breed=="") {
        valid=false;
        inputBreed.classList.add("error");
    }
    
    if(aPet.type=="") {
        valid=false;
        inputType.classList.add("error");
    }
    

    return valid;
}



function displayPetNames(){
for(let i=0; i<business.pets.length; i++){
    document.getElementById("pets").innerHTML+=`
    <li class"pets"> ${business.pets[i].name}</li>`
}

document.getElementById("petSummary").innerHTML=`<h3> Number of Pets registered: ${business.pets.length} </h3> `

}
