import React from 'react';

const AboutUs = () => {
    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 border-2 border-green-600 bg-white shadow-xl rounded-xl">
            <h2 className="text-2xl font-bold mb-6 text-center text-green-700">About Us</h2>

            <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed">
                Welcome to our online medicine store — your trusted destination for quick, affordable, and safe access to healthcare products.
                We're committed to helping you and your family stay healthy by delivering genuine medicines to your doorstep.
            </p>

            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                <h3 className="text-lg font-semibold text-green-700 mb-2">Who We Are</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                    We are a dedicated team of healthcare professionals, pharmacists, and tech experts working together to improve the way people access essential medicines. With a strong focus on reliability and care, our platform ensures every order is handled with precision and compassion.
                </p>
            </div>

            <div className="mt-6 bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                <h3 className="text-lg font-semibold text-green-700 mb-2">Our Core Values</h3>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-1">
                    <li><strong>Authenticity:</strong> Only verified, quality-checked medicines.</li>
                    <li><strong>Accessibility:</strong> Healthcare at your fingertips, wherever you are.</li>
                    <li><strong>Support:</strong> Friendly and fast customer assistance when you need it.</li>
                </ul>
            </div>

            <div className="mt-6 bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                <h3 className="text-lg font-semibold text-green-700 mb-2">Why Customers Trust Us</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                    Our transparent processes, genuine products, and timely delivery have helped us build a loyal customer base.
                    We're here not just to deliver medicines — but to care for your well-being every step of the way.
                </p>
            </div>

            <div className="mt-6 text-sm text-gray-600 text-center">
                <p>
                    Have questions?{' '}
                    <a href='/contactus' className="text-green-700 font-medium underline cursor-pointer">
                        Contact us
                    </a>
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
