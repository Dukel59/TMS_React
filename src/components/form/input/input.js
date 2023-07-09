import "./input.scss"
const Input = ({
       value: inputValue,
       onChange = () => {},
       disabled,
       error,
       errorMsg,
       label,
       placeholder,
       name,
       type = 'text'
    }) => {

    return(
        <div className='ra-input__container'>
            <label className="ra-input__label">
                <span>{label}</span>
                <input
                    className={`ra-input ${error ? 'ra-input--error' : ''}`}
                    value={inputValue}
                    placeholder={placeholder}
                    disabled={disabled}
                    onChange={({target: {value}}) => onChange(value)}
                    type={type}
                    name={name}
                />
            </label>
            <p className="ra-input__error-list">
                { errorMsg }
            </p>
        </div>
    )
}

export default Input;