import { Seatbooking } from "../screens/Seatbooking";
import "../screens/Seatbooking.css";

export const Seats = () => {
  return (
    <div className="App">
      <div className="screen"></div>
      <div className="seat-booking">
        <Seatbooking />
        <Seatbooking />
        <Seatbooking />
      </div>
    </div>
  );
};
