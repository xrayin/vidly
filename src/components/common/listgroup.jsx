import React from 'react';

const ListGroup = ({items, textProperty, valueProperty, onItemSelect, selectedItem}) => {

    return (
        <div>
            <ul style={{cursor: "pointer"}} className="list-group">
                {items.map(item =>
                    (
                        <li key={item[valueProperty]} onClick={() => onItemSelect(item)} className={item === selectedItem ? "list-group-item active" : "list-group-item"}>{item[textProperty]}</li>
                    ))}
            </ul>
        </div>
    );
}

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
