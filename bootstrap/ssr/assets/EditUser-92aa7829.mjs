import { a as jsx, j as jsxs } from "../ssr.mjs";
import { forwardRef, useRef, useEffect, useState } from "react";
import { useForm, Head } from "@inertiajs/react";
import "postcss";
import { A as Authenticated } from "./AuthenticatedLayout-f4b2938b.mjs";
import { T as TextInput, I as InputError } from "./TextInput-2ecbad64.mjs";
import { D as DateInput, S as SingleSelectInput, L as LanguageList, I as InputSuccess } from "./LanguageList-9bf1ea90.mjs";
import { I as InputLabel } from "./InputLabel-ea80803f.mjs";
import { P as PrimaryButton } from "./PrimaryButton-e0cba7f6.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./ApplicationLogo-93a74a17.mjs";
import "@headlessui/react";
const MultiSelectInput = forwardRef(function MultiSelectInput2({ className = "", isFocused = false, value = [], onChange, options = [], ...props }, ref) {
  const selectRef = ref || useRef();
  useEffect(() => {
    if (isFocused) {
      selectRef.current.focus();
    }
  }, [isFocused]);
  const handleChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    onChange(selectedOptions);
  };
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col items-start", children: /* @__PURE__ */ jsx(
    "select",
    {
      ...props,
      ref: selectRef,
      className: "border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm " + className,
      multiple: true,
      value,
      onChange: handleChange,
      children: props.children
    }
  ) });
});
const InterestsList = [
  "Acting",
  "Art collecting",
  "Being a DJ",
  "Calligraphy",
  "Crocheting",
  "Dancing",
  "Designing clothing",
  "Drawing",
  "Freestyling",
  "Glassblowing",
  "Graphic design",
  "Jewelry making",
  "Improvisation",
  "LARPing",
  "Metalworking",
  "Needlepoint",
  "Origami",
  "Painting",
  "Photography",
  "Playing a musical instrument",
  "Podcasting",
  "Poetry",
  "Pottery",
  "Quilting",
  "Record collecting",
  "Scrapbooking",
  "Soap making",
  "Stand-up comedy",
  "Weaving",
  "Web design",
  "Welding",
  "Wood burning",
  "Woodworking",
  "Writing",
  "Baking",
  "Bread making",
  "Brewing",
  "Cheese-making",
  "Cooking",
  "Mixology",
  "Winemaking",
  "Wine tasting",
  "Billiards",
  "Board games",
  "Card games",
  "Chess",
  "Crossword puzzles",
  "Escape rooms",
  "Fantasy sports",
  "Jigsaw puzzles",
  "Lego sets",
  "Model trains",
  "Paintball",
  "Remote airplanes",
  "Remote cars",
  "Table tennis",
  "Trivia",
  "Video games",
  "Amateur radio",
  "Bonsai",
  "Book collecting",
  "Candle-making",
  "Election forecasting",
  "Focus groups",
  "Furniture restoration",
  "Genealogy",
  "Investing",
  "Journaling",
  "Karaoke",
  "Knitting",
  "Local historical society",
  "Makeup",
  "Movie reviews",
  "Museum visiting",
  "Reading",
  "Robot combat",
  "Taxidermy",
  "Thrifting",
  "Wikipedia editing",
  "Astronomy",
  "Beekeeping",
  "Bird watching",
  "Camping",
  "Car racing",
  "Composting",
  "Drones",
  "Farming",
  "Fishing",
  "Flying",
  "Gardening",
  "Geocaching",
  "Home improvement projects",
  "Launching rockets",
  "Metal detecting",
  "Meteorology",
  "National Park Travelers Club",
  "Sailing",
  "Scuba diving",
  "Shuffleboard",
  "Skydiving",
  "Traveling",
  "Vehicle restoration",
  "Astronomy",
  "Beekeeping",
  "Bird watching",
  "Camping",
  "Car racing",
  "Composting",
  "Drones",
  "Farming",
  "Fishing",
  "Flying",
  "Gardening",
  "Geocaching",
  "Home improvement projects",
  "Launching rockets",
  "Metal detecting",
  "Meteorology",
  "National Park Travelers Club",
  "Sailing",
  "Scuba diving",
  "Shuffleboard",
  "Skydiving",
  "Traveling",
  "Vehicle restoration",
  "Archery",
  "Backpacking",
  "Bowling",
  "Bungee jumping",
  "Crossfit",
  "Disc golfing",
  "Golfing",
  "Gymnastics",
  "Handball",
  "Hiking",
  "Horseback riding",
  "Ice skating",
  "Juggling",
  "Kayaking",
  "Kite surfing",
  "Martial arts",
  "Powerlifting",
  "Rock climbing",
  "Running",
  "Skiing",
  "Slacklining",
  "Snowboarding",
  "Surfing",
  "Swimming",
  "Water skiing",
  "Yoga",
  "Animal breeding",
  "Animal grooming",
  "Pet fostering"
];
function EditUser(props) {
  console.log(props);
  const { data, setData, put, processing, errors, reset } = useForm({
    user_id: props.user.id,
    name: props == null ? void 0 : props.user.name,
    surname: props == null ? void 0 : props.user.surname,
    email: props == null ? void 0 : props.user.email,
    mobile_number: props == null ? void 0 : props.user.userinfo.mobile_number,
    sa_id: props == null ? void 0 : props.user.userinfo.sa_id,
    birth_date: props == null ? void 0 : props.user.userinfo.birth_date.split(" ")[0],
    language: props == null ? void 0 : props.user.userinfo.language,
    interests: props == null ? void 0 : props.user.user_interest
  });
  const [rawMobileNumber, setRawMobileNumber] = useState("");
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
  const handleMultiSelectChange = (selectedOptions) => {
    console.log([data]);
    setData({ ...data, interests: selectedOptions });
  };
  const submit = async (e) => {
    e.preventDefault();
    try {
      await put(route("update.users", data.user_id), {
        onSuccess: (props2) => {
        }
      });
    } catch (errors2) {
      console.log(errors2);
    }
  };
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      auth: props.auth,
      errors: props.errors,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight", children: "Dashboard" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4", children: /* @__PURE__ */ jsx("div", { className: "bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg", children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "p-4", children: [
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
                disabled: true,
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
                disabled: true,
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
                className: "w-[100%]",
                onChange: handleOnChange,
                required: true,
                children: [
                  /* @__PURE__ */ jsx("option", { disabled: true, value: "", children: "Select Language" }),
                  LanguageList.map((language, index) => {
                    return /* @__PURE__ */ jsx("option", { name: language, value: language, children: language }, index);
                  })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsx(InputLabel, { htmlFor: "interest", value: "Interests" }),
            /* @__PURE__ */ jsxs(
              MultiSelectInput,
              {
                id: "interest",
                name: "interest",
                className: "w-[100%] h-[20vh]",
                value: data.interests,
                onChange: handleMultiSelectChange,
                required: true,
                children: [
                  /* @__PURE__ */ jsx("option", { disabled: true, value: "", children: "Select Interests" }),
                  InterestsList.map((interest, index) => {
                    return /* @__PURE__ */ jsx("option", { name: interest, value: interest, children: interest }, index);
                  })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(PrimaryButton, { className: "ml-4", disabled: processing, children: "Save" }) }),
          /* @__PURE__ */ jsx(InputSuccess, { message: props == null ? void 0 : props.message, className: "ml-4" })
        ] }) }) }) })
      ]
    }
  );
}
export {
  EditUser as default
};
