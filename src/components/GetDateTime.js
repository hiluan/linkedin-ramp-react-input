import { useEffect, useState, useRef } from "react";

const GetDateTime = (bool) => {
  const locale = "en";
  const [today, setDate] = useState(new Date()); // Save the current date to be able to trigger an update
  const timer = useRef(null);

  useEffect(() => {
    if (bool)
      timer.current = setInterval(() => {
        // Creates an interval which will update the current data every minute
        // This will trigger a rerender every component that uses the useDate hook.
        setDate(new Date());
      }, 1000);

    return () => {
      clearInterval(timer.current); // Return a funtion to clear the timer so that it will stop being called on unmount
    };
  }, [bool]);

  const day = today.toLocaleDateString(locale, { weekday: "long" });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, {
    month: "long"
  })}\n\n`;

  const hour = today.getHours();
  const wish = `Good ${
    (hour < 12 && "Morning") || (hour < 17 && "Afternoon") || "Evening"
  }! `;

  const time = today.toLocaleTimeString(locale, {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });

  return {
    date,
    time,
    wish
  };
};

export default GetDateTime;

// reference:
// 1. https://stackoverflow.com/questions/63219753/how-to-show-time-and-date-in-realtime-in-react-js
// 2. https://stackoverflow.com/questions/60131947/stopping-a-timer-in-useeffect
