import List from "./list";

function List1() {
  const names = [
    {
      id: 1,
      name: "sharam",
      age: 22,
      work: "Engginer",
    },

    {
      id: 2,
      name: "nawid",
      age: 22,
      work: "Gada",
    },

    {
      id: 3,
      name: "Milad",
      age: 22,
      work: "Mistari",
    },
  ];

 return (

<>

{names.map(name => <List key = {name.id} {...name} />)}


</>


)

 }

export default List1;
