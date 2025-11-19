import Box from "./Box";

const names = [
  {
    id: 1,
    name: "Ahmad",
    age: 22,
    work: "Enginner",
  },

  {
    id: 2,
    name: "Ahmad Wais",
    age: 22,
    work: "Doctor",
  },
];

function About() {
  return (
    <>
      {names.map((user) => (
        <Box {...user} />
      ))}
    </>
  );
}

export default About;
