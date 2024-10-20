import Home from "../../src/Pages/Home"
import AboutUs from "../../src/Pages/AboutUs"
import ContactUs from "../../src/Pages/ContactUs"
import Support from "../../src/Pages/Support"
import Register from "../../src/Pages/Register"
import Login from "../../src/Pages/Login"
import Careers from "../../src/Pages/Careers"
const routes = [
    { path: '/', component: Home,name:"home" },
    { path: '/about', component: AboutUs,name:"about" },
    { path: '/support', component: Support,name:"support" },
    { path: '/contact', component: ContactUs,name:"contact" },
    { path: '/register', component: Register,name:"register"},
    { path: '/login', component: Login,name:"login" },
    { path: '/careers', component: Careers,name:"Careers" },
];
export default routes;
