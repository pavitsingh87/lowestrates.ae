import React from 'react';

import styles from "../../../../styles/styles.css";
import styles1 from "../../../../styles/property-info.css";

import { useRouter } from 'next/router';
import Header from '../../../../components/Header';

const Index = () => {
    const router = useRouter();

  // Define the function to handle form submission
  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Redirect the user to the desired URL using router.push
    router.push('/mortgagequote/remortgage/applicant-profile');
  };
  return (
    <div>
        <Header />
      <main>
        <div className="mortgage-wrapper renewal">
            <div className="title-gauge-block">
                <div className="title">
                    <a className="back" href="/mortgagequote/remortgage/property-info" title="Back">Back</a>
                    <h2>You’re minutes away from your quotes.</h2>
                </div>
                <div className="gauge">
                    <div className="gauge-progress">
                    <div className="progress" style={{ width : '50%' }}></div>
                    </div>
                    <ol className="page-name">
                    <li> <span className="name"> <a href="/mortgagequote/remortgage/emirates-info" title="Province Info">Province Info</a> </span> <span className="time-left">3 minutes to finish</span></li>
                    <li> <span className="name"> <a href="/mortgagequote/remortgage/property-info" title="Property Info">Property Info</a> </span> <span className="time-left">3 minutes to finish</span></li>
                    <li className="selected"> <span className="name"> <a className="back" href="/mortgagequote/remortgage/property-info" title="Back">Back</a>Mortgage Info </span> <span className="time-left">3 minutes to finish</span><span className="extra-gauge" ></span></li>
                    
                    <li> <span className="name"> Applicant Profile </span> <span className="time-left">3 minutes to finish</span></li>
                    <li> <span className="name"> Contact Info </span> <span className="time-left">3 minutes to finish</span></li>
                    <li> <span className="name"> Your Rates </span> <span className="time-left">3 minutes to finish</span></li>
                    </ol>
                </div>
            </div>
            <form method="POST" className="mortgage-form renew mortgage" onSubmit={handleSubmit}>
    <div className="page-icon">
        <div className="page-icon-inner">
            <img src="/resources/images/mortgage/icons/rate-info.png" alt="Mortgage property icon" />
            <div>Mortgage Info</div>
        </div>
    </div>
    <fieldset>
        <div className="field date-month renewal-date">
            <label> When is your mortgage up for renewal? <a className="help-trigger">?</a> </label>
            <div className="help">
                <p><b>Renewal Date:</b><br />This question refers to the end of your current mortgage term, which can range anywhere from 1 to 10 years. When does your mortgage term end?</p>
                <a className="close-help" title="Close"></a>
            </div>
            <div className="fields">
                <div className="month">
                    <label htmlFor="renewal-date--month">Month</label>
                    <div className="input">
                        <select className="date-select" id="renewal-date--month" name="renewal-date[month]" defaultValue="6">
                            <option value="" disabled hidden>MM</option>
                            <option value="1">January</option>
                            <option value="2">February</option>
                            <option value="3">March</option>
                            <option value="4">April</option>
                            <option value="5">May</option>
                            <option value="6" selected>June</option>
                            <option value="7">July</option>
                            <option value="8">August</option>
                            <option value="9">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </select>
                    </div>
                </div>
                <div className="year">
                    <label htmlFor="renewal-date--year">Year</label>
                    <div className="input">
                        <select className="date-select" id="renewal-date--year" name="renewal-date[year]" defaultValue="2024">
                            <option value="" disabled hidden>YYYY</option>
                            <option value="2024" selected>2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div className="field money property-value">
            <label htmlFor="property-value"> What is the estimated current home value? <a className="help-trigger">?</a> </label>
            <div className="help">
                <p><b>Estimated Current Home Value:</b><br />Please provide an estimate of the current market value of your home to the best of your ability.</p>
                <a className="close-help" title="Close"></a>
            </div>
            <div className="input double-input">
                <div className="first-input"> <input type="tel" className="money" id="property-value" name="property-value" placeholder="" /></div>
            </div>
        </div>
        <div className="field money previous">
            <label htmlFor="previous"> What is your remaining mortgage balance? <a className="help-trigger">?</a> </label>
            <div className="help">
                <p><b>Mortgage Balance:</b><br />Please provide an estimate of your outstanding mortgage balance to the best of your ability.</p>
                <a className="close-help" title="Close"></a>
            </div>
            <div className="input double-input">
                <div className="first-input"> <input type="tel" className="money" id="previous" name="previous" placeholder="" /></div>
            </div>
        </div>
    </fieldset>
    <div className="actions"> <button type="submit" className="call-to-action">Continue</button></div>
</form>

        </div>
        <footer className="form-footer renewal">
            <p className="compare-rates">Compare rates from Canada's leading banks and brokers</p>
            <div className="arrow-container"><span className="arrow left disabled"></span><span className="arrow right"></span></div>
            <div className="section-carousel"><img alt="Mortgage Logos" src="" /></div>
        </footer>
        
        </main>
    </div>
  );
}

export default Index;
