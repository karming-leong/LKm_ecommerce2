import React from 'react';
import { Formik, Field, Form } from 'formik';

function RegisterPage() {
    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        salutation: '',
        marketingPerferences: [],
        country: ''
    };

    const handleSubmit = (values, formikHelpers) => {
        //here to make API call to register users
        console.log('form values:', values);
        formikHelpers.setSubmitting(false);
    };


    return (
        <div className="container mt-5">
            <h1>Register</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}>


                {(formik) => (
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <Field 
                            type="text" 
                            className="form-control" 
                            name="name"
                            id="name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <Field type="email" className="form-control" name="email" id="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Passsword</label>
                            <Field type="password" className="form-control" name="password" id="password" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                            <Field type="password" className="form-control" name="confirmPassword" id="confirmPassword" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Salutation</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field className="form-check-input" type="radio" name="salutation" id="mr" value="Mr" />
                            <label className="form-check-label" htmlFor="mr">Mr</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field className="form-check-input" type="radio" name="salutation" id="ms" value="Ms" />
                            <label className="form-check-label" htmlFor="form-check-label">Ms</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field className="form-check-input" type="radio" name="salutation" id="mrs" value="Mrs" />
                            <label className="form-check-label" htmlFor="Mrs">Mrs</label>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Marketing Preferences</label>
                        </div>
                        <div className="form-check">
                            <Field className="form-check-input" value="marketing" type="checkbox" name="marketingPreferences" id="emailMarketing" />
                            <label className="form-check-label" htmlFor="emailMarketing">Email Marketing</label>
                        </div>
                        <div className="form-check">
                            <Field className="form-check-input" value="marketing" type="checkbox" name="marketingPreferences" id="smsmarketing" />
                            <label className="form-check-label" htmlFor="smsMarketing">Sms Marketing</label>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="country" className="form-label">Country</label>
                            <Field as="select" className="form-select" name="country" id="country">
                                <option value="">Select Country</option>
                                <option value="sg">Singapore</option>
                                <option value="my">Malaysia</option>
                                <option value="in">Indonesia</option>
                                <option value="th">Thailand</option>
                            </Field>
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </Form>
                )
                }</Formik>
        </div>
    );
}

export default RegisterPage;