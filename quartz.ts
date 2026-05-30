// If using quartz.ts overrides instead of YAML:
import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
 
const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout({
  defaults: {
    afterBody: [
      ExternalPlugin.Comments({
        provider: "giscus",
        options: {
          repo: "hostingfaez/blog",
          repoId: "R_kgDOSsXGjw",
          category: "Announcements",
          categoryId: "DIC_kwDOSsXGj84C-KYL",
          lang: "en",
        },
      }),
    ],
  },
})
