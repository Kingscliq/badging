import React, { createContext, useState } from 'react';
import PropTypes from "prop-types";

export const InPersonEventContext = createContext({});


export const InPersonEventProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        step: 2,
    });

    const updateFormData = (newData) => {
        setFormData({ ...formData, ...newData });
    }

    const nextStep = () => {
        setFormData((prevData) => ({
            ...prevData,
            step: prevData.step + 1
        }))
    }

    const prevStep = () => {
        setFormData((prevData) => ({
            ...prevData,
            step: prevData.step - 1
        }))
    }

    return (
        <InPersonEventContext.Provider value={{ formData, setFormData, updateFormData, nextStep, prevStep }}>
            {children}
        </InPersonEventContext.Provider>
    )
}

InPersonEventProvider.propTypes = {
    children: PropTypes.node,
};