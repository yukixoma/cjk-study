export default {
  items: [
    {
      name: "Home",
      url: "/home",
      icon: "icon-home"
    },
    {
      title: true,
      name: "Chinese",
      wrapper: {
        // optional wrapper object
        element: "", // required valid HTML5 element tag
        attributes: {} // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: "" // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: "Dictionary",
      url: "/cn/dict",
      icon: "icon-layers",
      children: [
        {
          name: "Chinese - Vietnamese",
          url: "/cn/dict",
          icon: "icon-magnifier"
        },
        {
          name: "Vietnamese - Chinese",
          url: "/cn/dict/v2c",
          icon: "icon-magnifier"
        }
      ]
    },
    {
      name: "Listening",
      url: "/cn/listening",
      icon: "icon-earphones",
      children: [
        {
          name: "永失我爱",
          url: "/cn/listening/永失我爱",
          icon: "icon-playlist"
        }
      ]
    }
  ]
};
