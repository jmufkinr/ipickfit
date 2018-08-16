export function onChange(e, refs) {
  e.target.classList.add("active");
  const name = e.target.name;
  const target = e.target;
  const value = target.type === "checkbox" ? target.checked : target.value;

  this.setState(prevState => {
    const formData = { ...prevState.formData, [name]: value };
    return { formData: formData };
  });

  return showInputError.call(this, name, refs);
}


export function showInputError(refName, refs) {
  // ref are like $('#some-id') -- GETS ELEMENT
  let ref = refs || this.refs
  const elemThatIsCurrentlyBeingChanged = ref[refName]
  const validity = elemThatIsCurrentlyBeingChanged.validity;
  const label = document.getElementById(`${refName}Label`).firstChild.textContent;
  const isPassword = refName.indexOf("password") !== -1;
  const isPasswordConfirm = refName === "passwordConfirm";

  if (isPasswordConfirm) {
    if (ref.password.value !== ref.passwordConfirm.value) {
      ref.passwordConfirm.setCustomValidity("Passwords do not match");
    } else {
      ref.passwordConfirm.setCustomValidity("");
    }
  }

  if (!validity.valid) {
    let inputErrors = "";
    if (validity.valueMissing) {
      inputErrors = `${label} is a required field`;
      // error.textContent =
    } else if (validity.typeMismatch) {
      inputErrors = `${label} should be a valid email address`;
    } else if (isPassword && validity.patternMismatch) {
      inputErrors = `${label} should be longer than 6 characters`;
    } else if (isPasswordConfirm && validity.customError) {
      inputErrors = "Passwords do not match";
    } else if (validity.patternMismatch) {
      inputErrors = "Please enter digit only";
    } else if (validity.badInput) {
      inputErrors = `please enter a valid ${label} date!`;
    }
    else {
      inputErrors = "other errors"
    }
    this.setState(prevState => {
      return { errors: { ...prevState.errors, [refName]: inputErrors } };
    });

    return false;
  }

  this.setState(prevState => {
    return { errors: { ...prevState.errors, [refName]: "" } };
  });

  return true;
}


export function showFormErrors(refs, formRefs) {
  //selecting *all child elements of the form tag with 'name' attribute
  //if too general, specify element tags `document.querySelectorAll("form input[name], form textarea[name], select[name]")`
  let inputs = []
  let ref = formRefs || refs
  let isFormValid = true;
  if(formRefs){
    inputs.push(formRefs)
    inputs.forEach(input => {
      const isInputValid = showInputError.call(this, input[0].name, ref);
  
      if (!isInputValid) {
        isFormValid = false;
      }
    });
  }else{
    inputs = document.querySelectorAll("form *[name]");
    inputs.forEach(input => {
      input.classList.add("active");
  
      const isInputValid = showInputError.call(this, input.name, ref);
  
      if (!isInputValid) {
        isFormValid = false;
      }
    });
  }
  return isFormValid;
}
