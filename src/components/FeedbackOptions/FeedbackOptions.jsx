import PropTypes from 'prop-types';
import style from "./feedbackoptions.module.css"
import React from'react';

const FeedbackOptions = (props) =>{
  const { options, onLeaveFeedback } = props;
    const optionKeys = Object.keys(options);
    
    return (<>
           <div className={style.feedbackcontainer}>
            {optionKeys.map((option,index) => {
                
                    return (
                    <li className={style.feedbackoptions} key={index}>
            <button
              type="button"
              name={option}
              value={option}
              onClick={onLeaveFeedback}
              className={style.feedbackbtn}
            >
              {option}
            </button>
          </li>)
                })}
        </div>
        </>)
       
};


FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
   
}

export default FeedbackOptions;
