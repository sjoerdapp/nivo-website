import React, { Component }  from 'react';
import { Link }              from 'react-router';



class Nav extends Component {
    render () {

        //<Link className="sidebar_link sidebar_link-animation" to="animation" activeClassName="active">
        //    animation
        //</Link>

        const { onNavClose } = this.props;

        return (
            <div>
                <div className="overlay" onClick={onNavClose} />
                <aside className="sidebar">
                    <h3>Charts</h3>
                    <Link className="chart_link chart_link-bubble" to="/bubble" activeClassName="active" onClick={onNavClose}>
                        <span>Bubble</span>
                    </Link>
                    <Link className="chart_link chart_link-sub chart_link-bubble-react" to="/bubble/react" activeClassName="active" onClick={onNavClose}>
                        &lt;Bubble /&gt;
                    </Link>
                    <Link className="chart_link chart_link-sub chart_link-bubble-d3" to="/bubble/d3" activeClassName="active" onClick={onNavClose}>
                        &lt;BubbleD3 /&gt;
                    </Link>
                    <Link className="chart_link chart_link-sub chart_link-bubble-placeholders" to="/bubble/placeholders" activeClassName="active" onClick={onNavClose}>
                        &lt;BubblePlaceholders /&gt;
                    </Link>
                    <Link className="chart_link chart_link-pie" to="/pie" activeClassName="active" onClick={onNavClose}>
                        <span>Pie</span>
                    </Link>
                    <Link className="chart_link chart_link-stack" to="/stack" activeClassName="active" onClick={onNavClose}>
                        <span>Stack</span>
                    </Link>
                    <Link className="chart_link chart_link-radial-stack" to="/radial-stack" activeClassName="active" onClick={onNavClose}>
                        <span>RadialStack</span>
                    </Link>
                    <Link className="chart_link chart_link-treemap" to="/treemap" activeClassName="active" onClick={onNavClose}>
                        <span>TreeMap</span>
                    </Link>
                    <Link className="chart_link chart_link-sub chart_link-treemap-d3" to="/treemap/d3" activeClassName="active" onClick={onNavClose}>
                        &lt;TreeMapD3 /&gt;
                    </Link>
                    <Link className="chart_link chart_link-sub chart_link-treemap-placeholders" to="/treemap/placeholders" activeClassName="active" onClick={onNavClose}>
                        &lt;TreeMapPlaceholders /&gt;
                    </Link>
                    <Link className="chart_link chart_link-tree" to="/tree" activeClassName="active" onClick={onNavClose}>
                        <span>Tree</span>
                    </Link>
                    <h3>Guides</h3>
                    <Link className="sidebar_link sidebar_link-colors" to="/colors" activeClassName="active" onClick={onNavClose}>
                        colors
                    </Link>
                </aside>
            </div>
        );
    }
}


export default Nav;
