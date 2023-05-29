import React, { useState } from 'react';
import '../styles/AddForm.scss';
import { Package } from '../types/Package';
import { useDispatch, useSelector } from 'react-redux';
import { addPackageItem } from '../redux/slice';

const Component = () => {
    const dispatch = useDispatch();

    const list: Package[] = useSelector((state: any) => state.package.packageList);
    const emptyInput = {
        id: 0,
        client: '',
        pickupAddress: '',
        dropoffAddress: '',
        courier: '',
        status: 'online' as const,
    };

    const [formInputData, setFormInputData] = useState<Package>(emptyInput);
    const [errors, setErrors] = useState<{
        id: boolean;
        client: boolean;
        pickupAddress: boolean;
        dropoffAddress: boolean;
        courier: boolean;
    }>();

    const validate = ({ id, client, pickupAddress, dropoffAddress, courier }: Package) => {
        return {
            id: list.some((e) => e.id.toString() === id.toString()) || id < 0,
            client: client.length === 0,
            pickupAddress: pickupAddress.length === 0,
            dropoffAddress: dropoffAddress.length === 0,
            courier: courier.length === 0,
        };
    };

    const handleChange = (event: { target: { name: any; value: any } }) => {
        const newInput = (data: any) => ({ ...data, [event.target.name]: event.target.value });
        setFormInputData(newInput);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLInputElement>) => {
        event.preventDefault();
        let formErrors = validate(formInputData);
        setErrors(formErrors);

        if (!Object.values(formErrors).some((x) => x)) {
            dispatch(addPackageItem(formInputData));
            setFormInputData(emptyInput);
        }
    };
    return (
        <form className="form-row" onSubmit={handleSubmit}>
            <input
                type="number"
                required
                onChange={handleChange}
                value={formInputData.id}
                name="id"
                min={0}
                className={`form-control ${errors?.id ? 'error' : ''}`}
                placeholder="ID"
            />
            <input
                type="text"
                required
                onChange={handleChange}
                value={formInputData.client}
                name="client"
                className={`form-control ${errors?.client ? 'error' : ''}`}
                placeholder="Client"
            />
            <input
                type="text"
                required
                onChange={handleChange}
                value={formInputData.pickupAddress}
                name="pickupAddress"
                className={`form-control ${errors?.pickupAddress ? 'error' : ''}`}
                placeholder="Pickup Address"
            />
            <input
                type="text"
                required
                onChange={handleChange}
                value={formInputData.dropoffAddress}
                name="dropoffAddress"
                className={`form-control ${errors?.dropoffAddress ? 'error' : ''}`}
                placeholder="Dropoff Address"
            />
            <input
                type="text"
                required
                onChange={handleChange}
                value={formInputData.courier}
                name="courier"
                className={`form-control ${errors?.courier ? 'error' : ''}`}
                placeholder="Courier"
            />
            <input type="submit" onClick={handleSubmit} className="submit-btn" />
        </form>
    );
};

export default Component;
