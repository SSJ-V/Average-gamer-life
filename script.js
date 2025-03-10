const toggles = document.querySelectorAll('.toggle')
const game = document.querySelector('#game')
const study = document.querySelector('#study')
const sleep = document.querySelector('#sleep')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(theClickedOne) {
    if(game.checked && study.checked && sleep.checked) {
        if(game === theClickedOne) {
            sleep.checked = false
        }

        if(study === theClickedOne) {
            game.checked = false
        }

        if(sleep === theClickedOne) {
            study.checked = false
        }
    }
}
