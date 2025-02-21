import { useState } from "react";
import contact from "../assets/contact.jpg";
export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Contact Me</h2>
      <div style={styles.contentWrapper}>
        <img 
          src={contact}
          alt="Contact" 
          style={styles.image} 
        />
        {submitted ? (
          <p style={styles.successMessage}>Thank you for reaching out! I'll get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} style={styles.form}>
            <div>
              <label style={styles.label}>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>
            <div>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>
            <div>
              <label style={styles.label}>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                style={styles.textarea}
                required
              ></textarea>
            </div>
            <button type="submit" style={styles.button}>Send Message</button>
          </form>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "80%",
    margin: "6rem auto",
    padding: "20px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
    borderRadius: "12px",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    fontFamily: "'fjalla one', sans-serif",
    marginBottom: "16px",
    textAlign: "center",
    marginBottom:"20px"
  },
  contentWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  image: {
    width: "400px",
    height: "auto",
    borderRadius: "8px",
  },
  successMessage: {
    color: "green",
    fontSize: "16px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
    borderRadius: "8px",
    padding:'15px'
    
  },
  label: {
    fontSize: "14px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    minHeight: "100px",
    fontSize: "16px",
  },
  button: {
    backgroundColor: "#007BFF",
    color: "#fff",
    padding: "10px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    textAlign: "center",
  },
  "@media (max-width: 600px)": {
    container: {
      padding: "15px",
    },
    heading: {
      fontSize: "20px",
    },
    contentWrapper: {
      flexDirection: "column",
      alignItems: "center",
    },
    image: {
      width: "100%",
      maxWidth: "250px",
    },
    input: {
      fontSize: "14px",
      padding: "8px",
    },
    textarea: {
      fontSize: "14px",
      padding: "8px",
    },
    button: {
      fontSize: "14px",
      padding: "8px",
    },
  },
};
