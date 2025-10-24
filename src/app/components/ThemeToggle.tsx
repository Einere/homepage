"use client";

export default function ThemeToggle() {
  function changeColorScheme() {
    const $html = document.getElementsByTagName("html").item(0);

    if ($html) {
      $html.dataset.theme = $html.dataset.theme === "pink" ? "blue" : "pink";
    }
  }

  return (
    <button
      title="색 바꾸기"
      className="bg-main-500 block h-6 w-6 cursor-pointer rounded-full md:h-8 md:w-8"
      onClick={changeColorScheme}
    />
  );
}
