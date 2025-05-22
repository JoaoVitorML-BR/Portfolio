import gitHubIcon from '../img/github.png';
import iscompatibleImage from '../img/iscompatilble-site.png';
import tubeLoadSaveImage from '../img/tubeloads-site.png';
import codeIcon from '../img/programming-code-signs.png';
import instagramIcon from '../img/instagram.png';
import linkedinIcon from '../img/linkedin.png';
import golangImage from '../img/golangImage.jpg';
import gmailIcon from '../img/gmail.png';
import MyImage from '../img/joao.jpeg';
import CompassImage from '../img/compass_uol_cover.jpeg';
import prefArapiracaImage from '../img/pref-arapiraca.png';
import DitImage from '../img/dit-ifal-logo.jpeg'
import IfalLogo from '../img/ifal_image.jpeg';

// Icons Tecnologies Initial
import JSIcon from '../img/icons/js_icon.webp';
import NodeIcon from '../img/icons/node_icon.png';
import TypeScriptIcon from '../img/icons/typescript_icon.png';
import JavaIcon from '../img/icons/java_icon.png';
import SpringIcon from '../img/icons/spring_icon.png';
import GoIcon from '../img/icons/go_icon.png';
import ReactIcon from '../img/icons/react_icon.png';
import PostgreSQLIcon from '../img/icons/postgres_icon.png';
import MySQLIcon from '../img/icons/mysql_icon.png';
import DockerIcon from '../img/icons/docker_icon.png';
import GitIcon from '../img/icons/git_icon.png';
import PowerBIIcon from '../img/icons/power_bi_icon.png';
import AWSIcon from '../img/icons/aws_icon.png';
import PythonIcon from '../img/icons/python_icon.png';
import GoogleSheetsIcon from '../img/icons/google_sheets_icon.png';
import NginxIcon from '../img/icons/nginx_icon.webp';

