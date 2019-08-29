import "./styles.css";

function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function mul(x, y) {
  return x * y;
}

function identityf(numb) {
  return function () {
    return numb;
  }
}

function addf(x) {
  return function (y) {
    return x+=y;
  }
} 
function liftf(x) {
  return function(y) {
    return function (z) {
      return x(y, z);
    }
  } 
}
var three = identityf(3);
// var addfunc = liftf(add);

document.getElementById("app").innerHTML = `
<h1>Fun with Functions!</h1>
<div>
  I use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
<div class="sections"> Result of <pre>${add}</pre> with x=3 and y=4 is ${add(3,4)}</div><br>
<div class="sections"> Result of <pre>${sub}</pre> with x=3 and y=4 is ${sub(3,4)}</div><br>
<div class="sections"> Result of <pre>${mul}</pre> with x=3 and y=4 is ${mul(3,4)}</div><br>
<div class="sections"> Result of <pre>${identityf}</pre> with x=3 and y=4 is ${three()}</div><br>
<div class="sections"> Result of <pre>${addf}</pre> with x=3 and y=4 is ${addf(3)(4)}</div><br>
<div class="sections"> Result of <pre>${liftf}</pre> with x=mul(), y=3 and y=4 is ${liftf(mul)(3)(4)}</div><br>
`;
