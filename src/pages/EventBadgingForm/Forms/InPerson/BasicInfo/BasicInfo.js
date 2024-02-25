/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import TextField from '../../../../../components/Forms/TextField';
import Button from '../../../../../components/Button/Button';
import './BasicInfo.scss';
import FormLabel from '@mui/material/FormLabel';
import BpCheckbox from '../../../../../components/Checkbox/BpCheckbox';
import { InPersonEventContext } from '../../../context/InPersonEventContext';
import { FormGroup } from '@mui/material';
import { Form, Formik } from 'formik';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const index = () => {

    const initialValues = {
        name: "",
        websiteLink: "",   
        organizedByYou: false     
    }

    const validateForm = (values) => {
        const errors = {}

        if (!values.name) {
            errors.name = "Name is required";
        } else if (values.name.length <= 3) {
            errors.name = 'Must be 3 characters or more';
        }

        if (!values.websiteLink) {
            errors.websiteLink = "Link is required";
        }

        return errors
    }

    const { formData, setFormData, updateFormData, nextStep } = useContext(InPersonEventContext);

    const onContactFormSubmission = (values) => {
        console.log(values);
        setFormData({...formData, ...values});
        console.log("Context data", formData);
        nextStep();
    }

    return (
        <div className='container'>
            <div className='in-person-form'>
                <h4 style={{ color: "#000000" }}>In-Person Event</h4>
                <p>
                    Please only use this form if you are applying for
                    a CHAOSS DEI Event Badge for physical events. You
                    can apply for virtual events <a href="#" style={{ color: "#D61B5E" }}> here </a>
                </p>

                <Formik
                    initialValues={initialValues}
                    validate={validateForm}
                    onSubmit={(values) => {
                        onContactFormSubmission(values);
                    }}
                >
                    {
                        (
                            { values, errors, touched, handleChange, }
                        ) => (
                            <>
                                <Form className='form-container'>
                                    <div className='physical-input'>
                                        <TextField onChange={handleChange} name="name" value={values.name} placeholder="Enter event name" label="Enter name" message={"Please enter a value"} />
                                        <p style={{ color: "red", fontSize: "14px" }}>
                                            {errors.name && touched.name && errors.name}
                                        </p>
                                    </div>

                                    <div className='physical-input'>
                                        <TextField onChange={handleChange} name="websiteLink" value={values.websiteLink} placeholder="Enter link to event website" label="Link to the event website" message={"Please enter a value"} />
                                        <p style={{ color: "red", fontSize: "14px" }}>
                                            {errors.websiteLink && touched.websiteLink && errors.websiteLink}
                                        </p>    
                                    </div>

                                    <div className='physical-input'>
                                        <div>
                                            <FormLabel style={{ color: "#000000" }} id="demo-controlled-radio-buttons-group">
                                                Are you an organizer of this event? <span style={{ color: "#D61B5E" }}>*</span>
                                            </FormLabel>

                                            <div style={{ display: "flex", alignItems: "center" }}>
                                                <div>
                                                    <BpCheckbox onChange={handleChange} label="Yes" value={values.organizedByYou} name="organizedByYou" />
                                                </div>

                                                <div>
                                                    <BpCheckbox onChange={handleChange} label="No" value={values.organizedByYou} name="organizedByYou" />
                                                </div>
                                            </div>
                                            {/* <p style={{ color: "red", fontSize: "14px" }}>
                                                {errors.name && touched.name && errors.name}
                                            </p> */}
                                        </div>
                                    </div>

                                    <Button type="submit" className="btn-primary btn-next" disabled={!values.name || !values.websiteLink || errors.name || errors.websiteLink}>
                                        Next (1/6)
                                    </Button>
                                </Form>
                            </>
                        )}
                </Formik>

                {/* <form onSubmit={handleSubmit} className='form-container'>
                    <div className='physical-input'>
                        <TextField onChange={handleChange} name="name" value={formData.name} placeholder="Enter event name" label="Enter name" message={"Please enter a value"} />
                    </div>

                    <div className='physical-input'>
                        <TextField onChange={handleChange} name="websiteLink" value={formData.websiteLink} placeholder="Enter link to event website" label="Link to the event website" message={"Please enter a value"} />
                    </div>

                    <div className='physical-input'>
                        <div>
                            <FormLabel style={{ color: "#000000" }} id="demo-controlled-radio-buttons-group">
                                Are you an organizer of this event? <span style={{ color: "#D61B5E" }}>*</span>
                            </FormLabel>

                            <div style={{ display: "flex", alignItems: "center" }}>
                                <div>
                                    <BpCheckbox onChange={handleChange} label="Yes" value="yes" name="yes" checked={formData.yes} />
                                </div>

                                <div>
                                    <BpCheckbox onChange={handleChange} label="No" value="no" name="no" checked={formData.no} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <Button type="submit" className="btn-primary btn-next" disabled={!formData.name || !formData.websiteLink}>
                        Next (1/6)
                    </Button>
                </form> */}
            </div>
        </div>
    )
}

export default index