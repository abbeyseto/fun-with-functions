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

document.getElementById("app").innerHTML = `
<h1>Fun with Functions!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
<div> Result of ADD is ${add(2,3)}</div>
<div> Result of SUB is ${sub(2,3)}</div>
<div> Result of MUL is ${mul(2,3)}</div>
`;
