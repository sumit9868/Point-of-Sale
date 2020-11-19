import React, { forwardRef, useImperativeHandle } from "react";

const InputField = forwardRef((props, ref) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value)
    setError("");
    props.onChange(event.target.name, event.target.value)
  }

  const validate = () => {
    //return true if is valid 
    //else return false

    if (props.validation) {
      const rules = props.validation.split("|");

      for (let i = 0; i < rules.length; i++) {
        const current = rules[i];

        if (current === "required") {
          // In General Validation 
          // if (!value) {
          //   setError("This field is required");
          //   return false
          // }
          if (props.name === "shopName") {
            if (!value) {
              setError("Name is required");
              return false
            }
          }
          if (props.name === "ShopCity") {
            if (!value) {
              setError("Shop City is required");
              return false
            }
          }
          if (props.name === "yourName") {
            if (!value) {
              setError("Your Name is required");
              return false                                  
            }
          }

          if (props.name === "contact") {
            if (!value) {
              setError("Contact is required");
              return false                                  
            }
          }
        }

        const pair = current.split(":")
        switch (pair[0]) {
          case "min":
            if (value.length < pair[1]) {
              setError(`Contact should be of  ${pair[1]} digits`);
              return false
            }
            break;
          case "max":
            if (value.length > pair[1]) {
              setError(`Contact should be of  ${pair[1]} digits`);
              return false;
            }
            break;
          default:
            break;
        }
      }
    }

    return true;
  }

  useImperativeHandle(ref, () => {
    return {
      validate: () => validate()
    }
  })

  return (
    <div className="input-wrapper">
      {props.label && (
        <label>{props.label}</label>
      )}
      <input
        placeholder={props.placeholder}
        name={props.name}
        onChange={(event) => handleChange(event)}
        type={props.type}
        value={props.value ? props.value : value}
        autoComplete={props.autoComplete}
      />
      {error && (
        <p className="error">{error}</p>
      )}
    </div>
  )
})

InputField.defaultProps = {
  placeholder: "",
  name: "",
  type: "",
  value: "",
  autoComplete: "off",
  validation: ""
}


export default InputField;