import CardData from "./components/cardData";
import SearchBox from "./components/searchBox";
import DetailsViewer from "./components/detailsViewer";
import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [foodList, setFoodList] = useState([]);
  const [foodId, setFoodId] = useState("782585");
  const [errorr, setError] = useState(null);
  const url = "https://api.spoonacular.com/recipes/complexSearch";
  const detailsUrl = `https://api.spoonacular.com/recipes/${foodId}/information`;
  //const apikeey = "b4ff9213d30741c58ded7e68610a0596";
  //const apikeey = "7101900a2282406b9ff4351095d2477f";
  const apikeey = "21dd500c65464c1cba1dc43449da9d0e";
  
  return (
    <>
      {errorr === null ? (
        <>
          <p className="errorViewer redText">
            [ NOTE: Please do not over use this app.It was made for only
            education purpose.It has a limit of 150 searches per day. ]
          </p>
          <SearchBox value={value} setValue={setValue} />
          <div className="container">
            <div className="childContainer">
              <CardData
                url={url}
                apikeey={apikeey}
                value={value}
                foodList={foodList}
                setFoodList={setFoodList}
                setFoodId={setFoodId}
              />
            </div>
            <div className="childContainer">
              <DetailsViewer
                detailsUrl={detailsUrl}
                foodId={foodId}
                apikeey={apikeey}
                errorr={errorr}
                setError={setError}
              />
            </div>
          </div>
        </>
      ) : (
        <h1 className="errorViewer">{errorr}</h1>
      )}
    </>
  );
}

export default App;
