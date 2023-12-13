import Card from "./card";
import { createGlobalStyle } from "styled-components";
import Inputs from "./inputs";
import CardDetails from "./cardDetails";
import { useState } from "react";
import backgroundColorDesk from "./assets/bg-main-desktop.png";

function App() {
  const [page, setPage] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [zipCode, setZipCode] = useState<string>("");
  console.log(page);
  return (
    <>
      <GlobalStyle />
      <Card
        name={name}
        setName={setName}
        number={number}
        setNumber={setNumber}
        month={month}
        setMonth={setMonth}
        year={year}
        setYear={setYear}
        zipCode={zipCode}
        setZipCode={setZipCode}
      />
      {page === 0 ? (
        <Inputs
          page={page}
          setPage={setPage}
          name={name}
          setName={setName}
          number={number}
          setNumber={setNumber}
          month={month}
          setMonth={setMonth}
          year={year}
          setYear={setYear}
          zipCode={zipCode}
          setZipCode={setZipCode}
        />
      ) : (
        <CardDetails
          page={page}
          setPage={setPage}
          name={name}
          setName={setName}
          number={number}
          setNumber={setNumber}
          month={month}
          setMonth={setMonth}
          year={year}
          setYear={setYear}
          zipCode={zipCode}
          setZipCode={setZipCode}
        />
      )}
    </>
  );
}

export default App;
const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border: none;
}
body{
  font-family: "Space Grotesk";
  display: flex;
  flex-direction: column;

  
}
@media screen and (min-width:1440px){
#root{
  display: flex;
    height: 100vh;
    gap: 349px;
}
}
`;
