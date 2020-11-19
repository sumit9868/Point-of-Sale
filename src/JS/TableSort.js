import React , {Component}from 'react';
import './TableSort.css'
const tableData = [
    {
        name: 'Burger',
        price: 62,
    }, {
        name: 'Pizza',
        price: 76,
    }, {
        name: 'Noodles',
        price: 96,
    }, {
        name: 'Pasta',
        price: 64
    }
];
const sortTypes = {
    up: {
        class: 'sort-up',
        fn: (a, b) => a.price - b.price
    },
    down: {
        class: 'sort-down',
        fn: (a, b) => b.price - a.price
    },
    default: {
        class: 'sort',
        fn: (a, b) => a
    }
}

class Table extends React.Component {
    state = {
        currentSort: 'default'
    }
    
    onSortChange = () => {
        const { currentSort } = this.state;
        let nextSort;
        
        if(currentSort === 'down') nextSort = 'up';
        else if(currentSort === 'up') nextSort = 'default';
        else if(currentSort === 'default') nextSort = 'down';
        
        this.setState({
            currentSort: nextSort
        })
    }
    
    render() {
        const { data } = this.props;
        const { currentSort } = this.state;
        
        return ( data.length > 0 && (
            <table className="text-left">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>
                            Price
                            <button onClick={this.onSortChange}>
                                <i className={`fas fa-${sortTypes[currentSort].class}`}></i>
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {[...data].sort(sortTypes[currentSort].fn).map(p => (
                        <tr>
                            <td>{p.name}</td>
                            <td>Rs {p.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        ))
    }
}

function TableSort() {
    return (
        <div>
             <div className="text-center">
        <h4>Menu OP</h4>
        <Table data={tableData} />
      </div>
        </div>
    )
}

export default TableSort
