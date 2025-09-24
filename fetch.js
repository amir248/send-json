async function sendData() {
  try {
    const response = await fetch("https://comments.qucu.ru/200", {
      method: "GET",
    //   headers: {
    //     "Content-Type": "application/json" // важно, чтобы совпадало с Allow-Headers
    //   },
    //   body: JSON.stringify({ test: "hello" }),
      credentials: "include" // если нужны куки/сессии
    });
    // Загружаем CSS
    const cssResponse = await fetch("https://comments.qucu.ru/style.css");
    const cssText = await cssResponse.text();
    const style = document.createElement("style");
    style.textContent = cssText;
    document.head.append(style);
    // ⚠️ если сервер шлёт application/javascript, парсим как текст
    const result=await response.text();
    let js=document.createElement('script');
    js.type = "text/javascript";
    js.textContent=result;
    document.querySelector('head').append(js);
    console.log('Server response: ', result);
  } catch (err) {
    console.error("Ошибка:", err);
  }
}

// Запустим сразу после загрузки
sendData();

