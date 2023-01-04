import { f as now, l as loop, c as create_ssr_component, b as subscribe, e as escape, d as add_attribute, v as validate_component } from "../../chunks/index.js";
import { w as writable } from "../../chunks/index3.js";
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === "number" || is_date(current_value)) {
    const delta = target_value - current_value;
    const velocity = (current_value - last_value) / (ctx.dt || 1 / 60);
    const spring2 = ctx.opts.stiffness * delta;
    const damper = ctx.opts.damping * velocity;
    const acceleration = (spring2 - damper) * ctx.inv_mass;
    const d = (velocity + acceleration) * ctx.dt;
    if (Math.abs(d) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value;
    } else {
      ctx.settled = false;
      return is_date(current_value) ? new Date(current_value.getTime() + d) : current_value + d;
    }
  } else if (Array.isArray(current_value)) {
    return current_value.map((_, i) => tick_spring(ctx, last_value[i], current_value[i], target_value[i]));
  } else if (typeof current_value === "object") {
    const next_value = {};
    for (const k in current_value) {
      next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
    }
    return next_value;
  } else {
    throw new Error(`Cannot spring ${typeof current_value} values`);
  }
}
function spring(value, opts = {}) {
  const store = writable(value);
  const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = opts;
  let last_time;
  let task;
  let current_token;
  let last_value = value;
  let target_value = value;
  let inv_mass = 1;
  let inv_mass_recovery_rate = 0;
  let cancel_task = false;
  function set(new_value, opts2 = {}) {
    target_value = new_value;
    const token = current_token = {};
    if (value == null || opts2.hard || spring2.stiffness >= 1 && spring2.damping >= 1) {
      cancel_task = true;
      last_time = now();
      last_value = new_value;
      store.set(value = target_value);
      return Promise.resolve();
    } else if (opts2.soft) {
      const rate = opts2.soft === true ? 0.5 : +opts2.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0;
    }
    if (!task) {
      last_time = now();
      cancel_task = false;
      task = loop((now2) => {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }
        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        const ctx = {
          inv_mass,
          opts: spring2,
          settled: true,
          dt: (now2 - last_time) * 60 / 1e3
        };
        const next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now2;
        last_value = value;
        store.set(value = next_value);
        if (ctx.settled) {
          task = null;
        }
        return !ctx.settled;
      });
    }
    return new Promise((fulfil) => {
      task.promise.then(() => {
        if (token === current_token)
          fulfil();
      });
    });
  }
  const spring2 = {
    set,
    update: (fn, opts2) => set(fn(target_value, value), opts2),
    subscribe: store.subscribe,
    stiffness,
    damping,
    precision
  };
  return spring2;
}
const Counter_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".counter.svelte-y96mxt.svelte-y96mxt{display:flex;border-top:1px solid rgba(0, 0, 0, 0.1);border-bottom:1px solid rgba(0, 0, 0, 0.1);margin:1rem 0}.counter.svelte-y96mxt button.svelte-y96mxt{width:2em;padding:0;display:flex;align-items:center;justify-content:center;border:0;background-color:transparent;touch-action:manipulation;font-size:2rem}.counter.svelte-y96mxt button.svelte-y96mxt:hover{background-color:var(--color-bg-1)}svg.svelte-y96mxt.svelte-y96mxt{width:25%;height:25%}path.svelte-y96mxt.svelte-y96mxt{vector-effect:non-scaling-stroke;stroke-width:2px;stroke:#444}.counter-viewport.svelte-y96mxt.svelte-y96mxt{width:8em;height:4em;overflow:hidden;text-align:center;position:relative}.counter-viewport.svelte-y96mxt strong.svelte-y96mxt{position:absolute;display:flex;width:100%;height:100%;font-weight:400;color:var(--color-theme-1);font-size:4rem;align-items:center;justify-content:center}.counter-digits.svelte-y96mxt.svelte-y96mxt{position:absolute;width:100%;height:100%}.hidden.svelte-y96mxt.svelte-y96mxt{top:-100%;user-select:none}",
  map: null
};
function modulo(n, m) {
  return (n % m + m) % m;
}
const Counter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let offset;
  let $displayed_count, $$unsubscribe_displayed_count;
  let count = 0;
  const displayed_count = spring();
  $$unsubscribe_displayed_count = subscribe(displayed_count, (value) => $displayed_count = value);
  $$result.css.add(css$1);
  {
    displayed_count.set(count);
  }
  offset = modulo($displayed_count, 1);
  $$unsubscribe_displayed_count();
  return `<div class="${"counter svelte-y96mxt"}"><button aria-label="${"Decrease the counter by one"}" class="${"svelte-y96mxt"}"><svg aria-hidden="${"true"}" viewBox="${"0 0 1 1"}" class="${"svelte-y96mxt"}"><path d="${"M0,0.5 L1,0.5"}" class="${"svelte-y96mxt"}"></path></svg></button>

	<div class="${"counter-viewport svelte-y96mxt"}"><div class="${"counter-digits svelte-y96mxt"}" style="${"transform: translate(0, " + escape(100 * offset, true) + "%)"}"><strong class="${"hidden svelte-y96mxt"}" aria-hidden="${"true"}">${escape(Math.floor($displayed_count + 1))}</strong>
			<strong class="${"svelte-y96mxt"}">${escape(Math.floor($displayed_count))}</strong></div></div>

	<button aria-label="${"Increase the counter by one"}" class="${"svelte-y96mxt"}"><svg aria-hidden="${"true"}" viewBox="${"0 0 1 1"}" class="${"svelte-y96mxt"}"><path d="${"M0,0.5 L1,0.5 M0.5,0 L0.5,1"}" class="${"svelte-y96mxt"}"></path></svg></button>
</div>`;
});
const welcome = "/_app/immutable/assets/svelte-welcome-c18bcf5a.webp";
const welcome_fallback = "/_app/immutable/assets/svelte-welcome-6c300099.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-19xx0bt.svelte-19xx0bt{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:0.6}h1.svelte-19xx0bt.svelte-19xx0bt{width:100%}.welcome.svelte-19xx0bt.svelte-19xx0bt{display:block;position:relative;width:100%;height:0;padding:0 0 calc(100% * 495 / 2048) 0}.welcome.svelte-19xx0bt img.svelte-19xx0bt{position:absolute;width:100%;height:100%;top:0;display:block}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-t32ptj_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="${"description"}" content="${"Svelte demo app"}"><!-- HEAD_svelte-t32ptj_END -->`, ""}

<section class="${"svelte-19xx0bt"}"><h1 class="${"svelte-19xx0bt"}"><span class="${"welcome svelte-19xx0bt"}"><picture><source${add_attribute("srcset", welcome, 0)} type="${"image/webp"}">
				<img${add_attribute("src", welcome_fallback, 0)} alt="${"Welcome"}" class="${"svelte-19xx0bt"}"></picture></span>

		to your new<br>SvelteKit app
	</h1>

	<h2>try editing <strong>src/routes/+page.svelte</strong></h2>

	${validate_component(Counter, "Counter").$$render($$result, {}, {}, {})}
</section>`;
});
export {
  Page as default
};
