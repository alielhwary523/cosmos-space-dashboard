// index.js

// API Keys and Endpoints
const NASA_APOD_API = 'https://api.nasa.gov/planetary/apod';
const NASA_API_KEY = 'DEMO_KEY'; // Replace with your actual NASA API key if needed
const SPACEDEVS_LAUNCH_API = 'https://ll.thespacedevs.com/2.2.0/launch/upcoming/';

// DOM Elements
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.app-section');
const apodDateInput = document.getElementById('apod-date-input');
const loadDateBtn = document.getElementById('load-date-btn');
const todayApodBtn = document.getElementById('today-apod-btn');
const apodLoading = document.getElementById('apod-loading');
const apodImageContainer = document.getElementById('apod-image-container');
const apodTitle = document.getElementById('apod-title');
const apodDate = document.getElementById('apod-date');
const apodDateDetail = document.getElementById('apod-date-detail');
const apodExplanation = document.getElementById('apod-explanation');
const apodCopyright = document.getElementById('apod-copyright');
const apodMediaType = document.getElementById('apod-media-type');
const apodDateInfo = document.getElementById('apod-date-info');
const launchesCount = document.getElementById('launches-count');
const launchesCountMobile = document.getElementById('launches-count-mobile');
const featuredLaunch = document.getElementById('featured-launch');
const launchesGrid = document.getElementById('launches-grid');
const planetsGrid = document.getElementById('planets-grid');
const planetDetailImage = document.getElementById('planet-detail-image');
const planetDetailName = document.getElementById('planet-detail-name');
const planetDetailDescription = document.getElementById('planet-detail-description');
const planetDistance = document.getElementById('planet-distance');
const planetRadius = document.getElementById('planet-radius');
const planetMass = document.getElementById('planet-mass');
const planetDensity = document.getElementById('planet-density');
const planetOrbitalPeriod = document.getElementById('planet-orbital-period');
const planetRotation = document.getElementById('planet-rotation');
const planetMoons = document.getElementById('planet-moons');
const planetGravity = document.getElementById('planet-gravity');
const planetDiscoverer = document.getElementById('planet-discoverer');
const planetDiscoveryDate = document.getElementById('planet-discovery-date');
const planetBodyType = document.getElementById('planet-body-type');
const planetVolume = document.getElementById('planet-volume');
const planetPerihelion = document.getElementById('planet-perihelion');
const planetAphelion = document.getElementById('planet-aphelion');
const planetEccentricity = document.getElementById('planet-eccentricity');
const planetInclination = document.getElementById('planet-inclination');
const planetAxialTilt = document.getElementById('planet-axial-tilt');
const planetTemp = document.getElementById('planet-temp');
const planetEscape = document.getElementById('planet-escape');
const planetFacts = document.getElementById('planet-facts');
const planetComparisonTbody = document.getElementById('planet-comparison-tbody');

