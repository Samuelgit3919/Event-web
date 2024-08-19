import { Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate email input
        if (email.trim() === '') {
            // alert("Please enter your email.");
            return;
        }

        // If email is valid, navigate to the verification page
        navigate('/verification');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
                <p className="text-gray-700 mb-4 text-center">
                    Enter your email address below, and we'll send you instructions to reset your password.
                </p>
                <form aria-label="Forgot Password Form" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            aria-required="true"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                        >
                            Send Instructions
                        </button>
                        <div className="flex justify-center mt-4">
                            <Link to="/register" className="text-blue-600 hover:underline">
                                Return to Login
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ForgotPassword;
