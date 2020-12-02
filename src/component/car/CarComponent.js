import React, {Component} from 'react';
import './carStyle.css';
class CarComponent extends Component {
    render() {
        let{item, clsName} = this.props;
        return (
            <div className={clsName}>
                <h4>
                    {item.producer} - {item.model} - {item.year} - {item.color} - {item.type} - {item.engine} - {item.volume} - {item.power}
                </h4>
            </div>
        );
    }
}

export default CarComponent;