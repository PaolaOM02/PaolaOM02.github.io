let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #87758f;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #87758f;">Estudio ingeniería mecatrónica.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
