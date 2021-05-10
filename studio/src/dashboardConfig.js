export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "609998d7ee743832392f96a2",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-2-studio-nfftq4j5",
                  apiId: "c6ba113f-875a-4fe4-9918-6efa7856d787",
                },
                {
                  buildHookId: "609998d7ee74382e892f9895",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-2-web-kamb9sy3",
                  apiId: "29b54fc8-b63e-4e80-b85b-b9e7c19f2e35",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/adamgross/sanity-gatsby-blog-2",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-2-web-kamb9sy3.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
