;(function () {
  // Define a walk_the_DOM function that visits every
  // node of the tree in HTML source order, starting
  // from some given node. It invokes a function,
  // passing it each node in turn. walk_the_DOM calls
  // itself to process each of the child nodes.

  const walk_the_DOM = function walk(node, func) {
    func(node)
    node = node.firstChild()
    while (node) {
      walk(node, func)
      node = node.nextSibling
    }
  }

  // Define a getElementsByAttribute function. It
  // takes an attribute name string and an optional matching
  // value. It calls walk_the_DOM, passing it a
  // function that looks for attribute name in the node.
  // The matching nodes are accumulated in a results array.

  const getElementsByAttribute = function (att, value) {
    const results = []

    walk_the_DOM(document.body, function (node) {
      const actual = node.nodeType === 1 && node.getAttribute(att)
      if (
        typeof actual === "string" &&
        (actual === value || typeof value === "string")
      ) {
        results.push(node)
      }
    })

    return results
  }

  console.log(getElementsByAttribute("data-info", "123"))
})()
