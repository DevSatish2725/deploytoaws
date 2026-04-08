import { lazy } from "react";
const InfiniteScroll = lazy(() => import("../InfiniteScroll"));
const Debounce = lazy(() => import("../Debounce"));
const MultiLang = lazy(() => import("../multilang/MultiLang"));
const SimmerUI = lazy(() => import("../simmerui/SimmerUI"));
const Accordians = lazy(() => import("../accordians/Accordians"));
const NestedComments = lazy(() => import("../nested-comments/NestedComments"));
const Slider = lazy(() => import("../ImageSlider/Slider"));

export const tabData = [
  {
    id: 1,
    title: "Debounce",
    component: Debounce,
  },
  {
    id: 2,
    title: "SimmerUI",
    component: SimmerUI,
  },
  {
    id: 3,
    title: "Multi-Lang",
    component: MultiLang,
  },
  {
    id: 4,
    title: "Infinite Scroll",
    component: InfiniteScroll,
  },
  {
    id: 5,
    title: "Accordians",
    component: Accordians,
  },
  {
    id: 6,
    title: "Nested Comments",
    component: NestedComments,
  },
  {
    id: 7,
    title: "Image Slider",
    component: Slider,
  },
];
