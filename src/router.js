import Admin from './views/Admin.vue';
import Home from './views/Home.vue';
import UserInfo from './views/user/UserInfo.vue';
import News from './views/news/News.vue';
import UserDetail from './views/user/UserDetail.vue';
import PetInfo from './views/pet/PetInfo.vue';
import Dashboard from './views/Dashboard.vue';
import PetDetail from './views/pet/PetDetail.vue'
import Login from './views/functions/Login.vue'
import Redirect from './components/Redirect.vue'
import NewsDetail from './views/news/NewsDetail.vue'
import NavBarHome from './components/NavBarHome.vue'
import Adopt from './views/Adopt.vue'
import Product from './views/product/Product.vue'
import ProductCate from './views/productcategory/ProductCate.vue'
import NewsPage from './views/NewsPage.vue'
import ProductPage from './views/ProductHome.vue'
import Donate from './views/Donate.vue'
import PetHomeDetail from './views/PetHomeDetail.vue'
import Contact from './views/Contact.vue'
import Volunteer from './views/Volunteer.vue'
import NewsHomeDetail from './views/NewsHomeDetail.vue'
import RequestPets from './views/functions/RequestPets.vue'
import NewsCategory from './views/newscategory/NewsCategory.vue'
import AllRq from './views/functions/AllRq.vue'
import CancelRq from './views/functions/CancelRq.vue'
import ContactRq from './views/functions/ContactRq.vue'
import SuccessRq from './views/functions/SuccessRq.vue'
import Waiting from './views/functions/Waiting.vue'
import HadingRqPet from './views/functions/HadingRqPet.vue'
import Appointment from './views/pet/Appointment.vue'
import HandingAppoint from './views/pet/HandingApoint.vue'
import Employee from './views/staff/Employee.vue'
import EmployeeDetail from './views/staff/EmployeeDetail.vue'
import RescueOrder from './views/rescueorder/RescueOrder.vue'
import DetailRescue from './views/rescueorder/DetailRescue.vue'
import FosterPet from './views/fosterpet/FosterPet.vue'
import DetailFoster from './views/fosterpet/DetailFoster.vue'
import ErrorPage from './views/ErrorPage.vue'


// Vue.use(Router)

