// pages/index.js
import React from 'react';
import styles from "../styles/styles.css";
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <section class="intro mortgage">
          <h1>Instantly compare current <em>mortgage</em> rates in Dubai for free. </h1>
          <p>Compare mortgage rates and save up to AED 11,944 over 5 years* with LowestRates.ae.</p>
        </section>
        <section class="form-container mortgage-form-selection with-rates">
          <form class="container rates">
            <h2 class="heading-main">Today’s lowest mortgage rates in:</h2>
            <label class="hidden-label" for="province">Select a emirates</label>
            <select name="province" id="province">
              <option value="all">All of UAE</option>
              <option value="db" selected="selected">Dubai</option>
              <option value="ad">Abu Dhabi</option>
              <option value="sh">Sharjah</option>
              <option value="aj">Ajman</option>
              <option value="ra">Ras Al Khaimah</option>
              <option value="ua">Umm Al Quwain</option>
            </select>
            <div class="lowest-rates">
              <div class="rate">
                <p class="percentage best-variable">7.45%</p>
                <p>5-Year Variable</p>
              </div>
              <div class="rate">
                <p class="percentage best-fixed">5.34%</p>
                <p>5-Year Fixed</p>
              </div>
            </div>
          </form>
          <div class="container ctas">
            <p>Compare rates from 50+ of UAE's top banks and brokers in 3 minutes.</p>
            <div>
              <div class="actions">
                <a href="/mortgagequote/remortgage/emirates-info/" class="call-to-action">
                  <b>I'm renewing my mortgage</b>
                </a>
                <a href="/mortgagequote/purchase" class="call-to-action">
                  <b>I'm buying a home</b>
                </a>
                <a href="/mortgagequote/refinance" class="call-to-action">
                  <b>I'm refinancing my home</b>
                </a>
              </div>
            </div>
            <div class="sticky-item">
              <form action="">
                <div class="clear">
                  <a class="sticky-logo" href="/" rel="home">&nbsp;</a>
                  <div class="sticky-form-items">
                    <label for="mortgage-types">Select an option:</label>
                    <select name="mortgage-types" id="mortgage-types">
                      <option value="remortgage" selected>I'm renewing my mortgage</option>
                      <option value="purchase">I'm buying a home</option>
                      <option value="refinance">I'm refinancing my home</option>
                    </select>
                    <button class="call-to-action">Get Started</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section class="partners logos-strip-carousel text">
          <div class="logos">
            <p>Compare Dubai mortgage rates from UAE’s top banks and brokers.</p>
          </div>
        </section>
        <section class="visitors">
          <div class="content">
            <div class="icon-container"></div>
            <h2 class="visitors-total">
              <span>34,129</span> UAE’s
            </h2>
            <p>have compared rates and saved money over the last 24 hours</p>
          </div>
        </section>
        <section class="how-comparing-works">
          <h2>How comparing Dubai <span>mortgage</span> quotes works. Hint: it’s free! </h2>
          <div class="blocks-container">
            <div class="block share">
              <h3>Share</h3>
              <p>First, choose whether you're buying a new home, refinancing or renewing, and fill in a few details. It only takes 3 minutes, and it’s 100% confidential.</p>
            </div>
            <div class="block compare">
              <h3>Compare</h3>
              <p>Next, we’ll show you quotes from 50+ UAEs banks and brokers. It’s free, with no commitment.</p>
            </div>
            <div class="block save">
              <h3>Save</h3>
              <p>When you find the best quote, secure your Dubai mortgage rate by talking to a licensed broker or agent.</p>
            </div>
          </div>
        </section>
        <section class="text no-padding no-background">
          <h2>Compare the best mortgage rates in Dubai</h2>
          <p>We know that hunting for the best mortgage rates in Dubai can be a challenge.</p>
          <p>Don’t worry — we’re here to save you time during your search for cheap mortgage rates in Dubai, and to save you money on your mortgage payments. lowestrates.ae brings Dubains the best mortgage rates from the 50+ banks and brokers across UAE.</p>
          <p>Our free, no-obligation service does the legwork by comparing the market and bringing you a selection of the lowest rates currently offered in your area. In just a few minutes, you can see who has the best mortgage rates in Dubai on any given day.</p>
          <p>Keep reading to learn more about the state of Dubai’s housing market and how you can benefit from comparing Dubai mortgage rates on lowestrates.ae.</p>
        </section>
        <section class="mortgage-rate-information">
          <div class="row">
            <h2>The best current mortgage rates in UAE</h2>
            <select name="province" id="province">
              <option value="all">All of UAE</option>
              <option value="db" selected="selected">Dubai</option>
              <option value="ad">Abu Dhabi</option>
              <option value="sh">Sharjah</option>
              <option value="aj">Ajman</option>
              <option value="ra">Ras Al Khaimah</option>
              <option value="ua">Umm Al Quwain</option>
            </select>
          </div>
          <p>Check out today's best mortgage rates in UAE by type and term.</p>
        </section>
      </main>
    </div>
  );
};

export default Home;
