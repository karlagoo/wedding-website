import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


function OurStory() {
  const navigate = useNavigate();

  return (
    <div>OurStory
    <Link onClick={navigate('/home')}>back</Link>
    </div>
  )
}

export default OurStory