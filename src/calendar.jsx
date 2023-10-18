import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const eventDate = new Date("2023-10-31T08:00:00"); // Ngày giờ sự kiện
  const eventEndDate = new Date("2023-10-31T11:00:00"); // Ngày giờ sự kiện

  const [countdownD, setCountdownD] = useState("");
  const [countdownH, setCountdownH] = useState("");
  const [countdownM, setCountdownM] = useState("");
  const [countdownS, setCountdownS] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setCountdownD(`${days}`);
        setCountdownH(`${hours}`);
        setCountdownM(`${minutes}`);
        setCountdownS(`${seconds}`);
      } else {
        clearInterval(timer);
        setCountdownD("0");
        setCountdownH("0");
        setCountdownM("0");
        setCountdownS("0");
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleOpenGoogleCalendar = () => {
    const eventName = "Lễ cưới của Chú rể Tuấn Anh và Cô dâu Hoàng Yến"; // Tên sự kiện
    const eventDescription =
      "Thiệp cưới Online của Chú rể Tuấn Anh và Cô dâu Hoàng Yến."; // Mô tả sự kiện
    const formattedEventDate = eventDate.toISOString().replace(/[-:.]/g, "");
    const formattedEventEndDate = eventEndDate
      .toISOString()
      .replace(/[-:.]/g, "");

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      eventName
    )}&details=${encodeURIComponent(
      eventDescription
    )}&dates=${formattedEventDate}/${formattedEventEndDate}&location&ctz=Asia/Saigon`;

    window.open(googleCalendarUrl, "_blank");
  };

  return (
    <div className="my-10 flex flex-col justify-center items-center">
      <h2 className="text-center my-6 text-xl">
        Mình cùng đếm ngược thời gian
      </h2>
      <div className="grid grid-cols-4 gap-4 my-6">
        <div className="flex flex-col items-center text-xs p-4 border border-[#6e8058] rounded-xl shadow shadow-slate-400">
          <span className="text-3xl font-semibold">{countdownD}</span>
          NGÀY
        </div>
        <div className="flex flex-col items-center text-xs p-4 border border-[#6e8058] rounded-xl shadow shadow-slate-400">
          <span className="text-3xl font-semibold">{countdownH}</span>
          GIỜ
        </div>
        <div className="flex flex-col items-center text-xs p-4 border border-[#6e8058] rounded-xl shadow shadow-slate-400">
          <span className="text-3xl font-semibold">{countdownM}</span>
          PHÚT
        </div>
        <div className="flex flex-col items-center text-xs p-4 border border-[#6e8058] rounded-xl shadow shadow-slate-400">
          <span className="text-3xl font-semibold">{countdownS}</span>
          GIÂY
        </div>
      </div>
      <button
        onClick={handleOpenGoogleCalendar}
        className="flex items-center justify-center p-4 my-2 rounded-md border border-[#6e8058] bg-white hover:bg-[#efeeea] "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
        >
          <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z" />
        </svg>
        <span className="px-2 text-lg">Save our date</span>
      </button>
    </div>
  );
};

export default CountdownTimer;
