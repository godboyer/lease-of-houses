// vite.config.ts
import { defineConfig, loadEnv } from "file:///C:/Users/wc185/OneDrive%20-%20%E6%AD%A6%E6%B1%89%E5%B7%A5%E7%A8%8B%E5%A4%A7%E5%AD%A6%E9%82%AE%E7%94%B5%E4%B8%8E%E4%BF%A1%E6%81%AF%E5%B7%A5%E7%A8%8B%E5%AD%A6%E9%99%A2/%E6%A1%8C%E9%9D%A2/secondhand-home/node_modules/vite/dist/node/index.js";

// build/plugins/index.ts
import vue from "file:///C:/Users/wc185/OneDrive%20-%20%E6%AD%A6%E6%B1%89%E5%B7%A5%E7%A8%8B%E5%A4%A7%E5%AD%A6%E9%82%AE%E7%94%B5%E4%B8%8E%E4%BF%A1%E6%81%AF%E5%B7%A5%E7%A8%8B%E5%AD%A6%E9%99%A2/%E6%A1%8C%E9%9D%A2/secondhand-home/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///C:/Users/wc185/OneDrive%20-%20%E6%AD%A6%E6%B1%89%E5%B7%A5%E7%A8%8B%E5%A4%A7%E5%AD%A6%E9%82%AE%E7%94%B5%E4%B8%8E%E4%BF%A1%E6%81%AF%E5%B7%A5%E7%A8%8B%E5%AD%A6%E9%99%A2/%E6%A1%8C%E9%9D%A2/secondhand-home/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import progress from "file:///C:/Users/wc185/OneDrive%20-%20%E6%AD%A6%E6%B1%89%E5%B7%A5%E7%A8%8B%E5%A4%A7%E5%AD%A6%E9%82%AE%E7%94%B5%E4%B8%8E%E4%BF%A1%E6%81%AF%E5%B7%A5%E7%A8%8B%E5%AD%A6%E9%99%A2/%E6%A1%8C%E9%9D%A2/secondhand-home/node_modules/vite-plugin-progress/dist/index.mjs";

// build/plugins/html.ts
import { createHtmlPlugin } from "file:///C:/Users/wc185/OneDrive%20-%20%E6%AD%A6%E6%B1%89%E5%B7%A5%E7%A8%8B%E5%A4%A7%E5%AD%A6%E9%82%AE%E7%94%B5%E4%B8%8E%E4%BF%A1%E6%81%AF%E5%B7%A5%E7%A8%8B%E5%AD%A6%E9%99%A2/%E6%A1%8C%E9%9D%A2/secondhand-home/node_modules/vite-plugin-html/dist/index.mjs";

// build/plugins/unplugin.ts
import VueMacros from "file:///C:/Users/wc185/OneDrive%20-%20%E6%AD%A6%E6%B1%89%E5%B7%A5%E7%A8%8B%E5%A4%A7%E5%AD%A6%E9%82%AE%E7%94%B5%E4%B8%8E%E4%BF%A1%E6%81%AF%E5%B7%A5%E7%A8%8B%E5%AD%A6%E9%99%A2/%E6%A1%8C%E9%9D%A2/secondhand-home/node_modules/unplugin-vue-macros/dist/vite.mjs";
import Icons from "file:///C:/Users/wc185/OneDrive%20-%20%E6%AD%A6%E6%B1%89%E5%B7%A5%E7%A8%8B%E5%A4%A7%E5%AD%A6%E9%82%AE%E7%94%B5%E4%B8%8E%E4%BF%A1%E6%81%AF%E5%B7%A5%E7%A8%8B%E5%AD%A6%E9%99%A2/%E6%A1%8C%E9%9D%A2/secondhand-home/node_modules/unplugin-icons/dist/vite.mjs";
import IconsResolver from "file:///C:/Users/wc185/OneDrive%20-%20%E6%AD%A6%E6%B1%89%E5%B7%A5%E7%A8%8B%E5%A4%A7%E5%AD%A6%E9%82%AE%E7%94%B5%E4%B8%8E%E4%BF%A1%E6%81%AF%E5%B7%A5%E7%A8%8B%E5%AD%A6%E9%99%A2/%E6%A1%8C%E9%9D%A2/secondhand-home/node_modules/unplugin-icons/dist/resolver.mjs";
import Components from "file:///C:/Users/wc185/OneDrive%20-%20%E6%AD%A6%E6%B1%89%E5%B7%A5%E7%A8%8B%E5%A4%A7%E5%AD%A6%E9%82%AE%E7%94%B5%E4%B8%8E%E4%BF%A1%E6%81%AF%E5%B7%A5%E7%A8%8B%E5%AD%A6%E9%99%A2/%E6%A1%8C%E9%9D%A2/secondhand-home/node_modules/unplugin-vue-components/dist/vite.mjs";
import { NaiveUiResolver } from "file:///C:/Users/wc185/OneDrive%20-%20%E6%AD%A6%E6%B1%89%E5%B7%A5%E7%A8%8B%E5%A4%A7%E5%AD%A6%E9%82%AE%E7%94%B5%E4%B8%8E%E4%BF%A1%E6%81%AF%E5%B7%A5%E7%A8%8B%E5%AD%A6%E9%99%A2/%E6%A1%8C%E9%9D%A2/secondhand-home/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import { FileSystemIconLoader } from "file:///C:/Users/wc185/OneDrive%20-%20%E6%AD%A6%E6%B1%89%E5%B7%A5%E7%A8%8B%E5%A4%A7%E5%AD%A6%E9%82%AE%E7%94%B5%E4%B8%8E%E4%BF%A1%E6%81%AF%E5%B7%A5%E7%A8%8B%E5%AD%A6%E9%99%A2/%E6%A1%8C%E9%9D%A2/secondhand-home/node_modules/unplugin-icons/dist/loaders.mjs";
import { createSvgIconsPlugin } from "file:///C:/Users/wc185/OneDrive%20-%20%E6%AD%A6%E6%B1%89%E5%B7%A5%E7%A8%8B%E5%A4%A7%E5%AD%A6%E9%82%AE%E7%94%B5%E4%B8%8E%E4%BF%A1%E6%81%AF%E5%B7%A5%E7%A8%8B%E5%AD%A6%E9%99%A2/%E6%A1%8C%E9%9D%A2/secondhand-home/node_modules/vite-plugin-svg-icons/dist/index.mjs";

// build/utils/index.ts
import path from "path";
function getRootPath() {
  return path.resolve(process.cwd());
}
function getSrcPath(srcName = "src") {
  const rootPath = getRootPath();
  return `${rootPath}/${srcName}`;
}

// build/plugins/unplugin.ts
function unplugin(viteEnv) {
  const { VITE_ICON_PREFFIX, VITE_ICON_LOCAL_PREFFIX } = viteEnv;
  const srcPath = getSrcPath();
  const localIconPath = `${srcPath}/assets/svg-icon`;
  const collectionName = VITE_ICON_LOCAL_PREFFIX.replace(`${VITE_ICON_PREFFIX}-`, "");
  return [
    VueMacros(),
    Icons({
      compiler: "vue3",
      customCollections: {
        [collectionName]: FileSystemIconLoader(localIconPath)
      },
      scale: 1,
      defaultClass: "inline-block"
    }),
    Components({
      dts: "src/typings/components.d.ts",
      types: [{ from: "vue-router", names: ["RouterLink", "RouterView"] }],
      resolvers: [
        NaiveUiResolver(),
        IconsResolver({ customCollections: [collectionName], componentPrefix: VITE_ICON_PREFFIX })
      ]
    }),
    createSvgIconsPlugin({
      iconDirs: [localIconPath],
      symbolId: `${VITE_ICON_LOCAL_PREFFIX}-[dir]-[name]`,
      inject: "body-last",
      customDomId: "__SVG_ICON_LOCAL__"
    })
  ];
}

// build/plugins/visualizer.ts
import { visualizer } from "file:///C:/Users/wc185/OneDrive%20-%20%E6%AD%A6%E6%B1%89%E5%B7%A5%E7%A8%8B%E5%A4%A7%E5%AD%A6%E9%82%AE%E7%94%B5%E4%B8%8E%E4%BF%A1%E6%81%AF%E5%B7%A5%E7%A8%8B%E5%AD%A6%E9%99%A2/%E6%A1%8C%E9%9D%A2/secondhand-home/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
var visualizer_default = visualizer({
  gzipSize: true,
  brotliSize: true,
  open: true
});

// build/plugins/compress.ts
import ViteCompression from "file:///C:/Users/wc185/OneDrive%20-%20%E6%AD%A6%E6%B1%89%E5%B7%A5%E7%A8%8B%E5%A4%A7%E5%AD%A6%E9%82%AE%E7%94%B5%E4%B8%8E%E4%BF%A1%E6%81%AF%E5%B7%A5%E7%A8%8B%E5%AD%A6%E9%99%A2/%E6%A1%8C%E9%9D%A2/secondhand-home/node_modules/vite-plugin-compression/dist/index.mjs";

