import React, { Component }         from 'react';
import { Link }                     from 'react-router';
import { TransitionMotion, spring } from 'react-motion';
import _                            from 'lodash';
import MiniNavLink                  from './MiniNavLink';


const miniNavItems = [
    { className: 'bubble', path: '/bubble', label: 'Bubble', children: [
        { className: 'bubble-react', path: '/bubble/react', label: '<Bubble />' },
        { className: 'bubble-d3', path: '/bubble/d3', label: '<BubbleD3 />' },
        { className: 'bubble-placeholders', path: '/bubble/placeholders', label: '<BubblePlaceholders />' },
    ] },
    { className: 'pie',          path: '/pie',          label: '<Pie />'         },
    { className: 'calendar',     path: '/calendar',     label: 'Calendar', children: [
        { className: 'calendar-react', path: '/calendar/react', label: '<Calendar />' },
        { className: 'calendar-d3', path: '/calendar/d3', label: '<CalendarD3 />' },
    ] },
    { className: 'stack',        path: '/stack',        label: '<Stack />'       },
    { className: 'radial-stack', path: '/radial-stack', label: '<RadialStack />' },
    { className: 'treemap', path: '/treemap', label: 'TreeMap', children: [
        { className: 'treemap-d3', path: '/treemap/d3', label: '<TreeMapD3 />' },
        { className: 'treemap-placeholders', path: '/treemap/placeholders', label: '<TreeMapPlaceholders />' },
    ] },
    { className: 'tree',         path: '/tree',         label: '<Tree />'        },
].map((item, i) => {
    item.index = i;
    item.absIndex = i;
    if (item.children) {
        item.children = item.children.map((child, childIndex) => {
            child.index       = childIndex + 1;
            child.parentIndex = item.index;
            child.absIndex    = item.index + childIndex + 1;

            return child;
        })
    }

    return item;
});


class MiniNav extends Component {
    constructor(props) {
        super(props);

        this.closeChildren = this.closeChildren.bind(this);
        this.openChildren  = this.openChildren.bind(this);

        this.state = { children: true };
    }

    closeChildren() {
        this.setState({ children: false });
    }

    openChildren() {
        this.setState({ children: true });
    }

    componentWillReceiveProps(nextProps) {
        let oldParentPath = '/';
        if (this.props.routes.length > 1) {
            oldParentPath += this.props.routes[1].path;
        }

        let newParentPath = '/';
        if (nextProps.routes.length > 1) {
            newParentPath += nextProps.routes[1].path;
        }

        if (oldParentPath !== newParentPath) {
            this.setState({ children: true });
        }
    }

    willEnter(item) {
        const index = item.data.parentIndex !== undefined ? item.data.parentIndex : (item.data.index + 1);

        return {
            top:     (index + 1) * 56,
            scale:   0.6,
            opacity: 0.1,
            zIndex:  10
        };
    }

    willLeave(item) {
        const index = item.data.parentIndex !== undefined ? item.data.parentIndex : item.data.index;

        return {
            top:     spring((index + 1) * 56, { stiffness: 300, damping: 40 }),
            scale:   spring(0.6, { stiffness: 300, damping: 40 }),
            opacity: spring(0, { stiffness: 300, damping: 40 }),
            zIndex:  0
        };
    }

    render () {
        const { routes } = this.props;

        let currentParent = null;
        let hasChildren   = false;
        let childrenItems = [];

        if (routes.length > 1) {
            const parent = _.find(miniNavItems, { path: `/${routes[1].path}`});
            if (parent && parent.children) {
                hasChildren   = true;
                currentParent = parent;
            }
        }

        let parentItems = miniNavItems.map(item => {
            const itemProps = _.assign({}, item);
            if (item === currentParent) {
                itemProps.onClick = this.openChildren;
            }

            return itemProps;
        });

        if (hasChildren) {
            childrenItems = [{
                label: 'back',
                index: 0
            }].concat(currentParent.children);
        }

        let currentItems;
        if (hasChildren) {
            if (this.state.children) {
                currentItems = childrenItems;
            } else {
                currentItems = parentItems;
            }
        } else {
            currentItems = parentItems;
        }

        return (
            <aside className="mini-nav">
                <Link className="mini-nav_item mini-nav_item-nivo" to="/">
                    <span className="mini-nav_item_icon" />
                </Link>
                <TransitionMotion
                    willEnter={this.willEnter}
                    willLeave={this.willLeave}
                    styles={currentItems.map(item => {
                        return {
                            key:   item.label,
                            data:  item,
                            style: {
                                top:     spring((item.index + 1) * 56, { stiffness: 120, damping: 11 }),
                                scale:   spring(1, { stiffness: 120, damping: 11 }),
                                opacity: spring(1),
                                zIndex:  10,
                            }
                        };
                    })}
                >
                    {interpolatedStyles => (
                        <div>
                            {interpolatedStyles.map(item => {
                                const style = {
                                    opacity:   item.style.opacity,
                                    transform: `translate3d(0,${item.style.top}px,0) scale(${item.style.scale})`,
                                    zIndex:    item.style.zIndex
                                };

                                if (item.data.path) {
                                    return <MiniNavLink key={item.key} style={style} {...item.data} />;
                                }

                                return (
                                    <span key="back" onClick={this.closeChildren} className="mini-nav_item mini-nav_item-back" style={style}>
                                        <span className="mini-nav_item_icon" />
                                    </span>
                                );
                            })}
                        </div>
                    )}
                </TransitionMotion>
            </aside>
        );
    }
}


export default MiniNav;
