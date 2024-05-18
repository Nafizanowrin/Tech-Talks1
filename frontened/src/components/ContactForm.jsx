import React from 'react'
import './contact.css'

function ContactForm() {
  return (
    <>
    
    <div className="contact">

    <h1>Here You Can Contact with us</h1>

    <div className="contact-container">

               

                   <div className="contact-form">

                    <form  method="POST" className="contact-inputs"> 

                         <h3 className='phn'>Get in touch (Phone - +8801721967008)</h3>
                         <h3>Email : techtalk@gmail.com</h3>

                         <input type='text'  
                        placeholder='Enter your name...'
                        required
                        autoComplete="off"
                        />

                        <input type='text'  
                        placeholder='Enter your email...'
                        required
                        autoComplete="off"/>

                        <textarea
                        name="Message"
                        cols="30"
                        rows="5"
                        required
                        autoComplete="off"
                        placeholder=" Message..."></textarea>

                        <input type="submit" value="send" className='submit'/>

                        </form>

                    </div>
                    </div>

    </div>
    


    </>
  )
}

export default ContactForm