import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import Countdown from '../components/Countdown';
import CountdownDisplay from '../components/CountdownDisplay';

const IndexPage = () => (
  <Layout>
    <div className="Wrapper">
      <main className="Main">
        <Countdown toDate={new Date(2019, 5, 14)}>
          {props => (
            <>
              <header>
                <h1 className="Title">The Last of Us Part&nbsp;II</h1>
                {!props.isComplete && (
                  <p className="Subtitle">Will release in</p>
                )}
              </header>
              {props.isComplete ? (
                <p className="Title CompleteMessage zoom-in">
                  <Helmet htmlAttributes={{ class: 'is-complete' }} />
                  Is out now!{' '}
                  <span role="img" aria-label="Party popper">
                    🎉
                  </span>
                </p>
              ) : (
                <>
                  <Helmet htmlAttributes={{ class: 'is-counting' }} />
                  <CountdownDisplay
                    months={props.months}
                    days={props.days}
                    asDays={props.asDays}
                    hours={props.hours}
                    minutes={props.minutes}
                    seconds={props.seconds}
                  />
                </>
              )}
            </>
          )}
        </Countdown>
      </main>
    </div>
    <footer>
      <a
        className="Github"
        href="https://github.com/Pustur"
        rel="noopener"
        title="See on Github"
      >
        <svg
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="Github__path"
            d="m12 0c-6.6 0-12 5.4-12 12 0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6s0-1.2 0-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.4 1 .2-.8.5-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.9.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.9 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4 0-6.6-5.4-12-12-12z"
          />
        </svg>
      </a>
    </footer>
  </Layout>
);

export default IndexPage;
