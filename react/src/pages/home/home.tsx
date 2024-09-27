/** @type {import("react").FC} */
import React from 'react';
import { Link } from 'react-router-dom';

import './home.module.scss';


const Home: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/originalApp">Original App</Link>
    </div>
  )
}

export default Home
