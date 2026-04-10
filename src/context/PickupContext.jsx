import { createContext, useContext, useState } from 'react';

const PickupContext = createContext();

export const PickupProvider = ({ children }) => {
    const [batch, setBatch] = useState([]);
    return (
        <PickupContext.Provider value={{ batch, setBatch }}>
            {children}
        </PickupContext.Provider>
    );
};

export const usePickup = () => useContext(PickupContext);