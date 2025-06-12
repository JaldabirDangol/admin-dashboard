export const UserPage = () => {
  return (
    <div className="w-screen h-screen bg-dark-800 flex justify-center items-center p-4">
      <div className="w-screen h-screen aspect-video border-4 border-purple-500 rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.youtube.com/embed/RuuHECy1LcQ"
          frameBorder="0"
          className="w-full h-full"
          allowFullScreen
          title="YouTube Video"
          auto
        >
          Since you are not Admin watch Internal Pointer Variable
        </iframe>
      </div>
    </div>
  );
};
