import React, { Component } from 'react'
import { Link }             from 'react-router'
import { getSectionItems }  from '../../SiteMap'


const chartsItems = getSectionItems('Charts')
const guidesItems = getSectionItems('Guides')



class Nav extends Component {
    render () {
        const { onNavClose } = this.props;

        return (
            <div>
                <div className="overlay" onClick={onNavClose} />
                <aside className="sidebar">
                    <h3>Charts</h3>
                    {chartsItems.map(item => {
                        const links = [(
                            <Link
                                to={`/${item.path}`}
                                onClick={onNavClose}
                                className={`chart_link chart_link-${item.className}`}
                                activeClassName="active"
                            >
                                <span>{item.label}</span>
                            </Link>
                        )];

                        if (item.children) {
                            item.children.forEach(child => {
                                links.push(
                                    <Link
                                        to={`/${item.path}/${child.path}`}
                                        onClick={onNavClose}
                                        className={`chart_link chart_link-sub chart_link-${child.className}`}
                                        activeClassName="active"
                                    >
                                        <span>{child.label}</span>
                                    </Link>
                                );
                            });
                        }

                        return links;
                    })}
                    <h3>Guides</h3>
                    {guidesItems.map(item => (
                        <Link
                            className={`sidebar_link sidebar_link-${item.className}`}
                            activeClassName="active"
                            to={`/${item.path}`}
                            onClick={onNavClose}
                        >
                            {item.label}
                        </Link>
                    ))}
                </aside>
            </div>
        );
    }
}


export default Nav;
