import React, { useState} from "react";

import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNautral] = useState(0);
  const [bad, setBad] = useState(0);
   
 const countTotal = () => {
    return good + neutral + bad
  };
  
  const handleFeedback = (option) => {
    option === "good" && setGood(good + 1);
    option === "neutral" && setNautral(neutral + 1);
    option === "bad" && setBad(bad + 1);
  };

 const countPercentage = () => {
    return Math.round((good / (good + neutral + bad)) * 100)
  };

    const total = countTotal();
    const positivePercentage = countPercentage();
    
    const handlefeedback = handleFeedback();
  

    return (

      <>
        <Section title="Please leave feedback" children={FeedbackOptions}>
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={handlefeedback}
          />
          </Section>
          <Section title="Statistics">
            {total === 0 ? (
              <Notification message="There is no feedback"/>) : (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={countTotal}
                positivePercentage={positivePercentage}
              />)}
          </Section>
       
        
      </>
    );
  };


export default App;