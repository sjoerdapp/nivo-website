import React, { Component } from 'react';
import JsonData             from './JsonData';


class ChartCode extends Component {
    render() {
        const { snippetId, dataKey, data } = this.props;
        let { code }                       = this.props;

        if (code === undefined || code === null) {
            code = require(`../snippets/${snippetId}.txt`);
        }
        //<span className="code-snippet_label">usage</span>

        return (
            <div>
                <div className="code-snippet">
                    <pre>{code}</pre>
                </div>
                {data && (<JsonData dataKey={`{${dataKey}}`} data={data} />)}
            </div>
        );
    }
}


export default ChartCode;
