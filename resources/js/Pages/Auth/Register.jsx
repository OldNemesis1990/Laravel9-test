import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import DateInput from '@/Components/DateInput';
import SingleSelectInput from '@/Components/SingleSelectInput';
import { LanguageList } from '@/Data/LanguageList';
import { Head, Link, useForm } from '@inertiajs/react';
import { Input } from 'postcss';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const handleOnChange = (event) => {
        console.log(event.target.value)
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
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
                        onChange={handleOnChange}
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
                        onChange={handleOnChange}
                        required
                    />

                    <InputError message={errors.mobile_number} className="mt-2" />

                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="sa-id" value="South African ID" />

                    <TextInput
                        id="sa-id"
                        name="sa-id"
                        value={data.sa_id}
                        className="mt-1 block w-full"
                        autoComplete="sa-id"
                        onChange={handleOnChange}
                        required
                    />

                    <InputError message={errors.sa_id} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="dob" value="Date of Birth" />

                    <DateInput
                        id="dob"
                        name="dob"
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
                        onChange={handleOnChange}
                        required>
                            <option disabled selected>Select Language</option>
                        {LanguageList.map((language, index) => {
                            return(
                                <option key={index} name={language}>{language}</option>
                            )
                        })}    
                    </SingleSelectInput>
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={handleOnChange}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={handleOnChange}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ml-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
