export type Package = {
    id: number;
    client: string;
    pickupAddress: string;
    dropoffAddress: string;
    courier: string;
    status: 'online' | 'offline';
};
