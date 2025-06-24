import React from 'react';
import Link from "next/link";
import {IContact} from "@/types";
import ContactForm from "@/components/sections/ContactForm";

interface ContactSectionProps {
    data: IContact
}
const ContactSection = ({data}: ContactSectionProps) => {
    return (
        <>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3.5 pt-24 px-6 lg:px-[41px]'>
                <div className=''>
                    <div className='pb-16 text-center'>
                        <h4 className='text-[#DA8E04] pb-3 text-shadow-md font-semibold'>{data.title}</h4>
                        <h1 className='text-[#101828] text-4xl font-semibold pb-5'>{data.subtitle}</h1>
                        <p className='text-[#475467] text-xl font-normal'>{data.description}</p>
                    </div>
                    <ContactForm />
                </div>

                <div>
                    <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-start lg:space-x-5">
                        {/* Social Media Icons */}
                        <div className="flex flex-row lg:flex-col justify-center items-center space-x-4 lg:space-x-0 lg:space-y-4 mb-6 lg:mb-0">
                            {data.socialMedia.map((item, i) => (
                                <Link href={item.linksText} className="cursor-pointer" target={"_blank"} key={i}>
                                    <img src={item.icons} alt="icons" />
                                </Link>
                            ))}
                        </div>

                        {/* Contact Image (only on large screens) */}
                        <img
                            src={data.image}
                            className="hidden lg:block w-full object-cover"
                            alt="contact"
                        />
                    </div>
                </div>

            </div>
        </>
    );
};

export default ContactSection;