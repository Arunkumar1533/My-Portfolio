import React from "react";
import Myimage from '../assets/Myimage.jpeg';
import Resume from '../assets/Resume.pdf';
import Arrow from '../assets/Arrow.png';
import styled from 'styled-components';
import AboutSection from "./About";
import Workgallery from "./Workgallery";
import DeveloperIconsBackground from "./DeveloperIconsBackground";
import InfiniteLogoSlider from "./logoslider";
import ContactForm from "./contact";

const HomeSection = styled.section`
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    height: 100vh;
    text-align: center;
    padding: 2rem;
  background: linear-gradient(180deg, #f0f0f0, #00eaff, #002638);
  
    background-size: 180% 180%;
    animation: gradient-animation 10s linear infinite;
    background-repeat: no-repeat;
    background-position: center;
    overflow: hidden;
`;

const Title = styled.h1`
    font-size: 4rem;
    font-weight: 500;
    margin-bottom: -2rem;
    margin-left: 2.5rem;
    font-family:'fjalla one', sans-serif;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

const Subtitle = styled.h2`
    font-size: 6rem;
    color: #14213d;
    font-family: 'fjalla one', sans-serif;
    font-weight: 600;

    @media (max-width: 768px) {
        font-size: 3rem;
        margin-top: 2rem;
    }
`;

const CtaButton = styled.p`
    box-shadow: 0px 2px 10px 0px rgba(20, 33, 61, 1);
    padding: 0.5rem;
    letter-spacing: 0.5rem;
    color: #fee893;
    margin-top: -1rem;
    font-weight: bold;
    font-size: 2rem;
    cursor: pointer;
    transition: background 0.3s;
    border-radius: 33px;

    &:hover {
        background-color: #14213d;
    }

    @media (max-width: 1024px) {
        font-size: 1.5rem;
    }

    @media (max-width: 768px) {
        font-size: 1rem;
        margin-top: 1rem;
    }
`;

const ImageContainer = styled.div`
    margin-top: 2rem;
    box-shadow: 0px 2px 10px 0px rgba(20, 33, 61, 1);
    border-radius: 10px;
`;

const ProfileImage = styled.img`
    width: 100%;
    position: relative;
    max-width: 400px;
    border-radius: 10px;

@media (max-width: 1440px) and min-width: 1024px){
        max-width: 300px;
    }

    @media (max-width: 1040px) and (min-width: 768px) {
        max-width: 300px;
    }
 @media (max-width: 768px) and (min-width:525px) {

        max-width: 300px;
    }
   
    @media (max-width: 525px) {
        max-width: 300px;
    }
`;

const Nametext = styled.div`
    @media (max-width: 1024px) {
        margin-top: 2rem;
    }

    @media (max-width: 768px) {
        margin-top: -1rem;
    }
`;

const downloadResume = () => {
    console.log("Download resume function is being called");
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "Arunkumar.pdf";
    link.click();
};

function Home() {
    return (
        <>
            <HomeSection>
                <DeveloperIconsBackground />
                <Nametext>
                    <Title>IAM</Title>
                    <Subtitle>ARUNKUMAR</Subtitle>
                    <CtaButton>FRONTEND DEVELOPER</CtaButton>
                    <br />
                    <button
                        onClick={downloadResume}
                        id="resume-button"
                        style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                            alignItems: "center",
                            gap: "5px",
                            marginTop: "20px !important",
                        }}
                    >
                        R E S U M E <img src={Arrow} width="20" height="20" alt="Arrow" />
                    </button>
                </Nametext>
                <ImageContainer>
                    <ProfileImage src={Myimage} alt="Arunkumar" />
                </ImageContainer>
            </HomeSection>
            <AboutSection />
            <InfiniteLogoSlider />
            <Workgallery />
            <ContactForm/>
        </>
    );
}

export default Home;
