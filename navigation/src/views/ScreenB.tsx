import React from 'react';
import CentralText from '../components/CentralText';

interface ScreenAProps {

}

const ScreenA: React.FC<ScreenAProps> = () => {
    return (
        <CentralText backgroundColor="#3b82c4">Screen B</CentralText>
    );
};

export default ScreenA;
