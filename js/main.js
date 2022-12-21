const duck_click_sound = new Audio(`sound/duckclick.wav`); duck_click_sound.volume = 0.33
const duck_release_sound = new Audio(`sound/duckrelease.wav`); duck_release_sound.volume = 0.33

document.getElementById(`duckhitbox`).onmousedown = () => {
	console.log(`click`)
	duck_click_sound.play()
	document.getElementById(`duck`).style.transform = `scale(1, 0.75)`
}
document.getElementById(`duckhitbox`).onmouseup = () => {
	console.log(`release`)
	if (document.getElementById(`duck`).style.transform == `scale(1, 0.75)`)duck_release_sound.play()
	document.getElementById(`duck`).style.transform = `scale(1)`
}
document.getElementById(`duckhitbox`).onmouseleave = document.getElementById(`duckhitbox`).onmouseup