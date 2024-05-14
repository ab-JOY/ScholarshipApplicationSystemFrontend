import React from 'react'
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <section id="home">
      <div className="hero-page">
        <div className="title">
          <h1>
            Scholarship Application <span> System </span>
          </h1>
        </div>
        <div>
        <Link to={"/register"}>
          <button className="button">Register</button>
        </Link>
        <Link className="button-login" to="/login">Login</Link>
        </div>
      </div>
    </section>
  );
}
