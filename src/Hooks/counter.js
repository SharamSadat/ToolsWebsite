import Container from "./container.js" ;

function Counter() {

    const [count , increase , decrease] = Container() ;

    return(

           <>
           
             <h1>{count}</h1>
             <button onClick={increase} style={{marginLeft : "10px"}}>افزایش</button>
             <button onClick={decrease}>کاهش</button>
           
           </>

    )

}

export default Counter ;