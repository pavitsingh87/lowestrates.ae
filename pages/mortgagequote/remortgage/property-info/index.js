import React from 'react';
import { useRouter } from 'next/router';

import styles from "../../../../styles/styles.css";
import styles1 from "../../../../styles/property-info.css";
import Header from '../../../../components/Header';
const Index = () => {
    const router = useRouter();

  // Define the function to handle form submission
  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Redirect the user to the desired URL using router.push
    router.push('/mortgagequote/remortgage/mortgage-info');
  };
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
                    <div className="progress" style={{ width: '33.3333%' }}>
                    </div>

                    </div>
                    <ol className="page-name"><li> <span className="name"> <a href="http://localhost:3000/mortgagequote/remortgage/emirates-info/" title="Province Info">Province Info</a> </span> <span className="time-left">4 minutes to finish</span></li><li className="selected"> <span className="name"> <a className="back" href="/mortgagequote/remortgage/emirates-info" title="Back">Back</a>Property Info </span> <span className="time-left">4 minutes to finish</span></li><li> <span className="name"> Mortgage Info </span> <span className="time-left">4 minutes to finish</span></li><li> <span className="name"> Applicant Profile </span> <span className="time-left">4 minutes to finish</span></li><li> <span className="name"> Contact Info </span> <span className="time-left">4 minutes to finish</span></li><li> <span className="name"> Your Rates </span> <span className="time-left">4 minutes to finish</span></li></ol>
                </div>
            </div>
            <form method="POST" onSubmit={handleSubmit} className="mortgage-form renew address" data-invalid-location="Please enter a valid city and province. Ex. Toronto, ON">
            <div className="page-icon">
                <div className="page-icon-inner">
                <img src="/resources/images/mortgage/icons/rate-info.png" alt="Property info icon" />
                <div>Property Info</div>
                </div>
            </div>
            <fieldset>
                <div className="field radio lives-at-property">
                <label> Do you live in this property? <a className="help-trigger">?</a> </label>
                <div className="help">
                    <p><b>Property Type:</b><br />Owner-occupied properties are subject to different terms and conditions than rental properties. The way you use the property may impact your rate.</p>
                    <a className="close-help"></a>
                </div>
                <ul className="options">
                    <li>
                    <label htmlFor="lives-at-property1" className="">
                        <input type="radio" id="lives-at-property1" name="lives-at-property" value="1" checked />
                        <div className="icon"></div>
                        <span>Yes</span>
                    </label>
                    </li>
                    <li>
                    <label htmlFor="lives-at-property2">
                        <input type="radio" id="lives-at-property2" name="lives-at-property" value="0" />
                        <div className="icon"></div>
                        <span>No</span>
                    </label>
                    </li>
                </ul>
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
