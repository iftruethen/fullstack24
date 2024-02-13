import './../index.css'

const Notification = ({message, notificationType}) => {
    if (message === null) {
        return null
    }
    if (notificationType === "positive") {
        return (
            <>
                <div className="positiveNotification">{message}</div>
            </>
        )
    }
    return (
        <>
            <div className="negativeNotification">{message}</div>
        </>
    )
}

export default Notification