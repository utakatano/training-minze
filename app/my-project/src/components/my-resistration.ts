import { MinzeElement } from 'minze'

// class MyRegistration extends MinzeElement {
//   html = () => `<div>My registration component</div>`
// }

(class MyCustomRegistration extends MinzeElement {
  html = () => `<div>My custom registration component</div>`
}).define()

