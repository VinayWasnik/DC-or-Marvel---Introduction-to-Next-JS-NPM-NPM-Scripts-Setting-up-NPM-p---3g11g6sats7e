import React from "react";

function FormB({ onSubmit, age, selectedShow, onShowChange }) {
  return (
    <form id="marvel" onSubmit={onSubmit}>
      <h2>Form B</h2>
      <label>
        Select Marvel Shows:
        <select value={selectedShow} onChange={onShowChange}>
          <option value="">--Select--</option>
          <option value="WandaVision">WandaVision</option>
          <option value="The Falcon and the Winter Soldier">
            The Falcon and the Winter Soldier
          </option>
          <option value="Loki">Loki</option>
          <option value="What If...?">What If...?</option>
        </select>
      </label>
      <br />
      <label>
        Enter your age:
        <input type="number" value={age} disabled />
      </label>
      <br />
      <button id="submit-marvel" type="submit" disabled={!selectedShow}>
        Submit
      </button>
    </form>
  );
}

export default FormB;





// 'use client'
// import { useState, useEffect } from "react";
// function FormB({ onSubmit, age }) {
//     const [marvelShows, setMarvelShows] = useState("");

//     const handleSubmit = (event) => {
//     };



//     return (
//         <form id="marvel" >
//             <h2>Form B</h2>
//             <label>
//                 Select Marvel Shows:
//                 <select  >
//                     <option value="">--Select--</option>
//                     <option value="WandaVision">WandaVision</option>
//                     <option value="The Falcon and the Winter Soldier">
//                         The Falcon and the Winter Soldier
//                     </option>
//                     <option value="Loki">Loki</option>
//                     <option value="What If...?">What If...?</option>
//                 </select>
//             </label>
//             <br />
//             <label>
//                 Enter your age:
//                 <input type="number" value={age} disabled />
//             </label>
//             <br />
//             <button id="submit-marvel" type="submit">Submit</button>
//         </form>
//     );
// }
// export default FormB;
