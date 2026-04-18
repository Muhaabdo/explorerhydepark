// === Projects Data ===
const projectsData = {
  'hyde-new-cairo': {
    id: 'hyde-new-cairo',
    name: 'هايد بارك القاهرة الجديدة',
    location: 'القاهرة الجديدة',
    image: 'assets/Hyde park New Cairo/Hyde park new cairo live photos _page-0001.jpg',
    description: 'مشروع هايد بارك بموقع استراتيجي في القاهرة الجديدة، يجمع بين التصميم الحديث والخدمات المتكاملة.',
    startingPrice: 9100000,
    installmentTerms: {
      downPayment: 5,
      years: 8
    },
    unitTypes: ['Apartment', 'Standalone', 'Townhouse'],
    amenities: ['حديقة مركزية', 'منطقة تجارية', 'منطقة تسوق', 'مدارس دولية'],
    phone: '+20100123456',
    availability: {
      availableUnits: 50,
      minPrice: 9100000,
      minPriceByType: {
        Standalone: 79750000,
        Townhouse: 31990000
      },
      bedrooms: ['1', '2', '3'],
      areaByType: {
        Apartment: [75, 178.84],
        Standalone: [327.7, 1287],
        Townhouse: [159, 216]
      }
    }
  },
  'hyde-central': {
    id: 'hyde-central',
    name: 'هايد بارك سنترال',
    location: 'القاهرة الجديدة',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop',
    description: 'مشروع هايد بارك سنترال في قلب القاهرة الجديدة، يوفر تجربة عيش متقدمة مع أحدث الخدمات.',
    startingPrice: 8700000,
    installmentTerms: {
      downPayment: 5,
      years: 8
    },
    unitTypes: ['Apartment', 'Quad', 'Standalone', 'Townhouse', 'Twin House'],
    amenities: ['مول تسوق', 'مجمع جيم', 'مطاعم', 'موقف سيارات ذكي'],
    phone: '+20100234567',
    availability: {
      availableUnits: 51,
      minPrice: 8700000,
      bedrooms: ['1', '2', '3'],
      areaByType: {
        Apartment: [93.36, 150.13],
        Quad: [217, 217],
        Standalone: [265, 265],
        Townhouse: [212, 212],
        'Twin House': [217, 217]
      }
    }
  },
  'hyde-terraces': {
    id: 'hyde-terraces',
    name: 'هايد بارك تيراسز',
    location: 'القاهرة الجديدة',
    image: 'https://images.unsplash.com/photo-1511692541581-fed11cc2c4b7?w=500&h=300&fit=crop',
    description: 'مشروع فريد يجمع بين الفخامة والخصوصية مع تراسات مطلة على الحدائق الخضراء.',
    startingPrice: 23400000,
    installmentTerms: {
      downPayment: 5,
      years: 8
    },
    unitTypes: ['Standalone', 'Townhouse'],
    amenities: ['حديقة مشتركة', 'مسطح أخضر', 'ملاعب أطفال', 'منطقة مشي'],
    phone: '+20100345678',
    availability: {
      availableUnits: 7,
      minPrice: 23400000,
      bedrooms: [],
      areaByType: {
        Standalone: [240, 285],
        Townhouse: [196, 198]
      }
    }
  },
  'tawny': {
    id: 'tawny',
    name: 'تاوني',
    location: '6 أكتوبر',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=300&fit=crop',
    description: 'مشروع تاوني في 6 أكتوبر، يتميز بالقرب من جميع الخدمات الرئيسية والمناطق التجارية.',
    startingPrice: 6000000,
    installmentTerms: {
      downPayment: 5,
      years: 8
    },
    unitTypes: ['شقق', 'دوبلكس'],
    amenities: ['حمامات سباحة', 'المساحات الخضراء', 'نادي رياضي', 'مراكز تجارية', 'مسارات للجري'],
    phone: '+20100456789',
    availability: {
      availableUnits: 28,
      minPrice: 6000000,
      bedrooms: ['2', '3', '4'],
      areaByType: {
        Apartment: [80, 160],
        Duplex: [180, 260]
      }
    }
  },
  'garden-lakes': {
    id: 'garden-lakes',
    name: 'جاردن ليكس',
    location: '6 أكتوبر',
    image: 'assets/Garden Lakes/1.jpg',
    description: 'مشروع جاردن ليكس يتميز بالمساحات الخضراء الواسعة والبحيرات الاصطناعية.',
    startingPrice: 6800000,
    installmentTerms: {
      downPayment: 5,
      years: 8
    },
    unitTypes: ['Apartment', 'Standalone', 'Townhouse', 'Twin House'],
    amenities: ['بحيرات اصطناعية', 'مسارات مشي', 'حديقة عامة', 'ملاعب رياضية'],
    phone: '+20100567890',
    availability: {
      availableUnits: 46,
      minPrice: 6800000,
      minPriceByType: {
        Apartment: 6800000,
        Standalone: 37600000,
        Townhouse: 24200000,
        'Twin House': 31300000
      },
      bedrooms: ['1', '2', '3'],
      areaByType: {
        Apartment: [71, 154.04],
        Standalone: [242, 242],
        Townhouse: [215, 215],
        'Twin House': [242, 242]
      }
    }
  },
  'signature': {
    id: 'signature',
    name: 'سيجنتشر',
    location: '6 أكتوبر',
    image: 'assets/Singnature hyde park/covers.png',
    description: 'مشروع سيجنتشر في 6 أكتوبر، يجمع بين التصميم الأنيق والموقع الاستراتيجي.',
    startingPrice: 6540000,
    installmentTerms: {
      downPayment: 10,
      years: 7
    },
    unitTypes: ['Apartment', 'Standalone', 'Townhouse', 'Twin House'],
    amenities: ['مسطح أخضر', 'صالة ألعاب', 'مطاعم', 'موقف مغطى'],
    phone: '+20100678901',
    availability: {
      availableUnits: 37,
      minPrice: 6540000,
      bedrooms: ['1', '2', '3'],
      areaByType: {
        Apartment: [68.21, 148.4],
        Standalone: [240, 268],
        Townhouse: [195, 195],
        'Twin House': [215, 215]
      }
    }
  },
  'seashore': {
    id: 'seashore',
    name: 'سي شور',
    location: 'الساحل الشمالي',
    image: 'assets/Seashore/cover.webp',
    description: 'مشروع سي شور بموقع ساحر على الساحل الشمالي مع إطلالات بحرية رائعة.',
    startingPrice: 8230000,
    installmentTerms: {
      downPayment: 15,
      years: 10
    },
    unitTypes: ['Apartment', 'Beach Chalet', 'Standard Chalet', 'Townhouse'],
    amenities: ['شاطئ خاص', 'منتجع صحي', 'مطاعم فاخرة', 'ملاهي مائية'],
    phone: '+20100789012',
    availability: {
      availableUnits: 57,
      minPrice: 8230000,
      bedrooms: ['1', '2', '3'],
      areaByType: {
        Apartment: [65, 138],
        'Beach Chalet': [100, 135],
        'Standard Chalet': [76.39, 111.99],
        Townhouse: [168, 182]
      }
    }
  }
};

