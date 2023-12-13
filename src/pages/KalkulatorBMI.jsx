import React, { useState } from "react";

function KalkulatorBMI() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBMI] = useState(null);
    const [status, setStatus] = useState('');

    const calculateBMI = () => {
        const weightInKg = parseFloat(weight);
        const heightInM = parseFloat(height) / 100;

        if (isNaN(weightInKg) || isNaN(heightInM) || heightInM <= 0) {
            alert('Please enter valid weight and height values.');
            return;
        }

        const bmiValue = weightInKg / (heightInM * heightInM);
        setBMI(bmiValue.toFixed(2));

        // Menentukan status BMI
        if (bmiValue < 18.5) {
            setStatus('Underweight');
        } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
            setStatus('Normal weight');
        } else if (bmiValue >= 25 && bmiValue < 29.9) {
            setStatus('Overweight');
        } else {
            setStatus('Obesity');
        }
    };

    const resetCalculator = () => {
        setWeight('');
        setHeight('');
        setBMI(null);
        setStatus('');
    };

    const getStatusColor = () => {
        if (bmi === null) return 'text-gray-800'; // Default color

        // Menentukan warna berdasarkan kategori BMI
        if (bmi < 18.5) {
            return 'text-red-500';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            return 'text-green-500';
        } else if (bmi >= 25 && bmi < 29.9) {
            return 'text-yellow-500';
        } else {
            return 'text-red-500';
        }
    };
    return (
        <div className="mt-16 mx-auto mb-16 flex items-center justify-center">
            <div
                className="max-w-md w-full mx-auto mt-8 p-6 bg-[#f0f4fc] rounded-md shadow-md"
                data-aos="fade-up"
            >
                <h2 className="text-3xl font-bold mb-4 text-center text-[#296fde]">Kalkulator BMI</h2>
                <p className="text-gray-700 text-sm mb-7 text-center">
                    Untuk menghitung BMI, masukkan tinggi badan dan berat badan kamu yuk!
                </p>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="weight">
                        Weight (kg):
                    </label>
                    <input
                        type="number"
                        id="weight"
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="height">
                        Height (cm):
                    </label>
                    <input
                        type="number"
                        id="height"
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                    />
                </div>

                <div className="flex space-x-4 justify-center mt-10">
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                        onClick={calculateBMI}
                    >
                        Calculate BMI
                    </button>

                    <button
                        className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:border-blue-300"
                        onClick={resetCalculator}
                    >
                        Reset
                    </button>
                </div>

                {bmi !== null && (
                    <div className="mt-4 text-center">
                        <h3 className="text-xl font-semibold mb-2">Your BMI:</h3>
                        <p className={`font-bold ${getStatusColor()}`}>{bmi}</p>
                        <p className={`font-bold ${getStatusColor()}`}>Status: {status}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default KalkulatorBMI