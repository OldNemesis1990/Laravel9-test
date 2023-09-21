import { useEffect, useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Input } from 'postcss';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import InputSuccess from '@/Components/InputSuccess';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import DateInput from '@/Components/DateInput';
import SingleSelectInput from '@/Components/SingleSelectInput';
import MultiSelectInput from '@/Components/MultiSelectInput';
import { LanguageList } from '@/Data/LanguageList';
import { InterestsList } from '@/Data/InterestsList';

export default function EditUser(props) {
    console.log(props)
    const { data, setData, put, processing, errors, reset } = useForm({
        user_id: props.user.id,
        name: props?.user.name,
        surname: props?.user.surname,
        email: props?.user.email,
        mobile_number: props?.user.userinfo.mobile_number,
        sa_id: props?.user.userinfo.sa_id,
        birth_date: props?.user.userinfo.birth_date.split(' ')[0],
        language: props?.user.userinfo.language,
        interests: props?.user.user_interest,
    });


    const [rawMobileNumber, setRawMobileNumber] = useState('')

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const formatMobileNumber = (event) => {
        const inputValue = event.target.value
        setRawMobileNumber(inputValue)
        const formattedValue = formatAsPhoneNumber(inputValue)
        setData('mobile_number', formattedValue)
    }

    const formatAsPhoneNumber = (value) => {
        value = value.replace(/\D/g, '')
        if(value.length > 10) {
            value = value.slice(0, 10)
        }

        value = `(${value.slice(0, 3)}) ${value.slice(3,6)}-${value.slice(6)}`

        return value
    }

    const handleMultiSelectChange = (selectedOptions) => {
        console.log([data])
        setData({ ...data, interests: selectedOptions });
    };

    const submit = async (e) => {
        e.preventDefault();
        try {
            await put(route('update.users', data.user_id), {
                onSuccess: (props) => {
                    
                }
            });
        } catch(errors) {
            console.log(errors)
        }
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <form onSubmit={submit} className="p-4">
                            <div>
                                <InputLabel htmlFor="name" value="First Name" />

                                <TextInput
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    className="mt-1 block w-full"
                                    autoComplete="name"
                                    isFocused={true}
                                    onChange={handleOnChange}
                                    required
                                />

                                <InputError message={errors.name} className="mt-2" />
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="surname" value="Surname" />

                                <TextInput 
                                    id="surname"
                                    name="surname"
                                    value={data.surname}
                                    className="mt-1 block w-full"
                                    autoComplete="surname"
                                    onChange={handleOnChange}
                                    required
                                />

                                <InputError message={errors.surname} className="mt-2" />
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="email" value="Email" />

                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    disabled
                                    required
                                />

                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="phone" value="Mobile Number" />

                                <TextInput
                                    id="phone"
                                    name="phone"
                                    value={data.mobile_number}
                                    className="mt-1 block w-full"
                                    autoComplete="phone"
                                    onChange={formatMobileNumber}
                                    required
                                />

                                <InputError message={errors.mobile_number} className="mt-2" />

                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="sa-id" value="South African ID" />

                                <TextInput
                                    id="sa-id"
                                    name="sa_id"
                                    value={data.sa_id}
                                    className="mt-1 block w-full"
                                    autoComplete="sa-id"
                                    disabled
                                    required
                                />

                                <InputError message={errors.sa_id} className="mt-2" />
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="dob" value="Date of Birth" />

                                <DateInput
                                    id="dob"
                                    name="birth_date"
                                    value={data.birth_date}
                                    className="mt-1 block w-full"
                                    onChange={handleOnChange} 
                                    required
                                />

                                <InputError message={errors.birth_date} className="mt-2" />

                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="language" value="Preferred Language" />
                                
                                <SingleSelectInput 
                                    id="language"
                                    name="language"
                                    value={data.language}
                                    className="w-[100%]"
                                    onChange={handleOnChange}
                                    required>
                                        <option disabled value="">Select Language</option>
                                        {LanguageList.map((language, index) => {
                                            return(
                                                <option key={index} name={language} value={language}>{language}</option>
                                            )
                                        })}    
                                </SingleSelectInput>
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="interest" value="Interests" />
                                
                                <MultiSelectInput 
                                    id="interest"
                                    name="interest"
                                    className="w-[100%] h-[20vh]"
                                    value={data.interests}
                                    onChange={handleMultiSelectChange}
                                    required>
                                        <option disabled value="">Select Interests</option>
                                        {InterestsList.map((interest, index) => {
                                            return(
                                                <option key={index} name={interest} value={interest}>{interest}</option>
                                            )
                                        })}    
                                </MultiSelectInput>
                            </div>

                            <div className="flex items-center justify-end mt-4">
                                <PrimaryButton className="ml-4" disabled={processing}>
                                    Save
                                </PrimaryButton>
                            </div>
                                {<InputSuccess message={props?.message} className="ml-4" />}
                        </form>                          
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}