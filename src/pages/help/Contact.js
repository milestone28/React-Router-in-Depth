 import React from 'react'
import { Form, redirect, useActionData } from 'react-router-dom'
 
 const Contact = () => {
    const data = useActionData();
   return (
     <div className='contact'>
        <h3>Contact Us</h3>
        <Form method='post' action='/help/contact'>
            <label>
                <span>Your Email : </span>
                <input type='email' name='email' required />
            </label>
            <label>
                <span>Your Message : </span>
                <textarea  name='message' required />
            </label>
            <button>Submit</button>
            {data && data.error && <p>{data.error}</p>}
        </Form>
     </div>
   )
 }


 export const contactAction = async ({request}) => {
    //console.log(request);
    const data = await request.formData(); //this will access the value of the form example name='email name='message'
    const submission = {
        email : data.get('email'),
        message : data.get('message')
    }

    console.log(submission);

    // send post request
    if(submission.message.lenght < 10) {
        return {error : 'Message must be over 10 chars long.'}
    }

    //redirect
    return redirect('/');
 }
 
 export default Contact