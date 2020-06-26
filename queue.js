function Queue() {
  this.elements = [];
}

Queue.prototype.enqueue = function(e) {
  this.elements.push(e);
}

Queue.prototype.dequeue = function(e) {
  return this.elements.shift(e);
}

Queue.prototype.isEmpty = function() {
  return this.elements.length == 0;
}

Queue.prototype.peek = function() {
  return !this.isEmpty() ? this.elements[0] : undefined;
}

Queue.prototype.length = function() {
  return this.elements.length;
}
