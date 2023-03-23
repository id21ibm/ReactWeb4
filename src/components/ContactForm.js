import React from "react";

class ContactForm extends React.Component {
    render() {
        return (
            <div className="contact-form">
                        <form action="contact.html">
                    
                        <label for="name">Namn</label>
                        <input type="text" id="name" name="firstname" placeholder="Namn" onfocus="focusFunctionName()" onblur="blurFunctionName()" />
                    
                        <label for="email"><br />E-post</label>
                        <input type="text" id="email" name="lastname" placeholder="E-post" onfocus="focusFunctionEmail()" onblur="blurFunctionEmail()" />
                    
                        <label for="subject"><br />Meddelande<br /></label>
                        <textarea id="subject" name="subject" placeholder="" style={{height: "200px"}} onfocus="focusFunctionSubject()" onblur="blurFunctionSubject()"></textarea>
                    
                        <input type="submit" id="submit-button" value="Skicka" />
                    
                        </form>
                    </div>
        );
    }
}

export default ContactForm;