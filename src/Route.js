//public route
import LandingPage from "./pages/LandingPage";
import Feature from "./pages/Features";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Content from "./pages/Content";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

//private route
import Profile from './pages/Profile';
import OnBoarding from './components/Onboarding';
import VideoContent from './pages/VideoContent';
import ContactPage from './pages/ContactPage';
import HistoryUser from './pages/HistoryUser/index';
import BookmarkVideo from './pages/BookmarkVideo';

export const publicRoutes = [
	{
		component: LandingPage,
		path: "/",
		exact: true,
	},

	{
		component: Feature,
		path: "/feature",
		exact: true,
	},
	{
		component: Dashboard,
		path: "/dashboard",
		exact: true,
	},
	{
		component: About,
		path: "/about",
		exact: true,
	},
	{
		component: Faq,
		path: "/faq",
		exact: true,
	},
	{
		component: Content,
		path: "/content-video",
		exact: true,
	},
	{
		component: LoginPage,
		path: "/login",
		exact: true,
	},
	{
		component: RegisterPage,
		path: "/register",
		exact: true,
	},
	{
		component: ContactPage,
		path: "/contactus",
		exact: true,
	},
];

export const privateRoutes = [
	{
		component: LandingPage,
		path: "/",
		exact: true,
	},

	{
		component: Feature,
		path: "/feature",
		exact: true,
	},
	{
		component: Dashboard,
		path: "/dashboard",
		exact: true,
	},
	{
		component: About,
		path: "/about",
		exact: true,
	},
	{
		component: Faq,
		path: "/faq",
		exact: true,
	},
	{
		component: Content,
		path: "/content-video",
		exact: true,
	},
	{
		component: LoginPage,
		path: "/login",
		exact: true,
	},
	{
		component: RegisterPage,
		path: "/register",
		exact: true,
	},
	{
		component: Profile,
		path: "/profile",
		exact: true,
	},
	{
		component: OnBoarding,
		path: "/onboarding",
		exact: true,
	},
	{
		component: VideoContent,
		path: "/videos-content/:id",
		exact: true,
	},
	{
		component: ContactPage,
		path: "/contactus",
		exact: true,
	},
	{
		component: BookmarkVideo,
		path: "/bookmark",
		exact: true,
	},
	{
		component: HistoryUser,
		path: '/history',
		exact: true,
	},
	{
		component: HistoryUser,
		path: '/history',
		exact: true,
	},
];
