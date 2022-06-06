import React from "react";
import {Form} from 'react-bootstrap'

const Input = (props) => {

    const {id,value,handleInputChange,placeholder,errors}=props
    return (
             <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label for={id} >{placeholder}</Form.Label>
            <Form.Control name={id} as="textarea" rows={3}  id={id} value={value} onChange={handleInputChange} 
            placeholder={placeholder} />
            {errors && <div class="alert alert-danger">{errors}</div>}
            </Form.Group>
    )
}
export default Input;