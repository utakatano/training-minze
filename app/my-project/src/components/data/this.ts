import Minze, { MinzeElement } from 'minze'

const myProperty = 'Constant'

class MyDataThisElement extends MinzeElement {
  myProperty = 'Component Property'

  onReady() {
    console.log(
      myProperty,
      this.myProperty
    )
  }
}

Minze.defineAll([MyDataThisElement])