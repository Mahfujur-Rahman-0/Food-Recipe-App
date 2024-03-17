import { useEffect } from "react";

export default ({ url, apikeey, value, foodList, setFoodList, setFoodId }) => {
  useEffect(() => {
    let callData = async () => {
      //try {
      let res = await fetch(`${url}?query=${value}&apiKey=${apikeey}`);
      // if (!res.ok) {
      //   throw new Error(null);
      // }
      let dataCall = await res.json();
      setFoodList(dataCall.results);
      //} catch (error) {}
    };
    callData();
  }, [value]);
  return (
    <>
      {foodList.map((data) => (
        <div key={data.id} className="cardCointainer">
          <img className="cardImg" src={data.image} alt="" />
          <h4>{data.title}</h4>
          <div className="clickBtnContainer">
            <button
              onClick={() => {
                setFoodId(data.id);
              }}
              className="clickBtn"
            >
              Get Details
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
