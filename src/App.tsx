import Card from "./Card";
import Inputs from "./Inputs";
import CardDetails from "./CardDetails";
import { useState } from "react";
import GlobalStyle from "./GlobalStyle";
function App() {
  const [page, setPage] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [zipCode, setZipCode] = useState<string>("");
  const [searchActive, setSearchAcitive] = useState<boolean>(false);
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
          searchActive={searchActive}
          setSearchAcitive={setSearchAcitive}
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
