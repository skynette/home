const AmenitiesCheckboxGroup = ({ amenities, onChange }) => {
    return (
        <div className='gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {amenities.map((amenity) => (
                <div key={amenity}>
                    <label htmlFor={amenity} className='flex items-center my-2'>
                        <input
                            id={amenity}
                            name={amenity}
                            type='checkbox'
                            className='accent-cred-500 appearance-none h-4 w-4 cursor-pointer border border-body-400 rounded-md checkbox'
                            onChange={(e) => onChange(amenity, e.target.checked)}
                        />
                        <svg
                            className='absolute h-4 w-4 opacity-0 check-1'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                        >
                            <path
                                fillRule='evenodd'
                                d='M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z'
                                clipRule='evenodd'
                            />
                        </svg>
                        <span className='text-body-800 font-thin ml-2'>{amenity}</span>
                    </label>
                </div>
            ))}
        </div>
    );
};

export default AmenitiesCheckboxGroup;
