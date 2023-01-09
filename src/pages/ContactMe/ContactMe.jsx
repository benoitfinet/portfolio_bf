import './contactMe.scss';

const FORM_ENDPOINT = "https://public.herotofu.com/v1/a29a70e0-8cf5-11ed-a003-6f0b76086b1c";

function ContactMe() {

    return (
        <div className='contactme'>
            <div className="container">
                <form
                    id="contact"
                    method="POST"
                    action={FORM_ENDPOINT}
                >
                    <h3>Quick Contact</h3>
                    <h4>Contact me today, and get reply ASAP!</h4>
                    <fieldset>
                        <input placeholder="Your name" type="text" tabIndex="1" required autoFocus />
                    </fieldset>
                    <fieldset>
                        <input placeholder="Your email address" type="email" tabIndex="2" required />
                    </fieldset>
                    <fieldset>
                        <textarea placeholder="Type your message Here...." tabIndex="3" required></textarea>
                    </fieldset>
                    <fieldset>
                        <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                    </fieldset>
                </form>


            </div>
        </div>
    );
};

export default ContactMe;