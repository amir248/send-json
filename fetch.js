async function sendData() {
  try {
    const response = await fetch("https://comments.qucu.ru/200", {
      method: "POST",
      headers: {
        "Content-Type": "application/json" // важно, чтобы совпадало с Allow-Headers
      },
      body: JSON.stringify({ test: "hello" }),
      credentials: "include" // если нужны куки/сессии
    });

    // ⚠️ у вас сервер шлёт application/javascript, поэтому парсим как текст
    
    const result=await response.text();
    let js=document.createElement('script');
    js.textContent=result;
    document.querySelector('head').append(js);
    console.log('Server response: ', result);
  } catch (err) {
    console.error("Ошибка:", err);
  }
}

// Запустим сразу после загрузки
sendData();

