import "./CalendarEvent.css";

function CalendarEvent(props) {
    return (
        <div className="CalendarEvent">
            <button className="CalendarEventCancel">Cancel</button>
            <h3>Category</h3>
            <p>Event Name</p>
            <p>Time</p>
            <p>Location</p>
        </div>
    );
}

export default CalendarEvent;