import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.module.scss';

const NotFound: React.FC = () => {
  return (
    <div>
      <h1>Error 404: Page Not Found</h1>
      <Link to="/">Home</Link>
    </div>
  )
}

export default NotFound
