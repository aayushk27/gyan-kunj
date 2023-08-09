// import { Link } from 'react-router-dom';
// import './loginpage.css';

// const Loginpage = ({user, setUser}) => {

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//       // contrcat checking 

//       console.log(user);

//     //   if(success)
//     //   // navigate
//     // else
//     // alert(either )


//   }

//   return (
//     <div className="form">
//       <button>
//         <Link to="/">Back to Home</Link>
//       </button>
//       <h4>Log In To Account</h4>
//       <div className="login">
//         <input type="text" placeholder="Password" defaultValue="password" />
//         <input type="text" placeholder="Role" defaultValue="role"/>
//         <button onClick={handleSubmit()} >
//           Button
//         </button>
//       </div>
//       <div className="suggests">
//         <div className="remember">
//           <input type="checkbox" checked />
//           <span>Remember Me</span>
//         </div>
//         <div className="forgot">
//           <span>Forgot Password</span>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Loginpage;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './loginpage.css';

const Loginpage = ({ user, setUser }) => {
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Password:', password);
    console.log('Role:', role);

    console.log(user);

    //     //   if(success)
    //     //   // navigate
    //     // else
    //     // alert(either )

    // ... Rest of your logic ...
  };

  return (
    <div className="form">
      <button>
        <Link to="/">Back to Home</Link>
      </button>
      <h4>Log In To Account</h4>
      <div className="login">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <button onClick={handleSubmit}>Button</button>
      </div>
      <div className="suggests">
        <div className="remember">
          <input type="checkbox" checked />
          <span>Remember Me</span>
        </div>
        <div className="forgot">
          <span>Forgot Password</span>
        </div>
      </div>
    </div>
  );
};
export default Loginpage;
