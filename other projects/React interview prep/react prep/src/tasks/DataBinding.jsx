// import { useState } from "react";
// import "./styles.css";

// const DataBinding = () => {
//   const [text, setText] = useState("");
//   return (
//     <>
//       <input
//         type="text"
//         placeholder="Enter Text"
//         // value={text}
//         onChange={(e) => {
//           setText(e.target.value);
//         }}
//       ></input>
//       <p className="text">{text}</p>
//     </>
//   );
// };

// export default DataBinding;
// ==============================================
// import { useState } from "react";
// import "./styles.css";

// const DataBinding = () => {
//   const [value, setValue] = useState("");
//   return (
//     <>
//       <h1>DISABLE BUTTON</h1>
//       <input
//         type="text"
//         placeholder="Enter Text"
//         value={value}
//         onChange={(e) => {
//           setValue(e.target.value);
//         }}
//       ></input>
//       <button disabled={value.length < 1}>Submit</button>
//     </>
//   );
// };

// export default DataBinding;
// ======================================================
// import React, { useState } from "react";
// import "./styles.css";

// const DataBinding = () => {
//   const [value, setValue] = React.useState(
//     "I need to be updated from my child"
//   );

//   return (
//     <>
//       <h3>Update Parent State Challenge (Using Callback)</h3>
//       <div className="wrapper">
//         <div>Parent</div>
//         <div className="box-wrapper">{value}</div>
//       </div>

//       <div className="wrapper">
//         <Child value={value} setValue={setValue} />
//       </div>
//     </>
//   );
// };

// export default DataBinding;

// function Child({ value, setValue }) {
//   return (
//     <>
//       <div>Child</div>
//       <button onClick={() => setValue("Parent has been updated!")}>
//         Change Parent Value
//       </button>
//       <p>{value} lol</p>
//     </>
//   );
// }
// =====================================================
