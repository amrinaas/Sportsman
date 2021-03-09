import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./Route";
import VideoContent from "./pages/VideoContent";
import Profile from "./pages/Profile";
// import _ from "lodash";
import AdminContent from "./pages/AdminContent";
import AdminDashboard from "./pages/AdminDashboard";
import ContactUs from "./pages/ContactPage";
import Content from "./pages/Content";
import Video from "./pages/Videos";
import AddContent from "./pages/AddContent";
import UpdateContent from "./pages/UpdateContent";
import BookmarkVideo from "./pages/BookmarkVideo";

function App() {
  const token = localStorage.getItem("token");

  return (
    <div>
      <BrowserRouter>
        <Switch>
          {token !== null
            ? privateRoutes.map((route, index) => (
                <Route
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                  key={index}
                />
              ))
            : publicRoutes.map((route, index) => (
                <Route
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                  key={index}
                />
              ))}

          <Route path="/workout-video/:id" component={VideoContent} />
          <Route path="/content" component={Content} />
          <Route path="/profile" component={Profile} />
          <Route path="/admin-content" component={AdminContent} />
          <Route path="/admin-dashboard" component={AdminDashboard} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/videos-content/video/:id" component={Video} />
          <Route path="/update-content/:id" component={UpdateContent} />
          <Route path="/add-content" component={AddContent} />
          <Route path="/bookmark" component={BookmarkVideo} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
