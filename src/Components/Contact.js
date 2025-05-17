import React from 'react';
import './styles/Contact.css';
import { ArrowBack } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Contact =()=>{
    return(
        <div className='contact'>
            <Link to="./" >
                <ArrowBack className='arrow' />
            </Link>
            <div className='inputs'>
                <h1>Contact Me</h1>
                <input type="text" placeholder='Name' />
                <input type="tel" placeholder="Phone Number" />
                <input type="text" placeholder='Message' className='message'/>
                <button>Send</button>
            </div>
        </div>
    )
}
export default Contact;