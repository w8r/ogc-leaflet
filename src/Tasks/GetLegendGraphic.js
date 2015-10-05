import Task from './Task'

export default class GetLegendGraphic extends Task {
  constructor (endpoint) {
    super(endpoint);
  }
}

export function getLegendGraphic(endpoint) {
  return new GetLegendGraphic(endpoint);
}
