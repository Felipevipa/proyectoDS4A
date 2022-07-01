import React from 'react'
import './css/Footer.css'

function Footer() {
    return (
        <div className='footer-wraper'>
            <div className='footer-container'>
                <div className='footer-container-column'>
                    <div style={{ borderBottom: "1px solid white", paddingBottom: "10px" }}>
                        <h2 className='white-text'>Contacto</h2>
                        <p className='white-text'>PBX:(+57) 6012203000 opc. 1 o 2 | Linea fija (+57) 6014824304</p>
                        <p className='white-text'>Horario de atención: 07:00am a 4:30pm de Lunes a Viernes</p>
                    </div>
                    <div style={{ borderBottom: "1px solid white", paddingBottom: "10px" }}>
                        <h4 className='white-text'>Dirección</h4>
                        <p className='white-text'>Av. Eldorado No. 69 - 76 Edificio Elemento, Torre 1, Piso 2.</p>
                        <p className='white-text'>Bogotá D.C. (Colombia)</p>
                    </div>
                    <div style={{ borderBottom: "1px solid white", paddingBottom: "10px" }}>
                        <h4 className='white-text'>Ventanilla Virtual:</h4>
                        <p className='white-text'>radicacion@transmilenio.gov.co</p>
                        <p className='white-text'>horario 7:00am a 4:30pm</p>
                    </div>
                    <div>
                        <h4 className='white-text'>Código Postal 111071</h4>
                    </div>
                </div>
                <div className='footer-container-column'>
                    <div><h2 className='white-text'>Equipo de desarrollo</h2></div>
                    <div style={{ borderBottom: "1px solid white", paddingBottom: "10px" }}>
                        <p className='white-text'>Mauricio Villegas Ramelli</p>
                        <p className='white-text'>Email: mauricio.villegas.ramelli@gmail.com</p>
                    </div>
                    <div style={{ borderBottom: "1px solid white", paddingBottom: "10px" }}>
                        <p className='white-text'>Andres Felipe Villamizar Palacio</p>
                        <p className='white-text'>Email: felipevipa@outlook.com</p>
                    </div>
                    <div style={{ borderBottom: "1px solid white", paddingBottom: "10px" }}>
                        <p className='white-text'>Angie Lorena Pinzón Alba</p>
                        <p className='white-text'>Email: angpinzon@uniboyaca.edu.co</p>
                    </div>
                    <div style={{ borderBottom: "1px solid white", paddingBottom: "10px" }}>
                        <p className='white-text'>Camilo Esteban Hernández Castillo</p>
                        <p className='white-text'>Email: camehernandezcas@unal.edu.co</p>
                    </div>
                    <div style={{ borderBottom: "1px solid white", paddingBottom: "10px" }}>
                        <p className='white-text'>Carlos Felipe Forigua Rodriguez</p>
                        <p className='white-text'>Email: carlos.forig@gmail.com</p>
                    </div>
                    <div style={{ borderBottom: "1px solid white", paddingBottom: "10px" }}>
                        <p className='white-text'>Carlos Ricardo Collazos Garcia</p>
                        <p className='white-text'>Email: crcollazosg@gmail.com</p>
                    </div>
                    <div>
                        <p className='white-text'>Santiago Rodriguez</p>
                        <p className='white-text'>Email: santirochava@gmail.com</p>
                    </div>
                </div>
                <div className='footer-container-column column3'>
                    <div><a href='#'><img src="/icons/logoTransmilenio.png" /></a></div>
                    <br />
                    <div>
                        <a href='#'><img className='footer-icon' src="/icons/facebookIcon.png" /></a>
                        <a href='#'><img className='footer-icon' src="/icons/twitterIcon.png" /></a>
                        <a href='#'><img className='footer-icon' src="/icons/instagramIcon.png" /></a>
                        <a href='#'><img className='footer-icon' src="/icons/youtubeIcon.png" /></a>
                        <a href='#'><img className='footer-icon' src="/icons/transmisionIcon.png" /></a>
                    </div>
                    <div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <img className='footer-colombia-icon' src="/icons/colombiaIcon.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer