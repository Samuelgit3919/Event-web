import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// import jwt_decode from "jwt-decode";


function Register() {



    const [isSignIn, setIsSignIn] = useState(true);

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('https://i.pinimg.com/564x/92/57/6b/92576be9601f00886b03e58363369647.jpg')" }}
        >
            <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md">
                <div className="mb-6">
                    <div className="flex justify-center mb-4">
                        <button
                            className={`px-4 py-2 font-semibold ${isSignIn ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                            onClick={() => setIsSignIn(true)}
                            aria-label="Switch to Sign In"
                        >
                            Sign In
                        </button>
                        <button
                            className={`px-4 py-2 font-semibold ${!isSignIn ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                            onClick={() => setIsSignIn(false)}
                            aria-label="Switch to Sign Up"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>

                {isSignIn ? (
                    <SignInForm />
                ) : (
                    <SignUpForm />
                )}

            </div>
        </div>
    );
}

function SignInForm() {
    // const [user, setUser] = useState({})

    function handleCallbackResponse(response) {
        console.log("Encoded jwt id token" + response.credential);
        // var userObject = jwt_decode(response.credential)
        // console.log(userObject);
        // setUser(userObject)
    }

    useEffect(() => {
        google.accounts.id.initialize({
            client_id: "97884430160-o3mqegje97g82u9668un19s1vfubrfp0.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById('signInDiv'),
            {
                theme: 'outline', size: 'large'
            }
        )
    }, []);
    return (
        <form aria-label="Sign In Form">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    aria-required="true"
                    required
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    aria-required="true"
                    required
                />
            </div>
            <div className="flex items-center justify-between">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Sign In
                </button>
                <Link to="/forgotPassword"
                    className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                >
                    Forgot Password?
                </Link>

            </div>
            <div id='signInDiv' className='rounded py-4 w-full'></div>
        </form>
    );
}



function SignUpForm() {
    return (
        <form aria-label="Sign Up Form">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Full Name
                </label>
                <input
                    type="text"
                    id="username"
                    placeholder="Enter your name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    aria-required="true"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    aria-required="true"
                    required
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    placeholder="Create a password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    aria-required="true"
                    required
                />
            </div>
            <div className="flex items-center justify-between">
                <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Sign Up
                </button>
            </div>
        </form>
    );
}

export default Register;
