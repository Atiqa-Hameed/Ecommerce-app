import { useState } from 'react';

function Auth() {
    const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup forms
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setErrorMessage('Please fill in all fields.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrorMessage('Please enter a valid email address.');
            return;
        }

        if (password.length < 6) {
            setErrorMessage('Password must be at least 6 characters long.');
            return;
        }

        setErrorMessage('');
        
        try {
            // Replace with actual login API call
            // await api.login(email, password);
            setSuccessMessage('Login successful!');
            setTimeout(() => setSuccessMessage(''), 3000); // Clear success message after 3 seconds
        } catch (error) {
            setErrorMessage('Login failed. Please try again.');
        }
    };

    const handleSignup = async (e) => {
        e.preventDefault();

        if (!email || !password || !confirmPassword) {
            setErrorMessage('Please fill in all fields.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrorMessage('Please enter a valid email address.');
            return;
        }

        if (password.length < 6) {
            setErrorMessage('Password must be at least 6 characters long.');
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match.');
            return;
        }

        setErrorMessage('');
        
        try {
            // Replace with actual signup API call
            // await api.signup(email, password);
            setSuccessMessage('Signup successful!');
            setTimeout(() => setSuccessMessage(''), 3000); // Clear success message after 3 seconds
        } catch (error) {
            setErrorMessage('Signup failed. Please try again.');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
        
            <div className="bg-white p-8 rounded-lg shadow-md w-80">
                <h1 className="text-2xl font-semibold mb-6 text-center">
                    {isLogin ? 'Login' : 'Signup'}
                </h1>
                <form onSubmit={isLogin ? handleLogin : handleSignup}>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md mb-4"
                        required
                    />
                    <label htmlFor="password" className="block text-sm font-medium mb-2">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md mb-4"
                        required
                    />
                    {!isLogin && (
                        <>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">Confirm Password:</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-md mb-4"
                                required
                            />
                        </>
                    )}
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
                    >
                        {isLogin ? 'Login' : 'Signup'}
                    </button>
                    {errorMessage && (
                        <p className="text-red-500 text-center mt-4">{errorMessage}</p>
                    )}
                    {successMessage && (
                        <p className="text-green-500 text-center mt-4">{successMessage}</p>
                    )}
                </form>
                <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">
                        {isLogin ? "Don't have an account?" : "Already have an account?"}
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            className="text-blue-500 ml-1"
                        >
                            {isLogin ? 'Sign Up' : 'Log In'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Auth;


