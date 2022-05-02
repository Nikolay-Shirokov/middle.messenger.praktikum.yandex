import './index.css';
import renderSignUp from "./pages/signup";
import renderSignIn from "./pages/signin";
import renderChatPage from "./pages/chat";
import renderProfilePage from "./pages/profile";
import renderProfileEditPage from "./pages/profileEdit";
import renderPasswordEditPage from "./pages/passwordEdit";
import renderErrorPageNotFound from "./pages/errorPageNotFound";
import renderErrorPageDefault from "./pages/errorPageDefault";

const root = document.querySelector('#root');

function renderPage() {

  const pathname = window.location.pathname;

  const routes = {
    '/signup': renderSignUp,
    '/signin': renderSignIn,
    '/profile': renderProfilePage,
    '/profile-edit': renderProfileEditPage,
    '/password-edit': renderPasswordEditPage,
    '/error': renderErrorPageDefault,
    '/': renderChatPage,
  }

  const currentRoute = routes[pathname];
  if (!currentRoute) {
    return renderErrorPageNotFound();
  }

  return currentRoute();

}

root.innerHTML = renderPage();
