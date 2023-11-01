import React, {Component} from 'react';

class Car extends Component {
    render() {
        const {brand,year,price,id} = this.props.car;
        return (
            <div>
                <div> id:{id}</div>
                <div> brand:{brand}</div>
                <div> price:{price}</div>
                <div> year:{year}</div>

            </div>
        );
    }
}

export default Car;