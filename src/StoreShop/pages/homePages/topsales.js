
import { Card, Container , Col } from "react-bootstrap";
import backImage from "../../assets/بوت.jpg" ; 
import image1 from "../../assets/ست عادی دخترانه.jpg" ;
import image2 from "../../assets/سه بوت.JPG" ;
import image3 from "../../assets/جمپر سفید.jpg" ;
import { useState } from "react";

function TopSales() {

     const products = [ { img: image2, name: "نام محصول", price: "قیمت" }, { img: image2, name: "نام محصول", price: "قیمت" }, { img: backImage, name: "نام محصول", price: "قیمت" }, { img: image1, name: "نام محصول", price: "قیمت" }, { img: image3, name: "نام محصول", price: "قیمت" } ];
const [index, setIndex] = useState(0); const visibleCards = 4; // نمایش ۴ کارت در هر اسلاید
const next = () => { if (index < products.length - visibleCards) { setIndex(index + 1); } };
const prev = () => { if (index > 0) { setIndex(index - 1); } };
   
return (
<>

    <h1 className="font-black mr-36">پر فروش ترین محصولات</h1>

<div className="relative flex mx-40 items-center mt-8">
   {index > 0 && ( <button onClick={prev} className="absolute bg-black text-white font-bold text-xl right-full mr-2 bg-gray-300 hover:bg-gray-400 rounded-full px-3 py-2" > 
      {"<"} 
      </button> )} 
      <div className="flex gap-6 overflow-hidden w-full">
          {products.slice(index, index + visibleCards).map((product, i) => ( <Card key={i} className="p-4 w-[200px] md:w-[260px] shadow-md"> 
            <img src={product.img} className="h-40 w-full object-cover mb-2 rounded" alt="mehro" />
             <h5>{product.name}</h5> 
             <h5>{product.price}</h5>
              <h6>تعداد موجودی</h6> 
              <h6>برند</h6>
               <h6>آدرس مغازه
                  </h6> </Card> ))} 

                  </div> 
                  {index < products.length - visibleCards && ( <button onClick={next} className="bg-black text-white font-bold text-xl absolute left-full ml-2 bg-gray-300 hover:bg-gray-400 rounded-full px-3 py-2" >
                      {">"} </button> )}

                       </div>

</>
)

}

export default TopSales ;