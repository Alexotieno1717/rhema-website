import styled from 'styled-components';
import Link from "next/link";


interface NavProps {
    // $scrollPosition?: number;
    $collapsed: boolean;
    $colors?: {
        bg: string;
        buttonColor: string;
        dividerColor: string;
    };
}

interface StyledProps {
    $colors?: {
        bg?: string;
        buttonColor?: string;
        dividerColor?: string;
    };
}

const Nav = styled.nav<NavProps>`
  background: ${(props) =>
    props.$collapsed ? props?.$colors?.bg : 'transparent'};
  
  }
  `;

const StyledListLinkSecondary = styled(Link)<StyledProps>`
  &:hover {
    color: ${(props) => props.$colors?.buttonColor};
  }
`;
const StyledListLink = styled(Link)<StyledProps>`
  &:hover {
    background: ${(props) => props.$colors?.buttonColor};
  }
`;

const StyledList = styled.li<StyledProps>`
  background-color: ${(props) => props.$colors?.bg};
  &:hover {
    color: ${(props) => props.$colors?.buttonColor};
  }
`;

const Ul = styled.ul<StyledProps>`
  background: ${(props) => props.$colors?.bg};
`;

export {Nav, StyledListLinkSecondary, StyledListLink, StyledList, Ul };