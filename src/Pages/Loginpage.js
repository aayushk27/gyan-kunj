import { Link } from 'react-router-dom';
import './loginpage.css';

const Loginpage = () => {
  return (
    <div className="form">
      <button>
        <Link to="/">Back to Home</Link>
      </button>
      <h4>Log In To Account</h4>
      <div className="login">
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        <button>
          <a href="/#">Sign IN</a>
        </button>
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
