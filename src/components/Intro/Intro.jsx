import { DefaultPlayer as Video } from 'react-html5video';
import introVideo from '../../assets/intro.mp4';
import { useTranslation } from 'react-i18next';
import 'react-html5video/dist/styles.css';
import './Intro.css';

function Intro() {
    const [t] = useTranslation();
    return(
        <div className="intro">
            <div className="heading-sections">
                <h2>{t('intro video')}</h2>
            </div>
            <div className="intro-video">
                <Video  loop>
                    <source src={introVideo} type='video/webm' />
                </Video>
            </div>
        </div>
    )
}

export default Intro;