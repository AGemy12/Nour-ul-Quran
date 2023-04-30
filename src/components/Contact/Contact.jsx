import { Input } from '../../othercomponents/index';
import { Message } from '../../othercomponents/index';
import { useTranslation } from 'react-i18next';
import './Contact.css';

function Contact() {
    const [t] = useTranslation();
    return(
        <div className="contact">
            <div className="heading-sections">
                <h2 className='contact-head'> {t('email us to get your free trial experience')} </h2>
            </div>
            <form className='contact-form' action="form">
                    <Input class='form-field-input' title={t('your name')} type = 'text' />
                    <Input class='form-field-input' title={t('your email')} type = 'email' />
                    <Input class='form-field-input' title={t('your phone')} type = 'number' />
                    <Input class='form-field-input' title={t('your age')} type = 'number' />
                    <Input class='form-field-input' title={t('your country')} type = 'text' />
                    <Message />
                    <Input class='form-field-submit' type = 'submit' value={t('SEND')} />
                </form>
        </div>
    )
}

export default Contact;