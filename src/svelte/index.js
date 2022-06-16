import MachineStatus from './machine-status'

const orders = JSON.parse(document.getElementById('root-data').textContent)

new MachineStatus({
  target: document.querySelector('.machine-status-widget'),
  props: {
    orders
  }
})
