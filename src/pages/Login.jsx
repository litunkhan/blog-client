
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
// import { AuthContext } from '../Components/Authprobider';
// import { useContext } from 'react';

const Login = () => {
    // const {setUser} = useContext(AuthContext)
    const navigate = useNavigate('')
    const handleLogin = (e)=>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

      const userlogin =  {email,password}
        axios.post('http://localhost:5000/login',userlogin)
        .then(res=>{
            if( res.data.user ){
                // setUser(res.data.user)
                localStorage.setItem('user', JSON.stringify(res.data.user));
                
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'login-successfull',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  form.reset()
                  navigate('/')
                  window.location.reload();
                  
            }
        })

    }
    return (
        <section className="bg-gray-50 dark:bg-gray-900 mt-2">
        <div className="flex flex-col items-center justify-center px-6  mx-auto md:h-screen lg:py-0">
            
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Please Login
                    </h1>
                    <form onSubmit={(e)=>handleLogin(e)} className="space-y-4 md:space-y-6">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required/>
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="Type-password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                        </div>
                        
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                            </div>
                            <div className="ml-3 text-sm">
                              <label htmlFor="terms" className=" text-black">I accept the <a className="font-medium text-primary-600 hover:underline text-[#2563eb]" href="#">Terms and Conditions</a></label>
                            </div>
                        </div>
                        <button type="submit" className="w-full text-white bg-[#2563eb] p-2 rounded-md">Login</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Dont have an account? <Link to="/register" className="font-medium text-primary-600 hover:underline text-[#2563eb]">Register here</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
      </section>
    );
};

export default Login;