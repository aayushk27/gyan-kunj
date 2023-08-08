import { Link } from 'react-router-dom';
import './signup.css';

const Signup = () => {
  return (
    <div className="form">
      <button>
        <Link to="/">Back to Home</Link>
      </button>
      <h4>Sign Up </h4>
      <div className="login">
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        <button>
          <a href="/#">Sign Up</a>
        </button>
      </div>
    </div>
  );
};
export default Signup;
