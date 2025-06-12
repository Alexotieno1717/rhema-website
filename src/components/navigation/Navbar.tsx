"use client"
import React from 'react';
import Link from "next/link";
import {Nav, StyledList, StyledListLinkSecondary} from "@/components/ui/ComponentsStyled";
import {ChevronDownIcon, FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon} from 'lucide-react';
import { Links } from '@/constants';

interface HeaderProps {
    colors?: {
        bg: string;
        buttonColor: string;
        dividerColor: string;
    };
}

const defaultValues = {
    bg: 'transparent',
    buttonColor: '#fff',
    dividerColor: '#fff',
};


const Navbar = ({ colors = defaultValues }: HeaderProps) => {
    const [collapsed, setCollapsed] = React.useState<boolean>(false);

    const toggleCollapse = () => setCollapsed(!collapsed)
    return (
        <>
            <Nav
                $collapsed={collapsed}
                className="transition ease-in-out delay-150 w-full z-50"
            >
                <div className="flex flex-wrap items-center justify-between mx-auto px-4 lg:px-0 py-2 lg:py-0 z-30">
                    <Link href="/" className="flex items-center pl-6 xl:pl-12">
                        <img
                            src={'/assets/logo1.png'}
                            alt="JKM"
                            className='w-[116px] h-[51px] xl:w-[238px] xl:h-[102px]'
                        />
                    </Link>
                    <div className="flex lg:order-2">
                        <div className='hidden lg:block pt-7 mr-5'>
                            <Link href='/' className='text-black space-y-4'>
                                <FacebookIcon className="w-7 h-7 " />
                                <InstagramIcon className="w-7 h-7 " />
                                <TwitterIcon className="w-7 h-7 " />
                                <YoutubeIcon className="w-7 h-7 " />
                            </Link>
                        </div>
                        <button
                            onClick={toggleCollapse}
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            className="inline-flex items-center w-13 h-13 justify-center text-lg text-white border border-white rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                            aria-controls="navbar-sticky"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-8 h-8"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`"items-center justify-between w-full bg-[#C79D38] shadow-xl rounded-lg z-50 ${
                            !collapsed && 'hidden'
                        } lg:flex lg:w-auto lg:order-1"`}
                        id="navbar-sticky"
                    >
                        <ul className="flex flex-col items-center mt-4  font-medium rounded lg:flex-row lg:space-x-[38px] lg:mt-0 lg:p-0 lg:border-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:top-8 ">
                            {Links.map((item) =>
                                item.hasDropDown ? (
                                    <div key={item.id} className="relative group">
                                        <StyledList
                                            $colors={colors}
                                            className=" menu-hover cursor-pointer flex items-center justify-between w-full py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto"
                                        >
                                            <Link href={item.href} className="inline-flex items-center text-sm">
                                                {item.label} <ChevronDownIcon className="w-3.5 h-3.5 ml-2.5" />
                                            </Link>
                                        </StyledList>
                                    </div>
                                ) : (
                                    <li key={item.id}>
                                        <StyledListLinkSecondary
                                            $colors={colors}
                                            href={item.href}
                                            className="block py-2 pl-3 pr-4 lg:text-md xl:text-lg font-semibold text-black rounded lg:bg-transparent lg:p-0 mb-3 lg:mb-0"
                                            aria-current="page"
                                        >
                                            {item.label}
                                        </StyledListLinkSecondary>
                                    </li>
                                ),
                            )}
                        </ul>
                    </div>
                </div>
            </Nav>
        </>
    );
};

export default Navbar;