// Planets Data
const planetsData = {
  mercury: {
    name: 'Mercury',
    description: 'Mercury is the smallest planet in the Solar System and the closest to the Sun. It has a thin atmosphere and extreme temperature variations.',
    image: './assets/images/mercury.png',
    semimajorAxis: '57.91M km',
    radius: '2,439.7 km',
    mass: '3.301 × 10²³ kg',
    density: '5.427 g/cm³',
    orbitalPeriod: '87.969 days',
    rotation: '58d 15h 30m',
    moons: '0',
    gravity: '3.7 m/s²',
    discoverer: 'Known since antiquity',
    discoveryDate: 'Ancient',
    bodyType: 'Planet',
    volume: '6.083 × 10¹⁰ km³',
    perihelion: '46.00M km',
    aphelion: '69.82M km',
    eccentricity: '0.2056',
    inclination: '7.005°',
    axialTilt: '0.034°',
    temp: '167°C',
    escape: '4.25 km/s',
    facts: [
      'Smallest planet in the Solar System',
      'Closest to the Sun',
      'No moons or rings',
      'Heavily cratered surface'
    ],
    au: '0.39',
    diameter: '4,879',
    massEarth: '0.055',
    orbitalComparison: '88 days',
    type: 'Terrestrial',
    typeColor: 'orange',
    color: '#eab308'
  },
  venus: {
    name: 'Venus',
    description: 'Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty, and is the brightest natural object in Earth\'s night sky after the Moon.',
    image: './assets/images/venus.png',
    semimajorAxis: '108.21M km',
    radius: '6,051.8 km',
    mass: '4.867 × 10²⁴ kg',
    density: '5.243 g/cm³',
    orbitalPeriod: '224.701 days',
    rotation: '-243d 0h 26m',
    moons: '0',
    gravity: '8.87 m/s²',
    discoverer: 'Known since antiquity',
    discoveryDate: 'Ancient',
    bodyType: 'Planet',
    volume: '9.284 × 10¹¹ km³',
    perihelion: '107.48M km',
    aphelion: '108.94M km',
    eccentricity: '0.0067',
    inclination: '3.395°',
    axialTilt: '177.36°',
    temp: '464°C',
    escape: '10.36 km/s',
    facts: [
      'Hottest planet in the Solar System',
      'Thick carbon dioxide atmosphere',
      'Rotates in the opposite direction to most planets',
      'Similar size to Earth'
    ],
    au: '0.72',
    diameter: '12,104',
    massEarth: '0.815',
    orbitalComparison: '225 days',
    type: 'Terrestrial',
    typeColor: 'orange',
    color: '#f97316'
  },
  earth: {
    name: 'Earth',
    description: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29% of Earth\'s surface is land consisting of continents and islands. The remaining 71% is covered with water.',
    image: './assets/images/earth.png',
    semimajorAxis: '149.60M km',
    radius: '6,371 km',
    mass: '5.972 × 10²⁴ kg',
    density: '5.514 g/cm³',
    orbitalPeriod: '365.256 days',
    rotation: '23h 56m 4s',
    moons: '1',
    gravity: '9.807 m/s²',
    discoverer: 'Known since antiquity',
    discoveryDate: 'Ancient',
    bodyType: 'Planet',
    volume: '1.083 × 10¹² km³',
    perihelion: '147.10M km',
    aphelion: '152.10M km',
    eccentricity: '0.0167',
    inclination: '0.000°',
    axialTilt: '23.44°',
    temp: '15°C',
    escape: '11.19 km/s',
    facts: [
      'Only known planet with liquid water on the surface',
      'Supports diverse life forms',
      'Has a strong magnetic field',
      'One natural satellite: the Moon'
    ],
    au: '1.00',
    diameter: '12,742',
    massEarth: '1.000',
    orbitalComparison: '365.2 days',
    type: 'Terrestrial',
    typeColor: 'blue',
    color: '#3b82f6'
  },
  mars: {
    name: 'Mars',
    description: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System. It is often referred to as the "Red Planet" because of its reddish appearance.',
    image: './assets/images/mars.png',
    semimajorAxis: '227.94M km',
    radius: '3,389.5 km',
    mass: '6.417 × 10²³ kg',
    density: '3.933 g/cm³',
    orbitalPeriod: '686.980 days',
    rotation: '24h 37m 22s',
    moons: '2',
    gravity: '3.721 m/s²',
    discoverer: 'Known since antiquity',
    discoveryDate: 'Ancient',
    bodyType: 'Planet',
    volume: '1.632 × 10¹¹ km³',
    perihelion: '206.62M km',
    aphelion: '249.26M km',
    eccentricity: '0.0934',
    inclination: '1.850°',
    axialTilt: '25.19°',
    temp: '-63°C',
    escape: '5.03 km/s',
    facts: [
      'Known as the Red Planet',
      'Has the largest volcano in the Solar System',
      'Two moons: Phobos and Deimos',
      'Evidence of past liquid water'
    ],
    au: '1.52',
    diameter: '6,779',
    massEarth: '0.107',
    orbitalComparison: '687 days',
    type: 'Terrestrial',
    typeColor: 'red',
    color: '#ef4444'
  },
  jupiter: {
    name: 'Jupiter',
    description: 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than 300 times that of Earth.',
    image: './assets/images/jupiter.png',
    semimajorAxis: '778.48M km',
    radius: '69,911 km',
    mass: '1.898 × 10²⁷ kg',
    density: '1.326 g/cm³',
    orbitalPeriod: '4,332.589 days',
    rotation: '9h 55m 30s',
    moons: '95',
    gravity: '24.79 m/s²',
    discoverer: 'Known since antiquity',
    discoveryDate: 'Ancient',
    bodyType: 'Planet',
    volume: '1.431 × 10¹⁵ km³',
    perihelion: '740.60M km',
    aphelion: '816.36M km',
    eccentricity: '0.0489',
    inclination: '1.304°',
    axialTilt: '3.13°',
    temp: '-145°C',
    escape: '59.5 km/s',
    facts: [
      'Largest planet in the Solar System',
      'Has a Great Red Spot storm',
      'More than 90 moons',
      'Strong magnetic field'
    ],
    au: '5.20',
    diameter: '139,820',
    massEarth: '317.8',
    orbitalComparison: '11.9 years',
    type: 'Gas Giant',
    typeColor: 'purple',
    color: '#fb923c'
  },
  saturn: {
    name: 'Saturn',
    description: 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System. It is known for its extensive ring system.',
    image: './assets/images/saturn.png',
    semimajorAxis: '1,434.0M km',
    radius: '58,232 km',
    mass: '5.683 × 10²⁶ kg',
    density: '0.687 g/cm³',
    orbitalPeriod: '10,759.22 days',
    rotation: '10h 32m 45s',
    moons: '146',
    gravity: '10.44 m/s²',
    discoverer: 'Known since antiquity',
    discoveryDate: 'Ancient',
    bodyType: 'Planet',
    volume: '8.271 × 10¹⁴ km³',
    perihelion: '1,352.6M km',
    aphelion: '1,514.5M km',
    eccentricity: '0.0565',
    inclination: '2.485°',
    axialTilt: '26.73°',
    temp: '-178°C',
    escape: '35.5 km/s',
    facts: [
      'Known for its prominent ring system',
      'Second largest planet',
      'Over 140 moons',
      'Least dense planet'
    ],
    au: '9.58',
    diameter: '116,460',
    massEarth: '95.2',
    orbitalComparison: '29.5 years',
    type: 'Gas Giant',
    typeColor: 'yellow',
    color: '#facc15'
  },
  uranus: {
    name: 'Uranus',
    description: 'Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.',
    image: './assets/images/uranus.png',
    semimajorAxis: '2,875.0M km',
    radius: '25,362 km',
    mass: '8.681 × 10²⁵ kg',
    density: '1.271 g/cm³',
    orbitalPeriod: '30,688.5 days',
    rotation: '-17h 14m 24s',
    moons: '28',
    gravity: '8.87 m/s²',
    discoverer: 'William Herschel',
    discoveryDate: 'March 13, 1781',
    bodyType: 'Planet',
    volume: '6.833 × 10¹³ km³',
    perihelion: '2,742.5M km',
    aphelion: '3,006.4M km',
    eccentricity: '0.0464',
    inclination: '0.773°',
    axialTilt: '97.77°',
    temp: '-195°C',
    escape: '21.3 km/s',
    facts: [
      'Rotates on its side',
      'Ice giant',
      '27 known moons',
      'Faint ring system'
    ],
    au: '19.22',
    diameter: '50,724',
    massEarth: '14.5',
    orbitalComparison: '84.0 years',
    type: 'Ice Giant',
    typeColor: 'cyan',
    color: '#06b6d4'
  },
  neptune: {
    name: 'Neptune',
    description: 'Neptune is the eighth and farthest known planet from the Sun. It is the fourth-largest planet by diameter and the third-most-massive planet.',
    image: './assets/images/neptune.png',
    semimajorAxis: '4,498.3M km',
    radius: '24,622 km',
    mass: '1.024 × 10²⁶ kg',
    density: '1.638 g/cm³',
    orbitalPeriod: '60,182 days',
    rotation: '16h 6m 36s',
    moons: '16',
    gravity: '11.15 m/s²',
    discoverer: 'Urbain Le Verrier & Johann Galle',
    discoveryDate: 'September 23, 1846',
    bodyType: 'Planet',
    volume: '6.254 × 10¹³ km³',
    perihelion: '4,452.9M km',
    aphelion: '4,543.8M km',
    eccentricity: '0.0095',
    inclination: '1.770°',
    axialTilt: '28.32°',
    temp: '-201°C',
    escape: '23.5 km/s',
    facts: [
      'Farthest planet from the Sun',
      'Ice giant',
      'Strongest winds in the Solar System',
      '14 known moons'
    ],
    au: '30.05',
    diameter: '49,244',
    massEarth: '17.1',
    orbitalComparison: '164.8 years',
    type: 'Ice Giant',
    typeColor: 'blue',
    color: '#2563eb'
  }
};

