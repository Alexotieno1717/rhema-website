import React from 'react';

const ContactForm = () => {
    return (
        <>
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
        </>
    );
};

export default ContactForm;