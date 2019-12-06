import React, { useState } from 'react';

function UserForm(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [errorState, setErrorState] = useState(false);

    const handleFirstName = (e) => {
        if (e.target.value === 'test') {
            setErrorState(true)
            setFirstName('')
        } else {
            setFirstName(e.target.value);
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
    }

    const handleSubmit = (e) => {
        props.onSubmitForm({firstName, lastName});
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>
                    First name:
                    <input name="firstName" type="text" onChange={(e) => handleFirstName(e)} value={firstName} />
                </label>
                <label>
                    Last name:
                    <input name="lastName" type="text"  onChange={(e) => handleLastName(e)} value={lastName} />
                </label>
                <input type="submit" value="add your name" />
            </form>
            {errorState && <h1>You cannot have test as name</h1>}
        </div>
    )
}


export default UserForm;