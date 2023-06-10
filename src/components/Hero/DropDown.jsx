import Select from 'react-select';
import { HiSearch } from 'react-icons/hi';

const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    // Add more options as needed
];

const DropdownSearch = () => {
    const customStyles = {
        control: (provided) => ({
            ...provided,
            borderRadius: '0.25rem',
            borderColor: '#e2e8f0',
        }),
        input: (provided) => ({
            ...provided,
            paddingLeft: '2rem',
        }),
        // Add more custom styles as needed
    };

    const DropdownIndicator = () => (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <HiSearch className="text-gray-500" />
        </div>
    );

    return (
        <div className="w-64">
            <Select
                options={options}
                isSearchable
                styles={customStyles}
                components={{ DropdownIndicator }}
            />
        </div>
    );
};

export default DropdownSearch;
