import React, { Component } from 'react';
import ChartCode            from './ChartCode';
import JsonData             from './JsonData';


class ChartCodeAndData extends Component {
    render() {
        const { code, data } = this.props;

        return (
            <div>
                <ChartCode code={code} />
                {data && (<JsonData data={data} />)}
            </div>
        );
    }
}


export default ChartCodeAndData;
