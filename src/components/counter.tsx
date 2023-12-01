import { component$, useSignal, $ } from "@builder.io/qwik";

export const Counter = component$(() => {
  const counter = useSignal(0);

  const toggleTheme = $(() => {
    console.log("toggle theme");
    // 判断当前是否有 dark-theme class
    const hasDarkTheme = document.body.classList.contains("dark");
    console.log("hasDarkTheme", hasDarkTheme);
    // 如果有就移除
    if (hasDarkTheme) {
      document.body.classList.remove("dark");
      // 给 html 添加 data-theme='dark'
      document.documentElement.setAttribute("data-theme", "dark");
      // 如果没有就添加
    } else {
      document.body.classList.add("dark");
      // 给 html 添加 data-theme='light'
      document.documentElement.setAttribute("data-theme", "light");
    }
  });

  return (
    <div class=" space-x-2 flex justify-center items-center">
      <button class="btn btn-primary" onClick$={() => counter.value++}>
        {counter.value}
      </button>
      <button class="btn btn-primary" onClick$={toggleTheme}>
        toggle theme
      </button>
      <div class=" bg-blue-400 dark:bg-green-400 p-2 text-white">hi</div>
    </div>
  );
});
