import { useTranslation } from 'react-i18next';
import './Message.css';

function Message() {
    const [t] = useTranslation();
    return(
        <div className="message-container">
            <textarea name="" id="" cols="50" rows="3" placeholder={t('Your Message')}></textarea>
        </div>
    )
}

export default Message;