import React, { useContext, useEffect, useState } from 'react';
import { Footer, Header } from '../../components';
import '../EventBadging/event-badging.scss';
import './EventBadgingForm.scss';
import '../../assets/styles/global.scss';
import { arrowRight } from '../../assets/images';
// eslint-disable-next-line import/namespace
import TextField from '../../components/Forms/TextField';
import BasicInfo from '../../pages/EventBadgingForm/Forms/InPerson/BasicInfo/BasicInfo';
import CodeOfConduct from './Forms/InPerson/CodeOfConduct/CodeOfConduct';
import DiversityAccessTickets from './Forms/InPerson/DiversityAccessTickets/DiversityAccessTickets';
import FamilyFriendliness from './Forms/InPerson/FamilyFriendliness/FamilyFriendliness';
import EventDemographics from './Forms/InPerson/EventDemographics/EventDemographics';
import InclusiveExperience from './Forms/InPerson/InclusiveExperience/InclusiveExperience';
import { InPersonEventContext, InPersonEventProvider } from './context/InPersonEventContext';
import SwitchComponents from './components/SwitchComponents';


const EventBadgingForm = () => {
  
  const [swap, setSwap] = useState('in-person');
  const swapHandler = toggle => {
    setSwap(toggle);
  };


  const switchComponents = (num) => {
    switch (num) {
      case 1:
        return <BasicInfo />;
      case 2:
        return <EventDemographics />
      default:
        break;
    }
  }

  const route = {
    // 'in-person': switchComponents(2),
    'in-person': <SwitchComponents />,
    // 'in-person': <InclusiveExperience />,
    virtual: <Virtual />,
  };

  return (
    <>
      <InPersonEventProvider>
        <main>
          <div className="overlay">
            <div className="bgRight"></div>
            <div className="bgCenter"></div>
            <div className="bgLeft"></div>
          </div>
          <Header />
          <div className="container jumbotron__container">
            <h1>Apply for Event Badging</h1>
            <div className="about-project">
              <button
                onClick={() => swapHandler('in-person')}
                className={
                  swap == 'in-person' ? 'buttonActive' : 'buttonInActive'
                }
              >
                In-Person Event
              </button>
              <button
                onClick={() => swapHandler('virtual')}
                className={swap == 'virtual' ? 'buttonActive' : 'buttonInActive'}
              >
                Virtual Event
              </button>
            </div>
          </div>
          <section className="event-form-container">
            {route[swap]}
          </section>
        </main>
        <Footer />
      </InPersonEventProvider>
    </>
  );
};



const Virtual = () => {
  return (
    <div>
      <h2>Virtual</h2>
      <p>
        ipsum dolor sit amet consectetur adipisicing elit. Debitis amet quis
        repellendus nostrum facere eligendi possimus voluptate aperiam
        perspiciatis natus similique dicta iste, tenetur soluta quasi ipsa minus
        sit aliquid enim. Similique suscipit excepturi dicta a obcaecati beatae
        quas? Ea soluta velit numquam, laboriosam dolores corrupti ad quaerat
        ratione culpa.
      </p>
    </div>
  );
};

export default EventBadgingForm;
