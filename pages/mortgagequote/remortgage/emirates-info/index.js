import React from 'react';
import { useRouter } from 'next/router';

import { useEffect } from 'react';
import { generateSessionId, hashSessionId } from '../../../../utils/session';

import styles from "../../../../styles/styles.css";
import styles1 from "../../../../styles/property-info.css";
import Header from '../../../../components/Header';

const Index = () => {
  const router = useRouter();

  // Define the function to handle form submission
  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Get the form data
    const formData = {
    location: event.target.location.value
    // Add other form fields as needed
    };
    const serializedData = JSON.stringify(formData);

    localStorage.setItem('formData', serializedData);
    // Convert the form data into query parameters
    const queryParams = new URLSearchParams(formData).toString();

    // Redirect to the Property Info page with form data as query parameters
    router.push(`/mortgagequote/remortgage/property-info?${queryParams}`);
  };

  useEffect(() => {
    // Check if session ID exists in localStorage
    let sessionId = localStorage.getItem('sessionId');
        if (!sessionId) {
        // If session ID doesn't exist, generate a new one
        sessionId = generateSessionId();
        // Hash the session ID
        const hashedSessionId = hashSessionId(sessionId);
        // Store the hashed session ID in localStorage
        localStorage.setItem('sessionId', hashedSessionId);
        }
    });
  return (
    
    <div>
      <Header />
      <main>
        <div className="mortgage-wrapper renewal">
            <div className="title-gauge-block">
                <div className="title">
                    <h2>You’re minutes away from your quotes.</h2>
                </div>
                <div className="gauge">
                    <div className="gauge-progress">
                    <div className="progress" style={{ width: '16.6667%' }}>
                    </div>

                    </div>
                    <ol className="page-name">
                        <li className="selected"> 
                            <span className="name"> Emirates Info </span> 
                            <span className="time-left">5 minutes to finish</span>
                        </li>
                        <li> <span className="name"> Property Info </span> <span className="time-left">5 minutes to finish</span></li>
                        <li> <span className="name"> Mortgage Info </span> <span className="time-left">5 minutes to finish</span></li>
                        <li> <span className="name"> Applicant Profile </span> <span className="time-left">5 minutes to finish</span>
                        </li>
                        <li> <span className="name"> Contact Info </span> <span className="time-left">5 minutes to finish</span></li>
                        <li> <span className="name"> Your Rates </span> <span className="time-left">5 minutes to finish</span></li>
                    </ol>
                </div>
            </div>
                <form method="POST" className="mortgage-form purchase property" id="province-form" data-invalid-location="Please enter a valid city and province. Ex. Toronto, ON" onSubmit={handleSubmit}>
        
                    <div className="page-icon">
                        <div className="page-icon-inner"> 
                            <img src="/resources/images/mortgage/icons/rate-info.png    " alt="Purchase property icon" />
                            <div>Emirates Info</div>
                        </div>
                    </div>
                    <fieldset>
                        <div className="field text location "> 
                            <label htmlFor="location"> Please select your province <a className="help-trigger">?</a> </label>
                            <div className="help">
                                <p>Let us know where you're looking to buy so we can find you the best mortgage rates in your area.<br /><br /> Please note that we do not offer a mortgage rate comparison service in Manitoba and Quebec.</p> 
                                <a className="close-help" title="Close"></a>
                            </div>
                            <div className="input"> 
                            <select id="location" name="location" defaultValue="db">
                                <option value="all">All of UAE</option>
                                <option value="db" selected="selected">Dubai</option>
                                <option value="ad">Abu Dhabi</option>
                                <option value="sh">Sharjah</option>
                                <option value="aj">Ajman</option>
                                <option value="ra">Ras Al Khaimah</option>
                                <option value="ua">Umm Al Quwain</option>
                            </select>
                            
                            </div>
                        </div>
                    </fieldset>
                    <div className="actions"> 
                        <button type="submit" className="call-to-action">Continue</button>
                    </div>
                </form>
            <div id="modalOverlay">
                <div className="modal" id="province_modal">
                    <div className="modal-content">
                        <div className="titleAndButton">
                            <h3>Confirm</h3>
                            <a className="close" id="province_modal_close">×</a>
                        </div>
                        <div className="info-container">
                            <div className="property-descr">
                                <p>	For British Columbia Mortgage Rates you will be directed to RATESDOTCA where 
                                    you will be able to compare quotes from top Mortgage providers.
                                </p>
                            </div>
                            <div className="text-center">
                                <button className="call-to-action" id="mortgage-cta" rel="nofollow">Continue</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}

export default Index;
