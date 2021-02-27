import React from 'react';
import { PropTypes } from 'prop-types';

const selector = (props) =>  {
    return (
        <div>
            <label htmlFor="select-list">{props.label}</label>
            <div>
                <select id="select-list" onChange={props.onSelectionChanged}>
                    <option value="">--</option>
                    {
                        props.options.map(option => (
                        <option key={option.label} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
          </div>
        </div>
    );
};

selector.propTypes = {
    label: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string
    }).isRequired),
    onSelectionChanged: PropTypes.func
};

export default selector;

