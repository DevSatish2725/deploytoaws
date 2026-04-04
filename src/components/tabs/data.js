import { lazy } from "react";
import InfiniteScroll from "../InfiniteScroll";
const Debounce = lazy(() => import("../Debounce"));
const MultiLang = lazy(() => import("../multilang/MultiLang"));
const SimmerUI = lazy(() => import("../simmerui/SimmerUI"));

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
];
