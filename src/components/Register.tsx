import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import authService from './server/auth.appwrite';

function Register() {
    const [error, setError] = useState<string | null>(null);
    const { register, handleSubmit } = useForm();

    const redirectEmailUrl = import.meta.env.VITE_EMAILVERIFICATION_URL;

    const signup = async (data: any) => {
        // const { fullName, email, password } = data;
        // console.log(fullName, email, password);
        try {
            const response = await authService.createAccount(
                data.fullName,
                data.email,
                data.password
            );
            if (response) {
                alert('Account created successfully');
                console.log('Account created successfully');
                await authService.login(data.email, data.password)
				.then(async() => {
                    await authService
                        .sendEmailVerification(redirectEmailUrl)
                        .then(async() => {
                            alert('Email verification link sent to your email');
                            console.log(
                                'Email verification link sent to your email'
                            );
						await authService.logout();
                        })
                        .catch((error) => {
                            alert(error.message);
                            throw error;
                        });
                })
				.catch((error) => {
					alert(error.message);
					throw error;
				})
            } else {
                console.log('response: ', response);
                alert('Something went wrong');
            }
        } catch (error: any) {
            setError(error.message);
            console.log('signup error: ', error);
        }
    };

    return (
        <div className="bg-zinc-800 min-h-fit lg:min-h-screen pt-28">
            <div className="mx-auto max-w-md rounded-xl px-8 py-16 sm:py-32 text-white bg-zinc-600">
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px] text-center">
                        Logo
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">
                    Create your free account
                </h2>
                <p className="mt-2 text-center text-base ">
                    Already have account with us ?<br />
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Login Here
                    </Link>
                </p>
                {error && (
                    <p className="text-red-600 mt-8 mx-auto text-center justify-center max-w-[280px]">
                        {error}
                    </p>
                )}
                <form
                    onSubmit={handleSubmit(signup)}
                    className="mt-8 max-w-[280px] mx-auto"
                >
                    <div className="space-y-5">
                        <input
                            placeholder="John Doe"
                            type="text"
                            {...register('fullName', {
                                required: true
                            })}
                            className="w-full p-2 bg-gray-700 hover:ring-2 hover:ring-zinc-400 placeholder:text-slate-400 rounded-md transition-all duration-500 outline-none"
                        />
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
                        <input
                            placeholder="Your Password"
                            type="password"
                            {...register('password', {
                                required: true
                            })}
                            className="w-full p-2 bg-gray-700 hover:ring-2 hover:ring-zinc-400 placeholder:text-slate-400 rounded-md transition-all duration-500 outline-none"
                        />
                        <button
                            type="submit"
                            className="w-full bg-slate-900 p-2 text-lg font-[600] rounded-md hover:bg-slate-700 transition-all duration-500"
                        >
                            Register
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

export default Register;
