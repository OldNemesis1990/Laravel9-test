import { j as jsxs, a as jsx } from "../ssr.mjs";
import "react";
import { A as Authenticated } from "./AuthenticatedLayout-f4b2938b.mjs";
import AdminDasboard from "./AdminDashboard-f492452a.mjs";
import UserDashboard from "./UserDashboard-fb7cff86.mjs";
import { usePage, Head } from "@inertiajs/react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./ApplicationLogo-93a74a17.mjs";
import "@headlessui/react";
function Dashboard(props) {
  const isAdmin = usePage().props.isAdmin;
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      auth: props.auth,
      errors: props.errors,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight", children: "Dashboard" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg", children: [
          !isAdmin && /* @__PURE__ */ jsx(UserDashboard, { props }),
          isAdmin && /* @__PURE__ */ jsx(AdminDasboard, { props })
        ] }) }) })
      ]
    }
  );
}
export {
  Dashboard as default
};
