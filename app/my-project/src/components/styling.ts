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

class MyStylingHostContextElement extends MinzeElement {
  html = () => `<div>Hello Minze!</div>`

  css = () => `
    :host-context(.light) {
      background: white;
      color: black;
    }

    :host-context(.dark) {
      background: black;
      color: white;
    }
  `
}

class MySlotsElement extends MinzeElement {
  html = () => `
    <slot name="slot-1"></slot>
    <slot name="slot-2"></slot>
  `

  css = () => `
    ::slotted(*) {
      background: red;
    }

    ::slotted([slot=slot-2]) {
      background: blue;
    }
  `
}

class MyPartElement extends MinzeElement {
  html = () => `
    <div part="my-part">Hello Minze!</div>
  `
}

class MyVariablesElement extends MinzeElement {
  html = () => `<div>variables</div>`

  css = () => `
    :host {
      background: var(--my-color, red);
    }
  `
}

Minze.defineAll([MyCssElement, MyConditionalStylingElement, MyStylingHostElement, MyStylingHostContextElement, MySlotsElement, MyPartElement, MyVariablesElement])