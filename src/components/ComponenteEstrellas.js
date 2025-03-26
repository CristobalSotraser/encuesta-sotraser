import React from 'react';
import Rating from '@mui/material/Rating';

function ComponenteEstrellas({ field, form }) {
    const { name, value, onChange, onBlur } = field;

    return (
        <Rating
            name={name}
            value={value}
            onChange={(event, newValue) => {
                onChange(newValue);
            }}
            onBlur={onBlur}
        />
    );
}

export default ComponenteEstrellas;