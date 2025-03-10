import React from 'react';
import './InputField.css'
// import asterics from '../../assets/asterisk.svg'

const InputField = ({ name, type, label, value, onChange, placeholder,
    description, required = false, disabled, radius, asterisk, error, size = 'md' }) => {

    return (
        <div className={`input-field input-field-${size}`}>
            <label>{label}</label>
            {label && asterisk && <span></span>}
            <article>{description}</article>
            <div className={name === 'username' ? 'el-before' : ''}>
                <input className={`${error ? 'error' : ''}`}
                    style={{ "borderRadius": `${radius}` }}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    disabled={disabled}
                    required={required}
                    name={name}
                />
            </div>
        </div>
    )
}

export default InputField