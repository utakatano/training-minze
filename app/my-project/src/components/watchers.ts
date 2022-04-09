import Minze, { MinzeElement } from 'minze'

class MyWatchersElement extends MinzeElement {
  reactive = [['count', 0]]

  watchCount = (newValue: number, oldValue: number, key: number, target: this) => {
    console.log(newValue, oldValue, key, target)
  }

  watch = [['count', this.watchCount]]

  onReady() {
    this.count = 1
  }
}

Minze.defineAll([MyWatchersElement])