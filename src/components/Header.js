import React, { Component, PropTypes } from 'react';
import { Link }                        from 'react-router';
import { getSectionItems }             from '../SiteMap';


const miscItems = getSectionItems('misc');


class Header extends Component {
    render() {
        const { onNavToggle } = this.props;

        return (
            <header>
                <span className="nav_toggle" onClick={onNavToggle} />
                <Link className="brand" to="/"/>
                <nav>
                    {miscItems.map(item => (
                        <Link key={item.className} to={`/${item.path}`}>{item.label}</Link>
                    ))}
                    <a href="https://github.com/plouc/nivo" target="_blank">GitHub</a>
                </nav>
            </header>
        );
    }
}

Header.propTypes = {
    onNavToggle: PropTypes.func.isRequired
};


export default Header;