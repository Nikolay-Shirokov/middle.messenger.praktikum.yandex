import render from './error-page.hbs';
import './error-page.css';
import Block from '../../modules/Block';

export default class ErrorPage extends Block {
  constructor(props: any) {
    super(render, props)
  }
}
