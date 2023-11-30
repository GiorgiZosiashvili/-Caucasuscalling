import Destination from 'pages/destination/DestinationPage';
import HealthPage from 'pages/healthPrograms/HealthPage';
import HomePage from 'pages/home/HomePage';
import PartnershipPage from 'pages/partnership/PartnershipPage';
import ToursPage from 'pages/tours/ToursPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import DestinationDetailsPage from '../pages/destination/DestinationDetailsPage';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route exact path="Destination" element={<Destination />} />
        <Route path="Tours" element={<ToursPage />} />
        <Route path="Health" element={<HealthPage />} />
        <Route path="Partnership" element={<PartnershipPage />} />
        <Route path="Destination/:title" element={<DestinationDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
