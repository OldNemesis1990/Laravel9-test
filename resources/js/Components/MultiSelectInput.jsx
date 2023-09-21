import React, { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function MultiSelectInput(
    { className = '', isFocused = false, value = [], onChange, options = [], ...props },
    ref
) {
    const selectRef = ref || useRef();

    useEffect(() => {
        if (isFocused) {
            selectRef.current.focus();
        }
    }, [isFocused]);

    const handleChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
        onChange(selectedOptions);
    };

    return (
        <div className="flex flex-col items-start">
            <select
                {...props}
                ref={selectRef}
                className={
                    'border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm ' +
                    className
                }
                multiple={true}
                value={value}
                onChange={handleChange}
            >
                {props.children}
            </select>
        </div>
    );
});