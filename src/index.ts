import './index.css';
import renderSignUp from "./pages/signup";
import renderSignIn from "./pages/signin";
import renderChatPage from "./pages/chat";
import renderProfilePage from "./pages/profile";
import renderProfileEditPage from "./pages/profileEdit";
import renderPasswordEditPage from "./pages/passwordEdit";
import renderErrorPageNotFound from "./pages/errorPageNotFound";
import renderErrorPageDefault from "./pages/errorPageDefault";

function renderPage() : string {

  let pathname: string = window.location.pathname;

  if (pathname.length > 1 && pathname[pathname.length - 1] === '/') {
    pathname = pathname.slice(0, pathname.length - 1);
  }

  const routes: Record<string, () => string> = {
    '/signup': renderSignUp,
    '/signin': renderSignIn,
    '/profile': renderProfilePage,
    '/profile-edit': renderProfileEditPage,
    '/password-edit': renderPasswordEditPage,
    '/error': renderErrorPageDefault,
    '/': renderChatPage,
  }

  const currentRoute: () => string = routes[pathname];
  if (!currentRoute) {
    return renderErrorPageNotFound();
  }

  return currentRoute();

}

const root: HTMLElement | null = document.querySelector('#root');
if (root) {
  root.innerHTML = renderPage();
}
