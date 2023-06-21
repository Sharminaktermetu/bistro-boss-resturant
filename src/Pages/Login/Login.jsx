import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import Social from '../../Shared/Social/Social';


const Login = () => {
   const{login}=useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || "/";

    const [disabled, setDisable] = useState(true)

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
                Swal.fire({
                    title: 'Log in successful',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleCaptcha = (e) => {
        const user_value = e.target.value;
        console.log(user_value);
        if (validateCaptcha(user_value)) {
            setDisable(false)
        }
        else {
            setDisable(true)
        }
    }
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    return (
        <div className="flex justify-center items-center  bg-slate-500">
            <form
                className="w-96 p-8 bg-white rounded shadow-lg"
                onSubmit={handleSubmit}
            >
                <h2 className="text-xl mb-4">Login</h2>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        type="email"
                        name="email" // Set the name property

                        className="w-full border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-400"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password" // Set the name property
                        id="password"
                        className="w-full border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-400"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="password">
                        <LoadCanvasTemplate />
                    </label>

                    <input type="text" name="captcha" onBlur={handleCaptcha}placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                    <button  className="btn btn-outline w-full btn-sm my-12">Validate Captcha</button>
                </div>
                    <p>New to this website? <Link to="/signup" className='btn btn-link'>Sign up</Link></p>
                    <Social></Social>
                <div className="form-control mt-6">
                    <button disabled={false} className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;