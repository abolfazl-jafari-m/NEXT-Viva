import React from 'react';
import LoginForm from "@/components/auth/loginForm/LoginForm";
function Login() {
    return (
        <div className={"bg-primary/70 backdrop-blur-lg rounded-xl p-10  w-2/6 shadow-2xl shadow-black flex flex-col items-center gap-10"}>
            <h2 className={"text-2xl font-semibold text-darkerGold "}>صفحه ورود</h2>
            <LoginForm />
        </div>
    );
}

export default Login;