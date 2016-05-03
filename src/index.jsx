require.context('./assets', true, /^\.\//);
import './styles/index.styl';
import React, { Component }                    from 'react';
import { render }                              from 'react-dom';
import { Router, Route, IndexRoute, IndexRedirect, Link, browserHistory } from 'react-router';


import Nav                    from './components/nav/Nav';
import MiniNav                from './components/nav/MiniNav';
import Home                   from './components/Home';
import Pie                    from './components/charts/Pie';
import Stack                  from './components/charts/Stack';
import RadialStack            from './components/charts/RadialStack';
import LineChart              from './components/charts/LineChartPage';
import TreeMap                from './components/charts/treemap/TreeMap';
import TreeMapD3              from './components/charts/treemap/TreeMapD3';
import TreeMapPlaceholders    from './components/charts/treemap/TreeMapPlaceholders';
import Bubble                 from './components/charts/bubble/Bubble';
import BubbleD3               from './components/charts/bubble/BubbleD3';
import BubbleReact            from './components/charts/bubble/BubbleReact';
import BubblePlaceholders     from './components/charts/bubble/BubblePlaceholders';
import Tree                   from './components/charts/Tree';
import Colors                 from './components/ColorsPage';
import Animations             from './components/AnimationsPage';


class App extends Component {
    constructor(props) {
        super(props);

        this.handleNavToggle = this.handleNavToggle.bind(this);
        this.handleNavClose  = this.handleNavClose.bind(this);

        this.state = { nav: false };
    }

    handleNavToggle(state) {
        this.setState({ nav: state });
    }

    handleNavClose() {
        this.setState({ nav: false });
    }

    render() {
        const { location, routes } = this.props;
        const { nav }              = this.state;

        const isHome = location.pathname === '/';
        if (isHome) {
            return this.props.children;
        }

        return (
            <div>
                <header onClick={this.handleDiceRoll}>
                    <span
                        className="nav_toggle"
                        onClick={this.handleNavToggle}
                    />
                    <Link className="brand" to="/"/>
                    <nav>
                        <a href="https://github.com/plouc/nivo" target="_blank">About</a>
                        <a href="https://github.com/plouc/nivo" target="_blank">Features</a>
                        <a href="https://github.com/plouc/nivo" target="_blank">GitHub</a>
                    </nav>
                </header>
                <MiniNav routes={routes} location={location} />
                {nav && <Nav onNavClose={this.handleNavClose} />}
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

/*
import { TreeMapD3 as TM }   from 'nivo';
import { generateLibTree } from './generators';

render(
    <TM width={360} height={240} root={generateLibTree()} colors="nivo" />,
    document.getElementById('nivo')
);
*/

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="pie" component={Pie} />
            <Route path="stack" component={Stack} />
            <Route path="radial-stack" component={RadialStack} />
            <Route path="line-chart" component={LineChart} />
            <Route path="treemap" component={TreeMap}>
                <IndexRedirect to="/treemap/d3" />
                <Route path="d3"           component={TreeMapD3}           />
                <Route path="placeholders" component={TreeMapPlaceholders} />
            </Route>
            <Route path="bubble" component={Bubble}>
                <IndexRedirect to="/bubble/react" />
                <Route path="react"        component={BubbleReact}        />
                <Route path="d3"           component={BubbleD3}           />
                <Route path="placeholders" component={BubblePlaceholders} />
            </Route>
            <Route path="tree" component={Tree} />
            <Route path="colors" component={Colors} />
            <Route path="animation" component={Animations} />
            <Route path="*" component={Home} />
        </Route>
    </Router>
), document.getElementById('nivo'));
