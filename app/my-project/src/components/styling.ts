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

Minze.defineAll([MyCssElement])