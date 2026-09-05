const langBtn = document.getElementById("lang-btn");
const drawerToggle = document.getElementById("nav-drawer");
const translatable = document.querySelectorAll("[data-en][data-ar]");

function decodeEntities(value) {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = value;
  return textarea.value;
}

function setText(element, value) {
  const decoded = decodeEntities(value);
  if (decoded.includes("<br>")) {
    element.innerHTML = decoded;
  } else {
    element.textContent = decoded;
  }
}

const SEO = {
  en: {
    title: "Study Time | Study House & Coffee in Al-Yasmeen, Amman",
    description:
      "Study Time is a study house and coffee spot in Al-Yasmeen, Amman. Silent room, meeting rooms, fast Wi‑Fi, and coffee — open daily 8 AM to midnight.",
  },
  ar: {
    title: "ستدي تايم | بيت دراسة وقهوة في ضاحية الياسمين، عمّان",
    description:
      "ستدي تايم بيت دراسة وقهوة في ضاحية الياسمين، عمّان. غرفة هادئة، غرف اجتماعات، إنترنت سريع وقهوة — مفتوح يوميًا من 8 صباحًا حتى منتصف الليل.",
  },
};

function setMeta(nameOrProperty, value, attr = "name") {
  let el = document.head.querySelector(`meta[${attr}="${nameOrProperty}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, nameOrProperty);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function setLanguage(language) {
  const isArabic = language === "ar";
  const seo = SEO[language];
  document.documentElement.lang = language;
  document.documentElement.dir = isArabic ? "rtl" : "ltr";

  translatable.forEach((element) => {
    setText(element, element.dataset[language]);
  });

  langBtn.textContent = isArabic ? "EN" : "ع";
  langBtn.setAttribute(
    "aria-label",
    isArabic ? "Switch to English" : "التبديل إلى العربية"
  );

  document.title = seo.title;
  setMeta("description", seo.description);
  setMeta("og:title", seo.title, "property");
  setMeta("og:description", seo.description, "property");
  setMeta("og:locale", isArabic ? "ar_JO" : "en_JO", "property");
  setMeta("twitter:title", seo.title);
  setMeta("twitter:description", seo.description);

  const url = new URL(window.location.href);
  if (isArabic) url.searchParams.set("lang", "ar");
  else url.searchParams.delete("lang");
  window.history.replaceState({}, "", url);

  localStorage.setItem("studytime-language", language);
}

langBtn.addEventListener("click", () => {
  setLanguage(document.documentElement.lang === "ar" ? "en" : "ar");
});

document.querySelectorAll('.drawer-side a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    if (drawerToggle) drawerToggle.checked = false;
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && drawerToggle?.checked) {
    drawerToggle.checked = false;
  }
});

const heroVideo = document.querySelector(".hero video");
if (heroVideo && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  heroVideo.removeAttribute("autoplay");
  heroVideo.pause();
}

document.getElementById("year").textContent = String(new Date().getFullYear());

const savedLanguage = localStorage.getItem("studytime-language");
const queryLang = new URLSearchParams(window.location.search).get("lang");
const browserLanguage = navigator.language.toLowerCase().startsWith("ar") ? "ar" : "en";
const initialLang =
  queryLang === "ar" || queryLang === "en"
    ? queryLang
    : savedLanguage || browserLanguage;
setLanguage(initialLang);
