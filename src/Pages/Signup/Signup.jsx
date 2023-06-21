

import { useForm } from "react-hook-form"
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import Social from "../../Shared/Social/Social";



const Signup = () => {
  const navigate = useNavigate()
  const { createUser, updateUser } = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm()
  const onSubmit = (data) => {
    console.log(data)
    createUser(data.email, data.password)

      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        updateUser(data.name)
          .then(() => {
            const savedUser= {name:data.name, email:data.email}
            fetch('http://localhost:5000/user',{
              method:'POST',
              headers:{'content-type':'application/json'},
              body:JSON.stringify(savedUser)
            })

              .then(res => res.json())
              .then(data => {
                if (data.insertedId) {
                  reset()
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User create successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate('/')
                }
              })

          })
          .catch((error) => { console.log(error) })
      })
      .catch((error) => console.log(error))
  }

  console.log(watch("example"))

  return (
    <div className="hero min-h-screen">
      <Helmet>
        <title>Bistro boss | Sign up</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row gap-20 m-0">
        <div>

        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="card max-w-sm shadow-2xl p-6">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" {...register("name")} name='name' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" {...register("email")} name='email' className="input input-bordered" required />
              </div>
              {errors.exampleRequired && <span>This field is required</span>}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password")} placeholder="password" name='password' className="input input-bordered" required />

              </div>

              <div className="form-control mt-6">
                <button className="btn btn-error">Sign up</button>
              </div>


              <small>Already have an account? <Link to="/login" className='btn btn-link'>Login</Link></small>
              <Social></Social>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;