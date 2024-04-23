import style from "./notification.module.css"
import PropTypes from "prop-types"

function Notification({ message }) {
    return (
        <p className={style.notificationText}>{ message}</p>
    )
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Notification;