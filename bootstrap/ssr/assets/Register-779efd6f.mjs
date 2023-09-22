import { j as jsxs, a as jsx } from "../ssr.mjs";
import { useState, useEffect } from "react";
import { G as Guest } from "./GuestLayout-4e40a5a3.mjs";
import { T as TextInput, I as InputError } from "./TextInput-2ecbad64.mjs";
import { D as DateInput, S as SingleSelectInput, L as LanguageList, I as InputSuccess } from "./LanguageList-9bf1ea90.mjs";
import { I as InputLabel } from "./InputLabel-ea80803f.mjs";
import { P as PrimaryButton } from "./PrimaryButton-e0cba7f6.mjs";
import { useForm, Head, Link } from "@inertiajs/react";
import "postcss";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./ApplicationLogo-93a74a17.mjs";
function Register(props) {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    surname: "",
    email: "",
    mobile_number: "",
    sa_id: "",
    birth_date: "",
    language: "",
    password: "",
    password_confirmation: ""
  });
  const [responseData, setResponseData] = useState();
  const [rawMobileNumber, setRawMobileNumber] = useState("");
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation", "responseData");
    };
  }, []);
  const handleOnChange = (event) => {
    setData(event.target.name, event.target.type === "checkbox" ? event.target.checked : event.target.value);
  };
  const formatMobileNumber = (event) => {
    const inputValue = event.target.value;
    setRawMobileNumber(inputValue);
    const formattedValue = formatAsPhoneNumber(inputValue);
    setData("mobile_number", formattedValue);
  };
  const formatAsPhoneNumber = (value) => {
    value = value.replace(/\D/g, "");
    if (value.length > 10) {
      value = value.slice(0, 10);
    }
    value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;
    return value;
  };
  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await post(route("register"), {
        preserveScroll: true,
        onSuccess: () => {
          console.log(props);
          setResponseData(props.message);
          console.log(responseData);
        }
      });
    } catch (errors2) {
      console.log(errors2);
    }
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Register" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "name", value: "First Name" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "name",
            name: "name",
            value: data.name,
            className: "mt-1 block w-full",
            autoComplete: "name",
            isFocused: true,
            onChange: handleOnChange,
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.name, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "surname", value: "Surname" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "surname",
            name: "surname",
            value: data.surname,
            className: "mt-1 block w-full",
            autoComplete: "surname",
            onChange: handleOnChange,
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.surname, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "Email" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "email",
            type: "email",
            name: "email",
            value: data.email,
            className: "mt-1 block w-full",
            autoComplete: "username",
            onChange: handleOnChange,
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "phone", value: "Mobile Number" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "phone",
            name: "phone",
            value: data.mobile_number,
            className: "mt-1 block w-full",
            autoComplete: "phone",
            onChange: formatMobileNumber,
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.mobile_number, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "sa-id", value: "South African ID" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "sa-id",
            name: "sa_id",
            value: data.sa_id,
            className: "mt-1 block w-full",
            autoComplete: "sa-id",
            onChange: handleOnChange,
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.sa_id, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "dob", value: "Date of Birth" }),
        /* @__PURE__ */ jsx(
          DateInput,
          {
            id: "dob",
            name: "birth_date",
            value: data.birth_date,
            className: "mt-1 block w-full",
            onChange: handleOnChange,
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.birth_date, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "language", value: "Preferred Language" }),
        /* @__PURE__ */ jsxs(
          SingleSelectInput,
          {
            id: "language",
            name: "language",
            value: data.language,
            onChange: handleOnChange,
            required: true,
            children: [
              /* @__PURE__ */ jsx("option", { disabled: true, selected: true, children: "Select Language" }),
              LanguageList.map((language, index) => {
                return /* @__PURE__ */ jsx("option", { name: language, children: language }, index);
              })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            onChange: handleOnChange,
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password_confirmation", value: "Confirm Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password_confirmation",
            type: "password",
            name: "password_confirmation",
            value: data.password_confirmation,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            onChange: handleOnChange,
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password_confirmation, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end mt-4", children: [
        /* @__PURE__ */ jsx(
          Link,
          {
            href: route("login"),
            className: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",
            children: "Already registered?"
          }
        ),
        /* @__PURE__ */ jsx(PrimaryButton, { className: "ml-4", disabled: processing, children: "Register" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "success-message mt-4", children: /* @__PURE__ */ jsx(InputSuccess, { message: props == null ? void 0 : props.message }) })
    ] })
  ] });
}
export {
  Register as default
};
