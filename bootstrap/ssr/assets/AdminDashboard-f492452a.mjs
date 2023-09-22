import { j as jsxs, a as jsx } from "../ssr.mjs";
import "react";
import { useForm } from "@inertiajs/react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
function AdminDasboard(props) {
  var _a;
  const form = useForm();
  const deleteUser = async (e, id) => {
    e.preventDefault();
    if (confirm("Are you sure you want to delete this user?")) {
      form.delete(route("delete.users", { user_id: id })).on("success", (response) => {
        console.log(response);
        props.props.data = response.data.data;
      }).catch((error) => {
        console.error("Error deleting user:", error);
      });
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "p-6 text-gray-900 dark:text-gray-100", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsx("div", { className: "", children: "Users" }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-4", children: (_a = props.props.data.users) == null ? void 0 : _a.map((user) => {
      var _a2;
      return /* @__PURE__ */ jsxs("div", { className: `mt-4 grid lg:grid-cols-6 gap-4 p-3 border-[1px] ${(user == null ? void 0 : user.activated) ? "border-lime-500" : "border-red-500"}`, children: [
        /* @__PURE__ */ jsxs("div", { className: "text-gray-800 dark:text-gray-200", children: [
          /* @__PURE__ */ jsx("p", { children: "Full Name" }),
          /* @__PURE__ */ jsxs("p", { children: [
            user == null ? void 0 : user.name,
            " ",
            user.surname
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-gray-800 dark:text-gray-200 break-normal break-words", children: [
          /* @__PURE__ */ jsx("p", { children: "Email" }),
          /* @__PURE__ */ jsx("p", { children: user == null ? void 0 : user.email })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-gray-800 dark:text-gray-200", children: [
          /* @__PURE__ */ jsx("p", { children: "Mobile Number" }),
          /* @__PURE__ */ jsx("p", { children: (_a2 = user == null ? void 0 : user.userinfo) == null ? void 0 : _a2.mobile_number })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-gray-800 dark:text-gray-200", children: [
          /* @__PURE__ */ jsx("p", { children: "activated" }),
          /* @__PURE__ */ jsx("p", { children: (user == null ? void 0 : user.activated) ? "yes" : "no" })
        ] }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("a", { href: `/edit-user/${user.id}`, children: /* @__PURE__ */ jsx("button", { className: "dark:bg-lime-500 bg-lime-500 dark:text-gray-800 text-gray-800 rounded-md px-4 py-2 m-2", children: "Edit User" }) }) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("a", { onClick: (e) => {
          deleteUser(e, user.id);
        }, children: /* @__PURE__ */ jsx("button", { className: "dark:bg-rose-500 bg-rose-500 dark:text-gray-800 text-gray-800 rounded-md px-4 py-2 m-2", children: "Delete User" }) }) })
      ] }, user.id);
    }) })
  ] });
}
export {
  AdminDasboard as default
};
