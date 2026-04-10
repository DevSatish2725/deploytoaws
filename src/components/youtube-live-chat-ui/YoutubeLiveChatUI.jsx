import ChatBox from "./ChatBox";
import Video from "./Video";

const YoutubeLiveChatUI = () => {
  return (
    <div className="mt-6 flex gap-4 justify-between w-[90vw]">
      <Video />
      <ChatBox />
    </div>
  );
};

export default YoutubeLiveChatUI;
