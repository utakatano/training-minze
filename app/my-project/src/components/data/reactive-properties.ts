import Minze, { MinzeElement } from 'minze'

class MyReactivePropertiesElement extends MinzeElement {
  reactive = [
    'myShorthand',
    ['myProperty', 'Hello Minze!'],
    ['myNumber', 99]
  ]

  onReady() {
    console.log(
      this.myShorthand,
      this.myProperty,
      this.myNumber
    )
  }
}

Minze.defineAll([MyReactivePropertiesElement])