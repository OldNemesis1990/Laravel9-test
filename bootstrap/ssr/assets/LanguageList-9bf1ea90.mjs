import { a as jsx } from "../ssr.mjs";
import { forwardRef, useRef, useEffect } from "react";
function InputSuccess({ message, className = "", ...props }) {
  return message ? /* @__PURE__ */ jsx("p", { ...props, className: "text-sm text-green-600 dark:text-green-400 " + className, children: message }) : null;
}
const DateInput = forwardRef(function DateInput2({ type = "date", className = "", isFocused = false, ...props }, ref) {
  const input = ref ? ref : useRef();
  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col items-start", children: /* @__PURE__ */ jsx(
    "input",
    {
      ...props,
      type,
      className: "border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm " + className,
      ref: input
    }
  ) });
});
const SingleSelectInput = forwardRef(function SingleSelectInput2({ className = "", isFocused = false, value = "", ...props }, ref) {
  const input = ref ? ref : useRef();
  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col items-start", children: /* @__PURE__ */ jsx(
    "select",
    {
      ...props,
      className: "border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm " + className,
      value,
      children: props.children
    }
  ) });
});
const LanguageList = [
  "Zulu",
  "Xhosa",
  "Afrikaans",
  "English",
  "Sepedi",
  "Tswana",
  "Sesotho",
  "Tsonga",
  "Swati",
  "Venda",
  "Ndebele"
];
export {
  DateInput as D,
  InputSuccess as I,
  LanguageList as L,
  SingleSelectInput as S
};
