import render from './profile.hbs';
import './profile.css';
import FormWithValidation from '../../modules/FormWithValidation';

export default class FormAuth extends FormWithValidation {
  constructor(props: any) {
    super(render, props)
  }
}
