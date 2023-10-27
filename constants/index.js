export const sidebarLinks = [
    {
      imgURL: "/assets/home.svg",
      route: "/tnp",
      label: "Home",
    },
    {
      imgURL: "/assets/search.svg",
      route: "/search",
      label: "Search",
    },
    {
      imgURL: "/assets/heart.svg",
      route: "/activity",
      label: "Activity",
    },
    {
      imgURL: "/assets/create.svg",
      route: "/create-thread",
      label: "Create Thread",
    },
    {
      imgURL: "/assets/community.svg",
      route: "/communities",
      label: "Communities",
    },
    {
      imgURL: "/assets/user.svg",
      route: "/profile",
      label: "Profile",
    },
  ];
  
  export const profileTabs = [
    { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
    { value: "replies", label: "Replies", icon: "/assets/members.svg" },
    { value: "tagged", label: "Tagged", icon: "/assets/tag.svg" },
  ];
  
  export const communityTabs = [
    { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
    { value: "members", label: "Members", icon: "/assets/members.svg" },
    { value: "requests", label: "Requests", icon: "/assets/request.svg" },
  ];
  
  export const themeTypography = {
    fontFamily: "SF, sans-serif",
    htmlFontSize: 16,
    fontSize: 16,
    fontWeight: 400,
    caption: {
      fontSize: "0.8rem",
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.95rem",
      fontWeight: 400,
    },
    body1: {
      fontSize: "1.15rem",
      fontWeight: 400,
      lineHeight: 1.2,
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 400,
      lineHeight: 1.2,
    },
    h5: {
      fontSize: "1.35rem",
      fontWeight: 400,
      lineHeight: 1.2,
    },
    h4: {
      fontSize: "1.75rem",
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: "2.2rem",
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "3rem",
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h1: {
      fontSize: "4rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    button: {
      textTransform: "none",
    },
  };