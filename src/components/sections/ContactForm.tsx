"use client";
import React, { useState } from 'react';
import {toast} from "sonner";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        message: '',
        privacy_policy_agreed: false,
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, type, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
        }));
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.privacy_policy_agreed) {
            toast.info("Please agree to the privacy policy.");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('/api/enquiry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Submission failed');

            const data = await response.json();
            console.log(data);
            toast.success( data.status_message || "Message sent successfully!");

            // Reset form
            setFormData({
                first_name: '',
                last_name: '',
                email: '',
                phone_number: '',
                message: '',
                privacy_policy_agreed: false,
            });
        } catch (error) {
            console.error(error);
            toast.error("Failed to send message. Please try again.");
        } finally {
            setLoading(false);
        }
    };



    return (
        <>
            <div className='flex justify-center items-center w-full'>
                <form  onSubmit={handleSubmit}  className='space-y-7.5'>
                    <div className="flex flex-col lg:flex-row space-y-7.5 lg:space-y-0 lg:space-x-8 w-full">
                        <div>
                            <label htmlFor="first_name">First Name</label>
                            <input type="text"
                                   id="first_name"
                                   name="first_name"
                                   value={formData.first_name}
                                   onChange={handleChange}
                                   placeholder="First Name"
                                   className="w-full border border-input bg-background px-3 py-2 text-sm rounded-[8px] ring-offset-background placeholder-text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </div>
                        <div>
                            <label htmlFor="last_name">Last Name</label>
                            <input type="text"
                                   id="last_name"
                                   name="last_name"
                                   value={formData.last_name}
                                   onChange={handleChange}
                                   placeholder="Last Name"
                                   className="w-full border border-input bg-background px-3 py-2 text-sm rounded-[8px] ring-offset-background placeholder-text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text"
                               id="email"
                               name="email"
                               value={formData.email}
                               onChange={handleChange}
                               placeholder="you@company.com"
                               className="w-full border border-input bg-background px-3 py-2 text-sm rounded-[8px] ring-offset-background placeholder-text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone_number">Phone number</label>
                        <input type="text"
                               id="phone_number"
                               name="phone_number"
                               value={formData.phone_number}
                               onChange={handleChange}
                               placeholder="+254 000 000 000"
                               className="w-full border border-input bg-background px-3 py-2 text-sm rounded-[8px] ring-offset-background placeholder-text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                    </div>

                    <div>
                        <label htmlFor="firstname">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            cols={30}
                            rows={10}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder={'Leave us a message...'}
                            className="w-full border border-input bg-background px-3 py-2 text-sm rounded-[8px] ring-offset-background placeholder-text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        ></textarea>
                    </div>

                    <div className='flex space-x-3'>
                        <input
                            type="checkbox"
                            name="privacy_policy_agreed"
                            checked={formData.privacy_policy_agreed}
                            onChange={handleChange}
                        />
                        <p className='text-[#667085] text-md'>You agree to our friendly privacy policy.</p>
                    </div>

                    <button
                        type="submit"
                        className='w-full py-3 bg-[#DA8E04] border border-[#DA8E04] rounded-[8px] text-white'
                        disabled={loading}
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>

                </form>
            </div>
        </>
    );
};

export default ContactForm;