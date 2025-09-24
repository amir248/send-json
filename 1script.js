const form=document.createElement('form');
form.classList.add('formWebWorkshop');
document.getElementById('comments').prepend(form);
const input=document.createElement('input');
input.setAttribute("name","name");
input.setAttribute("type","text");
input.setAttribute("placeholder","Login");
document.querySelector('#comments > form').append(input);
const inputSecond=document.createElement('input');
inputSecond.setAttribute("name","message");
inputSecond.setAttribute("type","text");
inputSecond.setAttribute("placeholder","messages");
document.querySelector('#comments > form').append(inputSecond);
const button=document.createElement('button');
button.textContent='send';
document.querySelector('#comments > form').append(button);

const forma = document.querySelector(".formWebWorkshop");

forma.addEventListener("submit", async (e) => {
  e.preventDefault(); // чтобы форма не перезагружала страницу

  // собираем данные
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  try {
    const response = await fetch("https://comments.qucu.ru/200", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert("Комментарий отправлен!");
      form.reset();
    } else {
      alert("Ошибка при отправке комментария");
    }
  } catch (err) {
    console.error(err);
    alert("Сетевая ошибка");
  }
});



async function loadComments() {
  try {
    const response = await fetch("https://comments.qucu.ru/200");
    if (!response.ok) throw new Error("Ошибка загрузки комментариев");

    const comments = await response.json();

    // контейнер для вывода
    const list = document.getElementById("comments-list");
    list.innerHTML = ""; // очищаем перед выводом

    comments.forEach(c => {
      const item = document.createElement("div");
      item.classList.add("comment");
      item.innerHTML = `<b>${c.name}</b>: ${c.message}`;
      list.appendChild(item);
    });
  } catch (err) {
    console.error(err);
  }
}
setInterval(loadComments,7000);
// loadComments();