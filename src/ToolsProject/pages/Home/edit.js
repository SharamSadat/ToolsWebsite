import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDarkMode } from "../../component/navbar/darkMode";

function Edit({items , setItems}) {
    const { darkMode } = useDarkMode();

    const [images , setImages] = useState(null)

    const handleFileChange = (e) => {

         const file = e.target.files[0]

         if(file) {

             setImages(URL.createObjectURL(file))

             setFormData(prev => ({...prev , images : file}))

         }

    }

    const {id} = useParams() ;

    const navigate = useNavigate() ;

    const [formData , setFormData] = useState({image : "" , title : "" , price : "" , company : "" , qty : ""})

    useEffect(() => {

         const itemEdit = items.find((item) => item.id === parseInt(id)) 

         if(itemEdit) {

            setFormData(itemEdit)

        }

    } ,[id , items])

    
    const handleChange = (e) => {

         const {name , value} = e.target ; 

         setFormData((prev) => ({...prev , [name] : value})) 

    }

    const handleUpdate = (e) => {

          e.preventDefault() ;

          const updateItems = items.map((item) => item.id === parseInt(id) ? formData : item )
    
    setItems(updateItems)
    navigate("/")
    localStorage.setItem("items" , JSON.stringify(updateItems)) ;

}

return (

        <>
        
             <form onSubmit={handleUpdate} className={`text-center font-bold mt-20 mx-auto border-2 grid gap-3 w-[500px] ${
                darkMode 
                  ? 'border-gray-600 bg-gray-800' 
                  : 'border-gray-200 bg-white'
              }`}>
                
             <h1 className={`font-black mt-16 mb-4 text-[50px] ${darkMode ? 'text-white' : 'text-gray-800'}`}>بخش ویرایش آیتم</h1>

                   <input type="file" name="file" onChange={handleFileChange}
                       accept="image/*"
                       className={`w-[300px] p-4 text-center m-auto ${
                        darkMode 
                          ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400' 
                          : 'border-gray-100'
                      }`}
                   />

                   {images && (<img src={images} alt="Preview" width="100" />)}

                   <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="نام محصول "  
                        className={`w-[300px] p-1 text-center m-auto ${
                          darkMode 
                            ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400' 
                            : 'border-gray-100'
                        }`}
                     />

                    <input type="text" name="price" value={formData.price} onChange={handleChange} placeholder="قیمت محصول"  
                       className={`w-[300px] p-1 text-center m-auto ${
                        darkMode 
                          ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400' 
                          : 'border-gray-100'
                      }`}
                     />

                       <input type="number" name="qty" value={formData.qty} onChange={handleChange} placeholder="تعداد محصول"  
                       className={`w-[300px] p-1 text-center m-auto ${
                        darkMode 
                          ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400' 
                          : 'border-gray-100'
                      }`}
                     />

                    <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="کمپنی محصول"  
                       className={`w-[300px] p-1 text-center m-auto mb-4 ${
                        darkMode 
                          ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400' 
                          : 'border-gray-100'
                      }`}
                     />

                     <button type="submit" className={`font-bold border-2 w-[200px] m-auto mb-4 ${
                        darkMode 
                          ? 'border-gray-500 bg-gray-700 text-white hover:bg-gray-600' 
                          : 'border-gray-300 bg-slate-200 hover:bg-slate-300'
                      }`}>

                                  ذخیره

                     </button>


                
                </form>      

        </>

)

}

export default Edit ;