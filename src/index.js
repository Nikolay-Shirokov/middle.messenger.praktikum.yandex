import './index.css';
import renderSignUp from "./pages/signup";
import renderSignIn from "./pages/signin";
import renderErrorPageNotFound from "./pages/errorPageNotFound";
import renderErrorPageDefault from "./pages/errorPageDefault";

const root = document.querySelector('#root');

function renderPage() {

  const pathname = window.location.pathname;

  const routes = {
    '/signup': renderSignUp,
    '/signin': renderSignIn,
    '/error': renderErrorPageDefault,
  }

  const currentRoute = routes[pathname];
  if (!currentRoute) {
    return renderErrorPageNotFound();
  }

  return currentRoute();

}

root.innerHTML = renderPage();
