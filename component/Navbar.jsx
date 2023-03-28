import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            Nextjs
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" href={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href={"/about"}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href={"/post"}>
                  Post
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href={"/user"}>
                  User
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href={"/product     "}>
                  Product
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
