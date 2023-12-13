import React from 'react'

function ErrorPage() {  
    return (
        <>
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="bg-white p-8 shadow-md rounded-md">
                    <h1 className="text-4xl font-bold text-red-500 mb-4">404 - Not Found</h1>
                    <p className="text-gray-700 mb-4">Oops! The page you are looking for does not exist.</p>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                        onClick={() => window.history.back()}
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </>
    )
}

export default ErrorPage