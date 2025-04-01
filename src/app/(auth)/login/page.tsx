import React from 'react';

function Login() {
    return (
        <div className={"bg-primary/70 backdrop-blur-lg rounded-xl p-10  w-2/6 shadow-2xl shadow-black flex flex-col items-center gap-10"}>
            <h2 className={"text-2xl font-semibold text-darkerGold "}>صفحه ورود</h2>
            <form className={"flex flex-col w-full gap-7"} >
                <div className={" rounded-md border border-white "}>
                    <input type={"text"}
                           className={"w-full h-full px-6 py-3 text-white placeholder:text-white/60 outline-none font-light"}
                           placeholder={"نام کاربری خود را وارد کنید"}/>
                </div>
                <div className={" rounded-md border border-white "}>
                    <input type={"password"}
                           className={"w-full h-full px-6 py-3 text-white placeholder:text-white/60 outline-none font-light"}
                           placeholder={"رمز عبور خود را وارد کنید"}/>
                </div>
                <button className={"font-light py-2 px-8 self-center cursor-pointer rounded-lg bg-darkerGold text-white/80"}>ورود</button>
            </form>
        </div>
    );
}

export default Login;