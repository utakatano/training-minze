import Minze, { MinzeElement } from 'minze'

class MySelectorsElement extends MinzeElement {
  html = () => `
    <div id="my-div"></div>
    <div></div>
  `

  onReady() {
    const element = this.select('#my-div')
    const elements = this.selectAll('div')
    console.log(element, elements)
  }
}

Minze.defineAll([MySelectorsElement])