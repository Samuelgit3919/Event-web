import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Verification() {
    const [code, setCode] = useState(["", "", "", ""]);

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (/^[0-9]$/.test(value) || value === "") {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);

            if (value !== "" && index < 3) {
                document.getElementById(`input-${index + 1}`).focus();
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && code[index] === "" && index > 0) {
            document.getElementById(`input-${index - 1}`).focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Verification code:", code.join(''));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-start">Verification Code</h2>
                <p className="mb-6">Check your e-mail and enter the verification code that has been sent to you.</p>
                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    <h2 className="text-2xl font-normal mb-6 text-center">Enter Code</h2>
                    <div className="flex gap-2 mb-6">
                        {code.map((digit, index) => (
                            <input
                                key={index}
                                required
                                id={`input-${index}`}
                                type="text"
                                maxLength="1"
                                className="w-12 h-12 border border-gray-300 rounded-md text-center text-2xl focus:outline-none focus:ring focus:ring-blue-500"
                                value={digit}
                                onChange={(e) => handleChange(e, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                aria-label={`Verification code digit ${index + 1}`}
                            />
                        ))}
                    </div>
                    <button
                        type="submit"
                        className="w-1/2 bg-gray-800 text-white font-thin py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 transition duration-300"
                    >
                        <Link to='/newPassword'>
                            Verify
                        </Link>

                    </button>
                </form>
                <div className="flex justify-center mt-4">
                    <Link to="/register" className="text-blue-600 hover:underline">
                        Return to Login
                    </Link>
                </div>
            </div>
        </div>
    );
}
