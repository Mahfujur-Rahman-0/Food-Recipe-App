import { useEffect, useState } from "react";

export default ({ detailsUrl, apikeey, foodId, setError, errorr }) => {
  const [fullDetails, setFullDetails] = useState({});
  useEffect(() => {
    let foodDetails = async () => {
      try {
        const responce = await fetch(`${detailsUrl}?apiKey=${apikeey}`);
        if (!responce.ok) {
          throw new Error(
            "Your daily points limit of 150 has been reached. Please upgrade your plan to continue using the API."
          );
        }
        const data = await responce.json();
        console.log(data);
        setFullDetails(data);
      } catch (error) {
        setError(error.message); // Set error message
      }
    };

    foodDetails();
  }, [foodId]);
  return (
    <>
      {errorr === null ? (
        <div className="detailsContainer">
          <div className="detailsSubContainer">
            <h4>{fullDetails.title}</h4>
            <img className="detailsImg" src={fullDetails.image} alt="" />
          </div>
          <span>{fullDetails.vegan ? <>🥕 Vegan</> : <>🍖 Non vegan</>}</span>{" "}
          &nbsp;
          <span>
            {fullDetails.vegetarian ? (
              <>🥗 vegetarian</>
            ) : (
              <>🥩 Non vegetarian</>
            )}
          </span>
          <p>cook Time ⏰ {fullDetails.cookingMinutes} min</p>
          <p>Preparation Time ⏰ {fullDetails.preparationMinutes} min</p>
          <p>Total Ready Time ⏰ {fullDetails.readyInMinutes} min</p>
          <p>price ৳ {fullDetails.pricePerServing}</p>
          <h4>To make at home Please follow these steps</h4>
          <ol>
            {
              //fullDetails.analyzedInstructions &&
              fullDetails.analyzedInstructions?.[0]?.steps.map((step) => (
                <li key={step.number}>{step.step}</li>
              ))
            }
          </ol>
        </div>
      ) : null}
    </>
  );
};
