import './index.css';
import renderSignUp from "./pages/signup";
import renderSignIn from "./pages/signin";
import renderChatPage from "./pages/chat";
import renderProfilePage from "./pages/profile";
import renderProfileEditPage from "./pages/profileEdit";
import renderPasswordEditPage from "./pages/passwordEdit";
import renderErrorPageNotFound from "./pages/errorPageNotFound";
import renderErrorPageDefault from "./pages/errorPageDefault";

const root: HTMLElement | null = document.querySelector('#root');

function renderPage() {

  let pathname = window.location.pathname;

  if (pathname.length > 1 && pathname[pathname.length - 1] === '/') {
    pathname = pathname.slice(0, pathname.length - 1);
  }

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

if (root) {
  root.innerHTML = renderPage();
}
