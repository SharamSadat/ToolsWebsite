
import ToolsFooter from "../../component/footer/toolsFooter";
import { Link } from "react-router-dom";
import ToolsNavbar from "../../component/navbar/navbar";
import { useLanguage } from "../../component/navbar/localizaion";
import { useDarkMode } from "../../component/navbar/darkMode";

function Reference() {
 
      const {t} = useLanguage() ;
      const {darkMode} = useDarkMode() ;

  return (

    <>
       
       <ToolsNavbar />
    
    
     <section className="pb-12 pt-20 lg:pb-[90px] lg:pt-[120px] dark:bg-dark">
        <div className="container mx-auto">
          <div className="-mx-4 flex mt-12 flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[510px] text-center">
                <span className="mb-2 block text-[30px] font-semibold text-primary">
                   {t.teamSkills}
                </span>
                <h2 className="section-title">{t.recentProject}</h2>
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
                    className="inline-block hover:scale-90 ease-in-out hover:!bg-blue-600 !font-bold hover:!text-white ml-1 border-2 !border-blue-500 rounded-lg px-5 py-2 text-center !text-blue-700 md:py-3 lg:px-8 btn btn-outline"
                  >
                    {t.allProjects}
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    to="/port/gleaning"
 className="inline-block hover:!bg-blue-600  hover:scale-90 ease-in-out !font-bold hover:!text-white border-2 !border-blue-500 rounded-lg px-5 py-2 text-center !text-blue-700 transition md:py-3 lg:px-8 btn btn-outline"                  >
                   {t.glenings}
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    to="/port/reference"
 className="inline-block hover:!bg-blue-600  hover:scale-90 ease-in-out !font-bold hover:!text-white border-2 !border-blue-500 rounded-lg px-5 py-2 text-center !text-blue-700 transition md:py-3 lg:px-8 btn btn-outline"                  >
                       {t.references}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          
        <div className="card-grid mt-12">
            <div className="enhanced-card">
              <div className="overflow-hidden rounded-t-[10px]">
                <img
                  src="../images/portfolio/portfolio-01/image-01.jpg"
                  alt="portfolio"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="enhanced-card-body text-center">
                <span className="mb-2 block text-sm font-medium text-primary">
                        DevloperTools
                </span>
                <h3 className="enhanced-card-title"> {t.devloper}

                </h3>
                <Link 
                  to="www.devlopertools.com"
                  className="btn btn-primary mt-4"
                >
                    {t.seeSite} 
                </Link>
              </div>
            </div>
            
            <div className="enhanced-card">
              <div className="overflow-hidden rounded-t-[10px]">
                <img
                  src="../images/portfolio/portfolio-01/image-03.jpg"
                  alt="portfolio"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="enhanced-card-body text-center">
                <span className="mb-2 block text-sm font-medium text-primary">
                   W3SCHOOL
                </span>
                <h3 className="enhanced-card-title"> {t.w3school}
                  
                </h3>
                <Link
                  to="www.w3school.com"
                  className="btn btn-primary mt-4"
                >
                  {t.seeSite}
                </Link>
              </div>
            </div>
            
            <div className="enhanced-card">
              <div className="overflow-hidden rounded-t-[10px]">
                <img
                  src="../images/portfolio/portfolio-01/image-04.jpg"
                  alt="portfolio"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="enhanced-card-body text-center">
                <span className="mb-2 block text-sm font-medium text-primary">
                                   Next1Code
                </span>
                <h3 className="enhanced-card-title"> {t.nextcode}

                </h3>
                <Link
                  to="www.next1code.com"
                  className="btn btn-primary mt-4"
                >
                  {t.seeSite}
                </Link>
              </div>
            </div>
            
            <div className="enhanced-card">
              <div className="overflow-hidden rounded-t-[10px]">
                <img
                  src="../images/portfolio/portfolio-01/image-05.jpg"
                  alt="portfolio"
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="enhanced-card-body text-center">
                <span className="mb-2 block text-sm font-medium text-primary">
                          Neoun
                </span>
                <h3 className="enhanced-card-title"> {t.neoun}
                </h3>
                <Link
                  to="www.neoun.com"
                  className="btn btn-primary mt-4"
                >
                  {t.seeSite}
                </Link>
              </div>
            </div>

                <div className="enhanced-card">
              <div className="overflow-hidden rounded-t-[10px]">
                <img
                  src="../images/portfolio/portfolio-01/image-05.jpg"
                  alt="portfolio"
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <div className="enhanced-card-body text-center">
                <span className="mb-2 block text-sm font-medium text-primary">
                     fast Learning
                </span>
                <h3 className="enhanced-card-title">  {t.fastLearn}
                </h3>
                <Link
                  to="www.fastlearning.com"
                  className="btn btn-primary mt-4"
                >
                  {t.seeSite}
                </Link>
              </div>
            </div>


                   <div className="enhanced-card">
              <div className="overflow-hidden rounded-t-[10px]">
                <img
                  src="../images/portfolio/portfolio-01/image-05.jpg"
                  alt="portfolio"
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <div className="enhanced-card-body text-center">
                <span className="mb-2 block text-sm font-medium text-primary">
                     softSkill
                </span>
                <h3 className="enhanced-card-title"> {t.softSkill}
                </h3>
                <Link
                  to="www.softskill.com"
                  className="btn btn-primary mt-4"
                >
                  {t.seeSite}
                </Link>
              </div>
            </div>

          </div>
        </div>

      <ToolsFooter />
    </section>

</>
  
  );
}

export default Reference;
