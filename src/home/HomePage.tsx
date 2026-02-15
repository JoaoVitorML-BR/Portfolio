// Icons Tecnologies Initial
import { Experiences } from '../pages/experiences';
import { Projects } from '../pages/projects';
import { AboutMe } from '../pages/about';
import { LanguagesAndTecnologiesExperience } from '../pages/languagesExperience';
import { YoutubeContent } from '../pages/youtubeContent';
import { LanguageToggle } from '../components/LanguageToggle';

export const PageHome: React.FC = () => {
    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
            <LanguageToggle />
            <main >
                <div id="about" className="page-style">
                    <div className='justfiy-footer-home scrollable'>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <LanguagesAndTecnologiesExperience />
                                </div>

                                <div className="col-md-6 pt-4 pb-4">
                                    <AboutMe />
                                    <Experiences />
                                    <Projects />
                                    <YoutubeContent />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main >

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-KyZXEAg3QhqLMpG8r+VBE3k3Im+eD6hQo8AifF+4mtZf9AaC1khgjEzodWfWTzR5" crossOrigin="anonymous"></script>
        </>
    )
}

export default PageHome;
