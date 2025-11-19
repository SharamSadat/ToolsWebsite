import "./home.css" ;

import Sarkhat from "./sarkhat";

function Home() {


    let lists = [

        {
          
          id : 1 ,
          title : " نتانیاهو به سرطان مبتلا شد ک" ,
          image : <img src="../component1/assets1/member1.jpg"/> ,
          info : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni deserunt obcaecati eum, perspiciatis sapiente ipsum iure exercitationem accusamus? Corrupti rerum ipsum iure iusto dolorum repellendus officiis culpa quia nesciunt maiores"
        
        } ,
        
        {
          
          id : 2 ,
          title : " نتانیاهو به سرطان مبتلا شد ک" ,
          image : <img src="../component1/assets1/member1.jpg"/> ,
          info : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni deserunt obcaecati eum, perspiciatis sapiente ipsum iure exercitationem accusamus? Corrupti rerum ipsum iure iusto dolorum repellendus officiis culpa quia nesciunt maiores"
        
        } ,
        
        {
          
          id : 3 ,
          title : " نتانیاهو به سرطان مبتلا شد ک" ,
          image : <img src="../component1/assets1/member1.jpg"/> ,
          info : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni deserunt obcaecati eum, perspiciatis sapiente ipsum iure exercitationem accusamus? Corrupti rerum ipsum iure iusto dolorum repellendus officiis culpa quia nesciunt maiores"
           
        } ,
        
        {
          
          id : 4 ,
          title : " نتانیاهو به سرطان مبتلا شد ک" ,
          image : <img src="../component1/assets1/member1.jpg"/> ,
          info : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni deserunt obcaecati eum, perspiciatis sapiente ipsum iure exercitationem accusamus? Corrupti rerum ipsum iure iusto dolorum repellendus officiis culpa quia nesciunt maiores"
        
        } ,
        
        
        ]

return(

<>

<navbar>

<div className="container">

<h1 className="title"><span className="apart">Star</span> News</h1>

<h2><a href="#home">Home</a></h2>
<h2><a href="#services">Services</a></h2>
<h2><a href="#about">AboutMe</a></h2>
<h2><a href="#report">Report</a></h2>

<button>Login</button>


<h1 className= "home" id = "#home">Breaking_News</h1>

{lists.map(list => (<Sarkhat {...list }/>))}  


</div>

</navbar>



</>



)



}

export default Home ;