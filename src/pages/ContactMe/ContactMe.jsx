import './contactMe.scss';
import Button from '../../components/Button/Button';

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
                    <h3>Contactez-moi</h3>
                    <h4>Je vous répondrai au plus vite !</h4>
                    <fieldset>
                        <input placeholder="Votre nom" name="Name" id="name" type="text" tabIndex="1" required autoFocus />
                    </fieldset>
                    <fieldset>
                        <input placeholder="Votre adresse e-mail" name="Email" id="email" type="email" tabIndex="2" required />
                    </fieldset>
                    <fieldset>
                        <textarea placeholder="Écrivez votre message ici..." name="Message" id="message" tabIndex="3" required></textarea>
                    </fieldset>
                    <fieldset>
                        <Button name="submit" type="submit" id="contact-submit" text="Envoyer" data-submit="...Sending"></Button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;