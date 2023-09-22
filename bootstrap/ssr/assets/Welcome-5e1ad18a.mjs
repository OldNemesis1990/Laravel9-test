import { j as jsxs, F as Fragment, a as jsx } from "../ssr.mjs";
import { Head, Link } from "@inertiajs/react";
import { A as ApplicationLogo } from "./ApplicationLogo-93a74a17.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
function Welcome(props) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Welcome" }),
    /* @__PURE__ */ jsxs("div", { className: "relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white", children: [
      /* @__PURE__ */ jsx("div", { className: "sm:fixed sm:top-0 sm:right-0 p-6 text-right", children: props.auth.user ? /* @__PURE__ */ jsx(
        Link,
        {
          href: route("dashboard"),
          className: "font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",
          children: "Dashboard"
        }
      ) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          Link,
          {
            href: route("login"),
            className: "font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",
            children: "Log in"
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            href: route("register"),
            className: "ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",
            children: "Register"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto p-6 lg:p-8", children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(ApplicationLogo, { width: "100", height: "80" }) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-16", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-gray-400 text-[1.8vw] text-center", children: [
            "Find people sharing interests by using Laravel v",
            props.laravelVersion,
            " and (PHP v",
            props.phpVersion,
            ")"
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "text-gray-400 text-[1.4vw] text-center", children: "Follow the steps below to get started:" }),
          /* @__PURE__ */ jsx("div", { className: "mt-6 p-6 bg-gray-800/50 border-lime-500 border-2 mt-12", children: /* @__PURE__ */ jsxs("ol", { className: "list-decimal list-inside text-gray-400 text-[1.2vw]", children: [
            /* @__PURE__ */ jsx("li", { className: "p-2 border-b-2 border-gray-800", children: /* @__PURE__ */ jsx(
              Link,
              {
                href: route("register"),
                className: "font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",
                children: "Register - Fill in the form"
              }
            ) }),
            /* @__PURE__ */ jsx("li", { className: "p-2 border-b-2 border-gray-800", children: "Wait for admin approval" }),
            /* @__PURE__ */ jsx("li", { className: "p-2 border-b-2 border-gray-800", children: /* @__PURE__ */ jsx(
              Link,
              {
                href: route("login"),
                className: "font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",
                children: "Login - Use the credentials you used to register"
              }
            ) }),
            /* @__PURE__ */ jsx("li", { className: "p-2", children: "Add interests - Add your interests to your profile, save then check your dashboard" })
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("style", { children: `
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            ` })
  ] });
}
export {
  Welcome as default
};
