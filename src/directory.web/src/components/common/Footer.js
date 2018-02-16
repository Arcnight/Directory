import React from 'react'

import 'assets/styles/Footer.css'

const Footer = () => (
  <div className="footer-container">
    {'© Awesome App 2016. '}
    <a href="https://github.com/guzmonne/office-ui-layout/tree/01-blank-project">Get in touch!</a>
    {' -- Made with '}
    <span className="text-red">♥</span>
    {' by '}
    <a href="https://github.com/guzmonne">Guzmán Monné {'<@guzmonne>'}</a>    
  </div>
)

export default Footer
