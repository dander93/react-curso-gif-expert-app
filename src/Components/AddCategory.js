import React,{useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length > 1){
            setCategory(categories => [inputValue, ...categories]);
            setInputValue('');
        }
    };

    const handleFocus = () => {
        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder='Ingrese un valor'
                value={inputValue}
                onChange={handleInputChange}
                onFocus={handleFocus}
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
};
