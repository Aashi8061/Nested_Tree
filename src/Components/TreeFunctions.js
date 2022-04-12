import React from 'react'; 
import TreeStruture from './TreeStructure'

function TreeFunctions(){
 const [checkedPartC1,setCheckedPartC1] = React.useState([false,false,false]);
 const [checkedPartC2,setCheckedPartC2] = React.useState([false,false]);
 const [checkedPartB, setCheckedPartB] = React.useState([false,checkedPartC1,false,checkedPartC2]);    
 const [checkedPartA,setCheckedPartA] = React.useState([false,checkedPartB]);

function updateStudentName(NameValues){
setCheckedPartA([checkedPartA[0],setCheckedPartB([checkedPartB[0],setCheckedPartC1(NameValues),checkedPartB[2],checkedPartC2])]);
}

function updateStudentClass(ClassValues){
setCheckedPartA([checkedPartA[0],setCheckedPartB([checkedPartB[0],checkedPartC1,checkedPartB[2],setCheckedPartC2(ClassValues)])]);
}

function updateStudent(Student){
setCheckedPartA([Student,checkedPartB]);
}

function updateClassandClassValues(ClassValue,ClassValues){
    setCheckedPartA([checkedPartA[0],setCheckedPartB([checkedPartB[0],checkedPartC1,ClassValue,setCheckedPartC2(ClassValues)])]);
}

function updateNameandNameValues(NameValue,NameValues){
setCheckedPartA([checkedPartA[0],setCheckedPartB([NameValue,setCheckedPartC1(NameValues),checkedPartB[2],checkedPartC2])]);
}

function updateAll(value){
setCheckedPartA([value,setCheckedPartB([value,setCheckedPartC1([value,value,value]),value,setCheckedPartC2([value,value])])]);
}

function updateClass(ClassValue){
setCheckedPartA([false,setCheckedPartB([checkedPartB[0],checkedPartC1,ClassValue,checkedPartC2])]);
}

function updateName(NameValue){
setCheckedPartA([false,setCheckedPartB([NameValue,checkedPartC1,checkedPartB[2],checkedPartC2])]);
}

function changeHandler0(){
    if(checkedPartA[0] === false)
    updateAll(true)
    else   
    updateAll(false)
}

function changeHandler1(){
    if(checkedPartB[0] === false){
    updateNameandNameValues(true,[true,true,true])
    if(checkedPartB[2] === true)
    updateStudent(true)
}
    else {  
    updateNameandNameValues(false,[false,false,false])
    if(checkedPartA[0] === true)
    updateStudent(false)
}}

function changeHandler2(){  
    if(checkedPartB[2] === false){
    updateClassandClassValues(true,[true,true])
    if(checkedPartB[0]===true)
    updateStudent(true)
} else{
    updateClassandClassValues(false,[false,false])
    if(checkedPartA[0] === true)
    updateStudent(false);  } 
}

function changeHandler3(){
    if(checkedPartC1[0] === false){
    updateStudentName([true,checkedPartC1[1],checkedPartC1[2]])
    if((checkedPartC1[1] && checkedPartC1[2])=== true)
    changeHandler1();
}
    else   {  
    updateStudentName([false,checkedPartC1[1],checkedPartC1[2]])
    if(checkedPartB[0] === true)
    updateName(false)}
}
function changeHandler4(){
    if(checkedPartC1[1] === false){
    updateStudentName([checkedPartC1[0],true,checkedPartC1[2]])
    if((checkedPartC1[0] && checkedPartC1[2])=== true)
    changeHandler1();
}
    else   {  
    updateStudentName([checkedPartC1[0],false,checkedPartC1[2]])
    if(checkedPartB[0] === true)
    updateName(false) }
 
}
function changeHandler5(){
    if(checkedPartC1[2] === false){
    updateStudentName([checkedPartC1[0],checkedPartC1[1],true])
    if((checkedPartC1[0] && checkedPartC1[1])=== true)
    changeHandler1();
}   
    else   {  
    updateStudentName([checkedPartC1[0],checkedPartC1[1],false]) 
    if(checkedPartB[0] === true)
    updateName(false)}

}

function changeHandler6(){
    if(checkedPartC2[0] === false){
    updateStudentClass([true,checkedPartC2[1]]);
    if(checkedPartC2[1] === true)
    changeHandler2();
}
    else   {  
    updateStudentClass([false,checkedPartC2[1]]);
    if(checkedPartB[2] === true)
    updateClass(false)}
} 
function changeHandler7(){ 
    if(checkedPartC2[1] === false){
    updateStudentClass([checkedPartC2[0],true]);
    if(checkedPartC2[0] === true)
    changeHandler2();   }

    else{
    updateStudentClass([checkedPartC2[0],false]);
    if(checkedPartB[2] === true)
    updateClass(false)
}}
return (
<TreeStruture checkedPartA={checkedPartA} checkedPartB={checkedPartB} checkedPartC1={checkedPartC1} checkedPartC2={checkedPartC2}
changeHandler0={changeHandler0} changeHandler1 = {changeHandler1} changeHandler2 ={changeHandler2} changeHandler3={changeHandler3}
changeHandler4={changeHandler4} changeHandler5={changeHandler5} changeHandler6={changeHandler6} changeHandler7=  {changeHandler7}/>
)
}
export default TreeFunctions;
