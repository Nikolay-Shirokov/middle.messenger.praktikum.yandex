import render from './form-auth.hbs';
import './form-auth.css';
import FormWithValidation from '../../modules/FormWithValidation';

export default class FormAuth extends FormWithValidation {
  constructor(props: any) {
    super(render, props)
  }
}
