import PropTypes from 'prop-types';
import style from "./statistics.module.css"

function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <>
            <div className={style.statcontainer}>
                <h3 className={style.stathead}>Statistics</h3>
                <ul className={style.statlist}>
                    <li>Good: {good}</li>
                    <li>Neutral: {neutral}</li>
                    <li>Bad: {bad}</li>
                    <li>Total: {total}</li>
                    <li> Positive feedback: {positivePercentage}%</li>
                </ul>
            </div>
        </>);
    
};

Statistics.propTypes = {
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        positivePercentage: PropTypes.number.isRequired,
    };

export default Statistics;