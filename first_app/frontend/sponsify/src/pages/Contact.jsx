import React from "react";

const Contact = () => {
  return (
    <div className="contact-page" style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Contact Us</h2>
      <p>You can reach us at:</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><strong>Email:</strong> support@oursponsorship.org</li>
        <li><strong>Phone:</strong> +123 456 7890</li>
        <li><strong>Address:</strong> 123 Hope Street, City, Country</li>
      </ul>

      <div style={{ marginTop: "2rem" }}>
        <p>Follow us on social media:</p>
        <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ marginRight: '15px' }}>Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" style={{ marginRight: '15px' }}>Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
      </div>
    </div>
  );
};

export default Contact;
