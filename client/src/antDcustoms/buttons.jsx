import { Button } from 'antd';
import React from 'react';
import styles from './buttons.css';

function CustomButton(props) {
    return (
        <Button type="primary" {...props} />
    );
}



export default CustomButton;