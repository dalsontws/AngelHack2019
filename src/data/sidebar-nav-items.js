export default function() {
  return [
    {
      title: "Research Overview",
      to: "/tables",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      // to: "/tables"
      htmlAfter: ""
    },
    // {
    //   title: "Research Overview",
    //   htmlBefore: '<i class="material-icons">table_chart</i>',
    //   to: "/blog-posts"
    // },
    {
      title: "Analytics",
      // to: "/blog-overview",
      htmlBefore: '<i class="material-icons">&#xE6E1;</i>',
      to: "/blog-overview"
      // htmlAfter: ""
    },
    {
      title: "New Research",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/add-new-post"
    },
    // {
    //   title: "Forms & Components",
    //   htmlBefore: '<i class="material-icons">view_module</i>',
    //   to: "/components-overview"
    // },
    {
      title: "User Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite"
    },
    {
      title: "Help",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors"
    }
  ];
}
