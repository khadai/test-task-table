import React from 'react';
import { AddForm, SearchField, TableHeader, TableRow } from '../components';
import '../styles/Table.scss';
import { useSelector } from 'react-redux';
import { Package } from '../types/Package';

const Component = () => {
    const list: Package[] = useSelector((state: any) => state.package.packageList);
    const searchValue = useSelector((state: any) => state.package.searchValue);
    const isAddFormVisible = useSelector((state: any) => state.package.isAddFormVisible);

    const filterList = () => {
        if (searchValue !== '') {
            return list.filter(
                (item: Package) => item.client.includes(searchValue) || item.pickupAddress.includes(searchValue),
            );
        } else {
            return list;
        }
    };

    return (
        <div>
            <SearchField />
            <div className="table-title">
                <h2>Packages</h2>
                <p className="text-entries">{filterList().length} entries</p>
            </div>
            <div className="scroll-container">
                <table className="table">
                    <thead>
                        <TableHeader />
                    </thead>
                    <tbody>
                        {filterList().map((item) => (
                            <TableRow key={item.id} {...item} />
                        ))}
                    </tbody>
                </table>
            </div>
            {isAddFormVisible && <AddForm />}
        </div>
    );
};

export default Component;
