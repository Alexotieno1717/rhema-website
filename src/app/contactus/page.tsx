import React from 'react';
import Header from "@/components/navigation/Header";
import Link from "next/link";

const Page = () => {
    return (
        <>
            <div className="relative z-50">
                <Header />
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3.5 pt-24 px-6 lg:px-[41px]'>
                <div className=''>
                    <div className='pb-16 text-center'>
                        <h4 className='text-[#DA8E04] pb-3 text-shadow-md font-semibold'>Contact Us</h4>
                        <h1 className='text-[#101828] text-4xl font-semibold pb-5'>Get in touch</h1>
                        <p className='text-[#475467] text-xl font-normal'>We’d love to hear from you. Please fill out this form.</p>
                    </div>
                    <div className='flex justify-center items-center w-full'>
                        <form action="" className='space-y-7.5'>
                            <div className="flex flex-col lg:flex-row space-y-7.5 lg:space-y-0 lg:space-x-8 w-full">
                                <div>
                                    <label htmlFor="firstname">First Name</label>
                                    <input type="text"
                                           id="firstname"
                                           placeholder="First Name"
                                           className="w-full border border-input bg-background px-3 py-2 text-sm rounded-[8px] ring-offset-background placeholder-text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="firstname">Last Name</label>
                                    <input type="text"
                                           id="lastname"
                                           placeholder="Last Name"
                                           className="w-full border border-input bg-background px-3 py-2 text-sm rounded-[8px] ring-offset-background placeholder-text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="firstname">Email</label>
                                <input type="text"
                                       id="email"
                                       placeholder="you@company.com"
                                       className="w-full border border-input bg-background px-3 py-2 text-sm rounded-[8px] ring-offset-background placeholder-text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                />
                            </div>

                            <div>
                                <label htmlFor="firstname">Phone number</label>
                                <input type="text"
                                       id="email"
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
                                    placeholder={'Leave us a message...'}
                                    className="w-full border border-input bg-background px-3 py-2 text-sm rounded-[8px] ring-offset-background placeholder-text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                ></textarea>
                            </div>

                            <div className='flex space-x-3'>
                                <input
                                    type="checkbox"
                                />
                                <p className='text-[#667085] text-md'>You agree to our friendly privacy policy.</p>
                            </div>

                            <button className='w-full py-3 bg-[#DA8E04] border border-[#DA8E04] rounded-[8px] text-white'> Send Message</button>

                        </form>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-start lg:space-x-5">
                        {/* Social Media Icons */}
                        <div className="flex flex-row lg:flex-col justify-center items-center space-x-4 lg:space-x-0 lg:space-y-4 mb-6 lg:mb-0">
                            <Link href={"#"} className="cursor-pointer" target={"_blank"}>
                                <img src="/assets/facebook.png" alt="facebook" />
                            </Link>
                            <Link href={"#"} className="cursor-pointer" target={"_blank"}>
                                <img src="/assets/instagram.png" alt="insta" />
                            </Link>
                            <Link href={"#"} className="cursor-pointer" target={"_blank"}>
                                <img src="/assets/twitter.png" alt="twitter" />
                            </Link>
                            <Link href={"#"} className="cursor-pointer" target={"_blank"}>
                                <img src="/assets/youtube-icon.png" alt="youtube" />
                            </Link>
                        </div>

                        {/* Contact Image (only on large screens) */}
                        <img
                            src="/assets/contact.png"
                            className="hidden lg:block w-full object-cover"
                            alt="contact"
                        />
                    </div>
                </div>

            </div>
        </>
    );
};

export default Page;