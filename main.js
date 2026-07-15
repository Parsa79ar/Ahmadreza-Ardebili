"use strict";

(function () {
  var translations = {
    en: {
      skip_link: "Skip to content",
      brand_name: "Parsa Ardebili",
      brand_role: "Senior Backend Engineer",
      nav_about: "About",
      nav_experience: "Experience",
      nav_torza: "Torza",
      nav_projects: "Projects",
      nav_contact: "Contact",
      theme_toggle: "Theme",
      hero_eyebrow: "Senior Backend Engineer | Founder & CEO at Torza",
      hero_title: "I design, build, and ship web products that stay clean under real business pressure.",
      hero_text: "I am Parsa (Ahmadreza) Ardebili, a senior backend engineer and product-minded builder. I work across Laravel/PHP systems, APIs, admin platforms, DevOps workflows, and the product decisions that make software useful after launch.",
      proof_backend: "Backend-first",
      proof_backend_text: "Laravel/PHP, APIs, databases",
      proof_product: "Product-minded",
      proof_product_text: "Clarity, usability, ownership",
      proof_delivery: "Delivery-ready",
      proof_delivery_text: "Docker, Kubernetes, DevOps",
      cta_contact: "Contact me",
      cta_projects: "View projects",
      cta_cv: "Persian CV",
      profile_card_title: "Available for focused web projects",
      profile_card_text: "Remote-friendly, product-minded, and comfortable from database to deployment.",
      stat_location_label: "Location",
      stat_location_value: "Shiraz, Iran",
      stat_stack_label: "Core stack",
      stat_stack_value: "Laravel, PHP, Docker, Kubernetes",
      stat_delivery_label: "Delivery",
      stat_delivery_value: "Backend, APIs, DevOps",
      stat_languages_label: "Languages",
      stat_languages_value: "Persian, English, basic German",
      about_eyebrow: "About",
      about_title: "Backend depth, DevOps awareness, and product clarity in one practical delivery flow.",
      about_p1: "I earned my bachelor's degree in Computer Software Engineering from Hormozgan University and I am currently studying for a master's degree at Islamic Azad University. Along the way, my work has grown through production systems, client products, admin panels, e-commerce, automation, localization, and infrastructure work.",
      about_p2: "My strongest area is backend engineering with Laravel/PHP, but I am most valuable where architecture, Docker/Kubernetes-based delivery, practical interfaces, and product thinking meet. Through Torza, I also lead software work, technical content, and long-term product direction.",
      experience_eyebrow: "Experience",
      experience_title: "Work shaped by production systems, remote collaboration, and product ownership.",
      exp_torza_date: "Jun 2025 - Present",
      exp_torza_title: "Founder & CEO - Torza",
      exp_torza_text: "Leading Torza as a focused company of developers and product thinkers building clean, scalable, user-friendly software and Torza Mag.",
      exp_myrefah_date: "Jul 2023 - Aug 2024",
      exp_myrefah_title: "Senior Backend Engineer - Myrefah | Refah",
      exp_myrefah_text: "Part-time remote backend work on a procurement management system covering requests, ordering, inventory, procurement documents, supplier payment scheduling, and automated supply workflows.",
      exp_sinaweb_date: "Jun 2023 - Present",
      exp_sinaweb_title: "Full Stack Web Developer - Sinaweb",
      exp_sinaweb_text: "Part-time remote development across Laravel systems, customer portals, admin workflows, and service management features.",
      exp_oxin_date: "Jan 2021 - Jan 2023",
      exp_oxin_title: "Full Stack Web Developer - Oxin Rayan Arvand",
      exp_oxin_text: "Developed and maintained web projects, admin panels, frontend features, and backend workflows after frontend and backend internships.",
      exp_backend_intern_date: "Jan 2020 - Jan 2021",
      exp_backend_intern_title: "Backend Internship - Oxin Rayan Arvand",
      exp_backend_intern_text: "Built backend foundations through PHP/Laravel patterns, database work, and team-based delivery.",
      exp_frontend_intern_date: "Nov 2019 - Jan 2020",
      exp_frontend_intern_title: "Frontend Internship - Oxin Rayan Arvand",
      exp_frontend_intern_text: "Started production web work through frontend implementation, UI details, and practical client-facing pages.",
      torza_eyebrow: "Company",
      torza_title: "Torza is a focused team of developers and product thinkers.",
      torza_text: "We care deeply about brainstorming, clarity, usability, and long-term value. Whether we are developing Torza products like XaltO, publishing Torza Mag as the company's technology magazine, or delivering tailored software for forward-thinking teams, we keep things clean, scalable, and user-friendly.",
      torza_service_xalto: "XaltO product",
      torza_service_web: "Web development",
      torza_service_mobile: "Mobile apps",
      torza_service_cloud: "Cloud & DevOps",
      torza_service_ai: "AI integration",
      torza_service_mag: "Torza Mag publication",
      torza_link_site: "Torza website",
      torza_link_mag: "Torza Mag",
      torza_link_xalto: "XaltO",
      torza_link_instagram: "Mag Instagram",
      torza_link_telegram: "Mag Telegram",
      torza_link_youtube: "Mag YouTube",
      torza_link_bale: "Mag Bale",
      projects_eyebrow: "Featured projects",
      projects_title: "Selected work with clearer roles, outcomes, and technology choices.",
      project_visit: "Visit project",
      project_cat_company: "Company + Publication",
      project_cat_product: "Torza Product",
      project_cat_platform: "Management Platform",
      project_cat_travel: "Travel Product",
      project_cat_commerce: "E-commerce Operations",
      project_cat_marketplace: "Marketplace",
      project_cat_portal: "Customer Portal",
      project_cat_security: "Upgrade + Security",
      project_torza_title: "Torza Company",
      project_torza_text: "A focused software company building its own products, tailored software, and Torza Mag as the company's official technology/code magazine.",
      project_torza_role: "Role: Founder & CEO, backend/product direction, software delivery.",
      project_xalto_title: "XaltO",
      project_xalto_text: "An intelligent integrated business management platform for accounting, inventory, finance, HR, sales, payments, shipping, and customer management.",
      project_xalto_role: "Role: infrastructure, product and team management, system architecture, and automation design.",
      project_jalink_title: "Jalink",
      project_jalink_text: "A platform for accommodation managers to register properties, manage reservations, and publish dedicated subdomain pages.",
      project_jalink_role: "Role: Full stack development, admin panel, deployment.",
      project_boomvand_title: "Boomvand",
      project_boomvand_text: "A travel planning platform for customized southern Iran trips, booking flows, trip management, and operations tooling.",
      project_boomvand_role: "Role: Feature development, admin improvements, DevOps.",
      project_roynut_title: "Roynut Foods",
      project_roynut_text: "A UK-based wholesale e-commerce experience for nuts, seeds, and dried fruits with improved customer and order operations.",
      project_roynut_role: "Role: E-commerce features, admin improvements, server configuration.",
      project_urskin_title: "Urskin",
      project_urskin_text: "An online beauty retailer for skincare products, built to support product discovery and simple shopping flows.",
      project_urskin_role: "Role: Co-founder, website launch, store setup.",
      project_nova_title: "NovaPlatform",
      project_nova_text: "A marketplace for architectural and design products with product management, transactions, and optimized deployments.",
      project_nova_role: "Role: Laravel backend, admin workflows, deployment.",
      project_sina_title: "Sinaweb Customer Portal",
      project_sina_text: "A customer portal for authentication, support, invoices, service management, and service activation workflows.",
      project_sina_role: "Role: Laravel backend and Bootstrap frontend development.",
      project_iaam_title: "IAAM Online",
      project_iaam_text: "Upgrade and security work for an international non-profit platform, including Laravel/PHP modernization and two-factor authentication.",
      project_iaam_role: "Role: Upgrade, security hardening, portal redesign work.",
      skills_eyebrow: "Skills",
      skills_title: "A practical stack for shipping and maintaining web products.",
      skill_backend: "Backend",
      skill_frontend: "Frontend",
      skill_data: "Database",
      skill_devops: "DevOps",
      skill_tools: "Tools",
      skill_product: "Product & UI",
      opensource_eyebrow: "Open source",
      opensource_title: "Small tools, experiments, and learning projects on GitHub.",
      opensource_github: "More on GitHub",
      repo_stress: "Website Stress Test with Selenium",
      repo_traffic: "Traffic Light Management System",
      repo_telegram: "Telegram Python Bot",
      repo_docker: "Docker PHP/MySQL/Apache Environment",
      repo_crawler: "Bounty Target Data Crawler",
      repo_laravel: "Laravel Knowledge Challenges",
      contact_eyebrow: "Contact",
      contact_title: "Have a practical web product, admin panel, or automation idea?",
      contact_text: "Send a message and I will be happy to talk through the scope, tradeoffs, and best path to build it well.",
      footer_name: "Parsa (Ahmadreza) Ardebili",
      footer_text: "Senior backend engineer, Laravel/PHP specialist, and Founder & CEO at Torza.",
      footer_site: "Website"
    },
    fa: {
      skip_link: "رفتن به محتوا",
      brand_name: "پارسا اردبیلی",
      brand_role: "مهندس ارشد بک‌اند",
      nav_about: "درباره",
      nav_experience: "تجربه",
      nav_torza: "تورزا",
      nav_projects: "پروژه‌ها",
      nav_contact: "تماس",
      theme_toggle: "تم",
      hero_eyebrow: "مهندس ارشد بک‌اند | بنیان‌گذار و مدیرعامل تورزا",
      hero_title: "سیستم‌های وبی می‌سازم که ساده، مقیاس‌پذیر و آماده رشد واقعی کسب‌وکار باشند.",
      hero_text: "من پارسا (احمدرضا) اردبیلی هستم؛ مهندس ارشد بک‌اند و سازنده محصول. تمرکزم روی طراحی معماری بک‌اند، APIها، پنل‌های مدیریتی، زیرساخت، اتوماسیون و تصمیم‌های محصولی است تا نرم‌افزار بعد از انتشار هم قابل نگهداری، قابل توسعه و واقعاً مفید بماند.",
      proof_backend: "تمرکز روی بک‌اند",
      proof_backend_text: "Laravel/PHP، API، دیتابیس",
      proof_product: "نگاه محصولی",
      proof_product_text: "شفافیت، کاربردپذیری، مالکیت",
      proof_delivery: "تحویل قابل اتکا",
      proof_delivery_text: "Docker، Kubernetes، DevOps",
      cta_contact: "تماس با من",
      cta_projects: "مشاهده پروژه‌ها",
      cta_cv: "رزومه فارسی",
      profile_card_title: "آماده همکاری روی پروژه‌های وب هدفمند",
      profile_card_text: "مسلط به همکاری ریموت، نگاه محصولی، و مسیر کامل از دیتابیس تا دیپلوی.",
      stat_location_label: "موقعیت",
      stat_location_value: "شیراز، ایران",
      stat_stack_label: "استک اصلی",
      stat_stack_value: "Laravel، PHP، Docker، Kubernetes",
      stat_delivery_label: "تحویل",
      stat_delivery_value: "بک‌اند، API، DevOps",
      stat_languages_label: "زبان‌ها",
      stat_languages_value: "فارسی، انگلیسی، آلمانی پایه",
      about_eyebrow: "درباره",
      about_title: "عمق بک‌اند، شناخت DevOps و شفافیت محصول در یک مسیر تحویل کاربردی.",
      about_p1: "مدرک کارشناسی مهندسی نرم‌افزار را از دانشگاه هرمزگان گرفته‌ام و اکنون در مقطع کارشناسی ارشد در دانشگاه آزاد اسلامی تحصیل می‌کنم. در این مسیر، کار من با سیستم‌های واقعی، محصولات مشتریان، پنل‌های مدیریتی، فروشگاه‌های آنلاین، اتوماسیون، بومی‌سازی و کارهای زیرساختی رشد کرده است.",
      about_p2: "نقطه قوت اصلی من مهندسی بک‌اند با Laravel/PHP است، اما بیشترین ارزشم جایی است که معماری، تحویل مبتنی بر Docker/Kubernetes، رابط‌های کاربردی و نگاه محصولی به هم می‌رسند. در تورزا هم کار نرم‌افزاری، محتوای فنی و مسیر بلندمدت محصول را هدایت می‌کنم.",
      experience_eyebrow: "تجربه",
      experience_title: "تجربه‌ای شکل‌گرفته با سیستم‌های واقعی، همکاری ریموت و مالکیت محصول.",
      exp_torza_date: "ژوئن ۲۰۲۵ - اکنون",
      exp_torza_title: "بنیان‌گذار و مدیرعامل - تورزا",
      exp_torza_text: "رهبری تورزا به‌عنوان شرکتی متمرکز از توسعه‌دهندگان و متخصصان محصول برای ساخت نرم‌افزارهای تمیز، مقیاس‌پذیر، کاربرپسند و تورزا مگ.",
      exp_myrefah_date: "ژوئیه ۲۰۲۳ - اوت ۲۰۲۴",
      exp_myrefah_title: "مهندس ارشد بک‌اند - Myrefah | Refah",
      exp_myrefah_text: "همکاری پاره‌وقت ریموت در توسعه بک‌اند سیستم مدیریت تامین و خرید، شامل درخواست‌ها، سفارش‌گذاری، کنترل موجودی، اسناد تامین، زمان‌بندی پرداخت تامین‌کنندگان و جریان‌های خودکار تامین.",
      exp_sinaweb_date: "ژوئن ۲۰۲۳ - اکنون",
      exp_sinaweb_title: "توسعه‌دهنده فول‌استک وب - سیناوب",
      exp_sinaweb_text: "همکاری پاره‌وقت ریموت روی سیستم‌های Laravel، پرتال مشتریان، جریان‌های مدیریتی و قابلیت‌های مدیریت سرویس.",
      exp_oxin_date: "ژانویه ۲۰۲۱ - ژانویه ۲۰۲۳",
      exp_oxin_title: "توسعه‌دهنده فول‌استک وب - اکسین رایان اروند",
      exp_oxin_text: "توسعه و نگهداری پروژه‌های وب، پنل‌های مدیریتی، قابلیت‌های فرانت‌اند و جریان‌های بک‌اند پس از دوره‌های کارآموزی.",
      exp_backend_intern_date: "ژانویه ۲۰۲۰ - ژانویه ۲۰۲۱",
      exp_backend_intern_title: "کارآموزی بک‌اند - اکسین رایان اروند",
      exp_backend_intern_text: "ساخت پایه‌های بک‌اند با الگوهای PHP/Laravel، کار با دیتابیس و تحویل تیمی.",
      exp_frontend_intern_date: "نوامبر ۲۰۱۹ - ژانویه ۲۰۲۰",
      exp_frontend_intern_title: "کارآموزی فرانت‌اند - اکسین رایان اروند",
      exp_frontend_intern_text: "شروع کار وب در محیط واقعی با پیاده‌سازی فرانت‌اند، جزئیات UI و صفحات کاربردی برای مشتریان.",
      torza_eyebrow: "شرکت",
      torza_title: "تورزا تیمی متمرکز از توسعه‌دهندگان و متخصصان محصول است.",
      torza_text: "ما به ایده‌پردازی، شفافیت، کاربردپذیری و ارزش بلندمدت اهمیت می‌دهیم. چه محصولات تورزا مثل زالتو را توسعه بدهیم، چه تورزا مگ را به‌عنوان مجله تکنولوژی شرکت منتشر کنیم، و چه نرم‌افزار اختصاصی برای تیم‌های آینده‌نگر بسازیم، خروجی را تمیز، مقیاس‌پذیر و کاربرپسند نگه می‌داریم.",
      torza_service_xalto: "محصول زالتو",
      torza_service_web: "توسعه وب",
      torza_service_mobile: "اپلیکیشن موبایل",
      torza_service_cloud: "Cloud و DevOps",
      torza_service_ai: "هوش مصنوعی",
      torza_service_mag: "مجله تورزا مگ",
      torza_link_site: "وب‌سایت تورزا",
      torza_link_mag: "تورزا مگ",
      torza_link_xalto: "زالتو",
      torza_link_instagram: "اینستاگرام مگ",
      torza_link_telegram: "تلگرام مگ",
      torza_link_youtube: "یوتیوب مگ",
      torza_link_bale: "بله مگ",
      projects_eyebrow: "پروژه‌های منتخب",
      projects_title: "نمونه‌کارهایی با نقش، خروجی و انتخاب‌های فنی شفاف‌تر.",
      project_visit: "مشاهده پروژه",
      project_cat_company: "شرکت و رسانه",
      project_cat_product: "محصول تورزا",
      project_cat_platform: "پلتفرم مدیریتی",
      project_cat_travel: "محصول سفر",
      project_cat_commerce: "عملیات فروشگاهی",
      project_cat_marketplace: "مارکت‌پلیس",
      project_cat_portal: "پرتال مشتریان",
      project_cat_security: "ارتقا و امنیت",
      project_torza_title: "شرکت تورزا",
      project_torza_text: "شرکت نرم‌افزاری متمرکز برای ساخت محصولات داخلی، نرم‌افزار اختصاصی و تورزا مگ به‌عنوان مجله رسمی تکنولوژی و کد شرکت.",
      project_torza_role: "نقش: بنیان‌گذار و مدیرعامل، جهت‌دهی بک‌اند/محصول، تحویل نرم‌افزار.",
      project_xalto_title: "زالتو",
      project_xalto_text: "پلتفرم هوشمند مدیریت یکپارچه کسب‌وکار برای حسابداری، انبار، موجودی، مالی، منابع انسانی، فروش، پرداخت، حمل‌ونقل و مدیریت مشتریان.",
      project_xalto_role: "نقش: زیرساخت، مدیریت محصول و تیم، طراحی معماری سیستم و طراحی اتوماسیون‌ها.",
      project_jalink_title: "جالینک",
      project_jalink_text: "پلتفرمی برای مدیران اقامتگاه جهت ثبت ملک، مدیریت رزروها و انتشار صفحات اختصاصی روی ساب‌دامین.",
      project_jalink_role: "نقش: توسعه فول‌استک، پنل مدیریت، دیپلوی.",
      project_boomvand_title: "بوم‌وند",
      project_boomvand_text: "پلتفرم برنامه‌ریزی سفر برای سفرهای سفارشی جنوب ایران، رزرو، مدیریت سفر و ابزارهای عملیاتی.",
      project_boomvand_role: "نقش: توسعه قابلیت‌ها، بهبود پنل مدیریت، DevOps.",
      project_roynut_title: "روینات فودز",
      project_roynut_text: "تجربه فروش عمده آنلاین برای مغزها، دانه‌ها و خشکبار با بهبود عملیات سفارش و مشتری.",
      project_roynut_role: "نقش: قابلیت‌های فروشگاهی، بهبود ادمین، تنظیمات سرور.",
      project_urskin_title: "اوراسکین",
      project_urskin_text: "فروشگاه آنلاین محصولات مراقبت پوست برای کشف محصول و خرید ساده‌تر.",
      project_urskin_role: "نقش: هم‌بنیان‌گذار، راه‌اندازی سایت، تنظیم فروشگاه.",
      project_nova_title: "نواپلتفرم",
      project_nova_text: "مارکت‌پلیس محصولات معماری و طراحی با مدیریت محصول، تراکنش‌ها و دیپلوی بهینه.",
      project_nova_role: "نقش: بک‌اند Laravel، جریان‌های ادمین، دیپلوی.",
      project_sina_title: "پرتال مشتریان سیناوب",
      project_sina_text: "پرتال مشتریان برای احراز هویت، پشتیبانی، فاکتور، مدیریت سرویس و فعال‌سازی خدمات.",
      project_sina_role: "نقش: توسعه بک‌اند Laravel و فرانت‌اند Bootstrap.",
      project_iaam_title: "IAAM Online",
      project_iaam_text: "ارتقا و بهبود امنیت برای پلتفرم یک سازمان بین‌المللی، شامل نوسازی Laravel/PHP و احراز هویت دومرحله‌ای.",
      project_iaam_role: "نقش: ارتقا، سخت‌سازی امنیت، بازطراحی پرتال.",
      skills_eyebrow: "مهارت‌ها",
      skills_title: "استکی کاربردی برای ساخت و نگهداری محصولات وب.",
      skill_backend: "بک‌اند",
      skill_frontend: "فرانت‌اند",
      skill_data: "دیتابیس",
      skill_devops: "DevOps",
      skill_tools: "ابزارها",
      skill_product: "محصول و UI",
      opensource_eyebrow: "متن‌باز",
      opensource_title: "ابزارها، تجربه‌ها و پروژه‌های یادگیری در GitHub.",
      opensource_github: "موارد بیشتر در GitHub",
      repo_stress: "تست فشار وب‌سایت با Selenium",
      repo_traffic: "سیستم مدیریت چراغ راهنمایی",
      repo_telegram: "ربات تلگرام با Python",
      repo_docker: "محیط Docker برای PHP/MySQL/Apache",
      repo_crawler: "خزنده داده‌های Bounty Target",
      repo_laravel: "چالش‌های دانشی Laravel",
      contact_eyebrow: "تماس",
      contact_title: "ایده‌ای برای محصول وب، پنل مدیریت یا اتوماسیون دارید؟",
      contact_text: "پیام بدهید تا درباره محدوده، tradeoffها و بهترین مسیر ساخت یک محصول خوب صحبت کنیم.",
      footer_name: "پارسا (احمدرضا) اردبیلی",
      footer_text: "مهندس ارشد بک‌اند، متخصص Laravel/PHP و بنیان‌گذار و مدیرعامل تورزا.",
      footer_site: "وب‌سایت"
    }
  };

  var html = document.documentElement;
  var languageButtons = Array.prototype.slice.call(document.querySelectorAll("[data-lang]"));
  var themeToggle = document.querySelector("[data-theme-toggle]");
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-links a[href^='#']"));

  function safelySetStorage(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      return false;
    }
    return true;
  }

  function safelyGetStorage(key) {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function applyLanguage(lang) {
    var dictionary = translations[lang] || translations.en;

    Object.keys(dictionary).forEach(function (key) {
      var textNodes = document.querySelectorAll("[data-i18n='" + key + "']");
      var htmlNodes = document.querySelectorAll("[data-i18n-html='" + key + "']");

      Array.prototype.forEach.call(textNodes, function (node) {
        node.textContent = dictionary[key];
      });

      Array.prototype.forEach.call(htmlNodes, function (node) {
        node.innerHTML = dictionary[key];
      });
    });

    html.lang = lang;
    html.dir = lang === "fa" ? "rtl" : "ltr";
    document.body.classList.toggle("is-fa", lang === "fa");

    languageButtons.forEach(function (button) {
      var isActive = button.getAttribute("data-lang") === lang;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    safelySetStorage("portfolio-language", lang);
  }

  function applyTheme(theme) {
    var normalized = theme === "dark" ? "dark" : "light";
    if (normalized === "dark") {
      html.setAttribute("data-theme", "dark");
    } else {
      html.removeAttribute("data-theme");
    }
    safelySetStorage("portfolio-theme", normalized);
  }

  languageButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      applyLanguage(button.getAttribute("data-lang"));
    });
  });

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      applyTheme(html.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (event) {
      var target = document.querySelector(anchor.getAttribute("href"));
      if (!target) {
        return;
      }
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  if ("IntersectionObserver" in window && navLinks.length) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }

        navLinks.forEach(function (link) {
          link.classList.toggle("is-active", link.getAttribute("href") === "#" + entry.target.id);
        });
      });
    }, {
      rootMargin: "-35% 0px -55% 0px",
      threshold: 0
    });

    navLinks.forEach(function (link) {
      var section = document.querySelector(link.getAttribute("href"));
      if (section) {
        sectionObserver.observe(section);
      }
    });
  }

  applyTheme(safelyGetStorage("portfolio-theme") || "light");
  applyLanguage(safelyGetStorage("portfolio-language") || "en");
  setTimeout(function () {
    document.body.classList.remove("no-motion");
  }, 50);
})();
