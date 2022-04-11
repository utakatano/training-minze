import Minze, { MinzeElement } from 'minze'

class MyEventListenersElement extends MinzeElement {
  html = () => `
    <button class="button">
      Button
    </button>
  `

  handleClick = (event: Event) => {
    console.log(event)
  }

  eventListeners = [
    ['.button', 'click', this.handleClick]
  ]
}

class MyCastElement extends MinzeElement {
  onReady() {
    const optionalDetail = { msg: 'Hello Minze!' }
    this.cast('minze:ready', optionalDetail)
  }
}

Minze.defineAll([MyEventListenersElement, MyCastElement])