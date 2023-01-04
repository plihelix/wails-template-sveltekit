import { c as create_ssr_component, b as subscribe, h as each, e as escape, d as add_attribute, i as null_to_empty } from "../../../chunks/index.js";
import "../../../chunks/uneval.js";
import { r as readable } from "../../../chunks/index3.js";
const get_initial_motion_preference = () => {
  return false;
};
const reduced_motion = readable(get_initial_motion_preference(), (set) => {
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "form.svelte-1pg2j5l.svelte-1pg2j5l{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1rem;flex:1}.how-to-play.svelte-1pg2j5l.svelte-1pg2j5l{color:var(--color-text)}.how-to-play.svelte-1pg2j5l.svelte-1pg2j5l::before{content:'i';display:inline-block;font-size:0.8em;font-weight:900;width:1em;height:1em;padding:0.2em;line-height:1;border:1.5px solid var(--color-text);border-radius:50%;text-align:center;margin:0 0.5em 0 0;position:relative;top:-0.05em}.grid.svelte-1pg2j5l.svelte-1pg2j5l{--width:min(100vw, 40vh, 380px);max-width:var(--width);align-self:center;justify-self:center;width:100%;height:100%;display:flex;flex-direction:column;justify-content:flex-start}.grid.svelte-1pg2j5l .row.svelte-1pg2j5l{display:grid;grid-template-columns:repeat(5, 1fr);grid-gap:0.2rem;margin:0 0 0.2rem 0}@media(prefers-reduced-motion: no-preference){.grid.bad-guess.svelte-1pg2j5l .row.current.svelte-1pg2j5l{animation:svelte-1pg2j5l-wiggle 0.5s}}.grid.playing.svelte-1pg2j5l .row.current.svelte-1pg2j5l{filter:drop-shadow(3px 3px 10px var(--color-bg-0))}.letter.svelte-1pg2j5l.svelte-1pg2j5l{aspect-ratio:1;width:100%;display:flex;align-items:center;justify-content:center;text-align:center;box-sizing:border-box;text-transform:lowercase;border:none;font-size:calc(0.08 * var(--width));border-radius:2px;background:white;margin:0;color:rgba(0, 0, 0, 0.7)}.letter.missing.svelte-1pg2j5l.svelte-1pg2j5l{background:rgba(255, 255, 255, 0.5);color:rgba(0, 0, 0, 0.5)}.letter.exact.svelte-1pg2j5l.svelte-1pg2j5l{background:var(--color-theme-2);color:white}.letter.close.svelte-1pg2j5l.svelte-1pg2j5l{border:2px solid var(--color-theme-2)}.selected.svelte-1pg2j5l.svelte-1pg2j5l{outline:2px solid var(--color-theme-1)}.controls.svelte-1pg2j5l.svelte-1pg2j5l{text-align:center;justify-content:center;height:min(18vh, 10rem)}.keyboard.svelte-1pg2j5l.svelte-1pg2j5l{--gap:0.2rem;position:relative;display:flex;flex-direction:column;gap:var(--gap);height:100%}.keyboard.svelte-1pg2j5l .row.svelte-1pg2j5l{display:flex;justify-content:center;gap:0.2rem;flex:1}.keyboard.svelte-1pg2j5l button.svelte-1pg2j5l,.keyboard.svelte-1pg2j5l button.svelte-1pg2j5l:disabled{--size:min(8vw, 4vh, 40px);background-color:white;color:black;width:var(--size);border:none;border-radius:2px;font-size:calc(var(--size) * 0.5);margin:0}.keyboard.svelte-1pg2j5l button.exact.svelte-1pg2j5l{background:var(--color-theme-2);color:white}.keyboard.svelte-1pg2j5l button.missing.svelte-1pg2j5l{opacity:0.5}.keyboard.svelte-1pg2j5l button.close.svelte-1pg2j5l{border:2px solid var(--color-theme-2)}.keyboard.svelte-1pg2j5l button.svelte-1pg2j5l:focus{background:var(--color-theme-1);color:white;outline:none}.keyboard.svelte-1pg2j5l button[data-key='enter'].svelte-1pg2j5l,.keyboard.svelte-1pg2j5l button[data-key='backspace'].svelte-1pg2j5l{position:absolute;bottom:0;width:calc(1.5 * var(--size));height:calc(1 / 3 * (100% - 2 * var(--gap)));text-transform:uppercase;font-size:calc(0.3 * var(--size));padding-top:calc(0.15 * var(--size))}.keyboard.svelte-1pg2j5l button[data-key='enter'].svelte-1pg2j5l{right:calc(50% + 3.5 * var(--size) + 0.8rem)}.keyboard.svelte-1pg2j5l button[data-key='backspace'].svelte-1pg2j5l{left:calc(50% + 3.5 * var(--size) + 0.8rem)}.keyboard.svelte-1pg2j5l button[data-key='enter'].svelte-1pg2j5l:disabled{opacity:0.5}.restart.svelte-1pg2j5l.svelte-1pg2j5l{width:100%;padding:1rem;background:rgba(255, 255, 255, 0.5);border-radius:2px;border:none}.restart.svelte-1pg2j5l.svelte-1pg2j5l:focus,.restart.svelte-1pg2j5l.svelte-1pg2j5l:hover{background:var(--color-theme-1);color:white;outline:none}@keyframes svelte-1pg2j5l-wiggle{0%{transform:translateX(0)}10%{transform:translateX(-2px)}30%{transform:translateX(4px)}50%{transform:translateX(-6px)}70%{transform:translateX(+4px)}90%{transform:translateX(-2px)}100%{transform:translateX(0)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let won;
  let i;
  let submittable;
  let $$unsubscribe_reduced_motion;
  $$unsubscribe_reduced_motion = subscribe(reduced_motion, (value) => value);
  let { data } = $$props;
  let { form } = $$props;
  let classnames;
  let description;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  won = data.answers.at(-1) === "xxxxx";
  i = won ? -1 : data.answers.length;
  {
    {
      classnames = {};
      description = {};
      data.answers.forEach((answer, i2) => {
        const guess = data.guesses[i2];
        for (let i3 = 0; i3 < 5; i3 += 1) {
          const letter = guess[i3];
          if (answer[i3] === "x") {
            classnames[letter] = "exact";
            description[letter] = "correct";
          } else if (!classnames[letter]) {
            classnames[letter] = answer[i3] === "c" ? "close" : "missing";
            description[letter] = answer[i3] === "c" ? "present" : "absent";
          }
        }
      });
    }
  }
  submittable = data.guesses[i]?.length === 5;
  $$unsubscribe_reduced_motion();
  return `

${$$result.head += `<!-- HEAD_svelte-18lvto8_START -->${$$result.title = `<title>Sverdle</title>`, ""}<meta name="${"description"}" content="${"A Wordle clone written in SvelteKit"}"><!-- HEAD_svelte-18lvto8_END -->`, ""}

<h1 class="${"visually-hidden"}">Sverdle</h1>

<form method="${"POST"}" action="${"?/enter"}" class="${"svelte-1pg2j5l"}"><a class="${"how-to-play svelte-1pg2j5l"}" href="${"/sverdle/how-to-play"}">How to play</a>

	<div class="${[
    "grid svelte-1pg2j5l",
    (!won ? "playing" : "") + " " + (form?.badGuess ? "bad-guess" : "")
  ].join(" ").trim()}">${each(Array(6), (_, row) => {
    let current = row === i;
    return `
			<h2 class="${"visually-hidden"}">Row ${escape(row + 1)}</h2>
			<div class="${["row svelte-1pg2j5l", current ? "current" : ""].join(" ").trim()}">${each(Array(5), (_2, column) => {
      let answer = data.answers[row]?.[column], value = data.guesses[row]?.[column] ?? "", selected = current && column === data.guesses[row].length, exact = answer === "x", close = answer === "c", missing = answer === "_";
      return `
					
					
					
					
					
					<div class="${[
        "letter svelte-1pg2j5l",
        (exact ? "exact" : "") + " " + (close ? "close" : "") + " " + (missing ? "missing" : "") + " " + (selected ? "selected" : "")
      ].join(" ").trim()}">${escape(value)}
						<span class="${"visually-hidden"}">${exact ? `(correct)` : `${close ? `(present)` : `${missing ? `(absent)` : `empty`}`}`}</span>
						<input name="${"guess"}" ${!current ? "disabled" : ""} type="${"hidden"}"${add_attribute("value", value, 0)}>
					</div>`;
    })}
			</div>`;
  })}</div>

	<div class="${"controls svelte-1pg2j5l"}">${won || data.answers.length >= 6 ? `${!won && data.answer ? `<p>the answer was &quot;${escape(data.answer)}&quot;</p>` : ``}
			<button data-key="${"enter"}" class="${"restart selected svelte-1pg2j5l"}" formaction="${"?/restart"}">${escape(won ? "you won :)" : `game over :(`)} play again?
			</button>` : `<div class="${"keyboard svelte-1pg2j5l"}"><button data-key="${"enter"}" ${!submittable ? "disabled" : ""} class="${["svelte-1pg2j5l", submittable ? "selected" : ""].join(" ").trim()}">enter</button>

				<button data-key="${"backspace"}" formaction="${"?/update"}" name="${"key"}" value="${"backspace"}" class="${"svelte-1pg2j5l"}">back
				</button>

				${each(["qwertyuiop", "asdfghjkl", "zxcvbnm"], (row) => {
    return `<div class="${"row svelte-1pg2j5l"}">${each(row, (letter) => {
      return `<button${add_attribute("data-key", letter, 0)} class="${escape(null_to_empty(classnames[letter]), true) + " svelte-1pg2j5l"}" ${data.guesses[i].length === 5 ? "disabled" : ""} formaction="${"?/update"}" name="${"key"}"${add_attribute("value", letter, 0)} aria-label="${escape(letter, true) + " " + escape(description[letter] || "", true)}">${escape(letter)}
							</button>`;
    })}
					</div>`;
  })}</div>`}</div></form>

${won ? `<div style="${"position: absolute; left: 50%; top: 30%"}"></div>` : ``}`;
});
export {
  Page as default
};
