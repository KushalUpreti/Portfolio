import React, { useReducer, useEffect } from 'react';

import { validate } from '../../utils/validators';

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            };
        case 'TOUCH': {
            return {
                ...state,
                isTouched: true
            };
        }
        default:
            return state;
    }
};

const Input = props => {
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.initialValue || '',
        isTouched: false,
        isValid: props.initialValid || false
    });

    const { id, onInput } = props;
    const { value, isValid } = inputState;

    useEffect(() => {
        onInput(id, value, isValid);
    }, [id, value, isValid, onInput]);

    const changeHandler = event => {
        dispatch({
            type: 'CHANGE',
            val: event.target.value,
            validators: props.validators
        });
    };

    const touchHandler = () => {
        dispatch({
            type: 'TOUCH'
        });
    };

    const element =
        props.element === 'input' ? (
            <>
                <input
                    id={props.id}
                    type={props.type}
                    placeholder={props.placeholder}
                    onChange={changeHandler}
                    onBlur={touchHandler}
                    value={inputState.value}
                />
                <label className={!inputState.isValid ? props.classes.special : ""} />
            </>
        ) : (
            <>
                <textarea
                    id={props.id}
                    cols="30"
                    rows="10"
                    onChange={changeHandler}
                    onBlur={touchHandler}
                    placeholder={props.placeholder}
                    value={inputState.value}
                />
                <label />
            </>
        );

    return (
        <>
            {element}
        </>
    );
};

export default Input;
