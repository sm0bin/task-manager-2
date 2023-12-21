import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const navigate = useNavigate();
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <div id="error-page" className="flex flex-col items-center justify-center my-24 gap-3 space-y-4 w-11/12 mx-auto">
                <img className="lg:w-1/3 mx-auto" src="/404-cat.svg" alt="" />
                <div>
                    <h2 className="font-semibold text-2xl text-center">Sorry, an unexpected error has occurred.</h2>
                    <h4 className="font-medium text-lg text-center">
                        <i>{error.statusText || error.message}</i>
                    </h4>
                </div>
                <button onClick={() => navigate(-1)} className="btn btn-neutral">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                    Go Back</button>
            </div>
        </>
    );
}