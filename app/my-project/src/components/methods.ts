import Minze, { MinzeElement } from 'minze'

class MyMethodElement extends MinzeElement {
  myMethod() {
    console.log('Hello Minze! this is method')
  }

  onReady() {
    this.myMethod()
  }
}

Minze.defineAll([MyMethodElement])