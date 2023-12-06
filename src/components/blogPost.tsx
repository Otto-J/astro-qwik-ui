import { component$ } from "@builder.io/qwik";

interface Props {
  title: string;
  url: string;
  // content: string;
}

export const BlogPost = component$((props: Props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.url}</p>
    </div>
  );
});
