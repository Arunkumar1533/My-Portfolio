import React from "react";
import { useState } from "react";
import {
    BrowserRouter as Router,
    NavLink,
    Route,
    Routes,
} from "react-router-dom";
import styled from "styled-components";
import AboutSection from "./About";
import Home from "./home";
import Workgallery from "./Workgallery";
import Footer from "./footer";
import AKlogo from "../assets/Aklogo.png";
import ContactForm from "./contact";

 // Import the Contact component

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

   
    const Navbar = styled.nav`
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 3em;
        z-index: 1;
        position: absolute;
        top: 10px;
        left: 50%;
        width: 45%;
        transform: translateX(-50%);
        background-color: #14213d;
        padding: 0.6rem;
        @media (max-width: 1440px) and min-width: 1024px) {
            padding: 1rem;
            font-size: 1rem;
            width: 75%;
        }
        @media (max-width: 1040px) and (min-width: 768px) {
            align-items: flex-start;
            flex-direction: row;
            position: absolute;
            top: 10px;
            width: 90%;
            border-radius: 35px;
        }
            @media (max-width: 768px)  {
            
align-items: flex-start;
            flex-direction: row;
            position: relative;
            top: 0;
            width: 100%;
            border-radius: 0;
}

    `;

    const MenuButton = styled.button`
        background: none;
        border: none;
        color: #fee893;
        font-size: 2rem;
        cursor: pointer;
        transition: color 0.3s;
        display: none;

        &:hover {
            color: #14213d;
        }

        @media (max-width: 768px) {
            display: block;
            font-size: 1.5rem;
        }
    `;

    const NavLinkstyled = styled(NavLink)`
        color: #eef0ff;
        text-decoration: none;
        font-size: 0.8em;
        padding: 0.5rem;
        width: 100%;
        justify-content: space-evenly;
        transition: color 0.3s;

        &:hover {
            color: #fca311;
        }

        &.active {
            color: #fca311;
        }
        @media (max-width: 1024px) {
            font-size: 0.7rem;
        }

        @media (max-width: 768px) {
            font-size: 1rem;
        }
    `;

    const NavLinkContainer = styled.ul`
        display: flex;
        list-style: none;
        justify-content: space-evenly;
        align-items: center;
        text-align: center;
        padding: 0;
        margin: 0;
        font-size: 1rem;
        width: 100%;
        @media (max-width: 768px) {
            flex-direction: column;
            width: 100%;
            display: ${(props) => (props.isOpen ? "block" : "none")};
            background-color: #14213d;
            position: absolute;
            top: 60px;
            left: 0;
            padding: 1rem;
        }
    `;

    const NavItem = styled.div`
        margin: 0rem;
        font-size: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    return (
        <Router>
            <Navbar>
                <NavLinkContainer isOpen={isOpen}>
                    {[
                        { name: "H O M E", path: "/" },
                        { name: "A B O U T", path: "/about" },
                    ].map((item) => (
                        <NavItem key={item.name}>
                            <NavLinkstyled to={item.path} onClick={() => setIsOpen(false)}>
                                {item.name}
                            </NavLinkstyled>
                        </NavItem>
                    ))}
                    <NavItem className="logo">
                        <img src={AKlogo} alt="Logo" style={{ height: "45px", margin: "0 1rem" }} />
                    </NavItem>
                    {[
                        { name: "W O R K S", path: "/works" },
                        { name: "C O N T A C T", path: "/contact" },
                    ].map((item) => (
                        <NavItem key={item.name}>
                            <NavLinkstyled to={item.path} onClick={() => setIsOpen(false)}>
                                {item.name}
                            </NavLinkstyled>
                        </NavItem>
                    ))}
                </NavLinkContainer>
              
                <MenuButton onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "✖" : "☰"}
                </MenuButton>
            </Navbar>
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutSection />} />
                <Route path="/works" element={<Workgallery />} />
                <Route path="/contact" element={<ContactForm />} />
                
            </Routes>
        </Router>
    );
};

export default Header;
