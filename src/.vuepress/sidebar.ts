import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
 
    {
      text: "CRM",
      icon: "fa6-solid:users-between-lines",
      prefix: "crm/",
      link: "crm/",
      children: "structure",
    },
    {
      text: "Admin",
      icon: "fa6-solid:user-gear",
      prefix: "admin/",
      children: "structure",
    },
   
  ],
});
