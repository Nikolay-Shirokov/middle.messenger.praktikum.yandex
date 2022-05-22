import Block from "./Block";

type TTemplate = (context: any) => string;

export default class FormWithValidation extends Block {
  constructor(template: TTemplate, props: any) {

    if (!props.values) {
      props.values = {};
    }

    if (!props.events) {
      props.events = {};
    }

    props.events = {
      ...props.events,
      'form': {
        'submit': (event: Event): void => {
          event.preventDefault();
          console.log(this.props.values);
        }
      },
      'input': {
        'blur': (event: Event): void => {
          const inputElement = event.target as HTMLInputElement;
          const errorElement = inputElement.parentNode?.querySelector(`span[data-input=${inputElement.name}]`) as HTMLSpanElement;
          this.props.values[inputElement.name] = inputElement.value;
          errorElement.textContent = inputElement.validationMessage;
        }
      }
    }

    super(template, props);
  }
}
