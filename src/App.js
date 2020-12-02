import React, {Component} from 'react';
import {cars} from "./data";
import CarComponent from "./component/car/CarComponent";

class App extends Component {
    render() {

        return (
            <div>
                {
                    cars.map((value, index) => {
                        let name = 'target';

                        if(value.producer === 'bmw') {name = 'bmw';}
                        if(value.producer === 'mercedes') {name = 'mercedes';}
                        if(value.producer === 'subaru') {name = 'subaru';}



                        return ( <CarComponent item = {value} key = {index} clsName = {name} />)
                    })
                }
            </div>
        );
    }
}

export default App;