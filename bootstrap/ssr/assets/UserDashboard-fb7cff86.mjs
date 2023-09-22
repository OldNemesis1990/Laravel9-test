import { j as jsxs, a as jsx } from "../ssr.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
function UserDashboard(props) {
  const showUsers = props.props.data.users.length > 0 ? true : false;
  return /* @__PURE__ */ jsxs("div", { className: "p-6 text-gray-900 dark:text-gray-100", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("div", { className: "", children: "Interests" }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("a", { href: route("view.user", props.props.auth.user.id), children: /* @__PURE__ */ jsx("button", { className: "bg-lime-500 text-gray-800 py-1 px-4", children: "Add Interest" }) }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      showUsers && props.props.data.users.map((user) => {
        user.interest_count;
        let color = "border-gray-700";
        if (user.interest_count >= 1 && user.interest_count <= 3) {
          color = "border-rose-500";
        } else if (user.interest_count >= 4 && user.interest_count <= 6) {
          color = "border-amber-300";
        } else if (user.interest_count >= 7) {
          color = "border-lime-500";
        }
        return /* @__PURE__ */ jsxs("div", { className: `grid lg:grid-cols-3 gap-4 mt-4 p-3 border-2 ${color}`, children: [
          /* @__PURE__ */ jsxs("div", { className: "", children: [
            /* @__PURE__ */ jsx("p", { children: "Name" }),
            /* @__PURE__ */ jsxs("p", { children: [
              user.name,
              " ",
              user.surname
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsxs("p", { children: [
            "Shares ",
            user.interest_count,
            " interests"
          ] }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { children: "Contact information" }),
            /* @__PURE__ */ jsx("p", { children: user.email }),
            /* @__PURE__ */ jsx("p", { children: user.userinfo.mobile_number })
          ] })
        ] }, user.id);
      }),
      !showUsers && /* @__PURE__ */ jsx("div", { className: "text-center mt-4", children: "No users with sharing interests found. Please select more interest and we might be able to match you." })
    ] })
  ] });
}
export {
  UserDashboard as default
};
