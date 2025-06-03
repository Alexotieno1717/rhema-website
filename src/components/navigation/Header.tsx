"use client"
import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import {Nav, StyledList, StyledListLinkSecondary} from "@/components/ui/ComponentsStyled";
import {ChevronDownIcon} from 'lucide-react';
import { Links } from '@/constants';

interface HeaderProps {
    colors?: {
        bg: string;
        buttonColor: string;
        dividerColor: string;
    };
}

const defaultValues = {
    bg: '#C3973A',
    buttonColor: '#62B84E',
    dividerColor: '#00793F',
};

const Header = ({ colors = defaultValues }: HeaderProps) => {
    const [collapsed, setCollapsed] = React.useState<boolean>(false);

    const toggleCollapse = () => setCollapsed(!collapsed);

    return (
        <>
            <Nav
                $collapsed={collapsed}
                className={`fixed w-full text-white bg-[${colors.bg}] transition-all duration-300`}
                style={{ backgroundColor: colors.bg }}
            >
                <div className="flex flex-wrap items-center justify-between mx-auto pt-2 pb-[11px]">
                    <Link href="/" className="flex items-center pl-4 lg:pl-20">
                        <Image
                            src={'/assets/logo.png'}
                            alt="JKM"
                            width={89}
                            height={69}
                        />
                    </Link>
                    <div className="flex justify-center items-center lg:order-2">
                        <Link href={"/"} className="pr-[50px]">
                            <button className="hidden lg:block bg-white py-2.5 px-6 text-black font-semibold text-md rounded-full hover:bg-opacity-90 transition">
                                Partner With us
                            </button>
                        </Link>
                        <button
                            onClick={toggleCollapse}
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg lg:hidden hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-white"
                            aria-controls="navbar-sticky"
                            aria-expanded={collapsed}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
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
                        className={`items-center justify-between w-full ${collapsed ? 'block' : 'hidden'} lg:flex lg:w-auto lg:order-1`}
                        id="navbar-sticky"
                    >
                        <ul className="flex flex-col mt-4 text-lg font-medium lg:flex-row lg:space-x-[38px] lg:mt-0">
                            {Links.map((item) =>
                                item.hasDropDown ? (
                                    <div key={item.id} className="relative group">
                                        <StyledList
                                            $colors={colors}
                                            className="menu-hover cursor-pointer flex items-center justify-between w-full py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto"
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
                                            className="block py-2 pl-3 pr-4 text-sm font-semibold text-white rounded lg:p-0 mb-3 lg:mb-0"
                                            aria-current="page"
                                        >
                                            {item.label}
                                        </StyledListLinkSecondary>
                                    </li>
                                )
                            )}
                            <li>
                                <Link
                                    href={'/'}
                                    className="hidden lg:block py-2 pl-3 pr-4 text-sm font-semibold text-white rounded lg:bg-transparent lg:p-0 mb-3 lg:mb-0 xl:hidden"
                                    aria-current="page"
                                    target="blank"
                                >
                                    {'Partner With us'}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={''}
                                    className="block lg:hidden py-2 pl-3 pr-4 text-sm font-semibold text-gray-700 bg-white rounded lg:bg-transparent lg:p-0 mb-3 lg:mb-0"
                                    aria-current="page"
                                    target="blank"
                                >
                                    {'Partner With us'}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Nav>
        </>
    );
};

export default Header;