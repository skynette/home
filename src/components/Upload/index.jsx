import { useState, useRef } from 'react'
import Map from '../Map'
import Copyright from '../Copyright'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BsFillTrashFill, BsUpload } from 'react-icons/bs'
import AmenitiesCheckboxGroup from './AmenitiesCheckboxGroup'
import PropertyInputField from './PropertInputField'
const Upload = () => {

    const addressRef = useRef(null);
    const countyRef = useRef(null);
    const cityRef = useRef(null);
    const neighbourhoodRef = useRef(null);
    const zipRef = useRef(null);
    const countryRef = useRef(null);
    const lat = useRef(null);
    const lon = useRef(null);
    const fileInputRef = useRef(null);
    const floorplanRef = useRef(null);


    const [longs, setLongs] = useState(0);
    const [lats, setLats] = useState(0);
    const [label, setLabel] = useState('');
    const [droppedImages, setDroppedImages] = useState([]);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [selectedAmenities, setSelectedAmenities] = useState([]);

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
            fetch(url).then(res => res.json()).then(data => {
                console.log(data.address);
                const { city, country, house_number, neighbourhood, postcode, road, state, suburb } = data.address;
                addressRef.current.value = house_number + " " + road + " " + suburb;
                setLabel(addressRef.current.value);
                countyRef.current.value = state;
                cityRef.current.value = city;
                neighbourhoodRef.current.value = neighbourhood;
                zipRef.current.value = postcode;
                countryRef.current.value = country;
                lat.current.value = latitude;
                lon.current.value = longitude;
                setLats(latitude);
                setLongs(longitude);
            }).catch(() => {
                console.log("Error fetching data from API");
            })
        })

    }
    const amenitiesList = [
        'Air Conditioning',
        'Lawn',
        'Swimming Pool',
        'Barbeque',
        'Microwave',
        'TV Cable',
        'Dryer',
        'Outdoor Shower',
        'Washer',
        'Gym',
        'Refrigerator',
        'WiFi',
        'Laundry',
        'Sauna',
        'Window Coverings',
    ];

    const handleAmenityChange = (amenity, isChecked) => {
        if (isChecked) {
            setSelectedAmenities((prevSelectedAmenities) => [...prevSelectedAmenities, amenity]);
        } else {
            setSelectedAmenities((prevSelectedAmenities) =>
                prevSelectedAmenities.filter((selected) => selected !== amenity)
            );
        }
    };


    const handleDrop = (e) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files);
        const readerPromises = files.map((file) => {
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result);
                reader.readAsDataURL(file);
            });
        });

        Promise.all(readerPromises).then((results) => {
            setDroppedImages([...droppedImages, ...results]);
        });
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDivClick = () => {
        fileInputRef.current.click();
    };

    const handleFileInputChange = (e) => {
        const files = Array.from(e.target.files);
        const readerPromises = files.map((file) => {
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result);
                reader.readAsDataURL(file);
            });
        });

        Promise.all(readerPromises).then((results) => {
            setDroppedImages([...droppedImages, ...results]);
        });
    };

    const handleRemoveImage = (index) => {
        const updatedImages = [...droppedImages];
        updatedImages.splice(index, 1);
        setDroppedImages(updatedImages);
    };
    const handleFileUpload = (event) => {
        const files = Array.from(event.target.files);
        const updatedFiles = files.map((file) => ({
            name: file.name,
            fileObject: file,
        }));
        setUploadedFiles((prevUploadedFiles) => [
            ...prevUploadedFiles,
            ...updatedFiles,
        ]);
    };

    const handleDeleteFile = (fileName) => {
        setUploadedFiles((prevUploadedFiles) =>
            prevUploadedFiles.filter((file) => file.name !== fileName)
        );
    };

    return (
        <>
            <div className='p-4 md:p-20 md:pt-10 md:pr-4 font-main'>
                <form>
                    <div className='mb-6'>
                        <h3 className='text-3xl font-semibold text-body-800 md:mt-10'>Add New Property</h3>
                        <p className='text-sm font-thin text-body-800'>We are glad to see you again!</p>
                    </div>
                    <div className='bg-body-300 p-6 pb-14 rounded-md'>
                        <h3 className='text-2xl font-semibold text-body-800 my-6'>Create Listing</h3>
                        <label className='block text-body-800 my-2' htmlFor='title'>Property Title</label>
                        <input className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400' id='title' name='title' type='text' />
                        <label className='block text-body-800 my-2 mt-6' htmlFor='description'>Description</label>
                        <textarea id='description' name='description' className='w-full h-40 rounded-md outline-none px-4 pt-4 border border-body-400' />
                        <div className='lg:flex lg:gap-6'>
                            <div className='mt-6 w-full'>
                                <label className='block text-body-800 my-2' htmlFor='type'>Type</label>
                                <div className='relative'>
                                    <select id='type' name='type' className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400'>
                                        <option value="Type1">Type1</option>
                                        <option value="Type2">Type2</option>
                                        <option value="Type3">Type3</option>
                                        <option value="Type4">Type4</option>
                                        <option value="Type5">Type5</option>
                                    </select>
                                    <AiOutlineCaretDown className='absolute right-4 top-[40%] text-body-600' />
                                </div>
                            </div>
                            <div className='mt-6 w-full'>
                                <label className='block text-body-800 my-2' htmlFor='forsale-rent'>For sale / For rent</label>
                                <div className='relative'>
                                    <select id='forsale-rent' name='forsale-buy' className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400'>
                                        <option value="Rent">Rent</option>
                                        <option value="Sale">Sale</option>
                                    </select>
                                    <AiOutlineCaretDown className='absolute right-4 top-[40%] text-body-600' />
                                </div>
                            </div>
                            <div className='mt-6 w-full'>
                                <label className='block text-body-800 my-2' htmlFor='status'>Status</label>
                                <div className='relative'>
                                    <select id='status' name='status' className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400'>
                                        <option value="Status1">Status1</option>
                                        <option value="Status2">Status2</option>
                                        <option value="Status3">Status3</option>
                                        <option value="Status4">Status4</option>
                                        <option value="Status5">Status5</option>
                                    </select>
                                    <AiOutlineCaretDown className='absolute right-4 top-[40%] text-body-600' />
                                </div>
                            </div>
                        </div>
                        <div className='lg:flex lg:gap-4'>
                            <div className='mt-6 w-full'>
                                <label className='block text-body-800 my-2' htmlFor='price'>Price</label>
                                <input id='price' name='price' type='text' className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400' />
                            </div>
                            <div className='mt-6 w-full'>
                                <label className='block text-body-800 my-2' htmlFor='area'>Area</label>
                                <input id='area' name='area' type='text' className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400' />
                            </div>
                            <div className='mt-6 w-full'>
                                <label className='block text-body-800 my-2' htmlFor='rooms'>Rooms</label>
                                <input id='rooms' name='rooms' type='number' className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400' />
                            </div>
                        </div>
                    </div>
                    <div className='bg-body-300 p-6 pb-14 mt-8 rounded-md'>
                        <div className='flex gap-6 my-6 items-center justify-between md:justify-start'>
                            <h3 className='text-2xl font-semibold text-body-800' >Location</h3>
                            <div onClick={getLocation} className='flex items-center rounded-md overflow-hidden cursor-pointer hover:opacity-75'>
                                <div className='bg-cred-600 p-4 text-body-300 font-bold'><HiOutlineLocationMarker /></div>
                                <div className={`text-center p-3 bg-cred-500 text-body-300 font-bold`}>Get location</div>
                            </div>
                        </div>
                        <label className='block text-body-800 my-2' htmlFor='address'>Address</label>
                        <input ref={addressRef} className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400' id='address' name='address' type='text' />
                        <div className='lg:flex lg:gap-6'>
                            <div className='mt-6 w-full'>
                                <label className='block text-body-800 my-2' htmlFor='county'>County / State</label>
                                <input ref={countyRef} className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400' id='county' name='county' type='text' />
                            </div>
                            <div className='mt-6 w-full'>
                                <label className='block text-body-800 my-2' htmlFor='city'>City</label>
                                <input ref={cityRef} className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400' id='city' name='city' type='text' />
                            </div>
                        </div>
                        <div className='lg:flex lg:gap-6'>
                            <div className='mt-6 w-full'>
                                <label className='block text-body-800 my-2' htmlFor='latitude'>Latitude <span className="text-sm">(optional)</span></label>
                                <input ref={lat} className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400' id='latitude' name='latitude' type='text' />
                            </div>
                            <div className='mt-6 w-full'>
                                <label className='block text-body-800 my-2' htmlFor='longitude'>Longitude <span className="text-sm">(optional)</span></label>
                                <input ref={lon} className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400' id='longitude' name='longitude' type='text' />
                            </div>
                        </div>
                        <div className='lg:flex lg:gap-4'>
                            <div className='mt-6 w-full'>
                                <label className='block text-body-800 my-2' htmlFor='neighbourhood'>Neighbourhood</label>
                                <input ref={neighbourhoodRef} id='neighbourhood' name='neighbourhood' type='text' className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400' />
                            </div>
                            <div className='mt-6 w-full'>
                                <label className='block text-body-800 my-2' htmlFor='zip'>Zip</label>
                                <input ref={zipRef} id='zip' name='zip' type='text' className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400' />
                            </div>
                            <div className='mt-6 w-full'>
                                <label className='block text-body-800 my-2' htmlFor='country'>Country</label>
                                <input ref={countryRef} id='country' name='country' type='text' className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400' />
                            </div>
                        </div>
                        <div className='mt-10 rounded-md overflow-hidden'>
                            <Map latitude={lats} longitude={longs} info={label} />
                        </div>
                    </div>
                    <div className='bg-body-300 p-6 pb-14 mt-8 rounded-md'>
                        <h3 className='my-6 text-2xl font-semibold text-body-800' >Detailed Information</h3>
                        <>
                            <div className='lg:flex lg:gap-6'>
                                <PropertyInputField label='Land Area' id='landarea' name='landarea' type='text' />
                                <PropertyInputField label='Bedrooms' id='bedrooms' name='bedrooms' type='text' />
                                <PropertyInputField label='Bathrooms' id='bathrooms' name='bathrooms' type='text' />
                            </div>
                            <div className='lg:flex lg:gap-6'>
                                <PropertyInputField label='Garages' id='garage' name='garage' type='text' />
                                <PropertyInputField label='Garages Size' id='garagesize' name='garagesize' type='text' />
                            </div>
                            <div className='lg:flex lg:gap-6'>
                                <PropertyInputField label='Year Built' id='yearbuilt' name='yearbuilt' type='text' />
                                <PropertyInputField label='Video URL' id='videourl' name='videourl' type='text' />
                            </div>
                        </>

                        <div className=''>
                            <h3 className='my-6 mb-3 text-lg font-semibold text-body-800'>Amenities</h3>
                            <AmenitiesCheckboxGroup amenities={amenitiesList} onChange={handleAmenityChange} />
                        </div>
                    </div>
                    <div className='bg-body-300 p-6 pb-14 mt-8 rounded-md'>
                        <h3 className='my-6 text-2xl font-semibold text-body-800' >Property media</h3>
                        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                            {droppedImages.map((item, index) => (
                                <div key={index} className='relative my-6 rounded-md overflow-hidden'>
                                    <img src={item} alt={`image ${index}`} className='aspect-square w-full content-center object-cover' />
                                    <div className='absolute top-2 right-2'><BsFillTrashFill onClick={() => { handleRemoveImage(index) }} className='h-6 w-6 p-1 bg-cred-500 text-body-300 rounded-md' /></div>
                                </div>
                            )
                            )}
                        </div>
                        <div onDrop={handleDrop} onDragOver={handleDragOver} onClick={handleDivClick} className='h-[300px] w-full bg-body-400 flex flex-cols justify-center items-center rounded-md hover:cursor-pointer'>
                            <div className='flex flex-col items-center'>
                                <BsUpload className='text-cred-500 h-10 w-10 font-bold mb-4' />
                                <p className='text-xl text-body-800 font-bold'>Drag and drop images here</p>
                            </div>
                        </div>
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            onChange={handleFileInputChange}
                            multiple
                        />
                        <div className='mt-6'>
                            <h3 className='font-bold text-body-800 text-xl'>Floor plans</h3>
                            <div className='mt-6'>
                                <input className='absolute opacity-0'
                                    ref={floorplanRef}
                                    id='floorplans'
                                    type="file"
                                    name="floorplans"
                                    style={{ display: 'none' }}
                                    multiple
                                    onChange={handleFileUpload}
                                />
                                <label htmlFor='floorplans' className='p-2 border border-body-800 rounded-md text-body-800 hover:bg-body-800 hover:text-body-300 hover:cursor-pointer'>Upload Plans</label>
                            </div>
                            <div>
                                {uploadedFiles.map((file, index) => (
                                    <div key={file.name} className='flex items-center'>
                                        <p className={`${index === 0 ? 'mt-2' : 'mt-auto'} mr-2 text-body-800`}>{file.name}</p>
                                        <button
                                            className={`${index === 0 ? 'mt-2' : 'mt-auto'} text-cred-500`}
                                            onClick={() => handleDeleteFile(file.name)}
                                        >
                                            x
                                        </button>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                    <div className='mt-8'>
                        <button className='py-3 px-10 text-body-300 bg-cred-500 border border-cred-500 hover:bg-body-400 hover:text-cred-500 rounded-md' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
            <Copyright />
        </>
    )
}

export default Upload