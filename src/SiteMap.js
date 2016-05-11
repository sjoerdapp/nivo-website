import React                                from 'react';
import _                                    from 'lodash';
import { Route, IndexRoute, IndexRedirect } from 'react-router';


import Pie                 from './components/charts/pie/Pie';
import Stack               from './components/charts/stack/Stack';
import RadialStack         from './components/charts/RadialStack';
import TreeMap             from './components/charts/treemap/TreeMap';
import TreeMapD3           from './components/charts/treemap/TreeMapD3';
import TreeMapPlaceholders from './components/charts/treemap/TreeMapPlaceholders';
import Bubble              from './components/charts/bubble/Bubble';
import BubbleD3            from './components/charts/bubble/BubbleD3';
import BubbleReact         from './components/charts/bubble/BubbleReact';
import BubblePlaceholders  from './components/charts/bubble/BubblePlaceholders';
import Calendar            from './components/charts/calendar/Calendar';
import CalendarReact       from './components/charts/calendar/CalendarReact';
import CalendarD3          from './components/charts/calendar/CalendarD3';
import CalendarCanvas      from './components/charts/calendar/CalendarCanvas';
import Tree                from './components/charts/Tree';
import Colors              from './components/guides/Colors';
import Animation           from './components/guides/Animation';
import About               from './components/About';
import Features            from './components/Features';


const SITEMAP = [
    {
        label:    'Charts',
        children: [
            {
                className: 'bubble',
                path:      'bubble',
                label:     'Bubble',
                component: Bubble,
                children:  [
                    {
                        className: 'bubble-react',
                        path:      'react',
                        label:     '<Bubble />',
                        component: BubbleReact,
                        isIndex:   true
                    },
                    {
                        className: 'bubble-d3',
                        path:      'd3',
                        label:     '<BubbleD3 />',
                        component: BubbleD3
                    },
                    {
                        className: 'bubble-placeholders',
                        path:      'placeholders',
                        label:     '<BubblePlaceholders />',
                        component: BubblePlaceholders
                    },
                ]
            },
            {
                className: 'calendar',
                path:      'calendar',
                label:     'Calendar',
                component: Calendar,
                children:  [
                    {
                        className: 'calendar-react',
                        path:      'react',
                        label:     '<Calendar />',
                        component: CalendarReact,
                    },
                    {
                        className: 'calendar-d3',
                        path:      'd3',
                        label:     '<CalendarD3 />',
                        component: CalendarD3,
                        isIndex:   true,
                    },
                    {
                        className: 'calendar-canvas',
                        path:      'canvas',
                        label:     '<CalendarCanvas />',
                        component: CalendarCanvas,
                    },
                ]
            },
            {
                className: 'pie',
                path:      'pie',
                label:     '<Pie />',
                component: Pie
            },
            {
                className: 'stack',
                path:      'stack',
                label:     '<Stack />',
                component: Stack
            },
            {
                className: 'radial-stack',
                path:      'radial-stack',
                label:     '<RadialStack />',
                component: RadialStack
            },
            {
                className: 'treemap',
                path:      'treemap',
                label:     'TreeMap',
                component: TreeMap,
                children:  [
                    {
                        className: 'treemap-d3',
                        path:      'd3',
                        label:     '<TreeMapD3 />',
                        component: TreeMapD3,
                        isIndex:   true
                    },
                    {
                        className: 'treemap-placeholders',
                        path:      'placeholders',
                        label:     '<TreeMapPlaceholders />',
                        component: TreeMapPlaceholders
                    },
                ]
            },
            {
                className: 'tree',
                path:      'tree',
                label:     '<Tree />',
                component: Tree
            },
        ]
    },
    {
        label:    'Guides',
        children: [
            {
                className: 'colors',
                path:      'guides/colors',
                label:     'Colors',
                component: Colors
            },
            {
                className: 'animation',
                path:      'guides/animation',
                label:     'Animation',
                component: Animation
            },
        ]
    },
    {
        label:    'misc',
        children: [
            {
                className: 'about',
                path:      'about',
                label:     'About',
                component: About
            },
            {
                className: 'features',
                path:      'features',
                label:     'Features',
                component: Features
            },
        ]
    }
];


export const getSectionItems = (sectionLabel) => {
    const section = _.find(SITEMAP, { label: sectionLabel });

    return section.children;
};


export const getRoutes = () => {
    const routes = [];

    SITEMAP.forEach(item => {
        if (item.children && item.children.length > 0) {
            item.children.forEach(sectionItem => {
                const routeChildren = [];

                if (sectionItem.children) {
                    sectionItem.children.forEach(childItem => {
                        if (childItem.isIndex) {
                            routeChildren.push(
                                <IndexRedirect
                                    key={`${childItem.path}.index-redirect`}
                                    to={`/${sectionItem.path}/${childItem.path}`}
                                />
                            );
                        }

                        routeChildren.push(
                            <Route
                                key={childItem.path}
                                path={childItem.path}
                                component={childItem.component}
                            />
                        );
                    });
                }

                routes.push(
                    <Route
                        key={sectionItem.path}
                        path={sectionItem.path}
                        component={sectionItem.component || null}
                    >
                        {routeChildren}
                    </Route>
                );
            });
        }
    });

    return routes;
};