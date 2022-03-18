import Minze, { MinzeElement } from 'minze'

class MyReactivePropertiesElement extends MinzeElement {
  reactive = [
    'myShorthand',
  ]

  onReady() {
    console.log(
      this.myShorthand,
    )
  }
}

Minze.defineAll([MyReactivePropertiesElement])