
import { NavLink } from "react-router-dom";

function StoreNavbar() {

  return (
    <nav className="w-full bg-white flex shadow-md fixed top-0 z-50">
      <div className="px-6 mx-auto lg:max-w-7xl flex items-center justify-between h-16">
        
        <h1 className="text-[50px] flex md:text-2xl font-bold text-orange-600">
          فروشگاه 
          <pre/>
          <span className="text-2xl font-bold text-black">
              سادات
          </span>
        </h1>

        <ul className="hidden md:flex pl-2 mt-2 items-center space-x-6">
            <li><NavLink to="/" className="font-bold text-blue-700 no-underline ml-4 hover:text-orange-600">خانه</NavLink></li>
          <li><NavLink to="" className="font-bold text-blue-700 no-underline ml-4 hover:text-orange-600">دسته بندی</NavLink></li>
          <li><NavLink to="create-page" className="font-bold text-blue-700 no-underline hover:text-orange-600">ایجاد محصولات</NavLink></li>
          <li><NavLink to="" className="font-bold text-blue-700 no-underline hover:text-orange-600">سبد خرید</NavLink></li>
          <li><NavLink to="" className="font-bold text-blue-700 no-underline hover:text-orange-600">پرداخت</NavLink></li>
          <li><NavLink to="" className="font-bold text-blue-700 no-underline hover:text-orange-600">در باره ما</NavLink></li>
          <li><NavLink to="" className="font-bold text-blue-700 no-underline hover:text-orange-600">سیاست ها و شرایط</NavLink></li>
        </ul>


          <div className="relative">
            <button
              className="p-2 font-bold bg-gray-300 rounded-full hover:bg-gray-100"
            >
                ورود به سایت
            </button>
              
              </div>
          </div>
      </nav>
  );
}

export default StoreNavbar;
