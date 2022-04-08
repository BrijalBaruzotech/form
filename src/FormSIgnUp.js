import React from 'react'
import useForm from "./useForm";
import validate from "./validateInfo";

export default function FormSIgnUp() {
    const { handleChange, handleSubmit, errors, values } = useForm(validate);
    
    return (
      <div className="flex flex-col p-14">
        <form className="flex justify-center items-center" onSubmit={handleSubmit}>
          <div className="flex items-center justify-center rounded-xl bg-black p-7 shadow-slate-500 shadow-xl">
            <div className="space-y-3 ml-2">
              <div className="h-16 flex justify-center items-center text-3xl font-bold text-pink-300">
                Create Your Account
              </div>
              <div className="flex flex-col justify-center space-y-1">
                <label className="w-36 text-white text-sm">Enter Name :</label>
                <input
                  className="w-72 p-2 rounded-sm text-sm bg-greyBlur text-white"
                  type="text"
                  name="Name"
                  id="Name"
                  value={values.Name}
                  onChange={handleChange}
                  placeholder="Enter the name"
                />
                {errors.Name && <p className="text-red-400">{errors.Name}</p>}
              </div>
              <div className="flex flex-col justify-center space-y-1">
                {" "}
                <label className="w-36 text-white text-sm">Enter Email :</label>
                <input
                  className="rounded-sm p-2 text-sm bg-greyBlur text-white"
                  type="email"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Enter Email"
                ></input>
                {errors.email && <p className="text-red-400">{errors.email}</p>}
              </div>
              <div className="flex flex-col justify-center space-y-1">
                <label className="w-36 text-white text-sm">Password :</label>
                <input
                  className="rounded-sm p-2 text-sm bg-greyBlur text-white"
                  type="password"
                  id="pass"
                  name="pass"
                  value={values.pass}
                  onChange={handleChange}
                  placeholder="Enter Password"
                ></input>
                {errors.pass && <p className="text-red-400">{errors.pass}</p>}
              </div>
              <div className="flex flex-col justify-center space-y-1">
                <label className="w-40 text-white text-sm">
                  Confirm Password:
                </label>
                <input
                  className="rounded-sm p-2 text-sm bg-greyBlur text-white"
                  type="password"
                  name="confPass"
                  id="confPass"
                  value={values.confPass}
                  onChange={handleChange}
                  placeholder="Re-Enter Password"
                ></input>
                {errors.confPass && (
                  <p className="text-red-400">{errors.confPass}</p>
                )}
              </div>
              <div className="flex flex-col justify-center space-y-1">
                <label className="w-36 text-white text-sm">Phone Number :</label>
                <input
                  className="rounded-sm p-2 text-sm bg-greyBlur text-white"
                  type="text"
                  name="phone"
                  id="phone"
                  value={values.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                />
                {errors.phone && <p className="text-red-400">{errors.phone}</p>}
              </div>
              <div className="flex justify-center items-center pb-5">
                <button
                  onClick={errors.onfocus = function() {
                    if (!this.value.includes('@gmail.com')) {
                      // this.classList.add("error");
                      errors.focus();
                    } else {
                      this.classList.remove("error");
                    }
                    
                  } }
                 type='submit'
                  className="w-full mt-2 p-2 text-xl font-bold bg-green-400 text-center rounded-sm text-black" 
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
