let Name =document.getElementById('name');
let Age = document.getElementById('Age');
let Annual = document.getElementById('Annual');
let numberOfHours = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
let mood = 'create'; 
let tmp ; // varible Global

//create product
let dataPro ;
if(localStorage.product != null){
    dataPro = JSON.parse(localStorage.product)
}else{
    dataPro =[] ;
}


submit.onclick =function(){
    let newpro ={
        Name:Name.value.toLowerCase(),
        Age:Age.value,
        Annual:Annual.value,
        numberOfHours:numberOfHours.value ,
        category:category.value ,
       
    }
    //count
    if(Name.value != ''
     && Age.value !='' 
    ){
    if(mood === 'create'){
 
        dataPro.push(newpro);
    
}else{
dataPro[tmp ]= newpro;
mood = 'create ' ;
submit.innerHTML = 'Create ';
count.style.display = 'block ' ;
    }
    cleardata();
}
    //save localstorge
  localStorage.setItem('product' , JSON.stringify(dataPro))
 
  showData()
}

//clear inputs
function cleardata(){
Name.value='' ;
Age.value='' ;
Annual.value='' ;
numberOfHours.value='' ;
category.value='' ;

}
//read data
function showData(){
   
let table= '';
for(let i= 0 ; i< dataPro.length ; i++){
    table +=`
    <tr>
    <td id="bb">${i+1}</td>
    <td>${dataPro[i].Name}</td>
    <td>${dataPro[i].Age}</td>
    <td>${dataPro[i].Annual}</td>
    <td>${dataPro[i].numberOfHours}</td>
    <td>${dataPro[i].category}</td>
  
     <td><button onclick ="updateData(${i})"  id="update" >update</button></td>
    <td><button onclick = " deleteData(${i})" id="delete" >delete</button></td> 
  </tr>`
    
}
document.getElementById('tbody').innerHTML= table;
let btnDelete = document.getElementById('deleteAll');
if(dataPro.length > 0){
btnDelete.innerHTML = `<button onclick = "deleteAll()">delete All(${dataPro.length})</button>`;
}else{
    btnDelete.innerHTML ='';
}
}
showData()
//delete
function deleteData(i){
dataPro.splice(i ,1);
localStorage.product =JSON.stringify(dataPro);
showData();
}
//delet all 
function deleteAll(){
    localStorage.clear()
    dataPro.splice(0)
    showData();
}
//update
function updateData(i){
    Name.value =dataPro[i].Name;
    Age.value =dataPro[i].Age;
    Annual.value =dataPro[i].Annual;
    numberOfHours.value =dataPro[i].numberOfHours;
    category.value =dataPro[i].category;
   
    submit.innerHTML='Update' ;
    mood = 'update ' ;
    tmp=i;
    scroll({
        top:0 ,
        behavior:'smooth'
    })
    }
    //search
    let searchMood =' Name'; 
   let search =document.getElementById('search')
    search.focus()
    search.value = '';
    showData();
 function searchData(value){
     let table ='';
     for(let i=0 ; i< dataPro.length ; i++){
     if(dataPro[i].Name.includes(value.toLowerCase())){
            table +=`
        <tr>
        <td>${i}</td>
        <td>${dataPro[i].Name}</td>
        <td>${dataPro[i].Age}</td>
        <td>${dataPro[i].Annual}</td>
        <td>${dataPro[i].numberOfHours}</td>
        <td>${dataPro[i].category}</td>
        
        <td><button onclick ="updateData(${i})"  id="update" >update</button></td>
        <td><button onclick = " deleteData(${i})" id="delete" >delete</button></td> 
      </tr>`
 }
document.getElementById('tbody').innerHTML= table;
}}