// Sidebar Toggle
sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar-open');
});

// Navigation
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const sectionId = link.dataset.section;
    sections.forEach(section => {
      section.classList.add('hidden');
    });
    document.querySelectorAll(`[data-section="${sectionId}"]`).forEach(sec => {
      sec.classList.remove('hidden');
    });
    navLinks.forEach(l => {
      l.classList.remove('bg-blue-500/10', 'text-blue-400');
      l.classList.add('text-slate-300');
    });
    link.classList.add('bg-blue-500/10', 'text-blue-400');
    link.classList.remove('text-slate-300');
    sidebar.classList.remove('sidebar-open');
  });
});

// Set max date for APOD input
const today = new Date().toISOString().split('T')[0];
apodDateInput.max = today;

// Fetch APOD
async function fetchAPOD(date) {
  apodLoading.style.display = 'block';
  apodImageContainer.innerHTML = ''; // Clear previous media
  try {
    const response = await fetch(`${NASA_APOD_API}?api_key=${NASA_API_KEY}&date=${date}`);
    const data = await response.json();
    apodTitle.textContent = data.title || 'No Title';
    apodDate.textContent = `Astronomy Picture of the Day - ${new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`;
    apodDateDetail.innerHTML = `<i class="far fa-calendar mr-2"></i>${date}`;
    apodExplanation.textContent = data.explanation || 'No explanation available.';
    apodCopyright.innerHTML = data.copyright ? `&copy; ${data.copyright}` : '';
    apodCopyright.classList.toggle('hidden', !data.copyright);
    apodMediaType.textContent = data.media_type ? data.media_type.charAt(0).toUpperCase() + data.media_type.slice(1) : 'Unknown';
    apodDateInfo.textContent = date;

    if (data.media_type === 'image') {
      const img = document.createElement('img');
      img.id = 'apod-image';
      img.className = 'w-full h-full object-cover';
      img.src = data.hdurl || data.url;
      img.alt = data.title;
      apodImageContainer.appendChild(img);
    } else if (data.media_type === 'video') {
      const iframe = document.createElement('iframe');
      iframe.className = 'w-full h-full';
      iframe.src = data.url;
      iframe.allowFullscreen = true;
      apodImageContainer.appendChild(iframe);
    }
  } catch (error) {
    console.error('Error fetching APOD:', error);
    apodImageContainer.innerHTML = '<p class="text-red-400">Error loading APOD. Please try again.</p>';
  } finally {
    apodLoading.style.display = 'none';
  }
}

