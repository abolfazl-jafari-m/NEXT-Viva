import React from 'react';
import {FaCircleUser} from "react-icons/fa6";

function Comments() {
    return (
        <section className={"w-full min-h-screen p-20"}>
            <h3 className={"text-white font-semibold text-5xl mb-10"}>نظرات</h3>
            <div className={"flex flex-col gap-10"}>
                <form className={"flex flex-col gap-4"}>
                    <p className={"text-darkerGold text-xl"}>نظر خود را اضافه کنید</p>
                    <input type={"text"}
                           className={"text-white font-extralight shadow shadow-black outline-none rounded-md py-2 px-8 border border-white w-full placeholder:text-white/40"}
                           placeholder={"اینجا بنویسید"}/>
                    <button className={"bg-secondary self-end px-8 py-2 rounded-md shadow shadow-black"}>ثبت نظر
                    </button>
                </form>
                <div className={"flex flex-col gap-10 px-10"}>

                    <div className={"flex items-center gap-5"}>
                        <FaCircleUser size={40} color={"white"}/>
                        <div className={"flex flex-col gap-2"}>
                            <h4 className={"text-gold text-sm"}>محمد</h4>
                            <p className={"text-white"}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                                چاپ و با استفاده از طراحان گرافیک است</p>
                        </div>
                    </div>
                    <div className={"flex items-center gap-5"}>
                        <FaCircleUser size={40} color={"white"}/>
                        <div className={"flex flex-col gap-2"}>
                            <h4 className={"text-gold text-sm"}>علیرضا</h4>
                            <p className={"text-white"}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                                چاپ و با استفاده از طراحان گولید سادگی نامفهوم از صنعت
                                چاپ و با استفاده از طراحان گرافیک است</p>
                        </div>
                    </div>
                    <div className={"flex items-center gap-5"}>
                        <FaCircleUser size={40} color={"white"}/>
                        <div className={"flex flex-col gap-2"}>
                            <h4 className={"text-gold text-sm"}>ابوالفضل</h4>
                            <p className={"text-white"}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                                چاپ و با استفاده از طراحان گرافیک است</p>
                        </div>
                    </div>
                    <div className={"flex items-center gap-5"}>
                        <FaCircleUser size={40} color={"white"}/>
                        <div className={"flex flex-col gap-2"}>
                            <h4 className={"text-gold text-sm"}>رضا</h4>
                            <p className={"text-white"}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعتلورم ایپسوم
                                متن ساختگی با تولید سادگی نامفهوم از صنعت
                                چاپ و با استفاده از طراحان گرافیک است</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Comments;