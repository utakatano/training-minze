import Minze, { MinzeElement } from 'minze'

class MyOptionsElement extends MinzeElement {
  options = {
    exposeAttr: {
      rendered: true
    }
  }
}

Minze.defineAll([MyOptionsElement])