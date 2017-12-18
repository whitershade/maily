import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class Header extends PureComponent {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return '';
      case false:
        return 'Login';
      default:
        return 'Logout';
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            Maily
          </a>
          <ul id="nav-mobile" className="right">
            <li>
              <a href="/auth/google">{this.renderContent()}</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Header);
