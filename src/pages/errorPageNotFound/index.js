import renderErrorPage from "../../components/error-page";

export default () => renderErrorPage({
  code: '404',
  text: 'Не туда попали'
})
