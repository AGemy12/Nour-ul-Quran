import { RiWhatsappFill, RiFacebookBoxFill, RiMailSettingsFill, RiInstagramFill, RiTwitterFill } from 'react-icons/ri';
import './Contacts.css';

function Contacts() {
    return(
        <>
            <div className="contacts-facebook cont-us">
                <a className='contact-link' target='__blank' href="https://www.facebook.com/profile.php?id=100087955878394">
                    <RiFacebookBoxFill />
                </a>
            </div>
            <div className="contacts-whatsapp cont-us">
                <a className='contact-link' target='__blank' href="https://wa.me/+201556773575">
                    <RiWhatsappFill />
                </a>
            </div>
            <div className="contacts-instagram cont-us">
                <a className='contact-link' target='__blank' href="https://instagram.com/nourulquran.academy?igshid=ZDdkNTZiNTM=">
                    <RiInstagramFill />
                </a>
            </div>
            <div className="contacts-twitter cont-us">
                <a className='contact-link' target='__blank' href="https://twitter.com/nour_ul_quran?t=aW29wj5kuCunsRfL-1OMtQ&s=08">
                    <RiTwitterFill />
                </a>
            </div>
            <div className="contacts-gmail cont-us">
                <a className='contact-link' target='__blank' href="mailto:ragiragi86@gmail.com">
                    <RiMailSettingsFill />
                </a>
            </div>
        </>
    )
}

export default Contacts;