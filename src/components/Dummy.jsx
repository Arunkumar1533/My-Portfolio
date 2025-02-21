import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import styled from "styled-components";

const RESPONSIVE_BREAKPOINT = 768;
const responsiveStyles = `
  @media (max-width: ${RESPONSIVE_BREAKPOINT}px) {
    margin-top: -1rem;
  }
`;

const PageContainer = styled.div`
  padding: 2rem;
  text-align: center;
  ${responsiveStyles}
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3em;
  z-index: 1;
  position: absolute;
  top: 10px;
  left: 50%;
  font-size: 0.9rem;
  transform: translateX(-50%);
  background-color: #14213d;
  padding: 1rem 2rem;
  @media (max-width: 1024px) {
    padding: 1rem 1rem;
    width: 50%;
  }
  @media (max-width: 768px) {
    align-items: flex-start;
    flex-direction: row;
    position: relative;
    top: 0;
    width: 100%;
    border-radius: 0;
  }
`;

const Header = () => {
  console.log("Header component is being rendered");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const downloadResume = () => {
    console.log("Download resume function is being called");
    try {
      const link = document.createElement("a");
      link.href = "https://example.com/resume.pdf";
      link.download = "Arunkumar.pdf";
      link.click();
    } catch (error) {
      console.error("Error downloading resume:", error);
    }
  };

  const toggleSidebar = () => {
    console.log("Toggle sidebar function is being called");
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <Navbar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/works">Works</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <button onClick={downloadResume}>Download Resume</button>
        <button onClick={toggleSidebar}>Toggle Sidebar</button>
      </Navbar>
      <Routes>
        <Route path="/" element={<PageContainer>Home Page</PageContainer>} />
        <Route path="/about" element={<PageContainer>About Page</PageContainer>} />
        <Route path="/works" element={<PageContainer>Works Page</PageContainer>} />
        <Route path="/contact" element={<PageContainer>Contact Page</PageContainer>} />
      </Routes>
    </Router>
  );
};

export default Header;