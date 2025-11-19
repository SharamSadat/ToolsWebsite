
import ToolsFooter from "../../../component/footer/toolsFooter";
import { Link } from "react-router-dom"; 
import myPHoto from "../../images/Game.JPG" ;
import myPHoto1 from "../../images/game2.JPG" ;
import { useDarkMode } from "../../../component/navbar/darkMode";
import ToolsNavbar from "../../../component/navbar/navbar";

function Game() {
  const { darkMode } = useDarkMode();

  return (

    <>
        
        <ToolsNavbar />
    
   
    <section
      x-data="
      {
        showCards: 'all',
        activeClasses: 'bg-primary text-white',
        inactiveClasses: 'text-body-color dark:text-dark-6 hover:bg-primary hover:text-white',
      }
    "
      className={`pb-12 pt-20 lg:pb-[90px] lg:pt-[120px] ${darkMode ? 'dark:bg-dark' : ''}`}
    >
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className={`mb-2 block text-[30px] relative bottom-12 font-semibold ${darkMode ? 'text-blue-400' : 'text-primary'}`}>
                مهارت های تیمی
              </span>
              <h2 className={`mb-3 text-3xl font-bold leading-[1.208] sm:text-4xl md:text-[40px] ${darkMode ? 'text-white' : 'text-dark'}`}>
                پروژه های اخیر ما
              </h2>
              <p className={`text-base ${darkMode ? 'text-gray-300' : 'text-body-color'}`}>
                ما اینجا نکاتی برای بیان اجرای پروژه های کردیم که توانیستیم با
                کار تیمی و عملکرد بالا انجام دادیم
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4">
            <ul className="mb-12 flex flex-wrap justify-center space-x-4 mt-8">
              <li className="mb-4">
                <Link 
                  to="/port/AllProj"
                  className={`inline-block rounded-lg px-8 py-3 text-center text-base font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                    darkMode 
                      ? 'bg-blue-700 text-white hover:bg-blue-600' 
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  تمام پروژه ها
                </Link>
              </li>
             
              <li className="mb-2">
                <Link 
                  to="/port/gleaning"
                  className={`inline-block rounded-lg px-8 mx-8 py-3 text-center text-base font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                    darkMode 
                      ? 'bg-blue-700 text-white hover:bg-blue-600' 
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  مطالب
                </Link>
              </li>
              
              <li className="mb-2">
                <Link 
                  to="/port/reference"
                  className={`inline-block rounded-lg px-8 py-3 text-center text-base font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                    darkMode 
                      ? 'bg-blue-700 text-white hover:bg-blue-600' 
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  منابع
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <h1 className={`text-center relative top-12 my-4 ${darkMode ? 'text-green-500' : 'text-green-700'}`}>Game Project</h1>
      <h3 className={`text-xl font-bold text-center mt-16 ${darkMode ? 'text-white' : 'text-dark'}`}>
                معما را حل کنید
                </h3>

      <p className={`relative top-36 ${darkMode ? 'text-gray-300' : 'text-body-color'}`}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id nulla saepe eos delectus nam animi. Mollitia tenetur ab ipsa similique nobis officiis laborum cumque suscipit ullam provident, iste consequatur rem?
      Ab, natus nobis consequatur suscipit itaque adipisci dolorem, eaque quam rem porro quo eos doloremque? Architecto, eligendi eveniet obcaecati soluta qui iure optio suscipit amet quis sequi! Non, necessitatibus assumenda?
      Id eaque iste quis, saepe illum natus magnam quae ipsa soluta dignissimos quisquam praesentium nisi, itaque mollitia neque, repudiandae obcaecati? Hic est natus non aliquam ab nesciunt accusamus officiis porro.
      Ipsum, mollitia. Aspernatur repellendus similique, sit quasi minima magnam dolore unde sed! Blanditiis amet, commodi sed officia quaerat, incidunt ex deleniti quas delectus itaque temporibus placeat ipsum, harum possimus debitis.
      Quis nam numquam beatae eum velit doloremque quidem delectus earum sit, consequatur autem in iusto unde aut quasi totam aspernatur dolor fuga? Incidunt aliquam exercitationem iste earum voluptatem facilis laboriosam.
      Magni ea ipsum rerum obcaecati impedit dicta libero labore dolores. Exercitationem esse molestias tempora ea! Dignissimos, blanditiis obcaecati consequuntur qui voluptatum quae? Culpa qui, ad vero odio eaque perferendis mollitia.
      Unde veritatis ipsam sit animi consequuntur, laudantium inventore, aliquid fugiat dignissimos pariatur molestias et facilis quisquam illo vero saepe consequatur! Aperiam mollitia beatae ea eveniet? Tenetur qui beatae dolorum repellat.
      Animi quia impedit maxime architecto reprehenderit repellat error temporibus, dolorum iste praesentium sint inventore quis vero, atque, voluptas quasi culpa dicta! Saepe accusantium deserunt praesentium eos dolore, debitis vel blanditiis.
      Officia a, accusamus culpa ipsa corrupti obcaecati eos labore, perferendis itaque, vitae voluptatum natus atque voluptatibus voluptatem aliquam sint aspernatur nihil recusandae praesentium? Nisi voluptatem molestiae iusto dolorem suscipit harum?
      Officiis necessitatibus facere adipisci delectus optio pariatur, qui laudantium minus veniam perspiciatis debitis laboriosam rem excepturi voluptatum ipsam! Cum veniam aspernatur unde non vel, reiciendis quasi ducimus accusamus totam corrupti.
      Ipsam magni odit doloremque voluptates rerum saepe commodi, consequatur reprehenderit repellat obcaecati iste, quod blanditiis aspernatur vitae facilis eos eligendi voluptas! Pariatur natus dignissimos facilis officiis culpa optio illo voluptas.
      Soluta sint veritatis ea velit excepturi tempora quos cum, doloribus consequuntur voluptatem maxime quis et iusto suscipit totam ipsum eum officia exercitationem minima dicta quo architecto laborum. Consequatur, maxime sit.
      Modi, nemo vero! Vitae odio sequi esse minima eligendi? Minus natus qui nisi molestiae consequatur facilis, quam quo cum sequi nobis fugit, voluptates sapiente veniam nulla? Esse nulla quisquam minima!
      Dolores et exercitationem sit iste quaerat illo ullam iure itaque omnis obcaecati dolorum, assumenda officia nisi tempora deserunt quod! Rerum minus id illum ducimus tenetur sapiente ratione eaque nemo alias.
      Reiciendis quas fuga provident exercitationem corporis quidem corrupti voluptatum, nulla vitae voluptatibus dolor consectetur perferendis odio pariatur? Officia culpa ducimus quam adipisci iste, maiores dolore repellendus magnam dolorum sequi suscipit!
      Neque eius repellat corporis qui perferendis iusto ullam quod in cupiditate quos nemo error magnam, vero temporibus ad facere mollitia iure eveniet hic vitae enim cumque doloribus at? Deserunt, consequuntur!
      Cumque dolore recusandae id architecto in ducimus modi molestias ullam expedita quaerat, reprehenderit repudiandae ab consectetur blanditiis temporibus ad, inventore similique sequi ipsam repellendus quam provident qui tempore voluptates! Veniam.
      Vero eveniet ipsam cumque minus, ipsum, tenetur minima optio ducimus voluptatem corporis labore, perferendis nam reiciendis necessitatibus? Facere necessitatibus doloribus voluptatum, nobis dolorem excepturi non et ratione laboriosam, voluptatibus velit!
      Nisi maxime nobis autem accusantium non similique necessitatibus ad, sit praesentium quis qui pariatur saepe expedita provident. Inventore, excepturi praesentium vero iste dolorum rem sunt, tenetur eaque minima accusantium vitae.
      Optio, nisi. Nam, suscipit. Dolores repellendus eius ipsa natus quas beatae molestiae, vero, fuga blanditiis ex eveniet? Ipsam recusandae earum explicabo omnis quidem cumque eligendi delectus, quis consequatur, vel ut?
      </p>

           <img src={myPHoto} alt="mehro" className="h-96 w-[600px] mr-[900px] relative top-64" />
           <img src={myPHoto1} alt="mehro" className="h-96 w-[600px] mr-[50px] relative -top-32 bottom-[382px]" />

      <ToolsFooter />
    </section>

 </>
  
  );
}

export default Game;