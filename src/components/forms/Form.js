import React from 'react';
import {useState} from 'react';
import './Form.css';

const Form = props => {
    const {formSubmit} = props
    const [values, setValues] = useState({
        title: '',
        description: '',
    })

    const handleChange = e => {
        const fieldName = e.target.name 
        setValues({...values, [fieldName]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (values.title) {
            formSubmit(values.title, values.description)
        }
    }

    return (
        <form onSubmit={handleSubmit} className='form'>
            <input className='input' id='taskTitle' name='title' type='text' placeholder='Enter task title' onChange={handleChange} value={values.title} />
            <textarea className='textArea' id='taskDescription' name='description' placeholder='Enter task description' onChange={handleChange} value={values.description} />
            <button className='submitBtn' type='submit'>Submit</button>
        </form>
    )
}

export default Form;