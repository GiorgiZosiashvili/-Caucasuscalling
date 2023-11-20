import Airplane from '../assets/images/airplane.png';
import HealthBanner from '../assets/images/Borjomi.png';
import Canyon from '../assets/images/Canyon.png';
import Currency from '../assets/images/currency.png';
import Hotel from '../assets/images/hotel.png';
import Juta from '../assets/images/Juta.png';
import Jvari_Monastery from '../assets/images/Jvari_Monastery.png';
import Kakheti from '../assets/images/Kakheti.png';
import Kazbegi from '../assets/images/Kazbegi.png';
import Nature from '../assets/images/nature.png';
import Old_Tbilisi from '../assets/images/Old_Tbilisi.png';
import Passport from '../assets/images/passport.png';
import Suitcase from '../assets/images/suitcase.png';
import SUV from '../assets/images/suv.png';
import Tbilisi from '../assets/images/Tbilisi.png';
import Tsikhisdziri from '../assets/images/Tsikhisdziri.png';
import HomeBanner from '../assets/images/upp.png';

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
const destinationsData = [
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
export {
  toursData,
  destinationsData,
  servicesData,
  infoData,
  pagesData,
  homeBannerData,
  healthBannerData,
};
