import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main",
  clientId: process.env.TINA_PUBLIC_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: { outputFolder: "admin", publicFolder: "public" },
  media: {
    tina: { mediaRoot: "uploads", publicFolder: "public" },
  },
  schema: {
    collections: [
      {
        name: "placeholder",
        label: "Placeholder",
        path: "content",
        format: "yaml",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [{ name: "title", label: "Title", type: "string" }],
      },
    ],
  },
});
