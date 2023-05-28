import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Package } from '../types/Package';

interface State {
    packageList: Package[];
    searchValue: string;
    isAddFormVisible: boolean;
}

const initialState: State = {
    packageList: [
        {
            id: 0,
            client: 'Sam Smith',
            pickupAddress: '3085 Frami Meadows',
            dropoffAddress: '644 Buster Ford',
            courier: 'Andre Armstrong',
            status: 'offline' as const,
        },
        {
            id: 1,
            client: 'Emma Johnson',
            pickupAddress: '123 Maple Street, Cityville',
            dropoffAddress: '456 Oak Avenue, Townsville',
            courier: 'Liam Miller',
            status: 'online' as const,
        },
    ],
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
        toggleActiveStatus: (state, action: PayloadAction<{ id: number }>) => {
            const item = state.packageList.find(({ id }) => id === action.payload.id);
            const index = state.packageList.indexOf(item as Package);
            return {
                ...state,
                packageList: [
                    ...state.packageList.slice(0, index),
                    { ...(item as Package), status: item!.status === 'offline' ? 'online' : 'offline' },
                    ...state.packageList.slice(index + 1),
                ],
            };
        },
    },
});

export const { addPackageItem, removePackageItem, setSearchValue, toggleIsAddFormVisible, toggleActiveStatus } =
    packageSlice.actions;

export default packageSlice.reducer;
