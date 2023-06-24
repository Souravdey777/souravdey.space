import React from "react";

function CodePenEmbed({ slugHash }: { slugHash: string }) {
  return (
    <>
      <p
        className="codepen"
        data-height="300"
        data-theme-id="dark"
        data-default-tab="result"
        data-slug-hash={slugHash}
        data-user="souravdey777"
        style={{ display: "flex", border: "2px solid" }}
      >
        <span>
          See the Pen{" "}
          <a href={`https://codepen.io/souravdey777/pen/${slugHash}`}>
            https://codepen.io/souravdey777/pen/{slugHash}
          </a>{" "}
          by Sourav Dey (
          <a href="https://codepen.io/souravdey777">@souravdey777</a>) on{" "}
          <a href="https://codepen.io">CodePen</a>.
        </span>
      </p>
      <script
        async
        src="https://cpwebassets.codepen.io/assets/embed/ei.js"
      ></script>
    </>
  );
}

export default CodePenEmbed;
