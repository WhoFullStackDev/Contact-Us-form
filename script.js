document.querySelector("form").addEventListener("submit", (e) => {
  const firstName = document.querySelector("#first_name").value;
  const lastName = document.querySelector("#last_name").value;
  const email = document.querySelector("#email").value;
  const checkedQuery = document.querySelector('input[name="query"]:checked');
  const message = document.querySelector("#message").value;
  const agree = document.querySelector("input[type='checkbox']:checked");
  e.preventDefault();

  if (!firstName) {
    document.getElementsByTagName("p")[0].style.visibility = "visible";
    return;
  } else document.getElementsByTagName("p")[0].style.visibility = "hidden";
  if (!lastName) {
    document.getElementsByTagName("p")[1].style.visibility = "visible";
    return;
  } else document.getElementsByTagName("p")[1].style.visibility = "hidden";
  if (!email) {
    document.getElementsByTagName("p")[2].style.visibility = "visible";
    return;
  } else document.getElementsByTagName("p")[2].style.visibility = "hidden";
  if (!checkedQuery) {
    document.getElementsByTagName("p")[3].style.visibility = "visible";
    return;
  } else document.getElementsByTagName("p")[3].style.visibility = "hidden";
  if (!message) {
    document.getElementsByTagName("p")[4].style.visibility = "visible";
    return;
  } else document.getElementsByTagName("p")[4].style.visibility = "hidden";
  if (!agree) {
    document.getElementsByTagName("p")[5].style.visibility = "visible";
    return;
  } else document.getElementsByTagName("p")[5].style.visibility = "hidden";

  if (firstName && lastName && email && checkedQuery && message && agree) {
    alert("submitted");
  }
});