// APOD Event Listeners
loadDateBtn.addEventListener('click', () => fetchAPOD(apodDateInput.value));
todayApodBtn.addEventListener('click', () => {
  apodDateInput.value = today;
  fetchAPOD(today);
});

// Fetch Launches
async function fetchLaunches() {
  try {
    const response = await fetch(`${SPACEDEVS_LAUNCH_API}?limit=11&mode=detailed`);
    const data = await response.json();
    const launches = data.results || [];
    launchesCount.textContent = `${launches.length} Launches`;
    launchesCountMobile.textContent = `${launches.length}`;

    if (launches.length > 0) {
      const featured = launches[0];
      const daysUntil = Math.floor((new Date(featured.net) - new Date()) / (1000 * 60 * 60 * 24));
      const statusAbbrev = featured.status.abbrev.toUpperCase();
      let statusColor = 'blue';
      if (statusAbbrev === 'GO') statusColor = 'green';
      else if (statusAbbrev === 'TBC' || statusAbbrev === 'TBD') statusColor = 'yellow';
      const statusBg = `bg-${statusColor}-500/20 text-${statusColor}-400`;

      featuredLaunch.innerHTML = `
        <div class="relative bg-slate-800/30 border border-slate-700 rounded-3xl overflow-hidden group hover:border-blue-500/50 transition-all">
          <div class="absolute inset-0 bg-linear-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="relative grid grid-cols-1 lg:grid-cols-2 gap-6 p-8">
            <div class="flex flex-col justify-between">
              <div>
                <div class="flex items-center gap-3 mb-4">
                  <span class="px-4 py-1.5 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold flex items-center gap-2">
                    <i class="fas fa-star"></i>
                    Featured Launch
                  </span>
                  <span class="px-4 py-1.5 ${statusBg} rounded-full text-sm font-semibold">
                    ${statusAbbrev}
                  </span>
                </div>
                <h3 class="text-3xl font-bold mb-3 leading-tight">${featured.name}</h3>
                <div class="flex flex-col xl:flex-row xl:items-center gap-4 mb-6 text-slate-400">
                  <div class="flex items-center gap-2">
                    <i class="fas fa-building"></i>
                    <span>${featured.launch_service_provider.name}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <i class="fas fa-rocket"></i>
                    <span>${featured.rocket.configuration.full_name}</span>
                  </div>
                </div>
                <div class="inline-flex items-center gap-3 px-6 py-3 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-xl mb-6">
                  <i class="fas fa-clock text-2xl text-blue-400"></i>
                  <div>
                    <p class="text-2xl font-bold text-blue-400">${daysUntil}</p>
                    <p class="text-xs text-slate-400">Days Until Launch</p>
                  </div>
                </div>
                <div class="grid xl:grid-cols-2 gap-4 mb-6">
                  <div class="bg-slate-900/50 rounded-xl p-4">
                    <p class="text-xs text-slate-400 mb-1 flex items-center gap-2">
                      <i class="fas fa-calendar"></i>
                      Launch Date
                    </p>
                    <p class="font-semibold">${new Date(featured.net).toLocaleDateString()}</p>
                  </div>
                  <div class="bg-slate-900/50 rounded-xl p-4">
                    <p class="text-xs text-slate-400 mb-1 flex items-center gap-2">
                      <i class="fas fa-clock"></i>
                      Launch Time
                    </p>
                    <p class="font-semibold">${new Date(featured.net).toLocaleTimeString('en-US', {timeZone: 'UTC'})} UTC</p>
                  </div>
                  <div class="bg-slate-900/50 rounded-xl p-4">
                    <p class="text-xs text-slate-400 mb-1 flex items-center gap-2">
                      <i class="fas fa-map-marker-alt"></i>
                      Location
                    </p>
                    <p class="font-semibold text-sm">${featured.pad.name}</p>
                  </div>
                  <div class="bg-slate-900/50 rounded-xl p-4">
                    <p class="text-xs text-slate-400 mb-1 flex items-center gap-2">
                      <i class="fas fa-globe"></i>
                      Country
                    </p>
                    <p class="font-semibold">${featured.pad.location.country_code}</p>
                  </div>
                </div>
                <p class="text-slate-300 leading-relaxed mb-6">${featured.mission_description || 'No description available.'}</p>
              </div>
              <div class="flex flex-col md:flex-row gap-3">
                <button class="flex-1 self-start md:self-center px-6 py-3 bg-blue-500 rounded-xl hover:bg-blue-600 transition-colors font-semibold flex items-center justify-center gap-2">
                  <i class="fas fa-info-circle"></i>
                  View Full Details
                </button>
                <div class="icons self-end md:self-center">
                  <button class="px-4 py-3 bg-slate-700 rounded-xl hover:bg-slate-600 transition-colors">
                    <i class="far fa-heart"></i>
                  </button>
                  <button class="px-4 py-3 bg-slate-700 rounded-xl hover:bg-slate-600 transition-colors">
                    <i class="fas fa-bell"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="relative">
              <div class="relative h-full min-h-[400px] rounded-2xl overflow-hidden bg-slate-900/50">
                <img src="${featured.image || './assets/images/placeholder.webp'}" alt="${featured.name}" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      `;

      launchesGrid.innerHTML = '';
      launches.slice(1).forEach(launch => {
        const statusAbbrev = launch.status.abbrev.toUpperCase();
        let statusColor = 'blue';
        if (statusAbbrev === 'GO') statusColor = 'green';
        else if (statusAbbrev === 'TBC' || statusAbbrev === 'TBD') statusColor = 'yellow';
        const statusBg = `bg-${statusColor}-500/90`;
        const card = document.createElement('div');
        card.className = 'bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all group cursor-pointer';
        card.innerHTML = `
          <div class="relative h-48 bg-slate-900/50 flex items-center justify-center">
            <img src="${launch.image || './assets/images/placeholder.webp'}" alt="${launch.name}" class="w-full h-full object-cover">
            <div class="absolute top-3 right-3">
              <span class="px-3 py-1 ${statusBg} text-white backdrop-blur-sm rounded-full text-xs font-semibold">
                ${statusAbbrev}
              </span>
            </div>
          </div>
          <div class="p-5">
            <div class="mb-3">
              <h4 class="font-bold text-lg mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">${launch.name}</h4>
              <p class="text-sm text-slate-400 flex items-center gap-2">
                <i class="fas fa-building text-xs"></i>
                ${launch.launch_service_provider.name}
              </p>
            </div>
            <div class="space-y-2 mb-4">
              <div class="flex items-center gap-2 text-sm">
                <i class="fas fa-calendar text-slate-500 w-4"></i>
                <span class="text-slate-300">${new Date(launch.net).toLocaleDateString()}</span>
              </div>
              <div class="flex items-center gap-2 text-sm">
                <i class="fas fa-clock text-slate-500 w-4"></i>
                <span class="text-slate-300">${new Date(launch.net).toLocaleTimeString('en-US', {timeZone: 'UTC'})}</span>
              </div>
              <div class="flex items-center gap-2 text-sm">
                <i class="fas fa-rocket text-slate-500 w-4"></i>
                <span class="text-slate-300">${launch.rocket.configuration.name}</span>
              </div>
              <div class="flex items-center gap-2 text-sm">
                <i class="fas fa-map-marker-alt text-slate-500 w-4"></i>
                <span class="text-slate-300 line-clamp-1">${launch.pad.location.name}</span>
              </div>
            </div>
            <div class="flex items-center gap-2 pt-4 border-t border-slate-700">
              <button class="flex-1 px-4 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors text-sm font-semibold">
                Details
              </button>
              <button class="px-3 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors">
                <i class="far fa-heart"></i>
              </button>
            </div>
          </div>
        `;
        launchesGrid.appendChild(card);
      });
    }
  } catch (error) {
    console.error('Error fetching launches:', error);
    featuredLaunch.innerHTML = '<p class="text-red-400">Error loading featured launch.</p>';
    launchesGrid.innerHTML = '<p class="text-red-400">Error loading launches.</p>';
  }
}

