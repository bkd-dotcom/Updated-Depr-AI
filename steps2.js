import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './steps2.css'

const Steps2 = (props) => {
  return (
    <div className="steps2-container1 thq-section-padding">
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container2 thq-grid-2">
          <div className="steps2-section-header">
            <h2 className="thq-heading-2">
              Discover the Power of Our Products
            </h2>
            <p className="thq-body-large">
              It is a powerful AI tool which can help people get cured of their
              depression problems without ever going to a therapist. It is a
              startup with the hope of growing among the people and being a part
              of their daily life.
            </p>
            <div className="steps2-actions"></div>
          </div>
          <div className="steps2-container3">
            <div className="steps2-container4 thq-card">
              <h2 className="thq-heading-2">
                {props.step1Title ?? (
                  <Fragment>
                    <span className="steps2-text27">
                      Sign up for an account
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text13 thq-body-small">
                {props.step1Description ?? (
                  <Fragment>
                    <span className="steps2-text25">
                      Create a new account on Dep.AI to start tracking your
                      mental health status.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text14 thq-heading-3">01</label>
            </div>
            <div className="steps2-container5 thq-card">
              <h2 className="thq-heading-2">
                {props.step2Title ?? (
                  <Fragment>
                    <span className="steps2-text28">
                      Complete the questionnaire
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text16 thq-body-small">
                {props.step2Description ?? (
                  <Fragment>
                    <span className="steps2-text29">
                      Answer 10 questions related to your mental health to
                      assess your current status.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text17 thq-heading-3">02</label>
            </div>
            <div className="steps2-container6 thq-card">
              <h2 className="thq-heading-2">
                {props.step3Title ?? (
                  <Fragment>
                    <span className="steps2-text24">
                      Audio recognition test
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text19 thq-body-small">
                {props.step3Description ?? (
                  <Fragment>
                    <span className="steps2-text31">
                      Participate in an audio recognition test to determine if
                      you are showing signs of depression.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text20 thq-heading-3">03</label>
            </div>
            <div className="steps2-container7 thq-card">
              <h2 className="thq-heading-2">
                {props.step4Title ?? (
                  <Fragment>
                    <span className="steps2-text26">
                      Receive results and recommendations
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text22 thq-body-small">
                {props.step4Description ?? (
                  <Fragment>
                    <span className="steps2-text30">
                      Get instant feedback on your mental health status and
                      receive recommendations on next steps.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text23 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps2.defaultProps = {
  step3Title: undefined,
  step1Description: undefined,
  step4Title: undefined,
  step1Title: undefined,
  step2Title: undefined,
  step2Description: undefined,
  step4Description: undefined,
  step3Description: undefined,
}

Steps2.propTypes = {
  step3Title: PropTypes.element,
  step1Description: PropTypes.element,
  step4Title: PropTypes.element,
  step1Title: PropTypes.element,
  step2Title: PropTypes.element,
  step2Description: PropTypes.element,
  step4Description: PropTypes.element,
  step3Description: PropTypes.element,
}

export default Steps2
