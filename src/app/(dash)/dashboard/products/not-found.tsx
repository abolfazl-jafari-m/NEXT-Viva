import React from 'react';

function NotFound() {
    return (
        <div className={"flex items-center justify-center w-full h-full gap-2"}>
            <span className={"font-semibold text-4xl"}>404</span>
            <span className={"text-darkChocolate text-xl"}>صفحه مورد نظر  یافت نشد</span>
        </div>
    );
}

export default NotFound;