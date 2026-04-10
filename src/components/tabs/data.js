import { lazy } from "react";
const Pagination = lazy(() => import("../pagination/Pagination"));
const InfiniteScroll = lazy(() => import("../InfiniteScroll"));
const Debounce = lazy(() => import("../Debounce"));
const MultiLang = lazy(() => import("../multilang/MultiLang"));
const SimmerUI = lazy(() => import("../simmerui/SimmerUI"));
const Accordians = lazy(() => import("../accordians/Accordians"));
const NestedComments = lazy(() => import("../nested-comments/NestedComments"));
const Slider = lazy(() => import("../ImageSlider/Slider"));
const YoutubeLiveChatUI = lazy(
  () => import("../youtube-live-chat-ui/YoutubeLiveChatUI"),
);
const Autocomplete = lazy(() => import("../autocomplete/Autocomplete"));

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
  {
    id: 8,
    title: "Pagination",
    component: Pagination,
  },
  {
    id: 9,
    title: "Youtube Live Chat UI",
    component: YoutubeLiveChatUI,
  },
  {
    id: 10,
    title: "Autocomplete",
    component: Autocomplete,
  },
];
