import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const component = `
    <div class="card" style="width: 18rem;">
  <img src="https://placehold.co/600x400.png"  class="card-img-top" alt=""/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</img>
`;

for (let i = 0; i < 10; i++) {
  document.getElementById("card-holder").innerHTML += component;
}
