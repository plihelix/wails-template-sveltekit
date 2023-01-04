import { c as create_ssr_component } from "../../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "span.svelte-1x5nq1n.svelte-1x5nq1n{display:inline-flex;justify-content:center;align-items:center;font-size:0.8em;width:2.4em;height:2.4em;background-color:white;box-sizing:border-box;border-radius:2px;border-width:2px;color:rgba(0, 0, 0, 0.7)}.missing.svelte-1x5nq1n.svelte-1x5nq1n{background:rgba(255, 255, 255, 0.5);color:rgba(0, 0, 0, 0.5)}.close.svelte-1x5nq1n.svelte-1x5nq1n{border-style:solid;border-color:var(--color-theme-2)}.exact.svelte-1x5nq1n.svelte-1x5nq1n{background:var(--color-theme-2);color:white}.example.svelte-1x5nq1n.svelte-1x5nq1n{display:flex;justify-content:flex-start;margin:1rem 0;gap:0.2rem}.example.svelte-1x5nq1n span.svelte-1x5nq1n{font-size:1.4rem}p.svelte-1x5nq1n span.svelte-1x5nq1n{position:relative;border-width:1px;border-radius:1px;font-size:0.4em;transform:scale(2) translate(0, -10%);margin:0 1em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1fqqyy5_START -->${$$result.title = `<title>How to play Sverdle</title>`, ""}<meta name="${"description"}" content="${"How to play Sverdle"}"><!-- HEAD_svelte-1fqqyy5_END -->`, ""}

<div class="${"text-column"}"><h1>How to play Sverdle</h1>

	<p>Sverdle is a clone of <a href="${"https://www.nytimes.com/games/wordle/index.html"}">Wordle</a>, the
		word guessing game. To play, enter a five-letter English word. For example:
	</p>

	<div class="${"example svelte-1x5nq1n"}"><span class="${"close svelte-1x5nq1n"}">r</span>
		<span class="${"missing svelte-1x5nq1n"}">i</span>
		<span class="${"close svelte-1x5nq1n"}">t</span>
		<span class="${"missing svelte-1x5nq1n"}">z</span>
		<span class="${"exact svelte-1x5nq1n"}">y</span></div>

	<p class="${"svelte-1x5nq1n"}">The <span class="${"exact svelte-1x5nq1n"}">y</span> is in the right place. <span class="${"close svelte-1x5nq1n"}">r</span> and
		<span class="${"close svelte-1x5nq1n"}">t</span>
		are the right letters, but in the wrong place. The other letters are wrong, and can be discarded.
		Let&#39;s make another guess:
	</p>

	<div class="${"example svelte-1x5nq1n"}"><span class="${"exact svelte-1x5nq1n"}">p</span>
		<span class="${"exact svelte-1x5nq1n"}">a</span>
		<span class="${"exact svelte-1x5nq1n"}">r</span>
		<span class="${"exact svelte-1x5nq1n"}">t</span>
		<span class="${"exact svelte-1x5nq1n"}">y</span></div>

	<p>This time we guessed right! You have <strong>six</strong> guesses to get the word.</p>

	<p>Unlike the original Wordle, Sverdle runs on the server instead of in the browser, making it
		impossible to cheat. It uses <code>&lt;form&gt;</code> and cookies to submit data, meaning you can
		even play with JavaScript disabled!
	</p>
</div>`;
});
export {
  Page as default
};