// Populate Planets Grid
function populatePlanetsGrid() {
  planetsGrid.innerHTML = '';
  Object.entries(planetsData).forEach(([id, data]) => {
    const card = document.createElement('div');
    card.className = 'planet-card bg-slate-800/50 border border-slate-700 rounded-2xl p-4 transition-all cursor-pointer group';
    card.dataset.planetId = id;
    card.style.setProperty('--planet-color', data.color);
    card.onmouseover = function() { this.style.borderColor = `${data.color}80`; };
    card.onmouseout = function() { this.style.borderColor = '#334155'; };
    card.innerHTML = `
      <div class="relative mb-3 h-24 flex items-center justify-center">
        <img class="w-20 h-20 object-contain group-hover:scale-110 transition-transform" src="${data.image}" alt="${data.name}">
      </div>
      <h4 class="font-semibold text-center text-sm">${data.name}</h4>
      <p class="text-xs text-slate-400 text-center">${data.au} AU</p>
    `;
    planetsGrid.appendChild(card);
  });

  // Attach event listeners to new cards
  const planetCards = document.querySelectorAll('.planet-card');
  planetCards.forEach(card => {
    card.addEventListener('click', () => {
      const planetId = card.dataset.planetId;
      updatePlanetDetails(planetId);
      planetCards.forEach(c => c.classList.remove('border-blue-500'));
      card.classList.add('border-blue-500');
    });
  });
}

