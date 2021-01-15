import React from "react";

import SocialIcon from "./SocialIcon";

const Footer = ({ links, logo, socials }) => {
  return (
    <footer className='footer-wrapper'>
      <div className='footer'>
        <div className='footer__top'>
          <img className='footer__logo' src={logo} alt='shortly logo' />
        </div>
        <div className='footer__center'>
          <ul className='footer__links'>
            {links.map((segment) => {
              return (
                <li className='footer__segment' key={segment.id}>
                  <span className='footer__segment-title'>{segment.title}</span>
                  <ul className='footer__segment-links'>
                    {segment.segments.map((innerSegment) => {
                      return (
                        <li
                          className='footer__segment-item'
                          key={innerSegment.id}
                        >
                          <a
                            href={innerSegment.url}
                            className='footer__segment-link'
                          >
                            {innerSegment.title}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='footer__bottom'>
          <ul className='footer__socials'>
            {Object.values(socials).map((icon) => {
              return (
                <li className='footer__social' key={icon.title}>
                  <SocialIcon icon={icon} />{" "}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
