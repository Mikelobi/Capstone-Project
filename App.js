// List of speaker objects

const speaker1 = {
  imageSrc: 'images/Bitpanda.jpg',
  speakerName: 'Eric Demuth',
  title: 'CEO and Co-Founder of BitPanda',
  speakerDescription:
    'Eric Demuth is the founding CEO of Bitpanda that aims to strip away the complications of investing in cryptocurrencies and open it up to ordinary people.',
};
const speaker2 = {
  imageSrc: 'images/bryan.jpg',
  speakerName: 'Bryan Che',
  title: 'CSO Huawei',
  speakerDescription:
    'Bryan Che is Chief Strategy Officer at Huawei. There, he leads Huawei’s vision and strategy across its overall businesses and portfolio',
};
const speaker3 = {
  imageSrc: 'images/Cassie.jpg',
  speakerName: 'Cassie Kozyrkov',
  title: 'Google Chief Decision Scientist',
  speakerDescription:
    'Cassie Kozyrkov is a South African data scientist and statistician. She founded the field of Decision Intelligence at Google, where she serves as Chief Decision Scientist.',
};
const speaker4 = {
  imageSrc: 'images/Michele.jpg',
  speakerName: 'Michele Romanow',
  title: 'Co-Founder at Clearco',
  speakerDescription:
    'Michele Romanow is a Canadian tech entrepreneur. She co-founded Clearbanc, a Toronto based provider of revenue sharing solutions to fund new online businesses.',
};
const speaker5 = {
  imageSrc: 'images/david.jpg',
  speakerName: 'David Singleton',
  title: 'CTO at Stripe',
  speakerDescription:
    'David Singleton is chief technology officer at Stripe, where he is responsible for guiding its engineering and design teams as they build economic infrastructure for the internet.',
};
const speaker6 = {
  imageSrc: 'images/Eliza.jpg',
  speakerName: 'Elizabeth Bramson-Boudreau',
  title: 'CEO and Publisher of MIT Technology',
  speakerDescription:
    'Elizabeth Bramson-Boudreau is the CEO and publisher of MIT Technology Review, the Massachusetts Institute of Technology’s independent media company.',
};

const speakers = [speaker1, speaker2, speaker3, speaker4, speaker5, speaker6];
// Target open and close triggers in html

const openEls = document.querySelectorAll('[data-open]');
const closeEls = document.querySelectorAll('[data-close]');
const isVisible = 'is-visible';
const navLinks = document.querySelectorAll('.web-header-link');

openEls.forEach((el) => {
  el.addEventListener('click', function () {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
    document.body.style.overflow = 'hidden';
  });
});
// Close modal
closeEls.forEach((el) => {
  el.addEventListener('click', function () {
    this.parentElement.parentElement.classList.remove(isVisible);
    document.body.style.overflow = 'auto';
  });
});

// add event listener on click outside modal to close modal and enable scroll
document.addEventListener('click', (e) => {
  if (e.target === document.querySelector('.modal.is-visible')) {
    document.querySelector('.modal.is-visible').classList.remove(isVisible);
    document.body.style.overflow = 'auto';
  }
});

// add event listener on esc key to close modal and enable scroll
document.addEventListener('keyup', (e) => {
  if (e.key === 'Escape' && document.querySelector('.modal.is-visible')) {
    document.querySelector('.modal.is-visible').classList.remove(isVisible);
    document.body.style.overflow = 'auto';
  }
});

// add event listener on a tags to close modal, enable scroll, and go to section ID
navLinks.forEach((elem) => {
  elem.addEventListener('click', () => {
    document.querySelector('.modal.is-visible').classList.remove(isVisible);
    document.body.style.overflow = 'auto';
  });
});

// Create Speaker Section HTML

const speakerSection = document.querySelector('#speakers');
// Create inner Div

const innerDiv = document.createElement('div');
innerDiv.className = 'inner-content';
const speakerHeader = document.createElement('div');
speakerHeader.className = 'about-section-header';
const speakerTitle = document.createElement('h2');
speakerTitle.textContent = 'Featured Speakers';
const orangeLine = document.createElement('hr');
orangeLine.className = 'orange-line';
speakerHeader.appendChild(speakerTitle);
speakerHeader.appendChild(orangeLine);
innerDiv.appendChild(speakerHeader);
// Create Speakers list wrapper

const speakersWrapper = document.createElement('div');
speakersWrapper.className = 'speakers-wrapper';

// Create speaker divs for available speakers

speakers.forEach((speaker) => {
  // Create speaker tile

  const speakerTile = document.createElement('div');
  speakerTile.className = 'speaker-tile';
  // Create speaker image

  const speakerImgDiv = document.createElement('div');
  speakerImgDiv.className = 'speaker-img';
  const speakerImg = document.createElement('img');
  speakerImg.src = `${speaker.imageSrc}`;
  speakerImg.alt = `${speaker.speakerName}`;
  speakerImgDiv.appendChild(speakerImg);
  speakerTile.appendChild(speakerImgDiv);
  // Create speaker profile

  const speakerProfile = document.createElement('div');
  speakerProfile.className = 'speaker-profile';
  // Add speaker profile elements

  const speakerFullName = document.createElement('h3');
  speakerFullName.textContent = `${speaker.speakerName}`;
  speakerFullName.className = 'speaker-full-name';
  speakerProfile.appendChild(speakerFullName);
  const speakerDesc = document.createElement('p');
  speakerDesc.textContent = `${speaker.title}`;
  speakerDesc.className = 'speaker-title';
  speakerProfile.appendChild(speakerDesc);
  const greyLine = document.createElement('hr');
  greyLine.className = 'grey-line';
  speakerProfile.appendChild(greyLine);
  const speakerBio = document.createElement('p');
  speakerBio.textContent = `${speaker.speakerDescription}`;
  speakerBio.className = 'speaker-bio';
  speakerProfile.appendChild(speakerBio);
  // Apped speaker profile to speaker tile

  speakerTile.appendChild(speakerProfile);
  speakersWrapper.appendChild(speakerTile);
  innerDiv.appendChild(speakersWrapper);
});
speakerSection.appendChild(innerDiv);
