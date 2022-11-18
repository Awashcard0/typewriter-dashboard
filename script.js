var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true
});

typewriter.typeString('Hello')
  .pauseFor(2500)
  .deleteAll()
  .typeString('The time is ti:me')
  .pauseFor(2500)
  .deleteChars(13)
  .typeString("date is DD/MM/YYYY")
  //.typeString('<strong></strong>')
  .pauseFor(2500)
  .start();
