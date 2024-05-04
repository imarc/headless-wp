import React from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image'

export default function Footer(props) {
    return (
        <footer className="text-light">
        <div className="container">
            <div className="row g-custom-x">
                <div className="col-lg-3">
                    <div className="widget">
                        <h5>{props.textSection.headline}</h5>
                        <p>{props.textSection.paragraph}</p>
                    </div>
                </div>
                
                <div className="col-lg-3">
                    <div className="widget">
                        <h5>{props.contactUsSection.headline}</h5>
                        <address className="s1">
                        {props.contactUsSection.contactLinks.map((link, index) => (
                            <span key={index}>
                            <i className={`id-color fa fa-lg ${link.iconClass}`}></i>
                            {link.url ? (
                                <a href={link.url}>{link.label}</a>
                            ) : (
                                link.label
                            )}
                            </span>
                        ))}
                        </address>
                    </div>
                </div>

                <div className="col-lg-3">
                    <h5>{props.quickLinksSection.headline}</h5>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="widget">
                                <ul>
                                {props.quickLinksSection.quickLinks.map((link, index) => (
                                     <li key={index}><a href={link.url}>{link.label}</a></li>                                   
                                ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="widget">
                        <h5>{props.socialNetworksSection.headline}</h5>
                        <div className="social-icons">
                            {props.socialNetworksSection.socialLinks.map((link, index) => (
                                <a key={index} href={link.url}><i className={`fa ${link.icon} fa-lg`}></i></a>                               
                            ))}
                        </div>
                    </div>    
                </div>
            </div>
        </div>
        <div className="subfooter">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="de-flex">
                            <div className="de-flex-col">
                                <a href="index.html">
                                 © Copyright {new Date().getFullYear()}
                                </a>
                            </div>
                            <ul className="menu-simple">
                                {props.bottomLinks.map((link, index) => (
                                    <li key={index}><a href={link.url}>{link.label}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}
