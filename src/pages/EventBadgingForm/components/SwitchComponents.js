import React, { useContext, useEffect, useState } from 'react';
import BasicInfo from '../Forms/InPerson/BasicInfo/BasicInfo';
import EventDemographics from '../Forms/InPerson/EventDemographics/EventDemographics';
import { InPersonEventContext } from '../context/InPersonEventContext';
import InclusiveExperience from '../Forms/InPerson/InclusiveExperience/InclusiveExperience';
import CodeOfConduct from '../Forms/InPerson/CodeOfConduct/CodeOfConduct';
import DiversityAccessTickets from '../Forms/InPerson/DiversityAccessTickets/DiversityAccessTickets';
import FamilyFriendliness from '../Forms/InPerson/FamilyFriendliness/FamilyFriendliness';

const SwitchComponents = () => {
    const { formData, setFormData, nextStep } = useContext(InPersonEventContext);
    console.log("yess", formData);
    switch (formData.step) {
        case 1:
            return <BasicInfo />
        case 2:
            return <EventDemographics />
        case 3:
            return <InclusiveExperience />
        case 4:
            return <CodeOfConduct />
        case 5:
            return <DiversityAccessTickets />
        case 6:
            return <FamilyFriendliness />
        default:
            return <BasicInfo/>
    }
}

export default SwitchComponents