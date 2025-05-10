let con = document.querySelector("#container");
let love = document.querySelector(".showLove");

con.addEventListener("dblclick", function () {
  love.style.transform = 'translate(-50%, -50%) scale(1)';
   love.style.opacity = 0.8;
   love.style.color = 'red';
  setTimeout(() => {
    love.style.opacity = 0;
  }, 1000)
  setTimeout(() => {
    love.style.transform = 'translate(-50%, -50%) scale(0)';
  }, 2000)
});
