import { useState } from "react";

const useTimer = (date) => {
    const [day, setDay] = useState();
    const [hour, setHour] = useState();
    const [minute, setMinute] = useState();
    const [second, setSecond] = useState();

    const countdown = () => {
        const countDate = new Date(date).getTime();
        const now = new Date().getTime();

        let interval = countDate - now;
        interval += (3 * 60 * 60 * 1000);
        // somando 3 horas para ajustar ao fuso horário de Brasília

        const seconds = 1000;
        const minutes = seconds * 60;
        const hours = minutes * 60;
        const days = hours * 24;

        const daysLeft = Math.floor(interval / days);
        const hoursLeft = Math.floor((interval % days) / hours);
        const minutesLeft = Math.floor((interval % hours) / minutes);
        const secondsLeft = Math.floor((interval % minutes) / seconds);

        setDay(daysLeft);
        setHour(hoursLeft);
        setMinute(minutesLeft);
        setSecond(secondsLeft);
    };
    setInterval(countdown, 1000);

    return [day, hour, minute, second];
};

export default useTimer;