export const routes = [
    {
        path: '/',
        name: 'NavBarHome',
        component: NavBarHome,
        children: [
            {
                path: '',
                name: 'Home',
                component: Home
            },
            {
                path: '/adopt',
                name: 'Adopt',
                component: Adopt,
            },
            {
                path: '/newspage',
                name: 'newspage',
                component: NewsPage,
            },
            {
                path: '/productpage',
                name: 'productpage',
                component: ProductPage,
            },
            {
                path: '/donate',
                name: 'donate',
                component: Donate,
            },
            {
                path: '/contact',
                name: 'contact',
                component: Contact,
            },
            {
                path: '/volunteer',
                name: 'volunteer',
                component: Volunteer,
            },
            {
                path: '/pethomedetail/:id',
                name: 'PetHomeDetail',
                component: PetHomeDetail,
                props: true
            },
            {
                path: '/newshomedetail/:id',
                name: 'NewsHomeDetail',
                component: NewsHomeDetail,
                props: true
            },
         ]
    },
    
    {
        path: '/error',
        name: 'ErrorPage',
        component: ErrorPage
    },
    {
        path: '*',
        redirect: '/error'
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/redirect ',
        name: 'Redirect ',
        component: Redirect,
        redirect: '/'
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin,
        meta: { 
            requiresAuth: true
        },
        children: [
            {
                path: '',
                name: 'Dashboard',
                component: Dashboard,
                meta: { 
                    requiresAuth: true
                },
            },
            {
                path: '/admin/UserInfo',
                name: 'UserInfo',
                component: UserInfo,
                meta: { 
                    requiresAuth: true
                },
            },
            {
                path: '/admin/employee',
                name: 'Employee',
                component: Employee,
                meta: { 
                    requiresAuth: true
                },
            },
            {
                path: '/admin/rescueorder',
                name: 'RescueOrder',
                component: RescueOrder,
                meta: { 
                    requiresAuth: true
                },
            },
            {
                path: '/admin/fosterpet',
                name: 'FosterPet',
                component: FosterPet,
                meta: { 
                    requiresAuth: true
                },
            },
            {
                path: '/admin/rescueorder/:id',
                name: 'DetailRescue',
                component: DetailRescue,
                props: true,
                meta: { 
                    requiresAuth: true
                },
            },
            {
                path: '/admin/fosterpet/:id',
                name: 'DetailFoster',
                component: DetailFoster,
                props: true,
                meta: { 
                    requiresAuth: true
                },
            },
            
            {
                path: '/admin/employee/:id',
                name: 'EmployeeDetail',
                component: EmployeeDetail,
                props: true,
                meta: { 
                    requiresAuth: true
                },
            },
            {
                path: '/admin/news',
                name: 'News',
                component: News,
                meta: { 
                    requiresAuth: true
                },
            },
            {
                path: '/admin/appointment',
                name: 'Appointment',
                component: Appointment,
                meta: { 
                    requiresAuth: true
                },
            },
            {
                path: 'UserDetail/:id',
                name: 'UserDetail',
                component: UserDetail,
                props: true,
                meta: { 
                    requiresAuth: true
                },
            },
            {
                path: 'newsdetail/:id',
                name: 'NewsDetail',
                component: NewsDetail,
                props: true,
                meta: { 
                    requiresAuth: true
                },
            },
            {
                path: '/admin/PetInfo',
                name: 'PetInfo',
                component: PetInfo,
                meta: { 
                    requiresAuth: true
                },
            },
            {
                path: '/admin/petdetail/:id',
                name: 'petdetail',
                component: PetDetail,
                props: true,
                meta: { 
                    requiresAuth: true
                },
            },
            {
                path: '/admin/product',
                name: 'product',
                component: Product,
                meta: { 
                    requiresAuth: true
                },
            },
            {
                path: '/admin/productcate',
                name: 'productcate',
                component: ProductCate,
                meta: { 
                    requiresAuth: true
                },
            },
            {
                path: '/admin/requestpets',
                name: 'requestpets',
                component: RequestPets,
                meta: { 
                    requiresAuth: true
                },
                children: [
                    {
                        path: '',
                        name: 'AllRq',
                        component: AllRq,
                        meta: { 
                            requiresAuth: true
                        },
                    },
                    {
                        path: '/admin/requestpets/wait',
                        name: 'Wait',
                        component: Waiting,
                        meta: { 
                            requiresAuth: true
                        },
                    },
                    {
                        path: '/admin/requestpets/contacting',
                        name: 'ContactRq',
                        component: ContactRq,
                        meta: { 
                            requiresAuth: true
                        },
                    },
                    {
                        path: '/admin/requestpets/success',
                        name: 'SuccessRq',
                        component: SuccessRq,
                        meta: { 
                            requiresAuth: true
                        },
                    },
                    {
                        path: '/admin/requestpets/cancel',
                        name: 'CancelRq',
                        component: CancelRq,
                        meta: { 
                            requiresAuth: true
                        },
                    },
                    {
                        path: '/admin/requestpets/handingrq/:id',
                        name: 'HadingRqPet',
                        component: HadingRqPet,
                        props: true,
                        meta: { 
                            requiresAuth: true
                        },
                    },
                    {
                        path: '/admin/requestpets/handingappoint/:id',
                        name: 'HandingAppoint',
                        component: HandingAppoint,
                        props: true,
                        meta: { 
                            requiresAuth: true
                        },
                    },
                    
                ]
            },
            {
                path: '/admin/newscategory',
                name: 'NewsCategory',
                component: NewsCategory,
                meta: { 
                    requiresAuth: true
                },
            },
        ]
    },
    
]