function formatPrice(value) {
  if (!Number.isFinite(value)) return 'غير متاح';
  return `${value.toLocaleString('ar-EG')} جنيه`;
}

function formatAreaRange(min, max) {
  if (!Number.isFinite(min) || !Number.isFinite(max)) return 'غير متاح';
  return `${min} - ${max} م2`;
}

function getProjectIdFromHref(href) {
  if (!href) return null;
  try {
    var url = new URL(href, window.location.origin);
    var fromQuery = url.searchParams.get('project');
    if (fromQuery) return fromQuery;

    var pathname = url.pathname || '';
    var match = pathname.match(/projects\/([a-z0-9-]+)\.html$/i);
    if (match && match[1]) return match[1];

    return null;
  } catch (e) {
    return null;
  }
}

function getProjectDetailsPath(projectId) {
  return `projects/${projectId}.html`;
}

function isRemoteUrl(value) {
  return /^https?:\/\//i.test(value);
}

function resolveSiteAssetPath(value) {
  if (!value) return value;
  if (isRemoteUrl(value)) return value;

  var cleanedPath = value.replace(/^\.?[\\/]/, '').replace(/\\/g, '/');
  var prefix = window.location.pathname.toLowerCase().includes('/projects/') ? '../' : '';
  return encodeURI(prefix + cleanedPath);
}

function buildImageSource(value, width, height) {
  var resolvedPath = resolveSiteAssetPath(value);
  if (!resolvedPath || !isRemoteUrl(resolvedPath)) {
    return resolvedPath;
  }

  var joiner = resolvedPath.includes('?') ? '&' : '?';
  return `${resolvedPath}${joiner}w=${width}&h=${height}&fit=crop`;
}

