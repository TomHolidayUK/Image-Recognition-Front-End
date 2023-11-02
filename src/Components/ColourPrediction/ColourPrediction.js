import React from "react";
import "./ColourPrediction.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  // Title,
  // ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  // ArcElement,
  CategoryScale,
  LinearScale,
  // Title,
  Tooltip,
  Legend
);

const ColourPrediction = ({ colour }) => {
  const pieData = {
    labels: colour.colourNames,
    datasets: [
      {
        // data: colour.colourValues.map(x => x*100),
        data: colour.colourValues,
        backgroundColor: colour.colours,
      },
    ],
  };

  let resultDisplayArray = [];
  for (let i = 0; i < colour.numberOfColours; i++) {
    resultDisplayArray[i] = `${(colour.colourValues[i] * 100).toFixed(2)}% of the photo is '${colour.colourNames[i]}'`;
  }

  let print = (component) => {
    return component.map((i) => <div className="">{i}</div>);
  };

  const pieOptions = {};

  return (
    <div>
      <div key={1}>
        {colour.colourValues ? (
          <div className="bt bb">
            <p className="f3 b">Colour Detection Results:</p>
            {print(resultDisplayArray)}
            <div id="container" className="pie-container">
              <Pie className="pie" data={pieData} options={pieOptions}></Pie>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

// console.log("facesnumber1", this.state.facesNumber)

// const Information = (facesNumber) => {
//     const Information2 = (
//         () => {
//           if (facesNumber.facesNumber > 0) {
//             return <div className='f3 fw4 ph0 pa2 mh0'>There are <b> {facesNumber.facesNumber}</b> faces in this photo</div>
//           } else if (facesNumber.facesNumber = 0) {
//             return <div className='f3 fw4 ph0 pa2 mh0'>There is <b> {facesNumber.facesNumber}</b> face in this photo</div>
//           } else {
//             return <div className='f3 fw4 ph0 pa2 mh0'>There are <b> {facesNumber.facesNumber}</b> faces in this photo</div>
//           }
//           ;
//         })() ;
//     console.log("facesnumber2", facesNumber.facesNumber)
//     return (
//         <div>
//             Hello
//             {Information2}
//         </div>
//     );
// }

export default ColourPrediction;
