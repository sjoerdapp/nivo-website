import React, { Component, PropTypes } from 'react';


class ChartHeader extends Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        const { chartClass, tags, chartSize } = this.props;

        return (
            <div className="grid chart_header">
                <div className={`grid_item grid_item-${chartSize}_3 chart_header_wrapper`}>
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

const { number } = PropTypes;

ChartHeader.propTypes = {
    chartSize: number,
};

ChartHeader.defaultProps = {
    chartSize: 2,
};


export default ChartHeader;
