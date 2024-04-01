import React from 'react';
import styles from '../../../../styles/styles.css';
import styles1 from '../../../../styles/property-info.css';
import Header from '../../../../components/Header';
import { useRouter } from 'next/router';

const Index = () => {
    const router = useRouter();
  
    const handleSubmit = (event) => { 
        event.preventDefault(); 
        let location = ''; // Declare location variable here
        let livesatproperty='';
        // Retrieve the values from the form fields
        let month = '';
        let year = '';
        let propertyValue = '';
        let previousBalance = '';

        let rateType= '';
        let rateTerm= '';
        let annualIncome= '';
        let creditScore= '';
        let employmentInfo= '';
        
        // Fetch location from session form data
        const formDataString = localStorage.getItem('formData');
        if (formDataString) {
            const formData = JSON.parse(formDataString);
            location = formData.location; // Assign value to location
            livesatproperty= formData.livesatproperty;
            month=formData.month;
            year=formData.year;
            propertyValue=formData.propertyValue;
            previousBalance=formData.previousBalance;
            rateType= formData.rateType;
            rateTerm= formData.rateTerm;
            annualIncome= formData.annualIncome;
            creditScore= formData.creditScore;
            employmentInfo= formData.employmentInfo;
        }
        // Fetch values from the form using event.target
        const formData = {
            location:location,
            livesatproperty: livesatproperty,
            month: month,
            year: year,
            propertyValue:propertyValue,
            previousBalance: previousBalance,
            rateType: rateType,
            rateTerm: rateTerm,
            annualIncome: annualIncome,
            creditScore: creditScore,
            employmentInfo: employmentInfo,
            firstName: event.target['first-name'].value,
            lastName: event.target['last-name'].value,
            phone: event.target.phone.value,
            email: event.target.email.value,
            signupWeekly: event.target['signup-weekly'].checked
        };
        // Store form data in localStorage
        localStorage.setItem('formData', JSON.stringify(formData));

        // Redirect the user to the desired URL using router.push
        router.push('/mortgagequote/remortgage/thank-you');
    };
  return (
    <><Header /><div>
          <main>
              <div className="mortgage-wrapper renewal">
                  <div className="title-gauge-block">
                      <div className="title">
                          <a className="back" href="/mortgagequote/remortgage/applicant-profile" title="Back">Back</a>
                          <h2>You’re minutes away from your quotes.</h2>
                      </div>
                      <div className="gauge">
                          <div className="gauge-progress">
                              <div className="progress" style={{ width: '83.3333%' }}></div>
                          </div>
                          <ol className="page-name">
                              <li>
                                  <span className="name">
                                      <a href="/mortgagequote/remortgage/province-info" title="Province Info">Province Info</a>
                                  </span>
                                  <span className="time-left">1 minute to finish</span>
                              </li>
                              <li>
                                  <span className="name">
                                      <a href="/mortgagequote/remortgage/property-info" title="Property Info">Property Info</a>
                                  </span>
                                  <span className="time-left">1 minute to finish</span>
                              </li>
                              <li>
                                  <span className="name">
                                      <a href="/mortgagequote/remortgage/mortgage-info" title="Mortgage Info">Mortgage Info</a>
                                  </span>
                                  <span className="time-left">1 minute to finish</span>
                              </li>
                              <li>
                                  <span className="name">
                                      <a href="/mortgagequote/remortgage/applicant-profile" title="Applicant Profile">Applicant Profile</a>
                                  </span>
                                  <span className="time-left">1 minute to finish</span>
                              </li>
                              <li className="selected">
                                  <span className="name">
                                      <a className="back" href="/mortgagequote/remortgage/applicant-profile" title="Back">Back</a>Contact Info
                                  </span>
                                  <span className="time-left">1 minute to finish</span>
                                  <span className="extra-gauge" style={{ height: '0px' }}></span>
                              </li>
                              <li>
                                  <span className="name">Your Rates</span>
                                  <span className="time-left">1 minute to finish</span>
                              </li>
                          </ol>
                      </div>
                  </div>
                  <div className="your-rate-block d-flex">
                      <form className="mortgage-form your-rate form-center" method="POST"  onSubmit={handleSubmit}>
                          <h5>Enter your contact information and on the next page you’ll be able to:</h5>
                          <ul>
                              <li>See the rest of your quotes</li>
                              <li>Find out which companies are offering these rates</li>
                              <li>Contact a broker to secure your rate and find out if you can save even more</li>
                          </ul>
                          <div className="clients-number rate-details">
                              <div className="number">
                                  <img src="/resources/images/lock-figure.png" alt="Lock figure" />
                                  <span>23,075</span>
                              </div>
                              <p>Canadians have compared rates in the last 24 hours</p>
                          </div>
                          <div className="field text first-name">
                              <label htmlFor="first-name">Enter your first name</label>
                              <div className="input">
                                  <input type="text" id="first-name" name="first-name" placeholder="First name" />
                              </div>
                          </div>
                          <div className="field text last-name">
                              <label htmlFor="last-name">Enter your last name</label>
                              <div className="input">
                                  <input type="text" id="last-name" name="last-name" placeholder="Last name" />
                              </div>
                          </div>
                          <div className="field phone phone">
                              <label htmlFor="phone">Enter your phone number</label>
                              <div className="input">
                                  <input type="tel" className="phone-mask" id="phone" 
                                  name="phone"  
                                  placeholder="Ex. +971 4 123 4567"  />
                              </div>
                          </div>
                          <div className="field email email">
                              <label htmlFor="email">Please provide your email address so we can send you a copy of your quotes. <a className="help-trigger">?</a></label>
                              <div className="help">
                                  <p>If you're not ready to make a decision, don't sweat it. We'll email your quotes to you so you can access them later and speak to a trusted advisor whenever you're ready.</p>
                                  <a className="close-help" title="Close"></a>
                              </div>
                              <div className="input">
                                  <div className="">
                                      <input type="email" id="email" name="email" placeholder="name@email.com" />
                                  </div>
                              </div>
                          </div>
                          <div className="actions">
                              <p className="disclaimer">Yes, I'd like to receive special offers, via email/SMS/phone from LowestRates.ae. I may unsubscribe at any time. LowestRates.ae will not trade or sell your information to third parties except when required to fulfill the services you request. For details see our <a href="/privacy-policy" target="_blank">Privacy Policy</a></p>
                              <div className="signup-weekly">
                                  <input type="checkbox" name="signup-weekly" id="signup-weekly" />
                                  <label className="large" htmlFor="signup-weekly">I agree</label>
                              </div>
                              <br />
                              <br />
                              <button className="call-to-action" type="submit">Unlock all your rates</button>
                          </div>
                      </form>

                  </div>
              </div>
              <br /><br />
          </main>
      </div></>
  );
}

export default Index;
