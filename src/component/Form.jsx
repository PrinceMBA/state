// import React, { useState } from "react";

// function Form() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Corrected: Added parentheses to call preventDefault()
//     // Add your form submission logic here
//     console.log(name, email);
//   };
//   return (
//     <div>
//       {
//         <form onSubmit={handleSubmit}>
//           <input
//             onChange={handleNameChange}
//             type="text"
//             value={name}
//             placeholder="Place your Name"
//           />
//           <input
//             onChange={handleEmailChange}
//             type="email"
//             value={email}
//             placeholder="Place your Email"
//           />
//           <input type="submit" />
//         </form>
//       }
//     </div>
//   );
// }

// export default Form;

import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Corrected: Added parentheses to call preventDefault()
    // Add your form submission logic here
    console.log(name, email);
    // Clear the input fields by updating the state variables to empty strings
    setName("");
    setEmail("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleNameChange}
          type="text"
          value={name}
          placeholder="Enter your Name"
        />
        <input
          onChange={handleEmailChange}
          type="email"
          value={email}
          placeholder="Enter your Email"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;

// import React, { useState } from "react";
// import "./Form.css"; // Import the CSS file for styling

// function Form() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Corrected: Added parentheses to call preventDefault()
//     // Add your form submission logic here
//     console.log(name, email);
//     // Clear the input fields by updating the state variables to empty strings
//     setName("");
//     setEmail("");
//   };

//   return (
//     <div className="form-container">
//       <form className="form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <input
//             onChange={handleNameChange}
//             type="text"
//             value={name}
//             placeholder="Enter your Name"
//             className="form-input"
//           />
//         </div>
//         <div className="form-group">
//           <input
//             onChange={handleEmailChange}
//             type="email"
//             value={email}
//             placeholder="Enter your Email"
//             className="form-input"
//           />
//         </div>
//         <div className="form-group">
//           <input type="submit" value="Submit" className="form-submit" />
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Form;
