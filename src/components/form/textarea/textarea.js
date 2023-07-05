import "./textarea.scss"
const Textarea = (props) => {
    const {
        value: {value, key},
        onChange,
        disabled,
        error,
        errorMsg,
        label
    } = props;

    return(
        <div className='ra-textarea__container'>
            <label className="ra-textarea__label">
                <span>{label}</span>
                <textarea
                    className={`ra-textarea ${error ? 'ra-textarea--error' : ''}`}
                    value={value}
                    disabled={disabled}
                    onChange={({target: {value}}) => onChange(key, value)}
                />
            </label>
            <p className="ra-textarea__error-list">
                { errorMsg }
            </p>
        </div>
    )
}

export default Textarea;