import { nanoid } from 'nanoid'
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';



const FeedbackOptions = ({options, onLeaveFeedback}) =>{
    return (
        <ul className={css.list}>
            {options.map(el => {
                return (
                    <li className={css.item} key={nanoid()}>
                        <button
                         type='button'
                          className={css.button}
                           onClick ={() => onLeaveFeedback(el.name)}
                           >
                            {el.name}
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.exact({
        name: PropTypes.string.isRequired
    })),
    onLeaveFeedback:PropTypes.func
}

export default FeedbackOptions