// build/plugins/pwa.ts
import { VitePWA } from "file:///C:/Users/wc185/OneDrive%20-%20%E6%AD%A6%E6%B1%89%E5%B7%A5%E7%A8%8B%E5%A4%A7%E5%AD%A6%E9%82%AE%E7%94%B5%E4%B8%8E%E4%BF%A1%E6%81%AF%E5%B7%A5%E7%A8%8B%E5%AD%A6%E9%99%A2/%E6%A1%8C%E9%9D%A2/secondhand-home/node_modules/vite-plugin-pwa/dist/index.mjs";

// build/config/define.ts
import dayjs from "file:///C:/Users/wc185/OneDrive%20-%20%E6%AD%A6%E6%B1%89%E5%B7%A5%E7%A8%8B%E5%A4%A7%E5%AD%A6%E9%82%AE%E7%94%B5%E4%B8%8E%E4%BF%A1%E6%81%AF%E5%B7%A5%E7%A8%8B%E5%AD%A6%E9%99%A2/%E6%A1%8C%E9%9D%A2/secondhand-home/node_modules/dayjs/dayjs.min.js";
var PROJECT_BUILD_TIME = JSON.stringify(
  dayjs().format("YYYY-MM-DD HH:mm:ss")
);
var viteDefine = {
  PROJECT_BUILD_TIME
};

// .env-config.ts
var serviceEnv = {
  dev: {
    url: "http://127.0.0.1:3040/api",
    urlPattern: "http://127.0.0.1:3040/api",
    secondUrl: "http://127.0.0.1:3040/api",
    secondUrlPattern: "/second-url-pattern"
  },
  test: {
    url: "http://localhost:8080",
    urlPattern: "/url-pattern",
    secondUrl: "http://localhost:8081",
    secondUrlPattern: "/second-url-pattern"
  },
  prod: {
    url: "http://114.132.198.2:3020/api",
    urlPattern: "/url-pattern",
    secondUrl: "http://114.132.198.2:3020/api",
    secondUrlPattern: "/second-url-pattern"
  }
};
function getServiceEnvConfig(env) {
  const { VITE_SERVICE_ENV = "dev" } = env;
  const config = serviceEnv[VITE_SERVICE_ENV];
  return config;
}

