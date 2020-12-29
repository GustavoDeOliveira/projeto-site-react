import React, { Component } from 'react';
import Item from './Item';
import './Lista.css';

class Lista extends Component {
    state = { items: [
        { id: 1, desc: "Item 1", marcado: false },
        { id: 2, desc: "Item 2", marcado: true },
        { id: 3, desc: "Item 3", marcado: false }
    ]};

    handleClick = (id) => {
        this.state.items
            .forEach((item) => {
                if (item.id === id) {
                    item.marcado = !item.marcado;
                    return;
                }
            });
        this.setState(this.state);
    };

    render() {
    return (
        <ul className="Lista">
            { this.state.items.map((item) => {
                return <Item handleClick={this.handleClick} key={item.id} item={item} />
            }) }
        </ul>
    );
    }
}
export default Lista;