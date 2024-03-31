document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addMyToDos(e.target.newTaskDescription.value);
    form.reset();
  });

  const ul = document.querySelector("#tasks");

  function addMyToDos(todo) {
    const li = document.createElement("li");
    li.textContent = `${todo}  `;
    const btn = document.createElement("button");
    btn.textContent = "X";
    li.appendChild(btn);
    ul.appendChild(li);

    btn.addEventListener("click", (e) => {
      e.target.parentNode.remove();
    });
  }
});