// Populate Planet Comparison Table
function populatePlanetComparison() {
  planetComparisonTbody.innerHTML = '';
  Object.entries(planetsData).forEach(([id, data]) => {
    const tr = document.createElement('tr');
    tr.className = 'hover:bg-slate-800/30 transition-colors';
    if (id === 'earth') tr.classList.add('bg-blue-500/5');
    tr.innerHTML = `
      <td class="px-4 md:px-6 py-3 md:py-4 sticky left-0 bg-slate-800 z-10">
        <div class="flex items-center space-x-2 md:space-x-3">
          <div class="w-6 h-6 md:w-8 md:h-8 rounded-full flex-shrink-0" style="background-color: ${data.color}"></div>
          <span class="font-semibold text-sm md:text-base whitespace-nowrap">${data.name}</span>
        </div>
      </td>
      <td class="px-4 md:px-6 py-3 md:py-4 text-slate-300 text-sm md:text-base whitespace-nowrap">${data.au}</td>
      <td class="px-4 md:px-6 py-3 md:py-4 text-slate-300 text-sm md:text-base whitespace-nowrap">${data.diameter}</td>
      <td class="px-4 md:px-6 py-3 md:py-4 text-slate-300 text-sm md:text-base whitespace-nowrap">${data.massEarth}</td>
      <td class="px-4 md:px-6 py-3 md:py-4 text-slate-300 text-sm md:text-base whitespace-nowrap">${data.orbitalComparison}</td>
      <td class="px-4 md:px-6 py-3 md:py-4 text-slate-300 text-sm md:text-base whitespace-nowrap">${data.moons}</td>
      <td class="px-4 md:px-6 py-3 md:py-4 whitespace-nowrap">
        <span class="px-2 py-1 rounded text-xs bg-${data.typeColor}-500/50 text-${data.typeColor}-200">${data.type}</span>
      </td>
    `;
    planetComparisonTbody.appendChild(tr);
  });
}

