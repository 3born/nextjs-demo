(() => {
    const loadScript = (src) => { const el = document.createElement('SCRIPT'); el.setAttribute('src', src); document.head.appendChild(el) }
    // const loadStyles = (href) => { const el = document.createElement('LINK'); el.setAttribute('rel', 'stylesheet'); el.setAttribute('href', href); document.head.appendChild(el) }

    // const publisherId = '10121724' // demo
    const publisherId = '10165910' // roy
    const resourceRoot = 'https://source.advisible.com/' + publisherId

    window.adk = window.adk || { cmd: [] }
    window.advisible = { publisherId, resourceRoot }

    loadScript('https://cdn.advisible.com/adk-1.18.1.js')
    loadScript('/setup.js?v=1')
    // loadScript(resourceRoot + '/setup.js?v=1')
    // loadStyles(resourceRoot + '/style.css?v=1')

})()