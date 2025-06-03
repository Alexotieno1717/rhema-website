"use client"
import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import {Nav, StyledList, StyledListLinkSecondary} from "@/components/ui/ComponentsStyled";
import {ChevronDownIcon, FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon} from 'lucide-react';
import { Links } from '../../constants';

interface HeaderProps {
    colors?: {
        bg: string;
        buttonColor: string;
        dividerColor: string;
    };
}

const defaultValues = {
    bg: 'transparent',
    buttonColor: '#62B84E',
    dividerColor: '#00793F',
};


const Navbar = ({ colors = defaultValues }: HeaderProps) => {
    const [collapsed, setCollapsed] = React.useState<boolean>(false);

    const toggleCollapse = () => setCollapsed(!collapsed)
    return (
        <>
            <Nav
                $collapsed={collapsed}
                className="transition ease-in-out delay-150 fixed w-full text-white"
            >
                <div className="flex flex-wrap items-center justify-between mx-auto px-4 lg:px-0 py-4 z-30">
                    <Link href="/public" className="flex items-center pl-12">
                        <Image
                            src={'/assets/logo.png'}
                            alt="JKM"
                            width={122.2}
                            height={101}
                        />
                    </Link>
                    <div className="flex lg:order-2">
                        <div className='hidden lg:block pt-7 mr-5'>
                            <Link href='/public' className='space-y-4'>
                                <FacebookIcon className="w-10 h-10 " />
                                <InstagramIcon className="w-10 h-10 " />
                                <TwitterIcon className="w-10 h-10 " />
                                <YoutubeIcon className="w-10 h-10 " />
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
                        <ul className="flex flex-col items-center mt-4 text-lg font-medium rounded lg:flex-row lg:space-x-[38px] lg:mt-0 lg:p-0 lg:border-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:top-8 ">
                            {Links.map((item) =>
                                item.hasDropDown ? (
                                    <div key={item.id} className="relative group">
                                        <StyledList
                                            $colors={colors}
                                            className=" menu-hover cursor-pointer flex items-center justify-between w-full py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto"
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
                                            className="block py-2 pl-3 pr-4 text-sm font-semibold text-white rounded lg:bg-transparent lg:p-0 mb-3 lg:mb-0"
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