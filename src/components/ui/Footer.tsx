import React from 'react';
import Link from "next/link";

const Footer = () => {
    return (
        <div className='bg-[#EEEEEE] flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-5 py-6 px-4 lg:py-12 lg:px-[116px]'>

            <div>
                <img src="/assets/footer-logo.png" alt="footer logo" />
            </div>

            <div className='text-[#667085]'>
                <p>© All Rights Reserved. 2025 KJM</p>
            </div>

            <div className='flex justify-center items-center space-x-8 text-[#667085]'>
                <Link href={'#'}>Terms</Link>
                <Link href={'#'}>Privacy</Link>
                <Link href={'#'}>Cookies</Link>
            </div>
        </div>
    );
};

export default Footer;