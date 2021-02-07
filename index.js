const panels = document.querySelectorAll('.panels .panel')
 let currentPanel = null
document.addEventListener('DOMContentLoaded', () => {

  panels.forEach(panel =>
    panel.addEventListener('click', () => {
        if (currentPanel === null) {
        panel.classList.add('active')
        currentPanel = panel
      } else {
        currentPanel.classList.remove('active')
        panel.classList.add('active')
        currentPanel = panel
      }
    })
  )
})
