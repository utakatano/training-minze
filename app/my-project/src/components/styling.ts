import Minze, { MinzeElement } from 'minze'

class MyCssElement extends MinzeElement {
  color = 'red'

  html = () => `<div>Hello Minze styling</div>`

  css = () => `
    div {
      background: ${this.color}
    }
  `
}

class MyConditionalStylingElement extends MinzeElement {
  isActive = true
  color = 'rgb(255 255 255)'

  html = () => `
    <div>Hello Minze!</div>
  `

  css = () => `
    div {
      background: ${this.isActive ? 'rgb(55 245 220)' : 'transparent'};
      color: ${this.color || 'rgb(0 0 0)'};
      border-color: ${this.color ?? 'rgb(0 0 0)'};
    }
  `
}

class MyStylingHostElement extends MinzeElement {
  html = () => `Styling host`

  css = () => `
    :host {
      background: red;
    }

    :host(:hover) {
      background: blue;
    }

    :host(:active) {
      background: green;
    }
  `
}

Minze.defineAll([MyCssElement, MyConditionalStylingElement, MyStylingHostElement])