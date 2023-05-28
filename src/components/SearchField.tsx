import React, { useEffect, useState } from 'react';
import '../styles/SearchFIeld.scss';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../redux/slice';
import searchIcon from '../assets/search-icon.svg';

const Component = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState<string>('');

    useEffect(() => {
        dispatch(setSearchValue({ searchValue: search }));
    }, [search]);

    return (
        <div className="search">
            <img src={searchIcon} alt="" className="search-icon" />
            <input
                className="search-input"
                id="search"
                type="text"
                placeholder="Search package, client or courier"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
            />
        </div>
    );
};

export default Component;
