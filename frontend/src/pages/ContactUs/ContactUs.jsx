import React, { useState, useContext, useEffect } from 'react';
import { StoreContext } from '../../context/StoreContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import axios from 'axios';

const ContactUs = () => {
    const { url } = useContext(StoreContext);
    const [data, setdata] = useState({
        name: "",
        email: "",
        message: ""
    });
    const { setpage } = useContext(StoreContext);
              
    useEffect(() => { 
        setpage("Contact Us");
    },[])

    const handleChange = (e) => {
        const { id, value } = e.target;
        setdata((prevdata) => ({
            ...prevdata,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(url + "/api/query/send", data);
            if (response.data.success) {
                toast.success(response.data.message);
                setdata({
                    name: "",
                    email: "",
                    message: ""
                })
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("Network error. Please try again.");
        }
    };

    return (
        <div className="max-w-5xl mx-auto mt-10 p-6 shadow-xl rounded-xl border-2 bg-white">
            <h2 className="text-2xl font-bold mb-10 text-center text-green-700">Contact Us</h2>

            <div className="flex flex-col lg:flex-row gap-10">
                {/* Contact Info */}
                <div className="lg:w-1/2 space-y-4 border-r-0 lg:border-r border-gray-300 pr-0 lg:pr-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-2">Get in Touch</h3>
                    <p className="text-sm text-gray-700">
                        Whether you have a question about our products or need support, our team is ready to help you.
                    </p>

                    <div className="mt-6 text-sm text-gray-700 space-y-3">
                        <p className='flex items-center gap-3'>
                            <FontAwesomeIcon icon={faEnvelope} className='text-green-600' />
                            <strong>Email: </strong>
                            <span className='text-blue-600'>contact@mediswift.com</span>
                        </p>
                        <p className='flex items-center gap-3'>
                            <FontAwesomeIcon icon={faPhone} className='text-green-600' />
                            <strong>Phone: </strong>
                            <span className='text-blue-600'>+1-212-456-7890</span>
                        </p>
                        <p className='flex items-center gap-3'>
                            <FontAwesomeIcon icon={faClock} className='text-green-600' />
                            <strong>Business Hours: </strong>
                            <span className='text-blue-600'>Monday - Friday, 9:00 AM - 6:00 PM (EST)</span>
                        </p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="lg:w-1/2">
                    <h3 className="text-lg font-semibold text-green-700 mb-4">Have a Query?</h3>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input id="name" type="text" required placeholder="Your name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" value={data.name} onChange={handleChange} />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input id="email" type="email" required placeholder="Your email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" value={data.email} onChange={handleChange} />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea id="message" required placeholder="Your message" rows="5" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" value={data.message} onChange={handleChange} />
                        </div>

                        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
