import {Card, Container} from "react-bootstrap" ;
import backImage from "../../assets/بوت.jpg" ; 
import image1 from "../../assets/ست عادی دخترانه.jpg" ;
import image2 from "../../assets/سه بوت.JPG" ;
import image3 from "../../assets/جمپر سفید.jpg" ;

function ProductCard() {
 
    return(

        <>

             <Container className="p-8 mt-8 flex flex-col md:flex-row rounded-md bg-orange-200 gap-6">
              <div>
                <h1 className="font-mono mt-4">پیشنهادات شگفت انگیز</h1>
                <img src={backImage} alt="mehro" className="size-32 rounded-[500px] w-full h-96 md:w-[500px]"/>
            </div>

            
                <Card className="relative p-4 w-200px md:w-[300px] h-[300px] shadow-lg">
                     
                     <img src={image2} alt="mehro" className="size-32 h-64 mb-4 md:w-[500px]"/>
                    <h5>نام محصول</h5>
                    <h5>قیمت</h5>
                    <h6>تعداد موجودی</h6>
                    <h6>برند</h6>
                    <h6>آدرس مغازه</h6>

                </Card>

                <Card className="relative p-4 w-200px md:w-[300px] h-[300px] shadow-lg">
                     
                     <img src={image1} alt="mehro" className="size-32 h-auto mb-4 md:w-[500px]"/>
                    <h5>نام محصول</h5>
                    <h5>قیمت</h5>
                    <h6>تعداد موجودی</h6>
                    <h6>برند</h6>
                    <h6>آدرس مغازه</h6>

                </Card>

                <Card className="relative p-4 w-200px md:w-[300px] h-[300px] shadow-lg">
                     
                     <img src={image3} alt="mehro" className="size-32 h-auto mb-4 md:w-[500px]"/>
                    <h5>نام محصول</h5>
                    <h5>قیمت</h5>
                    <h6>تعداد موجودی</h6>
                    <h6>برند</h6>
                    <h6>آدرس مغازه</h6>

                </Card>

             </Container>
        
        </>

    )

}

export default ProductCard;