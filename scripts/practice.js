console.log("practice");
//object literal
 let student = {
    name:"Felix",
    age:39,
    grades:[3.9,3.8,4.0],
    address:{
        country:"USA",
        state:"Georgia",
        city:"Atlanta",

    }
 }

//object literal
 let student1 = {
    name:"Mario",
    age:39,
    grades:[3.9,3.8,4.0],
    address:{
        country:"MEX",
        state:"Baja California",
        city:"Tijuana",

    }
 }

//object literal
 let student2 = {
    name:"Rafael",
    age:39,
    grades:[3.9,3.8,4.0],
    address:{
        country:"MEX",
        state:"Baja California",
        city:"Tijuana",

    }
 }

 console.log(student, student1, student2);
 //or console.log(student.age);
 // or console.log(student['name']); 

 //to display the script in html
 document.write(student.name);

 document.write(`
 <div class="student">
    <p>Name: ${student.name}</p>
    <p>Age: ${student.age}</p>
    <p>Country: ${student.address.country}</p>
</div>
 `);
