import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firbase/firbase.config";
import { useState } from "react";
import { IoEye } from "react-icons/io5";


const Sinup = () => {

  const [sinupError, setsinupError] = useState('')
  const [success, setSuccess] = useState('')
  const [showPassword, setshowPassword] = useState(false)
  const handelSignup = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.trams.checked
    console.log(email, password, accepted)
    setsinupError('')
    setSuccess('')
    setshowPassword(null)

    if(!accepted){
      setsinupError('accept our terms and condition')
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user)
        setSuccess("user successfully used")
      })
      .catch((error) => {
        console.log(error)
        setsinupError(error.message)
      })
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handelSignup} id="Nid" className="card-body p-5">
            <h1 className="text 3xl font-bold text-center">Please Sing Up</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Email</span>
              </label>
              <input name="email" type="email" placeholder="email" className="input  input-bordered" required />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input name="password" type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered " required />
              <label className=" end-2 mt-2 items-center flex">
                <span className=" text-2xl " onClick={() => setshowPassword(!showPassword)}><IoEye /></span>
              </label>
            </div>
            <div className="form-control mt-6">
              <br />
              <div className="flex gap-1">
                <input type="checkbox" name="trams" id="trams" />
                <label htmlFor="trams"> Accept our terms and condition </label>
              </div>
              <br />
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
          <div className="text-center p-2">
            {
              sinupError && <p className="text-red-700"> {sinupError} </p>
            }
            {
              success && <p className="text-green-600">{success}</p>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sinup;