function getUnitTypeImage(projectId, unitType, fallbackImage) {
  var normalizedType = String(unitType || '').toLowerCase();

  if (projectId === 'hyde-new-cairo') {
    if (normalizedType.includes('apartment')) {
      return 'assets/Hyde park New Cairo/apartments.jpg';
    }

    if (normalizedType.includes('town')) {
      return 'assets/Hyde park New Cairo/town houses.jpg';
    }

    if (normalizedType.includes('standalone') || normalizedType.includes('villa')) {
      return 'assets/Hyde park New Cairo/villas.jpg';
    }
  }

  if (projectId === 'garden-lakes') {
    if (normalizedType.includes('apartment')) {
      return 'assets/Garden Lakes/apartments.jpg';
    }

    if (normalizedType.includes('town')) {
      return 'assets/Garden Lakes/Twonhouses.png';
    }

    if (normalizedType.includes('twin')) {
      return 'assets/Garden Lakes/twinhouses1.jpg';
    }

    if (normalizedType.includes('standalone') || normalizedType.includes('villa')) {
      return 'assets/Garden Lakes/villas.jpg';
    }
  }

  if (projectId === 'signature') {
    if (normalizedType.includes('apartment')) {
      return 'assets/Singnature hyde park/apartemnts.webp';
    }

    if (normalizedType.includes('town')) {
      return 'assets/Singnature hyde park/townhouses.webp';
    }

    if (normalizedType.includes('twin')) {
      return 'assets/Singnature hyde park/twinhouse.webp';
    }

    if (normalizedType.includes('standalone') || normalizedType.includes('villa')) {
      return 'assets/Singnature hyde park/villa.webp';
    }
  }

  if (projectId === 'seashore') {
    if (normalizedType.includes('apartment')) {
      return 'assets/Seashore/apartments.webp';
    }

    if (normalizedType.includes('town')) {
      return 'assets/Seashore/Townhouses.webp';
    }

    if (normalizedType.includes('chalet')) {
      return 'assets/Seashore/chalet.webp';
    }

    if (normalizedType.includes('twin')) {
      return 'assets/Seashore/twinhouse.webp';
    }
  }

  return fallbackImage;
}

let projectGalleryLightbox = null;

function initProjectGalleryLightbox() {
  if (document.body.dataset.page !== 'project-details') return;
  if (!window.GLightbox) return;

  var galleryLinks = document.querySelectorAll('.project-gallery-link');
  if (!galleryLinks.length) return;

  if (projectGalleryLightbox) {
    projectGalleryLightbox.destroy();
  }

  projectGalleryLightbox = window.GLightbox({
    selector: '.project-gallery-link',
    touchNavigation: true,
    loop: true,
    zoomable: window.innerWidth <= 560,
    openEffect: 'zoom',
    closeEffect: 'fade'
  });
}

