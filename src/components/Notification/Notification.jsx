import style from "./notification.module.css"
import PropTypes from "prop-types"

const Notification = (props) => {
    const { message } = props;
    return (
        <p className={style.notificationText}>{ message}</p>
    )
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Notification;