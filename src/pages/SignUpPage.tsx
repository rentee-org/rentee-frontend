import React from 'react';
import SignUpForm from "../components/auth/SignUpForm";


const SignUpPage: React.FC = () => {
    return (
        <div className="flex justify-center items-center bg-[#f0f0f0] w-full overflow-auto p-4 sm:p-10">
        <SignUpForm />
        </div>
    );
};

export default SignUpPage;