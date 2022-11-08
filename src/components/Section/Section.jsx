import css from './Section.module.css';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics'
import PropTypes from 'prop-types';


const options = [
    {
        name: 'good'
    },
    {
        name: 'neutral'
    },
    {
        name: 'bad'
    },
]

 const Section = ({title,good,bad,neutral,total,positivePercentage, onLeaveFeedback}) => {
    
    return (
        <section className={css.section}>
            <h1>{title}</h1>
            <FeedbackOptions
                options = {options}
                onLeaveFeedback = {onLeaveFeedback}
            />
            <Statistics
            good = {good}
            neutral = {neutral}
            bad = {bad}
            total = {total()}
            positivePercentage = {positivePercentage()}
            />

        </section>
       
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    total: PropTypes.func,
    positivePercentage: PropTypes.func,
    onLeaveFeedback: PropTypes.func

}

export default Section