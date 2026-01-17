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
      aria-label="색 바꾸기"
      title="색 바꾸기"
      className="bg-main-500 block h-6 w-6 cursor-pointer rounded-full md:h-8 md:w-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main-700"
      onClick={changeColorScheme}
    />
  );
}
