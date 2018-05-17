import React from 'react'
import { Field, reduxForm } from 'redux-form'

let InputForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field autoComplete='off' name="input" component="input" type="text" />
      </div>
      <button type="submit">Add todo</button>
    </form>
  )
}

InputForm = reduxForm({
  form: 'input'
})(InputForm)

export default InputForm