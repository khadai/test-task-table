import React, { FC } from 'react';
import '../styles/Table.scss';
import { Status } from './index';
import { Package } from '../types/Package';

interface Props extends Package {}

const Component: FC<Props> = ({ id, courier, client, pickupAddress, dropoffAddress, status }) => {
    return (
        <tr className="table-row">
            <td className="row-id">#{id}</td>
            <td>{client}</td>
            <td>{pickupAddress}</td>
            <td>{dropoffAddress}</td>
            <td>{courier}</td>
            <td>
                <Status status={status} />
            </td>
        </tr>
    );
};

export default Component;
