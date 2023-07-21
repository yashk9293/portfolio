/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <span className="logo">YASH</span>
        <div className="links">
          <a href="https://www.linkedin.com/in/yashk9293/" target={"blank"} title="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/yashk9293/" target={"blank"} title="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com/Yashk_9293" target={"blank"} title="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <p className="copyright">
          <i className="fas fa-heart"></i>
          Created By Yash
        </p>
      </div>
    </footer>
  );
}

export default Footer;
