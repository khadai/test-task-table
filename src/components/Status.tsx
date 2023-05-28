import React, { FC } from 'react';
import '../styles/Status.scss';

interface Props {
    status: 'online' | 'offline';
}

const Component: FC<Props> = ({ status }) => {
    return (
        <div className={`${status === 'online' ? 'status-online' : 'status-offline'}`}>
            <div className="status-dot" />
            {status === 'online' ? 'online' : 'offline'}
        </div>
    );
};

export default Component;
