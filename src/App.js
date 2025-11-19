// import Card from "./card" ;

// proj2

// import Home from "./component1/home/home";
// import Service from "./component1/services/service";

// import MessageBox from "./MessageBox";


// import Calculator from "./Calculator";


// import { useState } from "react";
// import Notif from "./notif";
// import "./App.css" ;
// import Inc from "./inc";

// import Box from "./Box.js"



// Ex Project 1 

// import About from "./component/about/about";
// import Blog from "./component/blog/blogs";
// import Footer from "./component/footer/Footer";
// import Header from "./component/header/Header";
// import Service from "./component/services/Service";

// import Calculator from './calculator/calculator';







function App() {


// //   // Ex 1 :

// // // const Cards = [ 

// // // {Name : "کفش 1 " , pic : "./img/shoe1-2.jpg"} , 
// // // {Name : "کفش 2 " , pic : "./img/shoe1-3.jpg"} ,
// // // {Name : "کفش 3 " , pic: "./img/shoe1-2.jpg"} 


// // // ] ;

// // // Proj1

// // // return (


// // <>

//  {/* <header>Header</header>

// <section> 

//  Ex 1 :


//   // <div className="row">

//   // <Card {...Cards[0]}/>
//   // <Card {...Cards[1]}/>
//   // <Card {...Cards[2]}/>

//   // </div> 

// </section> 

// <footer>Footer</footer> */}


// {/* Ex2  */} 
// {/* 
// <Header />

// <About />

// <Service />

// <Blog />

// <Footer /> 

// ) */}

// {/* Ex 3 Form */}

// {/* function clickHandler(e) {

// console.log(e.target.value) 

// }

// return (

// <form >

// <input onChange={(e) => clickHandler(e)}  type="text" />

// </form>

// );

// </> */}


// const eventHandler = (e) => {

//  console.log("this is My City : " + e.target.selectedOptions) ;

// let selected = [...e.target.selectedOptions].map(option => option.value) ;

// console.log(selected) ;

// if(e.target.checked) {

//   console.log("This lien is Ticked") ;

// }

// else {

// console.log("This is not Ticked") ;

// }

// }

// return (

// <form>

{/* <select multiple onChange = {eventHandler}>

<option value="Asfahan">Asfahan</option>

<option value="Tehran">Tehran</option>

<option value="Sheraz">Sheraz</option>

<option value="Kerman">Kerman</option>

</select> */}


{/* <input type="checkbox" onChange = {eventHandler} />

</form>

  )

} */}

// Ex form And State

// const eventHandler = (e) => {


//   if(e.target.checked) {

//      console.log() ;

//     }

//   else {

//       let pop = console.log(pop(e.target.value)) ;

//   }

// }

// return( 

// <form>

// <input type="checkbox" onChange = {eventHandler} value = "Check1" />Check1 
// <br />
// <input type="checkbox" onChange = {eventHandler}  value = "Check2" />Check2
// <br />
// <input type="checkbox" onChange = {eventHandler} value = "Check3" />Check3
// <br />
// <input type="checkbox" onChange = {eventHandler} value = "Check4" />Check4

// </form>

// )


// use State in variables 

// let [number , setNumber] = useState(0) ;

// const clickHandler = () => {

//  number = number + 1  ;

//  setNumber(number) ;

// }

// return(

//   <>
//   <h1>{number}</h1>

//   <button onClick={clickHandler}>Increase</button>

//   </>


// )


// Ex use State in Arrays 

// let [fev , setFev] = useState(["Rice"]) ;

// let [names , setNames] = useState(["Sharam"]) ;

// const clickHandler = () => {

// setFev([...fev , "jamnastic" , "meat" , "water"]) ;

// setNames([...names , "Shabir" , "sadid" , "Oziar" , "omid" , "Ahmad" , "Ismail" , "Wais" , "Nasib"]) ;

// }

// return(

//   <>

//   <button onClick={clickHandler}>Change State</button>

//   </>


// )

// Ex use State in Objects

// let [fev , setFev] = useState({name : "Sharam" , age : "22" }) ;

// const clickHandler = () => {

// setFev({...fev , name : "milad"}) ;



// }

// return(

//   <>

//   <button onClick={clickHandler}>Change State</button>

//   </>


// )

// Ex state with objects and arrays

// let [dow , setDow] = useState(["Images"]) ;

// let [obj , setObj] = useState({Object : "object"}) ;

// const total = () => {

// setDow([...dow , "musices" , "songs" , "Videos" , "And More..."]) ;

// setObj({...obj , name : "Objects" , value : "big" , Date : "2025/01/23"}) ;

// }

// return(

// <button onClick={total}>Add Elements For This Tags!</button>

// )

// return (

// <>

// <navbar>

//   <h1>Next1Code</h1>

//   <Notif notifCount = {12} />

// </navbar>
// </>
// )

// ٍEx increase 

// return ( <Inc />)


// Calculator

// return(

// <Calculator />

// )

// success

// return( 

// <MessageBox />

// )


// const Names = [

// {

// id : 1 ,
// name : "sharam" ,
// age : 20 ,
// work : student ,

// } ,

// {

//   id : 2 ,
//   name : "Tamim" ,
//   age : 20 ,
//   work : "student" ,
  
//   } ,

//   {

//     id : 3 ,
//     name : "Omid" ,
//     age : 20 ,
//     work : "student" ,
    
//     } ,

//     {

//       id : 4 ,
//       name : "Morwat" ,
//       age : 20 ,
//       work : "student" ,
      
//       } ,


// ]


// return (

// <>

// {Names.map(name => (<Box {...name} />))}


// </>


// )

// Project 2 

// return (

//   <>

//   <Home />

//   <Service />

//   </>

// )

// Calclator 2 

// return (
// <Calculator />
// )

}

export default App ;
