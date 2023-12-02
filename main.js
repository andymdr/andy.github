let app = document.getElementById('typewriter');
let typewriter = new Typewriter(app,{
loop:true,
delay: 75,
});

typewriter
.pauseFor(2500)
.typeString(' “No cuentes los días, haz que los días cuenten".')
.pauseFor(200)
.deleteChars(10)
.start();