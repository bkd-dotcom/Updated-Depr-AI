import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial17-text31">Testimonials</span>
              </Fragment>
            )}
          </h2>
          <span className="testimonial17-text11 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text25">
                  Read what our users have to say about their experience with
                  Dep.AI
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong className="thq-body-large">
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonial17-text29">John Doe</span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text36">
                            Software Engineer
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text14 thq-body-small">
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text26">
                        Dep.AI has been a game-changer for me. It helped me
                        understand my mental health better and take necessary
                        steps towards improvement.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong className="thq-body-large">
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="testimonial17-text28">
                            Jane Smith
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text37">Teacher</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text17 thq-body-small">
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text30">
                        I was skeptical at first, but after using Dep.AI, I
                        realized how important it is to prioritize mental
                        health. Thank you for this amazing tool!
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong className="thq-body-large">
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="testimonial17-text24">
                            David Johnson
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text27">
                            Marketing Manager
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text20 thq-body-small">
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text35">
                        Dep.AI provided me with valuable insights into my mental
                        well-being. I highly recommend it to anyone looking to
                        monitor their mental health.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong className="thq-body-large">
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="testimonial17-text33">
                            Emily Brown
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text32">Student</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text23 thq-body-small">
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text34">
                        As a student dealing with stress, Dep.AI has been a
                        lifeline for me. It&apos;s easy to use and has helped me
                        stay on track with my mental health goals.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author3Name: undefined,
  author4Alt: 'Emily Brown Image',
  content1: undefined,
  review1: undefined,
  author3Position: undefined,
  author2Name: undefined,
  author1Name: undefined,
  author3Alt: 'David Johnson Image',
  review2: undefined,
  heading1: undefined,
  author2Alt: 'Jane Smith Image',
  author1Alt: 'John Doe Image',
  author3Src:
    'https://images.unsplash.com/photo-1556227703-d6f677369617?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODgxNTE5Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Src:
    'https://images.unsplash.com/photo-1579783901467-31b604eac7a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODgxNTE5Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Position: undefined,
  author4Name: undefined,
  review4: undefined,
  review3: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1695746998520-a914071b6ee4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODgxNTE5Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Position: undefined,
  author4Src:
    'https://images.unsplash.com/36/xIsiRLngSRWN02yA2BbK_submission-photo-7.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODgxNTE5Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Position: undefined,
}

Testimonial17.propTypes = {
  author3Name: PropTypes.element,
  author4Alt: PropTypes.string,
  content1: PropTypes.element,
  review1: PropTypes.element,
  author3Position: PropTypes.element,
  author2Name: PropTypes.element,
  author1Name: PropTypes.element,
  author3Alt: PropTypes.string,
  review2: PropTypes.element,
  heading1: PropTypes.element,
  author2Alt: PropTypes.string,
  author1Alt: PropTypes.string,
  author3Src: PropTypes.string,
  author2Src: PropTypes.string,
  author4Position: PropTypes.element,
  author4Name: PropTypes.element,
  review4: PropTypes.element,
  review3: PropTypes.element,
  author1Src: PropTypes.string,
  author1Position: PropTypes.element,
  author4Src: PropTypes.string,
  author2Position: PropTypes.element,
}

export default Testimonial17
