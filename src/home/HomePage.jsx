"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageHome = void 0;
const github_png_1 = __importDefault(require("../img/github.png"));
const iscompatilble_site_png_1 = __importDefault(require("../img/iscompatilble-site.png"));
const tubeloads_site_png_1 = __importDefault(require("../img/tubeloads-site.png"));
const programming_code_signs_png_1 = __importDefault(require("../img/programming-code-signs.png"));
const instagram_png_1 = __importDefault(require("../img/instagram.png"));
const linkedin_png_1 = __importDefault(require("../img/linkedin.png"));
const golangImage_jpg_1 = __importDefault(require("../img/golangImage.jpg"));
const gmail_png_1 = __importDefault(require("../img/gmail.png"));
const joao_jpeg_1 = __importDefault(require("../img/joao.jpeg"));
const compass_uol_cover_jpeg_1 = __importDefault(require("../img/compass_uol_cover.jpeg"));
const pref_arapiraca_png_1 = __importDefault(require("../img/pref-arapiraca.png"));
const dit_ifal_logo_jpeg_1 = __importDefault(require("../img/dit-ifal-logo.jpeg"));
const ifal_image_jpeg_1 = __importDefault(require("../img/ifal_image.jpeg"));
// Icons Tecnologies Initial
const js_icon_webp_1 = __importDefault(require("../img/icons/js_icon.webp"));
const node_icon_png_1 = __importDefault(require("../img/icons/node_icon.png"));
const typescript_icon_png_1 = __importDefault(require("../img/icons/typescript_icon.png"));
const java_icon_png_1 = __importDefault(require("../img/icons/java_icon.png"));
const spring_icon_png_1 = __importDefault(require("../img/icons/spring_icon.png"));
const go_icon_png_1 = __importDefault(require("../img/icons/go_icon.png"));
const react_icon_png_1 = __importDefault(require("../img/icons/react_icon.png"));
const postgres_icon_png_1 = __importDefault(require("../img/icons/postgres_icon.png"));
const mysql_icon_png_1 = __importDefault(require("../img/icons/mysql_icon.png"));
const docker_icon_png_1 = __importDefault(require("../img/icons/docker_icon.png"));
const git_icon_png_1 = __importDefault(require("../img/icons/git_icon.png"));
const power_bi_icon_png_1 = __importDefault(require("../img/icons/power_bi_icon.png"));
const aws_icon_png_1 = __importDefault(require("../img/icons/aws_icon.png"));
const python_icon_png_1 = __importDefault(require("../img/icons/python_icon.png"));
const google_sheets_icon_png_1 = __importDefault(require("../img/icons/google_sheets_icon.png"));
const nginx_icon_webp_1 = __importDefault(require("../img/icons/nginx_icon.webp"));
const PageHome = () => {
    return (<>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>

            <main>
                <div id="about" className="page-style">
                    <div className='justfiy-footer-home scrollable'>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className='sticky-content pt-4'>
                                        <div className='container-image-presentation'>
                                            <img className='img-style' src={joao_jpeg_1.default} alt="João Vitor"/>
                                            <div className='text-group'>
                                                <h1 className='textStyleGeneral fs-2'>João Vitor</h1>
                                                <h2 className='textStyleGeneral fs-4'>
                                                    <img src={programming_code_signs_png_1.default} width={40} height={30} alt="dev"/>
                                                    Desenvolvedor backend
                                                </h2>
                                            </div>
                                        </div>
                                        <div className='custom-divider'></div>
                                        <h3 className='skills-style-text'>Skills</h3>
                                        <h5 className='textStyle'>Linguagens - Avançado</h5>
                                        <div className='tecnologies-style textStyleGeneral'>
                                            <p className='fw-lighter paragath-style-tecnology'><img src={js_icon_webp_1.default} alt='javascript' width={40} height={30}/> JavaScript</p>
                                            <p className='fw-lighter paragath-style-tecnology'><img src={typescript_icon_png_1.default} alt='typescript' width={40} height={30}/> TypeScript</p>
                                        </div>
                                        <h5 className='textStyle'>Linguagens - Básico (B)/Intermediario (I)</h5>
                                        <div className='tecnologies-style textStyleGeneral'>
                                            <p className='fw-lighter paragath-style-tecnology'><img src={java_icon_png_1.default} alt='java' width={40} height={30}/> Java - I</p>
                                            <p className='fw-lighter paragath-style-tecnology'><img src={go_icon_png_1.default} alt='golang' width={40} height={30}/> Golang - I</p>
                                            <p className='fw-lighter paragath-style-tecnology'>Python - B</p>
                                        </div>
                                        <h5 className='textStyle'>Tecnologias</h5>
                                        <div className='tecnologies-style textStyleGeneral'>
                                            <p className='fw-lighter paragath-style-tecnology'><img src={node_icon_png_1.default} alt='nodejs' width={40} height={30}/> Node.js</p>
                                            <p className='fw-lighter paragath-style-tecnology'><img src={docker_icon_png_1.default} alt='docker' width={40} height={30}/> Docker</p>
                                            <p className='fw-lighter paragath-style-tecnology'><img src={git_icon_png_1.default} alt='git' width={40} height={30}/> Git</p>
                                        </div>
                                        <h5 className='textStyle'>Frameworks/Bibliotecas</h5>
                                        <div className='tecnologies-style textStyleGeneral'>
                                            <p className='fw-lighter paragath-style-tecnology'><img src={js_icon_webp_1.default} alt='express' width={40} height={30}/> ExpressJS</p>
                                            <p className='fw-lighter paragath-style-tecnology'><img src={react_icon_png_1.default} alt='reactjs' width={40} height={30}/> ReactJS</p>
                                            <p className='fw-lighter paragath-style-tecnology'><img src={spring_icon_png_1.default} alt='spring-boot' width={40} height={30}/> Spring Boot</p>
                                        </div>
                                        <h5 className='textStyle'>Bancos de Dados</h5>
                                        <div className='tecnologies-style textStyleGeneral'>
                                            <p className='fw-lighter paragath-style-tecnology'><img src={postgres_icon_png_1.default} alt='postgres' width={40} height={30}/> PostgreSQL</p>
                                            <p className='fw-lighter paragath-style-tecnology'><img src={mysql_icon_png_1.default} alt='mysql' width={40} height={30}/> MySQL</p>
                                        </div>
                                        <h5 className='textStyle'>Outras Tecnologias</h5>
                                        <div className='tecnologies-style textStyleGeneral'>
                                            <p className='fw-lighter paragath-style-tecnology'><img src={nginx_icon_webp_1.default} alt='nginx' width={40} height={30}/> Nginx</p>
                                            <p className='fw-lighter paragath-style-tecnology'><img src={power_bi_icon_png_1.default} alt='powerbi' width={40} height={30}/> Power BI</p>
                                        </div>

                                        <div className='container-footer-socialmidia'>
                                            <h4 className='title-social-midia-and-contact'>Redes sociais e Contato</h4>
                                            <ul className='footer-icons d-flex justify-content-start'>
                                                <li className='mx-2 li-icons'>
                                                    <a href="https://github.com/JoaoVitorML-BR" target="blank"><img className='imagesFooter' alt="gitHub" src={github_png_1.default}></img></a>
                                                    <p className='textStyleGeneral fw-light paragath-style-tecnology pt-2'>GitHub</p>
                                                </li>
                                                <li className='mx-2'>
                                                    <a href="https://www.linkedin.com/in/jo%C3%A3o-vitorml-br/" target="blank"><img className='imagesFooter' alt="linkedin" src={linkedin_png_1.default}></img></a>
                                                    <p className='textStyleGeneral fw-light paragath-style-tecnology pt-2'>LinkedIn</p>
                                                </li>
                                                <li className='mx-2'>
                                                    <a href="https://www.instagram.com/joao_vitor_0o/" target="blank"><img className='imagesFooter' alt="instagram" src={instagram_png_1.default}></img></a>
                                                    <p className='textStyleGeneral fw-light paragath-style-tecnology pt-2'>Instagram</p>
                                                </li>
                                                <li className='mx-2'>
                                                    <a href="mailto:contatojoaovtml@gmail.com" target="blank">
                                                        <img className='imagesFooter-gmail' alt="email" src={gmail_png_1.default}></img>
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
                                        Embora a tecnologia seja uma das minhas grandes paixões, também cultivo outras áreas da minha vida. Sou um torcedor fiel do <a href='https://www.instagram.com/asaoficial/' target="blank" rel="noopener noreferrer" className='link-no-underline'>Asa Gigante</a>, meu time do coração, e adoro praticar esportes físicos para manter o equilíbrio entre mente e corpo. Essas experiências fora do mundo digital me enriquecem e ajudam a ser uma pessoa mais completa e realizada.
                                    </p>
                                    <h3 className='textStyleGeneral'>Experiência</h3>
                                    <div className="scrollable">
                                        <div className='container-experiences'>
                                            <div className='gradient-broder'>
                                                <a href='https://compass.uol/en/home/' target="blank" rel="noopener noreferrer" className='link-no-underline'>
                                                    <div className='experience-content'>
                                                        <h4 className='textStyleGeneral fw-normal fs-4'>UOL Compass</h4>
                                                        <h5 className='textStyleGeneral fw-light fs-5'>Estágio Desenvolvedor Backend Java</h5>
                                                        <h6 className='textStyleGeneral fw-lighter paragath-style-tecnology'>05/2025 até o momento</h6>
                                                        <p className='textStyleGeneral fw-light paragath-style-tecnology'>Atuação na trilha de desenvolvimento Backend Java, SpringBoot e AWS</p>
                                                        <div className='tecnologies-style textStyleGeneral'>
                                                            <p className='fw-lighter paragath-style-tecnology'><img src={java_icon_png_1.default} alt='java' width={40} height={30}/> Java</p>
                                                            <p className='fw-lighter paragath-style-tecnology'><img src={spring_icon_png_1.default} alt='spring-boot' width={40} height={30}/> Spring Boot</p>
                                                            <p className='fw-lighter paragath-style-tecnology'><img src={git_icon_png_1.default} alt='git' width={40} height={30}/> Git</p>
                                                            <p className='fw-lighter paragath-style-tecnology'><img src={aws_icon_png_1.default} alt='aws' width={40} height={30}/> AWS Cloud</p>
                                                        </div>
                                                        <div className="image-container">
                                                            <img className="images-presentation" src={compass_uol_cover_jpeg_1.default} alt="UOL"/>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <hr className="hr-style"></hr>

                                        <div className='container-experiences'>
                                            <a href='https://web.arapiraca.al.gov.br/' target="blank" rel="noopener noreferrer" className='link-no-underline'>
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
                                                    <p className='fw-lighter paragath-style-tecnology'><img src={react_icon_png_1.default} alt='reactjs' width={40} height={30}/> ReactJS</p>
                                                    <p className='fw-lighter paragath-style-tecnology'><img src={node_icon_png_1.default} alt='nodejs' width={40} height={30}/> Node.js</p>
                                                    <p className='fw-lighter paragath-style-tecnology'><img src={typescript_icon_png_1.default} alt='typescript' width={40} height={30}/> TypeScript</p>
                                                    <p className='fw-lighter paragath-style-tecnology'><img src={python_icon_png_1.default} alt='python' width={40} height={30}/> Python</p>
                                                    <p className='fw-lighter paragath-style-tecnology'><img src={postgres_icon_png_1.default} alt='postgres' width={40} height={30}/> PostgreSQL</p>
                                                    <p className='fw-lighter paragath-style-tecnology'><img src={google_sheets_icon_png_1.default} alt='google-sheets' width={40} height={30}/> Google planilhas</p>
                                                    <p className='fw-lighter paragath-style-tecnology'><img src={power_bi_icon_png_1.default} alt='powerbi' width={40} height={30}/> Power BI</p>
                                                    <p className='fw-lighter paragath-style-tecnology'>Qgis</p>
                                                </div>
                                                <div className="image-container">
                                                    <img className="images-presentation" src={pref_arapiraca_png_1.default} alt="prefeitura-arapiraca"/>
                                                </div>
                                            </a>
                                        </div>
                                        <hr className="hr-style"></hr>

                                        <div className='container-experiences'>
                                            <a href='https://www.instagram.com/dit_ifal/' target="blank" rel="noopener noreferrer" className='link-no-underline'>
                                                <h4 className='textStyleGeneral fw-normal fs-4'>DIT - Núcleo de Desenvolvimento e Inovação Tecnológica - IFAL</h4>
                                                <h5 className='textStyleGeneral fw-light fs-5'>Desenvolvedor Backend - Golang (Voluntário)</h5>
                                                <h6 className='textStyleGeneral fw-lighter paragath-style-tecnology'>03/2023 até 03/2024</h6>
                                                <p className='textStyleGeneral fw-light paragath-style-tecnology'>Desenvolvedor trainee/junior em projeto de alto impacto para a cidade de arapiraca em parceria entre o Instituto federal de Alagoas e a Prefeitura de arapiraca, onde visou-se interligar as informações dos pacientes de hospitais públicos da cidade.<br /></p>
                                                <div className='tecnologies-style textStyleGeneral'>
                                                    <p className='fw-lighter paragath-style-tecnology'><img src={go_icon_png_1.default} alt='golang' width={40} height={30}/> Golang</p>
                                                    <p className='fw-lighter paragath-style-tecnology'><img src={docker_icon_png_1.default} alt='docker' width={40} height={30}/> Docker</p>
                                                    <p className='fw-lighter paragath-style-tecnology'><img src={postgres_icon_png_1.default} alt='postgres' width={40} height={30}/> PostgreSQL</p>
                                                    <p className='fw-lighter paragath-style-tecnology'><img src={git_icon_png_1.default} alt='git' width={40} height={30}/> Git</p>
                                                </div>
                                                <div className="image-container">
                                                    <img className="images-presentation" src={dit_ifal_logo_jpeg_1.default} alt="dit"/>
                                                </div>
                                            </a>
                                        </div>
                                        <hr className='hr-style'/>

                                        <h3 className='textStyleGeneral'>Projetos</h3>
                                        <div className='container-experiences'>
                                            <a href='https://www.iscompatible.com.br/' target="blank" className='link-no-underline'>
                                                <h4 className='textStyleGeneral fw-normal fs-4'>Verificador de compatibilidade de peças para computador</h4>
                                                <h5 className='textStyleGeneral fw-light fs-5'>Desenvolvedor FullStack</h5>
                                                <h6 className='textStyleGeneral fw-lighter paragath-style-tecnology'>09/2022 até momento </h6>
                                                <p className='textStyleGeneral fw-light pt-1 paragath-style-tecnology'>Esse projeto tem uma grande importância na minha vida pois nele não só pude por em prática meus conhecimentos, como também ajudar a sanar uma dor, pois alguma vez você já se viu com dúvidas na hora de montar o seu PC, questionando se aquele processador ou memória RAM eram compatíveis com a sua placa-mãe? Pois bem, o site "Is compatible ?" ou "É compatível?" foi desenvolvido justamente para aliviar essa preocupação.<br /></p>
                                                <div className='tecnologies-style textStyleGeneral'>
                                                    <p className='fw-lighter paragath-style-tecnology'><img src={react_icon_png_1.default} alt='reactjs' width={40} height={30}/> React.js</p>
                                                    <p className='fw-lighter paragath-style-tecnology'><img src={node_icon_png_1.default} alt='nodejs' width={40} height={30}/> Node.js</p>
                                                    <p className='fw-lighter paragath-style-tecnology'><img src={typescript_icon_png_1.default} alt='typescript' width={40} height={30}/> TypeScript</p>
                                                    <p className='fw-lighter paragath-style-tecnology'><img src={mysql_icon_png_1.default} alt='mysql' width={40} height={30}/> MySQL</p>
                                                    <p className='fw-lighter paragath-style-tecnology'><img src={nginx_icon_webp_1.default} alt='nginx' width={40} height={30}/> Ngix</p>
                                                </div>
                                                <div className="image-container">
                                                    <img className="images-presentation" src={iscompatilble_site_png_1.default} alt="iscompatible"/>
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
                                                    <p className='fw-lighter paragath-style-tecnology'><img src={react_icon_png_1.default} alt='reactjs' width={40} height={30}/> React.js</p>
                                                    <p className='fw-lighter paragath-style-tecnology'><img src={node_icon_png_1.default} alt='nodejs' width={40} height={30}/> Node.js</p>
                                                    <p className='fw-lighter paragath-style-tecnology'><img src={typescript_icon_png_1.default} alt='typescript' width={40} height={30}/> TypeScript</p>
                                                </div>
                                                <div className="image-container">
                                                    <img className='images-presentation' src={tubeloads_site_png_1.default} alt="tubeloadsave"/>
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
                                                <p className='fw-lighter paragath-style-tecnology'><img src={go_icon_png_1.default} alt='golang' width={40} height={30}/> Golang</p>
                                                <p className='fw-lighter paragath-style-tecnology'><img src={postgres_icon_png_1.default} alt='postgres' width={40} height={30}/> PostgreSQL</p>
                                                <p className='fw-lighter paragath-style-tecnology'>SQLC</p>
                                            </div>
                                            <div className="image-container">
                                                <img className="images-presentation" src={golangImage_jpg_1.default} alt="golang"/>
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
                                                <img className="images-presentation" src={ifal_image_jpeg_1.default} alt="ifal"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-KyZXEAg3QhqLMpG8r+VBE3k3Im+eD6hQo8AifF+4mtZf9AaC1khgjEzodWfWTzR5" crossOrigin="anonymous"></script>
        </>);
};
exports.PageHome = PageHome;
exports.default = exports.PageHome;