// === Navigation Toggle ===
(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.getElementById('main-nav');

  if (!navToggle || !mainNav) return;

  // Toggle menu on button click
  navToggle.addEventListener('click', function () {
    const isOpen = mainNav.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close menu on nav link click
  mainNav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      mainNav.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Close menu on outside click
  document.addEventListener('click', function (e) {
    if (!mainNav.contains(e.target) && !navToggle.contains(e.target)) {
      mainNav.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Close menu on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      mainNav.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
})();

// === Mobile Header Hide/Show On Scroll ===
(function () {
  var siteHeader = document.querySelector('.site-header');
  var navToggle = document.querySelector('.nav-toggle');
  var mainNav = document.getElementById('main-nav');
  var mobileBreakpoint = 860;
  var lastScrollY = window.scrollY;
  var ticking = false;

  if (!siteHeader) return;

  function closeMobileNav() {
    if (!mainNav || !navToggle) return;
    mainNav.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  function updateHeaderState() {
    var currentScrollY = window.scrollY;
    var isMobile = window.innerWidth <= mobileBreakpoint;

    if (!isMobile) {
      siteHeader.style.transform = '';
      lastScrollY = currentScrollY;
      ticking = false;
      return;
    }

    if (currentScrollY <= 24) {
      siteHeader.style.transform = '';
      lastScrollY = currentScrollY;
      ticking = false;
      return;
    }

    if (currentScrollY > lastScrollY) {
      siteHeader.style.transform = 'translateY(-100%)';
      closeMobileNav();
    } else {
      siteHeader.style.transform = '';
    }

    lastScrollY = currentScrollY;
    ticking = false;
  }

  function onScroll() {
    if (ticking) return;
    window.requestAnimationFrame(updateHeaderState);
    ticking = true;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', updateHeaderState);
})();

// === Informational Cookie Banner ===
(function () {
  var storageKey = 'wzestate_cookie_notice_seen';
  var body = document.body;
  if (!body) return;

  function getStorage() {
    try {
      return window.localStorage;
    } catch (e) {
      return null;
    }
  }

  function getPrivacyPolicyPath() {
    if (window.location.pathname.toLowerCase().includes('/projects/')) {
      return '../privacy-policy.html';
    }
    return 'privacy-policy.html';
  }

  function hasSeenNotice() {
    var storage = getStorage();
    return storage ? storage.getItem(storageKey) === 'true' : false;
  }

  function markSeen() {
    var storage = getStorage();
    if (storage) {
      storage.setItem(storageKey, 'true');
    }
  }

  if (hasSeenNotice()) return;

  var banner = document.createElement('aside');
  banner.className = 'cookie-banner';
  banner.setAttribute('aria-label', 'إشعار استخدام الكوكيز');
  banner.innerHTML = `
    <div class="cookie-banner-inner">
      <p>
        يستخدم هذا الموقع ملفات تعريف الارتباط لتحسين تجربتك وتطوير المحتوى والخدمات. باستمرارك في تصفح الموقع، فإنك توافق على
        <a href="${getPrivacyPolicyPath()}">سياسة الخصوصية</a> واستخدام الكوكيز.
      </p>
    </div>
  `;

  function hideBanner() {
    if (!banner.isConnected) return;
    markSeen();
    body.classList.remove('cookie-banner-visible');
    banner.remove();
    detachListeners();
  }

  function onScroll() {
    if (window.scrollY > 24) {
      hideBanner();
    }
  }

  function onPointer(event) {
    if (!banner.contains(event.target)) {
      hideBanner();
    }
  }

  function onKeydown(event) {
    if (event.key === 'Tab' || event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      hideBanner();
    }
  }

  function detachListeners() {
    document.removeEventListener('click', onPointer, true);
    document.removeEventListener('touchstart', onPointer, true);
    document.removeEventListener('keydown', onKeydown, true);
    window.removeEventListener('scroll', onScroll, { passive: true });
  }

  body.appendChild(banner);
  body.classList.add('cookie-banner-visible');

  var privacyLink = banner.querySelector('a');
  if (privacyLink) {
    privacyLink.addEventListener('click', function () {
      markSeen();
    });
  }

  document.addEventListener('click', onPointer, true);
  document.addEventListener('touchstart', onPointer, true);
  document.addEventListener('keydown', onKeydown, true);
  window.addEventListener('scroll', onScroll, { passive: true });
})();

// === Projects Page Availability Injection ===
(function () {
  if (document.body.dataset.page !== 'projects') return;
  if (document.body.dataset.staticListing === 'true') return;

  var detailsLinks = document.querySelectorAll('a.text-link[data-project-id], a.text-link[href*="projects/"]');

  detailsLinks.forEach(function (link) {
    var projectId = link.dataset.projectId || getProjectIdFromHref(link.getAttribute('href'));
    if (!projectId || !projectsData[projectId] || !projectsData[projectId].availability) return;

    var availability = projectsData[projectId].availability;
    var card = link.closest('.project-card');
    if (!card) return;

    var existing = card.querySelector('.project-availability-meta');
    if (existing) existing.remove();

    var meta = document.createElement('p');
    meta.className = 'project-availability-meta';
    meta.textContent = `يبدأ من: ${formatPrice(availability.minPrice)}`;
    link.before(meta);
  });
})();

// === Project Details Page Loader ===
(function () {
  if (document.body.dataset.page !== 'project-details') return;

  initProjectGalleryLightbox();

  if (document.body.dataset.staticProject === 'true') return;

  // Get project ID from data attribute first, then URL params.
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = document.body.dataset.projectId || urlParams.get('project') || 'hyde-new-cairo';
  
  const projectData = projectsData[projectId];

  if (!projectData) {
    console.warn(`Project "${projectId}" not found. Using default.`);
    return;
  }

  // Populate page
  const heroTitle = document.querySelector('#project-hero h1');
  const pageTitle = document.querySelector('title');
  const pageDescription = document.querySelector('meta[name="description"]');
  const breadcrumbCurrent = document.querySelector('[data-role="breadcrumb-current"]');
  const heroSection = document.querySelector('#project-hero');
  const galleryGrid = document.getElementById('gallery-grid');
  const phoneLinks = document.querySelectorAll('[href^="tel:"], [href^="https://wa.me/"]');
  const faqContainer = document.getElementById('project-faq-list');
  const faqSchema = document.getElementById('faq-schema');
  const locationImage = document.getElementById('project-location-map');
  const highlightsGrid = document.getElementById('project-features-grid');
  const projectImageUrl = resolveSiteAssetPath(projectData.image);

  if (heroTitle) heroTitle.textContent = projectData.name;
  if (breadcrumbCurrent) breadcrumbCurrent.textContent = projectData.name;

  // Update hero location tag
  const heroLocationEl = document.getElementById('project-hero-location');
  if (heroLocationEl) {
    heroLocationEl.innerHTML = `<i class="fas fa-location-dot" aria-hidden="true"></i> ${projectData.location}`;
  }

  // Populate quick stats bar
  const statsBar = document.getElementById('project-stats-bar');
  if (statsBar) {
    const minPrice = projectData.availability && Number.isFinite(projectData.availability.minPrice)
      ? projectData.availability.minPrice
      : projectData.startingPrice;
    const statItems = [
      { icon: 'fas fa-tag', label: 'يبدأ من', value: formatPrice(minPrice) },
      { icon: 'fas fa-percent', label: 'المقدم', value: `${projectData.installmentTerms.downPayment}%` },
      { icon: 'fas fa-calendar-check', label: 'أقساط حتى', value: `${projectData.installmentTerms.years} سنوات` }
    ];
    statsBar.innerHTML = statItems.map(function (s) {
      return `<li class="stat-item"><i class="${s.icon}" aria-hidden="true"></i><span class="stat-label">${s.label}</span><strong class="stat-value">${s.value}</strong></li>`;
    }).join('');
  }

  // Inject floating WhatsApp button
  var floatBtn = document.createElement('a');
  floatBtn.className = 'float-whatsapp';
  floatBtn.href = `https://wa.me/${projectData.phone.replace('+', '')}`;
  floatBtn.target = '_blank';
  floatBtn.rel = 'noopener noreferrer';
  floatBtn.setAttribute('aria-label', 'تواصل عبر واتساب');
  floatBtn.innerHTML = '<i class="fab fa-whatsapp" aria-hidden="true"></i>';
  document.body.appendChild(floatBtn);

  if (pageTitle) {
    pageTitle.textContent = `${projectData.name} | تفاصيل المشروع`;
  }

  if (pageDescription) {
    pageDescription.setAttribute('content', `${projectData.name} في ${projectData.location} مع تفاصيل المميزات والوحدات وخطط السداد والأسئلة الشائعة.`);
  }

  // Apply hero image
  if (heroSection && projectImageUrl) {
    heroSection.style.backgroundImage = `url('${projectImageUrl}')`;
  }

  // Update all phone links
  phoneLinks.forEach(link => {
    if (link.href.startsWith('tel:')) {
      link.href = `tel:${projectData.phone}`;
    } else if (link.href.startsWith('https://wa.me/')) {
      const phoneWithoutPlus = projectData.phone.replace('+', '');
      link.href = `https://wa.me/${phoneWithoutPlus}`;
    }
  });

  // Update description sections
  const overview = document.querySelector('#overview p');
  const staticOverview = document.querySelector('#overview .project-overview-copy');
  if (!staticOverview && overview) {
    overview.textContent = projectData.description;
  }

  const galleryImagesByProject = {
    'hyde-new-cairo': [
      'assets/Hyde park New Cairo/Hyde park new cairo live photos _page-0001.jpg',
      'assets/Hyde park New Cairo/Hyde park new cairo live photos _page-0002.jpg',
      'assets/Hyde park New Cairo/Hyde park new cairo live photos _page-0003.jpg',
      'assets/Hyde park New Cairo/Hyde park new cairo live photos _page-0005.jpg',
      'assets/Hyde park New Cairo/Hyde park new cairo live photos _page-0006.jpg',
      'assets/Hyde park New Cairo/Hyde park new cairo live photos _page-0007.jpg'
    ],
    'hyde-central': [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&h=900&fit=crop',
      'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1400&h=900&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&h=900&fit=crop',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400&h=900&fit=crop',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1400&h=900&fit=crop'
    ],
    'hyde-terraces': [
      'https://images.unsplash.com/photo-1511692541581-fed11cc2c4b7?w=1400&h=900&fit=crop',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1400&h=900&fit=crop',
      'https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=1400&h=900&fit=crop',
      'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1400&h=900&fit=crop',
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1400&h=900&fit=crop'
    ],
    'tawny': [
      'assets/Tawny/1.jpg',
      'assets/Tawny/2.jpg',
      'assets/Tawny/4.jpg',
      'assets/Tawny/5.jpg',
      'assets/Tawny/6.jpg',
      'assets/Tawny/8.jpg',
      'assets/Tawny/9.jpg',
      'assets/Tawny/10.jpg',
      'assets/Tawny/10.png',
      'assets/Tawny/12.png',
      'assets/Tawny/13.png',
      'assets/Tawny/14.png',
      'assets/Tawny/15.png'
    ],
    'garden-lakes': [
      'assets/Garden Lakes/1.png',
      'assets/Garden Lakes/3.webp',
      'assets/Garden Lakes/4.webp',
      'assets/Garden Lakes/5.webp',
      'assets/Garden Lakes/6.webp'
    ],
    'signature': [
      'assets/Singnature hyde park/1.webp',
      'assets/Singnature hyde park/2.webp',
      'assets/Singnature hyde park/3.webp',
      'assets/Singnature hyde park/4.webp',
      'assets/Singnature hyde park/5.webp',
      'assets/Singnature hyde park/6.png'
    ],
    'seashore': [
      'assets/Seashore/1.webp',
      'assets/Seashore/3.webp',
      'assets/Seashore/4.webp',
      'assets/Seashore/5.webp',
      'assets/Seashore/6.webp',
      'assets/Seashore/7.jpg'
    ]
  };

  if (galleryGrid) {
    const fallbackGallery = [
      projectData.image,
      'https://images.unsplash.com/photo-1494526585095-c41746248156?w=1400&h=900&fit=crop',
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1400&h=900&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&h=900&fit=crop',
      'https://images.unsplash.com/photo-1515263487990-61b07816b324?w=1400&h=900&fit=crop'
    ];
    const galleryImages = galleryImagesByProject[projectId] || fallbackGallery;

    galleryGrid.innerHTML = galleryImages
      .map(function (imageUrl, index) {
        const extraClass = index === 0 ? ' gallery-item-main' : '';
        const fullImageUrl = resolveSiteAssetPath(imageUrl);
        const thumb = buildImageSource(imageUrl, index === 0 ? 900 : 480, index === 0 ? 620 : 350);
        return `
          <a class="gallery-item${extraClass} project-gallery-link" href="${fullImageUrl}" data-gallery="project-gallery" data-glightbox="title: ${projectData.name} - صورة ${index + 1}">
            <img src="${thumb}" alt="${projectData.name} - صورة ${index + 1}" loading="lazy" />
          </a>
        `;
      })
      .join('');

    initProjectGalleryLightbox();
  }

  // Update highlights as icon cards.
  const defaultFeatureIcons = [
    'fa-solid fa-tree-city',
    'fa-solid fa-water',
    'fa-solid fa-umbrella-beach',
    'fa-solid fa-key',
    'fa-solid fa-hand-holding-dollar',
    'fa-solid fa-shield-heart'
  ];

  const amenityIconsByProject = {
    'hyde-new-cairo': {
      'حديقة مركزية': 'fa-solid fa-tree-city',
      'منطقة تجارية': 'fa-solid fa-store',
      'منطقة تسوق': 'fa-solid fa-cart-shopping',
      'مدارس دولية': 'fa-solid fa-school'
    }
  };

  if (highlightsGrid) {
    highlightsGrid.innerHTML = projectData.amenities
      .slice(0, 6)
      .map(function (amenity, index) {
        const projectIcons = amenityIconsByProject[projectId] || {};
        const iconClass = projectIcons[amenity] || defaultFeatureIcons[index % defaultFeatureIcons.length];
        return `
          <article class="feature-item">
            <i class="${iconClass}" aria-hidden="true"></i>
            <h3>${amenity}</h3>
          </article>
        `;
      })
      .join('');
  }

  // Update location map image.
  if (locationImage) {
    locationImage.alt = `خريطة موقع ${projectData.name} في ${projectData.location}`;
  }

  // Render FAQ for strong search visibility.
  const faqItems = [
    {
      question: `أين يقع مشروع ${projectData.name}؟`,
      answer: `يقع ${projectData.name} في ${projectData.location} بالقرب من أهم المحاور والخدمات اليومية.`
    },
    {
      question: `ما أنواع الوحدات المتاحة في ${projectData.name}؟`,
      answer: `أنواع الوحدات تشمل ${projectData.unitTypes.join('، ')} حسب التوافر الحالي في المشروع.`
    },
    {
      question: `ما الأسعار وأنظمة السداد في ${projectData.name}؟`,
      answer: `السعر يبدأ من ${formatPrice(projectData.startingPrice)} مع مقدم ${projectData.installmentTerms.downPayment}% وتقسيط حتى ${projectData.installmentTerms.years} سنوات.`
    },
    {
      question: `ما أهم مميزات المشروع؟`,
      answer: `من أبرز المميزات: ${projectData.amenities.slice(0, 5).join('، ')}.`
    },
    {
      question: 'كيف أحجز وحدة أو أطلب معاينة؟',
      answer: `يمكنك التواصل مباشرة عبر الهاتف ${projectData.phone} أو واتساب لحجز معاينة ومعرفة أحدث العروض.`
    }
  ];

  if (faqContainer) {
    faqContainer.innerHTML = faqItems
      .map(function (item, index) {
        return `
          <details class="faq-item" ${index === 0 ? 'open' : ''}>
            <summary>${item.question}</summary>
            <p>${item.answer}</p>
          </details>
        `;
      })
      .join('');
  }

  if (faqSchema) {
    const schemaObject = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map(function (item) {
        return {
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer
          }
        };
      })
    };
    faqSchema.textContent = JSON.stringify(schemaObject, null, 2);
  }

  const unitsGrid = document.querySelector('#available-units .cards-grid');
  const isStaticUnitsGrid = unitsGrid && unitsGrid.hasAttribute('data-static-cards');

  // Update available units section title with starting price
  const unitsTitle = document.querySelector('#available-units h2');
  if (unitsTitle && !isStaticUnitsGrid) {
    const minPrice = projectData.availability && Number.isFinite(projectData.availability.minPrice)
      ? projectData.availability.minPrice
      : projectData.startingPrice;
    unitsTitle.textContent = `الوحدات المتاحة - السعر يبدأ من ${formatPrice(minPrice)}`;
  }

  // Render available unit cards from Excel summary.
  if (unitsGrid && !isStaticUnitsGrid && projectData.availability && projectData.availability.areaByType) {
    const areaByType = projectData.availability.areaByType;
    const bedrooms = projectData.availability.bedrooms && projectData.availability.bedrooms.length
      ? projectData.availability.bedrooms.join(' / ')
      : 'غير متاح';

    unitsGrid.innerHTML = Object.keys(areaByType)
      .map(function (type) {
        const range = areaByType[type];
        const minPriceByType = projectData.availability.minPriceByType || {};
        const unitMinPrice = Number.isFinite(minPriceByType[type])
          ? minPriceByType[type]
          : projectData.availability.minPrice;
        const unitImage = resolveSiteAssetPath(getUnitTypeImage(projectId, type, projectData.image));
        return `
          <article class="unit-card">
            <img src="${unitImage}" alt="${type}" class="card-image" />
            <h3>${type}</h3>
            <ul class="unit-meta">
              <li><i class="fas fa-ruler-combined"></i> <span class="meta-label">المساحة:</span> ${formatAreaRange(range[0], range[1])}</li>
              <li><i class="fas fa-door-open"></i> <span class="meta-label">عدد الغرف:</span> ${bedrooms}</li>
              <li><i class="fas fa-money-bill-wave"></i> <span class="meta-label">السعر يبدأ من:</span> ${formatPrice(unitMinPrice)}</li>
            </ul>
            <div class="cta-group">
              <a class="btn btn-whatsapp" href="https://wa.me/${projectData.phone.replace('+', '')}" target="_blank" rel="noopener noreferrer">واتساب</a>
              <a class="btn btn-call" href="tel:${projectData.phone}">اتصال</a>
              <button class="btn btn-installment" type="button" data-action="open-installment-popup">احسب قسطك</button>
            </div>
          </article>
        `;
      })
      .join('');
  }
})();

// === Installment Popup + FormSubmit Integration ===
(function () {
  var buttons = document.querySelectorAll('[data-action="open-installment-popup"]');
  if (!buttons.length) return;

  var body = document.body;
  var modalId = 'installment-modal';
  var existingModal = document.getElementById(modalId);

  if (!existingModal) {
    var modal = document.createElement('div');
    modal.id = modalId;
    modal.className = 'installment-modal';
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = `
      <div class="installment-modal-overlay" data-action="close-installment-popup"></div>
      <div class="installment-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="installment-modal-title">
        <button type="button" class="installment-modal-close" data-action="close-installment-popup" aria-label="إغلاق النافذة">
          <i class="fas fa-xmark" aria-hidden="true"></i>
        </button>
        <h2 id="installment-modal-title">اطلب خطة سداد مخصصة</h2>
        <p class="installment-modal-note">ادخل بيانات التواصل لإرسال خطط السداد</p>

        <form id="installment-form" class="installment-form" action="https://formsubmit.co/muha.abdo@gmail.com" method="POST">
          <input type="hidden" name="project_id" id="installment-project-id" />
          <input type="hidden" name="source_page" id="installment-source-page" />
          <input type="hidden" name="source_url" id="installment-source-url" />
          <input type="hidden" name="_subject" id="installment-subject" value="طلب خطة سداد جديد" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" id="installment-next" />

          <label for="installment-name">الاسم بالكامل</label>
          <input id="installment-name" name="full_name" type="text" placeholder="مثال: محمد أحمد" autocomplete="name" required />

          <label for="installment-phone">رقم الهاتف</label>
          <input id="installment-phone" name="phone" type="tel" placeholder="مثال: 01012345678" autocomplete="tel" required />

          <label for="installment-email">البريد الإلكتروني</label>
          <input id="installment-email" name="email" type="email" placeholder="example@email.com" autocomplete="email" required />

          <label for="installment-project-name">اسم المشروع</label>
          <input id="installment-project-name" name="project_name" type="text" readonly required />

          <label for="installment-unit-type">نوع الوحدة</label>
          <input id="installment-unit-type" name="unit_type" type="text" readonly required />

          <label for="installment-down-payment">المقدم الذي يمكنك دفعه (جنيه)</label>
          <input id="installment-down-payment" name="down_payment" type="text" inputmode="numeric" placeholder="مثال: 900,000" required />

          <label for="installment-monthly-payment">القسط الشهري الذي يمكنك دفعه (جنيه)</label>
          <input id="installment-monthly-payment" name="monthly_installment" type="text" inputmode="numeric" placeholder="مثال: 25,000" required />

          <button class="btn" type="submit">إرسال الطلب</button>
        </form>
      </div>
    `;
    body.appendChild(modal);
    existingModal = modal;
  }

  var form = document.getElementById('installment-form');
  var closeNodes = existingModal.querySelectorAll('[data-action="close-installment-popup"]');
  var fieldName = document.getElementById('installment-name');
  var fieldProjectId = document.getElementById('installment-project-id');
  var fieldProjectName = document.getElementById('installment-project-name');
  var fieldUnitType = document.getElementById('installment-unit-type');
  var fieldSourcePage = document.getElementById('installment-source-page');
  var fieldSourceUrl = document.getElementById('installment-source-url');
  var fieldSubject = document.getElementById('installment-subject');
  var fieldNext = document.getElementById('installment-next');
  var fieldDownPayment = document.getElementById('installment-down-payment');
  var fieldMonthly = document.getElementById('installment-monthly-payment');

  function normalizeNumericInput(value) {
    return String(value || '')
      .replace(/[٠-٩]/g, function (digit) {
        return String('٠١٢٣٤٥٦٧٨٩'.indexOf(digit));
      })
      .replace(/[^\d]/g, '');
  }

  function formatWithCommas(value) {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function bindFormattedNumericField(field) {
    if (!field) return;

    field.addEventListener('input', function () {
      var digits = normalizeNumericInput(field.value);
      field.value = digits ? formatWithCommas(digits) : '';
    });
  }

  bindFormattedNumericField(fieldDownPayment);
  bindFormattedNumericField(fieldMonthly);

  function getThankYouPath() {
    if (window.location.pathname.toLowerCase().includes('/projects/')) {
      return '../thank-you.html';
    }
    return 'thank-you.html';
  }

  function resolveProjectName(projectId) {
    if (projectId && projectsData[projectId] && projectsData[projectId].name) {
      return projectsData[projectId].name;
    }
    var heading = document.querySelector('#project-hero h1, #page-hero h1, #hero h1');
    return heading ? heading.textContent.trim() : 'مشروع هايد بارك';
  }

  function getPopupContext(button) {
    var pageType = body.dataset.page || 'unknown';
    var projectId = body.dataset.projectId || '';
    var projectName = resolveProjectName(projectId);
    var unitType = 'غير محدد';

    if (pageType === 'projects') {
      var projectCard = button.closest('.project-card');
      if (projectCard) {
        var cardTitle = projectCard.querySelector('h4, h3');
        if (cardTitle) {
          projectName = cardTitle.textContent.trim();
        }
        var detailsLink = projectCard.querySelector('.text-link[data-project-id]');
        if (detailsLink && detailsLink.dataset.projectId) {
          projectId = detailsLink.dataset.projectId;
          if (projectsData[projectId] && projectsData[projectId].name) {
            projectName = projectsData[projectId].name;
          }
        }
      }
    }

    var unitCard = button.closest('.unit-card');
    if (unitCard) {
      var unitHeading = unitCard.querySelector('h3');
      if (unitHeading) {
        unitType = unitHeading.textContent.trim();
      }
    }

    return {
      pageType: pageType,
      projectId: projectId,
      projectName: projectName,
      unitType: unitType,
      sourceUrl: window.location.href
    };
  }

  function openModal(context) {
    fieldProjectId.value = context.projectId || '';
    fieldProjectName.value = context.projectName;
    fieldUnitType.value = context.unitType;
    fieldSourcePage.value = context.pageType;
    fieldSourceUrl.value = context.sourceUrl;
    fieldSubject.value = `طلب خطة سداد - ${context.projectName}`;

    var nextUrl = new URL(getThankYouPath(), window.location.href);
    nextUrl.searchParams.set('return', context.sourceUrl);
    fieldNext.value = nextUrl.toString();

    existingModal.classList.add('is-open');
    existingModal.setAttribute('aria-hidden', 'false');
    body.classList.add('modal-open');
    fieldName.focus();
  }

  function closeModal() {
    existingModal.classList.remove('is-open');
    existingModal.setAttribute('aria-hidden', 'true');
    body.classList.remove('modal-open');
  }

  closeNodes.forEach(function (node) {
    node.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && existingModal.classList.contains('is-open')) {
      closeModal();
    }
  });

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      openModal(getPopupContext(button));
    });
  });

  form.addEventListener('submit', function (event) {
    var downPaymentDigits = normalizeNumericInput(fieldDownPayment.value);
    var monthlyDigits = normalizeNumericInput(fieldMonthly.value);

    if (!downPaymentDigits || !monthlyDigits) {
      event.preventDefault();
      alert('يرجى إدخال المقدم والقسط الشهري بالأرقام فقط.');
      return;
    }

    var downPayment = Number(downPaymentDigits);
    var monthly = Number(monthlyDigits);

    if (!Number.isFinite(downPayment) || downPayment <= 0 || !Number.isFinite(monthly) || monthly <= 0) {
      event.preventDefault();
      alert('يرجى إدخال المقدم والقسط الشهري بقيم أكبر من صفر.');
      return;
    }

    // Submit clean numeric values (without separators)
    fieldDownPayment.value = downPaymentDigits;
    fieldMonthly.value = monthlyDigits;
  });
})();

// === Thank You Page Return Handler ===
(function () {
  if (document.body.dataset.page !== 'thank-you') return;

  var backLink = document.querySelector('[data-role="return-link"]');
  if (!backLink) return;

  var params = new URLSearchParams(window.location.search);
  var returnUrl = params.get('return');

  if (returnUrl) {
    try {
      var parsed = new URL(returnUrl);
      if (parsed.origin === window.location.origin) {
        backLink.href = parsed.toString();
      }
    } catch (e) {
      backLink.href = 'index.html';
    }
  }
})();
