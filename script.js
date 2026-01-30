/* -------------------------
      Typing Effect
--------------------------*/

function startTyping(words) {
  const el = document.getElementById("typing");
  let i = 0, j = 0, isDeleting = false;

  function type() {
    const current = words[i];
    el.textContent = current.substring(0, j);

    if (!isDeleting && j < current.length) {
      j++;
      setTimeout(type, 120);
    } else if (isDeleting && j > 0) {
      j--;
      setTimeout(type, 80);
    } else {
      if (!isDeleting) {
        isDeleting = true;
        setTimeout(type, 800);
      } else {
        isDeleting = false;
        i = (i + 1) % words.length;
        setTimeout(type, 200);
      }
    }
  }

  type();
}


/* -------------------------
      Language System
--------------------------*/

let currentLang = "en";

document.getElementById("langToggle").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "ar" : "en";
  setLanguage(currentLang);
});

function safeSet(id, value, isHTML = false) {
  const el = document.getElementById(id);
  if (el) {
    if (isHTML) el.innerHTML = value;
    else el.textContent = value;
  }
}

function setLanguage(lang) {
  const data = lang === "ar" ? langAR : langEN;

  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = lang;

  // LOGO
  safeSet("logo", data.logo);

  // NAVBAR
  safeSet("nav-home", data.navHome);
  safeSet("nav-about", data.navAbout);
  safeSet("nav-skills", data.navSkills);
  safeSet("nav-projects", data.navProjects);
  safeSet("nav-experience", data.navExperience);
  safeSet("nav-contact", data.navContact);

  // MOBILE NAV
  safeSet("nav-home-m", data.navHome);
  safeSet("nav-about-m", data.navAbout);
  safeSet("nav-skills-m", data.navSkills);
  safeSet("nav-projects-m", data.navProjects);
  safeSet("nav-experience-m", data.navExperience);
  safeSet("nav-contact-m", data.navContact);

  // HOME
  safeSet("home-title", data.homeTitle, true);
  safeSet("home-subtitle", data.homeSubtitle);

  safeSet("btn-view-projects", `<i class="fas fa-folder-open"></i> ${data.viewProjects}`, true);
  safeSet("btn-cv", `<i class="fas fa-file-alt"></i> ${data.cv}`, true);

  // ABOUT
  safeSet("about-title", data.aboutTitle);
  safeSet("about-p1", data.aboutP1);
  safeSet("about-p2", data.aboutP2);

  // SECTION TITLES
  safeSet("skills-title", data.skillsTitle);
  safeSet("tech-skills-title", data.techSkillsTitle);
  safeSet("soft-skills-title", data.softSkillsTitle);
  safeSet("experience-title", data.experienceTitle);

  // PROJECTS
  safeSet("projects-title", data.projectsTitle);

  safeSet("p1-title", data.p1Title);
  safeSet("p1-desc", data.p1Desc);
  safeSet("p1-btn", data.viewDetails);

  safeSet("p2-title", data.p2Title);
  safeSet("p2-desc", data.p2Desc);
  safeSet("p2-btn", data.viewDetails);

  safeSet("p3-title", data.p3Title);
  safeSet("p3-desc", data.p3Desc);
  safeSet("p3-btn", data.viewDetails);

  safeSet("p4-title", data.p4Title);
  safeSet("p4-desc", data.p4Desc);
  safeSet("p4-btn", data.viewDetails);

  safeSet("p5-title", data.p5Title);
  safeSet("p5-desc", data.p5Desc);
  safeSet("p5-btn", data.viewDetails);

  safeSet("p6-title", data.p6Title);
  safeSet("p6-desc", data.p6Desc);
  safeSet("p6-btn", data.viewDetails);

  // SKILLS — TECHNICAL
  for (let i = 1; i <= 11; i++) {
    safeSet(`skill${i}`, data[`skill${i}`]);
  }

  // SKILLS — SOFT
  for (let i = 1; i <= 7; i++) {
    safeSet(`soft${i}`, data[`soft${i}`]);
  }

  // EXPERIENCE 1
  safeSet("exp1-title", data.exp1Title);
  safeSet("exp1-role1", data.exp1Role1);
  safeSet("exp1-role2", data.exp1Role2);

  safeSet("exp1-li1", data.exp1Li1);
  safeSet("exp1-li2", data.exp1Li2);
  safeSet("exp1-li3", data.exp1Li3);
  safeSet("exp1-li4", data.exp1Li4);
  safeSet("exp1-li5", data.exp1Li5);

  // EXPERIENCE 2
  safeSet("exp2-title", data.exp2Title);
  safeSet("exp2-role1", data.exp2Role1);
  safeSet("exp2-role2", data.exp2Role2);

  safeSet("exp2-li1", data.exp2Li1);
  safeSet("exp2-li2", data.exp2Li2);
  safeSet("exp2-li3", data.exp2Li3);
  safeSet("exp2-li4", data.exp2Li4);
  safeSet("exp2-li5", data.exp2Li5);
  safeSet("exp2-li6", data.exp2Li6);

  // CONTACT
  safeSet("contact-title", data.contactTitle);
  safeSet("contact-p1", data.contactP1);
  safeSet("contact-p2", data.contactP2);
  safeSet("hello-btn", data.helloBtn);

  /* ⭐ تشغيل الكتابة والمسح حسب اللغة */
  startTyping(data.typingWords);
}


