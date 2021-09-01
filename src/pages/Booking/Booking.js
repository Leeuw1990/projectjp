import React from 'react';
import styles from './booking.module.css';
import { useForm } from 'react-hook-form';
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";


function Booking() {
    const { register, handleSubmit, formState:{errors} } = useForm({
        mode: "onChange"
    })

    function submitData (data, e) {
        console.log(data)
        e.target.reset();
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
                                message: 'Voornaam verplicht',}})}
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
                                message: 'Achternaam verplicht',}})}
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
                                message: 'Telefoonnummer verplicht',}})}
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
                                message: 'E-mail verplicht',}})}
                    errors={errors}
                />
                <label>
                    <textarea {...register('bookingInfo')} id='bookingInfo' name='bookingInfo' className={styles.ereaText} rows='10' cols='50' placeholder='Geef hier uw aanvraag door'/>
                </label>
                <button className={styles.submit} type='submit'
                >Verstuur</button>
            </form>
        </div>
    );
}

export default Booking;