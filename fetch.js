async function loadAssets() {
  try {
    // Загружаем JS
    const jsResponse = await fetch("https://comments.qucu.ru/js");
    const jsText = await jsResponse.text();
    const js = document.createElement("script");
    js.type = "text/javascript";
    js.textContent = jsText;
    document.head.append(js);

    // Загружаем CSS
    const cssResponse = await fetch("https://comments.qucu.ru/style");
    const cssText = await cssResponse.text();
    const style = document.createElement("style");
    style.textContent = cssText;
    document.head.append(style);

    console.log("JS и CSS успешно подгружены!");
  } catch (err) {
    console.error("Ошибка загрузки:", err);
  }
}
loadAssets();