import React, { FC, useEffect } from 'react';
import '../styles/Table.scss';
import { Status } from './index';
import { Package } from '../types/Package';
import { useDispatch } from 'react-redux';
import { toggleActiveStatus } from '../redux/slice';

interface Props extends Package {}

const Component: FC<Props> = ({ id, courier, client, pickupAddress, dropoffAddress, status }) => {
    const dispatch = useDispatch();

    //Changes courier status every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(toggleActiveStatus({ id }));
        }, 5000);
        return () => {
            clearInterval(interval);
        };
    }, []);

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
