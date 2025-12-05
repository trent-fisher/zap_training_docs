import { sidebar } from "vuepress-theme-hope";

export default sidebar({
    "/": [
        "",

        {
            text: "CRM",
            icon: "fa6-solid:users-between-lines",
            prefix: "crm/",
            link: "crm/",
            //   children: "structure",
            children: [
                { text: "Leads",  link: "/crm/leads", icon: "fa6-solid:user-plus" },
                { text: "Deals",  link: "/crm/deals", icon: "mdi:handshake"},
                { text: "Payments",  link: "/crm/payments", icon: "mdi:credit-card-outline"},
                { text: "Companies",  link: "/crm/companies", icon:"mdi:office-building" },




            ],


        },
        {
            text: "Admin",
            icon: "fa6-solid:user-gear",
            prefix: "admin/",
            children: "structure",
        },

    ],
});
