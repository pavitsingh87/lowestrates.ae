import React from 'react';
import { useRouter } from 'next/router';
import Header from '../../../../components/Header';
import styles from "../../../../styles/styles.css";
import styles1 from "../../../../styles/property-info.css";
const Index = () => {
    const router = useRouter();

    // Define the function to handle form submission
    const handleSubmit = (event) => {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Redirect the user to the desired URL using router.push
        router.push('/mortgagequote/remortgage/thank-you');
    };
  return (
    <div>
        <Header />
        <main>
            <div className="mortgage-wrapper renewal">
                <div className="title-gauge-block">
                    <div className="title">
                        <a className="back" href="/mortgagequote/remortgage/mortgage-info" title="Back">Back</a>
                        <h2>You’re minutes away from your quotes.</h2>
                    </div>
                    <div className="gauge">
                        <div className="gauge-progress">
                        <div className="progress" style={{width: "66.6667%"}}></div>
                        </div>
                        <ol className="page-name">
                        <li> <span className="name"> <a href="/mortgagequote/remortgage/province-info" title="Province Info">Province Info</a> </span> <span className="time-left">2 minutes to finish</span></li>
                        <li> <span className="name"> <a href="/mortgagequote/remortgage/property-info" title="Property Info">Property Info</a> </span> <span className="time-left">2 minutes to finish</span></li>
                        <li> <span className="name"> <a href="/mortgagequote/remortgage/mortgage-info" title="Mortgage Info">Mortgage Info</a> </span> <span className="time-left">2 minutes to finish</span></li>
                        <li className="selected"> <span className="name"> <a className="back" href="/mortgagequote/remortgage/mortgage-info" title="Back">Back</a>Applicant Profile </span> <span className="time-left">2 minutes to finish</span><span className="extra-gauge" ></span></li>
                        <li> <span className="name"> Contact Info </span> <span className="time-left">2 minutes to finish</span></li>
                        <li> <span className="name"> Your Rates </span> <span className="time-left">2 minutes to finish</span></li>
                        </ol>
                    </div>
                </div>
                <form method="POST" className="mortgage-form rate-detail-page search" onSubmit={handleSubmit}>
                    <div className="page-icon">
                        <div className="page-icon-inner">
                        <img src="/resources/images/mortgage/icons/rate-info.png" alt="Rate info icon" />
                        <div>Applicant Profile</div>
                        </div>
                    </div>
                    <fieldset>
                        <div className="field radio-buttons rate-type ">
                        <label aria-label="What type of rate are you interested in?"> What type of rate are you interested in? <a className="help-trigger">?</a> </label>
                        <div className="help">
                            <p><b>Mortgage Rate:</b><br />73.5% of UAE choose fixed rate mortgages, but this may or may not be the right option for you.</p>
                            <p>With a <b>fixed</b> rate mortgage, your rate and monthly payment will stay constant throughout the term of your mortgage.</p>
                            <p>With a <b>variable</b> rate mortgage, your rate will change together with the prime lending rate of your lender.</p>
                            <a className="close-help" title="Close"></a>
                        </div>
                        <ul className="options">
                            <li > <input type="radio" id="rate-type1" name="rate-type" value="fixed"  /> <label for="rate-type1"> Fixed </label></li>
                            <li> <input type="radio" id="rate-type2" name="rate-type" value="variable" /> <label for="rate-type2"> Variable </label></li>
                            <li> <input type="radio" id="rate-type3" name="rate-type" value="any" /> <label for="rate-type3"> Not sure </label></li>
                        </ul>
                        </div>
                        <div className="field radio-buttons rate-term ">
                        <label aria-label="What term are you interested in?"> What term are you interested in? <a className="help-trigger">?</a> </label>
                        <div className="help">
                            <p><b>Mortgage Term:</b><br />The mortgage term is the amount of time you commit to the rules, conditions, and interest rate you agreed upon with your current lender. Once this term is up, you may need to renegotiate your mortgage or extend it to a new term.</p>
                            <p><b><i>Note:</i></b> This is different than the amortization period, which refers to the number of years it will take you to pay off your mortgage completely.</p>
                            <a className="close-help" title="Close"></a>
                        </div>
                        <ul className="options">
                            <li> <input type="radio" id="rate-term1" name="rate-term" value="3" /> <label for="rate-term1"> 3 Years </label></li>
                            <li> <input type="radio" id="rate-term2" name="rate-term" value="5" checked="" /> <label for="rate-term2"> 5 Years </label></li>
                        </ul>
                        </div>
                        <div className="field money annual-income ">
                        <label for="annual-income"> What is your annual household income? <a className="help-trigger">?</a> </label>
                        <div className="help">
                            <p>Annual household income refers to the total amount of money you earn in a year from all sources, including your salary, investments, and any other sources of income. Please enter your approximate annual household income in the provided field.</p>
                            <a className="close-help" title="Close"></a>
                        </div>
                        <div className="input double-input">
                            <div className="first-input"> <input type="tel" className="money" id="annual-income" name="annual-income"  placeholder="" /></div>
                        </div>
                        </div>
                        <div className="field radio-buttons credit-score ">
                        <label aria-label="What is your credit score?"> What is your credit score? <a className="help-trigger">?</a> </label>
                        <div className="help">
                            <p>Your credit score is a numerical rating that reflects your creditworthiness and is based on your credit history. Lenders use this score to evaluate your ability to repay loans and manage credit responsibly. Please enter your approximate credit score in the provided field.</p>
                            <a className="close-help" title="Close"></a>
                        </div>
                        <ul className="options">
                            <li> <input type="radio" id="credit-score1" name="credit-score" value="720 or higher" checked="" /> <label for="credit-score1"> 720 or higher </label></li>
                            <li> <input type="radio" id="credit-score2" name="credit-score" value="660-719" /> <label for="credit-score2"> 660 - 719 </label></li>
                            <li> <input type="radio" id="credit-score3" name="credit-score" value="620-659" /> <label for="credit-score3"> 620 - 659 </label></li>
                            <li> <input type="radio" id="credit-score4" name="credit-score" value="619 or lower" /> <label for="credit-score4"> 619 or lower </label></li>
                        </ul>
                        </div>
                    </fieldset>
                    <div className="actions"> <button type="submit" className="call-to-action rate-details">Continue</button></div>
                    <div className="clients-number rate-details">
                        <div className="number"> <img src="/resources/images/lock-figure.png" alt="Lock figure" /> <span>23,242</span></div>
                        <p>UAE have compared rates in the last 24 hours</p>
                    </div>
                </form>
            </div>
            <footer className="form-footer renewal">
                <p className="compare-rates">Compare rates from UAE's leading banks and brokers</p>
                <div className="arrow-container"><span className="arrow left disabled"></span><span className="arrow right"></span></div>
                <div className="section-carousel"><img alt="Mortgage Logos" src="/resources/images/logo-strips/mortgage.png" /></div>
            </footer>
            </main>
    </div>
  );
}

export default Index;
