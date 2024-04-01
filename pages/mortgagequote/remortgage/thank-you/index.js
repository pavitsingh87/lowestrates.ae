import React from 'react';
import { useEffect } from 'react';

import styles from '../../../../styles/styles.css';
import styles1 from '../../../../styles/thank-you.css';
import Header from '../../../../components/Header';
const Index = () => {
    useEffect(() => {
        function toggleDescription() {
          var description = document.querySelector('.description');
          var descriptionContent = document.getElementById('descriptionContent');
          
          description.classList.toggle('closed');
          if (descriptionContent.style.display === "none") {
            descriptionContent.style.display = "block";
          } else {
            descriptionContent.style.display = "none";
          }
        }
    
        // Attach event listener for the toggle
        const toggleButton = document.getElementById('toggleButton');
        toggleButton.addEventListener('click', toggleDescription);
    
        // Cleanup function
        return () => {
          toggleButton.removeEventListener('click', toggleDescription);
        };
      }, []);
  return (
    <div>
        <Header />
        <main>
            <div className="mortgage-wrapper renewal">
                <div className="title-gauge-block">
                    <div className="gauge">
                        <div className="gauge-progress">
                        <div className="progress" style={{ width: "100%" }}></div>
                        </div>
                        <ol className="page-name">
                        <li> <span className="name"> <a href="/mortgagequote/remortgage/province-info" title="Province Info">Province Info</a> </span></li>
                        <li> <span className="name"> <a href="/mortgagequote/remortgage/property-info" title="Property Info">Property Info</a> </span></li>
                        <li> <span className="name"> <a href="/mortgagequote/remortgage/mortgage-info" title="Mortgage Info">Mortgage Info</a> </span></li>
                        <li> <span className="name"> <a href="/mortgagequote/remortgage/applicant-profile" title="Applicant Profile">Applicant Profile</a> </span></li>
                        <li> <span className="name"> <a href="/mortgagequote/remortgage/your-rate-e" title="Contact Info">Contact Info</a> </span></li>
                        <li className="selected"> <span className="name"> Your Rates </span></li>
                        </ol>
                    </div>
                    <h1> Rate Found</h1>
                    <p className="title-description">Complete the last step below to reveal which banks and brokers are offering these rates</p>
                </div>
                <div className="results">
                    <div className="best-rate">
                        <h1>Your Best Rate</h1>
                        <div className="partner">
                        <div className="best-rate-details">
                            <h5>4.79%</h5>
                            <div> 5-year fixed</div>
                        </div>
                        <div className="logo"> <img src="/resources/images/mortgage/logos/rocketmortgage3.png" alt="Rocket Mortgage logo" /></div>
                        <div className="partner-action"> Call us to complete your application and secure your rate.</div>
                        </div>
                        <a className="call-to-action" href="tel:1-833-420-2157"> Call us at <span>1-833-420-2157</span> </a>
                        <h2>More details</h2>
                        <div className="description closed collapse">
      <h4>
        <span id="toggleButton">About Rocket Mortgage</span>
       
      </h4>
      <div id="descriptionContent">
        <p>Rocket Mortgage, with UAE operations proudly based in Windsor, Ontario, enables the dream of homeownership and financial freedom through its obsession with an industry-leading, digital-driven client experience.</p>
        <p>We strive to create certainty around life’s most complex moments, working with borrowers in any financial situation to find your tailored mortgage solution.</p>
        <p>Rocket’s simple online application process can be completed from home and their client portal makes document submission and tracking loan progress easy and straightforward.</p>
        <p>From getting a quote to completing your application, Rocket is here to help you find your ideal mortgage solution and achieve your financial goals.</p>
        <p>For more information visit RocketMortgage.ca</p>
        <p>FSRA License #: 13214</p>
      </div>
    </div>
                    </div>
                    <section className="rates">
                        <h3>Your Other Quotes</h3>
                        <div className="subheader">We compared the market so you can be confident you’re getting the best price. Here’s how your lowest rate compares.</div>
                        <div className="other" data-see-more="See more">
                      
                            {/* Rates list goes here */}
                            <ol className="other-rates">
                                <li>
                                    <div className="logo">
                                    <img src="/resources/images/mortgage/logos/rocketmortgage3.png" alt="Rocket Mortgage logo" />
                                    </div>
                                    <div className="rate-details">
                                    <div className="best">Best</div>
                                    <h5>4.79 %</h5>
                                    <div> 5-year fixed</div>
                                    </div>  
                                </li>
                                
                            </ol>
                        
                        </div>
                    </section>
                </div>
            </div>
        </main>

    </div>
  );
}

export default Index;
