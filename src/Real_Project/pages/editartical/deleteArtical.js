import MyNavbar from "../../components/navbar/Navbar";

function DeleteArtical() {
  return (
    <>
      <MyNavbar />

      <h1
        style={{
          color: "green",
          fontSize: "25px",
          fontFamily: "Lalezar",
          textAlign: "center",
        }}
      >
        مقاله مورد نظر با موفقیت حذف شد
      </h1>
    </>
  );
}

export default DeleteArtical ;
