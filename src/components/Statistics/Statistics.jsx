import css from './Statistics.module.css'
import Notification from '../Notification'
import PropTypes from 'prop-types';


const Statistics = ({ good, neutral, bad, total, positivePercentage}) => {

    return (
        <>
            <h2 className={css.title}>Statistics</h2>
            { !total ? (
                <Notification
                    message="There is no feedback"
                />
            ) : (
            <ul className={css.list}>
                <li className={css.item}>Good:{good}</li>
                <li className={css.item}>Neutral:{neutral}</li>
                <li className={css.item}>Bad:{bad}</li>
                <li className={css.item}>Total:{total}</li>
                <li className={css.item}>Positive feedback:{positivePercentage}%</li>
            </ul>
            )}
        </>

    )

}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number,
    positivePercentage: PropTypes.number
}

export default Statistics