// vite.config.ts
import vue2 from "file:///C:/Users/wc185/OneDrive%20-%20%E6%AD%A6%E6%B1%89%E5%B7%A5%E7%A8%8B%E5%A4%A7%E5%AD%A6%E9%82%AE%E7%94%B5%E4%B8%8E%E4%BF%A1%E6%81%AF%E5%B7%A5%E7%A8%8B%E5%AD%A6%E9%99%A2/%E6%A1%8C%E9%9D%A2/secondhand-home/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx2 from "file:///C:/Users/wc185/OneDrive%20-%20%E6%AD%A6%E6%B1%89%E5%B7%A5%E7%A8%8B%E5%A4%A7%E5%AD%A6%E9%82%AE%E7%94%B5%E4%B8%8E%E4%BF%A1%E6%81%AF%E5%B7%A5%E7%A8%8B%E5%AD%A6%E9%99%A2/%E6%A1%8C%E9%9D%A2/secondhand-home/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import AutoImport from "file:///C:/Users/wc185/OneDrive%20-%20%E6%AD%A6%E6%B1%89%E5%B7%A5%E7%A8%8B%E5%A4%A7%E5%AD%A6%E9%82%AE%E7%94%B5%E4%B8%8E%E4%BF%A1%E6%81%AF%E5%B7%A5%E7%A8%8B%E5%AD%A6%E9%99%A2/%E6%A1%8C%E9%9D%A2/secondhand-home/node_modules/unplugin-auto-import/dist/vite.js";
import Components2 from "file:///C:/Users/wc185/OneDrive%20-%20%E6%AD%A6%E6%B1%89%E5%B7%A5%E7%A8%8B%E5%A4%A7%E5%AD%A6%E9%82%AE%E7%94%B5%E4%B8%8E%E4%BF%A1%E6%81%AF%E5%B7%A5%E7%A8%8B%E5%AD%A6%E9%99%A2/%E6%A1%8C%E9%9D%A2/secondhand-home/node_modules/unplugin-vue-components/dist/vite.mjs";
import DefineOptions from "file:///C:/Users/wc185/OneDrive%20-%20%E6%AD%A6%E6%B1%89%E5%B7%A5%E7%A8%8B%E5%A4%A7%E5%AD%A6%E9%82%AE%E7%94%B5%E4%B8%8E%E4%BF%A1%E6%81%AF%E5%B7%A5%E7%A8%8B%E5%AD%A6%E9%99%A2/%E6%A1%8C%E9%9D%A2/secondhand-home/node_modules/unplugin-vue-define-options/dist/vite.mjs";
import {
  ElementPlusResolver,
  NaiveUiResolver as NaiveUiResolver2
} from "file:///C:/Users/wc185/OneDrive%20-%20%E6%AD%A6%E6%B1%89%E5%B7%A5%E7%A8%8B%E5%A4%A7%E5%AD%A6%E9%82%AE%E7%94%B5%E4%B8%8E%E4%BF%A1%E6%81%AF%E5%B7%A5%E7%A8%8B%E5%AD%A6%E9%99%A2/%E6%A1%8C%E9%9D%A2/secondhand-home/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import Unocss from "file:///C:/Users/wc185/OneDrive%20-%20%E6%AD%A6%E6%B1%89%E5%B7%A5%E7%A8%8B%E5%A4%A7%E5%AD%A6%E9%82%AE%E7%94%B5%E4%B8%8E%E4%BF%A1%E6%81%AF%E5%B7%A5%E7%A8%8B%E5%AD%A6%E9%99%A2/%E6%A1%8C%E9%9D%A2/secondhand-home/node_modules/unocss/dist/vite.mjs";
import { presetUno, presetAttributify, presetIcons } from "file:///C:/Users/wc185/OneDrive%20-%20%E6%AD%A6%E6%B1%89%E5%B7%A5%E7%A8%8B%E5%A4%A7%E5%AD%A6%E9%82%AE%E7%94%B5%E4%B8%8E%E4%BF%A1%E6%81%AF%E5%B7%A5%E7%A8%8B%E5%AD%A6%E9%99%A2/%E6%A1%8C%E9%9D%A2/secondhand-home/node_modules/unocss/dist/index.mjs";
var vite_config_default = defineConfig((configEnv) => {
  const viteEnv = loadEnv(configEnv.mode, process.cwd());
  const rootPath = getRootPath();
  const srcPath = getSrcPath();
  const isOpenProxy = viteEnv.VITE_HTTP_PROXY === "Y";
  const envConfig = getServiceEnvConfig(viteEnv);
  return {
    plugins: [
      // ...setupVitePlugins(viteEnv),
      ...unplugin(viteEnv),
      vue2(),
      vueJsx2(),
      DefineOptions(),
      AutoImport({
        imports: [
          "vue",
          {
            "naive-ui": [
              "useDialog",
              "useMessage",
              "useNotification",
              "useLoadingBar"
            ]
          }
        ],
        resolvers: [ElementPlusResolver()]
      }),
      Components2({
        resolvers: [ElementPlusResolver(), NaiveUiResolver2()]
      }),
      Unocss({
        presets: [presetUno(), presetAttributify(), presetIcons()]
      })
    ],
    define: viteDefine,
    mode: "development",
    // 代码环境  开发和生产    production 生产环境
    // @ => src
    resolve: {
      alias: {
        "~": rootPath,
        "@": srcPath,
        "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js"
      }
    },
    base: "http://localhost:5173",
    server: {
      hmr: {
        host: "localhost"
      },
      host: "0.0.0.0",
      port: 5173,
      open: true,
      proxy: {}
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAiYnVpbGQvcGx1Z2lucy9pbmRleC50cyIsICJidWlsZC9wbHVnaW5zL2h0bWwudHMiLCAiYnVpbGQvcGx1Z2lucy91bnBsdWdpbi50cyIsICJidWlsZC91dGlscy9pbmRleC50cyIsICJidWlsZC9wbHVnaW5zL3Zpc3VhbGl6ZXIudHMiLCAiYnVpbGQvcGx1Z2lucy9jb21wcmVzcy50cyIsICJidWlsZC9wbHVnaW5zL3B3YS50cyIsICJidWlsZC9jb25maWcvZGVmaW5lLnRzIiwgIi5lbnYtY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcd2MxODVcXFxcT25lRHJpdmUgLSBcdTZCNjZcdTZDNDlcdTVERTVcdTdBMEJcdTU5MjdcdTVCNjZcdTkwQUVcdTc1MzVcdTRFMEVcdTRGRTFcdTYwNkZcdTVERTVcdTdBMEJcdTVCNjZcdTk2NjJcXFxcXHU2ODRDXHU5NzYyXFxcXHNlY29uZGhhbmQtaG9tZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcd2MxODVcXFxcT25lRHJpdmUgLSBcdTZCNjZcdTZDNDlcdTVERTVcdTdBMEJcdTU5MjdcdTVCNjZcdTkwQUVcdTc1MzVcdTRFMEVcdTRGRTFcdTYwNkZcdTVERTVcdTdBMEJcdTVCNjZcdTk2NjJcXFxcXHU2ODRDXHU5NzYyXFxcXHNlY29uZGhhbmQtaG9tZVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvd2MxODUvT25lRHJpdmUlMjAtJTIwJUU2JUFEJUE2JUU2JUIxJTg5JUU1JUI3JUE1JUU3JUE4JThCJUU1JUE0JUE3JUU1JUFEJUE2JUU5JTgyJUFFJUU3JTk0JUI1JUU0JUI4JThFJUU0JUJGJUExJUU2JTgxJUFGJUU1JUI3JUE1JUU3JUE4JThCJUU1JUFEJUE2JUU5JTk5JUEyLyVFNiVBMSU4QyVFOSU5RCVBMi9zZWNvbmRoYW5kLWhvbWUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHtcbiAgY3JlYXRlVml0ZVByb3h5LFxuICBnZXRSb290UGF0aCxcbiAgZ2V0U3JjUGF0aCxcbiAgc2V0dXBWaXRlUGx1Z2lucyxcbiAgdml0ZURlZmluZSxcbn0gZnJvbSBcIi4vYnVpbGRcIjtcbmltcG9ydCB7IGdldFNlcnZpY2VFbnZDb25maWcgfSBmcm9tIFwiLi8uZW52LWNvbmZpZ1wiO1xuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XG5pbXBvcnQgdnVlSnN4IGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWUtanN4XCI7XG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tIFwidW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZVwiO1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSBcInVucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGVcIjtcbmltcG9ydCBEZWZpbmVPcHRpb25zIGZyb20gXCJ1bnBsdWdpbi12dWUtZGVmaW5lLW9wdGlvbnMvdml0ZVwiO1xuaW1wb3J0IHtcbiAgRWxlbWVudFBsdXNSZXNvbHZlcixcbiAgTmFpdmVVaVJlc29sdmVyLFxufSBmcm9tIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzXCI7XG5pbXBvcnQgcGF0aCwgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCBVbm9jc3MgZnJvbSBcInVub2Nzcy92aXRlXCI7XG5pbXBvcnQgeyBwcmVzZXRVbm8sIHByZXNldEF0dHJpYnV0aWZ5LCBwcmVzZXRJY29ucyB9IGZyb20gXCJ1bm9jc3NcIjtcbmltcG9ydCB1bnBsdWdpbiBmcm9tIFwiLi9idWlsZC9wbHVnaW5zL3VucGx1Z2luXCJcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyhjb25maWdFbnYgPT4ge1xuICAgIGNvbnN0IHZpdGVFbnYgPSBsb2FkRW52KGNvbmZpZ0Vudi5tb2RlLCBwcm9jZXNzLmN3ZCgpKSBhcyB1bmtub3duIGFzIGFueTtcbiAgY29uc3Qgcm9vdFBhdGggPSBnZXRSb290UGF0aCgpO1xuICBjb25zdCBzcmNQYXRoID0gZ2V0U3JjUGF0aCgpO1xuICBjb25zdCBpc09wZW5Qcm94eSA9IHZpdGVFbnYuVklURV9IVFRQX1BST1hZID09PSAnWSc7XG4gIGNvbnN0IGVudkNvbmZpZyA9IGdldFNlcnZpY2VFbnZDb25maWcodml0ZUVudik7XG5cbiAgcmV0dXJue1xuICAgIHBsdWdpbnM6IFtcbiAgICAgIC8vIC4uLnNldHVwVml0ZVBsdWdpbnModml0ZUVudiksXG4gICAgICAuLi51bnBsdWdpbih2aXRlRW52KSxcbiAgICB2dWUoKSxcbiAgICB2dWVKc3goKSxcbiAgICBEZWZpbmVPcHRpb25zKCksXG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICBpbXBvcnRzOiBbXG4gICAgICAgIFwidnVlXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5haXZlLXVpXCI6IFtcbiAgICAgICAgICAgIFwidXNlRGlhbG9nXCIsXG4gICAgICAgICAgICBcInVzZU1lc3NhZ2VcIixcbiAgICAgICAgICAgIFwidXNlTm90aWZpY2F0aW9uXCIsXG4gICAgICAgICAgICBcInVzZUxvYWRpbmdCYXJcIixcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV0sXG4gICAgfSksXG4gICAgQ29tcG9uZW50cyh7XG4gICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCksIE5haXZlVWlSZXNvbHZlcigpXSxcbiAgICB9KSxcbiAgICBVbm9jc3Moe1xuICAgICAgcHJlc2V0czogW3ByZXNldFVubygpLCBwcmVzZXRBdHRyaWJ1dGlmeSgpLCBwcmVzZXRJY29ucygpXSxcbiAgICB9KSxcbiAgXSxcbiAgZGVmaW5lOiB2aXRlRGVmaW5lLFxuICBtb2RlOiBcImRldmVsb3BtZW50XCIsIC8vIFx1NEVFM1x1NzgwMVx1NzNBRlx1NTg4MyAgXHU1RjAwXHU1M0QxXHU1NDhDXHU3NTFGXHU0RUE3ICAgIHByb2R1Y3Rpb24gXHU3NTFGXHU0RUE3XHU3M0FGXHU1ODgzXG4gIC8vIEAgPT4gc3JjXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJ+XCI6IHJvb3RQYXRoLFxuICAgICAgXCJAXCI6IHNyY1BhdGgsXG4gICAgICBcInZ1ZS1pMThuXCI6IFwidnVlLWkxOG4vZGlzdC92dWUtaTE4bi5janMuanNcIixcbiAgICB9LFxuICB9LFxuICBiYXNlOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NTE3M1wiLFxuICBzZXJ2ZXI6IHtcbiAgICBobXI6IHtcbiAgICAgIGhvc3Q6IFwibG9jYWxob3N0XCIsXG4gICAgfSxcbiAgICBob3N0OiBcIjAuMC4wLjBcIixcbiAgICBwb3J0OiA1MTczLFxuICAgIG9wZW46IHRydWUsXG4gICAgcHJveHk6IHt9LFxuICB9LFxuXG5cbiAgfVxufSlcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcd2MxODVcXFxcT25lRHJpdmUgLSBcdTZCNjZcdTZDNDlcdTVERTVcdTdBMEJcdTU5MjdcdTVCNjZcdTkwQUVcdTc1MzVcdTRFMEVcdTRGRTFcdTYwNkZcdTVERTVcdTdBMEJcdTVCNjZcdTk2NjJcXFxcXHU2ODRDXHU5NzYyXFxcXHNlY29uZGhhbmQtaG9tZVxcXFxidWlsZFxcXFxwbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx3YzE4NVxcXFxPbmVEcml2ZSAtIFx1NkI2Nlx1NkM0OVx1NURFNVx1N0EwQlx1NTkyN1x1NUI2Nlx1OTBBRVx1NzUzNVx1NEUwRVx1NEZFMVx1NjA2Rlx1NURFNVx1N0EwQlx1NUI2Nlx1OTY2MlxcXFxcdTY4NENcdTk3NjJcXFxcc2Vjb25kaGFuZC1ob21lXFxcXGJ1aWxkXFxcXHBsdWdpbnNcXFxcaW5kZXgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3djMTg1L09uZURyaXZlJTIwLSUyMCVFNiVBRCVBNiVFNiVCMSU4OSVFNSVCNyVBNSVFNyVBOCU4QiVFNSVBNCVBNyVFNSVBRCVBNiVFOSU4MiVBRSVFNyU5NCVCNSVFNCVCOCU4RSVFNCVCRiVBMSVFNiU4MSVBRiVFNSVCNyVBNSVFNyVBOCU4QiVFNSVBRCVBNiVFOSU5OSVBMi8lRTYlQTElOEMlRTklOUQlQTIvc2Vjb25kaGFuZC1ob21lL2J1aWxkL3BsdWdpbnMvaW5kZXgudHNcIjtpbXBvcnQgdHlwZSB7IFBsdWdpbk9wdGlvbiB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnO1xuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4JztcbmltcG9ydCB1bm9jc3MgZnJvbSAnQHVub2Nzcy92aXRlJztcbmltcG9ydCBwcm9ncmVzcyBmcm9tICd2aXRlLXBsdWdpbi1wcm9ncmVzcyc7XG4vLyBpbXBvcnQgcm91dGVyUGFnZSBmcm9tICdAc295YmVhbmpzL3JvdXRlci1wYWdlJztcbmltcG9ydCBodG1sIGZyb20gJy4vaHRtbCc7XG5pbXBvcnQgdW5wbHVnaW4gZnJvbSAnLi91bnBsdWdpbic7XG5pbXBvcnQgbW9jayBmcm9tICcuL21vY2snO1xuaW1wb3J0IHZpc3VhbGl6ZXIgZnJvbSAnLi92aXN1YWxpemVyJztcbmltcG9ydCBjb21wcmVzcyBmcm9tICcuL2NvbXByZXNzJztcbmltcG9ydCBwd2EgZnJvbSAnLi9wd2EnO1xuXG4vKipcbiAqIHZpdGVcdTYzRDJcdTRFRjZcbiAqIEBwYXJhbSB2aXRlRW52IC0gXHU3M0FGXHU1ODgzXHU1M0Q4XHU5MUNGXHU5MTREXHU3RjZFXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cFZpdGVQbHVnaW5zKHZpdGVFbnY6IGFueSk6IChQbHVnaW5PcHRpb24gfCBQbHVnaW5PcHRpb25bXSlbXSB7XG4gIGNvbnN0IHBsdWdpbnMgPSBbdnVlKCksIHZ1ZUpzeCgpLCBodG1sKHZpdGVFbnYpLCAuLi51bnBsdWdpbih2aXRlRW52KSwgcHJvZ3Jlc3MoKV07XG5cbiAgaWYgKHZpdGVFbnYuVklURV9WSVNVQUxJWkVSID09PSAnWScpIHtcbiAgICBwbHVnaW5zLnB1c2godmlzdWFsaXplciBhcyBQbHVnaW5PcHRpb24pO1xuICB9XG4gIGlmICh2aXRlRW52LlZJVEVfQ09NUFJFU1MgPT09ICdZJykge1xuICAgIHBsdWdpbnMucHVzaChjb21wcmVzcyh2aXRlRW52KSk7XG4gIH1cbiAgaWYgKHZpdGVFbnYuVklURV9QV0EgPT09ICdZJyB8fCB2aXRlRW52LlZJVEVfVkVSQ0VMID09PSAnWScpIHtcbiAgICBwbHVnaW5zLnB1c2gocHdhKCkpO1xuICB9XG5cbiAgcmV0dXJuIHBsdWdpbnM7XG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHdjMTg1XFxcXE9uZURyaXZlIC0gXHU2QjY2XHU2QzQ5XHU1REU1XHU3QTBCXHU1OTI3XHU1QjY2XHU5MEFFXHU3NTM1XHU0RTBFXHU0RkUxXHU2MDZGXHU1REU1XHU3QTBCXHU1QjY2XHU5NjYyXFxcXFx1Njg0Q1x1OTc2MlxcXFxzZWNvbmRoYW5kLWhvbWVcXFxcYnVpbGRcXFxccGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcd2MxODVcXFxcT25lRHJpdmUgLSBcdTZCNjZcdTZDNDlcdTVERTVcdTdBMEJcdTU5MjdcdTVCNjZcdTkwQUVcdTc1MzVcdTRFMEVcdTRGRTFcdTYwNkZcdTVERTVcdTdBMEJcdTVCNjZcdTk2NjJcXFxcXHU2ODRDXHU5NzYyXFxcXHNlY29uZGhhbmQtaG9tZVxcXFxidWlsZFxcXFxwbHVnaW5zXFxcXGh0bWwudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3djMTg1L09uZURyaXZlJTIwLSUyMCVFNiVBRCVBNiVFNiVCMSU4OSVFNSVCNyVBNSVFNyVBOCU4QiVFNSVBNCVBNyVFNSVBRCVBNiVFOSU4MiVBRSVFNyU5NCVCNSVFNCVCOCU4RSVFNCVCRiVBMSVFNiU4MSVBRiVFNSVCNyVBNSVFNyVBOCU4QiVFNSVBRCVBNiVFOSU5OSVBMi8lRTYlQTElOEMlRTklOUQlQTIvc2Vjb25kaGFuZC1ob21lL2J1aWxkL3BsdWdpbnMvaHRtbC50c1wiO2ltcG9ydCB0eXBlIHsgUGx1Z2luT3B0aW9uIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgeyBjcmVhdGVIdG1sUGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4taHRtbCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh2aXRlRW52OiBJbXBvcnRNZXRhRW52KTogUGx1Z2luT3B0aW9uW10gPT4ge1xuICByZXR1cm4gY3JlYXRlSHRtbFBsdWdpbih7XG4gICAgbWluaWZ5OiB0cnVlLFxuICAgIGluamVjdDoge1xuICAgICAgZGF0YToge1xuICAgICAgICBhcHBOYW1lOiB2aXRlRW52LlZJVEVfQVBQX05BTUUsXG4gICAgICAgIGFwcFRpdGxlOiB2aXRlRW52LlZJVEVfQVBQX1RJVExFXG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHdjMTg1XFxcXE9uZURyaXZlIC0gXHU2QjY2XHU2QzQ5XHU1REU1XHU3QTBCXHU1OTI3XHU1QjY2XHU5MEFFXHU3NTM1XHU0RTBFXHU0RkUxXHU2MDZGXHU1REU1XHU3QTBCXHU1QjY2XHU5NjYyXFxcXFx1Njg0Q1x1OTc2MlxcXFxzZWNvbmRoYW5kLWhvbWVcXFxcYnVpbGRcXFxccGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcd2MxODVcXFxcT25lRHJpdmUgLSBcdTZCNjZcdTZDNDlcdTVERTVcdTdBMEJcdTU5MjdcdTVCNjZcdTkwQUVcdTc1MzVcdTRFMEVcdTRGRTFcdTYwNkZcdTVERTVcdTdBMEJcdTVCNjZcdTk2NjJcXFxcXHU2ODRDXHU5NzYyXFxcXHNlY29uZGhhbmQtaG9tZVxcXFxidWlsZFxcXFxwbHVnaW5zXFxcXHVucGx1Z2luLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy93YzE4NS9PbmVEcml2ZSUyMC0lMjAlRTYlQUQlQTYlRTYlQjElODklRTUlQjclQTUlRTclQTglOEIlRTUlQTQlQTclRTUlQUQlQTYlRTklODIlQUUlRTclOTQlQjUlRTQlQjglOEUlRTQlQkYlQTElRTYlODElQUYlRTUlQjclQTUlRTclQTglOEIlRTUlQUQlQTYlRTklOTklQTIvJUU2JUExJThDJUU5JTlEJUEyL3NlY29uZGhhbmQtaG9tZS9idWlsZC9wbHVnaW5zL3VucGx1Z2luLnRzXCI7aW1wb3J0IFZ1ZU1hY3JvcyBmcm9tICd1bnBsdWdpbi12dWUtbWFjcm9zL3ZpdGUnO1xuaW1wb3J0IEljb25zIGZyb20gJ3VucGx1Z2luLWljb25zL3ZpdGUnO1xuaW1wb3J0IEljb25zUmVzb2x2ZXIgZnJvbSAndW5wbHVnaW4taWNvbnMvcmVzb2x2ZXInO1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSc7XG5pbXBvcnQgeyBOYWl2ZVVpUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnO1xuaW1wb3J0IHsgRmlsZVN5c3RlbUljb25Mb2FkZXIgfSBmcm9tICd1bnBsdWdpbi1pY29ucy9sb2FkZXJzJztcbmltcG9ydCB7IGNyZWF0ZVN2Z0ljb25zUGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4tc3ZnLWljb25zJztcbmltcG9ydCB7IGdldFNyY1BhdGggfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVucGx1Z2luKHZpdGVFbnY6IEltcG9ydE1ldGFFbnYpIHtcbiAgY29uc3QgeyBWSVRFX0lDT05fUFJFRkZJWCwgVklURV9JQ09OX0xPQ0FMX1BSRUZGSVggfSA9IHZpdGVFbnY7XG5cbiAgY29uc3Qgc3JjUGF0aCA9IGdldFNyY1BhdGgoKTtcbiAgY29uc3QgbG9jYWxJY29uUGF0aCA9IGAke3NyY1BhdGh9L2Fzc2V0cy9zdmctaWNvbmA7XG5cbiAgLyoqIFx1NjcyQ1x1NTczMHN2Z1x1NTZGRVx1NjgwN1x1OTZDNlx1NTQwOFx1NTQwRFx1NzlGMCAqL1xuICBjb25zdCBjb2xsZWN0aW9uTmFtZSA9IFZJVEVfSUNPTl9MT0NBTF9QUkVGRklYLnJlcGxhY2UoYCR7VklURV9JQ09OX1BSRUZGSVh9LWAsICcnKTtcblxuICByZXR1cm4gW1xuICAgIFZ1ZU1hY3JvcygpLFxuICAgIEljb25zKHtcbiAgICAgIGNvbXBpbGVyOiAndnVlMycsXG4gICAgICBjdXN0b21Db2xsZWN0aW9uczoge1xuICAgICAgICBbY29sbGVjdGlvbk5hbWVdOiBGaWxlU3lzdGVtSWNvbkxvYWRlcihsb2NhbEljb25QYXRoKVxuICAgICAgfSxcbiAgICAgIHNjYWxlOiAxLFxuICAgICAgZGVmYXVsdENsYXNzOiAnaW5saW5lLWJsb2NrJ1xuICAgIH0pLFxuICAgIENvbXBvbmVudHMoe1xuICAgICAgZHRzOiAnc3JjL3R5cGluZ3MvY29tcG9uZW50cy5kLnRzJyxcbiAgICAgIHR5cGVzOiBbeyBmcm9tOiAndnVlLXJvdXRlcicsIG5hbWVzOiBbJ1JvdXRlckxpbmsnLCAnUm91dGVyVmlldyddIH1dLFxuICAgICAgcmVzb2x2ZXJzOiBbXG4gICAgICAgIE5haXZlVWlSZXNvbHZlcigpLFxuICAgICAgICBJY29uc1Jlc29sdmVyKHsgY3VzdG9tQ29sbGVjdGlvbnM6IFtjb2xsZWN0aW9uTmFtZV0sIGNvbXBvbmVudFByZWZpeDogVklURV9JQ09OX1BSRUZGSVggfSlcbiAgICAgIF1cbiAgICB9KSxcbiAgICBjcmVhdGVTdmdJY29uc1BsdWdpbih7XG4gICAgICBpY29uRGlyczogW2xvY2FsSWNvblBhdGhdLFxuICAgICAgc3ltYm9sSWQ6IGAke1ZJVEVfSUNPTl9MT0NBTF9QUkVGRklYfS1bZGlyXS1bbmFtZV1gLFxuICAgICAgaW5qZWN0OiAnYm9keS1sYXN0JyxcbiAgICAgIGN1c3RvbURvbUlkOiAnX19TVkdfSUNPTl9MT0NBTF9fJ1xuICAgIH0pXG4gIF07XG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHdjMTg1XFxcXE9uZURyaXZlIC0gXHU2QjY2XHU2QzQ5XHU1REU1XHU3QTBCXHU1OTI3XHU1QjY2XHU5MEFFXHU3NTM1XHU0RTBFXHU0RkUxXHU2MDZGXHU1REU1XHU3QTBCXHU1QjY2XHU5NjYyXFxcXFx1Njg0Q1x1OTc2MlxcXFxzZWNvbmRoYW5kLWhvbWVcXFxcYnVpbGRcXFxcdXRpbHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHdjMTg1XFxcXE9uZURyaXZlIC0gXHU2QjY2XHU2QzQ5XHU1REU1XHU3QTBCXHU1OTI3XHU1QjY2XHU5MEFFXHU3NTM1XHU0RTBFXHU0RkUxXHU2MDZGXHU1REU1XHU3QTBCXHU1QjY2XHU5NjYyXFxcXFx1Njg0Q1x1OTc2MlxcXFxzZWNvbmRoYW5kLWhvbWVcXFxcYnVpbGRcXFxcdXRpbHNcXFxcaW5kZXgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3djMTg1L09uZURyaXZlJTIwLSUyMCVFNiVBRCVBNiVFNiVCMSU4OSVFNSVCNyVBNSVFNyVBOCU4QiVFNSVBNCVBNyVFNSVBRCVBNiVFOSU4MiVBRSVFNyU5NCVCNSVFNCVCOCU4RSVFNCVCRiVBMSVFNiU4MSVBRiVFNSVCNyVBNSVFNyVBOCU4QiVFNSVBRCVBNiVFOSU5OSVBMi8lRTYlQTElOEMlRTklOUQlQTIvc2Vjb25kaGFuZC1ob21lL2J1aWxkL3V0aWxzL2luZGV4LnRzXCI7aW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbi8qKlxuICogXHU4M0I3XHU1M0Q2XHU5ODc5XHU3NkVFXHU2ODM5XHU4REVGXHU1Rjg0XG4gKiBAZGVzY3JpdGlvbiBcdTY3MkJcdTVDM0VcdTRFMERcdTVFMjZcdTY1OUNcdTY3NjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJvb3RQYXRoKCkge1xuICByZXR1cm4gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCkpO1xufVxuXG4vKipcbiAqIFx1ODNCN1x1NTNENlx1OTg3OVx1NzZFRXNyY1x1OERFRlx1NUY4NFxuICogQHBhcmFtIHNyY05hbWUgLSBzcmNcdTc2RUVcdTVGNTVcdTU0MERcdTc5RjAoXHU5RUQ4XHU4QkE0OiBcInNyY1wiKVxuICogQGRlc2NyaXRpb24gXHU2NzJCXHU1QzNFXHU0RTBEXHU1RTI2XHU2NTlDXHU2NzYwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTcmNQYXRoKHNyY05hbWUgPSAnc3JjJykge1xuICBjb25zdCByb290UGF0aCA9IGdldFJvb3RQYXRoKCk7XG5cbiAgcmV0dXJuIGAke3Jvb3RQYXRofS8ke3NyY05hbWV9YDtcbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcd2MxODVcXFxcT25lRHJpdmUgLSBcdTZCNjZcdTZDNDlcdTVERTVcdTdBMEJcdTU5MjdcdTVCNjZcdTkwQUVcdTc1MzVcdTRFMEVcdTRGRTFcdTYwNkZcdTVERTVcdTdBMEJcdTVCNjZcdTk2NjJcXFxcXHU2ODRDXHU5NzYyXFxcXHNlY29uZGhhbmQtaG9tZVxcXFxidWlsZFxcXFxwbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx3YzE4NVxcXFxPbmVEcml2ZSAtIFx1NkI2Nlx1NkM0OVx1NURFNVx1N0EwQlx1NTkyN1x1NUI2Nlx1OTBBRVx1NzUzNVx1NEUwRVx1NEZFMVx1NjA2Rlx1NURFNVx1N0EwQlx1NUI2Nlx1OTY2MlxcXFxcdTY4NENcdTk3NjJcXFxcc2Vjb25kaGFuZC1ob21lXFxcXGJ1aWxkXFxcXHBsdWdpbnNcXFxcdmlzdWFsaXplci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvd2MxODUvT25lRHJpdmUlMjAtJTIwJUU2JUFEJUE2JUU2JUIxJTg5JUU1JUI3JUE1JUU3JUE4JThCJUU1JUE0JUE3JUU1JUFEJUE2JUU5JTgyJUFFJUU3JTk0JUI1JUU0JUI4JThFJUU0JUJGJUExJUU2JTgxJUFGJUU1JUI3JUE1JUU3JUE4JThCJUU1JUFEJUE2JUU5JTk5JUEyLyVFNiVBMSU4QyVFOSU5RCVBMi9zZWNvbmRoYW5kLWhvbWUvYnVpbGQvcGx1Z2lucy92aXN1YWxpemVyLnRzXCI7aW1wb3J0IHsgdmlzdWFsaXplciB9IGZyb20gJ3JvbGx1cC1wbHVnaW4tdmlzdWFsaXplcic7XG5cbmV4cG9ydCBkZWZhdWx0IHZpc3VhbGl6ZXIoe1xuICBnemlwU2l6ZTogdHJ1ZSxcbiAgYnJvdGxpU2l6ZTogdHJ1ZSxcbiAgb3BlbjogdHJ1ZVxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHdjMTg1XFxcXE9uZURyaXZlIC0gXHU2QjY2XHU2QzQ5XHU1REU1XHU3QTBCXHU1OTI3XHU1QjY2XHU5MEFFXHU3NTM1XHU0RTBFXHU0RkUxXHU2MDZGXHU1REU1XHU3QTBCXHU1QjY2XHU5NjYyXFxcXFx1Njg0Q1x1OTc2MlxcXFxzZWNvbmRoYW5kLWhvbWVcXFxcYnVpbGRcXFxccGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcd2MxODVcXFxcT25lRHJpdmUgLSBcdTZCNjZcdTZDNDlcdTVERTVcdTdBMEJcdTU5MjdcdTVCNjZcdTkwQUVcdTc1MzVcdTRFMEVcdTRGRTFcdTYwNkZcdTVERTVcdTdBMEJcdTVCNjZcdTk2NjJcXFxcXHU2ODRDXHU5NzYyXFxcXHNlY29uZGhhbmQtaG9tZVxcXFxidWlsZFxcXFxwbHVnaW5zXFxcXGNvbXByZXNzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy93YzE4NS9PbmVEcml2ZSUyMC0lMjAlRTYlQUQlQTYlRTYlQjElODklRTUlQjclQTUlRTclQTglOEIlRTUlQTQlQTclRTUlQUQlQTYlRTklODIlQUUlRTclOTQlQjUlRTQlQjglOEUlRTQlQkYlQTElRTYlODElQUYlRTUlQjclQTUlRTclQTglOEIlRTUlQUQlQTYlRTklOTklQTIvJUU2JUExJThDJUU5JTlEJUEyL3NlY29uZGhhbmQtaG9tZS9idWlsZC9wbHVnaW5zL2NvbXByZXNzLnRzXCI7aW1wb3J0IFZpdGVDb21wcmVzc2lvbiBmcm9tICd2aXRlLXBsdWdpbi1jb21wcmVzc2lvbic7XG5cbmV4cG9ydCBkZWZhdWx0ICh2aXRlRW52OiBJbXBvcnRNZXRhRW52KSA9PiB7XG4gIGNvbnN0IHsgVklURV9DT01QUkVTU19UWVBFID0gJ2d6aXAnIH0gPSB2aXRlRW52O1xuICByZXR1cm4gVml0ZUNvbXByZXNzaW9uKHsgYWxnb3JpdGhtOiBWSVRFX0NPTVBSRVNTX1RZUEUgfSk7XG59O1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx3YzE4NVxcXFxPbmVEcml2ZSAtIFx1NkI2Nlx1NkM0OVx1NURFNVx1N0EwQlx1NTkyN1x1NUI2Nlx1OTBBRVx1NzUzNVx1NEUwRVx1NEZFMVx1NjA2Rlx1NURFNVx1N0EwQlx1NUI2Nlx1OTY2MlxcXFxcdTY4NENcdTk3NjJcXFxcc2Vjb25kaGFuZC1ob21lXFxcXGJ1aWxkXFxcXHBsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHdjMTg1XFxcXE9uZURyaXZlIC0gXHU2QjY2XHU2QzQ5XHU1REU1XHU3QTBCXHU1OTI3XHU1QjY2XHU5MEFFXHU3NTM1XHU0RTBFXHU0RkUxXHU2MDZGXHU1REU1XHU3QTBCXHU1QjY2XHU5NjYyXFxcXFx1Njg0Q1x1OTc2MlxcXFxzZWNvbmRoYW5kLWhvbWVcXFxcYnVpbGRcXFxccGx1Z2luc1xcXFxwd2EudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3djMTg1L09uZURyaXZlJTIwLSUyMCVFNiVBRCVBNiVFNiVCMSU4OSVFNSVCNyVBNSVFNyVBOCU4QiVFNSVBNCVBNyVFNSVBRCVBNiVFOSU4MiVBRSVFNyU5NCVCNSVFNCVCOCU4RSVFNCVCRiVBMSVFNiU4MSVBRiVFNSVCNyVBNSVFNyVBOCU4QiVFNSVBRCVBNiVFOSU5OSVBMi8lRTYlQTElOEMlRTklOUQlQTIvc2Vjb25kaGFuZC1ob21lL2J1aWxkL3BsdWdpbnMvcHdhLnRzXCI7aW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldHVwVml0ZVB3YSgpIHtcbiAgcmV0dXJuIFZpdGVQV0Eoe1xuICAgIHJlZ2lzdGVyVHlwZTogJ2F1dG9VcGRhdGUnLFxuICAgIGluY2x1ZGVBc3NldHM6IFsnZmF2aWNvbi5pY28nXSxcbiAgICBtYW5pZmVzdDoge1xuICAgICAgbmFtZTogJ1NveWJlYW5BZG1pbicsXG4gICAgICBzaG9ydF9uYW1lOiAnU295YmVhbkFkbWluJyxcbiAgICAgIHRoZW1lX2NvbG9yOiAnI2ZmZicsXG4gICAgICBpY29uczogW1xuICAgICAgICB7XG4gICAgICAgICAgc3JjOiAnL2xvZ28ucG5nJyxcbiAgICAgICAgICBzaXplczogJzE5MngxOTInLFxuICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzcmM6ICcvbG9nby5wbmcnLFxuICAgICAgICAgIHNpemVzOiAnNTEyeDUxMicsXG4gICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNyYzogJy9sb2dvLnBuZycsXG4gICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcbiAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICBwdXJwb3NlOiAnYW55IG1hc2thYmxlJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9KTtcbn1cbi8vIFx1OEZEOVx1NkJCNVx1NEVFM1x1NzgwMVx1NjYyRlx1NEUwMFx1NEUyQVx1NzUyOFx1NEU4RVx1OTE0RFx1N0Y2RSBQV0EgXHU3Njg0XHU1MUZEXHU2NTcwXHVGRjBDXHU1QjgzXHU0RjdGXHU3NTI4XHU0RTg2IHZpdGUtcGx1Z2luLXB3YSBcdTYzRDJcdTRFRjZcdTMwMDJcdTk5OTZcdTUxNDhcdUZGMENcdTVCODNcdTRGN0ZcdTc1MjggaW1wb3J0IFx1OEJFRFx1NTNFNVx1NUYxNVx1NTE2NVx1NEU4NiBWaXRlUFdBIFx1NTFGRFx1NjU3MFx1RkYwQ1x1NzEzNlx1NTQwRVx1NUI5QVx1NEU0OVx1NEU4Nlx1NEUwMFx1NEUyQVx1NTQwRFx1NEUzQSBzZXR1cFZpdGVQd2EgXHU3Njg0XHU1MUZEXHU2NTcwXHVGRjBDXHU3NTI4XHU0RThFXHU5MTREXHU3RjZFIFBXQVx1MzAwMlxuXG4vLyBcdTU3Mjggc2V0dXBWaXRlUHdhIFx1NTFGRFx1NjU3MFx1NEUyRFx1RkYwQ1x1NUI4M1x1OEMwM1x1NzUyOFx1NEU4NiBWaXRlUFdBIFx1NTFGRFx1NjU3MFx1RkYwQ1x1NUU3Nlx1NEYyMFx1NTE2NVx1NEU4Nlx1NEUwMFx1NEUyQVx1NTMwNVx1NTQyQlx1OTE0RFx1N0Y2RVx1NEZFMVx1NjA2Rlx1NzY4NFx1NUJGOVx1OEM2MVx1NEY1Q1x1NEUzQVx1NTNDMlx1NjU3MFx1MzAwMlx1OEZEOVx1NEUyQVx1NUJGOVx1OEM2MVx1NTMwNVx1NTQyQlx1NEU4NiByZWdpc3RlclR5cGVcdTMwMDFpbmNsdWRlQXNzZXRzIFx1NTQ4QyBtYW5pZmVzdCBcdTdCNDlcdTVDNUVcdTYwMjdcdUZGMENcdTc1MjhcdTRFOEVcdTkxNERcdTdGNkUgUFdBIFx1NzY4NFx1ODg0Q1x1NEUzQVx1NTQ4Q1x1NTkxNlx1ODlDMlx1MzAwMlxuXG4vLyBcdTUxNzZcdTRFMkRcdUZGMENyZWdpc3RlclR5cGUgXHU1QzVFXHU2MDI3XHU2MzA3XHU1QjlBXHU0RTg2IFBXQSBcdTc2ODRcdTZDRThcdTUxOENcdTY1QjlcdTVGMEZcdUZGMENcdThGRDlcdTkxQ0NcdTRGN0ZcdTc1MjhcdTRFODYgJ2F1dG9VcGRhdGUnXHVGRjBDXHU4ODY4XHU3OTNBXHU4MUVBXHU1MkE4XHU2NkY0XHU2NUIwXHUzMDAyaW5jbHVkZUFzc2V0cyBcdTVDNUVcdTYwMjdcdTYzMDdcdTVCOUFcdTRFODZcdTk3MDBcdTg5ODFcdTUzMDVcdTU0MkJcdTU3MjggUFdBIFx1NEUyRFx1NzY4NFx1OTc1OVx1NjAwMVx1OEQ0NFx1NkU5MFx1RkYwQ1x1OEZEOVx1OTFDQ1x1NTMwNVx1NjJFQ1x1NEU4NiBmYXZpY29uLmljbyBcdTY1ODdcdTRFRjZcdTMwMDJcblxuLy8gbWFuaWZlc3QgXHU1QzVFXHU2MDI3XHU2MzA3XHU1QjlBXHU0RTg2IFBXQSBcdTc2ODQgbWFuaWZlc3QgXHU2NTg3XHU0RUY2XHVGRjBDXHU1MzA1XHU2MkVDXHU0RTg2XHU1RTk0XHU3NTI4XHU3Njg0XHU1NDBEXHU3OUYwXHUzMDAxXHU3N0VEXHU1NDBEXHU3OUYwXHUzMDAxXHU0RTNCXHU5ODk4XHU5ODlDXHU4MjcyXHU1NDhDXHU1NkZFXHU2ODA3XHU3QjQ5XHU0RkUxXHU2MDZGXHUzMDAyXHU1MTc2XHU0RTJEXHVGRjBDaWNvbnMgXHU1QzVFXHU2MDI3XHU2MzA3XHU1QjlBXHU0RTg2XHU1RTk0XHU3NTI4XHU3Njg0XHU1NkZFXHU2ODA3XHVGRjBDXHU1MzA1XHU2MkVDXHU0RTg2XHU0RTBEXHU1NDBDXHU1QzNBXHU1QkY4XHU1NDhDXHU3QzdCXHU1NzhCXHU3Njg0XHU1NkZFXHU2ODA3XHUzMDAyXG5cbi8vIFx1OEZEOVx1NjgzN1x1RkYwQ1x1NjIxMVx1NEVFQ1x1NUMzMVx1NjIxMFx1NTI5Rlx1NTczMFx1OTE0RFx1N0Y2RVx1NEU4NiBQV0FcdTMwMDJcdTU5ODJcdTY3OUNcdTRGNjBcdTYwRjNcdTg5ODFcdTRFODZcdTg5RTNcdTY2RjRcdTU5MUFcdTUxNzNcdTRFOEUgdml0ZS1wbHVnaW4tcHdhIFx1NzY4NFx1NzdFNVx1OEJDNlx1RkYwQ1x1NEY2MFx1NTNFRlx1NEVFNVx1NTNDMlx1ODAwMyB2aXRlLXBsdWdpbi1wd2EgXHU3Njg0XHU1Qjk4XHU2NUI5XHU2NTg3XHU2ODYzXHUzMDAydml0ZS1wbHVnaW4tcHdhIFx1NzY4NFx1NUI5OFx1NjVCOVx1NjU4N1x1Njg2M1x1NjNEMFx1NEY5Qlx1NEU4Nlx1OTc1RVx1NUUzOFx1OEJFNlx1N0VDNlx1NzY4NFx1NEVDQlx1N0VDRFx1NTQ4Q1x1NzkzQVx1NEY4Qlx1RkYwQ1x1NTNFRlx1NEVFNVx1NUUyRVx1NTJBOVx1NEY2MFx1NjZGNFx1NTk3RFx1NTczMFx1NzQwNlx1ODlFMyB2aXRlLXBsdWdpbi1wd2EgXHU3Njg0XHU1MzlGXHU3NDA2XHU1NDhDXHU0RjdGXHU3NTI4XHU2NUI5XHU2Q0Q1XHUzMDAyXG5cbi8vIFx1NUUwQ1x1NjcxQlx1OEZEOVx1NEU5Qlx1NEZFMVx1NjA2Rlx1ODBGRFx1NTkxRlx1NUUyRVx1NTJBOVx1NTIzMFx1NEY2MFx1MzAwMlx1NTk4Mlx1Njc5Q1x1NEY2MFx1NjcwOVx1NEVGQlx1NEY1NVx1NTE3Nlx1NEVENlx1OTVFRVx1OTg5OFx1RkYwQ1x1OEJGN1x1OTY4Rlx1NjVGNlx1OTVFRVx1NjIxMVx1MzAwMiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcd2MxODVcXFxcT25lRHJpdmUgLSBcdTZCNjZcdTZDNDlcdTVERTVcdTdBMEJcdTU5MjdcdTVCNjZcdTkwQUVcdTc1MzVcdTRFMEVcdTRGRTFcdTYwNkZcdTVERTVcdTdBMEJcdTVCNjZcdTk2NjJcXFxcXHU2ODRDXHU5NzYyXFxcXHNlY29uZGhhbmQtaG9tZVxcXFxidWlsZFxcXFxjb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHdjMTg1XFxcXE9uZURyaXZlIC0gXHU2QjY2XHU2QzQ5XHU1REU1XHU3QTBCXHU1OTI3XHU1QjY2XHU5MEFFXHU3NTM1XHU0RTBFXHU0RkUxXHU2MDZGXHU1REU1XHU3QTBCXHU1QjY2XHU5NjYyXFxcXFx1Njg0Q1x1OTc2MlxcXFxzZWNvbmRoYW5kLWhvbWVcXFxcYnVpbGRcXFxcY29uZmlnXFxcXGRlZmluZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvd2MxODUvT25lRHJpdmUlMjAtJTIwJUU2JUFEJUE2JUU2JUIxJTg5JUU1JUI3JUE1JUU3JUE4JThCJUU1JUE0JUE3JUU1JUFEJUE2JUU5JTgyJUFFJUU3JTk0JUI1JUU0JUI4JThFJUU0JUJGJUExJUU2JTgxJUFGJUU1JUI3JUE1JUU3JUE4JThCJUU1JUFEJUE2JUU5JTk5JUEyLyVFNiVBMSU4QyVFOSU5RCVBMi9zZWNvbmRoYW5kLWhvbWUvYnVpbGQvY29uZmlnL2RlZmluZS50c1wiO2ltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcblxuLyoqIFx1OTg3OVx1NzZFRVx1Njc4NFx1NUVGQVx1NjVGNlx1OTVGNCAqL1xuY29uc3QgUFJPSkVDVF9CVUlMRF9USU1FID0gSlNPTi5zdHJpbmdpZnkoXG5cdGRheWpzKCkuZm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbTpzc1wiKVxuKTtcblxuZXhwb3J0IGNvbnN0IHZpdGVEZWZpbmUgPSB7XG5cdFBST0pFQ1RfQlVJTERfVElNRSxcbn07XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHdjMTg1XFxcXE9uZURyaXZlIC0gXHU2QjY2XHU2QzQ5XHU1REU1XHU3QTBCXHU1OTI3XHU1QjY2XHU5MEFFXHU3NTM1XHU0RTBFXHU0RkUxXHU2MDZGXHU1REU1XHU3QTBCXHU1QjY2XHU5NjYyXFxcXFx1Njg0Q1x1OTc2MlxcXFxzZWNvbmRoYW5kLWhvbWVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHdjMTg1XFxcXE9uZURyaXZlIC0gXHU2QjY2XHU2QzQ5XHU1REU1XHU3QTBCXHU1OTI3XHU1QjY2XHU5MEFFXHU3NTM1XHU0RTBFXHU0RkUxXHU2MDZGXHU1REU1XHU3QTBCXHU1QjY2XHU5NjYyXFxcXFx1Njg0Q1x1OTc2MlxcXFxzZWNvbmRoYW5kLWhvbWVcXFxcLmVudi1jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3djMTg1L09uZURyaXZlJTIwLSUyMCVFNiVBRCVBNiVFNiVCMSU4OSVFNSVCNyVBNSVFNyVBOCU4QiVFNSVBNCVBNyVFNSVBRCVBNiVFOSU4MiVBRSVFNyU5NCVCNSVFNCVCOCU4RSVFNCVCRiVBMSVFNiU4MSVBRiVFNSVCNyVBNSVFNyVBOCU4QiVFNSVBRCVBNiVFOSU5OSVBMi8lRTYlQTElOEMlRTklOUQlQTIvc2Vjb25kaGFuZC1ob21lLy5lbnYtY29uZmlnLnRzXCI7LyoqIFx1OEJGN1x1NkM0Mlx1NjcwRFx1NTJBMVx1NzY4NFx1NzNBRlx1NTg4M1x1OTE0RFx1N0Y2RSAqL1xudHlwZSBTZXJ2aWNlRW52ID0gUmVjb3JkPFNlcnZpY2VFbnZUeXBlLCBTZXJ2aWNlRW52Q29uZmlnPjtcblxuLyoqIFx1NEUwRFx1NTQwQ1x1OEJGN1x1NkM0Mlx1NjcwRFx1NTJBMVx1NzY4NFx1NzNBRlx1NTg4M1x1OTE0RFx1N0Y2RSAqL1xuY29uc3Qgc2VydmljZUVudjogU2VydmljZUVudiA9IHtcblx0ZGV2OiB7XG5cdFx0dXJsOiBcImh0dHA6Ly8xMjcuMC4wLjE6MzA0MC9hcGlcIixcblx0XHR1cmxQYXR0ZXJuOiBcImh0dHA6Ly8xMjcuMC4wLjE6MzA0MC9hcGlcIixcblx0XHRzZWNvbmRVcmw6IFwiaHR0cDovLzEyNy4wLjAuMTozMDQwL2FwaVwiLFxuXHRcdHNlY29uZFVybFBhdHRlcm46IFwiL3NlY29uZC11cmwtcGF0dGVyblwiLFxuXHR9LFxuXHR0ZXN0OiB7XG5cdFx0dXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MFwiLFxuXHRcdHVybFBhdHRlcm46IFwiL3VybC1wYXR0ZXJuXCIsXG5cdFx0c2Vjb25kVXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MVwiLFxuXHRcdHNlY29uZFVybFBhdHRlcm46IFwiL3NlY29uZC11cmwtcGF0dGVyblwiLFxuXHR9LFxuXHRwcm9kOiB7XG5cdFx0dXJsOiBcImh0dHA6Ly8xMTQuMTMyLjE5OC4yOjMwMjAvYXBpXCIsXG5cdFx0dXJsUGF0dGVybjogXCIvdXJsLXBhdHRlcm5cIixcblx0XHRzZWNvbmRVcmw6IFwiaHR0cDovLzExNC4xMzIuMTk4LjI6MzAyMC9hcGlcIixcblx0XHRzZWNvbmRVcmxQYXR0ZXJuOiBcIi9zZWNvbmQtdXJsLXBhdHRlcm5cIixcblx0fSxcbn07XG5cbi8qKlxuICogXHU4M0I3XHU1M0Q2XHU1RjUzXHU1MjREXHU3M0FGXHU1ODgzXHU2QTIxXHU1RjBGXHU0RTBCXHU3Njg0XHU4QkY3XHU2QzQyXHU2NzBEXHU1MkExXHU3Njg0XHU5MTREXHU3RjZFXG4gKiBAcGFyYW0gZW52IFx1NzNBRlx1NTg4M1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VydmljZUVudkNvbmZpZyhlbnY6IEltcG9ydE1ldGFFbnYpIHtcbiAgY29uc3QgeyBWSVRFX1NFUlZJQ0VfRU5WID0gJ2RldicgfSA9IGVudjtcblxuICBjb25zdCBjb25maWcgPSBzZXJ2aWNlRW52W1ZJVEVfU0VSVklDRV9FTlZdO1xuXG4gIHJldHVybiBjb25maWc7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQThmLFNBQVMsY0FBYyxlQUFlOzs7QUNDcGlCLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFFbkIsT0FBTyxjQUFjOzs7QUNIckIsU0FBUyx3QkFBd0I7OztBQ0RxZ0IsT0FBTyxlQUFlO0FBQzVqQixPQUFPLFdBQVc7QUFDbEIsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUyx1QkFBdUI7QUFDaEMsU0FBUyw0QkFBNEI7QUFDckMsU0FBUyw0QkFBNEI7OztBQ05xZixPQUFPLFVBQVU7QUFNcGlCLFNBQVMsY0FBYztBQUM1QixTQUFPLEtBQUssUUFBUSxRQUFRLElBQUksQ0FBQztBQUNuQztBQU9PLFNBQVMsV0FBVyxVQUFVLE9BQU87QUFDMUMsUUFBTSxXQUFXLFlBQVk7QUFFN0IsU0FBTyxHQUFHLFlBQVk7QUFDeEI7OztBRFZlLFNBQVIsU0FBMEIsU0FBd0I7QUFDdkQsUUFBTSxFQUFFLG1CQUFtQix3QkFBd0IsSUFBSTtBQUV2RCxRQUFNLFVBQVUsV0FBVztBQUMzQixRQUFNLGdCQUFnQixHQUFHO0FBR3pCLFFBQU0saUJBQWlCLHdCQUF3QixRQUFRLEdBQUcsc0JBQXNCLEVBQUU7QUFFbEYsU0FBTztBQUFBLElBQ0wsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLE1BQ0osVUFBVTtBQUFBLE1BQ1YsbUJBQW1CO0FBQUEsUUFDakIsQ0FBQyxjQUFjLEdBQUcscUJBQXFCLGFBQWE7QUFBQSxNQUN0RDtBQUFBLE1BQ0EsT0FBTztBQUFBLE1BQ1AsY0FBYztBQUFBLElBQ2hCLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxNQUNULEtBQUs7QUFBQSxNQUNMLE9BQU8sQ0FBQyxFQUFFLE1BQU0sY0FBYyxPQUFPLENBQUMsY0FBYyxZQUFZLEVBQUUsQ0FBQztBQUFBLE1BQ25FLFdBQVc7QUFBQSxRQUNULGdCQUFnQjtBQUFBLFFBQ2hCLGNBQWMsRUFBRSxtQkFBbUIsQ0FBQyxjQUFjLEdBQUcsaUJBQWlCLGtCQUFrQixDQUFDO0FBQUEsTUFDM0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELHFCQUFxQjtBQUFBLE1BQ25CLFVBQVUsQ0FBQyxhQUFhO0FBQUEsTUFDeEIsVUFBVSxHQUFHO0FBQUEsTUFDYixRQUFRO0FBQUEsTUFDUixhQUFhO0FBQUEsSUFDZixDQUFDO0FBQUEsRUFDSDtBQUNGOzs7QUUzQzBpQixTQUFTLGtCQUFrQjtBQUVya0IsSUFBTyxxQkFBUSxXQUFXO0FBQUEsRUFDeEIsVUFBVTtBQUFBLEVBQ1YsWUFBWTtBQUFBLEVBQ1osTUFBTTtBQUNSLENBQUM7OztBQ05xaUIsT0FBTyxxQkFBcUI7OztBQ0F0QyxTQUFTLGVBQWU7OztBQ0FyQixPQUFPLFdBQVc7QUFHampCLElBQU0scUJBQXFCLEtBQUs7QUFBQSxFQUMvQixNQUFNLEVBQUUsT0FBTyxxQkFBcUI7QUFDckM7QUFFTyxJQUFNLGFBQWE7QUFBQSxFQUN6QjtBQUNEOzs7QUNMQSxJQUFNLGFBQXlCO0FBQUEsRUFDOUIsS0FBSztBQUFBLElBQ0osS0FBSztBQUFBLElBQ0wsWUFBWTtBQUFBLElBQ1osV0FBVztBQUFBLElBQ1gsa0JBQWtCO0FBQUEsRUFDbkI7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNMLEtBQUs7QUFBQSxJQUNMLFlBQVk7QUFBQSxJQUNaLFdBQVc7QUFBQSxJQUNYLGtCQUFrQjtBQUFBLEVBQ25CO0FBQUEsRUFDQSxNQUFNO0FBQUEsSUFDTCxLQUFLO0FBQUEsSUFDTCxZQUFZO0FBQUEsSUFDWixXQUFXO0FBQUEsSUFDWCxrQkFBa0I7QUFBQSxFQUNuQjtBQUNEO0FBTU8sU0FBUyxvQkFBb0IsS0FBb0I7QUFDdEQsUUFBTSxFQUFFLG1CQUFtQixNQUFNLElBQUk7QUFFckMsUUFBTSxTQUFTLFdBQVcsZ0JBQWdCO0FBRTFDLFNBQU87QUFDVDs7O0FUMUJBLE9BQU9BLFVBQVM7QUFDaEIsT0FBT0MsYUFBWTtBQUNuQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPQyxpQkFBZ0I7QUFDdkIsT0FBTyxtQkFBbUI7QUFDMUI7QUFBQSxFQUNFO0FBQUEsRUFDQSxtQkFBQUM7QUFBQSxPQUNLO0FBRVAsT0FBTyxZQUFZO0FBQ25CLFNBQVMsV0FBVyxtQkFBbUIsbUJBQW1CO0FBSTFELElBQU8sc0JBQVEsYUFBYSxlQUFhO0FBQ3JDLFFBQU0sVUFBVSxRQUFRLFVBQVUsTUFBTSxRQUFRLElBQUksQ0FBQztBQUN2RCxRQUFNLFdBQVcsWUFBWTtBQUM3QixRQUFNLFVBQVUsV0FBVztBQUMzQixRQUFNLGNBQWMsUUFBUSxvQkFBb0I7QUFDaEQsUUFBTSxZQUFZLG9CQUFvQixPQUFPO0FBRTdDLFNBQU07QUFBQSxJQUNKLFNBQVM7QUFBQTtBQUFBLE1BRVAsR0FBRyxTQUFTLE9BQU87QUFBQSxNQUNyQkMsS0FBSTtBQUFBLE1BQ0pDLFFBQU87QUFBQSxNQUNQLGNBQWM7QUFBQSxNQUNkLFdBQVc7QUFBQSxRQUNULFNBQVM7QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFlBQ0UsWUFBWTtBQUFBLGNBQ1Y7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztBQUFBLE1BQ25DLENBQUM7QUFBQSxNQUNEQyxZQUFXO0FBQUEsUUFDVCxXQUFXLENBQUMsb0JBQW9CLEdBQUdDLGlCQUFnQixDQUFDO0FBQUEsTUFDdEQsQ0FBQztBQUFBLE1BQ0QsT0FBTztBQUFBLFFBQ0wsU0FBUyxDQUFDLFVBQVUsR0FBRyxrQkFBa0IsR0FBRyxZQUFZLENBQUM7QUFBQSxNQUMzRCxDQUFDO0FBQUEsSUFDSDtBQUFBLElBQ0EsUUFBUTtBQUFBLElBQ1IsTUFBTTtBQUFBO0FBQUE7QUFBQSxJQUVOLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMLEtBQUs7QUFBQSxRQUNMLEtBQUs7QUFBQSxRQUNMLFlBQVk7QUFBQSxNQUNkO0FBQUEsSUFDRjtBQUFBLElBQ0EsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLE1BQ04sS0FBSztBQUFBLFFBQ0gsTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU8sQ0FBQztBQUFBLElBQ1Y7QUFBQSxFQUdBO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsidnVlIiwgInZ1ZUpzeCIsICJDb21wb25lbnRzIiwgIk5haXZlVWlSZXNvbHZlciIsICJ2dWUiLCAidnVlSnN4IiwgIkNvbXBvbmVudHMiLCAiTmFpdmVVaVJlc29sdmVyIl0KfQo=