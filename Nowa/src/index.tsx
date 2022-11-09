import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./Authentication/auth";
import "./index.scss";
import Loader from "./shade/Loaders/Loaders"
const App = React.lazy(() => import("../src/shade/layouts/App"));
const Switcherapp = React.lazy(() => import("../src/shade/layouts/Switcherapp"));
const Custompages = React.lazy(() => import("../src/shade/layouts/custompages"));
const Dashboard = React.lazy(() =>
  import("./components/Dashboard/Dashboard-1/Dashboard")
);
const Dashboard2 = React.lazy(() =>
  import("./components/Dashboard/Dashboard-2/Dashboard2")
);
const Dashboard3 = React.lazy(() =>
  import("./components/Dashboard/Dashboard-3/Dashboard3")
);
//App
const Cards = React.lazy(() => import("./components/App/Cards/Cards"));
const Contacts = React.lazy(() => import("./components/App/Contacts/Contacts"));
const Filedetails = React.lazy(() =>
  import("./components/App/File-details/Filedetails")
);
const Filemanager = React.lazy(() =>
  import("./components/App/File-manager/Filemanager")
);

const Imagecompare = React.lazy(() =>
  import("./components/App/Image-compare/Imagecompare")
);
const Notification = React.lazy(() =>
  import("./components/App/Notification/Notification")
);
const Widgetnotification = React.lazy(() =>
  import("./components/App/Widget-notification/Widget-notification")
);
// const Treeview = React.lazy(() => import("./components/App/Treeview/Treeview"));

const Calendar = React.lazy(() => import("./components/App/Calendar/Calendar"));
const Filemanager1 = React.lazy(() =>
  import("./components/App/File-manager1/Filemanager1")
);

const Rangeslider = React.lazy(() =>
  import("./components/App/Range-slider/Rangeslider")
);
//App end
//Element
const Images = React.lazy(() => import("./components/Elements/Images/Images"));
const Alerts = React.lazy(() => import("./components/Elements/Alerts/Alerts"));
const Avatar = React.lazy(() => import("./components/Elements/Avatar/Avatar"));
const Breadcrumbs = React.lazy(() =>
  import("./components/Elements/Breadcrumbs/Breadcrumbs")
);
const Buttons = React.lazy(() =>
  import("./components/Elements/Buttons/Buttons")
);
const Badges = React.lazy(() => import("./components/Elements/Badge/Badge"));
const Dropdowns = React.lazy(() =>
  import("./components/Elements/Dropdown/Dropdown")
);
const Thumbnails = React.lazy(() =>
  import("./components/Elements/Thumbnails/Thumbnails")
);
const ListGroups = React.lazy(() =>
  import("./components/Elements/ListGroup/ListGroup")
);
const Mediaobject = React.lazy(() =>
  import("./components/Elements/Mediaobject/Mediaobject")
);
const Navigation = React.lazy(() =>
  import("./components/Elements/Navigation/Navigation")
);
const Pagination = React.lazy(() =>
  import("./components/Elements/Pagination/Pagination")
);
const Popover = React.lazy(() =>
  import("./components/Elements/Popover/Popover")
);
const Progress = React.lazy(() =>
  import("./components/Elements/Progress/Progress")
);
const Spinners = React.lazy(() =>
  import("./components/Elements/Spinners/Spinners")
);
const Typography = React.lazy(() =>
  import("./components/Elements/Typography/Typography")
);
const Tooltip = React.lazy(() =>
  import("./components/Elements/Tooltip/Tooltip")
);
const Toast = React.lazy(() => import("./components/Elements/Toast/Toast"));
const Tabs = React.lazy(() => import("./components/Elements/Tabs/Tabs"));
const Tags = React.lazy(() => import("./components/Elements/Tags/Tags"));

