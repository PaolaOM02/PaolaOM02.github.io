let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #87758f;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #87758f;">"No es sobre las ideas. Sino sobre hacer que estas se vuelvan realidad.” —Scott Belsky.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
