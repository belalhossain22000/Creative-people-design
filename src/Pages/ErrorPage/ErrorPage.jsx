import React from 'react';
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div id="error-page" className='flex flex-col justify-center items-center'>
           
            <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1687337201~exp=1687337801~hmac=cac758bbf360fc74e2faf2c18a8aade8d586e4e41daa673adcadcbffb367f014" alt="" />
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
           <Link to="/"> <button className='bg-yellow-400 p-5 rounded-md text-xl font-bold'> Back To Home</button></Link>
        </div>
    );
};

export default ErrorPage;