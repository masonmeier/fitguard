import LandingPage from "./pages/landing-page/LandingPage.js";
import InstallContact from './components/Contact/InstallContact';
import ServiceContact from './components/Contact/ServiceContact';

const routes = [
  { path: "/", component: LandingPage },
  { path: "/install", component: InstallContact},
  { path: "/service", component: ServiceContact},
];

export default routes;
