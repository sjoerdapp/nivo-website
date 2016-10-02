import React                                from 'react'
import _                                    from 'lodash'
import { Route, IndexRoute, IndexRedirect } from 'react-router'


import BarsPage            from './components/charts/bars/BarsPage'
import Bars                from './components/charts/bars/Bars'
import BarsPlaceholders    from './components/charts/bars/BarsPlaceholders'
import LinePage            from './components/charts/line/LinePage'
import Line                from './components/charts/line/Line'
import BubblePage          from './components/charts/bubble/BubblePage'
import BubbleReact         from './components/charts/bubble/BubbleReact'
import BubblePlaceholders  from './components/charts/bubble/BubblePlaceholders'
import TreeMapPage         from './components/charts/treemap/TreeMap'
import TreeMapReact        from './components/charts/treemap/TreeMapReact'
import TreeMapPlaceholders from './components/charts/treemap/TreeMapPlaceholders'
import ChordPage           from './components/charts/chord/ChordPage'
import Chord               from './components/charts/chord/Chord'
import Colors              from './components/guides/Colors'
import About               from './components/About'
import Features            from './components/Features'


const SITEMAP = [
    {
        label:    'Charts',
        children: [
            {
                className: 'bars',
                path:      'bars',
                label:     'Bars',
                component: BarsPage,
                children:  [
                    {
                        className: 'bars-react',
                        path:      'react',
                        label:     '<Bars />',
                        component: Bars,
                        isIndex:   true,
                    },
                    //{
                    //    className: 'bars-placeholders',
                    //    path:      'placeholders',
                    //    label:     '<BarsPlaceholders />',
                    //    component: BarsPlaceholders,
                    //},
                ]
            },
            {
                className: 'line',
                path:      'line',
                label:     'Line',
                component: LinePage,
                children:  [
                    {
                        className: 'line-react',
                        path:      'react',
                        label:     '<Line />',
                        component: Line,
                        isIndex:   true,
                    },
                ]
            },
            {
                className: 'bubble',
                path:      'bubble',
                label:     'Bubble',
                component: BubblePage,
                children:  [
                    {
                        className: 'bubble-react',
                        path:      'react',
                        label:     '<Bubble />',
                        component: BubbleReact,
                        isIndex:   true,
                    },
                    {
                        className: 'bubble-placeholders',
                        path:      'placeholders',
                        label:     '<BubblePlaceholders />',
                        component: BubblePlaceholders,
                    },
                ]
            },
            {
                className: 'treemap',
                path:      'treemap',
                label:     'TreeMap',
                component: TreeMapPage,
                children:  [
                    {
                        className: 'treemap-react',
                        path:      'react',
                        label:     '<TreeMap />',
                        component: TreeMapReact,
                        isIndex:   true,
                    },
                    {
                        className: 'treemap-placeholders',
                        path:      'placeholders',
                        label:     '<TreeMapPlaceholders />',
                        component: TreeMapPlaceholders,
                    },
                ]
            },
            {
                className: 'chord',
                path:      'chord',
                label:     'Chord',
                component: ChordPage,
                children:  [
                    {
                        className: 'chord-react',
                        path:      'react',
                        label:     '<Chord />',
                        component: Chord,
                        isIndex:   true,
                    },
                ],
            },
        ],
    },
    {
        label:    'Guides',
        children: [
            {
                className: 'colors',
                path:      'guides/colors',
                label:     'Colors',
                component: Colors,
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
                component: About,
            },
            {
                className: 'features',
                path:      'features',
                label:     'Features',
                component: Features,
            },
        ]
    }
]


export const getSectionItems = (sectionLabel) => {
    const section = _.find(SITEMAP, { label: sectionLabel })

    return section.children
}


export const getRoutes = () => {
    const routes = []

    SITEMAP.forEach(item => {
        if (item.children && item.children.length > 0) {
            item.children.forEach(sectionItem => {
                const routeChildren = []

                if (sectionItem.children) {
                    sectionItem.children.forEach(childItem => {
                        if (childItem.isIndex) {
                            routeChildren.push(
                                <IndexRedirect
                                    key={`${childItem.path}.index-redirect`}
                                    to={`/${sectionItem.path}/${childItem.path}`}
                                />
                            )
                        }

                        routeChildren.push(
                            <Route
                                key={childItem.path}
                                path={childItem.path}
                                component={childItem.component}
                            />
                        )
                    })
                }

                routes.push(
                    <Route
                        key={sectionItem.path}
                        path={sectionItem.path}
                        component={sectionItem.component || null}
                    >
                        {routeChildren}
                    </Route>
                )
            })
        }
    })

    return routes
}