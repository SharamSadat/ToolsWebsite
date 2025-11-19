import { useLanguage } from "../navbar/localizaion";
import { useDarkMode } from "../navbar/darkMode";
import "./addVideo.css";
import mehr from "./shams.mp4" ;

function AddVideo() {
  let videos = [
    {
          src : mehr
    },

    {
      src : mehr
},
{
  src : mehr
},
{
   src : mehr
},
  ];

  const {t} = useLanguage() ;
  const { darkMode } = useDarkMode();

  return (
    <>
      <h4 className={`font-bold mb-4 text-[35px] pr-[205px] pt-16 responsive-title ${darkMode ? 'dark-mode-text' : ''}`}>{t.yourSelf}</h4>

      <div className="video-container">
        {videos.map((video , index) => (
          
          <video 
            controls 
            key={index} 
            {...video} 
            className={`responsive-video ${darkMode ? 'dark-mode-video' : ''}`}
          >
           <source src={video.src} type="video/mp4" />
             Your Browser Does not Support the video Tag
          </video>

        ))}
      </div>
    </>
  );
}

export default AddVideo;