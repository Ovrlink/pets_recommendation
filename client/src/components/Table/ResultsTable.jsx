import { useLoaderData } from "react-router-dom";
// import { useState } from "react";
import Header from "../Header.jsx";
import TableRow from "./TableRow.jsx";

export default function ResultsTable() {
  const data = useLoaderData();
  console.log(data);
  // const [dataLoaded, setDataLoaded] = useState(false);
  // if (data.isError) {
  //   return (
  //     <div className="result">
  //       <p>{data.message}</p>
  //     </div>
  //   );
  // }
  const duplicatePoints = data[0].points === data[1].points;
  // if (duplicatePoints) {
  //   const fewAnimals = data
  //     .filter((el, i, arr) => el.points === arr[0].points);
  // }
  
  return (
    <>
      <Header text="Результат тесту" />
      <div className="result">
      <div className="result-message">
          <h3>Ваша рекомендована тваринка - {data[0].name}</h3>
          <img src={data[0].img} alt='Photo of recommended animal.'></img>
          <p>{data[0].description}</p>
          {duplicatePoints && <p className="another">Вам також можуть сподобатися такі улюбленці {data.filter((el, i, arr) => i !== 0 && el.points === arr[0].points ).map((el,i,arr)=><span>{i === arr.length-1?  el.name + ". ":el.name + ", "} </span>)} </p>}
        </div>
        <hr/>
        <table className="result-table">
          <thead>
            <tr>
              <td>Тварина</td>

              <td>Бали</td>
            </tr>
          </thead>
          <tbody>
            {data.map((obj) => (
              <TableRow name={obj.name} points={obj.points} />
            ))}
          </tbody>
        </table>
        
      </div>
    </>
  );
}
export async function loader() {
  const response = await fetch("http://localhost:5000/pets/data");

  if (!response.ok) {
    return { message: "Can not load results" };
  } else {
    return response;
  }
}
