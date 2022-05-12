const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

//images
const logoImg = document.querySelector(`#logo-img`);
logoImg.src = siteContent.images['logo-img'];

const ctaImg = document.querySelector(`#cta-img`);
ctaImg.src = siteContent.images[`cta-img`];

const midImg = document.querySelector('#middle-img');
midImg.setAttribute('src', siteContent.images["accent-img"]);

//footer
const footerthing = document.querySelector('footer a');
footerthing.textContent = siteContent.footer.copyright;
footerthing.classList.add('bold');

// header
const headerNava = document.querySelectorAll('header nav a');
headerNava.forEach(element => {
  element.classList.add('italic');
});


const headerNav = document.querySelector('header nav');
headerNav.children[0].textContent = siteContent.nav['nav-item-1'];
headerNav.children[1].textContent = siteContent.nav['nav-item-2'];
headerNav.children[2].textContent = siteContent.nav['nav-item-3'];
headerNav.children[3].textContent = siteContent.nav['nav-item-4'];
headerNav.children[4].textContent = siteContent.nav['nav-item-5'];
headerNav.children[5].textContent = siteContent.nav['nav-item-6'];



// contact
const contactinf = document.querySelector('section.contact');
contactinf.children[0].textContent = siteContent.contact["contact-h4"];

contactinf.children[1].textContent = siteContent.contact["address"];

contactinf.children[2].textContent = siteContent.contact["phone"];

contactinf.children[3].textContent = siteContent.contact["email"];

//top content
const topContent = document.querySelector('.top-content');
topContent.children[0].children[0].textContent = siteContent["main-content"]["features-h4"];
topContent.children[0].children[1].textContent = siteContent['main-content']["features-content"];

topContent.children[1].children[0].textContent = siteContent['main-content']["about-h4"];
topContent.children[1].children[1].textContent = siteContent['main-content']["about-content"];

//bottom content
const bottContent = document.querySelector('.bottom-content');
bottContent.children[0].children[0].textContent = siteContent['main-content']["services-h4"];
bottContent.children[0].children[1].textContent = siteContent['main-content']["services-content"];

bottContent.children[1].children[0].textContent = siteContent['main-content']['product-h4'];
bottContent.children[1].children[1].textContent = siteContent['main-content']['product-content'];

bottContent.children[2].children[0].textContent = siteContent['main-content']['vision-h4'];
bottContent.children[2].children[1].textContent = siteContent['main-content']['vision-content'];

//CTA
const cta = document.querySelector('.cta-text');
cta.children[0].textContent = siteContent['cta']['h1'];
cta.children[1].textContent = siteContent['cta']['button'];






