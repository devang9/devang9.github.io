import React, { Component } from 'react';
import Typing from 'react-typing-animation';
class Header extends Component {

    render() {
        var social = [
            {
                "name": "facebook",
                "url": "http://facebook.com/tim.baker.906",
                "className": "fa fa-facebook"
            },
            {
                "name": "twitter",
                "url": "http://twitter.com",
                "className": "fa fa-twitter"
            },
            {
                "name": "google-plus",
                "url": "http://googleplus.com/tbakerx",
                "className": "fa fa-google-plus"
            },
            {
                "name": "linkedin",
                "url": "https://www.linkedin.com/in/tim-baker-8420009a/",
                "className": "fa fa-linkedin"
            },
            {
                "name": "instagram",
                "url": "http://instagram.com/tbaker_x",
                "className": "fa fa-instagram"
            },
            {
                "name": "github",
                "url": "http://github.com/tbakerx",
                "className": "fa fa-github"
            },
            {
                "name": "skype",
                "url": "http://skype.com",
                "className": "fa fa-skype"
            }
        ]
        var networks = social.map(function (network) {
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
        })
        return (
            <header id="home">

                <nav id="nav-wrap">

                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                        <li><a className="smoothscroll" href="#about">About</a></li>
                        <li><a className="smoothscroll" href="#resume">Resume</a></li>
                        <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                        <li><a className="smoothscroll" href="#contact">Contact</a></li>
                    </ul>

                </nav>

                <div className="row banner">
                    <div className="banner-text">
                        <Typing loop>
                            <Typing.Speed ms={100} />
                            <span><h1 className="responsive-headline">I'm Devang Chheda.</h1></span>
                            {/* <Typing.Backspace count={20} /> */}
                            {/* <Typing.Speed ms={100} /> */}
                            <Typing.Delay ms={2000} />
                            <Typing.Speed ms={50} />
                            <Typing.Backspace count={20} />
                        </Typing>
                        <hr />
                        {/* <ul className="social">
                            {networks}
                        </ul> */}
                    </div>
                </div>

                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                </p>

            </header>
        );
    }

}
export default Header;