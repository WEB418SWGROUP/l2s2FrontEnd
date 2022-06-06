
const Input = (props) => {

    const {id,value,handleInputChange,placeholder,errors}=props
    return (
        <div class="form-group" style={{ margin: '30px' }}>
            <label for={id}>{placeholder}</label>
            <textarea name={id}
                id={id}
                value={value}
                onChange={handleInputChange}
                placeholder={placeholder}
                rows="3"
                
                class="form-control"
            />

            {errors && <div class="alert alert-danger">{errors}</div>}
        </div>
    )
}
export default Input;