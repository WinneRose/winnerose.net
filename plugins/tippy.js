import { defineNuxtPlugin } from "#app";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("tippy", tippy);
});
