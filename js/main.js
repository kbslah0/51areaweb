document.addEventListener('DOMContentLoaded', () => {

  // ========== LOADER ==========
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 600);
  });
  setTimeout(() => loader.classList.add('hidden'), 3000);

  // ========== TYPEWRITER ==========
  const typewriter = document.getElementById('typewriter');
  let typeState = { phraseIndex: 0, charIndex: 0, isDeleting: false, timer: null };

  // ========== LANGUAGE SWITCHER ==========
  const translations = {
    en: {
      nav_home: 'Home', nav_about: 'Story', nav_products_home: 'Shoes', nav_stats: 'Stats',
      nav_timeline: 'Timeline', nav_contact: 'Contact', nav_cart: 'Cart',
      loader_sub: 'Initiating space sequence...',
      hero_badge: '— Area 51 Est. 2047 —',
      hero_subtitle: 'Shoes From Another Galaxy',
      hero_desc: 'Space-grade footwear • Alien technology • Cosmic comfort',
      hero_btn_store: 'Explore Collection',
      hero_btn_story: 'The Alien Story',
      hero_scroll: 'Scroll',
      about_tag: 'The Secret Files',
      about_title: 'The Area 51 Story',
      about_desc_1: '<strong>Area 51</strong> — In <strong>2047</strong>, a meteorite crashed near the legendary Area 51 base. Inside were <strong>alien blueprints</strong> for the most advanced footwear in the universe. We decoded them.',
      about_desc_2: 'We are not just a shoe store — we are a <strong>gateway</strong> between Earth and the cosmos. Every pair carries the essence of a distant nebula.',
      value_1: 'Alien Tech', value_2: 'Zero Gravity', value_3: 'Nebula Style',
      value_4: 'Cosmic Comfort', value_5: 'Galaxy Durability', value_6: 'Space Innovation',
      story_tag: 'Alien Communication',
      story_title: 'Transmission From Space',
      story_desc: 'Our alien allies send us the latest shoe designs through <strong>quantum frequency signals</strong> from the Andromeda galaxy. Each design is a masterpiece of extraterrestrial engineering.',
      feature_1_title: 'Alien Origin',
      feature_1_desc: 'Shoe designs inspired by ancient alien artifacts found in meteorites',
      feature_2_title: 'Zero-G Tested',
      feature_2_desc: 'Every pair tested in zero gravity chambers for maximum comfort',
      feature_3_title: 'Nebula Materials',
      feature_3_desc: 'Exclusive fabrics woven from cosmic dust and nebula fibers',
      feature_4_title: 'Galactic Warranty',
      feature_4_desc: 'Interstellar 100-year warranty covering all dimensions',
      story_btn: 'Contact Aliens',
      stats_tag: 'Galactic Data',
      stats_title: 'Cosmic Numbers',
      stats_label_1: 'Founded', stats_label_2: 'Galaxies', stats_label_3: 'Pairs Sold', stats_label_4: 'Star Ratings',
      tl_tag: 'Space Timeline',
      tl_title: 'Our Cosmic Journey',
      tl_1_title: 'Discovery', tl_1_desc: 'Alien meteorite crash detected near Area 51',
      tl_2_title: 'Decoding', tl_2_desc: 'Scientists decode alien shoe blueprints from the artifact',
      tl_3_title: 'First Pair', tl_3_desc: 'First Nebula Runner shoe created using alien technology',
      tl_4_title: 'Galaxy Launch', tl_4_desc: 'Area 51 store opens its doors to Earth and beyond',
      tl_5_title: 'Alien Partnership', tl_5_desc: 'Official partnership with the Andromeda shoe council',
      tl_6_title: '1 Million Pairs', tl_6_desc: 'One million pairs sold across 12 galaxies',
      tl_7_title: 'Quantum Tech', tl_7_desc: 'New quantum gravity technology integrated into shoes',
      tl_8_title: '2047 & Beyond', tl_8_desc: 'Continuing to push the boundaries of space footwear',
      testimonials_tag: 'Alien Reviews',
      testimonials_title: 'What Beings Say',
      testimonial_1: 'Best shoes in the Milky Way! My feet have never felt this light.',
      testimonial_2: 'The alien technology is real. I can walk on walls now.',
      testimonial_3: 'Area 51 shoes are out of this world! The Nebula Runner is my favorite.',
      testimonial_1_author: 'Zorblax', testimonial_1_date: 'Andromeda, Class M',
      testimonial_2_author: 'Luna-7', testimonial_2_date: 'Mars Colony',
      testimonial_3_author: 'Captain Nova', testimonial_3_date: 'Space Station 9',
      contact_tag: 'Signal', contact_title: 'Send Us a Signal', contact_heading: 'Beam Us a Message',
      contact_desc: 'Use quantum frequency to send us a message. We reply within 3 light-years.',
      form_name: 'Your Name', form_email: 'Your Galaxy', form_message: 'Your Message...',
      form_submit: 'Transmit Signal',
      footer_desc: 'Shoes From Another Galaxy — Since 2047',
      footer_quick_title: 'Quick Links', footer_link_about: 'Story', footer_link_products: 'Shoes',
      footer_link_contact: 'Contact', footer_follow_title: 'Follow Us',
      footer_categories_title: 'Categories', footer_copy: '© 2047 Area 51. All rights reserved.',
      footer_made: 'Made with', footer_made_from: 'from Andromeda Galaxy',
      ufo_msg_1: 'Welcome to Area 51! Your shoes are ready for pickup 🛸',
      ufo_msg_2: 'New shipment from Nebula X just arrived!',
      ufo_msg_3: 'Quantum frequency active... designs incoming! 👾',
      ufo_active: 'Signal Active',
      blog_tag: 'Galactic News', blog_title: 'Space Updates',
      blog_1_title: 'Nebula X Collection', blog_1_desc: 'New alien shoes from the Nebula X galaxy now available',
      blog_2_title: 'Zero-G Technology', blog_2_desc: 'Introducing anti-gravity soles for the ultimate comfort',
      blog_3_title: 'Alien Partnership', blog_3_desc: 'Official collaboration with Andromeda shoe designers',
      prod_1_name: 'Nebula Runner', prod_2_name: 'Lunar Walker', prod_3_name: 'Alien Stomper',
      prod_4_name: 'Galaxy Glide', prod_5_name: 'Cosmo Kick', prod_6_name: 'UFO Drift',
      prod_1_desc: 'Light-speed running shoes with alien propulsion', prod_2_desc: 'Moon-walking boots for zero gravity comfort',
      prod_3_desc: 'Heavy-duty sneakers built for asteroid terrain', prod_4_desc: 'Sleek casual shoes with nebula weave',
      prod_5_desc: 'Sport shoes with quantum energy return', prod_6_desc: 'Unique UFO-inspired design with levitation soles',
      buy_btn: 'Add to Orbit',
      add_to_cart: 'Added to orbit!',
      cart_empty: 'Orbit is empty',
      checkout_whatsapp: 'Order via WhatsApp',
      footer_link_contact_sub: 'Contact',
      store_tag: 'Galactic Collection', store_title_home: 'Featured Footwear',
      store_btn: 'View All Shoes',
    },
    ar: {
      nav_home: 'الرئيسية', nav_about: 'القصة', nav_products_home: 'الأحذية', nav_stats: 'الإحصائيات',
      nav_timeline: 'المسيرة', nav_contact: 'اتصل بنا', nav_cart: 'السلة',
      loader_sub: 'بدء التسلسل الفضائي...',
      hero_badge: '— Area 51 تأسست 2047 —',
      hero_subtitle: 'أحذية من مجرة أخرى',
      hero_desc: 'أحذية فضائية • تكنولوجيا فضائية • راحة كونية',
      hero_btn_store: 'استعرض المجموعة',
      hero_btn_story: 'قصة الفضائيين',
      hero_scroll: 'لأسفل',
      about_tag: 'الملفات السرية',
      about_title: 'قصة Area 51',
      about_desc_1: '<strong>Area 51</strong> — في عام <strong>2047</strong>، سقط نيزك بالقرب من قاعدة Area 51 الأسطورية. بداخله <strong>مخططات فضائية</strong> لأحدث أحذية في الكون. قمنا بفك شفرتها.',
      about_desc_2: 'نحن لسنا مجرد متجر أحذية — نحن <strong>بوابة</strong> بين الأرض والكون. كل زوج يحمل جوهر سديم بعيد.',
      value_1: 'تقنية فضائية', value_2: 'جاذبية صفرية', value_3: 'أناقة سديمية',
      value_4: 'راحة كونية', value_5: 'متانة مجرية', value_6: 'ابتكار فضائي',
      story_tag: 'اتصال فضائي',
      story_title: 'إرسال من الفضاء',
      story_desc: 'الحلفاء الفضائيون يرسلون لنا أحدث تصاميم الأحذية عبر <strong>ترددات كمية</strong> من مجرة أندروميدا. كل تصميم هو تحفة هندسية خارج كوكب الأرض.',
      feature_1_title: 'أصل فضائي',
      feature_1_desc: 'تصاميم أحذية مستوحاة من قطع أثرية فضائية قديمة وجدت في النيازك',
      feature_2_title: 'اختبار الجاذبية الصفرية',
      feature_2_desc: 'كل زوج تم اختباره في غرف جاذبية صفرية لأقصى راحة',
      feature_3_title: 'مواد سديمية',
      feature_3_desc: 'أقمشة حصرية منسوجة من الغبار الكوني وألياف السديم',
      feature_4_title: 'ضمان مجري',
      feature_4_desc: 'ضمان بين نجمي لمدة 100 عام يغطي جميع الأبعاد',
      story_btn: 'اتصل بالفضائيين',
      stats_tag: 'بيانات مجرية',
      stats_title: 'أرقام كونية',
      stats_label_1: 'تأسسنا', stats_label_2: 'مجرة', stats_label_3: 'زوج مباع', stats_label_4: 'تقييم نجمي',
      tl_tag: 'خط زمني فضائي',
      tl_title: 'رحلتنا الكونية',
      tl_1_title: 'الاكتشاف', tl_1_desc: 'سقوط نيزك فضائي قرب قاعدة Area 51',
      tl_2_title: 'فك الشفرة', tl_2_desc: 'العلماء يفكون شفرة مخططات الأحذية الفضائية من النيزك',
      tl_3_title: 'أول زوج', tl_3_desc: 'أول حذاء Nebula Runner مصنوع بتقنية فضائية',
      tl_4_title: 'إطلاق مجري', tl_4_desc: 'افتتاح متجر Area 51 للأرض وما وراءها',
      tl_5_title: 'شراكة فضائية', tl_5_desc: 'شراكة رسمية مع مجلس أحذية أندروميدا',
      tl_6_title: 'مليون زوج', tl_6_desc: 'مليون زوج مباع عبر 12 مجرة',
      tl_7_title: 'تقنية كمية', tl_7_desc: 'تقنية الجاذبية الكمية الجديدة المدمجة في الأحذية',
      tl_8_title: '2047 وما بعد', tl_8_desc: 'نواصل دفع حدود أحذية الفضاء',
      testimonials_tag: 'تقييمات فضائية',
      testimonials_title: 'ماذا يقول الكائنات',
      testimonial_1: 'أفضل أحذية في درب التبانة! لم أشعر بقدمي بهذه الخفة.',
      testimonial_2: 'التقنية الفضائية حقيقية. أستطيع المشي على الجدران الآن.',
      testimonial_3: 'أحذية Area 51 خيالية! Nebula Runner هو المفضل لدي.',
      testimonial_1_author: 'زوربلاكس', testimonial_1_date: 'أندروميدا، فئة M',
      testimonial_2_author: 'لونا-7', testimonial_2_date: 'مستعمرة المريخ',
      testimonial_3_author: 'الكابتن نوفا', testimonial_3_date: 'محطة الفضاء 9',
      contact_tag: 'إشارة', contact_title: 'أرسل لنا إشارة', contact_heading: 'أرسل لنا رسالة',
      contact_desc: 'استخدم التردد الكمي لإرسال رسالة لنا. نرد خلال 3 سنوات ضوئية.',
      form_name: 'اسمك', form_email: 'مجرتك', form_message: 'رسالتك...',
      form_submit: 'إرسال الإشارة',
      footer_desc: 'أحذية من مجرة أخرى — منذ 2047',
      footer_quick_title: 'روابط سريعة', footer_link_about: 'القصة', footer_link_products: 'الأحذية',
      footer_link_contact: 'اتصل بنا', footer_follow_title: 'تابعنا',
      footer_categories_title: 'التصنيفات', footer_copy: '© 2047 Area 51. جميع الحقوق محفوظة.',
      footer_made: 'صنع بـ', footer_made_from: 'من مجرة أندروميدا',
      ufo_msg_1: 'مرحبًا بكم في Area 51! أحذيتكم جاهزة للاستلام 🛸',
      ufo_msg_2: 'شحنة جديدة من سديم X وصلت للتو!',
      ufo_msg_3: 'التردد الكمي نشط... تصاميم واردة! 👾',
      ufo_active: 'الإشارة نشطة',
      blog_tag: 'أخبار مجرية', blog_title: 'تحديثات فضائية',
      blog_1_title: 'مجموعة سديم X', blog_1_desc: 'أحذية فضائية جديدة من مجرة سديم X متاحة الآن',
      blog_2_title: 'تقنية الجاذبية الصفرية', blog_2_desc: 'نقدم النعال المضادة للجاذبية لأقصى راحة',
      blog_3_title: 'شراكة فضائية', blog_3_desc: 'تعاون رسمي مع مصممي أحذية أندروميدا',
      prod_1_name: 'Nebula Runner', prod_2_name: 'Lunar Walker', prod_3_name: 'Alien Stomper',
      prod_4_name: 'Galaxy Glide', prod_5_name: 'Cosmo Kick', prod_6_name: 'UFO Drift',
      prod_1_desc: 'أحذية جري بسرعة الضوء بدفع فضائي', prod_2_desc: 'أحذية مشي قمرية لراحة الجاذبية الصفرية',
      prod_3_desc: 'أحذية ثقيلة مبنية لتضاريس الكويكبات', prod_4_desc: 'أحذية كاجوال أنيقة بنسيج سديمي',
      prod_5_desc: 'أحذية رياضية مع ارتداد طاقة كمي', prod_6_desc: 'تصميم فريد مستوحى من الأطباق الطائرة',
      buy_btn: 'أضف للمدار',
      add_to_cart: 'تمت الإضافة للمدار!',
      cart_empty: 'المدار فارغ',
      checkout_whatsapp: 'اطلب عبر واتساب',
      footer_link_contact_sub: 'اتصل بنا',
      store_tag: 'مجموعة مجرية', store_title_home: 'أحذية مميزة',
      store_btn: 'عرض جميع الأحذية',
    }
  };

  let currentLang = localStorage.getItem('a51-lang') || 'en';

  const typewriterPhrases = {
    en: [
      'Shoes from another galaxy',
      'Alien technology on your feet',
      'Walk on the moon — literally',
      'Area 51 — since 2047',
      'Space-grade footwear'
    ],
    ar: [
      'أحذية من مجرة أخرى',
      'تقنية فضائية على قدميك',
      'امشِ على القمر — حرفيًا',
      'Area 51 — منذ 2047',
      'أحذية فضائية'
    ]
  };

  function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        el.textContent = t[key];
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) {
        el.placeholder = t[key];
      }
    });

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('ltr', lang === 'en');
    localStorage.setItem('a51-lang', lang);

    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
      langToggle.textContent = lang === 'en' ? 'AR' : 'EN';
    }

    if (typewriter) {
      typewriter.textContent = '';
      if (typeof resetTypewriter === 'function') {
        resetTypewriter();
      } else {
        clearTimeout(typeState.timer);
        typeState.phraseIndex = 0;
        typeState.charIndex = 0;
        typeState.isDeleting = false;
        typeState.timer = setTimeout(runTypeEffect, 400);
      }
    }

    updateCartDisplay();

    // Notify featured products grid to re-render
    document.dispatchEvent(new CustomEvent('a51-lang-change', { detail: { lang } }));
  }

  const savedLang = localStorage.getItem('a51-lang') || 'en';
  setLanguage(savedLang);

  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      setLanguage(currentLang === 'en' ? 'ar' : 'en');
    });
  }

  // ========== THEME ==========
  const themeToggle = document.getElementById('themeToggle');
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('a51-theme', theme);
    if (themeToggle) {
      themeToggle.innerHTML = theme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    }
  }
  const savedTheme = localStorage.getItem('a51-theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  applyTheme(savedTheme);
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // ========== THREE.JS — SPACE GALAXY ==========
  const container = document.getElementById('three-container');
  if (container && typeof THREE !== 'undefined') {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const parameters = {
      count: 4000,
      size: 0.05,
      radius: 10,
      branches: 5,
      spin: 2,
      randomness: 0.6,
      randomnessPower: 3,
      insideColor: '#00ff41',
      outsideColor: '#ff00aa'
    };

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(parameters.count * 3);
    const colors = new Float32Array(parameters.count * 3);

    const colorInside = new THREE.Color(parameters.insideColor);
    const colorOutside = new THREE.Color(parameters.outsideColor);

    for (let i = 0; i < parameters.count; i++) {
      const i3 = i * 3;
      const radius = Math.random() * parameters.radius;
      const branchAngle = (i % parameters.branches) / parameters.branches * Math.PI * 2;
      const spinAngle = radius * parameters.spin;
      const randomX = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;
      const randomY = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;
      const randomZ = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;

      positions[i3]     = Math.cos(branchAngle + spinAngle) * radius + randomX;
      positions[i3 + 1] = randomY;
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

      const mixedColor = colorInside.clone().lerp(colorOutside, radius / parameters.radius);
      colors[i3]     = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: parameters.size,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: true,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.9
    });

    const galaxy = new THREE.Points(geometry, material);
    scene.add(galaxy);

    camera.position.z = 7;

    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    });

    window.addEventListener('resize', () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });

    function animateGalaxy() {
      targetX += (mouseX - targetX) * 0.02;
      targetY += (mouseY - targetY) * 0.02;

      galaxy.rotation.y += 0.0015;
      galaxy.rotation.x = targetY * 0.3;
      galaxy.rotation.z = targetX * 0.1;

      renderer.render(scene, camera);
      requestAnimationFrame(animateGalaxy);
    }
    animateGalaxy();
  }

  // ========== CUSTOM CURSOR ==========
  const cursor = document.getElementById('cursor');
  const cursorTrail = document.getElementById('cursorTrail');

  if (cursor && cursorTrail && window.innerWidth > 768) {
    let trailX = 0, trailY = 0;

    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      trailX = e.clientX;
      trailY = e.clientY;
    });

    let trailCurrentX = 0, trailCurrentY = 0;
    function updateTrail() {
      trailCurrentX += (trailX - trailCurrentX) * 0.08;
      trailCurrentY += (trailY - trailCurrentY) * 0.08;
      cursorTrail.style.left = trailCurrentX + 'px';
      cursorTrail.style.top = trailCurrentY + 'px';
      requestAnimationFrame(updateTrail);
    }
    updateTrail();

    const hoverTargets = document.querySelectorAll('a, button, .product-card-home, .player-card, .feature-item, .stats-card, .tl-item, .testimonial-card, .social-link, .value-item');
    hoverTargets.forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });

    document.addEventListener('mousedown', () => cursor.style.transform = 'translate(-50%, -50%) scale(0.8)');
    document.addEventListener('mouseup', () => cursor.style.transform = 'translate(-50%, -50%) scale(1)');
  } else if (cursor && cursorTrail) {
    cursor.style.display = 'none';
    cursorTrail.style.display = 'none';
  }

  // ========== SCROLL PROGRESS ==========
  const scrollProgress = document.getElementById('scrollProgress');
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = progress + '%';
  });

  // ========== NAVBAR ==========
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    navbar.classList.toggle('scrolled', currentScroll > 80);

    if (currentScroll > 120 && currentScroll > lastScroll) {
      navbar.classList.add('hidden');
    } else {
      navbar.classList.remove('hidden');
    }
    lastScroll = currentScroll;

    updateActiveLink();
  });

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  function updateActiveLink() {
    const sections = document.querySelectorAll('.section, .hero');
    let current = '';
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 300) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }

  // ========== DATA REVEAL ==========
  const revealElements = document.querySelectorAll('[data-reveal]');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  revealElements.forEach(el => revealObserver.observe(el));

  // ========== COUNTER ANIMATION ==========
  const statNumbers = document.querySelectorAll('.stats-number');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'));
        animateCounter(el, target);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  statNumbers.forEach(el => counterObserver.observe(el));

  function animateCounter(el, target) {
    let current = 0;
    const steps = 50;
    const increment = target / steps;
    const stepTime = 1500 / steps;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        el.textContent = target;
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current);
      }
    }, stepTime);
  }

  // ========== STATS RING ==========
  const statCards = document.querySelectorAll('.stats-card');
  const ringObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const ring = card.querySelector('.ring-fill');
        if (ring) {
          const targetOffset = parseFloat(ring.style.getPropertyValue('--target')) || 0;
          setTimeout(() => {
            ring.style.setProperty('--offset', targetOffset);
          }, 300);
        }
        ringObserver.unobserve(card);
      }
    });
  }, { threshold: 0.3 });
  statCards.forEach(card => ringObserver.observe(card));

  // ========== TYPEWRITER ==========
  if (typewriter) {
    function getPhrases() {
      return typewriterPhrases[currentLang] || typewriterPhrases.en;
    }

    function runTypeEffect() {
      const phrases = getPhrases();
      const currentPhrase = phrases[typeState.phraseIndex];
      if (typeState.isDeleting) {
        typewriter.textContent = currentPhrase.substring(0, typeState.charIndex - 1);
        typeState.charIndex--;
      } else {
        typewriter.textContent = currentPhrase.substring(0, typeState.charIndex + 1);
        typeState.charIndex++;
      }

      if (!typeState.isDeleting && typeState.charIndex === currentPhrase.length) {
        typeState.isDeleting = true;
        typeState.timer = setTimeout(runTypeEffect, 2000);
        return;
      }
      if (typeState.isDeleting && typeState.charIndex === 0) {
        typeState.isDeleting = false;
        typeState.phraseIndex = (typeState.phraseIndex + 1) % phrases.length;
        typeState.timer = setTimeout(runTypeEffect, 400);
        return;
      }

      const speed = typeState.isDeleting ? 40 : 80;
      typeState.timer = setTimeout(runTypeEffect, speed);
    }

    typeState.timer = setTimeout(runTypeEffect, 2000);
  }

  function resetTypewriter() {
    if (!typewriter) return;
    clearTimeout(typeState.timer);
    typeState.phraseIndex = 0;
    typeState.charIndex = 0;
    typeState.isDeleting = false;
    typewriter.textContent = '';
    typeState.timer = setTimeout(runTypeEffect, 400);
  }

  // ========== MAGNETIC BUTTONS ==========
  const magneticBtns = document.querySelectorAll('.magnetic');
  magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      if (window.innerWidth <= 768) return;
      const rect = btn.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
      btn.style.transform = `translate(${x}px, ${y}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
    });
  });

  // ========== 3D TILT — About Card ==========
  const aboutTilt = document.getElementById('aboutTilt');
  if (aboutTilt && window.innerWidth > 768) {
    const parent = aboutTilt.parentElement;
    parent.addEventListener('mousemove', (e) => {
      const rect = parent.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      aboutTilt.style.transform = `
        perspective(800px)
        rotateY(${x * 15}deg)
        rotateX(${-y * 15}deg)
        translateZ(20px)
      `;
    });
    parent.addEventListener('mouseleave', () => {
      aboutTilt.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) translateZ(0)';
    });
  }

  // ========== 3D TILT — Product Cards ==========
  const productCards = document.querySelectorAll('.product-card-home');
  productCards.forEach(card => {
    if (window.innerWidth <= 768) return;
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `
        perspective(600px)
        rotateY(${x * 8}deg)
        rotateX(${-y * 8}deg)
        translateZ(10px)
      `;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg) translateZ(0)';
    });
  });

  // ========== BACK TO TOP ==========
  const backToTop = document.getElementById('backToTop');
  const bttRing = backToTop?.querySelector('.btt-ring circle');

  window.addEventListener('scroll', () => {
    if (!backToTop) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight);

    backToTop.classList.toggle('visible', scrollTop > 500);

    if (bttRing) {
      const circumference = 132;
      bttRing.style.strokeDashoffset = circumference - (progress * circumference);
    }
  });

  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ========== CONTACT FORM ==========
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('.btn');
      const original = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + (currentLang === 'en' ? 'Transmitting...' : 'جاري الإرسال...');
      btn.disabled = true;

      const formData = new FormData(contactForm);
      fetch(contactForm.action, {
        method: 'POST',
        body: formData
      }).then(() => {
        btn.innerHTML = '<i class="fas fa-check-circle"></i> ' + (currentLang === 'en' ? 'Sent ✓' : 'تم الإرسال ✓');
        btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
        setTimeout(() => {
          btn.innerHTML = original;
          btn.style.background = '';
          btn.disabled = false;
          contactForm.reset();
        }, 2500);
      }).catch(() => {
        btn.innerHTML = '<i class="fas fa-check-circle"></i> ' + (currentLang === 'en' ? 'Sent ✓' : 'تم الإرسال ✓');
        btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
        setTimeout(() => {
          btn.innerHTML = original;
          btn.style.background = '';
          btn.disabled = false;
          contactForm.reset();
        }, 2500);
      });
    });
  }

  // ========== MARQUEE ==========
  const marqueeTrack = document.querySelector('.marquee-track');
  if (marqueeTrack) {
    const clone = marqueeTrack.cloneNode(true);
    marqueeTrack.parentElement.appendChild(clone);
  }

  // ========== PARALLAX ==========
  const heroContent = document.querySelector('.hero-content');
  const heroFloating = document.querySelector('.hero-floating');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (heroContent && scrollY < window.innerHeight) {
      heroContent.style.transform = `translateY(${scrollY * 0.15}px)`;
      heroContent.style.opacity = 1 - (scrollY / (window.innerHeight * 0.8));
    }
    if (heroFloating && scrollY < window.innerHeight) {
      heroFloating.style.transform = `translateY(${scrollY * 0.05}px)`;
    }
  });

  // ========== UFO TYPING ==========
  const typingMsg = document.querySelector('.typing-dots');
  if (typingMsg) {
    setInterval(() => {
      typingMsg.style.opacity = '0';
      setTimeout(() => typingMsg.style.opacity = '1', 300);
    }, 3000);
  }

  // ========== SMOOTH SCROLL ==========
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ========== PAGE TRANSITION ==========
  const transitionOverlay = document.getElementById('pageTransition');
  if (transitionOverlay) {
    document.querySelectorAll('a[href$=".html"], a[href="/products"], a[href="/products.html"]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        transitionOverlay.classList.add('active');
        setTimeout(() => {
          window.location.href = href;
        }, 350);
      });
    });
    window.addEventListener('pageshow', () => {
      transitionOverlay.classList.remove('active');
    });
  }

  // ========== CART SYSTEM ==========
  let cart = JSON.parse(localStorage.getItem('a51-cart') || '[]');

  function updateCartDisplay() {
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    const badges = document.querySelectorAll('.cart-count');
    badges.forEach(b => {
      if (count > 0) {
        b.textContent = count;
        b.classList.add('visible');
      } else {
        b.classList.remove('visible');
      }
    });
    const cartLinks = document.querySelectorAll('.cart-link .cart-text');
    cartLinks.forEach(l => {
      l.textContent = currentLang === 'en' ? `Cart (${count})` : `السلة (${count})`;
    });
  }

  window.addToCart = function(name, price, icon) {
    const existing = cart.find(item => item.name === name);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ name, price, icon, qty: 1 });
    }
    localStorage.setItem('a51-cart', JSON.stringify(cart));
    updateCartDisplay();
    showNotification(currentLang === 'en' ? 'Added to orbit! 🛸' : 'تمت الإضافة للمدار! 🛸');
  };

  function showNotification(msg) {
    const notif = document.getElementById('cartNotification');
    if (!notif) return;
    notif.querySelector('span').textContent = msg;
    notif.classList.add('show');
    clearTimeout(notif._timeout);
    notif._timeout = setTimeout(() => notif.classList.remove('show'), 2000);
  }

  updateCartDisplay();

  // ========== HERO PARTICLES ==========
  const particlesContainer = document.querySelector('.hero-particles');
  if (particlesContainer) {
    for (let i = 0; i < 30; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.animationDuration = (10 + Math.random() * 20) + 's';
      p.style.animationDelay = Math.random() * 15 + 's';
      p.style.width = p.style.height = (2 + Math.random() * 3) + 'px';
      particlesContainer.appendChild(p);
    }
  }

  console.log('%c AREA 51 ', 'background: #00ff41; color: #05050f; font-size: 24px; font-weight: bold; padding: 10px 20px; border-radius: 8px; font-family: Teko, sans-serif; letter-spacing: 3px;');
  console.log('%c Shoes From Another Galaxy ', 'font-size: 14px; color: #8899cc;');
});
