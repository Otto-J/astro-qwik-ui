import { component$ } from "@builder.io/qwik";

const menu = [
  { title: "Home", url: "/" },
  { title: "Blogs", url: "/blogs" },
  { title: "About", url: "/about" },
];

export const Menu = component$(() => {
  return (
    <div class="container layout-posts flex flex-col space-y-2">
      {/* map menu for a link */}
      {menu.map((i) => {
        return <a href={i.url}>{i.title}</a>;
      })}
    </div>
  );
});
