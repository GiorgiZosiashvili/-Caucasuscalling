/* eslint-disable react-refresh/only-export-components */
import Airplane from '../assets/images/airplane.png';
import HomeBanner1 from '../assets/images/Banners/banner1.jpeg';
import HomeBanner2 from '../assets/images/Banners/banner2.jpeg';
import HomeBanner3 from '../assets/images/Banners/banner3.jpeg';
import HomeBanner4 from '../assets/images/Banners/banner4.png';
import Batumi from '../assets/images/Batumi.png';
import HealthBanner from '../assets/images/Borjomi.png';
import Borjomi from '../assets/images/Borjomi.png';
import Canyon from '../assets/images/Canyon.png';
import Currency from '../assets/images/currency.png';
import Gori from '../assets/images/Gori.jpeg';
import Hotel from '../assets/images/hotel.png';
import Juta from '../assets/images/Juta.png';
import Jvari_Monastery from '../assets/images/Jvari_Monastery.png';
import Kakheti from '../assets/images/Kakheti.jpeg';
import Kazbegi from '../assets/images/Kazbegi.png';
import knowledge from '../assets/images/knowledge.png';
import language from '../assets/images/laguage.png';
import Mtsketa from '../assets/images/Mtsketa.png';
import Nature from '../assets/images/nature.png';
import Old_Tbilisi from '../assets/images/Old_Tbilisi.png';
import Passport from '../assets/images/passport.png';
import Ru from '../assets/images/ru.png';
import Samegrelo from '../assets/images/Samegrelo.png';
import Suitcase from '../assets/images/suitcase.png';
import support from '../assets/images/support.png';
import SUV from '../assets/images/suv.png';
import Svaneti from '../assets/images/Svaneti.png';
import Tbilisi from '../assets/images/Tbilisi.png';
import Us from '../assets/images/us.png';
import Vardzia from '../assets/images/Vardzia.jpeg';

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
  { image: HomeBanner1, text: 'Our Travel Agency Provides Individual and Group Tours' },
  { image: HomeBanner2, text: 'Our Travel Agency Provides Individual and Group Tours' },
  { image: HomeBanner3, text: 'Our Travel Agency Provides Individual and Group Tours' },
  { image: HomeBanner4, text: 'Our Travel Agency Provides Individual and Group Tours' },
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
    popular: true,
    image: Old_Tbilisi,
    images: [Tbilisi, Old_Tbilisi, Juta, Jvari_Monastery],
    sections: [
      {
        id: 'tbilisi',
        title: 'Tbilisi - Capital of Georgia',
        content:
          "Embark on a journey to Tbilisi, the heart and soul of Georgia, where ancient history dances with modern vibrancy, creating a captivating tapestry of experiences. Nestled at the crossroads of Europe and Asia, Tbilisi beckons travelers with its diverse charm, cultural richness, and warm hospitality. Wander through the cobblestone streets of the Old Town, where history unfolds in the form of centuries-old churches, charming courtyards, and vibrant markets. As you step into the cobblestone streets of the Old Town, you'll feel like you've entered a living museum. This is where history unfolds in the most enchanting way. Centuries-old churches, each with its own unique story and architectural style, stand as witnesses to the passage of time.",
        imageUrl: Tbilisi,
      },
      {
        id: 'old-town',
        title: 'Old Town',
        content:
          "Tbilisi's Old Town is a captivating district that transports you back in time with its rich history and charming atmosphere. Here are some key highlights and additional details:",
        imageUrl: Jvari_Monastery,
        details: [
          {
            header: 'Historic Significance:',
            detail:
              "The Old Town is the oldest part of Tbilisi and has been inhabited for centuries. It played a crucial role in the city's development and reflects the diverse cultural influences that have shaped Georgia over the years.",
          },
          {
            header: 'Traditional Georgian Architecture:',
            detail:
              "As you wander through the maze of narrow streets, you'll encounter traditional Georgian architecture at its finest. The buildings are characterized by wooden balconies adorned with intricate carvings and vibrant, colorful facades. Many of these structures have been lovingly restored to their former glory.",
          },
          {
            header: 'Courtyards and Hidden Gems:',
            detail:
              'One of the delights of exploring the Old Town is stumbling upon hidden courtyards and secret gardens tucked away behind the historic buildings. These quiet oases offer a peaceful escape from the bustling streets and are often home to small cafes, boutiques, or art galleries.',
          },
          {
            header: 'Sioni Cathedral:',
            detail:
              'Located in the heart of the Old Town, Sioni Cathedral is a significant religious site. It features beautiful frescoes and has a tranquil atmosphere, making it a great place for reflection.',
          },
          {
            header: 'Metekhi Church:',
            detail:
              'Overlooking the Kura River, the Metekhi Church is an iconic Tbilisi landmark. It provides a panoramic view of the Old Town and the city skyline. The area around the church is often used for open-air performances and cultural events.',
          },
          {
            header: 'Sulphur Baths District:',
            detail:
              "Just a short walk from the Old Town, you'll find the famous sulphur baths in the Abanotubani district. These historic bathhouses are built in the traditional Georgian style and offer a unique bathing experience in naturally warm, sulfur-infused waters.",
          },
          {
            header: 'Diverse Dining Options: ',
            detail:
              "The Old Town is a culinary paradise with numerous traditional Georgian restaurants, cozy cafes, and wine bars. Don't miss the opportunity to savor delicious Georgian cuisine, including khachapuri (cheese-filled bread) and khinkali (dumplings).",
          },
          {
            header: 'Narikala Fortress Access:',
            detail:
              'The Old Town provides a starting point for those wishing to visit the Narikala Fortress. You can either take a leisurely walk up the cobblestone paths or use the cable car for a more convenient ascent.',
          },
        ],
      },
    ],
    gallery: [{ imageUrl: Tbilisi }, { imageUrl: Tbilisi }, { imageUrl: Tbilisi }],
  },
  {
    title: 'Mtskheta',
    popular: false,
    image: Mtsketa,
    images: [Tbilisi, Old_Tbilisi, Juta, Jvari_Monastery],
    sections: [
      {
        id: 'Mtsketa',
        title: 'Mtskheta - The Spiritual Heart of Georgia',
        content:
          "Embark on a journey to Mtskheta, a UNESCO World Heritage site and the ancient capital of Georgia, where history and spirituality converge amidst stunning landscapes. Nestled at the confluence of the Aragvi and Kura rivers, Mtskheta invites travelers to step into a realm where the past gracefully intertwines with the present. The focal point of Mtskheta's cultural heritage is the Svetitskhoveli Cathedral, a masterpiece of medieval architecture and a symbol of Georgia's Christian history. Adorned with intricate carvings and surrounded by an air of reverence, this sacred site is believed to house the robe of Christ. Mtskheta isn't just a destination; it's a pilgrimage into the soul of Georgia.",
        imageUrl: Mtsketa,
      },
      {
        id: 'discovering Mtskheta',
        title: 'Discovering Mtskheta',
        content:
          "Nestled amidst Georgia's picturesque landscape, Mtskheta stands as a living testament to the country's rich heritage. This ancient town beckons travelers to explore its historic streets and immerse themselves in its cultural tapestry.",
        imageUrl: Mtsketa,
        details: [
          {
            header: 'Svetitskhoveli Cathedral: ',
            detail:
              "At the heart of Mtskheta lies the Svetitskhoveli Cathedral, a UNESCO World Heritage Site and one of the holiest places in Georgia. This architectural marvel is not only a masterpiece of medieval design but also a revered pilgrimage site. Inside, marvel at its stunning frescoes and the legend of Christ's robe buried beneath its foundations.",
          },
          {
            header: 'Jvari Monastery: ',
            detail:
              'Perched on a hill overlooking Mtskheta, the Jvari Monastery offers panoramic views of the confluence of the Mtkvari and Aragvi rivers. This 6th-century marvel is another UNESCO-listed gem, commemorating the dawn of Christianity in Georgia. Its simplicity and serene beauty make it a must-visit.',
          },
          {
            header: 'Historic Streets: ',
            detail:
              "Wander through Mtskheta's historic streets lined with traditional Georgian houses, many adorned with wooden balconies and intricate carvings. These streets whisper tales of bygone eras and create an ambiance that transports you to a different time.",
          },
          {
            header: 'Samtavro Monastery: ',
            detail:
              "This charming complex includes a Nunnery, a church, and a beautiful garden. Samtavro Monastery is not only a place of worship but also a peaceful oasis where visitors can reflect and connect with the town's spiritual essence.",
          },
          {
            header: 'Shiomgvime Monastery: ',
            detail:
              "A short drive from Mtskheta leads to the serene Shiomgvime Monastery complex, nestled in a forested valley. It offers a peaceful retreat for those seeking solitude and a deeper connection with Georgia's religious history.",
          },
          {
            header: 'Cultural Workshops: ',
            detail:
              'Explore local workshops and galleries to witness traditional Georgian craftsmanship in action. From textiles to ceramics, artisans continue to create masterpieces using time-honored techniques.',
          },
          {
            header: 'Culinary Delights: ',
            detail:
              "Savor the flavors of Georgia in Mtskheta's traditional restaurants and cozy cafes. Don't miss the chance to taste local dishes like khachapuri, mtsvadi, and Churchkhela, a traditional Georgian sweet.",
          },
          {
            header: 'Adventure Awaits: ',
            detail:
              "Beyond its historical and spiritual treasures, Mtskheta serves as a gateway to outdoor adventures. The surrounding countryside offers opportunities for hiking, rafting, and exploring caves, allowing you to connect with Georgia's natural wonders.",
          },
        ],
      },
    ],
    gallery: [{ imageUrl: Mtsketa }, { imageUrl: Mtsketa }, { imageUrl: Mtsketa }],
  },
  {
    title: 'Kazbegi',
    popular: true,
    image: Svaneti,
    images: [Tbilisi, Old_Tbilisi, Juta, Jvari_Monastery],
    sections: [
      {
        id: 'Kazbegi',
        title: "Kazbegi - Where Georgia's Majestic Peaks Beckon",
        content:
          "Embark on a journey to Kazbegi, a breathtaking region where nature's grandeur and ancient charm harmonize amidst the towering peaks of the Caucasus Mountains. Nestled at the foot of Mount Kazbek, Kazbegi welcomes adventurers to a realm where history and adventure intertwine seamlessly.  The iconic symbol of Kazbegi is the Gergeti Trinity Church, perched dramatically on a hilltop with Mount Kazbek as its backdrop. This 14th-century marvel is not only an architectural gem but also a spiritual sanctuary. Kazbegi isn't just a destination; it's an expedition into the heart of Georgia's wilderness.   Kazbegi, with its awe-inspiring landscapes, spiritual sanctuaries, and boundless adventures, invites you to embark on an unforgettable journey into the heart of the Caucasus Mountains. Each step through its rugged terrain reveals a new facet of Georgia's natural and cultural wonders.",
        imageUrl: Kazbegi,
      },
      {
        id: 'Exploring Kazbegi',
        title: 'Exploring Kazbegi',
        content:
          "Nestled amidst the awe-inspiring Caucasus, Kazbegi stands as a gateway to Georgia's mountainous wonders, inviting travelers to embark on exhilarating adventures and immerse themselves in the region's rich culture.",
        imageUrl: Kazbegi,
        details: [
          {
            header: 'Gergeti Trinity Church: ',
            detail:
              'At the heart of Kazbegi lies the Gergeti Trinity Church, an iconic symbol of Georgian spirituality. Perched on a hill, it offers awe-inspiring views of Mount Kazbek and the surrounding landscape. This ancient sanctuary has been a site of pilgrimage for centuries.',
          },
          {
            header: 'Trails and Treks: ',
            detail:
              'Kazbegi is a haven for hiking enthusiasts, with a network of trails that lead to alpine meadows, pristine lakes, and breathtaking viewpoints. Explore the rugged beauty of the region on foot and be rewarded with unparalleled vistas.',
          },
          {
            header: 'Stepantsminda: ',
            detail:
              'The charming town of Stepantsminda, nestled in the Kazbegi valley, serves as a base for exploring the region. Experience Georgian hospitality in its cozy guesthouses and enjoy traditional cuisine, including khachapuri and khinkali.',
          },
          {
            header: 'Mineral Springs: ',
            detail:
              "Discover the therapeutic properties of Kazbegi's natural mineral springs. Relax and rejuvenate in the warm, healing waters that flow from deep within the earth.",
          },
          {
            header: 'Local Crafts: ',
            detail:
              'Explore the local craftsmanship of Kazbegi, where artisans continue age-old traditions in creating handmade textiles, pottery, and woodwork. Visit workshops to witness the skilled hands behind these intricate creations.',
          },
          {
            header: 'Cultural Encounters: ',
            detail:
              'Immerse yourself in the rich cultural heritage of Kazbegi by engaging with the local communities. Participate in traditional rituals and celebrations to gain a deeper understanding of their way of life.',
          },
          {
            header: 'Adventurous Pursuits: ',
            detail:
              "Beyond its spiritual and cultural offerings, Kazbegi is a playground for adventure seekers. Try your hand at mountaineering, mountain biking, or paragliding, and experience the thrill of Georgia's great outdoors.",
          },
        ],
      },
    ],
    gallery: [{ imageUrl: Kazbegi }, { imageUrl: Kazbegi }, { imageUrl: Kazbegi }],
  },
  {
    title: 'Gori',
    popular: false,
    image: Gori,
    images: [Tbilisi, Old_Tbilisi, Juta, Jvari_Monastery],
    sections: [
      {
        id: 'gori',
        title: "Gori - Unveiling Georgia's Historical Tapestry",
        content:
          "Embark on a journey to Gori, a city where layers of history unfold amidst the serene landscapes of the Shida Kartli region. Situated along the banks of the Kura River, Gori invites travelers to delve into a rich tapestry of Georgia's past, from ancient civilizations to the modern era. The city's focal point is the Stalin Museum, a testament to the life and times of Joseph Stalin, one of the 20th century's most influential figures. Gori isn't just a destination; it's a captivating exploration of Georgia's historical and cultural heritage. Gori, with its blend of history, culture, and natural beauty, beckons you to embark on a journey through Georgia's historical tapestry. Each corner of this city reveals a new chapter in the country's captivating story, inviting travelers to explore its layers of heritage.",
        imageUrl: Gori,
      },
      {
        id: 'discovering gori',
        title: 'Discovering Gori',
        content:
          'Nestled within the tranquil landscapes of Shida Kartli, Gori offers a compelling blend of history, culture, and natural beauty, making it a unique destination for curious travelers.',
        imageUrl: Gori,
        details: [
          {
            header: 'Historic Significance:',
            detail:
              "The Old Town is the oldest part of Tbilisi and has been inhabited for centuries. It played a crucial role in the city's development and reflects the diverse cultural influences that have shaped Georgia over the years.",
          },
          {
            header: 'Traditional Georgian Architecture:',
            detail:
              "As you wander through the maze of narrow streets, you'll encounter traditional Georgian architecture at its finest. The buildings are characterized by wooden balconies adorned with intricate carvings and vibrant, colorful facades. Many of these structures have been lovingly restored to their former glory.",
          },
          {
            header: 'Courtyards and Hidden Gems:',
            detail:
              'One of the delights of exploring the Old Town is stumbling upon hidden courtyards and secret gardens tucked away behind the historic buildings. These quiet oases offer a peaceful escape from the bustling streets and are often home to small cafes, boutiques, or art galleries.',
          },
          {
            header: 'Sioni Cathedral:',
            detail:
              'Located in the heart of the Old Town, Sioni Cathedral is a significant religious site. It features beautiful frescoes and has a tranquil atmosphere, making it a great place for reflection.',
          },
          {
            header: 'Metekhi Church:',
            detail:
              'Overlooking the Kura River, the Metekhi Church is an iconic Tbilisi landmark. It provides a panoramic view of the Old Town and the city skyline. The area around the church is often used for open-air performances and cultural events.',
          },
          {
            header: 'Sulphur Baths District:',
            detail:
              "Just a short walk from the Old Town, you'll find the famous sulphur baths in the Abanotubani district. These historic bathhouses are built in the traditional Georgian style and offer a unique bathing experience in naturally warm, sulfur-infused waters.",
          },
          {
            header: 'Diverse Dining Options: ',
            detail:
              "The Old Town is a culinary paradise with numerous traditional Georgian restaurants, cozy cafes, and wine bars. Don't miss the opportunity to savor delicious Georgian cuisine, including khachapuri (cheese-filled bread) and khinkali (dumplings).",
          },
          {
            header: 'Narikala Fortress Access:',
            detail:
              'The Old Town provides a starting point for those wishing to visit the Narikala Fortress. You can either take a leisurely walk up the cobblestone paths or use the cable car for a more convenient ascent.',
          },
        ],
      },
    ],
    gallery: [{ imageUrl: Gori }, { imageUrl: Gori }, { imageUrl: Gori }],
  },
  {
    title: 'Samegrelo',
    popular: true,
    image: Samegrelo,
    images: [Tbilisi, Old_Tbilisi, Juta, Jvari_Monastery],
    sections: [
      {
        id: 'samegrelo',
        title: "Samegrelo - Exploring Georgia's Western Gem",
        content:
          'Embark on a captivating journey to Samegrelo, a region in western Georgia where lush landscapes, ancient traditions, and warm hospitality create a tapestry of unforgettable experiences. Nestled between the rolling hills and the Black Sea, Samegrelo invites travelers to explore its unique cultural heritage and natural wonders. Begin your adventure in Zugdidi, the regional center of Samegrelo, where the Dadiani Palace awaits. This 19th-century residence, surrounded by verdant gardens, offers a glimpse into the lives of the Georgian nobility and houses a fascinating museum with artifacts from various historical periods.',
        imageUrl: Gori,
      },
      {
        id: 'discovering samegrelo',
        title: 'Discovering Samegrelo',
        content:
          'Nestled amidst the stunning landscapes of western Georgia, Samegrelo is a region of diverse experiences, inviting travelers to uncover its rich cultural tapestry and natural beauty.',
        imageUrl: Samegrelo,
        details: [
          {
            header: 'Dadiani Palace: ',
            detail:
              'Explore the historic Dadiani Palace in Zugdidi, once home to the influential Dadiani noble family. The palace houses an impressive collection of art, artifacts, and historical relics.',
          },
          {
            header: 'Martvili Canyon: ',
            detail:
              'Embark on a scenic adventure through Martvili Canyon, a natural wonder adorned with turquoise waters, lush vegetation, and cascading waterfalls. Take a boat ride to fully immerse yourself in its beauty.',
          },
          {
            header: 'Enguri Dam: ',
            detail:
              "Visit the Enguri Dam, one of the world's tallest concrete arch dams, and enjoy panoramic views of the Enguri River and the surrounding landscape from its observation deck.",
          },
          {
            header: 'Mingrelia Cuisine: ',
            detail:
              "Savor the flavors of Samegrelo's unique cuisine, known for its rich, hearty dishes. Try local specialties like gebjalia (cheese with mint and garlic), mchadi (cornbread), and traditional Megrelian khachapuri.",
          },
          {
            header: 'Zugdidi Botanical Garden: ',
            detail:
              'Wander through the lush Zugdidi Botanical Garden, a paradise for nature enthusiasts, featuring a wide variety of plants, trees, and exotic flora.',
          },
          {
            header: 'Guria-Samegrelo Railway: ',
            detail:
              'Experience a picturesque train journey on the Guria-Samegrelo Railway, winding through scenic landscapes and charming villages.',
          },
          {
            header: 'Abasha: The Town of Legends: ',
            detail:
              'Visit Abasha, a town steeped in legends and folklore, and explore its historical sites and vibrant local culture.',
          },
          {
            header: 'Local Traditions: ',
            detail:
              'Engage with the warm-hearted locals and witness traditional Megrelian dances, music, and customs that have been passed down through generations.',
          },
        ],
      },
    ],
    gallery: [{ imageUrl: Samegrelo }, { imageUrl: Samegrelo }, { imageUrl: Samegrelo }],
  },
  {
    title: 'Batumi',
    popular: true,
    image: Batumi,
    images: [Tbilisi, Old_Tbilisi, Juta, Jvari_Monastery],
    sections: [
      {
        id: 'batumi',
        title: "Batumi - Georgia's Coastal Jewel",
        content:
          "Embark on a coastal adventure to Batumi, Georgia's gem on the Black Sea, where modernity meets seaside charm in a vibrant fusion. Nestled against the backdrop of the Caucasus Mountains, Batumi invites travelers with its contemporary architecture, lush gardens, and a lively atmosphere that makes it a perfect destination for both relaxation and exploration. Batumi's iconic Batumi Boulevard, a picturesque promenade along the Black Sea coast, sets the tone for your coastal escapade. Lined with palm trees, sculptures, and colorful flowerbeds, the boulevard is a delightful place for a leisurely stroll, offering breathtaking sea views and a refreshing sea breeze.",
        imageUrl: Batumi,
      },
      {
        id: 'discovering batumi',
        title: 'Discovering Batumi',
        content:
          "Batumi, with its captivating blend of natural beauty and urban sophistication, offers a wide array of experiences that cater to every traveler's preferences:",
        imageUrl: Batumi,
        details: [
          {
            header: 'Batumi Boulevard: ',
            detail:
              'Stroll along the Batumi Boulevard, a scenic promenade that hugs the Black Sea coast. Enjoy panoramic views of the sea, beautiful gardens, and art installations that create a relaxing atmosphere.',
          },
          {
            header: 'Dolphinarium: ',
            detail:
              'Delight in a visit to the Batumi Dolphinarium, where you can witness mesmerizing dolphin and seal performances that entertain and educate visitors of all ages.',
          },
          {
            header: 'Batumi Botanical Garden: ',
            detail:
              'Explore the Batumi Botanical Garden, a lush oasis featuring a diverse collection of plants and flora from around the world. Meander through themed sections, each with its own unique charm.',
          },
          {
            header: 'Europe Square: ',
            detail:
              "Admire the modern architecture of Batumi's Europe Square, home to the astronomical clock tower, a symbol of the city's contemporary spirit. The square comes alive with vibrant cafes and cultural events.",
          },
          {
            header: 'Alphabet Tower: ',
            detail:
              "Ascend the Alphabet Tower for panoramic views of the city and the surrounding landscape. The tower pays homage to Georgia's unique alphabet, showcasing its 33 letters.",
          },
          {
            header: 'Beaches: ',
            detail:
              "Batumi's coastline boasts several beautiful beaches where you can soak up the sun, take a refreshing swim in the Black Sea, or enjoy water sports and beachside cafes.",
          },
          {
            header: 'Piazza Square: ',
            detail:
              'Visit Piazza Square, a charming and artistic hub in the heart of Batumi, known for its Italian-inspired architecture, live music performances, and vibrant atmosphere.',
          },
          {
            header: 'Cable Car Ride: ',
            detail:
              'Take a scenic cable car ride to Anuria Mountain and enjoy breathtaking vistas of Batumi and the coastline from above.',
          },
          {
            header: 'Local Cuisine: ',
            detail:
              'Savor the flavors of Adjara cuisine at local restaurants, where you can indulge in khachapuri (cheese-filled bread), grilled meats, and fresh seafood.',
          },
          {
            header: 'Casino and Entertainment: ',
            detail:
              'Batumi offers a lively nightlife scene with casinos, bars, and clubs for those seeking evening entertainment.',
          },
        ],
      },
    ],
    gallery: [{ imageUrl: Batumi }, { imageUrl: Batumi }, { imageUrl: Batumi }],
  },
  {
    title: 'Vardzia',
    popular: true,
    image: Vardzia,
    images: [Tbilisi, Old_Tbilisi, Juta, Jvari_Monastery],
    sections: [
      {
        id: 'vardzia',
        title: "Vardzia - Georgia's Enigmatic Cave City",
        content:
          'Vardzia, a hidden marvel in the heart of Georgia, beckons adventurers to uncover its secrets within the rugged embrace of the Caucasus Mountains. Carved into the cliffs of the Erusheti Mountain, Vardzia stands as a testament to human ingenuity and spiritual devotion, offering a journey into the depths of history. The Cave Monastery complex at Vardzia is a mesmerizing architectural feat, seamlessly integrated into the rocky slopes. Its labyrinthine network of caves unfolds like a subterranean city, revealing chapels, dwellings, and tunnels that echo with the stories of centuries past. The Church of the Dormition, a jewel within Vardzia, showcases intricate frescoes that adorn its rocky walls. ',
        imageUrl: Vardzia,
      },
      {
        id: 'discovering vardzia',
        title: 'Discovering Vardzia',
        content:
          'Vardzia, with its otherworldly cave dwellings and historical significance, promises a journey of exploration and wonder:',
        imageUrl: Vardzia,
        details: [
          {
            header: 'Cave Monastery Complex: ',
            detail:
              'The centerpiece of Vardzia is its extraordinary cave monastery complex, a marvel carved into the cliffs of the Erusheti Mountain. Explore the labyrinthine tunnels, chambers, and cave churches that once served as a sanctuary for monks and pilgrims.',
          },
          {
            header: 'Ancient Frescoes: ',
            detail:
              'Admire the well-preserved frescoes that adorn the cave walls, showcasing intricate religious artwork and providing insight into the spiritual life of medieval Georgia.',
          },
          {
            header: 'The Church of the Dormition: ',
            detail:
              'Visit the Church of the Dormition, a remarkable cave church with an iconic domed roof. Its interior is adorned with breathtaking frescoes, making it a spiritual and artistic treasure.',
          },
          {
            header: 'Historical Significance: ',
            detail:
              "Learn about Vardzia's historical importance, as it played a crucial role in Georgia's defense against invaders. Discover how this cave city served as a refuge and spiritual center during turbulent times.",
          },
          {
            header: 'Panoramic Views: ',
            detail:
              'Hike up to the observation point overlooking Vardzia, where you can enjoy panoramic views of the Kura River valley and the stunning landscapes that surround this hidden gem.',
          },
          {
            header: 'Ancient Tunnels: ',
            detail:
              "Explore the intricate network of tunnels and secret passages that connect the cave dwellings, providing a fascinating glimpse into the city's architectural design.",
          },
          {
            header: 'Natural Beauty: ',
            detail:
              "Vardzia is set amidst picturesque landscapes, with the Kura River flowing nearby and rolling hills covered in lush greenery. It's an ideal location for nature enthusiasts and photographers.",
          },
          {
            header: 'Local Traditions: ',
            detail:
              'Immerse yourself in the local culture by interacting with the friendly residents of nearby villages. Experience traditional Georgian hospitality and taste local dishes and wines.',
          },
        ],
      },
    ],
    gallery: [{ imageUrl: Vardzia }, { imageUrl: Vardzia }, { imageUrl: Vardzia }],
  },
  {
    title: 'Borjomi',
    popular: false,
    image: Borjomi,
    images: [Tbilisi, Old_Tbilisi, Juta, Jvari_Monastery],
    sections: [
      {
        id: 'borjomi',
        title: "Borjomi - Georgia's Healing Oasis",
        content:
          "Embark on a rejuvenating journey to Borjomi, a town nestled in the picturesque Borjomi Gorge of Georgia, where lush landscapes and healing mineral waters create a haven for relaxation and exploration. Known for its world-renowned mineral springs and breathtaking scenery, Borjomi invites travelers to immerse themselves in the soothing embrace of nature. At the heart of Borjomi's allure lies the Borjomi-Kharagauli National Park, one of the largest protected areas in Europe. This vast wilderness, adorned with dense forests, alpine meadows, and diverse flora and fauna, offers a sanctuary for nature enthusiasts and hikers seeking an escape into the pristine beauty of the Caucasus.",
        imageUrl: Borjomi,
      },
      {
        id: 'discovering borjomi',
        title: 'Discovering Borjomi',
        content:
          'Borjomi, with its natural wonders and therapeutic springs, offers a myriad of experiences that cater to those seeking rejuvenation and connection with nature:',
        imageUrl: Borjomi,
        details: [
          {
            header: 'Borjomi Mineral Water: ',
            detail:
              "Discover the healing properties of Borjomi's famous mineral water, known for its therapeutic benefits. Visit the Borjomi Mineral Water Park, where you can taste the natural springs and enjoy leisurely strolls among lush greenery.",
          },
          {
            header: 'Borjomi-Kharagauli National Park: ',
            detail:
              "Explore the Borjomi-Kharagauli National Park, one of Georgia's largest protected areas, featuring diverse flora and fauna. Hike through pristine forests, traverse scenic trails, and enjoy the tranquility of nature.",
          },
          {
            header: 'Borjomi Central Park: ',
            detail:
              'Spend leisurely hours in Borjomi Central Park, an enchanting urban park with walking paths, playgrounds, and charming bridges that span the Borjomula River.',
          },
          {
            header: 'Sulphur Baths: ',
            detail:
              "Experience the therapeutic benefits of Borjomi's sulphur baths, which have been cherished for their healing properties for centuries. Soak in naturally warm, mineral-infused waters to relax and rejuvenate.",
          },
          {
            header: 'Borjomi Historical and Ethnographic Museum: ',
            detail:
              "Discover the history and culture of the region at the Borjomi Historical and Ethnographic Museum, where artifacts, exhibits, and traditional Georgian crafts offer insights into Borjomi's heritage.",
          },
          {
            header: 'Borjomi-Kharagauli Nature Reserve: ',
            detail:
              'For nature enthusiasts and adventure seekers, the Borjomi-Kharagauli Nature Reserve offers hiking, horseback riding, and wildlife observation in a pristine wilderness setting.',
          },
          {
            header: 'Local Cuisine: ',
            detail:
              "Savor the flavors of Borjomi and Georgia's culinary delights at local restaurants and cafes. Don't miss the opportunity to taste traditional Georgian dishes and wines.",
          },
          {
            header: 'Cable Car Ride: ',
            detail:
              'Take a cable car ride to the scenic plateau of Tsero Minda, where you can enjoy panoramic views of Borjomi and the surrounding landscapes.',
          },
        ],
      },
    ],
    gallery: [{ imageUrl: Borjomi }, { imageUrl: Borjomi }, { imageUrl: Borjomi }],
  },
  {
    title: 'Kakheti',
    popular: false,
    image: Kakheti,
    images: [Tbilisi, Old_Tbilisi, Juta, Jvari_Monastery],
    sections: [
      {
        id: 'akheti',
        title: "Kakheti - Georgia's Land of Wine and Rich Heritage",
        content:
          "Embark on a sensory journey to Kakheti, Georgia's renowned wine region, where rolling vineyards, ancient winemaking traditions, and cultural riches converge to create an immersive experience for every traveler. Nestled in the country's eastern landscapes, Kakheti invites you to savor the essence of Georgia's winemaking heritage and explore the rich tapestry of its rural charm. This captivating region invites travelers to explore its wineries, discover ancient traditions, and immerse themselves in the rich cultural heritage that defines Kakheti. Kakheti, with its vineyards, monasteries, and cultural richness, invites you to experience the heart of Georgia's wine country.",
        imageUrl: Kakheti,
      },
      {
        id: 'discovering kakheti',
        title: 'Discovering Kakheti',
        content:
          "Kakheti, with its vine-covered landscapes and cultural treasures, offers a range of experiences that showcase the region's unique charm:",
        imageUrl: Kakheti,
        details: [
          {
            header: 'Wine Tasting: ',
            detail:
              "Kakheti is synonymous with wine, and a visit wouldn't be complete without indulging in wine tasting at local wineries. Try traditional Georgian wines, such as Saperavi and Rkatsiteli, and learn about the ancient winemaking techniques.",
          },
          {
            header: 'Alaverdi Monastery: ',
            detail:
              "Explore the Alaverdi Monastery, a majestic 6th-century complex that houses impressive frescoes, a towering cathedral, and a working winery. The monastery's wine cellars produce some of Georgia's finest wines.",
          },
          {
            header: 'Signagi: ',
            detail:
              'Visit the charming town of Signagi, known as the "City of Love" for its romantic ambiance. Stroll through cobbled streets, admire the stunning views of the Alazani Valley, and explore its art galleries and local crafts.',
          },
          {
            header: 'David Gareja Monastery: ',
            detail:
              'Discover the David Gareja Monastery, a unique cave complex that spans the border between Georgia and Azerbaijan. Explore its ancient cells, frescoes, and dramatic desert landscapes.',
          },
          {
            header: 'Tsinandali Estate: ',
            detail:
              "Immerse yourself in the cultural heritage of Kakheti at the Tsinandali Estate, a historic mansion with beautiful gardens, a museum, and a winery. It's a place where art, literature, and wine converge.",
          },
          {
            header: 'Bodbe Monastery: ',
            detail:
              'Visit the Bodbe Monastery, a sacred site believed to be the final resting place of Saint Nino, who brought Christianity to Georgia. Explore its picturesque surroundings and serene atmosphere.',
          },
          {
            header: 'Traditional Kakhetian Cuisine: ',
            detail:
              "Savor traditional Kakhetian dishes, including succulent grilled meats, aromatic stews, and khachapuri variations. The region's cuisine is a delightful fusion of flavors.",
          },
          {
            header: 'Local Festivals: ',
            detail:
              "Time your visit to coincide with one of Kakheti's lively festivals, such as the Rtveli (grape harvest) celebrations, where you can participate in traditional rituals and festivities.",
          },
        ],
      },
    ],
    gallery: [{ imageUrl: Kakheti }, { imageUrl: Kakheti }, { imageUrl: Kakheti }],
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
    title: 'Black Sea Bliss Escape',
    season: '',
    length: '14-day cultural and hiking trip in the Greater Caucasus',
    price: '500$',
    image: Canyon,
    location: 'Tbilisi, Mtskheta, Kazbegi, Kutaisi, Mestia, Batumi',
    images: [Batumi, Tbilisi, Vardzia, Kakheti],
    trip: [
      { day: 'Day 1: ', title: 'Flight to Georgia', info: ['Hotel Check in'] },
      {
        day: 'Day 2: ',
        title: "Tbilisi on Foot'",
        info: [
          'After arriving in Tbilisi, the capital of Georgia, we will go to your city hotel, where you can check in and rest a bit.',
          "Sightseeing in the Georgian capital. All interesting architectural monuments are close to each other in the old town, so we can explore the sights with a nice walk. First, we visit the Narikala Fortress and the equestrian statue of the city's founder, Vakhtang Gorgasali. We take the cable car to the Mother of Georgia. From here, we have a great view of the entire city of Tbilisi.A very pleasant walk through the park over the Peace Bridge to the Puppet Theater.",
          'Overnight in Tbilisi',
        ],
      },
      {
        day: 'Day 3: ',
        title: 'To the Greater Caucasus',
        info: [
          'Hike to Gergeti Church on Mount Kazbek at an altitude of 2,170 m.Moderate hike (Walking time about 3-4 hours, about 12 km, elevation gain: +420 m, -420 m). We drive along the Georgian Military Road to Gudauri through a very scenic area in the higher elevations of the Greater Caucasus.',
          "On the way, we visit the old capital Mtskheta and the religious center of Georgia with the Jvari Church (6th century) and the Svetitskhoveli Cathedral (11th century), where Christ's robe is said to be kept. Continue to Kazbek. A beautiful hike to Gergeti Church. The path leads us through the village of Gergeti up to the Zminda Sameba Church (Trinity Church), also known as Gergeti Church, located at an altitude of 2,170 meters. From here, you can see the Terek Valley and the Kasbek settlement. If the weather is clear, you may catch a glimpse of one of the highest peaks in the Caucasus, Mount Kasbek (5047 m).",
          'Overnight in Kazbegi',
        ],
      },
      {
        day: 'Day 4: ',

        title: 'Unique Mountain Village and Hike through Impressive Landscape',
        info: [
          'Hike to the Georgian Alps',
          'Moderate hike',
          '(Walking time about 4 hours, about 10 km, elevation gain: +350 m, -350 m)',
          'Drive (about 30 min.) through the Sno Valley to the mountain village of Dshuta, which is cut off from the rest of the world for 6-7 months of the year and maintains its natural existence. Our hike starts from here. In good weather conditions, you can see the impressive Tschauchebi Mountain (3842 m). The hike follows a river, and you will be amazed by the diversity of endemic flora. At the beginning of the hike, there is a steep ascent. After that, a fantastic view of the flower meadows opens up in front of us. Our goal leads through the green valley to Mount Tschauchebi. We will get closer and closer to it.',
          'In the afternoon, we will have tea and learn about Georgian felting from a local artist.',
          'Overnight in Kazbegi',
        ],
      },
      {
        day: 'Day 5: ',

        title: 'Along the Ancient Silk Road',
        info: [
          'Walking time about 1 hour',
          'After breakfast, we set off on the Georgian Military Road to Gori, the birthplace of Stalin, beautifully located on the Kura, the largest river in the Caucasus.',
          'Visit and tasting at a private Georgian winery.',
          "Today's highlight is the cave city of Uplistsikhe, where you can still find traces of settlements from the early 1st millennium BC. Temples, altars, streets, halls, and shops are located in this ancient cave city, which was part of the legendary Silk Road. The city's structure with multiple streets, a theater, and palaces is well preserved.",
          "In the afternoon, drive to Western Georgia in the Imereti region, to the country's second-largest city, Kutaisi.",
          'Overnight in Kutaisi',
        ],
      },
      {
        day: 'Day 6: ',

        title: 'On to Svaneti!',
        info: [
          'Today begins the most exciting part of our journey - a trip to Svaneti, known for its unique high mountain landscape and vibrant traditions.',
          'Visit the impressive Gelati Monastery Complex (12th century) with the associated academy (UNESCO World Heritage)',
          'Continue to Mestia.',
          'Overnight in Mestia',
        ],
      },
      {
        day: 'Day 7: ',

        title: 'To the Uschba Waterfalls',
        info: [
          'Hike to the waterfalls',
          'Moderate hike',
          '(Walking time about 3-4 hours, about 7 km, elevation gain: +350 m, -350 m)',
          'A short drive to the nearby village of Shichra. Start a initially easy, later quite challenging hike to the waterfalls cascading down a rock edge. The hike follows the Dolra River and leads through enchanting dark fir forests, later in the alpine meadows and krummholz zone on narrow paths to a mountain saddle right to the edge of the glacier. If you prefer to save the steep climb on the last meters, you can take a longer break at a beautiful viewpoint in the mountain meadows, while the summit climbers return to this point.',
          'In the afternoon, we visit the Historical-Ethnographic Museum in the center of Mestia.',
          'Overnight in Mestia',
        ],
      },
      {
        day: 'Day 8: ',

        title: 'The Village of Usghuli (2200 m) - UNESCO World Heritage',
        info: [
          'Hike in Usghuli',
          'Moderate hike',
          '(Walking time about 3-4 hours, about 8 km, elevation gain: +250 m, -250 m)',
          'Drive to Usghuli, the highest continuously inhabited place in Europe. Here, high mountains, watchtowers, and Svan traditions come together to create a masterpiece. Stroll through the village. We visit the Lamaria Church (12th century), with the eternal white Shkhara (5068 m) rising in the background. The hiking trail leads up the slope of Mount Shkhara to the green oases and cliffs.',
          'Lunch with a local family, where we will eat the Svan specialty Kubdari!',
          "In the afternoon, we take a two-hour hike to the ruins of Queen Tamara's summer residence. From here, we enjoy a magnificent view of Shkhara!",
          'Overnight in Mestia',
        ],
      },
      {
        day: 'Day 9: ',

        title: "Georgia's White Pearl",
        info: [
          'A beautiful drive to the Black Sea, to the modern city of Batumi. On the way, we visit the famous Botanical Garden on the shores of the sea.',
          'A leisurely walk through the garden along the coast.',
          'Overnight in Batumi',
        ],
      },
      { day: 'Day 10: ', title: 'Free Day by the Sea', info: ['Overnight in Batumi, Breakfast '] },
      { day: 'Day 11: ', title: 'Free Day by the Sea', info: ['Overnight in Batumi, Breakfast '] },
      { day: 'Day 12: ', title: 'Free Day by the Sea', info: ['Overnight in Batumi, Breakfast '] },
      {
        day: 'Day 13: ',
        title: 'Train ride to Tbilisi.',
        info: ['Overnight in Tbilisi, Breakfast '],
      },
      { day: 'Day 14: ', title: 'DEPARTURE from Tbilisi', info: ['Breakfast', 'Check out'] },
    ],
  },
  {
    title: 'Breathtaking Caucasus Trails',
    season: '',
    length: '13-day cultural and hiking tour in the Greater Caucasus',
    price: '500$',
    image: Tbilisi,
    location: 'Tbilisi, Kakheti, Kazbegi, Kutaisi, Mestia, Borjomi, Vardzia',
    images: [Batumi, Tbilisi, Vardzia, Kakheti],
    trip: [
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
    ],
  },
  {
    title: 'Culinary Crossroads Georgia Gastronomy Tour',
    season: '',
    length: '14-DAY',
    price: '500$',
    image: Kazbegi,
    location: 'Batumi, Svaneti, Kutaisi, Vardzia, Gori, Kazbegi, Kakheti, Tbilisi',
    images: [Batumi, Tbilisi, Vardzia, Kakheti],
    trip: [
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
    ],
  },
  {
    title: 'Cultural Tapestry Tour Discovering Georgia',
    season: '',
    length: '8-DAY',
    price: '500$',
    image: Kakheti,
    location: 'Tbilisi, Kazbegi, Borjomi, Kakheti',
    images: [Batumi, Tbilisi, Vardzia, Kakheti],
    trip: [
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
    ],
  },
  {
    title: 'Echoes of History Tour',
    season: '',
    length: '12-DAY',
    price: '500$',
    image: Tbilisi,
    location: 'Tbilisi, Kazbegi, Borjomi, Vardzia, Gori, Kutaisi, Mestia',
    images: [Batumi, Tbilisi, Vardzia, Kakheti],
    trip: [
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
    ],
  },
  {
    title: 'Infinite Vineyards Voyage',
    season: '',
    length: '7 DAY/ 8 NIGHT',
    price: '500$',
    image: Tbilisi,
    location: 'Tbilisi, Kazbegi, Gori, Borjomi, Vardzia, Mtskheta, Kakheti',
    images: [Batumi, Tbilisi, Vardzia, Kakheti],
    trip: [
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
    ],
  },
  {
    title: 'Mauntain Majesty Adventure',
    season: '',
    length: '14 DAY/ 15 NIGHT',
    price: '500$',
    image: Tbilisi,
    location: 'Tbilisi, Kazbegi, Gori, Borjomi, Vardzia, Mtskheta, Kakheti',
    images: [Batumi, Tbilisi, Vardzia, Kakheti],
    trip: [
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
    ],
  },
  {
    title: 'Pilgrimage trails in Georgia Spiritual Places in Georgia',
    season: '',
    length: '5-DAY',
    price: '500$',
    image: Kakheti,
    location: 'Tbilisi, Sighnaghi, Bodbe, Ananuri, Kazbegi',
    images: [Batumi, Tbilisi, Vardzia, Kakheti],
    trip: [
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
    ],
  },
  {
    title: 'Sunset Symphony A Georgian Adventure',
    season: '',
    length: '13-DAY',
    price: '500$',
    image: Kakheti,
    location: 'Tbilisi, Kazbegi, Borjomi, Kutaisi, Mestia, Batumi',
    images: [Batumi, Tbilisi, Vardzia, Kakheti],
    trip: [
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
      { day: '', info: ['', '', '', ''] },
    ],
  },
];
const partnershipData = [
  {
    header: 'Why Choose Us',
    description:
      "In travel, we're more than A to B. At Caucasus Calling, our confidence comes from expertise, unwavering service, attention to detail, and a passion for travel. Partner with us for standout journeys, where every detail reflects our commitment to excellence.",

    content: [
      {
        id: 1,
        image: knowledge,
        header: 'Expert knowledge',
        text: 'Travel agencies that provide round trip, one way, and multi trip services.',
        title: 'At Caucasus Calling, ',
        description:
          "travel planning transcends a job—it's our art. Drawing from our global experiences and recognized excellence, we transform each journey into an extraordinary adventure.",
      },
      {
        id: 2,
        image: language,
        header: 'Pre-Travel Mastery',
        text: 'Travel agencies that provide round trip, one way, and multi trip services.',
        title: 'At Caucasus Calling, ',
        description:
          'we empower our clients with travel guides, detailed itineraries, timelines, and checklists. Our thorough pre-travel consultations ensure clients are not just prepared but genuinely excited for their upcoming journey.',
      },
      {
        id: 3,
        image: support,
        header: 'Dedicated Support',
        text: 'Travel agencies that provide round trip, one way, and multi trip services.',
        title: 'Choosing Caucasus Calling ',
        description:
          "means partnering with a team of travel professionals committed to assisting you throughout the entire booking process. Your journey is not just a reservation; it's a collaborative experience with a dedicated team by your side.",
      },
    ],
  },
];
export {
  partnershipData,
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
