import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
    const {logIn, setUser} = useContext(AuthContext)
    const handlesubmit = e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        logIn(email, password)
        .then(res =>{
            const user = res.user;
            setUser(user)
        })
        .catch((error) => {
            alert(error.code)
          });
        
    }
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card bg-base-100 rounded-none w-full max-w-lg shrink-0 shadow-2xl">
        <form onSubmit={handlesubmit} className="card-body">
            <h1 className="text-2xl font-semibold text-center py-3 border-b">Login your account</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
            name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
            name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Login</button>
          </div>
          <p>Don't have an account ? <Link to='/auth/register' className="text-red-600">Register</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
