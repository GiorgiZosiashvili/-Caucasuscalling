/* eslint-disable react-refresh/only-export-components */
import Airplane from '../assets/images/airplane.png';
import Batumi from '../assets/images/Batumi.png';
import HealthBanner from '../assets/images/Borjomi.png';
import Borjomi from '../assets/images/Borjomi.png';
import Canyon from '../assets/images/Canyon.png';
import Currency from '../assets/images/currency.png';
import Gori from '../assets/images/Gori.jpeg';
import Hotel from '../assets/images/hotel.png';
import Juta from '../assets/images/Juta.png';
import Jvari_Monastery from '../assets/images/Jvari_Monastery.png';
import Kakheti from '../assets/images/Kakheti.png';
import Kazbegi from '../assets/images/Kazbegi.png';
import Mtsketa from '../assets/images/Mtsketa.png';
import Nature from '../assets/images/nature.png';
import Old_Tbilisi from '../assets/images/Old_Tbilisi.png';
import Passport from '../assets/images/passport.png';
import Ru from '../assets/images/ru.png';
import Samegrelo from '../assets/images/Samegrelo.png';
import Suitcase from '../assets/images/suitcase.png';
import SUV from '../assets/images/suv.png';
import Svaneti from '../assets/images/Svaneti.png';
import Tbilisi from '../assets/images/Tbilisi.png';
import Tsikhisdziri from '../assets/images/Tsikhisdziri.png';
import HomeBanner from '../assets/images/upp.png';
import Us from '../assets/images/us.png';
import Vardzia from '../assets/images/Vardzia.jpeg';

