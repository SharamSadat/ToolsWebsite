
import ToolsFooter from "../../component/footer/toolsFooter";
import { Link } from "react-router-dom";
import ToolsNavbar from "../../component/navbar/navbar";
import { useLanguage } from "../../component/navbar/localizaion";
import { useDarkMode } from "../../component/navbar/darkMode";

function Gleaning() {

          const {t} = useLanguage() ;
          const { darkMode } = useDarkMode();

  return (

    <>

      <ToolsNavbar />
   
    <section className={`pb-12 pt-20 lg:pb-[90px] lg:pt-[120px] ${darkMode ? 'dark:bg-dark' : ''}`}>
        <div className="container mx-auto">
          <div className="-mx-4 flex mt-12 flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[510px] text-center">
                <span className={`mb-2 block text-[30px] font-semibold ${darkMode ? 'text-blue-600' : 'text-primary'}`}>
                   {t.teamSkills}
                </span>
                <h2 className={`section-title ${darkMode ? 'text-white' : ''}`}>{t.recentProject}</h2>
                <p className={`text-base max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-body-color'}`}>
                      {t.TeamDetails}
                </p>
              </div>
            </div>
          </div>

             <div className="-mx-4 flex flex-wrap justify-center mt-12">
            <div className="w-full px-4">
              <ul className="mb-12 flex flex-wrap justify-center space-x-1">
                <li className="mb-1">
                  <Link
                    to="/port/AllProj"
                    className={`inline-block hover:scale-90 ease-in-out !font-bold ml-1 border-2 rounded-lg px-5 py-2 text-center transition md:py-3 lg:px-8 btn btn-outline ${
                      darkMode 
                        ? 'hover:!bg-blue-700 !border-blue-500 !text-blue-300 hover:!text-white' 
                        : 'hover:!bg-blue-600 !border-blue-500 !text-blue-700 hover:!text-white'
                    }`}
                  >
                    {t.allProjects}
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    to="/port/gleaning"
                    className={`inline-block hover:scale-90 ease-in-out !font-bold border-2 rounded-lg px-5 py-2 text-center transition md:py-3 lg:px-8 btn btn-outline ${
                      darkMode 
                        ? 'hover:!bg-blue-700 !border-blue-500 !text-blue-300 hover:!text-white' 
                        : 'hover:!bg-blue-600 !border-blue-500 !text-blue-700 hover:!text-white'
                    }`}
                  >
                    {t.glenings}
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    to="/port/reference"
                    className={`inline-block hover:scale-90 ease-in-out !font-bold border-2 rounded-lg px-5 py-2 text-center transition md:py-3 lg:px-8 btn btn-outline ${
                      darkMode 
                        ? 'hover:!bg-blue-700 !border-blue-500 !text-blue-300 hover:!text-white' 
                        : 'hover:!bg-blue-600 !border-blue-500 !text-blue-700 hover:!text-white'
                    }`}
                  >
                    {t.references}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

               <p className={`relative top-12 ${darkMode ? 'text-gray-300' : 'text-body-color'}`}>
                 {t.paragraph}
            </p>  

      </div>

        <br/>   
        <br/>   

      <ToolsFooter />
 
    </section>

   </>

  );
}

export default Gleaning;