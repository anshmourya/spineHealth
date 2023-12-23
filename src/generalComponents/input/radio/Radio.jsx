// import { Controller } from "react-hook-form";

import './Radio.css'

const Radio = ({ register, patientProfileData, errors, validateFunc }) => {
  // Define a default validation function
  const defaultValidateFunc = (value) =>
    value === '' ? 'field cannot be empty' : true

  // Use the provided validateFunc or the default one
  const validationFunction = validateFunc || defaultValidateFunc
  const radioOptions = ['male', 'female']
  return (
    <>
      <div className="m-auto my-3 text-gray-500 radio-input">
        {radioOptions.map((option, index) => (
          <label key={index}>
            <input
              id="value-1"
              {...register('gender', {
                required: { value: true, message: 'field cannot be empty' },
                validate: (value) => validationFunction(value),
              })}
              type="radio"
              value={option}
              defaultChecked={patientProfileData.gender === option}
            />
            <span>{option}</span>
          </label>
        ))}
        <span className="selection"></span>
      </div>
      <p
        className={`mx-3 my-2 text-sm font-semibold text-red-500 capitalize text-center ${
          errors.gender ? 'visible' : 'invisible'
        }`}
      >
        {errors.gender?.message || 'this field is required'}
      </p>
    </>
  )
}

export default Radio
