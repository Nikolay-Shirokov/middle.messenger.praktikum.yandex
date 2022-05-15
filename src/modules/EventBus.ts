
type THandler = (...args: unknown[]) => void;

export default class EventBus {

  private listeners: Record<string, THandler[]>;

  constructor() {
    this.listeners = {};
  }

  public on(event: string, callback: THandler): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  public off(event: string, callback: THandler): void {
    if (!this.listeners[event]) {
      return;
    }

    this.listeners[event] = this.listeners[event].filter(
      listener => listener !== callback
    );
  }

  public emit(event: string, ...args: unknown[]): void {
    if (!this.listeners[event]) {
      return;
    }

    this.listeners[event].forEach(function (listener) {
      listener(...args);
    });
  }

}