//Element end
//advancedui
const Accordions = React.lazy(() =>
  import("./components/AdvancedUI/Accordion/Accordion")
);
const Modals = React.lazy(() =>
  import("./components/AdvancedUI/Modals/Modals")
);
const Rating = React.lazy(() =>
  import("./components/AdvancedUI/Ratings/Ratings")
);
const Carousel = React.lazy(() =>
  import("./components/AdvancedUI/Carousel/Carousel")
);
const Collapse = React.lazy(() =>
  import("./components/AdvancedUI/Collapse/Collapse")
);
const Timeline = React.lazy(() =>
  import("./components/AdvancedUI/Timeline/Timeline")
);
const Sweetalert = React.lazy(() =>
  import("./components/AdvancedUI/Sweetalert/Sweetalert")
);
const Counters = React.lazy(() =>
  import("./components/AdvancedUI/Counters/Counters")
);
const Blog = React.lazy(() => import("./components/AdvancedUI/Blog/Blog"));
const Userlist = React.lazy(() =>
  import("./components/AdvancedUI/Userlist/Userlist")
);
const Search = React.lazy(() =>
  import("./components/AdvancedUI/Search/Search")
);
const Blogdetails = React.lazy(() =>
  import("./components/AdvancedUI/Blog-details/Blogdetails")
);
const EditPost = React.lazy(() =>
  import("./components/AdvancedUI/Edit-post/Editpost")
);
const Fileattachments = React.lazy(() =>
  import("./components/AdvancedUI/FileAttachments/FileAttachments")
);
//advancedui
//charts
const Apexcharts = React.lazy(() =>
  import("./components/Charts/Apexcharts/Apexcharts"))
const ChartJS = React.lazy(() =>
  import("./components/Charts/ChartJS/ChartJS"))
const Widgets = React.lazy(() =>
  import("./components/Widgets/Widgets"))
const Echart = React.lazy(() =>
  import("./components/Charts/Echart/Echart"))
//charts
//pages
const SignUp = React.lazy(() =>
  import("./components/Pages/Authentication/SignUp/SignUp")
);
const SignIn = React.lazy(() =>
  import("./components/Pages/Authentication/SignIn/SignIn")
);
const ForgotPassword = React.lazy(() =>
  import("./components/Pages/Authentication/ForgotPassword/ForgotPassword")
);
const Lockscreen = React.lazy(() =>
  import("./components/Pages/Authentication/Lockscreen/Lockscreen")
);
const ResetPassword = React.lazy(() =>
  import("./components/Pages/Authentication/ResetPassword/ResetPassword")
);
const UnderConstruction = React.lazy(() =>
  import(
    "./components/Pages/Authentication/UnderConstruction/UnderConstruction"
  )
);
const Error404 = React.lazy(() =>
  import("./components/Pages/Authentication/404Error/404Error")
);
const Error500 = React.lazy(() =>
  import("./components/Pages/Authentication/500Error/500Error")
);
const Error501 = React.lazy(() =>
  import("./components/Pages/Authentication/501Error/501Error")
);
const Cart = React.lazy(() => import("./components/Pages/Ecommerce/Cart/Cart"));
const Checkout = React.lazy(() =>
  import("./components/Pages/Ecommerce/Check-out/Check-out")
);
const ProductDetails = React.lazy(() =>
  import("./components/Pages/Ecommerce/Product-Details/Product-Details")
);
const Shop = React.lazy(() => import("./components/Pages/Ecommerce/Shop/Shop"));
const Wishlist = React.lazy(() =>
  import("./components/Pages/Ecommerce/Wish-list/Wish-list")
);
const EmptyPage = React.lazy(() =>
  import("./components/Pages/EmptyPage/EmptyPage")
);
const Faqs = React.lazy(() => import("./components/Pages/Faqs/Faqs"));
const Gallery = React.lazy(() => import("./components/Pages/Gallery/Gallery"));
const Invoice = React.lazy(() => import("./components/Pages/Invoice/Invoice"));
const Chat = React.lazy(() => import("./components/Pages/Mail/Chat/Chat"));
const Mail = React.lazy(() => import("./components/Pages/Mail/Mail/Mail"));
const Mailsettings = React.lazy(() =>
  import("./components/Pages/Mail/Mail-settings/Mail-settings")
);
const MailCompose = React.lazy(() =>
  import("./components/Pages/Mail/MailCompose/MailCompose")
);
const Readmail = React.lazy(() =>
  import("./components/Pages/Mail/Read-mail/Read-mail")
);
const Notificationslist = React.lazy(() =>
  import("./components/Pages/Notifications-list/Notifications-list")
);
const Pricing = React.lazy(() => import("./components/Pages/Pricing/Pricing"));
const Settings = React.lazy(() =>
  import("./components/Pages/Settings/Settings")
);
const Todotask = React.lazy(() =>
  import("./components/Pages/Todotask/Todotask")
);
const Aboutus = React.lazy(() => import("./components/Pages/Aboutus/Aboutus"));
const Profile = React.lazy(() => import("./components/Pages/Profile/Profile"));

