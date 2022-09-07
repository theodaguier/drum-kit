const drums = new Howl({

        "src": [
          "./drums/drums.webm",
          "./drums/drums.mp3"
        ],
        "sprite": {
          "clap": [
            0,
            665.2154195011339
          ],
          "hat": [
            2000,
            664.6485260770976
          ],
          "kick": [
            4000,
            226.32653061224505
          ],
          "oh": [
            6000,
            375.53287981859376
          ],
          "rim": [
            8000,
            65.10204081632587
          ],
          "snare": [
            10000,
            145.51020408163316
          ]
        }
})


const drumkit = document.querySelector('.drumkit');
const pad = document.querySelector('.pad , .animation');

drumkit.addEventListener('click', () => {
    if (event.target.classList.contains('pad')) {
        let soundToPlay = event.target.dataset.sound;
        drums.play(soundToPlay)
    }
})

pad.addEventListener('click', () => {
    document.getElementById('anim').classList.add('animation');
    setTimeout(function() {
        document.getElementById('anim').classList.remove('animation');
      }, 250);
})


