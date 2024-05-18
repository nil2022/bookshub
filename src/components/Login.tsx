import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import authService from './server/auth.appwrite';

function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const login = async (data: any) => {
        try {
            const response = await authService.login(data.email, data.password);
            if (response) {
                alert('Login successful');
                console.log('Login successful');
                localStorage.setItem('authStatus', JSON.stringify(true));
                navigate('/dashboard');
                // await authService.logout();
            } else {
                console.log('response: ', response);
                alert('Something went wrong');
            }
        } catch (error: any) {
            setError(error.message);
            console.log('login error: ', error);
        }
    };

    return (
        <div className="bg-zinc-800 min-h-fit lg:min-h-screen pt-28">
            <div className="mx-auto max-w-md rounded-xl px-8 py-16 sm:py-32 text-white bg-zinc-600">
                <div className="mb-2 w-full">
                    <span className="inline-block w-full mx-auto">
                        <img
                            src="/padlock-64.png"
                            alt="logo"
                            width={40}
                            loading="lazy"
                            className="mx-auto bg-transparent"
                        />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">
                    Sign in to your account
                </h2>
                <p className="mt-2 text-center text-base ">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/register"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
                {error && (
                    <p className="text-red-600 mt-8 mx-auto text-center justify-center max-w-[280px]">
                        {error}
                    </p>
                )}
                <form
                    onSubmit={handleSubmit(login)}
                    className="mt-8 max-w-[280px] mx-auto"
                >
                    <div className="space-y-5">
                        <input
                            placeholder="john@example.com"
                            type="email"
                            {...register('email', {
                                required: true,
                                validate: {
                                    matchPattern: (value) =>
                                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                                            value
                                        ) || 'Must be a valid email address'
                                }
                            })}
                            className="w-full p-2 bg-gray-700 hover:ring-2 hover:ring-zinc-400 placeholder:text-slate-400 rounded-md transition-all duration-500 outline-none"
                        />
                        <div className="relative flex flex-col">
                            <input
                                placeholder="Your Password"
                                type={passwordVisible ? 'text' : 'password'}
                                {...register('password', {
                                    required: true
                                })}
                                className="w-full p-2 bg-gray-700 hover:ring-2 hover:ring-zinc-400 placeholder:text-slate-400 rounded-md transition duration-500 ease-in-out"
                            />
                            <div className="relative w-full py-2">
                                <button type='button'
								onClick={togglePasswordVisibility}
								className='flex justify-center'>
                                    <input
                                        type="checkbox"
                                        checked={passwordVisible}
										onChange={togglePasswordVisibility}
                                        className="my-auto w-[16px] h-[16px]"
                                    />
                                    <span className="ml-2 font-[500] text-base">
                                        Show Password
                                    </span>
                                </button>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-slate-900 p-2 text-lg font-[600] rounded-md hover:bg-slate-700 transition-all duration-500"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
                <div className="text-center mt-4">
                    Need Support ? Contact Us.
                </div>
            </div>
        </div>
    );
}

export default Login;
