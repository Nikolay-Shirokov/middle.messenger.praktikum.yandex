import './index.css';
import pageSignUp from "./pages/signup";
import pageSignIn from "./pages/signin";
import pageChat from "./pages/chat";
import pageProfile from "./pages/profile";
import pageProfileEdit from "./pages/profileEdit";
import pagePasswordEdit from "./pages/passwordEdit";
import pageErrorNotFound from "./pages/errorPageNotFound";
import pageErrorDefault from "./pages/errorPageDefault";
import Block from './modules/Block';

function getContentPage(): HTMLElement | null {

  let pathname: string = window.location.pathname;

  if (pathname.length > 1 && pathname[pathname.length - 1] === '/') {
    pathname = pathname.slice(0, pathname.length - 1);
  }

  const routes: Record<string, Block> = {
    '/signup': pageSignUp,
    '/signin': pageSignIn,
    '/profile': pageProfile,
    '/profile-edit': pageProfileEdit,
    '/password-edit': pagePasswordEdit,
    '/error': pageErrorDefault,
    '/': pageChat,
  }

  let currentRoute: Block = routes[pathname];
  if (!currentRoute) {
    currentRoute = pageErrorNotFound;
  }

  return currentRoute.getContent();

}

const root: HTMLElement | null = document.querySelector('#root');
if (root) {
  root.innerHTML = '';
  root.append(getContentPage()!);
}
