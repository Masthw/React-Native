import React from 'react';
import CentralText from '../components/CentralText';

interface ScreenAProps {

}

const ScreenA: React.FC<ScreenAProps> = () => {
    return (
        <CentralText backgroundColor="#e53935">Screen A</CentralText>
    );
};

export default ScreenA;
