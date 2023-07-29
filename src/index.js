module.exports = function check(str, bracketsConfig) {
  const match = (x, y) => bracketsConfig.some((a) => a[0] === x && a[1] === y)
  const stack = []
  for (let i of str) {
    if (stack.length == 0) stack.push(i)
    else if (match(stack[stack.length - 1], i)) stack.pop()
    else stack.push(i)
  }
  return stack.length === 0
}