const toursData = [
  {
    title: 'Unique Canyon’s Tour',
    length: '7 Days Tour on 2 person',
    price: '500$',
    image: Canyon,
    location: 'Samegrelo, Georgia',
  },
  {
    title: 'Tbilisi Tour',
    length: '7 Days Tour on 2 person',
    price: '500$',
    image: Tbilisi,
    location: 'Tbilisi, Georgia',
  },
  {
    title: 'MIRACLES OF GEORGIA',
    length: '7 Days Tour on 2 person',
    price: '500$',
    image: Kazbegi,
    location: 'Kazbegi, Georgia',
  },
  {
    title: 'Castles Tour',
    length: '7 Days Tour on 2 person',
    price: '500$',
    image: Kakheti,
    location: 'Kakheti, Georgia',
  },
  {
    title: 'Tbilisi Tour',
    length: '7 Days Tour on 2 person',
    price: '500$',
    image: Tbilisi,
    location: 'Tbilisi, Georgia',
  },
  {
    title: 'Tbilisi Tour',
    length: '7 Days Tour on 2 person',
    price: '500$',
    image: Tbilisi,
    location: 'Tbilisi, Georgia',
  },
  {
    title: 'Tbilisi Tour',
    length: '7 Days Tour on 2 person',
    price: '500$',
    image: Tbilisi,
    location: 'Tbilisi, Georgia',
  },
  {
    title: 'Castles Tour',
    length: '7 Days Tour on 2 person',
    price: '500$',
    image: Kakheti,
    location: 'Kakheti, Georgia',
  },
];
const HomeDestinationsData = [
  {
    title: 'Juta',
    image: Juta,
    location: 'Dusheti, Georgia',
  },
  { title: 'Old Tbilisi', image: Old_Tbilisi, location: 'Old Tbilisi' },
  {
    title: 'Jvari Monastery',
    image: Jvari_Monastery,
    location: 'Jvari Monastery',
  },
  {
    title: 'Tsikhisdziri',
    image: Tsikhisdziri,
    location: 'Batumi, Georgia',
  },
  {
    title: 'Juta',
    image: Juta,
    location: 'Dusheti, Georgia',
  },
  {
    title: 'Tsikhisdziri',
    image: Tsikhisdziri,
    location: 'Batumi, Georgia',
  },
  { title: 'Old Tbilisi', image: Old_Tbilisi, location: 'Old Tbilisi' },

  {
    title: 'Juta',
    image: Juta,
    location: 'Dusheti, Georgia',
  },
];
const servicesData = [
  {
    title: 'MICE',
    image: Suitcase,
  },
  {
    title: 'Hotel Bookings',
    image: Hotel,
  },
  {
    title: 'Airport Transfer Services',
    image: Airplane,
  },
  {
    title: 'Transportation Services',
    image: SUV,
  },
];
const infoData = [
  {
    title: 'Visa Information',
    image: Passport,
    info: 'Perched high above the Aegean Sea in this magical place, privy to the island’s most emblematic views, is it any wonder that the picturesque sanctuary that is the Grace Hotel, Auberge Resorts Collection in Santorini, has come out on top of a poll of travel magazine readers as the Best Hotel in Greece and ranked as the second Best Hotel in the World?',
  },
  {
    title: 'Climate In Georgia',
    image: Nature,
    info: 'Perched high above the Aegean Sea in this magical place, privy to the island’s most emblematic views, is it any wonder that the picturesque sanctuary that is the Grace Hotel, Auberge Resorts Collection in Santorini, has come out on top of a poll of travel magazine readers as the Best Hotel in Greece and ranked as the second Best Hotel in the World?',
  },
  {
    title: 'Georgian Currency',
    image: Currency,
    info: 'Perched high above the Aegean Sea in this magical place, privy to the island’s most emblematic views, is it any wonder that the picturesque sanctuary that is the Grace Hotel, Auberge Resorts Collection in Santorini, has come out on top of a poll of travel magazine readers as the Best Hotel in Greece and ranked as the second Best Hotel in the World?',
  },
];
const pagesData = [
  {
    name: 'Home',
    page: '/',
  },
  {
    name: 'Destination',
    page: '/Destination',
  },
  {
    name: 'Tour Packages',
    page: '/Tours',
  },
  {
    name: 'Health Programs',
    page: '/Health',
  },
  {
    name: 'Partnership',
    page: '/Partnership',
  },
];
const homeBannerData = [
  { image: HomeBanner, text: 'Our Travel Agency Provides Individual and Group Tours' },
  { image: HomeBanner, text: 'Our Travel Agency Provides Individual and Group Tours' },
  { image: HomeBanner, text: 'Our Travel Agency Provides Individual and Group Tours' },
  { image: HomeBanner, text: 'Our Travel Agency Provides Individual and Group Tours' },
];
const healthBannerData = [
  { image: HealthBanner, text: 'Our Travel Agency Provides Individual and Group Tours' },
  { image: HealthBanner, text: 'Our Travel Agency Provides Individual and Group Tours' },
  { image: HealthBanner, text: 'Our Travel Agency Provides Individual and Group Tours' },
  { image: HealthBanner, text: 'Our Travel Agency Provides Individual and Group Tours' },
];
const details = [
  {
    numbers: '20+',
    text: 'Years Experience',
  },
  {
    numbers: '100+',
    text: 'Happy Customer',
  },
  {
    numbers: '15+',
    text: 'Choice of Services',
  },
  {
    numbers: '10+',
    text: 'Professional Guides',
  },
];
const healthPrograms = [
  {
    id: 1,
    title: 'Borjomi Palace 4*',
    text: "Explore Borjomi Palace Health & Spa Center's Comprehensive Wellness Programs:dsadasda",
    programs: [
      { program: 'Detoxify Your Body' },
      { program: 'Gastroenterological Health' },
      { program: "Women's Wellness" },
      { program: 'Urological Care' },
      { program: 'Respiratory Health' },
    ],
    packages: [
      {
        title: 'Relaxing Packages:',
        link_en:
          'https://media1.giphy.com/media/MgcE5n2MDfwiI/giphy.gif?cid=ecf05e47q1frl7nd640yjne2bh70hmr7014mxdgw1hfp1sfd&ep=v1_gifs_search&rid=giphy.gif&ct=g',
        link_ru:
          'https://media0.giphy.com/media/D7z8JfNANqahW/giphy.gif?cid=ecf05e477a72oewk2rlq3bcvtgz8fy1cjzj9ouvcbmj1n20f&ep=v1_gifs_search&rid=giphy.gif&ct=g',
        iconUs: Us,
        iconRu: Ru,
      },
      {
        title: 'Medical Packages:',
        link_en:
          'https://media3.giphy.com/media/l378BzHA5FwWFXVSg/giphy.gif?cid=ecf05e47yziwejhwka2b153sqcwo1yhq1zz8dpx7o05hkeqv&ep=v1_gifs_search&rid=giphy.gif&ct=g',
        link_ru:
          'https://media4.giphy.com/media/3ohzdLD2vN09ZavdqU/giphy.gif?cid=ecf05e478hluqvkgm43t2yz49lu23e7exqnlcuszuuspync5&ep=v1_gifs_search&rid=giphy.gif&ct=g',
        iconUs: Us,
        iconRu: Ru,
      },
    ],
    description:
      "When you book a room for a 7-night stay at Borjomi Palace Health & Spa Center, complete with three meals a day, you'll receive a comprehensive package of wellness procedures at no extra cost. Our commitment to your health and vitality is reflected in these inclusive offerings, ensuring you leave feeling rejuvenated and revitalized",
  },
  {
    id: 2,
    title: 'Borjomi Likani Health & Spa Centre 5*',
    text: "Explore Borjomi Palace Health & Spa Center's Comprehensive Wellness Programs:dsadasda",
    programs: [
      { program: 'Detoxify Your Body' },
      { program: 'Gastroenterological Health' },
      { program: "Women's Wellness" },
      { program: 'Urological Care' },
      { program: 'Respiratory Health' },
    ],
    packages: [
      {
        title: 'Relaxing Packages:',
        link_en:
          'https://media1.giphy.com/media/MgcE5n2MDfwiI/giphy.gif?cid=ecf05e47q1frl7nd640yjne2bh70hmr7014mxdgw1hfp1sfd&ep=v1_gifs_search&rid=giphy.gif&ct=g',
        link_ru:
          'https://media0.giphy.com/media/D7z8JfNANqahW/giphy.gif?cid=ecf05e477a72oewk2rlq3bcvtgz8fy1cjzj9ouvcbmj1n20f&ep=v1_gifs_search&rid=giphy.gif&ct=g',
        iconUs: Us,
        iconRu: Ru,
      },
      {
        title: 'Medical Packages:',
        link_en:
          'https://media3.giphy.com/media/l378BzHA5FwWFXVSg/giphy.gif?cid=ecf05e47yziwejhwka2b153sqcwo1yhq1zz8dpx7o05hkeqv&ep=v1_gifs_search&rid=giphy.gif&ct=g',
        link_ru:
          'https://media4.giphy.com/media/3ohzdLD2vN09ZavdqU/giphy.gif?cid=ecf05e478hluqvkgm43t2yz49lu23e7exqnlcuszuuspync5&ep=v1_gifs_search&rid=giphy.gif&ct=g',
        iconUs: Us,
        iconRu: Ru,
      },
    ],
    description:
      "When you book a room for a 7-night stay at Borjomi Palace Health & Spa Center, complete with three meals a day, you'll receive a comprehensive package of wellness procedures at no extra cost. Our commitment to your health and vitality is reflected in these inclusive offerings, ensuring you leave feeling rejuvenated and revitalized",
  },
  {
    id: 3,
    title: 'SAIRME',
    text: "Explore Borjomi Palace Health & Spa Center's Comprehensive Wellness Programs:dsadasda",
    programs: [
      { program: 'Detoxify Your Body' },
      { program: 'Gastroenterological Health' },
      { program: "Women's Wellness" },
      { program: 'Urological Care' },
      { program: 'Respiratory Health' },
    ],
    packages: [
      {
        title: 'Relaxing Packages:',
        link_en:
          'https://media1.giphy.com/media/MgcE5n2MDfwiI/giphy.gif?cid=ecf05e47q1frl7nd640yjne2bh70hmr7014mxdgw1hfp1sfd&ep=v1_gifs_search&rid=giphy.gif&ct=g',
        link_ru:
          'https://media0.giphy.com/media/D7z8JfNANqahW/giphy.gif?cid=ecf05e477a72oewk2rlq3bcvtgz8fy1cjzj9ouvcbmj1n20f&ep=v1_gifs_search&rid=giphy.gif&ct=g',
        iconUs: Us,
        iconRu: Ru,
      },
      {
        title: 'Medical Packages:',
        link_en:
          'https://media3.giphy.com/media/l378BzHA5FwWFXVSg/giphy.gif?cid=ecf05e47yziwejhwka2b153sqcwo1yhq1zz8dpx7o05hkeqv&ep=v1_gifs_search&rid=giphy.gif&ct=g',
        link_ru:
          'https://media4.giphy.com/media/3ohzdLD2vN09ZavdqU/giphy.gif?cid=ecf05e478hluqvkgm43t2yz49lu23e7exqnlcuszuuspync5&ep=v1_gifs_search&rid=giphy.gif&ct=g',
        iconUs: Us,
        iconRu: Ru,
      },
    ],
    description:
      "When you book a room for a 7-night stay at Borjomi Palace Health & Spa Center, complete with three meals a day, you'll receive a comprehensive package of wellness procedures at no extra cost. Our commitment to your health and vitality is reflected in these inclusive offerings, ensuring you leave feeling rejuvenated and revitalized",
  },
];
const destinationsData = [
  {
    title: 'Tbilisi',
    season: '',
    image: Old_Tbilisi,
    description:
      "Embark on a journey to Tbilisi, the heart and soul of Georgia, where ancient history dances with modern vibrancy, creating a captivating tapestry of experiences. Nestled at the crossroads of Europe and Asia, Tbilisi beckons travelers with its diverse charm, cultural richness, and warm hospitality. Wander through the cobblestone streets of the Old Town, where history unfolds in the form of centuries-old churches, charming courtyards, and vibrant markets. Narikala Fortress watches over the city, offering panoramic views of the Kura River winding through the urban landscape. Tbilisi is a city of contrasts, where the historic Rustaveli Avenue pulses with the energy of modern life. The futuristic design of the Bridge of Peace stands in harmony with the classical elegance of the State Opera House, reflecting the city's dynamic spirit. Culinary delights await at every turn, with traditional Georgian dishes such as khachapuri and khinkali inviting you to savor the rich flavors of the region. Tbilisi's diverse neighborhoods, from the bohemian vibes of Aghmashenebeli Avenue to the contemporary atmosphere of Fabrika, offer a glimpse into the city's multifaceted character. Art and culture thrive in Tbilisi, where galleries showcase contemporary works, and the streets are adorned with expressive murals. Music echoes through the city, from the haunting polyphonic harmonies to the rhythmic beats of vibrant street performances. As the sun sets, Tbilisi transforms into a city of lights, with the illuminated Peace Bridge casting reflections on the Kura River. The nightlife comes alive, offering a myriad of experiences, from cozy wine bars to lively clubs. Tbilisi is more than a destination; it's an immersive journey where past and present converge, creating an enchanting experience for every traveler. Let us guide you through the vibrant streets, hidden gems, and cultural wonders of Tbilisi – a city that invites you to explore, indulge, and embrace the spirit of Georgia.",
  },
  {
    title: 'Mtsketa',
    season: '',
    image: Mtsketa,
    description:
      "Embark on a journey to Mtskheta, a UNESCO World Heritage site and the ancient capital of Georgia, where history and spirituality converge amidst stunning landscapes. Nestled at the confluence of the Aragvi and Kura rivers, Mtskheta invites travelers to step into a realm where the past gracefully intertwines with the present. The focal point of Mtskheta's cultural heritage is the Svetitskhoveli Cathedral, a masterpiece of medieval architecture and a symbol of Georgia's Christian history. Adorned with intricate carvings and surrounded by an air of reverence, this sacred site is believed to house the robe of Christ. Jvari Monastery, perched on a hill overlooking Mtskheta, offers panoramic views of the picturesque landscapes. This ancient religious complex, dating back to the 6th century, holds significance not only for its architectural splendor but also for its role in shaping Georgia's spiritual identity. Mtskheta's cobblestone streets and traditional Georgian houses create a charming atmosphere as you explore the town. The Antiquity Street, lined with artisan shops and cozy cafes, invites you to discover local crafts, traditional souvenirs, and the warmth of Georgian hospitality. The nearby Samtavro Monastery, surrounded by lush gardens, beckons with a serene ambiance. Home to the tombs of Georgian royalty and the revered St. Nino, it provides a tranquil retreat into the region's religious history. Mtskheta isn't just a destination; it's a pilgrimage into the soul of Georgia. The ancient city resonates with stories of kings, saints, and a cultural legacy that has endured for centuries. Join us on a journey to Mtskheta, where each cobblestone tells a tale, and the spirit of Georgia's past whispers through the corridors of time.",
  },
  {
    title: 'Kazbegi',
    season: '',
    image: Svaneti,
    description:
      "Embark on an extraordinary odyssey to Kazbegi, a realm nestled within the towering embrace of the Greater Caucasus Mountains. This Georgian gem is a symphony of breathtaking landscapes, cultural wonders, and exhilarating adventures that promise to etch indelible memories. At the heart of Kazbegi's allure stands the iconic Gergeti Trinity Church, a celestial silhouette against the backdrop of Mount Kazbek's snow-capped peaks. This spiritual haven not only grants sweeping panoramic views but also invites introspection amidst awe-inspiring surroundings. For nature aficionados, Kazbegi unveils its treasures in Truso Valley—a sanctuary of pristine wilderness. Traverse emerald-green landscapes, uncover ancient ruins, and rejuvenate by bubbling mineral springs, all amidst the rugged beauty of the Caucasus. Winter transforms Kazbegi into a playground for snow enthusiasts. The Tetnuldi Ski Resort, with its challenging slopes and panoramic vistas, guarantees an adrenaline-fueled escape. Ski or snowboard against the backdrop of this alpine wonderland for an exhilarating experience. Stepantsminda, the central town of Kazbegi, is a charming nexus where alpine architecture converges with warm hospitality. Immerse yourself in local culture, savor traditional Georgian cuisine, and witness the timeless rhythm of mountain life. As the day unfolds, the Kazbegi sunset casts a magical glow over the landscapes, creating a canvas of colors that paint the perfect backdrop for relaxation and reflection. Our Kazbegi tours are meticulously designed to offer an authentic experience, seamlessly blending adventure with cultural immersion.",
  },
  {
    title: 'Gori',
    season: '',
    image: Gori,
    description:
      "Embark on a journey to Gori, a city in eastern Georgia with a rich historical tapestry that unfolds against the backdrop of the Caucasus Mountains. Gori, often recognized as the birthplace of Joseph Stalin, invites travelers to explore its diverse cultural heritage, ancient landmarks, and the warmth of Georgian hospitality. Begin your exploration at the heart of Gori with the Stalin Museum, a unique institution that sheds light on the life and times of the Soviet leader. The museum showcases Stalin's personal items, photographs, and even the house where he was born, providing insights into a significant chapter of modern history. The Gori Fortress, perched on a hill overlooking the city, is a testament to Gori's ancient roots. Dating back to the 7th century, the fortress offers panoramic views of the surrounding landscapes and serves as a historical centerpiece that connects the past to the present. Uplistsikhe, an ancient rock-hewn town located just a short distance from Gori, unveils a trove of archaeological wonders. Explore the caves, tunnels, and chambers of this ancient settlement, dating back to the early Iron Age, and witness the architectural prowess of the past. Gori's central market, with its vibrant colors and lively atmosphere, is a delightful place to immerse yourself in the local culture. From fresh produce to handmade crafts, the market offers a sensory experience that captures the essence of daily life in Gori. The Gori State Drama Theatre, a cultural hub in the city, provides an opportunity to enjoy local performances and immerse yourself in the artistic scene. The blend of traditional Georgian storytelling and contemporary expressions adds a dynamic touch to Gori's cultural landscape. As you explore Gori's streets, you'll encounter charming cafes, where you can savor traditional Georgian cuisine and hospitality. From khachapuri to khinkali, indulge in the flavors that make Georgian gastronomy a delightful journey for the taste buds. Join us on a journey to Gori, where history intertwines with contemporary life, and the cityscape is a canvas painted with stories of the past. Discover the cultural treasures, explore ancient landmarks, and let the spirit of Gori capture your imagination as you navigate through the captivating landscapes of eastern Georgia.",
  },
  {
    title: 'Samegrelo',
    season: '',
    image: Samegrelo,
    description:
      "Embark on a captivating journey to Samegrelo, a region in western Georgia where lush landscapes, ancient traditions, and warm hospitality create a tapestry of unforgettable experiences. Nestled between the rolling hills and the Black Sea, Samegrelo invites travelers to explore its unique cultural heritage and natural wonders. Begin your adventure in Zugdidi, the regional center of Samegrelo, where the Dadiani Palace awaits. This 19th-century residence, surrounded by verdant gardens, offers a glimpse into the lives of the Georgian nobility and houses a fascinating museum with artifacts from various historical periods. Samegrelo is renowned for its distinctive cuisine, and Zugdidi's central market is a sensory delight. Stroll through the bustling aisles, where local farmers and vendors showcase a bounty of fresh produce, traditional spices, and culinary delights unique to the region. The Martvili Canyon, a natural wonder tucked away in Samegrelo's landscapes, beckons with its emerald-green waters cutting through limestone cliffs. Take a boat ride through the canyon, marvel at waterfalls, and immerse yourself in the pristine beauty of this enchanting location. Explore the ancient town of Mestia, known for its Svan towers that punctuate the skyline. These medieval stone structures, built for defense against invaders, are emblematic of the region's rich cultural and architectural heritage. Samegrelo's coastal town of Poti offers a retreat to the Black Sea, where sandy beaches and the refreshing sea breeze provide an ideal setting for relaxation. Take a leisurely stroll along the waterfront or indulge in fresh seafood at one of the local restaurants. Kobuleti, another coastal gem in Samegrelo, invites you to unwind on its palm-lined promenade and explore the vibrant botanical garden. The blend of subtropical flora and serene seaside vistas creates a tranquil escape along the Black Sea coast. Samegrelo's landscape is adorned with ancient churches, such as the Zugdidi Cathedral and the Martvili Monastery, each carrying echoes of the region's spiritual history. These sacred sites offer not only architectural marvels but also a connection to Samegrelo's deep-rooted traditions. Join us on a journey to Samegrelo, where the flavors are bold, the landscapes are lush, and the cultural heritage is rich. Discover the hidden gems, savor the warmth of local hospitality, and let Samegrelo unveil its treasures as you explore the diverse facets of this captivating region.",
  },
  {
    title: 'Batumi',
    season: '',
    image: Batumi,
    description:
      "Embark on a coastal adventure to Batumi, Georgia's gem on the Black Sea, where modernity meets seaside charm in a vibrant fusion. Nestled against the backdrop of the Caucasus Mountains, Batumi invites travelers with its contemporary architecture, lush gardens, and a lively atmosphere that makes it a perfect destination for both relaxation and exploration. Batumi's iconic Batumi Boulevard, a picturesque promenade along the Black Sea coast, sets the tone for your coastal escapade. Lined with palm trees, sculptures, and colorful flowerbeds, the boulevard is a delightful place for a leisurely stroll, offering breathtaking sea views and a refreshing sea breeze. The Ali and Nino Statue, a symbol of tragic love, graces Batumi's waterfront. The moving figures, representing a Muslim Azerbaijani boy and a Christian Georgian girl, add a touch of romance to the city's ambiance. Discover the lush beauty of the Batumi Botanical Garden, a verdant haven with a diverse collection of plant species. From exotic flowers to towering trees, the garden offers a tranquil retreat where nature's wonders unfold against the backdrop of the Black Sea. Marvel at the Alphabet Tower, a unique structure where each of the 33 letters of the Georgian alphabet is illuminated at night. This cultural landmark stands tall in Europe Square, reflecting Georgia's rich linguistic heritage. Batumi's Piazza Square, with its vibrant atmosphere, live music, and colorful architecture, is a hub of local life. Cafes, restaurants, and shops surround the square, creating a lively ambiance that captures the spirit of Batumi's social scene. Explore Europe Square, adorned with sculptures and surrounded by elegant buildings, showcasing Batumi's diverse architectural influences. The square is a testament to the city's connection to both European and Asian cultures. The Batumi Dolphinarium offers family-friendly entertainment with lively shows featuring dolphins, seals, and other marine creatures. The interactive performances provide a joyful experience for visitors of all ages. Admire the Medea Statue, a striking bronze sculpture depicting the legendary Colchian princess from Greek mythology. This artistic masterpiece adds a touch of mythology to Batumi's urban landscape. Batumi's beaches, with their sandy shores along the Black Sea, provide a perfect retreat for sunbathing, swimming, and enjoying the coastal ambiance. Whether you're seeking relaxation or adventure, Batumi's beaches offer a delightful seaside escape. Join us on a journey to Batumi, where the modern and the coastal blend seamlessly, creating a cityscape that invites exploration, relaxation, and an unforgettable experience along the shores of the Black Sea.",
  },
  {
    title: 'Vardzia',
    season: '',
    image: Vardzia,
    description:
      "Vardzia, a hidden marvel in the heart of Georgia, beckons adventurers to uncover its secrets within the rugged embrace of the Caucasus Mountains. Carved into the cliffs of the Erusheti Mountain, Vardzia stands as a testament to human ingenuity and spiritual devotion, offering a journey into the depths of history. The Cave Monastery complex at Vardzia is a mesmerizing architectural feat, seamlessly integrated into the rocky slopes. Its labyrinthine network of caves unfolds like a subterranean city, revealing chapels, dwellings, and tunnels that echo with the stories of centuries past. The Church of the Dormition, a jewel within Vardzia, showcases intricate frescoes that adorn its rocky walls. As sunlight filters through openings in the cliffs, the interior becomes a canvas of vibrant scenes, illustrating tales of faith and artistry. Queen Tamar's Hall, a regal chamber within Vardzia, adds a touch of grandeur to the complex. Believed to be a royal reception hall, its echoes resonate with the stories of a bygone era, providing a glimpse into the splendor that once graced this underground sanctuary. Natural beauty intertwines seamlessly with Vardzia's historical richness. Overlooking the Kura River Valley, the complex offers breathtaking views, and a short stroll leads to the Vardzia Waterfall—a serene oasis surrounded by lush greenery. The Queen Tamar Bridge, an elegant arch spanning the Kura River, connects the past with the present. Crossing its arches, visitors become part of a narrative that links the architectural wonders of Vardzia with the natural wonders of the region. Immerse yourself in the spiritual ambiance of Vardzia, where cave dwellings served as monastic cells, chapels, and storage rooms. The on-site Vardzia Museum provides deeper insights into the history and significance of this unique site, enriching the visitor's experience. Vardzia is not merely a destination; it's a journey through time, a pilgrimage into the depths of Georgian history, and an exploration of a mystical sanctuary carved into the very fabric of the Caucasus Mountains. Join us on an adventure to Vardzia, where every cavern holds a story, and the spirit of this ancient marvel captivates the soul.",
  },
  {
    title: 'Borjomi',
    season: '',
    image: Borjomi,
    description:
      "Embark on a rejuvenating journey to Borjomi, a town nestled in the picturesque Borjomi Gorge of Georgia, where lush landscapes and healing mineral waters create a haven for relaxation and exploration. Known for its world-renowned mineral springs and breathtaking scenery, Borjomi invites travelers to immerse themselves in the soothing embrace of nature.At the heart of Borjomi's allure lies the Borjomi-Kharagauli National Park, one of the largest protected areas in Europe. This vast wilderness, adorned with dense forests, alpine meadows, and diverse flora and fauna, offers a sanctuary for nature enthusiasts and hikers seeking an escape into the pristine beauty of the Caucasus.Borjomi's mineral springs have been renowned for their therapeutic properties for centuries. The Central Park in the heart of the town features a sparkling fountain, where visitors can taste the naturally carbonated Borjomi mineral water straight from the source. The park itself is a tranquil oasis, perfect for leisurely strolls and picnics.Discover the historic charms of Borjomi at the Romanov Palace, a 19th-century residence commissioned by the Russian imperial family. Surrounded by scenic gardens, the palace showcases a blend of architectural elegance and royal history, providing a glimpse into a bygone era.Ride the Borjomi-Bakuriani narrow-gauge railway for a scenic journey through the mountains. The route offers breathtaking views of the Borjomi Gorge, meandering alongside the Kura River and passing through tunnels and viaducts, creating a memorable and picturesque experience.For adventure seekers, Bakuriani, a nearby ski resort, transforms into a winter wonderland during the snowy months. Ski down the slopes, enjoy winter sports, and relish the alpine charm of this mountain retreat.Borjomi's vibrant food scene invites you to savor the flavors of Georgian cuisine. Indulge in local delicacies, including khachapuri and khinkali, at traditional restaurants or explore the bustling food markets to experience the diverse culinary offerings of the region.Join us on a journey to Borjomi, where nature's healing touch meets the rich tapestry of history. Whether you seek relaxation, adventure, or a taste of Georgian hospitality, Borjomi promises an unforgettable retreat in the embrace of the Caucasus Mountains.Embark on a sensory journey to Kakheti, Georgia's renowned wine region, where rolling vineyards, ancient winemaking traditions, and cultural riches converge to create an immersive experience for every traveler. Nestled in the country's eastern landscapes, Kakheti invites you to savor the essence of Georgia's winemaking heritage and explore the rich tapestry of its rural charm.The Alaverdi Monastery, a spiritual haven nestled in the Alazani Valley, is a captivating starting point for your Kakheti adventure. This UNESCO-listed site, with its ancient wine cellar and traditional winemaking methods, offers a glimpse into the deep-rooted connection between spirituality and viticulture.Sighnaghi, the 'City of Love,' unfolds like a storybook setting perched on a hill overlooking the Alazani Valley. The cobblestone streets, pastel-colored buildings, and panoramic views create an enchanting ambiance, inviting visitors to stroll through its romantic charm.Wine enthusiasts will find joy in the vine-covered landscapes of Tsinandali, home to the historic Tsinandali Estate. This winemaking legacy dates back to the 19th century and showcases the fusion of European and Georgian winemaking traditions, providing a delightful tasting experience.The Bodbe Monastery, surrounded by lush gardens and overlooking the Alazani Valley, adds a touch of serenity to your Kakheti exploration. This sacred site, believed to be the burial place of St. Nino, offers a tranquil retreat into spiritual reflection.Kakheti is not just about wine; it's a culinary journey that unfolds in the vibrant bazaars and local eateries. Delight in the flavors of Kakhetian cuisine, from succulent grilled meats to the iconic khachapuri, complemented by the warm hospitality of the locals.Venture into the romantic landscapes of the Tsinandali Gardens, a verdant oasis that combines botanical wonders with sculptures, creating a peaceful retreat for nature lovers and art enthusiasts alike.Kakheti's traditional wine cellars, known as maranis, are a must-visit for those eager to delve into the secrets of Georgian winemaking. Enjoy wine tastings and learn about the qvevri, clay vessels buried underground, where the magic of fermentation unfolds.As the sun sets over the Alazani Valley, enjoy a panoramic view from the hilltops of Sighnaghi or relish a leisurely evening in a local winery, where the golden hues of sunset are mirrored in your wine glass.Join us on a journey to Kakheti, where each vine tells a story, each monastery whispers history, and the spirit of Georgian hospitality awaits in every glass of wine. Discover the charm of Kakheti, where tradition meets modernity, and the landscapes are painted with the hues of both vineyards and history.",
  },
];
const seasonsData = [
  { title: 'All Tours' },
  { title: 'Spring' },
  { title: 'Summer' },
  { title: 'Autumn' },
  { title: 'Winter' },
];
const tourPackagesData = [
  {
    title: 'Georgia with Svaneti and the Black Sea',
    length: '14-day cultural and hiking trip in the Greater Caucasus',
    price: '500$',
    image: Canyon,
    location: 'Tbilisi, Mtskheta ,Kazbegi ,Kutaisi, Mestia, Batumi',
  },
  {
    title: 'Breathtaking Caucasus Trails',
    length: '13-day cultural and hiking tour in the Greater Caucasus',
    price: '500$',
    image: Tbilisi,
    location: 'Tbilisi, Kakheti, Kazbegi, Kutaisi, Mestia, Borjomi, Vardzia',
  },
  {
    title: 'Culinary Crossroads Georgia Gastronomy Tour',
    length: '14-DAY',
    price: '500$',
    image: Kazbegi,
    location: 'Batumi, Svaneti, Kutaisi, Vardzia, Gori, Kazbegi, Kakheti, Tbilisi',
  },
  {
    title: 'Cultural Tapestry Tour Discovering Georgia',
    length: '8-DAY',
    price: '500$',
    image: Kakheti,
    location: 'Tbilisi, Kazbegi, Borjomi, Kakheti',
  },
  {
    title: 'Echoes of History Tour ',
    length: '12-DAY',
    price: '500$',
    image: Tbilisi,
    location: 'Tbilisi, Kazbegi, Borjomi, Vardzia, Gori, Kutaisi, Mestia',
  },
  {
    title: 'Infinite Vineyards Voyage',
    length: '7 DAY/ 8 NIGHT',
    price: '500$',
    image: Tbilisi,
    location: 'Tbilisi, Kazbegi, Gori, Borjomi, Vardzia, Mtskheta, Kakheti',
  },
  {
    title: 'Mauntain Majesty Adventure',
    length: '14 DAY/ 15 NIGHT',
    price: '500$',
    image: Tbilisi,
    location: 'Tbilisi, Kazbegi, Gori, Borjomi, Vardzia, Mtskheta, Kakheti',
  },
  {
    title: 'Pilgrimage trails in Georgia Spiritual Places in Georgia',
    length: '5-DAY',
    price: '500$',
    image: Kakheti,
    location: 'Tbilisi, Sighnaghi, Bodbe, Ananuri, Kazbegi',
  },
  {
    title: 'Sunset Symphony A Georgian Adventure',
    length: '13-DAY',
    price: '500$',
    image: Kakheti,
    location: 'Tbilisi, Kazbegi, Borjomi, Kutaisi, Mestia, Batumi',
  },
];
export {
  HomeDestinationsData,
  toursData,
  servicesData,
  infoData,
  pagesData,
  tourPackagesData,
  homeBannerData,
  healthBannerData,
  details,
  healthPrograms,
  destinationsData,
  seasonsData,
};
