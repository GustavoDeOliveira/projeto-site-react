import React, { Component } from 'react';

class Item extends Component {
    render() {
    return (
        <li key={this.props.item.id}
            onClick={this.props.handleClick.bind(this, this.props.item.id)}
            className={this.props.item.marcado ? 'marcado' : ''}>
                {this.props.item.desc}
        </li>
    );
    }
}
export default Item;