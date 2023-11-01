export default function ApiService (endpoint) {
    this.getAllDataPlace = () => fetch(`https://jsonplaceholder.typicode.com/${endpoint}`).then(value => value.json());
    this.getAllDataCars = () => fetch('http://owu.linkpc.net/carsAPI/v1/cars').then(value => value.json());
}