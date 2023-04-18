console.log("practice");



 //creating a student with an object constructor
 function Student(n,a,g){
    this.name =n;
    this.age =a;
    this.gender=g;
 }

 //creating the object
 let student = new Student("Felix",38,"male"); 


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


