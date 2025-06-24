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
    bg: '#D3A84B',
    buttonColor: '#fff',
    dividerColor: '#fff',
};

const Header = ({ colors = defaultValues }: HeaderProps) => {
    const [collapsed, setCollapsed] = React.useState<boolean>(false);

    const toggleCollapse = () => setCollapsed(!collapsed);

    return (
        <>
            <Nav
                $collapsed={collapsed}
                style={{
                    background: collapsed
                        ? colors.bg
                        : 'linear-gradient(to right, #FFEA8E, #D3A84B)',
                }}
                className="fixed w-full transition-all duration-300 px-5 lg:px-o py-2 lg:py-2 z-50"
            >
                <div className="flex flex-wrap items-center justify-between mx-auto">
                    <Link href="/" className="flex items-center pl-4 lg:pl-20">
                        <Image
                            src={'/assets/new_logo_2.png'}
                            alt="JKM"
                            width={68}
                            height={68}
                        />
                    </Link>
                    <div className="flex justify-center items-center lg:order-2">
                        <button
                            onClick={toggleCollapse}
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg lg:hidden hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-black"
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
                                            className="menu-hover cursor-pointer flex items-center justify-between w-full py-2 pl-3 pr-4 text-lg text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto"
                                        >
                                            <Link href={item.href} className="inline-flex items-center text-lg">
                                                {item.label} <ChevronDownIcon className="w-3.5 h-3.5 ml-2.5" />
                                            </Link>
                                        </StyledList>
                                    </div>
                                ) : (
                                    <li key={item.id}>
                                        <StyledListLinkSecondary
                                            $colors={colors}
                                            href={item.href}
                                            className="block py-2 pl-3 pr-4 text-lg font-medium text-black rounded lg:p-0 mb-3 lg:mb-0"
                                            aria-current="page"
                                        >
                                            {item.label}
                                        </StyledListLinkSecondary>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>
            </Nav>
        </>
    );
};

export default Header;