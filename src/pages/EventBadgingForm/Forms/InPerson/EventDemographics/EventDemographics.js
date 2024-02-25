/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react'
import TextField from '../../../../../components/Forms/TextField';
import Button from '../../../../../components/Button/Button';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import './EventDemographics.scss';
import arrowRight from '../../../../../assets/images/others/arrow-right.svg';
import BpCheckbox from '../../../../../components/Checkbox/BpCheckbox';
import TextArea from '../../../../../components/TextArea/TextArea';
import { InPersonEventContext } from '../../../context/InPersonEventContext';
import { Form, Formik } from 'formik';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const EventDemographics = () => {

  const initialEDValues = {
    eventDemographicsCommit: false,
    eventDemographicsDetail: "",
    eventDemographicsOptOutOption: "",
    eventDemographicsExample: ""
  }

  const validateEDForm = (values) => {
    const errors = {}

    if (!values.eventDemographicsDetail) {
      errors.eventDemographicsDetail = "Event demographics detail is required";
    } else if (values.eventDemographicsDetail.length <= 3) {
      errors.eventDemographicsDetail = 'Must be 3 characters or more';
    }

    if (!values.eventDemographicsOptOutOption) {
      errors.eventDemographicsOptOutOption = "Event demographics opt out option detail is required";
    } else if (values.eventDemographicsOptOutOption.length <= 3) {
      errors.eventDemographicsOptOutOption = 'Must be 3 characters or more';
    }

    if (!values.eventDemographicsExample) {
      errors.eventDemographicsExample = "Event demographics example is required";
    } else if (values.eventDemographicsExample.length <= 3) {
      errors.eventDemographicsExample = 'Must be 3 characters or more';
    }

    return errors
  }

  const { formData, setFormData, updateFormData, nextStep, prevStep } = useContext(InPersonEventContext);

  const onContactFormSubmission = (values) => {
    console.log("values", values);
    setFormData({ ...formData, ...values });
    
    nextStep();
  }

  console.log("Context data", formData);

  const handlePrevBtn = () => {
    prevStep();
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
          initialValues={initialEDValues}
          validate={validateEDForm}
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
                    <p style={{ fontWeight: "600", fontSize: "1.2rem" }}>Events Demographics</p>
                    <div>
                      <BpCheckbox
                        style={{ fontSize: "12px" }}
                        label="This event commits to Speaker Diversity & Inclusion."
                        name="eventDemographicsCommit"
                        value={values.eventDemographicsCommit}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div style={{ marginTop: "1rem" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p style={{ color: "#000000" }}>
                        References
                      </p>
                      {" "}
                      <img src={arrowRight} alt="right arrow" />
                    </div>
                  </div>

                  <div className='physical-input'>
                    <TextArea
                      id="eventDemographicsDetail"
                      name="eventDemographicsDetail"                      
                      value={values.eventDemographicsDetail}
                      onChange={handleChange}
                      label="Detail the process for measuring Event Demographics"
                      rows={6}
                      cols={6}
                      placeholder="Enter your answer here"
                    />
                    <p style={{ color: "red", fontSize: "12px" }}>
                      {errors.eventDemographicsDetail && touched.eventDemographicsDetail && errors.eventDemographicsDetail}
                    </p>
                  </div>



                  <div className='physical-input'>
                    <TextArea
                      id="eventDemographicsOptOutOption"
                      name="eventDemographicsOptOutOption"
                      value={values.eventDemographicsOptOutOption}
                      onChange={handleChange}
                      label="Provide an example of an opt-out option on the Event registration page if available."
                      rows={6}
                      cols={6}
                      placeholder="Enter your answer here"
                    />
                    <p>For example, the option of "Prefer not to answer".</p>
                    <p style={{ color: "red", fontSize: "12px" }}>
                      {errors.eventDemographicsOptOutOption && touched.eventDemographicsOptOutOption && errors.eventDemographicsOptOutOption}
                    </p>
                  </div>

                  <div className='physical-input'>
                    <TextArea
                      id="eventDemographicsExample"
                      name="eventDemographicsExample"
                      value={values.eventDemographicsExample}
                      onChange={handleChange}
                      label="Provide an example of a demographics text input box on the Event registration page if available."
                      rows={6}
                      cols={6}
                      placeholder="Enter your answer here"
                    />

                    <p>For example, an alternative identity input for gender.</p>

                    <p style={{ color: "red", fontSize: "12px" }}>
                      {errors.eventDemographicsExample && touched.eventDemographicsExample && errors.eventDemographicsExample}
                    </p>
                  </div>

                  <div className='step-2-criteria'>
                    <p>
                      Criteria:<br />
                    </p>
                    <p>
                      <span style={{ color: "#000", fontWeight: "bold" }}>Measuring Demographics: </span>
                      This event commits to Speaker Diversity & Inclusion.
                    </p>
                    <p>
                      <span style={{ color: "#000", fontWeight: "bold" }}>Opt-Out: </span>
                      The Event provides an opportunity to opt-out of providing demographic data.
                    </p>

                    <p>
                      <span style={{ color: "#000", fontWeight: "bold" }}>Text Input: </span>
                      The Event provides a text box to input certain data such as Gender, Race, or Ethnicity.
                    </p>
                  </div>

                  <div type="button" className='btn-group'>
                    <Button onClick={handlePrevBtn} className="btn-primary btn-next" >
                      Previous
                    </Button>                  

                    <Button type="submit" className="btn-primary btn-next" disabled={!values.eventDemographicsDetail || !values.eventDemographicsExample || !values.eventDemographicsOptOutOption || !values.eventDemographicsCommit}>
                      Next (2/6)
                    </Button>
                  </div>
                </Form>
              </>)
          }
        </Formik>


      </div>
    </div>
  )
}

export default EventDemographics