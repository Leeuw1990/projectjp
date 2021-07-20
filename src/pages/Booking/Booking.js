import React from 'react';
import styles from './booking.module.css';
import { useForm } from 'react-hook-form';
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";


function Booking() {
    const { register, handleSubmit, formState:{errors} } = useForm({
        mode: "onChange"
    })

    function submitData (data) {
        console.log(data)
    }



    return(
        <div className={styles.booking}>
            <form className={styles.inputForm} onSubmit={handleSubmit(submitData)}>
                <InputField
                    type='text'
                    name='name'
                    placeholder='Voornaam'
                    fieldRef={register('name',
                        {
                            required: {
                                value: true,
                                message: 'Gebruikersnaam is verplicht',}})}
                    errors={errors}
                />
                <InputField
                    type='text'
                    name='lastName'
                    placeholder='Achternaam'
                    fieldRef={register('lastName',
                        {
                            required: {
                                value: true,
                                message: 'Gebruikersnaam is verplicht',}})}
                    errors={errors}
                />
                <InputField
                    type='text'
                    name='phone'
                    placeholder='Telefoonnummer'
                    fieldRef={register('phone',
                        {
                            required: {
                                value: true,
                                message: 'Gebruikersnaam is verplicht',}})}
                    errors={errors}
                />
                <InputField
                    type='text'
                    name='email'
                    placeholder='E-mail'
                    fieldRef={register('email',
                        {
                            required: {
                                value: true,
                                message: 'Gebruikersnaam is verplicht',}})}
                    errors={errors}
                />
                <label>
                    <textarea {...register('bookingInfo')} id='bookingInfo' name='bookingInfo' className={styles.ereaText} rows='25' cols='50' placeholder='Geef hier uw aanvraag door'/>
                </label>
                <Button
                type='submit'
                text='Verstuur'
                />
            </form>

        </div>
    );
}

export default Booking;