//pages
//Utilities
const Extras = React.lazy(() => import("./components/Utilities/Extras/Extras"));
const Background = React.lazy(() => import("./components/Utilities/Background/Background"));
const Border = React.lazy(() => import("./components/Utilities/Border/Border"));
const Display = React.lazy(() => import("./components/Utilities/Display/Display"));
const Width = React.lazy(() => import("./components/Utilities/Width/Width"));
const Position = React.lazy(() => import("./components/Utilities/Position/Position"));
const Padding = React.lazy(() => import("./components/Utilities/Padding/Padding"));
const Margin = React.lazy(() => import("./components/Utilities/Margin/Margin"));
const Flex = React.lazy(() => import("./components/Utilities/Flex/Flex"));
const Height = React.lazy(() => import("./components/Utilities/Height/Height"));


//Utilities end
//Icons
const FontAwesome = React.lazy(() =>
  import("./components/Icons/FontAwesome/FontAwesome")
);
const MaterialIcons = React.lazy(() =>
  import("./components/Icons/MaterialIcons/MaterialIcons")
);
const MaterialDesignIcons = React.lazy(() =>
  import("./components/Icons/MaterialDesignIcons/MaterialDesignIcons")
);
const IonicIcons = React.lazy(() =>
  import("./components/Icons/IonicIcons/IonicIcons")
);
const Pe7Icons = React.lazy(() =>
  import("./components/Icons/Pe7Icons/Pe7Icons")
);
const SimpleLineIcons = React.lazy(() =>
  import("./components/Icons/SimpleLineIcons/SimpleLineIcons")
);
const ThemifyIcons = React.lazy(() =>
  import("./components/Icons/ThemifyIcons/ThemifyIcons")
);
const TypiconsIcons = React.lazy(() =>
  import("./components/Icons/TypiconsIcons/TypiconsIcons")
);
const WeatherIcons = React.lazy(() =>
  import("./components/Icons/WeatherIcons/WeatherIcons")
);
const BootstrapIcons = React.lazy(() =>
  import("./components/Icons/BootstrapIcons/BootstrapIcons")
);
const FeatherIcons = React.lazy(() =>
  import("./components/Icons/FeatherIcons/FeatherIcons")
);
const FlagIcons = React.lazy(() =>
  import("./components/Icons/FlagIcons/FlagIcons")
);
//Icons end
//Form
const FormElements = React.lazy(() =>
  import("./components/Forms/FormElements/FormElements")
);
const FormEditor = React.lazy(() =>
  import("./components/Forms/FormEditor/FormEditor")
);
const Formelementsizes = React.lazy(() =>
  import("./components/Forms/Form-element-sizes/Form-element-sizes")
);
const FormLayouts = React.lazy(() =>
  import("./components/Forms/FormLayouts/FormLayouts")
);
const FormInputSpinners = React.lazy(() =>
  import("./components/Forms/FormInputSpinners/FormInputSpinners")
);
const FormValidation = React.lazy(() =>
  import("./components/Forms/FormValidation/FormValidation")
);
const FormWizard = React.lazy(() =>
  import("./components/Forms/FormWizard/FormWizard")
);
const AdvancedForms = React.lazy(() =>
  import("./components/Forms/AdvancedForms/AdvancedForms")
);
const LeafletMaps = React.lazy(() =>
  import("./components/Maps/LeafletMaps/LeafletMaps")
);
const VectorMaps = React.lazy(() =>
  import("./components/Maps/VectorMaps/VectorMaps")
);
const DefaultTables = React.lazy(() =>
  import("./components/Tables/DefaultTables/DefaultTables")
);
const DataTables = React.lazy(() =>
  import("./components/Tables/DataTables/DataTables")
);
const AuthLogin = React.lazy(() => import("./Authentication/Login"));
const AuthSignup = React.lazy(() => import("./Authentication/Signup"))
//Form
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.Fragment>
  <BrowserRouter>
    <React.Suspense fallback={<Loader/>}>
      <Routes>
        <Route path='/' element={<Auth />}>
          <Route index element={<AuthLogin />} />
          
          <Route
            path={`/authentication/login`}
            element={<AuthLogin />}
          />
            <Route
            path={`/authentication/signup`}
            element={<AuthSignup />}
          />
          </Route> 
          
        <Route path={`/`} element={<App />}>
        <Route
              path={`/`}
              element={<Dashboard />}
            />
           <Route
            path={`/widgets`}
            element={<Widgets />}
          /> 
          <Route>
            <Route
              path={`/dashboard/dashboard-1`}
              element={<Dashboard />}
            />
            <Route
              path={`/dashboard/dashboard-2`}
              element={<Dashboard2 />}
            />
            <Route
              path={`/dashboard/dashboard-3`}
              element={<Dashboard3 />}
            />
          </Route>
          <Route>
            <Route
              path={`/app/cards`}
              element={<Cards />}
            />
            <Route
              path={`/app/contacts`}
              element={<Contacts />}
            />
            <Route
              path={`/app/filedetails`}
              element={<Filedetails />}
            />
            <Route
              path={`/app/filemanager`}
              element={<Filemanager />}
            />
            <Route
              path={`/app/filemanager1`}
              element={<Filemanager1 />}
            />
            <Route
              path={`/app/imageCompare`}
              element={<Imagecompare />}
            />
            <Route
              path={`/app/notification`}
              element={<Notification />}
            />
            <Route
              path={`/app/widgetNotification`}
              element={<Widgetnotification />}
            />
            <Route
              path={`/app/calendar`}
              element={<Calendar />}
            />
            <Route
              path={`/app/rangeslider`}
              element={<Rangeslider />}
            />
          </Route>
          <Route>
            <Route
              path={`/elements/alerts`}
              element={<Alerts />}
            />
            <Route
              path={`/elements/avatar`}
              element={<Avatar />}
            />
            <Route
              path={`/elements/breadcrumbs`}
              element={<Breadcrumbs />}
            />
            <Route
              path={`/elements/buttons`}
              element={<Buttons />}
            />
            <Route
              path={`/elements/images`}
              element={<Images />}
            />
            <Route
              path={`/elements/badges`}
              element={<Badges />}
            />
            <Route
              path={`/elements/dropdown`}
              element={<Dropdowns />}
            />
            <Route
              path={`/elements/thumbnails`}
              element={<Thumbnails />}
            />
            <Route
              path={`/elements/listgroup`}
              element={<ListGroups />}
            />
            <Route
              path={`/elements/navigation`}
              element={<Navigation />}
            />
            <Route
              path={`/elements/pagination`}
              element={<Pagination />}
            />
            <Route
              path={`/elements/popover`}
              element={<Popover />}
            />
            <Route
              path={`/elements/mediaObject`}
              element={<Mediaobject />}
            />
            <Route
              path={`/elements/progress`}
              element={<Progress />}
            />
            <Route
              path={`/elements/spinners`}
              element={<Spinners />}
            />
            <Route
              path={`/elements/typography`}
              element={<Typography />}
            />
            <Route
              path={`/elements/tooltip`}
              element={<Tooltip />}
            />
            <Route
              path={`/elements/toast`}
              element={<Toast />}
            />
            <Route
              path={`/elements/tags`}
              element={<Tags />}
            />
            <Route
              path={`/elements/tabs`}
              element={<Tabs />}
            />
          </Route>
          <Route>
            <Route
              path={`/advancedui/accordions`}
              element={<Accordions />}
            />
            <Route
              path={`/advancedui/carousel`}
              element={<Carousel />}
            />
            <Route
              path={`/advancedui/collapse`}
              element={<Collapse />}
            />
            <Route
              path={`/advancedui/modal`}
              element={<Modals />}
            />
            <Route
              path={`/advancedui/timeline`}
              element={<Timeline />}
            />
            <Route
              path={`/advancedui/sweetalert`}
              element={<Sweetalert />}
            />
            <Route
              path={`/advancedui/rating`}
              element={<Rating />}
            />
            <Route
              path={`/advancedui/counters`}
              element={<Counters />}
            />
            <Route
              path={`/advancedui/blog`}
              element={<Blog />}
            />
            <Route
              path={`/advancedui/userlist`}
              element={<Userlist />}
            />
            <Route
              path={`/advancedui/search`}
              element={<Search />}
            />
            <Route
              path={`/advancedui/blogdetails`}
              element={<Blogdetails />}
            />
            <Route
              path={`/advancedui/editPost`}
              element={<EditPost />}
            />
            <Route
              path={`/advancedui/fileattachments`}
              element={<Fileattachments />}
            />
          </Route>
          <Route>
            <Route
              path={`/pages/aboutus`}
              element={<Aboutus />}
            />
            <Route
              path={`/pages/profile`}
              element={<Profile />}
            />
            <Route
              path={`/pages/notificationlist`}
              element={<Notificationslist />}
            />
            <Route
              path={`/pages/settings`}
              element={<Settings />}
            />
            <Route
              path={`/pages/pricing`}
              element={<Pricing />}
            />
            <Route
              path={`/pages/todotask`}
              element={<Todotask />}
            />
            <Route
              path={`/pages/faqs`}
              element={<Faqs />}
            />
            <Route
              path={`/pages/gallery`}
              element={<Gallery />}
            />
            <Route
              path={`/pages/invoice`}
              element={<Invoice />}
            />
            <Route
              path={`/pages/emptypage`}
              element={<EmptyPage />}
            />
          </Route>
          <Route>
            <Route
              path={`/pages/e-commerce/shop`}
              element={<Shop />}
            />
            <Route path={`/pages/e-commerce/productDetails/:id`} element={<ProductDetails />} />
            <Route
              path={`/pages/e-commerce/productDetails`}
              element={<ProductDetails />}
            />
            <Route
              path={`/pages/e-commerce/cart`}
              element={<Cart />}
            />
            <Route
              path={`/pages/e-commerce/checkout`}
              element={<Checkout />}
            />
            <Route
              path={`/pages/e-commerce/wishlist`}
              element={<Wishlist />}
            />
          </Route>
          <Route>
            <Route
              path={`/pages/mail/mail`}
              element={<Mail />}
            />
            <Route
              path={`/pages/mail/mailcompose`}
              element={<MailCompose />}
            />
            <Route
              path={`/pages/mail/readmail`}
              element={<Readmail />}
            />
            <Route
              path={`/pages/mail/mailsettings`}
              element={<Mailsettings />}
            />
            <Route
              path={`/pages/mail/chat`}
              element={<Chat />}
            />
          </Route>
          <Route>
            <Route
              path={`/icon/fontAwesome`}
              element={<FontAwesome />}
            />
            <Route
              path={`/icon/materialIcons`}
              element={<MaterialIcons />}
            />
            <Route
              path={`/icon/materialDesignIcons`}
              element={<MaterialDesignIcons />}
            />
            <Route
              path={`/icon/ionicIcons`}
              element={<IonicIcons />}
            />
            <Route
              path={`/icon/typiconsIcons`}
              element={<TypiconsIcons />}
            />
            <Route
              path={`/icon/weatherIcons`}
              element={<WeatherIcons />}
            />
            <Route
              path={`/icon/featherIcons`}
              element={<FeatherIcons />}
            />
            <Route
              path={`/icon/flagIcons`}
              element={<FlagIcons />}
            />
            <Route
              path={`/icon/pe7Icons`}
              element={<Pe7Icons />}
            />
            <Route
              path={`/icon/simpleLineIcons`}
              element={<SimpleLineIcons />}
            />
            <Route
              path={`/icon/themifyIcons`}
              element={<ThemifyIcons />}
            />
            <Route
              path={`/icon/bootstrapIcons`}
              element={<BootstrapIcons />}
            />
          </Route>
          <Route>
            <Route
              path={`/form/formElements`}
              element={<FormElements />}
            />
            <Route
              path={`/form/advancedform`}
              element={<AdvancedForms />}
            />
            <Route
              path={`/form/formlayouts`}
              element={<FormLayouts />}
            />
            <Route
              path={`/form/formValidation`}
              element={<FormValidation />}
            />
            <Route
              path={`/form/formWizard`}
              element={<FormWizard />}
            />
            <Route
              path={`/form/formEditor`}
              element={<FormEditor />}
            />
            <Route
              path={`/form/formelementsizes`}
              element={<Formelementsizes />}
            />
            <Route
              path={`/form/forminputspinners`}
              element={<FormInputSpinners />}
            />
          </Route>
          <Route>
            <Route
              path={`/maps/leafletMaps`}
              element={<LeafletMaps />}
            />
            <Route
              path={`/maps/vectorMaps`}
              element={<VectorMaps />}
            />
          </Route>
          <Route>
            <Route
              path={`/tables/defaultTables`}
              element={<DefaultTables />}
            />
            <Route
              path={`/tables/dataTables`}
              element={<DataTables />}
            />
          </Route>
          <Route>
            <Route
              path={`/charts/chartJs`}
              element={<ChartJS />}
            />
            <Route
              path={`/charts/echart`}
              element={<Echart />}
            />
            <Route
              path={`/charts/apexcharts`}
              element={<Apexcharts />}
            />
          </Route>
          <Route>
            <Route>
              <Route
                path={`/utilities/background`}
                element={<Background />}
              />
              <Route
                path={`/Utilities/border`}
                element={<Border />}
              />
              <Route
                path={`/Utilities/display`}
                element={<Display />}
              />
              <Route
                path={`/Utilities/flex`}
                element={<Flex />}
              />
              <Route
                path={`/Utilities/height`}
                element={<Height />}
              />
              <Route
                path={`/Utilities/margin`}
                element={<Margin />}
              />
              <Route
                path={`/Utilities/padding`}
                element={<Padding />}
              />
              <Route
                path={`/Utilities/position`}
                element={<Position />}
              />
              <Route
                path={`/Utilities/width`}
                element={<Width />}
              />
              <Route
                path={`/Utilities/extras`}
                element={<Extras />}
              />
            </Route>
            <Route
              path={`/pages/Authentication/501error`}
              element={<Error501 />}
            />
          </Route> 
        </Route>
         <Route path={`/`} element={<Custompages />}>
          <Route
            path={`/pages/Authentication/sigin`}
            element={<SignIn />}
          />
          <Route
            path={`/pages/Authentication/sigup`}
            element={<SignUp />}
          />
          <Route
            path={`/pages/Authentication/forgotpassword`}
            element={<ForgotPassword />}
          />
          <Route
            path={`/pages/Authentication/resetpassword`}
            element={<ResetPassword />}
          />
          <Route
            path={`/pages/Authentication/lockscreen`}
            element={<Lockscreen />}
          />
          <Route
            path={`/pages/Authentication/underconstruction`}
            element={<UnderConstruction />}
          />
          <Route
            path={`/pages/Authentication/404error`}
            element={<Error404 />}
          />
          <Route
            path={`/pages/Authentication/500error`}
            element={<Error500 />}
          />
          <Route path="*" element={<Error404 />} />
        </Route> 
        
         <Route>
          <Route
            path={`/pages/switcher/switcher-1`}
            element={<Switcherapp />}
          />
        </Route> 
        <Route></Route>
      </Routes>
    </React.Suspense>
  </BrowserRouter>
</React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
