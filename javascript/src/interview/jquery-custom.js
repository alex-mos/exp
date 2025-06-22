export function jQuery(str) {
  const node = document.querySelector(str)

  node.addClass = function (className) {
    node.classList.add(className)
    return node
  }

  node.removeClass = function (className) {
    node.classList.remove(className)
    return node
  }

  node.toggleClass = function (className) {
    node.classList.toggle(className)
    return node
  }

  node.css = function (styles) {
    for (let [key, value] of Object.entries(styles)) {            
      node.style[key] = value
    }
    return node
  }

  node.html = function (html) {
    node.innerHTML = html
    return node
  }

  return node
}
