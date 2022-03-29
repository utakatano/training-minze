import Minze, { MinzeElement } from 'minze'

class MyTemplateElement extends MinzeElement {
  html = () => `
    <slot></slot>
    <slot name="my-slot"></slot>
  `
}

class MyConditionalElement extends MinzeElement {
  isVisible = true

  whenVisible = () => {
    if (this.isVisible) return `<div>Hello Minze!</div>`
    else return ''
  }

  html = () => `
    ${this.isVisible ? '<div>Hello Minze!</div>': ''}
    ${this.whenVisible()}
  `
}

class MyConditionalAttribute extends MinzeElement {
  isActive = true

  html = () => `
    <div ${this.isActive ? 'class="active"' : ''}>
      Hello Conditional Attribute
    </div>
  `
}

class MyListRendering extends MinzeElement {
  myList = [1, 2, 3]

  html = () => `
    <ul>
      ${this.myList.map((item) => `<li>${item}</li>`).join('')}
    </ul>
  `
}

class MyDestructureElement extends MinzeElement {
  someValue = 'Hello Destruction!'

  html = ({ someValue } = this) => `
    <div>${someValue}</div>
  `
}

class MyLoadingElement extends MinzeElement {
  reactive = [['data', null]]

  html = () => `
    ${this.data ? `<div>${this.data}</div>` : '<div class="loading"></div>'}
  `

  css = () => `
    .loading {
      width: 1rem;
      height: 1rem;
      background: rgb(55 245 220);
      animation: loading 1s infinite;
    }

    @keyframes loading {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `

  async onReactive() {
    const delay = 2000
    await new Promise((resolve) => setTimeout(resolve, delay))

    this.data = 'Hello loading component!'
    console.log(`simulated response time: ${delay}`)
  }
}

class MyPatchingElement extends MinzeElement {
  reactive = [[
    'active', false
  ]]

  html = () => `
    <button>
      Toggle state
    </button>

    <div>
      <div>${this.active}</div>
    </div>

    <div>
      <div>${this.active ? 'true' : 'false'}</div>
    </div>

    <div>
      <div>${this.active ? '<div>true</div>' : '<div>false</div>'}</div>
    </div>

    <div>
      <div>${this.active ? '<div>true</div>' : 'false'}</div>
    </div>
  `
}

Minze.defineAll([MyTemplateElement, MyConditionalElement, MyConditionalAttribute, MyListRendering, MyDestructureElement, MyLoadingElement])