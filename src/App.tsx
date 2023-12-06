import Card from "./card";
import { createGlobalStyle } from "styled-components";
import Inputs from "./inputs";
import CardDetails from "./cardDetails";
import { useState } from "react";
function App() {
  const [page, setPage] = useState<number>(0);

  return (
    <>
      <GlobalStyle />
      <Card />
      {page === 0 ? (
        <Inputs page={page} setPage={setPage} />
      ) : page === 1 ? (
        <CardDetails />
      ) : null}
    </>
  );
}

export default App;
const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body{
  font-family: "Space Grotesk";
}
`;
