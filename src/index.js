import './index.css';
import renderSignUp from "./pages/signup";
import renderSignIn from "./pages/signin";

const root = document.querySelector('#root');

function renderPage() {

  const pathname = window.location.pathname;

  const routes = {
    '/signup': renderSignUp,
    '/signin': renderSignIn,
  }

  const currentRoute = routes[pathname];
/*   if (!currentRoute) {
    return renderErrorPageNotFound();
  } */

  return currentRoute();

}

root.innerHTML = renderPage();
