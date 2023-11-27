import { sans } from "./fonts";
import "./[slug]/markdown.css";

export default function NotFound() {
  return (
    <article className="markdown">
      <h1
        className={[
          sans.className,
          "text-[40px] font-black leading-[44px] text-[--title]",
        ].join(" ")}
      >
        Opss, not found
      </h1>
      <div className="markdown mt-10">
        <p>Sorry, mate! This page doesn't exist (yet?)</p>
      </div>
    </article>
  );
}