// Planet Details Update
function updatePlanetDetails(planetId) {
  const data = planetsData[planetId];
  if (!data) return;

  planetDetailImage.src = data.image;
  planetDetailImage.alt = `${data.name} planet detailed realistic render`;
  planetDetailName.textContent = data.name;
  planetDetailDescription.textContent = data.description;
  planetDistance.textContent = data.semimajorAxis;
  planetRadius.textContent = data.radius;
  planetMass.textContent = data.mass;
  planetDensity.textContent = data.density;
  planetOrbitalPeriod.textContent = data.orbitalPeriod;
  planetRotation.textContent = data.rotation;
  planetMoons.textContent = data.moons;
  planetGravity.textContent = data.gravity;
  planetDiscoverer.textContent = data.discoverer;
  planetDiscoveryDate.textContent = data.discoveryDate;
  planetBodyType.textContent = data.bodyType;
  planetVolume.textContent = data.volume || 'N/A';
  planetPerihelion.textContent = data.perihelion;
  planetAphelion.textContent = data.aphelion;
  planetEccentricity.textContent = data.eccentricity;
  planetInclination.textContent = data.inclination;
  planetAxialTilt.textContent = data.axialTilt;
  planetTemp.textContent = data.temp;
  planetEscape.textContent = data.escape;

  planetFacts.innerHTML = '';
  data.facts.forEach(fact => {
    const li = document.createElement('li');
    li.className = 'flex items-start';
    li.innerHTML = `<i class="fas fa-check text-green-400 mt-1 mr-2"></i><span class="text-slate-300">${fact}</span>`;
    planetFacts.appendChild(li);
  });
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Set initial date to today
  apodDateInput.value = today;
  // Load initial APOD
  fetchAPOD(today);
  // Load launches
  fetchLaunches();
  // Populate planets
  populatePlanetsGrid();
  // Populate planet comparison
  populatePlanetComparison();
  // Set initial planet to Earth
  updatePlanetDetails('earth');
});