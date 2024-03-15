import CalendarEvent from "./CalenderEvent";
import "./DayContainer.css";

function DayContainer(props) {
    return (
        <div className="DayContainer">
            <h2>Date</h2>
            <CalendarEvent />
            <CalendarEvent />
            <CalendarEvent />
        </div>
    );
}

export default DayContainer;