import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import G from "../assets/G.png";
import "../components/Workgallery.css";

const styles = {
  modalButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "20px",
    flexWrap: "wrap",
  },
  modalButton: {
    padding: "10px 20px",
    backgroundColor: "#0f1a2b",
    color: "#fff",
    borderRadius: "5px",
    textDecoration: "none",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "bold",
    minWidth: "120px",
    transition: "background-color 0.3s ease-in-out",
  },
  modalButtonHover: {
    backgroundColor: "#0056b3",
  },
  modalContent: {
    maxHeight: "30vh", /* Enables scrolling when content is too long */
    overflowY: "auto",
    
    padding: "10px",
  }
};

// Updated projects with unique descriptions and links
const projects = [
  {
    id: 1,
    title: "Guide Now",
    image: G,
    description: "GuideNow – Your Ultimate City Navigation Companion ",
    content:  "Guide Now is a fully responsive web application built using the React framework. It provides users with an intuitive way to explore a city, offering navigation to main areas, top tourist destinations, nearby hospitals, temples, and other important locations. The platform includes a separate page for each city, ensuring personalized recommendations based on the user's location. With seamless integration of interactive maps and real-time directions, Guide Now enhances the travel experience by making city exploration efficient and accessible. Guide Now is a fully responsive web application built using the React framework. It provides users with an intuitive way to explore a city, offering navigation to main areas, top tourist destinations, nearby hospitals, temples, and other important locations. The platform includes a separate page for each city, ensuring personalized recommendations based on the user's location. With seamless integration of interactive maps and real-time directions, Guide Now enhances the travel experience by making city exploration efficient and accessible.\nKey Features:\n- Real-time Navigation: Get directions to key locations with integrated maps.\n- **City-Specific Pages**: Dedicated pages for each city with personalized recommendations.\n- **Nearby Attractions**: Discover top tourist destinations, restaurants, and cultural spots.\n- **Essential Services**: Locate nearby hospitals, police stations, and transport hubs.\n- **User Reviews & Ratings**: See real-time user feedback on different locations.\n- Offline Access: Save city maps and information for offline use.",
    link: "https://example.com/project1",
    github: "https://github.com/user/project1",
    
  },
  {
    id: 2,
    title: "Project Two",
    image: "https://fastly.picsum.photos/id/85/1280/774.jpg?hmac=h_HHpvfhMmLP6uOSrHS7HSlXVRuMKfBbc8HFKd1Acv4",
    description: "A mobile-friendly e-commerce platform with a seamless checkout experience.",
    link: "https://example.com/project2",
    github: "https://github.com/user/project2",
  },
  {
    id: 3,
    title: "Project Three",
    image: "https://fastly.picsum.photos/id/200/1280/774.jpg?hmac=xyz123",
    description: "A dynamic portfolio website showcasing creative projects.",
    link: "https://example.com/project3",
    github: "https://github.com/user/project3",
  },
  {
    id: 4,
    title: "Project Four",
    image: "https://fastly.picsum.photos/id/300/1280/774.jpg?hmac=lmnop",
    description: "An AI-powered chatbot to enhance customer service.",
    link: "https://example.com/project4",
    github: "https://github.com/user/project4",
  },
  {
    id: 5,
    title: "Project Five",
    image: "https://fastly.picsum.photos/id/400/1280/774.jpg?hmac=qrstuv",
    description: "A data visualization dashboard with real-time analytics.",
    link: "https://example.com/project5",
    github: "https://github.com/user/project5",
  },
  {
    id: 6,
    title: "Project Six",
    image: "https://fastly.picsum.photos/id/400/1280/774.jpg?hmac=qrstuv",
    description: "A data visualization dashboard with real-time analytics.",
    link: "https://example.com/project5",
    github: "https://github.com/user/project5",
  },
  // {
  //   id: 7,
  //   title: "Project Seven",
  //   image: "https://fastly.picsum.photos/id/400/1280/774.jpg?hmac=qrstuv",
  //   description: "A data visualization dashboard with real-time analytics.",
  //   link: "https://example.com/project5",
  //   github: "https://github.com/user/project5",
  // },
  // {
  //   id: 8,
  //   title: "Project Eight",
  //   image: "https://fastly.picsum.photos/id/400/1280/774.jpg?hmac=qrstuv",
  //   description: "A data visualization dashboard with real-time analytics.",
  //   link: "https://example.com/project5",
  //   github: "https://github.com/user/project5",
  // },
  // {
  //   id: 9,
  //   title: "Project nine",
  //   image: "https://fastly.picsum.photos/id/400/1280/774.jpg?hmac=qrstuv",
  //   description: "A data visualization dashboard with real-time analytics.",
  //   link: "https://example.com/project5",
  //   github: "https://github.com/user/project5",
  // },
];

const LazyImage = ({ src, alt, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="lazy-image-container" ref={imgRef}>
      {isVisible ? (
        <img src={src} alt={alt} className={className} />
      ) : (
        <div className="placeholder">Loading...</div>
      )}
    </div>
  );
};

const Workgallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(4);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";

  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const loadMoreProjects = () => {
    setVisibleProjects(projects.length);
  };

  return (
    <div className="container1">
      <div className="head-text" style={{ textAlign: "center", marginBottom: "20px" }}>
        <h4 className="Project-title">Projects</h4>
        <h1>Here You Can Find My Works</h1>
      </div>

      <div className="grid">
        {projects.slice(0, visibleProjects).map((project) => (
          <div key={project.id} className="grid-item" onClick={() => openModal(project)}>
            <LazyImage src={project.image} alt={project.title} className="grid-image" />
            <div className="overlay">
              <span className="title">{project.title}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="load-more-container">
        {visibleProjects < projects.length ? (
          <motion.button
            className="load-more-button"
            onClick={loadMoreProjects}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            Load More
          </motion.button>
        ) : (
          <motion.button
            className="load-more-button"
            onClick={() => setVisibleProjects(4)}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            Show Less
          </motion.button>
        )}
      </div>

      {selectedProject && (
        <div className="modal-backdrop">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="modal"
          >
            <button className="close-button" onClick={closeModal}>✕</button>
            <div className="modal-content"> 
              <h2 className="modal-title">{selectedProject.title}</h2>
              <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
              <div style={styles.modalButtons} className="modal-buttons">
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" style={styles.modalButton} className="modal-button" >
                  View Project
                </a>
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" style={styles.modalButton} className="modal-button">
                  GitHub Repo
                </a>
              </div>
              <p className="modal-description">{selectedProject.description}</p>
              <p className="modal-extra-content">{selectedProject.content}</p>
              
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Workgallery;
