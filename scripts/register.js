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

 let counter=0;

 function Pets(n,a,g,s,b,t,c){
this.name =n;
this.age =a;
this.gender =g;
this.service =s;
this.breed =b;
this.type =t;
this.color=c;
this.id=counter++; 
 }
 
let inputName= document.getElementById("txtName");
let inputAge= document.getElementById("txtAge");
let inputGender= document.getElementById("txtGender");
let inputService= document.getElementById("txtService");
let inputBreed= document.getElementById("txtBreed");
let inputType =document.getElementById("txtType"); 
let inputColor= document.getElementById("txtColor");

 function register(){
    console.log("register");
    console.log(inputName.value,inputAge.value, inputGender.value, inputService.value,inputBreed.value, inputType.value, inputColor.value);
    let newPet = new Pets(inputName.value,inputAge.value, inputGender.value, inputService.value,inputBreed.value, inputType.value,inputColor.value);
    if (isValid(newPet)){
        business.pets.push(newPet);
        alertAdd();
    }
    else {
      //  alert("Please fill out the name");
    }
    visibleTable();
    displayTable();

    clearInputs();




 }
 
 


function clearInputs(){
inputName.value="";
inputAge.value="";
inputGender.value="";
inputService.value="";
inputBreed.value="";
inputType.value="";
inputColor.value="";
visibleTable();
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
    inputColor.classList.remove('error');

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
    if(aPet.color==""){
        valid=false;
        inputColor.classList.add("error");
    }

    return valid;
}

const alertDiv =document.getElementById("alertDiv");

function alertAdd(){
alertDiv.innerHTML =`<div class ="alert">
Congratulations, a pet was added successfully!
</div>`
setTimeout(function(){
    alertDiv.innerHTML ="";
},3000)
}


function deletePet(id){

    let deleteIndex;
    for (let i=0; i<business.pets.length; i++){
        let pet=business.pets[i];
        if (id==pet.id){
            deleteIndex=i;
        }
    }

  document.getElementById(id).remove();
  business.pets.splice(deleteIndex,1);
  displayTable();
  alertDelete();
  visibleTable();
}


function searchPet(){
    let searchString = document.getElementById("txtSearch").value;
    for (let i=0; i<business.pets.length; i++){
        let pet=business.pets[i];
        let tableRow=document.getElementById(pet.id)
        if (searchString.toLowerCase()!="" &&
        (pet.name.toLowerCase().includes(searchString.toLowerCase()) || pet.service.toLowerCase().includes(searchString.toLowerCase()))) {
          tableRow.classList.add("highlight");

        }
        else {
            tableRow.classList.remove("highlight");
            console.log("i did not find it");
         //  tableRow.style.display="none";
        }
    }
}

function init()
{
   let pet = new Pets("Oso",30,"male","nails","Rottweiler","dog","Brown");
   let pet1 = new Pets("Loba",20,"female","brush","Shiba Inu","dog","Beige");
   let pet2 = new Pets("Canibal",70,"male","vaccine","Chihuahua","dog","Black");
   business.pets.push(pet,pet1,pet2);
   displayTable();


}



function visibleTable(){
    
    let tableHeadRow=document.getElementById("petsTable");
    if (business.pets.length==0){    
        tableHeadRow.style.visibility="hidden";
        }
        if (business.pets.length >0) {tableHeadRow.style.visibility="visible";
console.log("we have elements")}
}