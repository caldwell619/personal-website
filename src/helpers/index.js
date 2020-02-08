export const copyToClipBoard = cssSelector => {
  const domEl = document.getElementById(cssSelector)
  const tempInput = document.createElement('input')
  const textToCopy = domEl.innerHTML
  tempInput.value = textToCopy
  tempInput.setAttribute('type', 'text')
  document.body.appendChild(tempInput)
  tempInput.select()
  document.execCommand('copy')
  tempInput.remove()
}