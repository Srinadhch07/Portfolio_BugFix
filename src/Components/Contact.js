import React from 'react';
import './styles/Contact.css';
import { useState } from 'react';

const Contact =()=>{
    const [name, setName] = useState('');
    const [phone,setPhone] = useState('');
    const [message,setMessage] = useState('');

    const subject = encodeURIComponent("Sirilu message from portfolio");
    const body = encodeURIComponent(`Hi ${name}\nPhone: ${phone}\nMessage: ${message}`);

    const mailtoLink = `mailto:siriguduru9@gmail.com?subject=${subject}&body=${body}`;

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Opening Mail');
        window.location.href = mailtoLink;
        setName('');
        setPhone('');
        setMessage('');
        
    }

    return(
        
        <div className='contact'>
            <div className='inputs'>
                <form onSubmit={handleSubmit}>
                <h1>Contact Me</h1>
                        <input type="text" placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required />
                       
                        <input type="tel" placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        pattern="[0-9]{10}"
                        />
                        <input type="text" placeholder='Message' className='message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        />
                        <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}
export default Contact;