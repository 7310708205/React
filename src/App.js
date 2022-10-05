import React from 'react';
//import ReactDOM from 'react-dom';
import './App.css';

//Props
const Student=(props)=>{
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Course: {props.course}</h2>
      <h3>Branch: {props.branch}</h3>
    </> 
  )
}
//------------------------------------------------------------------
//Destructor
// const Student = ({name, course, branch})=>{
//   return(
//   <h1>Name:{name}</h1>
//   <h2>Course:{course}</h2>
//   <h3>Branch:{branch}</h3>
//   )
// }
function App() {
  return(
    <div className="App">
      <Student name="Babita" course="B.Tech" branch="ECE"/>  
      <Student name="Pooja" course="B.Tech" branch="CSE"/>  
      <Student name="Anchal" course="B.Tech" branch="EEE"/>
      <Student/>
 </div>
  )
}

//-----------------------------------------------------------
//Classes
class Student1 extends React.Component {
  render() {
    return (
      <>
      <h1>Name: Babita</h1>
      <h2>Course: B.Tech</h2>
      <h3>Branch: ECE</h3>
      </>
    )
  }
}

function App() {
  return(
    <>
    <div className="App">
      <Student1 />
    </div>
    </>
  )
}

//------------------------------------------------------------
//Program to Check Palindrome Number

// function isPalindrome() {

//   let temp = 0, a, b, num;
//   num = 1221;
//   b = num;

//   while (num > 0) {
//     a = num % 10;
//     num = parseInt(num / 10);
//     temp = temp * 10 + a;
//   }
//   if (temp == b) {
//     return "Number is palindrome";

//   } else {
//     return "Number is not palindrome";
//   }

// }
// function App() {
//   return (
//     <>
//       <h3>{isPalindrome()}</h3>
//     </>
//   );
// }

//------------------------------------------------------------



export default App;
