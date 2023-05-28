import React from 'react';
import '../styles/Table.scss';
import { useDispatch } from 'react-redux';
import { toggleIsAddFormVisible } from '../redux/slice';

const Component = () => {
    const dispatch = useDispatch();

    return (
        <tr className="table-header">
            <th align="left">ID</th>
            <th align="left">Client</th>
            <th align="left">Pickup Address</th>
            <th align="left">Dropoff Address</th>
            <th align="left">Courier</th>
            <th align="left" rowSpan={2} colSpan={2}>
                Status
                <button className="add-btn" onClick={() => dispatch(toggleIsAddFormVisible())}>
                    +
                </button>
            </th>
        </tr>
    );
};

export default Component;
