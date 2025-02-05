import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Hero17 from '../components/hero17'
import Navbar8 from '../components/navbar8'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Steps2 from '../components/steps2'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Cute Experienced Crane</title>
        <meta property="og:title" content="Cute Experienced Crane" />
      </Helmet>
      <Hero17
        text={
          <Fragment>
            <span className="home-text10">Link</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text11">Get Started</span>
          </Fragment>
        }
        textUrl="https://www.cdc.gov/mentalhealth/learn/index.htm"
        content1={
          <Fragment>
            <span className="home-text12">
              Take the first step towards understanding your mental well-being.
              Answer a few questions and let Dep.AI provide insights into your
              mental health status.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text13">
              Track Your Mental Health with Depr AI
            </span>
          </Fragment>
        }
        image4Src="/istockphoto-517188688-612x612-1500w.jpg"
        image7Src="/istockphoto-517188688-612x612-1500w.jpg"
      ></Hero17>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text14">#home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text15">about</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text16">test</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text17">results</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text18">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text19">About</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text20">Take the Test</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text21">Results</span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="home-text22">Link</span>
          </Fragment>
        }
        text4={
          <Fragment>
            <span className="home-text23">Link</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text24">Get Started</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text25">Take the Test</span>
          </Fragment>
        }
        textUrl="http://127.0.0.1:5500/Register1.html"
        textUrl2="https://bkd-dotcom.github.io/Depr-AI-web/"
        textUrl4="https://bkd-dotcom.github.io/HackPsu/"
        page1Description={
          <Fragment>
            <span className="home-text26">
              Welcome to Dep.AI, track your mental health status here.
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text27">
              Learn more about Dep.AI and how we can help you.
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text28">
              Take the depression test to assess your mental health.
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text29">
              View your test results and get guidance on next steps.
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text30">Mental Health Tracking</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text31">Depression Detection</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text32">Personalized Recommendations</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text33">
              Monitor mental well-being over time
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text34">
              Audio recognition for depression detection
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text35">
              Receive personalized recommendations
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text36">Start Assessment</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text37">
              Answer 10 simple questions and find out if you might be suffering
              from depression.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text38">
              Take the first step towards mental well-being
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text39">Track Your Mental Health</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text40">Audio Recognition</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text41">Depression Assessment</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text42">
              Easily track your mental health status by answering 10 simple
              questions designed to assess your well-being.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text43">
              Our advanced audio recognition technology analyzes your voice to
              provide insights into your mental health condition.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text44">
              Find out if you are suffering from depression through our
              comprehensive assessment based on your responses and audio
              analysis.
            </span>
          </Fragment>
        }
      ></Features25>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text45">Sign up for an account</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text46">Complete the questionnaire</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text47">Audio recognition test</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text48">
              Receive results and recommendations
            </span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text49">
              Create a new account on Dep.AI to start tracking your mental
              health status.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text50">
              Answer 10 questions related to your mental health to assess your
              current status.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text51">
              Participate in an audio recognition test to determine if you are
              showing signs of depression.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text52">
              Get instant feedback on your mental health status and receive
              recommendations on next steps.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text53">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text54">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text55">Contact Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text56">FAQs</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text57">Terms of Use</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text58">Terms and Conditions</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text59">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text60">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
