document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const yearEl = document.getElementById("year");
  const bookingForm = document.getElementById("bookingForm");
  const formMessage = document.getElementById("formMessage");
  const header = document.querySelector(".site-header");
  const langToggle = document.getElementById("langToggle");
  const langToggleMobile = document.getElementById("langToggleMobile");

  /* ═══════════════════════════════════════════
     TRANSLATIONS
     ═══════════════════════════════════════════ */

  const translations = {
    en: {
      nav_about: "About",
      nav_services: "Services",
      nav_coaching: "Coaching",
      nav_audience: "Who it's for",
      nav_process: "How I work",
      nav_booking: "Book now",
      nav_contact: "Contact",

      hero_eyebrow: "Professional coaching",
      hero_title: "Clarity, confidence & direction for your next step",
      hero_lead: "I support you in defining your goals, overcoming obstacles and building your professional and personal path with more confidence.",
      hero_cta: "Schedule a call",
      hero_cta2: "See services",

      about_tag: "About",
      about_title: "A safe space for reflection, clarity and action",
      about_p1: 'I am <strong>Nedeloiu Maria</strong> and I offer professional coaching for people who want more clarity, balance and progress in their career, leadership and everyday life.',
      about_p2: "I work with people at different stages of their development: from young professionals searching for direction, to managers, entrepreneurs and women strengthening their leadership role.",
      about_p3: "My approach is warm, empathetic and results-oriented, so that each session translates into real and sustainable steps.",
      about_youtube: "🎥 Learn more about me on YouTube",

      services_tag: "Services",
      services_title: "How I can help you",
      service_career: "For clarifying your professional direction, career changes, preparing for new roles and building confidence.",
      service_executive: "For leaders and managers who want to make clearer decisions, develop their impact and better manage challenges.",
      service_life: "For balance, personal clarity, overcoming blocks and aligning professional and personal life.",
      service_leadership: "For developing your own leadership style, communication, influence, confidence and professional presence.",

      gallery_tag: "Atmosphere",
      gallery_title: "A warm and professional setting",

      coaching_tag: "Resources",
      coaching_title: "What is coaching and how does it work?",
      coaching_p1: "<strong>Coaching</strong> is a collaborative and structured process through which a professional coach helps you clarify your goals, identify inner resources and take concrete action.",
      coaching_p2: 'Unlike therapy or counseling, coaching focuses on the <strong>present and future</strong> — on what you want to build, not on what happened in the past.',
      coaching_p3: "<strong>How does it work?</strong> Through powerful questions, active listening and specific tools, the coach guides you to find your own answers. They don't give advice, but support you in discovering what works best for you.",
      coaching_p4: "<strong>Benefits of coaching:</strong>",
      benefit_1: "✅ Clarity in making professional and personal decisions",
      benefit_2: "✅ Increased self-confidence and motivation",
      benefit_3: "✅ Developing leadership and communication skills",
      benefit_4: "✅ Overcoming blocks and limiting patterns",
      benefit_5: "✅ Better work-life balance",
      benefit_6: "✅ Concrete and measurable results in a short time",

      audience_tag: "Who it's for",
      audience_title: "I work with people who want authentic growth",
      audience_1: "Employees who want more clarity and progress",
      audience_2: "Managers who seek impact and balance",
      audience_3: "Entrepreneurs looking for focus and direction",
      audience_4: "Women in leadership who want to strengthen their voice",
      audience_5: "Young professionals at the beginning of their journey",
      audience_6: "People going through a professional or personal transition",

      process_tag: "How I work",
      process_title: "A simple and clear process",
      step1_title: "Initial discussion",
      step1_desc: "We get to know each other and understand the context, needs and your goals.",
      step2_title: "Goal clarification",
      step2_desc: "We define the direction and results you want to achieve.",
      step3_title: "Coaching sessions",
      step3_desc: "We work 1-on-1 for awareness, decision and action.",
      step4_title: "Action plan",
      step4_desc: "We turn insights into practical and sustainable steps.",

      testimonials_tag: "Testimonials",
      testimonials_title: "What clients say about the coaching experience",
      testimonial_1: '"I gained more clarity in my career and the courage to make important decisions for myself."',
      testimonial_1_author: "— Career coaching client",
      testimonial_2: '"The sessions helped me better understand my leadership style and communicate more effectively with my team."',
      testimonial_2_author: "— Leadership coaching client",
      testimonial_3: '"I felt support, structure and a lot of clarity. The process was warm and very useful."',
      testimonial_3_author: "— Executive coaching client",
      testimonial_video: "🎥 Watch video testimonial",

      booking_tag: "Booking",
      booking_title: "Book directly from the calendar",
      booking_desc: "Choose the right day and time for an introductory discussion directly from Google Calendar.",
      booking_card_title: "Online booking",
      booking_card_desc: "Click the button below to open the booking page and select the available time slot that suits you.",
      booking_card_btn: "Open booking calendar",

      contact_tag: "Contact",
      contact_title: "Let's talk",
      contact_desc: "If you feel it's the right time for more clarity and support, I invite you to reach out.",
      contact_call: "Call",
      contact_email: "Send email",

      footer_copy: "© " + new Date().getFullYear() + " Nedeloiu Maria. All rights reserved.",
      footer_top: "Back to top ↑",
    },

    ro: {
      nav_about: "Despre",
      nav_services: "Servicii",
      nav_coaching: "Coaching",
      nav_audience: "Pentru cine",
      nav_process: "Cum lucrez",
      nav_booking: "Programare",
      nav_contact: "Contact",

      hero_eyebrow: "Coaching profesional",
      hero_title: "Claritate, încredere și direcție pentru următorul tău pas",
      hero_lead: "Te susțin să îți definești obiectivele, să depășești blocajele și să construiești cu mai multă încredere traseul tău profesional și personal.",
      hero_cta: "Programează o discuție",
      hero_cta2: "Vezi serviciile",

      about_tag: "Despre",
      about_title: "Un spațiu sigur pentru reflecție, claritate și acțiune",
      about_p1: 'Sunt <strong>Nedeloiu Maria</strong> și ofer coaching profesional pentru persoane care își doresc mai multă claritate, echilibru și progres în carieră, leadership și viața de zi cu zi.',
      about_p2: "Lucrez cu oameni aflați în etape diferite ale dezvoltării lor: de la tineri profesioniști care își caută direcția, până la manageri, antreprenori și femei care își consolidează rolul de leadership.",
      about_p3: "Abordarea mea este caldă, empatică și orientată spre rezultate concrete, astfel încât fiecare sesiune să se transforme în pași reali și sustenabili.",
      about_youtube: "🎥 Află mai multe despre mine pe YouTube",

      services_tag: "Servicii",
      services_title: "Cum te pot ajuta",
      service_career: "Pentru clarificarea direcției profesionale, schimbări de carieră, pregătire pentru noi roluri și creștere în încredere.",
      service_executive: "Pentru lideri și manageri care vor să ia decizii mai clare, să își dezvolte impactul și să gestioneze mai bine provocările.",
      service_life: "Pentru echilibru, claritate personală, depășirea blocajelor și alinierea dintre viața profesională și cea personală.",
      service_leadership: "Pentru dezvoltarea stilului propriu de leadership, comunicare, influență, încredere și prezență profesională.",

      gallery_tag: "Atmosferă",
      gallery_title: "Un cadru cald și profesionist",

      coaching_tag: "Resurse",
      coaching_title: "Ce este coachingul și cum funcționează?",
      coaching_p1: "<strong>Coachingul</strong> este un proces colaborativ și structurat prin care un coach profesionist te ajută să îți clarifici obiectivele, să identifici resursele interioare și să treci la acțiune concretă.",
      coaching_p2: 'Spre deosebire de terapie sau consiliere, coachingul se concentrează pe <strong>prezent și viitor</strong> — pe ceea ce vrei să construiești, nu pe ceea ce s-a întâmplat în trecut.',
      coaching_p3: "<strong>Cum funcționează?</strong> Prin întrebări puternice, ascultare activă și instrumente specifice, coachul te ghidează să găsești propriile răspunsuri. Nu îți dă sfaturi, ci te susține să descoperi ce funcționează cel mai bine pentru tine.",
      coaching_p4: "<strong>Avantajele coachingului:</strong>",
      benefit_1: "✅ Claritate în luarea deciziilor profesionale și personale",
      benefit_2: "✅ Creșterea încrederii în sine și a motivației",
      benefit_3: "✅ Dezvoltarea abilităților de leadership și comunicare",
      benefit_4: "✅ Depășirea blocajelor și a tiparelor limitative",
      benefit_5: "✅ Echilibru mai bun între viața profesională și cea personală",
      benefit_6: "✅ Rezultate concrete și măsurabile în timp scurt",

      audience_tag: "Pentru cine este",
      audience_title: "Lucrez cu oameni care vor să crească autentic",
      audience_1: "Angajați care vor mai multă claritate și progres",
      audience_2: "Manageri care doresc impact și echilibru",
      audience_3: "Antreprenori care caută focus și direcție",
      audience_4: "Femei în leadership care vor să își consolideze vocea",
      audience_5: "Tineri profesioniști la început de drum",
      audience_6: "Persoane aflate într-o tranziție profesională sau personală",

      process_tag: "Cum lucrez",
      process_title: "Un proces simplu și clar",
      step1_title: "Discuție inițială",
      step1_desc: "Ne cunoaștem și înțelegem contextul, nevoile și obiectivele tale.",
      step2_title: "Clarificarea obiectivelor",
      step2_desc: "Definim direcția și rezultatele pe care vrei să le obții.",
      step3_title: "Sesiuni de coaching",
      step3_desc: "Lucrăm 1-la-1 pentru conștientizare, decizie și acțiune.",
      step4_title: "Plan de acțiune",
      step4_desc: "Transformăm insight-urile în pași practici și sustenabili.",

      testimonials_tag: "Testimoniale",
      testimonials_title: "Ce spun clienții despre experiența de coaching",
      testimonial_1: `„Am obținut mai multă claritate în carieră și curajul de a lua decizii importante pentru mine."`,
      testimonial_1_author: "— Client career coaching",
      testimonial_2: `„Sesiunile m-au ajutat să îmi înțeleg mai bine stilul de leadership și să comunic mai eficient cu echipa."`,
      testimonial_2_author: "— Client leadership coaching",
      testimonial_3: `„Am simțit susținere, structură și multă claritate. Procesul a fost cald și foarte util."`,
      testimonial_3_author: "— Client executive coaching",
      testimonial_video: "🎥 Vezi testimonialul video",

      booking_tag: "Programare",
      booking_title: "Rezervă direct din calendar",
      booking_desc: "Alege ziua și ora potrivită pentru o discuție introductivă direct din Google Calendar.",
      booking_card_title: "Programare online",
      booking_card_desc: "Apasă pe butonul de mai jos pentru a deschide pagina de programări și a selecta intervalul disponibil care ți se potrivește.",
      booking_card_btn: "Deschide calendarul de programări",

      contact_tag: "Contact",
      contact_title: "Hai să vorbim",
      contact_desc: "Dacă simți că este momentul pentru mai multă claritate și susținere, te invit să mă contactezi.",
      contact_call: "Sună",
      contact_email: "Trimite email",

      footer_copy: "© " + new Date().getFullYear() + " Nedeloiu Maria. Toate drepturile rezervate.",
      footer_top: "Înapoi sus ↑",
    }
  };

  /* ═══════════════════════════════════════════
     LANGUAGE SWITCHER
     ═══════════════════════════════════════════ */

  function getSavedLang() {
    try { return localStorage.getItem("lang"); } catch(e) { return null; }
  }
  function saveLang(lang) {
    try { localStorage.setItem("lang", lang); } catch(e) {}
  }

  var currentLang = getSavedLang() || "ro";

  function setLanguage(lang) {
    currentLang = lang;
    saveLang(lang);
    document.documentElement.lang = lang;

    var t = translations[lang];
    if (!t) return;

    var elements = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < elements.length; i++) {
      var el = elements[i];
      var key = el.getAttribute("data-i18n");
      if (key && t.hasOwnProperty(key)) {
        el.innerHTML = t[key];
      }
    }

    // Update toggle buttons (desktop + mobile)
    var btnText = lang === "ro" ? "EN" : "RO";
    if (langToggle) langToggle.textContent = btnText;
    if (langToggleMobile) langToggleMobile.textContent = btnText;

    // Update logo subtitle
    var logo = document.querySelector(".logo");
    if (logo) {
      logo.setAttribute("data-subtitle", lang === "en" ? "professional coaching" : "coaching profesional");
    }

    // Update page title
    document.title = lang === "en"
      ? "Nedeloiu Maria | Professional Coaching"
      : "Nedeloiu Maria | Coaching profesional";
  }

  // Language toggle click (desktop)
  if (langToggle) {
    langToggle.addEventListener("click", function () {
      var newLang = currentLang === "ro" ? "en" : "ro";
      setLanguage(newLang);
    });
  }

  // Language toggle click (mobile)
  if (langToggleMobile) {
    langToggleMobile.addEventListener("click", function () {
      var newLang = currentLang === "ro" ? "en" : "ro";
      setLanguage(newLang);
    });
  }

  // Apply language on load
  setLanguage(currentLang);

  /* ═══════════════════════════════════════════
     MENU & UI
     ═══════════════════════════════════════════ */

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      var isOpen = navLinks.classList.toggle("open");
      menuToggle.textContent = isOpen ? "✕" : "☰";
    });
  }

  document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");
      if (menuToggle) menuToggle.textContent = "☰";
    });
  });

  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 10) {
        header.style.boxShadow = "0 4px 20px rgba(42, 35, 32, 0.08)";
      } else {
        header.style.boxShadow = "none";
      }
    });
  }

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.getElementById("name").value.trim();
      var email = document.getElementById("email").value.trim();
      var phone = document.getElementById("phone").value.trim();
      var service = document.getElementById("service").value.trim();
      var message = document.getElementById("message").value.trim();

      var subject = encodeURIComponent("Cerere programare coaching");
      var body = encodeURIComponent(
        "Bună,\n\nNume: " + name + "\nEmail: " + email + "\nTelefon: " + phone + "\nTip coaching: " + service + "\n\nMesaj:\n" + message + "\n"
      );

      formMessage.textContent = "Cererea ta este pregătită. Se va deschide aplicația de email pentru trimitere.";
      setTimeout(function () {
        window.location.href = "mailto:maria_ned@yahoo.com?subject=" + subject + "&body=" + body;
      }, 400);
      bookingForm.reset();
    });
  }
});
