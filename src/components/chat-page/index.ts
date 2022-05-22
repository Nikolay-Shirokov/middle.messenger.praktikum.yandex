import render from './chat-page.hbs';
import './chat-page.css';
import Block from '../../modules/Block';

export default class ChatPage extends Block {
  constructor(props: any) {
    super(render, props)
  }
}
