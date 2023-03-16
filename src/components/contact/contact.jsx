import { useState, useEffect } from "react";
import contactGIF from '../../assets/contactGIF.gif'
import { FaPaperPlane, FaCheck } from 'react-icons/fa';
import axios from 'axios';

export const Contact = () => {
    const initialValues = { username:'', number:'', email:'', message:'' };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
        console.log(formValues)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('HandleSubmit function Called')
        setFormErrors(validate(formValues));
        let url = "https://chaityatest.pythonanywhere.com/contacts/";
        try {
            let data = await axios.get(url)
            setFormErrors(uniqueCheck(data.data, formValues));
            let response = await axios.post(url, formValues);
            // if (response.status === 200) {
            //   console.log("API successfully called from frontend");
            // }
        } catch (e) {
            console.log(e);
        }
        setIsSubmit(true);
    }
    useEffect(() =>{
        console.log(formErrors);
        if(Object.keys(formErrors).length===0 && isSubmit){
            console.log(formValues);
        }
    },[formErrors])
    const uniqueCheck = (data, values) => {
        console.log(data)
        const errors = {};
        // console.log(values.email);
        // console.log(data[1].email);
        // console.log('Unique fn called')
        for(let i=0;i<data.length;i++){
            if(values.email === data[i].email){
                errors.email = "Email Exists";
            }
        }
        return errors;
    }
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "Enter Username";
        }
        if (!values.number) {
            errors.number = "Enter Phone Number";
        } else if (values.number.length !== 10){
            errors.number = "Invalid Number"
        }
        if (!values.email) {
            errors.email = "Enter Email";
        } else if (!regex.test(values.email)){
            errors.email = "Invalid Email"
        }
        if (!values.message) {
            errors.message = "Enter Message";
        } else if (values.message.length < 15){
            errors.message = "Message too Short"
        }
        return errors;
    }
    return (
        <section className="contact" id="contact">
            <div className='contact-box' data-aos="zoom-in" data-aos-duration="1000">
                <div className="contact-main">
                    <h1>Contact Me <FaPaperPlane /></h1>
                    <div className="contact-text">
                        <img src={contactGIF} alt='Contact-Image'></img>
                        <form onSubmit={handleSubmit} className='form'>
                            {/* Name */}
                            <div class="input-group">
                                <label>Full Name</label>
                                <input type="text" placeholder="Enter Your Name" name="username" id="username" value={formValues.username} onChange={handleChange}/>
                                <span className="error">{formErrors.username}</span>
                            
                            </div>

                            {/* Phone Number */}
                            <div class="input-group">
                                <label>Phone Number</label>
                                <input type="tel" placeholder="123 456 7890" name="number" id="phone" value={formValues.number} onChange={handleChange}/>
                                <span className="error">{formErrors.number}</span>
                            </div>
                            

                            {/* Email Id */}
                            <div class="input-group">
                                <label>Email Id</label>
                                <input type="email" placeholder="Enter Email" name="email" id="email" value={formValues.email} onChange={handleChange}/>
                                <span className="error">{formErrors.email}</span>
                            </div>

                            {/* Message */}
                            <div class="input-group">
                                <label>Your Message</label>
                                <textarea rows="4" placeholder="Enter Your Message" name="message" id="message"  value={formValues.message} onChange={handleChange}/>
                                <span className="error">{formErrors.message}</span>
                            </div>

                            {/* Submit Button */}
                            <button >Submit</button>
                            {Object.keys(formErrors).length===0 && isSubmit ? (<div className="ui-message-success">Email Sent <FaCheck /></div>) : (<p/>)}
                            
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
