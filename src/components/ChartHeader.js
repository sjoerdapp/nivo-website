import React, { Component, PropTypes } from 'react';


class ChartHeader extends Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        const { chartClass, tags } = this.props;

        let gridModifier = '2_3';
        if (chartClass === 'Stack') {
            gridModifier = '1_3';
        }

        return (
            <div className="chart_header">
                <div className="chart_header_wrapper">
                    <h1 className="page_header">&lt;{chartClass} /&gt;</h1>
                    <div className="component_meta">
                        {tags.map(tag => (
                            <span key={tag} className="component_meta_tag">{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}


export default ChartHeader;
