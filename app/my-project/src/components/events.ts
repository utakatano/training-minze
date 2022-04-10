import Minze, { EventListeners, MinzeElement } from 'minze'

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