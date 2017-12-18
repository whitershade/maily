import React, { PureComponent } from 'react';

export default class Header extends PureComponent {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            Maily
          </a>
          <ul id="nav-mobile" className="right">
            <li>
              <a href="#">Login with Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
