import React from 'react'

export default function Header() {
  return (
         <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        {" "}
        <div className="col-md-3 mb-2 mb-md-0">
          {" "}
          <a
            href="/"
            className="d-inline-flex link-body-emphasis text-decoration-none"
          >
            {" "}
            <svg
              className="bi"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap"></use>
            </svg>{" "}
          </a>{" "}
        </div>{" "}
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          {" "}
          <li>
            <a href="#" className="nav-link px-2 link-secondary">
              Home
            </a>
          </li>{" "}
          <li>
            <a href="#" className="nav-link px-2">
              Features
            </a>
          </li>{" "}
          <li>
            <a href="#" className="nav-link px-2">
              Pricing
            </a>
          </li>{" "}
          <li>
            <a href="#" className="nav-link px-2">
              FAQs
            </a>
          </li>{" "}
          <li>
            <a href="#" className="nav-link px-2">
              About
            </a>
          </li>{" "}
        </ul>{" "}
        <div className="col-md-3 text-end">
          {" "}
          <button type="button" className="btn btn-outline-primary me-2">
            Login
          </button>{" "}
          <button type="button" className="btn btn-primary">
            Sign-up
          </button>{" "}
        </div>{" "}
      </header>
  )
}
