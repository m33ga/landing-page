import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get these from tina.io when deploying to TinaCMS Cloud
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "assets",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Landing Page",
        path: "content/page",
        format: "json",
        fields: [
          // ── Site-wide ──────────────────────────────────────
          {
            type: "string",
            name: "siteTitle",
            label: "Site Title",
            required: true,
            isTitle: true,
          },
          {
            type: "string",
            name: "siteDescription",
            label: "Site Meta Description",
            ui: { component: "textarea" },
          },
          {
            type: "image",
            name: "logo",
            label: "Logo",
          },
          {
            type: "image",
            name: "favicon",
            label: "Favicon",
          },
          {
            type: "string",
            name: "phone",
            label: "Phone Number",
            required: true,
          },
          {
            type: "string",
            name: "phoneDisplay",
            label: "Phone Number (display format)",
            description:
              "How the phone number is shown to visitors, e.g. +373 68 814 134",
          },
          {
            type: "string",
            name: "availability",
            label: "Availability Hours",
          },

          // ── Hero ───────────────────────────────────────────
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              {
                type: "string",
                name: "heading",
                label: "Heading",
              },
              {
                type: "string",
                name: "subheading",
                label: "Subheading",
                ui: { component: "textarea" },
              },
              {
                type: "image",
                name: "backgroundImage",
                label: "Background Image",
              },
              {
                type: "string",
                name: "primaryCtaText",
                label: "Primary CTA Text",
              },
              {
                type: "string",
                name: "primaryCtaLink",
                label: "Primary CTA Link",
              },
              {
                type: "string",
                name: "secondaryCtaText",
                label: "Secondary CTA Text",
              },
              {
                type: "string",
                name: "secondaryCtaLink",
                label: "Secondary CTA Link",
              },
            ],
          },

          // ── Features ───────────────────────────────────────
          {
            type: "object",
            name: "features",
            label: "Features Section",
            fields: [
              {
                type: "string",
                name: "heading",
                label: "Section Heading",
              },
              {
                type: "string",
                name: "description",
                label: "Section Description",
                ui: { component: "textarea" },
              },
              {
                type: "object",
                name: "items",
                label: "Feature Cards",
                list: true,
                ui: {
                  itemProps: (item: Record<string, string>) => ({
                    label: item?.title || "New Feature",
                  }),
                },
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    ui: { component: "textarea" },
                  },
                ],
              },
            ],
          },

          // ── Showcase Gallery ────────────────────────────────
          {
            type: "object",
            name: "showcase",
            label: "Showcase Gallery",
            fields: [
              {
                type: "image",
                name: "images",
                label: "Gallery Images",
                list: true,
              },
            ],
          },

          // ── CTA / Estimation ───────────────────────────────
          {
            type: "object",
            name: "cta",
            label: "CTA Section",
            fields: [
              {
                type: "string",
                name: "heading",
                label: "Heading",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "checklist",
                label: "Checklist Items",
                list: true,
              },
              {
                type: "string",
                name: "callLabel",
                label: "Call Label Text",
              },
            ],
          },

          // ── About ──────────────────────────────────────────
          {
            type: "object",
            name: "about",
            label: "About Us Section",
            fields: [
              {
                type: "string",
                name: "heading",
                label: "Heading",
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
                ui: { component: "textarea" },
              },
              {
                type: "object",
                name: "paragraphs",
                label: "Body Paragraphs",
                list: true,
                ui: {
                  itemProps: (item: Record<string, string>) => ({
                    label:
                      item?.text?.substring(0, 40) + "…" || "New Paragraph",
                  }),
                },
                fields: [
                  {
                    type: "string",
                    name: "text",
                    label: "Paragraph Text",
                    ui: { component: "textarea" },
                  },
                ],
              },
              {
                type: "image",
                name: "teamImage",
                label: "Team Image",
              },
            ],
          },

          // ── Contact / Footer ───────────────────────────────
          {
            type: "object",
            name: "contact",
            label: "Contact / Footer",
            fields: [
              {
                type: "string",
                name: "heading",
                label: "Section Heading",
              },
              {
                type: "string",
                name: "instagramUrl",
                label: "Instagram URL",
              },
              {
                type: "string",
                name: "instagramHandle",
                label: "Instagram Handle",
              },
              {
                type: "string",
                name: "address",
                label: "Address",
              },
            ],
          },

          // ── Mascot ─────────────────────────────────────────
          {
            type: "object",
            name: "mascot",
            label: "Mascot",
            fields: [
              {
                type: "string",
                name: "bubbleText",
                label: "Speech Bubble Text",
              },
              {
                type: "image",
                name: "image",
                label: "Mascot Image",
              },
            ],
          },
        ],
      },
    ],
  },
});
