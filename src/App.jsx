import { useEffect, useRef, useState } from "react";
import {
  man,
  main1,
  main2,
  main3,
  bgTks,
  bgInf,
  girl,
  arrow,
  arrow2,
  dona,
  footer,
  footer2,
  girlInfo,
  heart,
  heart2,
  manInfo,
  ring,
  ring2,
  sl1,
  sl2,
  sl3,
  map,
  contact1,
  contact2,
  LS1,
  LS2,
  LS3,
  LS4,
  UntilIFoundU,
} from "./assets/index";
import CountdownTimer from "./calendar";

function App() {
  const [select, setSelect] = useState("Khách nhà gái");
  const [join, setJoin] = useState("Sẵn sàng");
  const [showInput, setShowInput] = useState(false);
  const [music, setMusic] = useState(false);

  const audioRef = useRef(null);
  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      if (music) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }, [music]);
  const handlePlay = () => {
    setMusic(!music);
  };
  const handlePause = () => {
    setMusic(!music);
  };

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    setShowInput(selectedOption === "Đi chung");
  };

  const slideLeft = () => {
    const container = document.getElementsByClassName("slide")[0];
    container.scrollLeft -= container.offsetWidth;
  };

  const slideRight = () => {
    const container = document.getElementsByClassName("slide")[0];
    container.scrollLeft += container.offsetWidth;
  };

  return (
    <div className="flex flex-col items-center">
      <audio ref={audioRef} id="myAudio" src={UntilIFoundU}></audio>

      <div className=" text-[#6e8058] bg-[#efeeea] h-auto sm:w-[480px] md:w-[480px] lg:w-[480px] ">
        <img src={main1} alt="" />

        {/* about us */}
        <div className="my-10 px-6 text-center">
          <h3 className="py-4 text-3xl underline">Về chúng tôi</h3>
          {/* man */}
          <div className="my-4">
            <div className="flex flex-col justify-center items-center">
              <img className="w-[20%] h-auto" src={heart} alt="" />
              <img className="w-[20%] h-auto" src={arrow} alt="" />
            </div>
            <div className="grid grid-cols-2 ">
              <img
                className="relative left-10 rounded-md shadow-md shadow-slate-400 rotate-[-14deg] w-[56%] h-auto"
                src={manInfo}
                alt=""
              />
              <div className="flex flex-col justify-center items-center">
                <p>Hoàng Nam</p>
                <p>14.05</p>
                <img className="w-[20%] h-auto" src={man} alt="" />
              </div>
            </div>
            <div className="text-start p-1 my-10">
              Là một người hiền lành và ít nói. Luôn coi trọng tình cảm và yêu
              thương gia đình. Với anh: “Gia đình là điểm tựa vững chắc nhất và
              là bến đỗ bình yên không đâu sánh bằng đối với mỗi con người.
            </div>
          </div>
          {/* ring */}
          <div className=" flex flex-col justify-center items-center my-10">
            <img className=" w-full h-auto" src={ring} alt="" />
          </div>
          {/* girl */}
          <div className="my-4">
            <div className="flex flex-col justify-center items-center">
              <img className="w-[20%] h-auto" src={heart} alt="" />
              <img className="w-[20%] h-auto" src={arrow} alt="" />
            </div>
            <div className="grid grid-cols-2 ">
              <div className="flex flex-col justify-center items-center">
                <p>Khánh An</p>
                <p>20.03</p>
                <img className="w-[20%] h-auto" src={girl} alt="" />
              </div>
              <img
                className="relative left-8 top-6 rounded-md shadow-md shadow-slate-400 rotate-[14deg] w-[56%] h-auto"
                src={girlInfo}
                alt=""
              />
            </div>
            <div className="text-start p-1 my-10">
              Là một người hiền lành và ít nói. Luôn coi trọng tình cảm và yêu
              thương gia đình. Với anh: “Gia đình là điểm tựa vững chắc nhất và
              là bến đỗ bình yên không đâu sánh bằng đối với mỗi con người.
            </div>
          </div>
        </div>

        {/* love story */}
        <div className="my-10 px-6 text-center">
          <h3 className="py-4 text-3xl underline">Câu Chuyện Tình Yêu</h3>
          <div>
            <div className="grid grid-cols-2 my-10">
              <div className="flex flex-col justify-center items-center">
                <img className="w-[40%] h-auto" src={ring2} alt="" />
                <p className="my-2 p-2">10.10.2018</p>
                <img className="w-[60%] h-auto" src={arrow} alt="" />
              </div>
              <img
                className="relative left-4 top-6 rounded-md shadow-md shadow-slate-400 rotate-[4deg] w-[80%] h-auto"
                src={LS1}
                alt=""
              />
            </div>
            <div>
              <h4 className="mb-4 text-xl">Lần Đầu Gặp Mặt</h4>
              <p>
                Tôi đã từng không tin vào tình yêu online. Đã từng nghĩ làm sao
                có thể thích một người chưa từng gặp mặt? Ngày ấy vu vơ đăng một
                dòng status trên facebook than thở, vu vơ đùa giỡn nói chuyện
                với một người xa lạ chưa từng quen. Mà nào hay biết, 4 năm sau
                người ấy lại là chồng mình.
              </p>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 mt-10 mb-6">
              <img
                className="relative left-4 top-6 rounded-md shadow-md shadow-slate-400 rotate-[4deg] w-[80%] h-auto"
                src={LS2}
                alt=""
              />
              <div className="flex flex-col justify-center items-center">
                <img className="w-[40%] h-auto" src={heart2} alt="" />
                <p className="">24.12.2020</p>
                <img className="w-[60%] h-auto" src={arrow2} alt="" />
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-xl">Bắt Đầu Hẹn Hò</h4>
              <p>
                Ngày ấy, tôi 25! Một mình giữa phố thị nấp tập. Mỗi chiều cuối
                tuần thường chạy xe vòng quanh qua những con phố, len lỏi trong
                từng dòng người tấp nập. Nhưng rồi một ngày đẹp trời, người con
                trai ấy xuất hiện, nắm tay rồi thủ thỉ vào tai: “Hy vọng sau này
                anh được làm những điều ấy cùng em”.
              </p>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 my-10">
              <div className="flex flex-col justify-center items-center">
                <img className="w-[40%] h-auto" src={ring2} alt="" />
                <p className="my-2 p-2">20.03.2022</p>
                <img className="w-[60%] h-auto" src={arrow} alt="" />
              </div>
              <img
                className="relative left-4 top-6 rounded-md shadow-md shadow-slate-400 rotate-[4deg] w-[80%] h-auto"
                src={LS3}
                alt=""
              />
            </div>
            <div>
              <h4 className="mb-4 text-xl">Giây Phút Cầu Hôn</h4>
              <p>
                5 năm bên nhau không phải là quãng thời gian quá dài, nhưng đủ
                cho chúng ta nhận ra được rất nhiều điều. Chúng ta từ 2 con
                người xa lạ mà bước vào cuộc đời nhau. Và giờ đây chúng ta tiếp
                tục cùng nhau sang trang mới. Giây phút anh ngỏ lời “Làm vợ anh
                nhé!”, em đã nguyện ý đời này, đi đâu cũng được, miễn là cùng
                anh.
              </p>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 mt-10 mb-4">
              <img
                className="relative left-4 top-6 rounded-md shadow-md shadow-slate-400 rotate-[4deg] w-[80%] h-auto"
                src={LS4}
                alt=""
              />
              <div className="flex flex-col justify-center items-center">
                <img className="w-[40%] h-auto" src={heart} alt="" />
                <p className="mt-4">01.01.2023</p>
                <img className="w-[60%] h-auto" src={arrow2} alt="" />
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-xl">Ngày Chung Đôi</h4>
              <p>
                “Tiếng trái tim đôi ta đập thật nhanh. Thì thầm lời yêu thương.
                Ngày tình về chung đôi...” Sau bao nhiêu chờ đợi, cuối cùng ngày
                vui của chúng ta cũng tới rồi. Cảm ơn vì mình đã luôn là một
                phần trong cuộc sống của nhau. Em và anh không chỉ là người yêu
                mà chúng ta còn là tri kỷ. Ngày hôm nay, em sẽ là cô dâu của anh
              </p>
            </div>
          </div>
        </div>
        <img src={main2} alt="" />
        {/* photo */}
        <div className="my-16 px-2 text-center">
          <h3 className="my-6 text-2xl">Photo Gallery</h3>
          <div className="relative group">
            <div
              onClick={slideLeft}
              className="absolute left-[6px] top-1/2 translate-y-[-50%] text-lg p-2 cursor-pointer group-hover:scale-125"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
              >
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
              </svg>
            </div>
            <div className="flex overflow-x-scroll scroll-smooth slide">
              <img
                id=" slide"
                className="w-full h-auto object-cover rounded "
                src={sl1}
                alt=""
              />
              <img
                id=" slide"
                className="w-full h-auto object-cover rounded "
                src={sl2}
                alt=""
              />
              <img
                id=" slide"
                className="w-full h-auto object-cover rounded "
                src={sl3}
                alt=""
              />
              <img
                id=" slide"
                className="w-full h-auto object-cover rounded "
                src={sl2}
                alt=""
              />
            </div>
            <div
              onClick={slideRight}
              className="absolute right-[6px] top-1/2 translate-y-[-50%] text-lg p-2 cursor-pointer group-hover:scale-125"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
              >
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </div>
          </div>
        </div>
        <img src={main3} alt="" />

        {/*calendar  */}
        <div className="px-6">
          <CountdownTimer />
        </div>

        {/* thanks */}
        <div className="relative my-10">
          <img className="w-full h-auto" src={bgTks} alt="" />
          <p className="absolute top-1/2 translate-y-[-50%] p-6 text-center text-[17px]">
            Đám cưới của chúng tôi chắc chắn sẽ kém vui đi rất nhiều nếu thiếu
            đi sự hiện diện của bạn. Cảm ơn bạn vì đã trở thành một phần quan
            trọng trong ngày đặc biệt của chúng tôi!
          </p>
        </div>

        {/* info */}
        <div>
          <img className="my-4" src={bgInf} alt="" />
          <div className="my-6 px-6">
            <div className="text-center ">
              <h3 className="text-xl py-2">Thông tin phản hồi</h3>
              <p className="py-2 text-sm">
                Để thuận tiện cho việc sắp xếp chỗ ngồi, vui lòng phản hồi giúp
                vợ chồng mình nhé!
              </p>
            </div>
            {/* guest */}
            <div className="grid grid-cols-2 gap-4 py-10 ">
              <div
                onClick={() => setSelect("Khách nhà gái")}
                className={`flex flex-col items-center justify-center p-3 bg-white rounded-lg cursor-pointer
              ${
                select === "Khách nhà gái"
                  ? "border-[2px] border-[#6e8058]"
                  : "border-[2px] border-[#d3d3d3]"
              }`}
              >
                <svg
                  version="1.1"
                  id=" slideayer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="38px"
                  viewBox="0 0 335 455"
                  enableBackground="new 0 0 335 455"
                  xmlSpace="preserve"
                >
                  <image
                    id=" slidemage0"
                    width="100%"
                    height="100%"
                    x="0"
                    y="0"
                    href="data:image/png;base64,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"
                  ></image>
                </svg>
                <p className="py-1">Khách nhà gái</p>
              </div>
              <div
                onClick={() => setSelect("Khách nhà trai")}
                className={`flex flex-col items-center justify-center p-3 bg-white rounded-lg cursor-pointer
              ${
                select === "Khách nhà trai"
                  ? "border-[2px] border-[#6e8058]"
                  : "border-[2px] border-[#d3d3d3]"
              }`}
              >
                <svg
                  version="1.1"
                  id=" slideayer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="46px"
                  height="100%"
                  viewBox="0 0 399 451"
                  enableBackground="new 0 0 399 451"
                  xmlSpace="preserve"
                >
                  <image
                    id=" slidemage0"
                    width="100%"
                    height="100%"
                    x="0"
                    y="0"
                    href="data:image/png;base64,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"
                  ></image>
                </svg>
                <p className="py-1">Khách nhà trai</p>
              </div>
            </div>
            {/* guest name */}
            <div className="text-center">
              <h3 className="py-2 text-lg">Tên khách mời</h3>
              <input
                className="w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-white"
                type="text"
              />
            </div>
            {/*  */}
            <div className="grid grid-cols-2 gap-4 py-10">
              <div
                onClick={() => setJoin("Sẵn sàng")}
                className={`flex items-center justify-evenly p-4 bg-white rounded-lg cursor-pointer
              ${
                join === "Sẵn sàng"
                  ? "border-[2px] border-[#6e8058]"
                  : "border-[2px] border-[#d3d3d3]"
              }`}
              >
                <svg
                  id=" slideayer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 149.41 149.42"
                  width="38px"
                >
                  <defs>
                    <style>.cls-1</style>
                  </defs>
                  <path
                    className="cls-1"
                    d="M149.38,57.22c-.23.29-.45.6-.7.87a2.91,2.91,0,0,1-5.11-1.57,11.82,11.82,0,0,1,0-1.46q0-18.3,0-36.61A12.08,12.08,0,0,0,138.83,8.3a12.69,12.69,0,0,0-8.05-2.43H18.49a12.47,12.47,0,0,0-8,2.5,12,12,0,0,0-4.62,10q0,14.65,0,29.32v83.13c0,5.13,2,9.1,6.7,11.5a12.36,12.36,0,0,0,5.64,1.21q56.51,0,113,0c5.91,0,10.3-3.3,11.87-8.82a14.39,14.39,0,0,0,.47-4q0-22.68,0-45.36a3,3,0,0,1,2.16-3.21c1.31-.38,2.45.16,3.39,1.59a4,4,0,0,0,.28.32v50.47c-.91,7.34-5.24,11.86-11.93,14.42a12.22,12.22,0,0,1-4.45.59q-58.32,0-116.64,0c-7.78,0-14.59-6.38-16.19-13.19a15,15,0,0,1-.3-3.48c0-38.78.05-77.57,0-116.35C-.2,7.92,7.55.94,13.32.25A4.52,4.52,0,0,0,15.18,0h119c6.56.66,10.95,4.34,13.88,10a14.16,14.16,0,0,1,1.29,5.14Z"
                  />
                  <path
                    className="cls-1"
                    d="M149.38,71.51c-1.27,1.93-2.54,2.53-4,1.85a2.8,2.8,0,0,1-1.79-2.88,2.77,2.77,0,0,1,2.16-2.61A2.71,2.71,0,0,1,148.79,69c.2.26.39.54.59.8Z"
                  />
                  <path
                    className="cls-1"
                    d="M73.49,109.55a35.79,35.79,0,0,1-21.18-7.71c-1-.78-1.93-1.63-2.85-2.49a3,3,0,0,1-.4-4.38,2.86,2.86,0,0,1,4.29,0,30.79,30.79,0,0,0,8.84,6c11.59,4.8,22.32,3.34,32.13-4.54.53-.42,1-.91,1.53-1.35,1.65-1.41,3.31-1.45,4.51-.1s.93,3-.58,4.48a39.44,39.44,0,0,1-7.71,5.68C86.81,108.17,79,110,73.49,109.55Z"
                  />
                  <path
                    className="cls-1"
                    d="M37.06,62.55a12.25,12.25,0,0,1,24.46-.06c.13,2-.9,3.37-2.63,3.54s-2.9-.86-3.19-2.8c-.59-3.87-2.57-6.08-5.68-6.34a6.31,6.31,0,0,0-7.13,6C42.73,64.67,42,65.7,40.56,66,38.42,66.4,37,65,37.06,62.55Z"
                  />
                  <path
                    className="cls-1"
                    d="M112.33,62.63c0,2-1,3.34-2.72,3.43S106.68,65,106.49,63a6.3,6.3,0,0,0-6-6.09c-3.48-.15-6,2-6.61,5.59,0,.1,0,.19-.06.29-.41,2.51-1.55,3.57-3.5,3.25S87.6,64.13,88,61.69c1-6.28,5.63-10.67,12-10.78A12.14,12.14,0,0,1,112.33,62.63Z"
                  />
                </svg>
                <div>
                  <p className="py-1">Yeah!</p>
                  <p className="py-1">Sẵn sàng</p>
                </div>
              </div>
              <div
                onClick={() => setJoin("Rất tiếc")}
                className={`flex items-center justify-evenly p-4 bg-white rounded-lg cursor-pointer
              ${
                join === "Rất tiếc"
                  ? "border-[2px] border-[#6e8058]"
                  : "border-[2px] border-[#d3d3d3]"
              }`}
              >
                <svg
                  id=" slideayer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 149.41 149.42"
                  width="38px"
                >
                  <defs>
                    <style>.cls-1</style>
                  </defs>
                  <path
                    className="cls-1"
                    d="M149.37,84.06v50.47c-.91,7.34-5.24,11.86-11.92,14.42a12.28,12.28,0,0,1-4.45.59q-58.32,0-116.64,0c-7.78,0-14.59-6.38-16.2-13.19a15.54,15.54,0,0,1-.3-3.48c0-38.78.06-77.57,0-116.35C-.2,7.92,7.55.94,13.32.25A4.45,4.45,0,0,0,15.17,0h119c6.57.66,11,4.34,13.89,10a14.15,14.15,0,0,1,1.28,5.14v42c-.23.29-.44.6-.69.87a2.91,2.91,0,0,1-5.11-1.57,11.82,11.82,0,0,1,0-1.46q0-18.3,0-36.61a12.07,12.07,0,0,0-4.7-10.15,12.71,12.71,0,0,0-8.05-2.43H18.49a12.47,12.47,0,0,0-8,2.5,12.05,12.05,0,0,0-4.63,10q0,14.65,0,29.32v83.13c0,5.13,2,9.1,6.7,11.5a12.34,12.34,0,0,0,5.63,1.21q56.52,0,113,0c5.92,0,10.31-3.3,11.88-8.82a14.77,14.77,0,0,0,.47-4V85.36a3,3,0,0,1,2.17-3.21c1.31-.38,2.44.16,3.39,1.59A3.82,3.82,0,0,0,149.37,84.06Z"
                  />
                  <path
                    className="cls-1"
                    d="M149.37,69.76v1.75c-1.27,1.93-2.54,2.53-4,1.85a2.9,2.9,0,0,1,.37-5.49A2.7,2.7,0,0,1,148.78,69C149,69.22,149.18,69.5,149.37,69.76Z"
                  />
                  <path
                    className="cls-1"
                    d="M111.69,110c.34.41.31.6-.09.91-1.59,1.21-3.17,2.42-4.71,3.68-.62.51-.9.19-1.27-.26a33.12,33.12,0,0,0-7.86-7.08A34.25,34.25,0,0,0,75,101.8c-.74.08-.74.39-.64.92,1.56,9.09-5.37,19.33-15.92,20.7A18.78,18.78,0,0,1,37.19,107a14.27,14.27,0,0,1,0-1.85c-.14-3.6,1.27-6.73,3-9.7C44.3,88.68,49.67,83,55.38,77.58c.47-.45.69-.25,1,.08A88,88,0,0,1,70.23,93.57a2.12,2.12,0,0,0,2.46,1.11,39.09,39.09,0,0,1,17.47,1.09A41.93,41.93,0,0,1,111.69,110Zm-54.2,6c6.77-.89,12.34-9,8.21-15.84a79.88,79.88,0,0,0-9.83-12.69,65.71,65.71,0,0,0-9.35,11.87,11.09,11.09,0,0,0-2,5.68A11.39,11.39,0,0,0,57.49,116.07Z"
                  />
                  <path
                    className="cls-1"
                    d="M101.54,55.07A7.41,7.41,0,1,1,94.06,62,7.42,7.42,0,0,1,101.54,55.07Z"
                  />
                  <path
                    className="cls-1"
                    d="M63.2,62.28a7.36,7.36,0,1,1-7.33-7.21A7.4,7.4,0,0,1,63.2,62.28Z"
                  />
                </svg>
                <div>
                  <p className="py-1">Oh!</p>
                  <p className="py-1">Rất tiếc</p>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="my-6">
              <div className="text-center">
                <h3 className="py-2 text-lg">Số người tham dự</h3>
                <select className="w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-white">
                  <option value="1 người">1 người</option>
                  <option value="2 người">2 người</option>
                  <option value="3 người">3 người</option>
                  <option value="4 người">4 người</option>
                  <option value="5 người">5 người</option>
                </select>
              </div>
              <div className="text-center mt-4">
                <h3 className="py-2 text-lg">Phương tiện đi lại</h3>
                <select
                  onChange={handleSelectChange}
                  className="w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-white"
                >
                  <option value="Tự túc">Tự túc</option>
                  <option value="Đi chung">Đi chung</option>
                </select>
              </div>
              {showInput ? (
                <>
                  <div className="text-center mt-4">
                    <h3 className="py-2 text-lg">Số điện thoại</h3>
                    <input
                      className="w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-white"
                      type="text"
                    />
                  </div>
                  <div className=" p-4 rounded bg-[#f4f4f4] my-10">
                    <div className="text-sm">
                      <span>
                        Để thuận tiện cho việc sắp xếp, đưa đón khách đi tiệc
                        cưới, bạn vui lòng cung cấp số điện thoại giúp vợ chồng
                        mình nhé!
                      </span>
                    </div>
                  </div>
                  <div className=" p-4 rounded bg-[#f4f4f4] my-10">
                    <div className="text-sm">
                      <span>
                        <strong className="text-red-500 ">
                          Thông tin chuyến đi
                        </strong>
                      </span>
                      <br />
                      <br />
                      <span>
                        <strong>Thời gian xuất phát:</strong> 8h00
                      </span>
                      <br />
                      <span>
                        <strong>Địa chỉ:</strong> thế giới in ấn
                      </span>
                      <br />
                      <span>
                        <strong>Người liên hệ: </strong>0362610156 - Thanh Hương
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
            {/* btn */}
            <div className="pt-6 grid grid-cols-1">
              <button className="bg-[#6E8058] text-white py-3 rounded-md text-xl hover:bg-[#73865c]">
                Gửi Phản Hồi
              </button>
            </div>
            {/* video */}
            <div className="text-center my-10 ">
              <iframe
                loading="lazy"
                allowFullScreen
                className="w-full h-[280px] py-4"
                src={`https://www.youtube.com/embed/1ntkDbxTnXA?controls=1`}
              ></iframe>
            </div>
          </div>
        </div>
        {/* donate */}
        <div className="">
          <img src={dona} alt="" />
          <div className="px-6 text-center my-6">
            <h3 className="py-4 text-xl">Gửi lời chúc đến đôi uyên ương</h3>
            <div className="my-3 p-1 border-dotted border-b-[1px] border-slate-400">
              <span>
                <b>Nguyễn Tuấn Anh</b>
              </span>
              <br />
              <span>0531000265048</span>
            </div>
            <div className="my-3 p-1 border-dotted border-b-[1px] border-slate-400">
              <span>
                <b>Nguyễn Tuấn Anh</b>
              </span>
              <br />
              <span>0531000265048</span>
            </div>
          </div>
        </div>
        {/* map */}
        <div className="my-10 px-6 text-center">
          <h3 className="py-4 text-2xl">Địa điểm tổ chức</h3>
          <img className="my-4 rounded" src={map} alt="" />
        </div>
        {/* contact */}
        <div className="my-10 px-6 text-center">
          <h3 className="py-4 text-2xl">Thông tin liên hệ</h3>
          <img className="mt-2" src={footer2} alt="" />
          <div className="grid grid-cols-2">
            <a href="  tel:098372082">
              <img
                className="cursor-pointer mt-2 hover:animate-pulse"
                src={contact1}
                alt=""
              />
              <p>098372082</p>
            </a>
            <a href="  tel:098372082">
              <img
                className="cursor-pointer mt-2 hover:animate-pulse"
                src={contact2}
                alt=""
              />
              <p>0983732082</p>
            </a>
          </div>
        </div>
        {/* share */}
        <div className="my-10 px-6 text-center">
          <h3 className="py-4 text-2xl">Chia sẻ thiệp</h3>
          <div className="grid grid-cols-4 justify-items-center my-4 text-2xl ">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className=" cursor-pointer hover:translate-y-[-2px] p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                fill="#3b5998"
              >
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className=" cursor-pointer hover:translate-y-[-2px] p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
                fill="#ff1c52"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className=" cursor-pointer hover:translate-y-[-2px] p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                fill="#55acee"
              >
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>
            </a>
            <a
              href="https://mail.google.com"
              target="_blank"
              rel="noreferrer"
              className=" cursor-pointer hover:translate-y-[-2px] p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                fill="#505558"
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
            </a>
          </div>
        </div>
        {/*  */}
        <div className="pt-2">
          <img className="w-full object-cover" src={footer} alt="" />
        </div>
      </div>
      {music ? (
        <div
          onClick={handlePause}
          className="fixed right-[20px] bottom-[20px] bg-[#97A982] p-5 rounded-full cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 640 512"
            fill="#efeeea"
          >
            <path d="M533.6 32.5C598.5 85.3 640 165.8 640 256s-41.5 170.8-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z" />
          </svg>
        </div>
      ) : (
        <div
          onClick={handlePlay}
          className="fixed right-[20px] bottom-[20px] bg-[#97A982] p-5 rounded-full cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 640 512"
            fill="#efeeea"
          >
            <path d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" />
          </svg>
        </div>
      )}
    </div>
  );
}

export default App;
