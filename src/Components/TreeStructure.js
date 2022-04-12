import React from 'react'; 
import  FormControlLabel from '@material-ui/core/FormControlLabel'; 
import  Checkbox  from '@material-ui/core/Checkbox';  
import  Box  from '@material-ui/core/Box'; 
import classes from './TreeStructure.module.css'
export default function TreeStructure(props) {         

  return (  
    <>  
    <div className = {classes.color}>
    <FormControlLabel className = {classes.size} label="Students"
        control={
          <Checkbox
            checked = {props.checkedPartA[0]}
            onChange={props.changeHandler0}/>
        }/>
      <Box sx={{ display: 'flex', flexDirection: 'column', ml: 7}}>
      <FormControlLabel className = {classes.size} label="Name"
        control={
          <Checkbox
            checked = {props.checkedPartB[0]}
            onChange={props.changeHandler1}/>
        }/>
       <Box sx={{ display: 'flex', flexDirection: 'column', ml: 7}}>
        <FormControlLabel control={<Checkbox checked={props.checkedPartC1[0]}/>} label="Vivek" onChange={props.changeHandler3}/>
        <FormControlLabel control={<Checkbox checked={props.checkedPartC1[1]}/>} label="Kalpana" onChange={props.changeHandler4} />
        <FormControlLabel control={<Checkbox checked={props.checkedPartC1[2]}/>} label="Mohit" onChange={props.changeHandler5} />
       </Box>
       <FormControlLabel className = {classes.size} label="Class"
        control={
          <Checkbox
            checked = {props.checkedPartB[2]}
            onChange={props.changeHandler2}/>
        }/>
       <Box sx={{ display: 'flex', flexDirection: 'column', ml: 7}}>
        <FormControlLabel control={<Checkbox checked={props.checkedPartC2[0]}/>} label="10th" onChange={props.changeHandler6}/>
        <FormControlLabel control={<Checkbox checked={props.checkedPartC2[1]}/>} label="12th" onChange={props.changeHandler7} />
       </Box>      
       </Box>
    </div>
    </>  
  );  
}  