import { useEffect, useState } from "react";
import authService from "./server/auth.appwrite";
import { useNavigate } from "react-router-dom";

function VerifyEmail() {

    const [error, setError] = useState<string | null>(null);
    const [verificationStatus, setVerificationStatus] = useState(false);
    const navigate = useNavigate();

    const verifyEmail = async () => {
        try {
            const updateEmail = await authService.verifyEmail();
            if (updateEmail) {
                setVerificationStatus(true);
                alert('Please login to continue');
                setTimeout(() => {
                    navigate('/login');
                }, 1000);
            } else {
                console.log('Something went wrong');
                alert('Something went wrong');
            }
        } catch (error: any) {
            setError(error.message);
            console.log('verifyEmail error: ', error);
        }
    };

    useEffect(() => {
        verifyEmail();
    }, [verificationStatus]);


    return !error ? (
        <div className="flex items-center justify-center pt-28 bg-zinc-800 min-h-screen">
            <div className="mx-auto text-center w-full max-w-lg p-10 text-2xl sm:text-4xl font-bold text-white">
                {verificationStatus ? (
                    <h2>Verification Successful</h2>
                ) : (
                    <h2>Verifying...</h2>
                )}
            </div>
        </div>
    ) : (
        <div className="flex items-center justify-center pt-28 bg-zinc-800 min-h-screen">
            <div className="mx-auto text-center w-full max-w-lg p-10 text-2xl sm:text-4xl font-bold text-white">
                Invalid Verification link <br />
                <p className="text-red-600 mt-8 text-center text-lg sm:text-lg">{error}</p>
            </div>
        </div>
    );
}

export default VerifyEmail;