export const PageHome: React.FC = () => {
    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>

            <main >
                <div id="about" className="page-style">
                    <div className='justfiy-footer-home scrollable'>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className='sticky-content pt-4'>
                                        <div className='container-image-presentation'>
                                            <img className='img-style' src={MyImage} alt="João Vitor" />
                                            <div className='text-group'>
                                                <h1 className='textStyleGeneral fs-2'>João Vitor</h1>
                                                <h2 className='textStyleGeneral fs-4'>
                                                    <img src={codeIcon} width={40} height={30} alt="dev" />
                                                    Desenvolvedor backend
                                                </h2>
                                            </div>
                                        </div>
                                        <div className='custom-divider'></div>
                                        <h3 className='skills-style-text'>Skills</h3>
                                        <h5 className='textStyle'>Linguagens - Avançado</h5>
                                        <div className='tecnologies-style textStyleGeneral'>
                                            <p className='fw-lighter paragath-style-tecnology'><img src={JSIcon} alt='javascript' width={40} height={30} /> JavaScript</p>
                                            <p className='fw-lighter paragath-style-tecnology'><img src={TypeScriptIcon} alt='typescript' width={40} height={30} /> TypeScript</p>
                                        </div>
                                        <h5 className='textStyle'>Linguagens - Básico (B)/Intermediario (I)</h5>
                                        <div className='tecnologies-style textStyleGeneral'>
                                            <p className='fw-lighter paragath-style-tecnology'><img src={JavaIcon} alt='java' width={40} height={30} /> Java - I</p>
                                            <p className='fw-lighter paragath-style-tecnology'><img src={GoIcon} alt='golang' width={40} height={30} /> Golang - I</p>
                                            <p className='fw-lighter paragath-style-tecnology'>Python - B</p>
                                        </div>
                                        <h5 className='textStyle'>Tecnologias</h5>
                                        <div className='tecnologies-style textStyleGeneral'>
                                            <p className='fw-lighter paragath-style-tecnology'><img src={NodeIcon} alt='nodejs' width={40} height={30} /> Node.js</p>
                                            <p className='fw-lighter paragath-style-tecnology'><img src={DockerIcon} alt='docker' width={40} height={30} /> Docker</p>
                                            <p className='fw-lighter paragath-style-tecnology'><img src={GitIcon} alt='git' width={40} height={30} /> Git</p>
                                        </div>
                                        <h5 className='textStyle'>Frameworks/Bibliotecas</h5>
                                        <div className='tecnologies-style textStyleGeneral'>
                                            <p className='fw-lighter paragath-style-tecnology'><img src={JSIcon} alt='express' width={40} height={30} /> ExpressJS</p>
                                            <p className='fw-lighter paragath-style-tecnology'><img src={ReactIcon} alt='reactjs' width={40} height={30} /> ReactJS</p>
                                            <p className='fw-lighter paragath-style-tecnology'><img src={SpringIcon} alt='spring-boot' width={40} height={30} /> Spring Boot</p>
                                        </div>
                                        <h5 className='textStyle'>Bancos de Dados</h5>
                                        <div className='tecnologies-style textStyleGeneral'>
                                            <p className='fw-lighter paragath-style-tecnology'><img src={PostgreSQLIcon} alt='postgres' width={40} height={30} /> PostgreSQL</p>
                                            <p className='fw-lighter paragath-style-tecnology'><img src={MySQLIcon} alt='mysql' width={40} height={30} /> MySQL</p>
                                        </div>
                                        <h5 className='textStyle'>Outras Tecnologias</h5>
                                        <div className='tecnologies-style textStyleGeneral'>
                                            <p className='fw-lighter paragath-style-tecnology'><img src={NginxIcon} alt='nginx' width={40} height={30} /> Nginx</p>
                                            <p className='fw-lighter paragath-style-tecnology'><img src={PowerBIIcon} alt='powerbi' width={40} height={30} /> Power BI</p>
                                        </div>

                                        <div className='container-footer-socialmidia'>
                                            <h4 className='title-social-midia-and-contact'>Redes sociais e Contato</h4>
                                            <ul className='footer-icons d-flex justify-content-start'>
                                                <li className='mx-2 li-icons'>
                                                    <a href="https://github.com/JoaoVitorML-BR" target="blank"><img className='imagesFooter' alt="gitHub" src={gitHubIcon}></img></a>
                                                    <p className='textStyleGeneral fw-light paragath-style-tecnology pt-2'>GitHub</p>
                                                </li >
                                                <li className='mx-2'>
                                                    <a href="https://www.linkedin.com/in/jo%C3%A3o-vitorml-br/" target="blank"><img className='imagesFooter' alt="linkedin" src={linkedinIcon}></img></a>
                                                    <p className='textStyleGeneral fw-light paragath-style-tecnology pt-2'>LinkedIn</p>
                                                </li>
                                                <li className='mx-2'>
                                                    <a href="https://www.instagram.com/joao_vitor_0o/" target="blank"><img className='imagesFooter' alt="instagram" src={instagramIcon}></img></a>
                                                    <p className='textStyleGeneral fw-light paragath-style-tecnology pt-2'>Instagram</p>
                                                </li>
                                                <li className='mx-2'>
                                                    <a href="mailto:contatojoaovtml@gmail.com" target="blank">
                                                        <img className='imagesFooter-gmail' alt="email" src={gmailIcon}></img>
                                                    </a>
                                                    <p className='textStyleGeneral fw-light paragath-style-tecnology pt-1'>Email</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 pt-4 pb-4">
                                    <h3 className='textStyleGeneral'>Sobre</h3>
                                    <p className='textStyleGeneral fw-light paragath-style-tecnology'>Em 2018, descobri como os sites e aplicativos eram construidos e decidi começar a estudar sobre pelo YouTube.
                                        Então, comecei a desenvolver meus projetos pessoais assim que comprei meu computador apenas em 2020/2021. Através dele, consegui oportunidades para desenvolver algumas automações para familiares, amigos, conhecidos de amigos e, finalmente, meu estágio na prefeitura da minha cidade. <br /> <br />
                                        Dentro da prefeitura, pude continuamente aprimorar minhas habilidades como desenvolver e adquirir novos conhecimentos através de projetos desde simples ao avançado que me foram passados. Ao mesmo tempo, participei de projetos backend como Voluntário em minha faculdade.<br /><br />
                                        Meu foco principal atualmente é construir aplicações, seguindo boas praticas, padrão de arquiteturas escalonaveis para o projeto e um código limpo, para que no final, consiga atender as necessidades do cliente/usuário. <br /> <br />
                                        Embora a tecnologia seja uma das minhas grandes paixões, também cultivo outras áreas da minha vida. Sou um torcedor fiel do <a href='https://www.instagram.com/asaoficial/' target="blank"
                                            rel="noopener noreferrer"
                                            className='link-no-underline'>Asa Gigante</a>, meu time do coração, e adoro praticar esportes físicos para manter o equilíbrio entre mente e corpo. Essas experiências fora do mundo digital me enriquecem e ajudam a ser uma pessoa mais completa e realizada.
                                    </p>
                                    <h3 className='textStyleGeneral'>Experiência</h3>
                                    <div className="scrollable">
                                        <div className='container-experiences'>
                                            <div className='gradient-broder'>
                                                <a
                                                    href='https://compass.uol/en/home/'
                                                    target="blank"
                                                    rel="noopener noreferrer"
                                                    className='link-no-underline'
                                                >
                                                    <div className='experience-content'>
                                                        <h4 className='textStyleGeneral fw-normal fs-4'>UOL Compass</h4>
                                                        <h5 className='textStyleGeneral fw-light fs-5'>Estágio Desenvolvedor Backend Java</h5>
                                                        <h6 className='textStyleGeneral fw-lighter paragath-style-tecnology'>05/2025 até o momento</h6>
                                                        <p className='textStyleGeneral fw-light paragath-style-tecnology'>Atuação na trilha de desenvolvimento Backend Java, SpringBoot e AWS</p>
                                                        <div className='tecnologies-style textStyleGeneral'>
                                                            <p className='fw-lighter paragath-style-tecnology'><img src={JavaIcon} alt='java' width={40} height={30} /> Java</p>
                                                            <p className='fw-lighter paragath-style-tecnology'><img src={SpringIcon} alt='spring-boot' width={40} height={30} /> Spring Boot</p>
                                                            <p className='fw-lighter paragath-style-tecnology'><img src={GitIcon} alt='git' width={40} height={30} /> Git</p>
                                                            <p className='fw-lighter paragath-style-tecnology'><img src={AWSIcon} alt='aws' width={40} height={30} /> AWS Cloud</p>
                                                        </div>
                                                        <div className="image-container">
                                                            <img className="images-presentation" src={CompassImage} alt="UOL" />
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <hr className="hr-style"></hr>

                                        <div className='container-experiences'>
                                            <a
                                                href='https://web.arapiraca.al.gov.br/'
                                                target="blank"
                                                rel="noopener noreferrer"
                                                className='link-no-underline'>
                                                <h4 className='textStyleGeneral fw-normal fs-4'>Prefeitura de Arapiraca/AL</h4>
                                                <h5 className='textStyleGeneral fw-light fs-5'>Desenvolvedor de automatizações Qgis</h5>
                                                <h6 className='textStyleGeneral fw-lighter paragath-style-tecnology'>03/2023 até o momento</h6>
                                                <p className='textStyleGeneral fw-light paragath-style-tecnology'>
                                                    Minha função é implementar automações no QGIS usando Python visando monitorar o andamento de licencimaneto
                                                    ambiental das empresas e automatizar processos de monitoramento no antidemento de condicionantes no Google
                                                    Planilhas através de JavaScript. Além disso, desenvolvo dashboards interativos utilizando Power BI para análise e
                                                    visualização de dados visando a melhoria em tomadas de decisões para o meio ambiente da cidade
                                                    <br /></p>
                                                <div className='tecnologies-style textStyleGeneral'>
                                                    <p className='fw-lighter paragath-style-tecnology'><img src={ReactIcon} alt='reactjs' width={40} height={30} /> ReactJS</p>
                                                    <p className='fw-lighter paragath-style-tecnology'><img src={NodeIcon} alt='nodejs' width={40} height={30} /> Node.js</p>
                                                    <p className='fw-lighter paragath-style-tecnology'><img src={TypeScriptIcon} alt='typescript' width={40} height={30} /> TypeScript</p>
                                                    <p className='fw-lighter paragath-style-tecnology'><img src={PythonIcon} alt='python' width={40} height={30} /> Python</p>
                                                    <p className='fw-lighter paragath-style-tecnology'><img src={PostgreSQLIcon} alt='postgres' width={40} height={30} /> PostgreSQL</p>
                                                    <p className='fw-lighter paragath-style-tecnology'><img src={GoogleSheetsIcon} alt='google-sheets' width={40} height={30} /> Google planilhas</p>
                                                    <p className='fw-lighter paragath-style-tecnology'><img src={PowerBIIcon} alt='powerbi' width={40} height={30} /> Power BI</p>
                                                    <p className='fw-lighter paragath-style-tecnology'>Qgis</p>
                                                </div>
                                                <div className="image-container">
                                                    <img className="images-presentation" src={prefArapiracaImage} alt="prefeitura-arapiraca" />
                                                </div>
                                            </a>
                                        </div>
                                        <hr className="hr-style"></hr>

                                        <div className='container-experiences'>
                                            <a
                                                href='https://www.instagram.com/dit_ifal/'
                                                target="blank"
                                                rel="noopener noreferrer"
                                                className='link-no-underline'>
                                                <h4 className='textStyleGeneral fw-normal fs-4'>DIT - Núcleo de Desenvolvimento e Inovação Tecnológica - IFAL</h4>
                                                <h5 className='textStyleGeneral fw-light fs-5'>Desenvolvedor Backend - Golang (Voluntário)</h5>
                                                <h6 className='textStyleGeneral fw-lighter paragath-style-tecnology'>03/2023 até 03/2024</h6>
                                                <p className='textStyleGeneral fw-light paragath-style-tecnology'>Desenvolvedor trainee/junior em projeto de alto impacto para a cidade de arapiraca em parceria entre o Instituto federal de Alagoas e a Prefeitura de arapiraca, onde visou-se interligar as informações dos pacientes de hospitais públicos da cidade.<br /></p>
                                                <div className='tecnologies-style textStyleGeneral'>
                                                    <p className='fw-lighter paragath-style-tecnology'><img src={GoIcon} alt='golang' width={40} height={30} /> Golang</p>
                                                    <p className='fw-lighter paragath-style-tecnology'><img src={DockerIcon} alt='docker' width={40} height={30} /> Docker</p>
                                                    <p className='fw-lighter paragath-style-tecnology'><img src={PostgreSQLIcon} alt='postgres' width={40} height={30} /> PostgreSQL</p>
                                                    <p className='fw-lighter paragath-style-tecnology'><img src={GitIcon} alt='git' width={40} height={30} /> Git</p>
                                                </div>
                                                <div className="image-container">
                                                    <img className="images-presentation" src={DitImage} alt="dit" />
                                                </div>
                                            </a>
                                        </div>
                                        <hr className='hr-style' />

                                        <h3 className='textStyleGeneral'>Projetos</h3>
                                        <div className='container-experiences'>
                                            <a href='https://www.iscompatible.com.br/' target="blank" className='link-no-underline'>
                                                <h4 className='textStyleGeneral fw-normal fs-4'>Verificador de compatibilidade de peças para computador</h4>
                                                <h5 className='textStyleGeneral fw-light fs-5'>Desenvolvedor FullStack</h5>
                                                <h6 className='textStyleGeneral fw-lighter paragath-style-tecnology'>09/2022 até momento </h6>
                                                <p className='textStyleGeneral fw-light pt-1 paragath-style-tecnology'>Esse projeto tem uma grande importância na minha vida pois nele não só pude por em prática meus conhecimentos, como também ajudar a sanar uma dor, pois alguma vez você já se viu com dúvidas na hora de montar o seu PC, questionando se aquele processador ou memória RAM eram compatíveis com a sua placa-mãe? Pois bem, o site "Is compatible ?" ou "É compatível?" foi desenvolvido justamente para aliviar essa preocupação.<br /></p>
                                                <div className='tecnologies-style textStyleGeneral'>
                                                    <p className='fw-lighter paragath-style-tecnology'><img src={ReactIcon} alt='reactjs' width={40} height={30} /> React.js</p>
                                                    <p className='fw-lighter paragath-style-tecnology'><img src={NodeIcon} alt='nodejs' width={40} height={30} /> Node.js</p>
                                                    <p className='fw-lighter paragath-style-tecnology'><img src={TypeScriptIcon} alt='typescript' width={40} height={30} /> TypeScript</p>
                                                    <p className='fw-lighter paragath-style-tecnology'><img src={MySQLIcon} alt='mysql' width={40} height={30} /> MySQL</p>
                                                    <p className='fw-lighter paragath-style-tecnology'><img src={NginxIcon} alt='nginx' width={40} height={30} /> Ngix</p>
                                                </div>
                                                <div className="image-container">
                                                    <img className="images-presentation" src={iscompatibleImage} alt="iscompatible" />
                                                </div>
                                            </a>
                                        </div>
                                        <hr className="hr-style"></hr>


                                        <div className='container-experiences'>
                                            <a href='https://tubeloadsave.vercel.app/' target="blank" className='link-no-underline'>
                                                <h4 className='textStyleGeneral fw-normal fs-4'>Baixador de vídeos e músicas do youtube</h4>
                                                <h5 className='textStyleGeneral fw-light fs-5'>Desenvolvedor FullStack</h5>
                                                <h6 className='textStyleGeneral fw-lighter paragath-style-tecnology'>06/2023 até 07/2023 </h6>
                                                <p className='textStyleGeneral fw-light pt-1 paragath-style-tecnology'>A ideia por trás deste projeto foi aprimorar minhas habilidades no consumo de APIs externas, então optei por criar um downloader para vídeos ou músicas do YouTube como forma de prática.<br /></p>
                                                <div className='tecnologies-style textStyleGeneral'>
                                                    <p className='fw-lighter paragath-style-tecnology'><img src={ReactIcon} alt='reactjs' width={40} height={30} /> React.js</p>
                                                    <p className='fw-lighter paragath-style-tecnology'><img src={NodeIcon} alt='nodejs' width={40} height={30} /> Node.js</p>
                                                    <p className='fw-lighter paragath-style-tecnology'><img src={TypeScriptIcon}  alt='typescript' width={40} height={30} /> TypeScript</p>
                                                </div>
                                                <div className="image-container">
                                                    <img className='images-presentation' src={tubeLoadSaveImage} alt="tubeloadsave" />
                                                </div>
                                            </a>
                                        </div>
                                        <hr className="hr-style"></hr>

                                        <div className='container-experiences'>
                                            <h4 className='textStyleGeneral fw-normal fs-4'>API - Login</h4>
                                            <h5 className='textStyleGeneral fw-light fs-5'>Desenvolvedor backend</h5>
                                            <h6 className='textStyleGeneral fw-lighter paragath-style-tecnology'>08/2023 até 09/2023</h6>
                                            <p className='textStyleGeneral fw-light pt-1 paragath-style-tecnology'>Desenvolvi esse projeto pois estava precisando de uma API para permitir o login e cadastro dos itens no site iscompatible, logo, decidi fazer com go para fugir um pouco do node.js, foi de bastante aprendizado esse projeto pois nele pude aplicar conceitos da arquitetura hexagonal.<br /></p>
                                            <div className='tecnologies-style textStyleGeneral'>
                                                <p className='fw-lighter paragath-style-tecnology'><img src={GoIcon} alt='golang' width={40} height={30} /> Golang</p>
                                                <p className='fw-lighter paragath-style-tecnology'><img src={PostgreSQLIcon} alt='postgres' width={40} height={30} /> PostgreSQL</p>
                                                <p className='fw-lighter paragath-style-tecnology'>SQLC</p>
                                            </div>
                                            <div className="image-container">
                                                <img className="images-presentation" src={golangImage} alt="golang" />
                                            </div>
                                        </div>
                                        <hr className="hr-style"></hr>

                                        <h4 className='textStyleGeneral'>Formação Acadêmica</h4>
                                        <div className='container-experiences'>
                                            <h5 className='textStyleGeneral fw-light fs-5'>Instituto Federal de Alagoas - IFAL</h5>
                                            <h6 className='textStyleGeneral fw-lighter paragath-style-tecnology'><strong>Inicio:</strong> 03/2022</h6>
                                            <h6 className='textStyleGeneral fw-lighter paragath-style-tecnology'><strong>Prev. de conclusão:</strong> 06/2026</h6>
                                            <h6 className='textStyleGeneral fw-lighter paragath-style-tecnology'><strong>Curso:</strong> Sistemas de Informação - SI / 7° período</h6>
                                            <div className="image-container">
                                                <img className="images-presentation" src={IfalLogo} alt="ifal" />
                                            </div>
                                        </div>
                                    </div>
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
