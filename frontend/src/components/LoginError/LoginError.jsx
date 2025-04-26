import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const LoginError = ({ setshowLoginError }) => {
    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-sm relative animate-fade-in">
                <FontAwesomeIcon icon={faXmark} className="absolute top-3 right-3 text-gray-500 hover:text-black cursor-pointer" onClick={() => setshowLoginError(false)} />
                <h2 className="text-lg font-semibold text-red-600 mb-2 text-center">Log In to Continue</h2>
                <p className="text-sm text-gray-600 text-center">You must be logged in to proceed to checkout.</p>
            </div>
        </div>
    );
};

export default LoginError;
