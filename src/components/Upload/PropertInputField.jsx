const PropertyInputField = ({ label, id, name, type }) => {
    return (
        <div className='w-full'>
            <label className='block text-body-800 my-2' htmlFor={id}>
                {label}
            </label>
            <input
                className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400'
                id={id}
                name={name}
                type={type}
            />
        </div>
    );
};

export default PropertyInputField;
