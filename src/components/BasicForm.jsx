import useInput from '../hooks/useInput';

const BasicForm = (props) => {
    const {
        value: firstNameValue,
        isValid: firstNameIsValid,
        hasError: firstNameHasError,
        valueChangeHandler: firstNameChangedHandler,
        inputBlurHandler: firstNameBlurHandler,
        reset: resetFirstName,
    } = useInput((value) => value.trim() !== '');

    const {
        value: lastNameValue,
        isValid: lastNameIsValid,
        hasError: lastNameHasError,
        valueChangeHandler: lastNameChangedHandler,
        inputBlurHandler: lastNameBlurHandler,
        reset: resetLastName,
    } = useInput((value) => value.trim() !== '');

    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
    } = useInput((value) => value.includes('@'));

    let formIsValid = false;

    if (firstNameIsValid && lastNameIsValid && emailIsValid) {
        formIsValid = true;
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (!formIsValid) {
            return;
        }

        console.log(firstNameValue, lastNameValue, emailValue);

        resetFirstName();
        resetLastName();
        resetEmail();
    };

    const firstNameInputClasses = firstNameHasError
        ? 'form-control invalid'
        : 'form-control';

    const lastNameInputClasses = lastNameHasError
        ? 'form-control invalid'
        : 'form-control';

    const emailInputClasses = emailHasError
        ? 'form-control invalid'
        : 'form-control';

    return (
        <form onSubmit={submitHandler}>
            <div className='control-group'>
                <div className={firstNameInputClasses}>
                    <label htmlFor='firstName'>First Name</label>
                    <input
                        onChange={firstNameChangedHandler}
                        onBlur={firstNameBlurHandler}
                        value={firstNameValue}
                        type='text'
                        id='firstName'
                    />
                    {firstNameHasError && (
                        <p className='error-text'>
                            First Name must not be empty
                        </p>
                    )}
                </div>
                <div className={lastNameInputClasses}>
                    <label htmlFor='lastName'>Last Name</label>
                    <input
                        onChange={lastNameChangedHandler}
                        onBlur={lastNameBlurHandler}
                        value={lastNameValue}
                        type='text'
                        id='lastName'
                    />
                    {lastNameHasError && (
                        <p className='error-text'>
                            Last Name must not be empty
                        </p>
                    )}
                </div>
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='email'>E-Mail Address</label>
                <input
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    value={emailValue}
                    type='email'
                    id='email'
                />
                {emailHasError && (
                    <p className='error-text'>Please enter a valid mail</p>
                )}
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
