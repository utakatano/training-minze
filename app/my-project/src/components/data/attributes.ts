import Minze, { MinzeElement } from 'minze'

class MyAttrElement extends MinzeElement {
  attrs = [
    'my-attribute',
    ['my-second-attribute'],
    ['my-third-attribute', 'Hello Minze again!']
  ]

  onReady() {
    console.log(
      this.myAttribute,
      this.mySecondAttribute,
      this.myThirdAttribute
    )
  }
}

Minze.defineAll([MyAttrElement])