/* -------------------------
      English Text
--------------------------*/

const langEN = {
  logo: "Razan Alageeli",

  navHome: "Home",
  navAbout: "About Me",
  navSkills: "Skills",
  navProjects: "Projects",
  navExperience: "Experience",
  navContact: "Contact",

  homeTitle: "Hello, I'm Razan Alageeli.<br>",
  homeSubtitle:
    "I believe in clarity and precision , and that data has a human side that deserves to be seen.",
  viewProjects: "View Projects",
  cv: "CV",

  typingWords: ["Computer Science", "Data Analysis", "Web Development"],

  aboutTitle: "About Me",
  aboutP1:
    "I'm Razan Alageeli, a Bachelor's graduate in Computer Science with experience in operational control systems and data analysis. I work on transforming data into smart solutions using automation and artificial intelligence, focusing on developing websites and applications that combine clarity, efficiency, and ease of use.",
  aboutP2:
    "My passion is creating technological solutions that contribute to more accurate decision-making and building smarter digital experiences.",

  projectsTitle: "Projects",

  p1Title: "Excel Dashboard",
  p1Desc: "Transform raw data into interactive strategic insights.",

  p2Title: "Power BI Dashboard",
  p2Desc: "A comprehensive Power BI dashboard analyzing orders and sales.",

  p3Title: "Excel Dashboard",
  p3Desc:
    "An advanced interactive dashboard for analyzing sales and branch performance.",

  p4Title: "Power BI Dashboard",
  p4Desc:
    "An interactive dashboard built with Power BI to analyze the real estate market.",

  p5Title: "Power BI Dashboard",
  p5Desc:
    "An interactive dashboard analyzing establishments in Saudi Arabia.",

  p6Title: "Personal Portfolio Website",
  p6Desc:
    "A fully designed and developed personal portfolio website showcasing my skills, projects, and experience.",

  viewDetails: "View Details",

  skillsTitle: "Skills",
  techSkillsTitle: "🧩 Technical Skills",
  softSkillsTitle: "🧑‍🧒‍🧒 Soft Skills",
  experienceTitle: "Experience",

  contactTitle: "Contact",
  contactP1:
    "This is where the passion begins… and we reach the furthest point.",
  contactP2: "You can reach me via:",

  // TECHNICAL SKILLS
  skill1: "Data Analysis",
  skill2: "Excel",
  skill3: "Power BI",
  skill4: "Data Cleaning",
  skill5: "Python",
  skill6: "Web Development",
  skill7: "HTML",
  skill8: "CSS",
  skill9: "JavaScript",
  skill10: "AI automation",
  skill11: "UI Design",

  // SOFT SKILLS
  soft1: "Problem Solving",
  soft2: "Communication",
  soft3: "Teamwork",
  soft4: "Adaptability",
  soft5: "Time Management",
  soft6: "Attention to Detail",
  soft7: "Analytical Thinking",

  // EXPERIENCE 1
  exp1Title: "Administrative Assistant",
  exp1Role1: "💼 Human Rights Commission — Cooperative Training",
  exp1Role2: "May 2021 – July 2021",
  exp1Li1: "Organizing files and documents",
  exp1Li2: "Preparing daily and weekly reports",
  exp1Li3: "Coordinating meetings and schedules",
  exp1Li4: "Handling emails and communication",
  exp1Li5: "Supporting daily office operations",

  // EXPERIENCE 2
  exp2Title: "Control Systems Operator",
  exp2Role1:
    "💼 Imam Abdulrahman Bin Faisal University — Medical City",
  exp2Role2: "Jan 2024 – Jun 2025",
  exp2Li1: "Monitoring control systems and equipment performance",
  exp2Li2: "Recording daily readings and entering data accurately",
  exp2Li3: "Identifying initial system issues and reporting them",
  exp2Li4: "Following operational procedures (SOP)",
  exp2Li5: "Preparing daily and monthly operation reports",
  exp2Li6: "Responding to system alerts and taking proper action"
};


/* -------------------------
      Arabic Text
--------------------------*/

