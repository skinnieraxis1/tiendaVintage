import React from "react"
import 'semantic-ui-css/semantic.min.css'
import './Footer.css'

const Footer = () => {
    return(
        <div>
            <div className="ui segment footer">
                
                <div className="ui two column very relaxed grid">
                    <div className="column">
                        <h3 className="bebas-neue-regular">Branches</h3>
                        <div className="ui two column grid">
                            <div className="column">
                                <div className="ui bulleted list">
                                    <div className="item">AV CÓRDOBA (Av Córdoba 4517)</div>
                                    <div className="item">RECOLETA (Talcahuano 996)</div>
                                    <div className="item">ABASTO SHOPPING</div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="ui bulleted list">
                                    <div className="item">BARRIO CHINO</div>
                                    <div className="item">ALTO PALERMO</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column footer-right">
                        <h3 className="bebas-neue-regular footer-right-title">Contact Us:</h3>
                        <div className="footer-right-div-li">
                            <div className="ui bulleted list phonesLi">
                                <div className="item">Phone: +54 11 1234 5678</div>
                                <div className="item">Telephone: 1234 5678</div>
                            </div>
                            <div className="ui list socialLi">
                                <div className="item">@VintageStory <i className="instagram icon"></i></div>
                                <div className="item">@VintageStory <i className="twitter icon"></i></div>
                                <div className="item">@VintageStory <i className="facebook icon"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui fitted vertical divider">
                    and
                </div>
                
            </div>
            <footer className="bebas-neue-regular">© Copyright This Is Feliz Navidad - 2024 </footer>
        </div>
    );
}

export default Footer