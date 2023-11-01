import React, {Component} from 'react';
import ApiService from "../../services/apiServices";
import Car from "./car";

class CarsPage extends Component {
    constructor(props) {
        super(props);
        this.state= {cars:[]}
    }

    componentDidMount() {
        const apiCars = new ApiService().getAllDataCars();
        apiCars.then(value=> this.setState({cars:value}))
    }

    render() {
        return (
            <div>
                {this.state.cars.map(car=><Car car={car} key={car.id}/>)}
            </div>
        );
    }
}

export default CarsPage;