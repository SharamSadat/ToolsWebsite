import "./addArtical.css" ;
import { Form , Button } from "react-bootstrap";
import MyNavbar from "../../components/navbar/Navbar";
import axios from "axios";
import { useState } from "react";

function AddArtical() {

     const [inputData , setInputData] = useState([]) ;

    const addArticalHandler = () => {

        axios 
            .post("http://localhost:5000/articles" , inputData) ;

    }

      const changeHandler = (e) => {

          setInputData({...inputData , [e.target.name] : e.target.value }) ;

      }

    return (

    <>
      <MyNavbar />
      <div className="formContainer">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>عنوان مقاله</Form.Label>
            <Form.Control name="title" onChange={changeHandler} type="text" placeholder="عنوان مقاله را وارد کنید" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>توضیح کوتاه</Form.Label>
            <Form.Control name="desc" onChange={changeHandler} type="text" placeholder="یه توضیح کوتاه در مورد مقاله وارد کنید" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>نویسنده مقاله</Form.Label>
            <Form.Control name="writter" onChange={changeHandler} type="text" placeholder="نام نویسنده مقاله را وارد کنید" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>موضوع مقاله</Form.Label>
            <Form.Control name="category" onChange={changeHandler} type="text" placeholder="موضوع مقاله را وارد کنید" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>عکس مقاله</Form.Label>
            <Form.Control name="image" onChange={changeHandler} type="text" placeholder="عکس مقاله را وارد کنید" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>مدت زمان خواندن</Form.Label>
            <Form.Control name="readingTime" onChange={changeHandler} type="number" placeholder="0" />
          </Form.Group>
          
          <Button onClick={addArticalHandler} variant="primary" type="button">
            ساخت مقاله
          </Button>
        </Form>
      </div>
    </>
  );

}

export default AddArtical ;