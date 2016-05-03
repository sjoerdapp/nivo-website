import React, { Component } from 'react';
import ChartCode            from './ChartCode';
import JsonData             from './JsonData';


class ChartCodeAndData extends Component {
    render() {
        const { code, dataKey, data } = this.props;

        return (
            <div>
                <ChartCode code={code} />
                {data && (<JsonData dataKey={`{${dataKey}}`} data={data} />)}
            </div>
        );
    }
}


export default ChartCodeAndData;
