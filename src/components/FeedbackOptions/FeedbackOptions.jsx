import PropTypes from 'prop-types';
import style from "./feedbackoptions.module.css"
import React, {Fragment} from'react';

function FeedbackOptions({ options, onLeaveFeedback}) {
    const optionKeys = Object.keys(options);
    
    return (<>
           <div className={style.feedbackcontainer}>
            {optionKeys.map((option,index) => {
                
                    return (
                    <li className={style.feedbackoptions} key={index}>
            <button
              type="button"
              key={index}
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
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
   
}

export default FeedbackOptions;
