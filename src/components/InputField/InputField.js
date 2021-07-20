import React from 'react';
import styles from './InputField.module.css'

function InputField({name, type, placeholder, fieldRef, errors}) {
    return(
      <>
          <label htmlFor={name}>
              <input
                  className={styles.inputField}
                  type={type}
                  name={name}
                  id={name}
                  placeholder={placeholder}
                  {...fieldRef}
              />
          </label>
          {errors[name] && <p>{errors[name].message}</p>}
      </>
    );
}

export default InputField;