import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Package } from '../types/Package';

interface State {
    packageList: Package[];
    listLength: number;
    searchValue: string;
    isAddFormVisible: boolean;
}

const initialState: State = {
    packageList: [
        {
            id: 0,
            client: '111',
            pickupAddress: '222',
            dropoffAddress: 'eeoeeoeo',
            courier: 'eeoeooeoe',
            status: 'offline' as const,
        },
        {
            id: 1,
            client: '333',
            pickupAddress: '444',
            dropoffAddress: 'eeoeeoeo',
            courier: 'eeoeooeoe',
            status: 'online' as const,
        },
        {
            id: 2,
            client: '333',
            pickupAddress: '222',
            dropoffAddress: 'eeoeeoeo',
            courier: 'eeoeooeoe',
            status: 'offline' as const,
        },
        {
            id: 3,
            client: '444',
            pickupAddress: '111',
            dropoffAddress: 'eeoeeoeo',
            courier: 'eeoeooeoe',
            status: 'online' as const,
        },
    ],
    listLength: 0,
    searchValue: '',
    isAddFormVisible: false,
};

const packageSlice = createSlice({
    name: 'package',
    initialState,
    reducers: {
        addPackageItem: (state, action: PayloadAction<Package>) => {
            return {
                ...state,
                packageList: [action.payload, ...state.packageList],
            };
        },
        removePackageItem: (state, action: PayloadAction<{ id: number }>) => {
            return {
                ...state,
                packageList: state.packageList.filter(({ id }) => id !== action.payload.id),
            };
        },
        resetList: (state) => {
            return {
                ...state,
                packageList: initialState.packageList,
            };
        },
        resetState: () => {
            return {
                ...initialState,
            };
        },
        setSearchValue: (state, action: PayloadAction<{ searchValue: string }>) => {
            return {
                ...state,
                searchValue: action.payload.searchValue,
            };
        },
        toggleIsAddFormVisible: (state) => {
            return {
                ...state,
                isAddFormVisible: !state.isAddFormVisible,
            };
        },
    },
});

export const { addPackageItem, removePackageItem, setSearchValue, toggleIsAddFormVisible } = packageSlice.actions;

export default packageSlice.reducer;
