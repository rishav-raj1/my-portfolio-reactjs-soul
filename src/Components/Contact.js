import React from 'react';

function Contact(){
    return(
            <div id='contact'>
                <h1> CONTACT ME </h1>

                <form>
                    <input type='text' placeholder='Full Name' />
                    <input type='email' placeholder='Type Your E-Mail' />
                    <textarea placeholder='Write Here....'></textarea>
                    <input type='submit' value='Send' />

                </form>
            </div>

    )
}            
export default Contact;