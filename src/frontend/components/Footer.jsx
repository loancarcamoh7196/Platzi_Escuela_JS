import React from 'react';
import '../assets/styles/components/Footer.scss';

/**
 * Constantes para texto elementos html
 */
const footerEndTermsURL = '#';
const footerEndTermsText = 'Términos de uso';
const footerDeclarationPrivacityURL = '#';
const footerDeclarationPrivacityText = 'Declaración de privacidad';
const footerHelpCenterURL = '#';
const footerHelpCenterText = 'Centro de ayuda';

const Footer = () => (
  <footer className='footer'>
    <a href={footerEndTermsURL}> {footerEndTermsText} </a>
    <a href={footerDeclarationPrivacityURL}> {footerDeclarationPrivacityText} </a>
    <a href={footerHelpCenterURL}> {footerHelpCenterText} </a>
  </footer>
);

export default Footer;
