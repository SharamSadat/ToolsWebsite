import { createContext, useContext, useEffect, useState } from "react";

// لیست زبان‌ها
const translations = {
  fa: {

    // Navbar
    home: "خانه",
    blog: "بلاگ",
    basket: "سبد خرید",
    orders: "پیگیری سفارشات",
    builder: "صفحه ساز",
    about: "درباره ما",
    login: "ورود / ثبت نام",
    logout : "خروج" , 
    siteName: "فروشگاه ابزار کاری",

    // Home Page
    hometitle: "جدید ترین ابزار وارداتی",
    KnownMore: "بیشتر بدانید...",
    specialOffer: "پیشنهاد ویژه",
    electric: "وسایل برقی",
    no_electric: "وسایل غیر برقی",
    nameOfDesign: "فروشگاهی بزرگ وسایل پنجشیر - دیزاین",
    topSales: "پرفروش ترین ها",
     yourSelf : "خودت تعمیر کن !" , 
    topSalesCount : "هنوز محصول پر فروشی نداشتی" ,
    homeDetails : "   به شرکت تولید و تهبیه هر گونه وسایل برقی خوش آمدید، آرزوی ما کسب رضایت مشتریان است." ,
    nothingExists : "هیچ آیتمی وجود ندارد" ,

    // Create Page
    createTool: "ایجاد ابزار",
    toolName: "اسم محصول",
    selectType: "انتخاب نوع وسیله",
    price: "قیمت محصول",
    qty: "تعداد آیتم",
    company: "کمپنی محصول",
    add: "اضافه کن",
    picture : "تصویر" , 

    // PicBacks Localization 

    textss : [ "به سایت ناب سادات گروپ" , 
    "خوش آمدید 🥰" ,
    "محبوب ترین سایت با داشتن حداقل 90% رضایت مشتریان" , 
    "بهترین ابزار ها را از ما بخرید",
    "کیفیت بالا و قیمت مناسب",
    "سریع و آسان خرید کنید" ] ,

    // Messages
    error: "خطا!",
    success: "موفقیت!",
    fillFields: "تمام فیلدها را پر کنید.",
    itemAdded: "آیتم با موفقیت اضافه شد.",
    ok: "باشه",
    edit: "ویرایش",
    delete: "حذف",

    // Login & Register
    email: "ایمیل",
    password: "رمز عبور",
    fullName: "نام کاربری",
    loginTitle: "ورود به حساب",
    register: "ثبت نام",
    birthDate : "تاریخ تولد" ,
    fName : "نام" , 
    lName : "نام فامیلی" , 
    signupPage : "صفحه ثبت نام"  , 
    confirmPass : "تایید رمز عبور" , 
    emailPlaceholder : "ایمیل تان را وارد کنید" ,
    LoginPage : "صفحه ورود"  ,
    notAccount : "آیا تازه به سایت ثبت نام میکنید ؟" ,
    
    // More Info 

     buy : "خرید محصول" , 
    Edits : "ویرایش محصول" , 
    Deletes : "حذف محصول" ,
    Deleted : "حدف شد" ,
    notExists : "فعلا آیتم مورد نظر در دسترس نیست" ,

    // Buy backet 

    basket : "سبد خرید" , 
    emptyBasket : "سبد خرید شما خالی است" , 
    backToHome : "برگشت به خانه" , 
    costOfOne : "قیمت واحد" , 
    afghani : "افغانی" , 
    totalCost : "مجموع" , 
    ordinary : "تحویل" , 
    totalPrice : "جمع کل" , 

    // orders 

    orderItem : "پیگیری سفارشات" , 
    emptyOrders : "هیچ سفارشی برای پیگیری وجود ندارد" , 
    cost : "قیمت" , 
    numbers : "تعداد" , 
    orderDate : "تاریخ سفارش" , 
    orderStatus : "وضیعت" , 
    pending : "در انتظار" ,
    changeToCompleted : "سفارش کامل شد" ,
    
     // PortFolio 

    teamSkills : "مهارت های تیمی" ,
    recentProject : "پروژه های اخیر ما" ,
    TeamDetails : "  ما اینجا نکاتی برای بیان اجرای پروژه های کردیم که توانیستیم با کار تیمی و عملکرد بالا انجام دادیم" ,
    allProjects : "تمام پروژه ها" , 
    glenings : "مطالب" , 
    references : "منابع" , 
    skp : "بازی سنگ_کاغذ_قیچی" , 
    todoInfo : "بهترین سایت برای برنامه ریزی کردن" ,
    findNumber : "شماره یابی" , 
    findNumberInfo : "معما را حل کنید" ,
    modeling : "طرح و نمایش لباس ها و مودل های ناب جهان" ,
    unique : "با ما از اخبار ناب و سراسر جهان با خبر شوید" ,
    seeDetails : "دیدن جزییات" , 
    paragraph : `
              استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی
              نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم
              متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
              طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
              صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی
              با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
              است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی
              نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
              <br />
              <br />
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی
              نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم
              متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
              طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
              صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی
              با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
              است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی
              نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
              <br />
              <br />
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی
              نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم
              متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
              طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
              صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی
              با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
              است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی
              نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم
              متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
              طراحان گرافیک است

              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی
              نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم
              متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
              طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
              صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی
              با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
              است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی
              نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
              <br />
              <br />
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی
              نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم
              متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
              طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
              صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی
              با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
              است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی
              نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
              <br />
              <br />
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی
              نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم
              متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
              طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
              صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی
              با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
              است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی
              نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم
              متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
              طراحان گرافیک است

              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی
              نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم
              متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
              طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
              صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی
              با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
              است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی
              نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
              <br />
              <br />
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی
              نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم
              متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
              طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
              صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی
              با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
              است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی
              نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
              <br />
              <br />
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی
              نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم
              متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
              طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
              صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی
              با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
              است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی
              نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم
              متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
              طراحان گرافیک است` ,


    // References 

    devloper : "سایت تحقیق و بررسی ابزار مورد نیاز دیولوپر ها" , 
    w3school : "بهترین و پر استفاده ترین سایت برای رهنمای و یادگیری دیولپمینت" , 
    nextcode : "سایت بزرگ ابرانی با تدریس دقیق میلاد بهرامی" , 
    neoun : "دومین سایت معتبر ایرانی برای بخش قرانت انت" , 
    fastLearn : "سایت معتبر برای آموزش تخصصی در بخش برنامه نویسی" ,
    softSkill : "بخش بالا بردن مهارت های دیولوپری و همکاری " ,
    seeSite : "دیدن سایت" ,


    // About US 

    aboutUS : "در باره ما" , 
    aboutTeam : "ما یک تیم پرشور و با ایده های تازه هستیم که تلاش می‌کنیم بهترین خدمات را برای مشتریان‌مان ارائه دهیم" , 
    ourMission : "ماموریت ما" , 
    ourGoals : "هدف ما ایجاد محصولاتی با کیفیت و تازه است که زندگی را آسان‌تر و بهتر کند. و باعث بدست آوردن رضایت مشتریان گردد" , 
    ourTeam : "تیم ما" , 
    teamInfo : "ما متشکل از افراد خلاق، متخصص و پرانرژی هستیم که در کنار هم بهترین نتایج را می‌سازیم. و مهارت هایمان را در کناز هم توسعه میدهیم" ,
    ourValence : "ارزش های ما" , 
    valenceInfo : "صداقت، نوآوری و مسئولیت ‌پذیری ارزش‌های بنیادین ما و تیم مان هستند." , 
    ourSupport : "ما در هر شرایط آماده همکاری با شما استیم" , 
    ourReport : "اگر می‌خواهید بیشتر درباره ما بدانید یا همکاری کنید، خوشحال می‌شویم با ما در ارتباط باشید." , 
    connectMe : "تماس با ما" ,

  },

  en: {
    // Navbar
    home: "Home",
    blog: "Blog",
    basket: "Cart",
    orders: "Orders",
    builder: "Page Builder",
    about: "About Us",
    login: "Login / Register",
    logout : "Logout" , 
    siteName: "Tools Store",

    // Home Page
    hometitle: "Newest Imported Tools",
    KnownMore: "Know More ...",
    specialOffer: "Special Offer",
    electric: "Electric Tools",
    no_electric: "Non-Electric Tools",
    nameOfDesign: "Panjsher-Design Big Tools Store",
    yourSelf : "BuildIng Your Self !" , 
    topSales: "Top Sales",
    topSalesCount : "Still You don't have a TopSales Product" ,
    homeDetails : "Welcome to the site that manufactures and supplies all kinds of eletrical and non-electrical equipment ,  our goal is to achieve customer satisfication." ,
     nothingExists : "Not Item is Exists" ,

    // Create Page
    createTool: "Create Tool",
    toolName: "Product Name",
    selectType: "Select Tool Type",
    price: "Product Price",
    qty: "Quantity",
    company: "Company",
    add: "Add",
    picture : "Picture" ,

        // PicBacks Localization 

       textss : ["Welcome to 🥰" , "the top Sadat Group Website" , "the most popular site with at least 90% customer satisfaction" , 
        "buy the best tools from us with high quality and responsible prices" , "Shop quickly and easily"
       ] ,

    // Messages
    error: "Error!",
    success: "Success!",
    fillFields: "Please fill in all fields.",
    itemAdded: "Item added successfully.",
    ok: "OK",
    edit: "Edit",
    delete: "Delete",

    // Login & Register

    email: "Email",
    password: "Password",
    fullName: "Full_Name",
    loginTitle: "Login",
    register: "Register",
    birthDate : "Birth_Date" ,
    fName : "F/Name" , 
    lName : "L/Name" , 
    signupPage : "Sign Up Page"  , 
    confirmPass : "Confirm Password" , 
    emailPlaceholder : "Write Your Email Address" , 
     LoginPage : "Login_Page"  ,
    notAccount : "? Are you Registering on the website for the First time" , 


    // MoreInfo 

    buy : "Buy Item" , 
    Edits : "Edit Item" , 
    Deletes : "Delete Item" ,
    Deleted : "Successfully Deleted" ,
    notExists : "Now ! This item is Not available" ,


     // Buy backet 

    basket : "Buy Basket" , 
    emptyBasket : "Your Buy basket is Empty" , 
    backToHome : "Back To Home" , 
    costOfOne : "once Cost" , 
    afghani : "Af" , 
    totalCost : "Total" , 
    ordinary : "Ordinary" , 
    totalPrice : "Grand Total" , 

      // orders 

    orderItem : "Order Tracking" , 
    emptyOrders : "There are no orders to track" , 
    cost : "Price" , 
    numbers : "Number" , 
    orderDate : "Order Date" , 
    orderStatus : "Status" , 
    pending : "Pending" ,
    changeToCompleted : "Order is Completd" ,

    // PortFolio 

    teamSkills : "Team Skills" ,
    recentProject : "Our Recent Projects" ,
    TeamDetails : "We have presented key points here about how we successfully carried out our projects through strong teamwork and high performance" ,
    allProjects : "All Projects" , 
    glenings : "Glenings" , 
    references : "References" , 
    skp : "Rock_Paper_Scissors Game" , 
    todoInfo : "The best Website for Planning" ,
    findNumber : "Finding Number" , 
    findNumberInfo : "Solve the Riddle" ,
    modeling : "Design and Presentation of the world's unique Fashion and Models" ,
    unique : "Stay updated with us on exclusive news from around the world" ,
    seeDetails : "See Details" , 
    paragraph : `
    
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore reiciendis a quos debitis delectus. Quam soluta veniam a inventore saepe voluptates placeat. Dolore fugit provident doloremque saepe vero temporibus molestias!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore explicabo exercitationem, dolorum animi numquam mollitia asperiores labore consectetur consequuntur maxime! Non optio eligendi repellendus soluta aliquam maxime saepe hic impedit?
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore consequatur sit error ducimus praesentium quam rem. Saepe voluptatum accusantium atque incidunt dolorem illo quas repellat aliquid error magnam, commodi soluta?

      </br>
      </br>

         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore reiciendis a quos debitis delectus. Quam soluta veniam a inventore saepe voluptates placeat. Dolore fugit provident doloremque saepe vero temporibus molestias!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore explicabo exercitationem, dolorum animi numquam mollitia asperiores labore consectetur consequuntur maxime! Non optio eligendi repellendus soluta aliquam maxime saepe hic impedit?
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore consequatur sit error ducimus praesentium quam rem. Saepe voluptatum accusantium atque incidunt dolorem illo quas repellat aliquid error magnam, commodi soluta?

      </br>
      </br>

         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore reiciendis a quos debitis delectus. Quam soluta veniam a inventore saepe voluptates placeat. Dolore fugit provident doloremque saepe vero temporibus molestias!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore explicabo exercitationem, dolorum animi numquam mollitia asperiores labore consectetur consequuntur maxime! Non optio eligendi repellendus soluta aliquam maxime saepe hic impedit?
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore consequatur sit error ducimus praesentium quam rem. Saepe voluptatum accusantium atque incidunt dolorem illo quas repellat aliquid error magnam, commodi soluta?

      </br>
      </br>

         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore reiciendis a quos debitis delectus. Quam soluta veniam a inventore saepe voluptates placeat. Dolore fugit provident doloremque saepe vero temporibus molestias!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore explicabo exercitationem, dolorum animi numquam mollitia asperiores labore consectetur consequuntur maxime! Non optio eligendi repellendus soluta aliquam maxime saepe hic impedit?
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore consequatur sit error ducimus praesentium quam rem. Saepe voluptatum accusantium atque incidunt dolorem illo quas repellat aliquid error magnam, commodi soluta?

      </br>
      </br>

         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore reiciendis a quos debitis delectus. Quam soluta veniam a inventore saepe voluptates placeat. Dolore fugit provident doloremque saepe vero temporibus molestias!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore explicabo exercitationem, dolorum animi numquam mollitia asperiores labore consectetur consequuntur maxime! Non optio eligendi repellendus soluta aliquam maxime saepe hic impedit?
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore consequatur sit error ducimus praesentium quam rem. Saepe voluptatum accusantium atque incidunt dolorem illo quas repellat aliquid error magnam, commodi soluta?
    
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore reiciendis a quos debitis delectus. Quam soluta veniam a inventore saepe voluptates placeat. Dolore fugit provident doloremque saepe vero temporibus molestias!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore explicabo exercitationem, dolorum animi numquam mollitia asperiores labore consectetur consequuntur maxime! Non optio eligendi repellendus soluta aliquam maxime saepe hic impedit?
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore consequatur sit error ducimus praesentium quam rem. Saepe voluptatum accusantium atque incidunt dolorem illo quas repellat aliquid error magnam, commodi soluta?

      </br>
      </br>

           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore reiciendis a quos debitis delectus. Quam soluta veniam a inventore saepe voluptates placeat. Dolore fugit provident doloremque saepe vero temporibus molestias!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore explicabo exercitationem, dolorum animi numquam mollitia asperiores labore consectetur consequuntur maxime! Non optio eligendi repellendus soluta aliquam maxime saepe hic impedit?
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore consequatur sit error ducimus praesentium quam rem. Saepe voluptatum accusantium atque incidunt dolorem illo quas repellat aliquid error magnam, commodi soluta?

      </br>
      </br>

           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore reiciendis a quos debitis delectus. Quam soluta veniam a inventore saepe voluptates placeat. Dolore fugit provident doloremque saepe vero temporibus molestias!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore explicabo exercitationem, dolorum animi numquam mollitia asperiores labore consectetur consequuntur maxime! Non optio eligendi repellendus soluta aliquam maxime saepe hic impedit?
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore consequatur sit error ducimus praesentium quam rem. Saepe voluptatum accusantium atque incidunt dolorem illo quas repellat aliquid error magnam, commodi soluta?

      </br>
      </br>

           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore reiciendis a quos debitis delectus. Quam soluta veniam a inventore saepe voluptates placeat. Dolore fugit provident doloremque saepe vero temporibus molestias!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore explicabo exercitationem, dolorum animi numquam mollitia asperiores labore consectetur consequuntur maxime! Non optio eligendi repellendus soluta aliquam maxime saepe hic impedit?
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore consequatur sit error ducimus praesentium quam rem. Saepe voluptatum accusantium atque incidunt dolorem illo quas repellat aliquid error magnam, commodi soluta?

      </br>
      </br>
      ` ,

    // Refernces 

    devloper : "Research and Review site for devloper's essential Tools", 
    w3school : "The best and most widely used site for devlopment guidance and learning" , 
    nextcode : "The great iranian website with precise teaching by the capable instructor Milad Bahrami" , 
    neoun : "The second most reputable iranian website for the front-end field", 
    fastLearn : "A reputable website for specialized training in the field of programming" ,
    softSkill : "Section for enhancing devlopment skills and collaboration" , 
    seeSite : "ViewSite" ,


    // About us 

    aboutUS : "About US" , 
    aboutTeam : "We are a passionate team with fresh ideas , striving to provide the best services to our Customers." , 
    ourMission : "Our Mission" , 
    ourGoals : "Our goal is to create high-quality and innovative products that make life easier and better , and lead to customer satisfication.", 
    ourTeam : "Our Team" , 
    teamInfo : "We are a team of creative , skilled , and energetic individuals who come together to acheive the best results . We grow and develop our skills alongside each other." ,
    ourValence : "Our Valence" , 
    valenceInfo : "Honesty , innovation , and responsibility are the core values of our team" , 
    ourSupport : "We are by your side in every situation." , 
    ourReport : "If you want to know more about us or collaborate , we'dbe happy to hear from you ." , 
    connectMe : "Contact Us" ,



  },
};

// ایجاد context
const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("fa");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "fa";
    setLang(savedLang);
  }, []);

  const changeLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);

export default LanguageProvider;
