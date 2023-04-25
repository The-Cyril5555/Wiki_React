import React from 'react';

import './NoPage.css';
import logo from '../../logo.svg';

export default function NoPage() {
   return (
      <div className="container main-404" >
         <h1>404</h1>
         <p><strong>File not found</strong></p>
         <p>
            The site configured at this address does not
            contain the requested file.
         </p>
         <div id="suggestions">
            <a href="https://githubstatus.com">GitHub Status</a>
         </div>
         <a href="/" className="logo logo-img-1x">
            <img
               src={logo}
               className="App-logo"
               alt="logo"
               height={50}
               width={50}
            />
         </a>
      </div>);
};
