import React from "react";
import "./LPstyle.css";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      {/* Navbar Start */}
      <header>
        <nav
          className="navbar navbar-expand-sm px-5"
          style={{ backgroundColor: "#ff0000" }}
        >
          <a
            className="navbar-brand font-weight-bold text-dark fw-bold"
            href="#"
          >
            WEBSITE LOGO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end text-primary font-weight-bold"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link rounded " href="#">
                  Home <span className="sr-only" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link rounded" href="#">
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link rounded" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link rounded" href="#">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {/*  Navbar End  */}
      {/* hero section start */}
      <section className="hero" id="home">
        <main className="content ps-5">
          <h1 className="">
            Custom Your <span>Keyboard</span>
          </h1>
          <p>Lets Build Dream Keyboard as you like</p>
          <a href="#" className="cta text-decoration-none">
            Custom Now
          </a>
        </main>
      </section>
      {/* hero section end */}
      {/* Contact Us Start*/}
      <div className="container mt-5">
        <h2>Contact Us</h2>
        <form id="contactForm">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              className="form-control"
              id="message"
              rows={5}
              placeholder="Enter your message"
              defaultValue={""}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary mt-2 border-0"
            style={{ backgroundColor: "#ff0000" }}
          >
            Submit
          </button>
        </form>
      </div>
      {/* Contact Us End*/}
      {/* Footer Start */}
      <div className="d-flex justify-content-evenly border-">
        <div className="card border-0">
          <div className="card-body">
            <h5 className="card-title">My Social Media</h5>
            <a
              href="https://www.instagram.com/"
              className="btn btn-primary border-0"
              style={{ backgroundColor: "#ff0000" }}
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/"
              className="ms-3 btn btn-primary border-0"
              style={{ backgroundColor: "#ff0000" }}
            >
              Linkedin
            </a>
            <a
              href="https://www.facebook.com/"
              className="ms-3 btn btn-primary border-0"
              style={{ backgroundColor: "#ff0000" }}
            >
              Facebook
            </a>
          </div>
        </div>
        <div className="card text-center border-0">
          <div className="card-body">
            <h3 className="card-title py-1">Custom Keyboard</h3>
            <Link to="/createproduct">
              <button
                type="button"
                className="btn btn-primary border-0"
                style={{ backgroundColor: "#ff0000" }}
              >
                Create Product
              </button>
            </Link>
          </div>
        </div>
        <div className="card text-end border-0">
          <div className="card-body">
            <h5 className="card-title">Contact</h5>
            <p className="card-text">+62 1234324321</p>
            <p className="card-text">Depok, Jawa barat indonesia.</p>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </>
  );
}

export default LandingPage;