const langAR = {
  logo: "رزان العقيلي",

  navHome: "الرئيسية",
  navAbout: "من أنا",
  navSkills: "المهارات",
  navProjects: "المشاريع",
  navExperience: "الخبرات",
  navContact: "تواصل",

  homeTitle: "مرحباً، أنا رزان العقيلي.<br>",
  homeSubtitle:
    "أؤمن بالوضوح والدقة، وأن للبيانات جانبًا إنسانيًا يستحق أن يُرى.",
  viewProjects: "عرض المشاريع",
  cv: "السيرة الذاتية",

  typingWords: ["علوم الحاسب", "تحليل البيانات", "تطوير الويب"],

  aboutTitle: "من أنا",
  aboutP1:
   "انا رزان العقيلي خريجة علوم حاسوب ذو خبرة عملية في تشغيل أنظمة التحكم وتحليل البيانات. أعمل على تحويل البيانات إلى حلول ذكية بالاعتماد على الأتمتة والذكاء الاصطناعي، مع التركيز على تطوير مواقع وتطبيقات تجمع بين الوضوح والكفاءة وسهولة الاستخدام.",
  aboutP2:
  "شغفي هو ابتكار حلول تقنية تُسهم في اتخاذ قرارات أكثر دقة وبناء تجارب رقمية أكثر ذكاءً.",
  projectsTitle: "المشاريع",

  p1Title: "لوحة تحكم Excel",
  p1Desc: "تحويل البيانات الخام إلى رؤى استراتيجية تفاعلية.",

  p2Title: "لوحة تحكم Power BI",
  p2Desc: "لوحة شاملة لتحليل الطلبات والمبيعات.",

  p3Title: "لوحة تحكم Excel",
  p3Desc: "لوحة تفاعلية متقدمة لتحليل المبيعات وأداء الفروع.",

  p4Title: "لوحة تحكم Power BI",
  p4Desc: "لوحة تفاعلية لتحليل سوق العقار السعودي.",

  p5Title: "لوحة تحكم Power BI",
  p5Desc: "لوحة تفاعلية لتحليل المنشآت في السعودية.",

  p6Title: "موقعي الشخصي",
  p6Desc:
    "موقع شخصي يعرض مهاراتي ومشاريعي وخبراتي بتصميم متجاوب وواجهة حديثة.",

  viewDetails: "عرض التفاصيل",

  skillsTitle: "المهارات",
  techSkillsTitle: "🧩 المهارات التقنية",
  softSkillsTitle: "🧑‍🧒‍🧒 المهارات الشخصية",
  experienceTitle: "الخبرات",

  contactTitle: "تواصل",
  contactP1: "هنا يبدأ الشغف… ونصل لأبعد نقطة.",
  contactP2: "يمكنك التواصل معي عبر:",

  helloBtn: "قل مرحباً!",

  // TECHNICAL SKILLS
  skill1: "تحليل البيانات",
  skill2: "Excel",
  skill3: "Power BI",
  skill4: "تنظيف البيانات",
  skill5: "Python",
  skill6: "تطوير الويب",
  skill7: "HTML",
  skill8: "CSS",
  skill9: "JavaScript",
  skill10: "أتمتة الذكاء الاصطناعي",
  skill11: "تصميم الواجهات",

  // SOFT SKILLS
  soft1: "حل المشكلات",
  soft2: "التواصل",
  soft3: "العمل الجماعي",
  soft4: "المرونة",
  soft5: "إدارة الوقت",
  soft6: "الاهتمام بالتفاصيل",
  soft7: "التفكير التحليلي",

  // EXPERIENCE 1
  exp1Title: "مساعدة إدارية",
  exp1Role1: "💼 هيئة حقوق الإنسان — تدريب تعاوني",
  exp1Role2: "مايو 2021 – يوليو 2021",
  exp1Li1: "تنظيم الملفات والمستندات",
  exp1Li2: "إعداد التقارير اليومية والأسبوعية",
  exp1Li3: "تنسيق الاجتماعات والمواعيد",
  exp1Li4: "التعامل مع البريد الإلكتروني",
  exp1Li5: "دعم العمليات اليومية للمكتب",

  // EXPERIENCE 2
  exp2Title: "مشغلة أنظمة تحكم",
  exp2Role1:
    "💼 جامعة الإمام عبدالرحمن بن فيصل — المدينة الطبية",
  exp2Role2: "يناير 2024 – يونيو 2025",
  exp2Li1: "مراقبة أداء الأنظمة والمعدات",
  exp2Li2: "تسجيل القراءات اليومية بدقة",
  exp2Li3: "تحديد المشكلات الأولية وإبلاغ الفريق المختص",
  exp2Li4: "اتباع إجراءات التشغيل (SOP)",
  exp2Li5: "إعداد التقارير اليومية والشهرية",
  exp2Li6: "الاستجابة للتنبيهات واتخاذ الإجراء المناسب"
};


/* -------------------------
   Run default language
--------------------------*/

setLanguage("en");