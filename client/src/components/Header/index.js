import React, { PureComponent } from 'react';

export default class Header extends PureComponent {
  render() {
    return (
      <nav>
        <div class="nav-wrapper">
          <a href="/" class="brand-logo">
            Maily
          </a>
          <ul id="nav-mobile" class="right">
            <li>
              <a href="#">Login with Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
