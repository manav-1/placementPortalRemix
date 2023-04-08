var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// empty-module:~/components/dashboard/editor.client
var require_editor = __commonJS({
  "empty-module:~/components/dashboard/editor.client"(exports, module2) {
    module2.exports = {};
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server"), import_react = require("@remix-run/react"), import_remix = require("@mantine/remix"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), server = (0, import_remix.createStylesServer)();
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 15,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response(`<!DOCTYPE html>${(0, import_remix.injectStyles)(markup, server)}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react"), import_core = require("@mantine/core"), import_remix2 = require("@mantine/remix"), import_hooks = require("@mantine/hooks");

// app/theme/index.ts
var theme = {
  fontFamily: "Nunito Sans, MonoLisa"
};

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), meta = () => [
  {
    charset: "utf-8",
    title: "Placement Portal",
    viewport: "width=device-width,initial-scale=1"
  }
], links = () => [
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"
  }
];
(0, import_core.createEmotionCache)({ key: "mantine" });
function App() {
  let [colorScheme, setColorScheme] = (0, import_hooks.useLocalStorage)({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: !0
  }), toggleColorScheme = (value) => setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return (0, import_hooks.useHotkeys)([["mod+J", () => toggleColorScheme()]]), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    import_core.ColorSchemeProvider,
    {
      colorScheme,
      toggleColorScheme,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        import_core.MantineProvider,
        {
          theme: { colorScheme, ...theme },
          withGlobalStyles: !0,
          withNormalizeCSS: !0,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix2.StylesPlaceholder, {}, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 63,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 64,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 65,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/root.tsx",
              lineNumber: 62,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 68,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 69,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 70,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 71,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/root.tsx",
              lineNumber: 67,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/root.tsx",
            lineNumber: 61,
            columnNumber: 9
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 56,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/root.tsx",
      lineNumber: 52,
      columnNumber: 5
    },
    this
  );
}

// app/routes/dashboard._dashboard.application-tracker.tsx
var dashboard_dashboard_application_tracker_exports = {};
__export(dashboard_dashboard_application_tracker_exports, {
  default: () => AddOpportunity
});

// app/components/dashboard/applied-opportunities.tsx
var import_icons_react = require("@tabler/icons-react"), import_core2 = require("@mantine/core"), import_react3 = require("@remix-run/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), useStyles = (0, import_core2.createStyles)((theme2) => ({
  card: {
    position: "relative",
    backgroundColor: theme2.colorScheme === "dark" ? theme2.colors.dark[7] : theme2.white
  },
  rating: {
    position: "absolute",
    top: theme2.spacing.xs,
    width: "95%"
  },
  title: {
    display: "block",
    marginTop: theme2.spacing.md,
    marginBottom: (0, import_core2.rem)(5)
  },
  linkIcon: {
    ref: (0, import_core2.getStylesRef)("icon"),
    color: theme2.colorScheme === "dark" ? theme2.colors.dark[2] : theme2.colors.gray[6],
    "&, &:hover": {
      color: theme2.fn.variant({ variant: "light", color: theme2.primaryColor }).color,
      [`& .${(0, import_core2.getStylesRef)("icon")}`]: {
        color: theme2.fn.variant({
          variant: "light",
          color: theme2.primaryColor
        }).color
      }
    }
  },
  action: {
    backgroundColor: theme2.colorScheme === "dark" ? theme2.colors.dark[6] : theme2.colors.gray[0],
    ...theme2.fn.hover({
      backgroundColor: theme2.colorScheme === "dark" ? theme2.colors.dark[5] : theme2.colors.gray[1]
    })
  },
  footer: {
    marginTop: theme2.spacing.md
  }
}));
function OpportunityCard({
  className,
  companyImage,
  url,
  title,
  description,
  companyName,
  deadline,
  jd,
  linkedin,
  name,
  type,
  ...others
}) {
  let { classes, cx } = useStyles();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Grid.Col, { xs: 12, md: 6, lg: 4, xl: 3, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    import_core2.Card,
    {
      withBorder: !0,
      radius: "md",
      className: cx(classes.card, className),
      ...others,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Group, { position: "apart", align: "center", mb: "sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Badge, { variant: "light", children: deadline }, void 0, !1, {
            fileName: "app/components/dashboard/applied-opportunities.tsx",
            lineNumber: 111,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Badge, { variant: "light", children: type }, void 0, !1, {
            fileName: "app/components/dashboard/applied-opportunities.tsx",
            lineNumber: 112,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/dashboard/applied-opportunities.tsx",
          lineNumber: 110,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Text, { fz: "md", inline: !0, children: [
          name,
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Text, { fz: "sm", mt: "sm", inline: !0, children: companyName }, void 0, !1, {
            fileName: "app/components/dashboard/applied-opportunities.tsx",
            lineNumber: 117,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/dashboard/applied-opportunities.tsx",
          lineNumber: 115,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Text, { fz: "md", color: "dimmed", lineClamp: 4, children: description }, void 0, !1, {
          fileName: "app/components/dashboard/applied-opportunities.tsx",
          lineNumber: 121,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Group, { position: "apart", className: classes.footer, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Group, { spacing: 8, mr: 0, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Tooltip, { label: "LinkedIn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { target: "_blank", to: linkedin, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.ActionIcon, { className: classes.action, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_icons_react.IconBrandLinkedin, { size: "1rem", className: classes.linkIcon }, void 0, !1, {
              fileName: "app/components/dashboard/applied-opportunities.tsx",
              lineNumber: 130,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/components/dashboard/applied-opportunities.tsx",
              lineNumber: 129,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/components/dashboard/applied-opportunities.tsx",
              lineNumber: 128,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/components/dashboard/applied-opportunities.tsx",
              lineNumber: 127,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Tooltip, { label: "Company URL", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { target: "_blank", to: url, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.ActionIcon, { className: classes.action, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_icons_react.IconLink, { size: "1rem", className: classes.linkIcon }, void 0, !1, {
                fileName: "app/components/dashboard/applied-opportunities.tsx",
                lineNumber: 137,
                columnNumber: 19
              }, this) }, void 0, !1, {
                fileName: "app/components/dashboard/applied-opportunities.tsx",
                lineNumber: 136,
                columnNumber: 17
              }, this),
              " "
            ] }, void 0, !0, {
              fileName: "app/components/dashboard/applied-opportunities.tsx",
              lineNumber: 135,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/components/dashboard/applied-opportunities.tsx",
              lineNumber: 134,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/dashboard/applied-opportunities.tsx",
            lineNumber: 126,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Group, { spacing: 8, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Tooltip, { label: "Job Description", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: jd, target: "_blank", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Button, { variant: "default", children: "Information" }, void 0, !1, {
            fileName: "app/components/dashboard/applied-opportunities.tsx",
            lineNumber: 145,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/dashboard/applied-opportunities.tsx",
            lineNumber: 144,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/components/dashboard/applied-opportunities.tsx",
            lineNumber: 143,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/components/dashboard/applied-opportunities.tsx",
            lineNumber: 142,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/dashboard/applied-opportunities.tsx",
          lineNumber: 125,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/dashboard/applied-opportunities.tsx",
      lineNumber: 104,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/dashboard/applied-opportunities.tsx",
    lineNumber: 103,
    columnNumber: 5
  }, this);
}
function Opportunities() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Grid, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Title, { order: 2, size: "h1", mb: "md", weight: 900, children: "Applied Opportunities" }, void 0, !1, {
      fileName: "app/components/dashboard/applied-opportunities.tsx",
      lineNumber: 159,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/dashboard/applied-opportunities.tsx",
      lineNumber: 158,
      columnNumber: 7
    }, this),
    Array.from(Array(10).keys()).map(
      (item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        OpportunityCard,
        {
          name: "Placement Opportunity",
          deadline: "12/12/2021",
          linkedin: "https://www.linkedin.com/in/abc",
          url: "https://www.abc.com",
          type: "Placement",
          companyImage: Math.random() > 0.5 ? "https://picsum.photos/200/300" : void 0,
          companyName: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.",
          jd: "https://google.com"
        },
        index,
        !1,
        {
          fileName: "app/components/dashboard/applied-opportunities.tsx",
          lineNumber: 165,
          columnNumber: 11
        },
        this
      )
    )
  ] }, void 0, !0, {
    fileName: "app/components/dashboard/applied-opportunities.tsx",
    lineNumber: 157,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard._dashboard.application-tracker.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function AddOpportunity() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Opportunities, {}, void 0, !1, {
    fileName: "app/routes/dashboard._dashboard.application-tracker.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

// app/routes/dashboard._dashboard.add-opportunity.tsx
var dashboard_dashboard_add_opportunity_exports = {};
__export(dashboard_dashboard_add_opportunity_exports, {
  default: () => AddOpportunity3
});

// app/components/dashboard/add-opportunity.tsx
var import_core3 = require("@mantine/core"), import_dates = require("@mantine/dates"), import_form = require("@mantine/form"), import_icons_react2 = require("@tabler/icons-react"), import_react4 = require("react"), import_core4 = require("@mantine/core"), import_dropzone = require("@mantine/dropzone"), import_icons_react3 = require("@tabler/icons-react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), useStyles2 = (0, import_core4.createStyles)((theme2) => ({
  wrapper: {
    position: "relative",
    marginBottom: (0, import_core4.rem)(30)
  },
  dropzone: {
    borderWidth: (0, import_core4.rem)(1),
    paddingBottom: (0, import_core4.rem)(50)
  },
  icon: {
    color: theme2.colorScheme === "dark" ? theme2.colors.dark[3] : theme2.colors.gray[4]
  },
  control: {
    position: "absolute",
    width: (0, import_core4.rem)(250),
    left: `calc(50% - ${(0, import_core4.rem)(125)})`,
    bottom: (0, import_core4.rem)(-20)
  }
}));
function DropzoneButton({ formProps }) {
  let { classes, theme: theme2 } = useStyles2(), openRef = (0, import_react4.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: classes.wrapper, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      import_core3.TextInput,
      {
        label: "Job Description",
        placeholder: "Enter Job Description URL",
        mt: "md",
        name: "subject",
        variant: "filled",
        ...formProps
      },
      void 0,
      !1,
      {
        fileName: "app/components/dashboard/add-opportunity.tsx",
        lineNumber: 50,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      import_dropzone.Dropzone,
      {
        openRef,
        onDrop: () => {
        },
        className: classes.dropzone,
        radius: "md",
        mt: "md",
        accept: [import_dropzone.MIME_TYPES.pdf],
        maxSize: 2 * 1024 ** 2,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { pointerEvents: "none" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core3.Group, { position: "center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_dropzone.Dropzone.Accept, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              import_icons_react3.IconDownload,
              {
                size: (0, import_core4.rem)(50),
                color: theme2.colors[theme2.primaryColor][6],
                stroke: 1.5
              },
              void 0,
              !1,
              {
                fileName: "app/components/dashboard/add-opportunity.tsx",
                lineNumber: 70,
                columnNumber: 15
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/dashboard/add-opportunity.tsx",
              lineNumber: 69,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_dropzone.Dropzone.Reject, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_icons_react3.IconX, { size: (0, import_core4.rem)(50), color: theme2.colors.red[6], stroke: 1.5 }, void 0, !1, {
              fileName: "app/components/dashboard/add-opportunity.tsx",
              lineNumber: 77,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/components/dashboard/add-opportunity.tsx",
              lineNumber: 76,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_dropzone.Dropzone.Idle, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              import_icons_react3.IconCloudUpload,
              {
                size: (0, import_core4.rem)(50),
                color: theme2.colorScheme === "dark" ? theme2.colors.dark[0] : theme2.black,
                stroke: 1.5
              },
              void 0,
              !1,
              {
                fileName: "app/components/dashboard/add-opportunity.tsx",
                lineNumber: 80,
                columnNumber: 15
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/dashboard/add-opportunity.tsx",
              lineNumber: 79,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/dashboard/add-opportunity.tsx",
            lineNumber: 68,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core4.Text, { ta: "center", fw: 700, fz: "lg", mt: "xl", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_dropzone.Dropzone.Accept, { children: "Drop files here" }, void 0, !1, {
              fileName: "app/components/dashboard/add-opportunity.tsx",
              lineNumber: 93,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_dropzone.Dropzone.Reject, { children: "Pdf file less than 2mb" }, void 0, !1, {
              fileName: "app/components/dashboard/add-opportunity.tsx",
              lineNumber: 94,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_dropzone.Dropzone.Idle, { children: "Upload Job Description/ Enter URL Above" }, void 0, !1, {
              fileName: "app/components/dashboard/add-opportunity.tsx",
              lineNumber: 95,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/dashboard/add-opportunity.tsx",
            lineNumber: 92,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core4.Text, { ta: "center", fz: "sm", mt: "xs", c: "dimmed", children: [
            "Drag'n'drop files here to upload. We can accept only",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { children: ".pdf" }, void 0, !1, {
              fileName: "app/components/dashboard/add-opportunity.tsx",
              lineNumber: 101,
              columnNumber: 13
            }, this),
            " files that are less than 2mb in size."
          ] }, void 0, !0, {
            fileName: "app/components/dashboard/add-opportunity.tsx",
            lineNumber: 99,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/dashboard/add-opportunity.tsx",
          lineNumber: 67,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/dashboard/add-opportunity.tsx",
        lineNumber: 58,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      import_core3.Button,
      {
        className: classes.control,
        size: "md",
        onClick: () => {
          var _a;
          return (_a = openRef.current) == null ? void 0 : _a.call(openRef);
        },
        children: "Select files"
      },
      void 0,
      !1,
      {
        fileName: "app/components/dashboard/add-opportunity.tsx",
        lineNumber: 106,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/dashboard/add-opportunity.tsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
}
function AddOpportunity2() {
  let form = (0, import_form.useForm)({
    initialValues: {
      position: "",
      email: "",
      subject: "",
      message: "",
      company: ""
    },
    validate: {
      position: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core3.Grid, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core3.Grid.Col, { lg: 8, xl: 4, md: 12, sm: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("form", { onSubmit: form.onSubmit(() => {
  }), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core3.Title, { order: 2, size: "h1", mb: "md", weight: 900, children: "New Opportunity" }, void 0, !1, {
      fileName: "app/components/dashboard/add-opportunity.tsx",
      lineNumber: 137,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      import_core3.TextInput,
      {
        label: "Position",
        placeholder: "Position Name",
        name: "position",
        mt: "md",
        variant: "filled",
        ...form.getInputProps("position")
      },
      void 0,
      !1,
      {
        fileName: "app/components/dashboard/add-opportunity.tsx",
        lineNumber: 140,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      import_core3.TextInput,
      {
        label: "Company",
        placeholder: "Company",
        name: "company",
        mt: "md",
        variant: "filled",
        ...form.getInputProps("company")
      },
      void 0,
      !1,
      {
        fileName: "app/components/dashboard/add-opportunity.tsx",
        lineNumber: 148,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      import_dates.DatePickerInput,
      {
        mt: "md",
        popoverProps: { withinPortal: !0 },
        label: "Deadline",
        placeholder: "Deadline",
        variant: "filled",
        clearable: !1,
        ...form.getInputProps("deadline")
      },
      void 0,
      !1,
      {
        fileName: "app/components/dashboard/add-opportunity.tsx",
        lineNumber: 156,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      import_core3.Textarea,
      {
        label: "Description",
        placeholder: "Enter Basic Description",
        name: "description",
        mt: "md",
        variant: "filled",
        autosize: !0,
        minRows: 5,
        ...form.getInputProps("description")
      },
      void 0,
      !1,
      {
        fileName: "app/components/dashboard/add-opportunity.tsx",
        lineNumber: 165,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      import_core3.TextInput,
      {
        label: "Website",
        placeholder: "Company Website",
        name: "url",
        mt: "md",
        variant: "filled",
        ...form.getInputProps("url")
      },
      void 0,
      !1,
      {
        fileName: "app/components/dashboard/add-opportunity.tsx",
        lineNumber: 175,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      import_core3.TextInput,
      {
        label: "Image",
        placeholder: "Company Logo/Image URL",
        name: "url",
        mt: "md",
        variant: "filled",
        ...form.getInputProps("url")
      },
      void 0,
      !1,
      {
        fileName: "app/components/dashboard/add-opportunity.tsx",
        lineNumber: 184,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      import_core3.TextInput,
      {
        label: "LinkedIn",
        placeholder: "Enter LinkedIn URL",
        mt: "md",
        name: "subject",
        variant: "filled",
        ...form.getInputProps("linkedin")
      },
      void 0,
      !1,
      {
        fileName: "app/components/dashboard/add-opportunity.tsx",
        lineNumber: 193,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DropzoneButton, { formProps: form.getInputProps("description") }, void 0, !1, {
      fileName: "app/components/dashboard/add-opportunity.tsx",
      lineNumber: 201,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core3.Tooltip, { label: "Create new opportunity", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core3.Button, { type: "submit", mt: "md", size: "md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_icons_react2.IconPlus, {}, void 0, !1, {
        fileName: "app/components/dashboard/add-opportunity.tsx",
        lineNumber: 205,
        columnNumber: 15
      }, this),
      "Add Opportunity"
    ] }, void 0, !0, {
      fileName: "app/components/dashboard/add-opportunity.tsx",
      lineNumber: 204,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/dashboard/add-opportunity.tsx",
      lineNumber: 203,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/dashboard/add-opportunity.tsx",
    lineNumber: 136,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/dashboard/add-opportunity.tsx",
    lineNumber: 135,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/dashboard/add-opportunity.tsx",
    lineNumber: 134,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard._dashboard.add-opportunity.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function AddOpportunity3() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AddOpportunity2, {}, void 0, !1, {
    fileName: "app/routes/dashboard._dashboard.add-opportunity.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

// app/routes/dashboard._dashboard.resume-builder.tsx
var dashboard_dashboard_resume_builder_exports = {};
__export(dashboard_dashboard_resume_builder_exports, {
  default: () => DashboardProfile
});
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function DashboardProfile() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { style: { textAlign: "center" }, children: "Coming Soon" }, void 0, !1, {
    fileName: "app/routes/dashboard._dashboard.resume-builder.tsx",
    lineNumber: 2,
    columnNumber: 10
  }, this);
}

// app/routes/dashboard._dashboard.opportunities.tsx
var dashboard_dashboard_opportunities_exports = {};
__export(dashboard_dashboard_opportunities_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => DashboardOpportunities,
  loader: () => loader
});
var import_react6 = require("@remix-run/react");

// app/components/dashboard/opportunity.tsx
var import_icons_react4 = require("@tabler/icons-react"), import_core5 = require("@mantine/core"), import_react5 = require("@remix-run/react");

// assets/company-placeholder.png
var company_placeholder_default = "/build/_assets/company-placeholder-2473YOQ3.png";

// app/components/dashboard/opportunity.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), useStyles3 = (0, import_core5.createStyles)((theme2) => ({
  card: {
    position: "relative",
    backgroundColor: theme2.colorScheme === "dark" ? theme2.colors.dark[7] : theme2.white
  },
  rating: {
    position: "absolute",
    top: theme2.spacing.xs,
    width: "95%"
  },
  title: {
    display: "block",
    marginTop: theme2.spacing.md,
    marginBottom: (0, import_core5.rem)(5)
  },
  linkIcon: {
    ref: (0, import_core5.getStylesRef)("icon"),
    color: theme2.colorScheme === "dark" ? theme2.colors.dark[2] : theme2.colors.gray[6],
    "&, &:hover": {
      color: theme2.fn.variant({ variant: "light", color: theme2.primaryColor }).color,
      [`& .${(0, import_core5.getStylesRef)("icon")}`]: {
        color: theme2.fn.variant({
          variant: "light",
          color: theme2.primaryColor
        }).color
      }
    }
  },
  action: {
    backgroundColor: theme2.colorScheme === "dark" ? theme2.colors.dark[6] : theme2.colors.gray[0],
    ...theme2.fn.hover({
      backgroundColor: theme2.colorScheme === "dark" ? theme2.colors.dark[5] : theme2.colors.gray[1]
    })
  },
  footer: {
    marginTop: theme2.spacing.md
  }
}));
function OpportunityCard2({
  className,
  companyImage,
  url,
  title,
  description,
  companyName,
  deadline,
  jd,
  linkedin,
  name,
  type,
  ...others
}) {
  let { classes, cx } = useStyles3(), linkProps = {
    href: url,
    target: "_blank",
    rel: "noopener noreferrer"
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core5.Grid.Col, { xs: 12, md: 6, lg: 4, xl: 3, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    import_core5.Card,
    {
      withBorder: !0,
      radius: "md",
      className: cx(classes.card, className),
      ...others,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core5.Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("a", { ...linkProps, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core5.Image, { src: companyImage || company_placeholder_default, height: 180 }, void 0, !1, {
          fileName: "app/components/dashboard/opportunity.tsx",
          lineNumber: 119,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/dashboard/opportunity.tsx",
          lineNumber: 118,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/dashboard/opportunity.tsx",
          lineNumber: 117,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core5.Group, { position: "apart", align: "center", className: classes.rating, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core5.Badge, { variant: "light", children: deadline }, void 0, !1, {
            fileName: "app/components/dashboard/opportunity.tsx",
            lineNumber: 123,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core5.Badge, { variant: "light", children: type }, void 0, !1, {
            fileName: "app/components/dashboard/opportunity.tsx",
            lineNumber: 124,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/dashboard/opportunity.tsx",
          lineNumber: 122,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core5.Text, { className: classes.title, fw: 500, component: "a", ...linkProps, children: title }, void 0, !1, {
          fileName: "app/components/dashboard/opportunity.tsx",
          lineNumber: 126,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core5.Text, { fz: "md", inline: !0, children: [
          name,
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core5.Text, { fz: "sm", mt: "sm", inline: !0, children: companyName }, void 0, !1, {
            fileName: "app/components/dashboard/opportunity.tsx",
            lineNumber: 132,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/dashboard/opportunity.tsx",
          lineNumber: 130,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core5.Text, { fz: "md", color: "dimmed", lineClamp: 4, children: description }, void 0, !1, {
          fileName: "app/components/dashboard/opportunity.tsx",
          lineNumber: 137,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core5.Group, { position: "apart", className: classes.footer, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core5.Group, { spacing: 8, mr: 0, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core5.Tooltip, { label: "LinkedIn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react5.Link, { target: "_blank", to: linkedin, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core5.ActionIcon, { className: classes.action, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_icons_react4.IconBrandLinkedin, { size: "1rem", className: classes.linkIcon }, void 0, !1, {
              fileName: "app/components/dashboard/opportunity.tsx",
              lineNumber: 146,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/components/dashboard/opportunity.tsx",
              lineNumber: 145,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/components/dashboard/opportunity.tsx",
              lineNumber: 144,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/components/dashboard/opportunity.tsx",
              lineNumber: 143,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core5.Tooltip, { label: "Company URL", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react5.Link, { target: "_blank", to: url, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core5.ActionIcon, { className: classes.action, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_icons_react4.IconLink, { size: "1rem", className: classes.linkIcon }, void 0, !1, {
                fileName: "app/components/dashboard/opportunity.tsx",
                lineNumber: 153,
                columnNumber: 19
              }, this) }, void 0, !1, {
                fileName: "app/components/dashboard/opportunity.tsx",
                lineNumber: 152,
                columnNumber: 17
              }, this),
              " "
            ] }, void 0, !0, {
              fileName: "app/components/dashboard/opportunity.tsx",
              lineNumber: 151,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/components/dashboard/opportunity.tsx",
              lineNumber: 150,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/dashboard/opportunity.tsx",
            lineNumber: 142,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core5.Group, { spacing: 8, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core5.Tooltip, { label: "Job Description", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react5.Link, { to: jd, target: "_blank", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core5.Button, { variant: "default", children: "Information" }, void 0, !1, {
              fileName: "app/components/dashboard/opportunity.tsx",
              lineNumber: 161,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/components/dashboard/opportunity.tsx",
              lineNumber: 160,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/components/dashboard/opportunity.tsx",
              lineNumber: 159,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core5.Button, { children: "Apply" }, void 0, !1, {
              fileName: "app/components/dashboard/opportunity.tsx",
              lineNumber: 164,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/dashboard/opportunity.tsx",
            lineNumber: 158,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/dashboard/opportunity.tsx",
          lineNumber: 141,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/dashboard/opportunity.tsx",
      lineNumber: 111,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/dashboard/opportunity.tsx",
    lineNumber: 110,
    columnNumber: 5
  }, this);
}
function Opportunities2() {
  let { opportunities } = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core5.Grid, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core5.Grid.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core5.Title, { order: 2, size: "h1", mb: "md", weight: 900, children: "Opportunities" }, void 0, !1, {
      fileName: "app/components/dashboard/opportunity.tsx",
      lineNumber: 178,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/dashboard/opportunity.tsx",
      lineNumber: 177,
      columnNumber: 7
    }, this),
    Array.from(Array(10).keys()).map(
      (item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        OpportunityCard2,
        {
          name: "Placement Opportunity",
          deadline: "12/12/2021",
          linkedin: "https://www.linkedin.com/in/abc",
          url: "https://www.abc.com",
          type: "Placement",
          companyImage: Math.random() > 0.5 ? "https://picsum.photos/200/300" : void 0,
          companyName: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.",
          jd: "https://google.com"
        },
        index,
        !1,
        {
          fileName: "app/components/dashboard/opportunity.tsx",
          lineNumber: 184,
          columnNumber: 11
        },
        this
      )
    )
  ] }, void 0, !0, {
    fileName: "app/components/dashboard/opportunity.tsx",
    lineNumber: 176,
    columnNumber: 5
  }, this);
}

// app/components/error/index.tsx
var import_core6 = require("@mantine/core"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), useStyles4 = (0, import_core6.createStyles)((theme2) => ({
  root: {
    paddingTop: (0, import_core6.rem)(80),
    paddingBottom: (0, import_core6.rem)(80)
  },
  label: {
    textAlign: "center",
    fontWeight: 900,
    fontSize: (0, import_core6.rem)(150),
    lineHeight: 1,
    color: theme2.colorScheme === "dark" ? theme2.colors.dark[4] : theme2.colors.gray[2],
    [theme2.fn.smallerThan("sm")]: {
      fontSize: (0, import_core6.rem)(120)
    }
  },
  title: {
    textAlign: "center",
    fontWeight: 900,
    fontSize: (0, import_core6.rem)(38),
    [theme2.fn.smallerThan("sm")]: {
      fontSize: (0, import_core6.rem)(32)
    }
  },
  description: {
    maxWidth: (0, import_core6.rem)(500),
    margin: "auto"
  }
}));
function ErrorPage({
  statusCode = 400,
  message = "Something went wrong",
  name = "NotFound"
}) {
  let { classes } = useStyles4();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_core6.Container, { className: classes.root, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: classes.label, children: statusCode }, void 0, !1, {
      fileName: "app/components/error/index.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_core6.Title, { className: classes.title, children: name }, void 0, !1, {
      fileName: "app/components/error/index.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      import_core6.Text,
      {
        color: "dimmed",
        size: "lg",
        align: "center",
        className: classes.description,
        children: message
      },
      void 0,
      !1,
      {
        fileName: "app/components/error/index.tsx",
        lineNumber: 50,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/error/index.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}

// prisma/prisma.server.ts
var import_client = require("@prisma/client"), prisma;
global.__db || (global.__db = new import_client.PrismaClient(), global.__db.$connect()), prisma = global.__db;

// app/utils/auth/auth.server.ts
var bcryptjs = __toESM(require("bcryptjs")), import_node = require("@remix-run/node");
var import_remix_utils = require("remix-utils"), sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret)
  throw new Error("SESSION_SECRET must be set");
var storage = (0, import_node.createCookieSessionStorage)({
  cookie: {
    name: "workhub-session",
    secure: !1,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: !0
  }
});
async function createUserSession(userId, redirectTo) {
  let session = await storage.getSession();
  return session.set("userId", userId), (0, import_node.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}
async function register(user) {
  let { email, password } = user, existingUserClause = { email };
  if (await prisma.user.count({
    where: existingUserClause
  }))
    throw (0, import_remix_utils.forbidden)("User Already Exists");
  try {
    user.password = await bcryptjs.hash(password, 10);
    let createdUser = await prisma.user.create({
      data: user,
      select: {
        password: !1,
        id: !0
      }
    });
    return createUserSession(createdUser.id, "/dashboard");
  } catch {
    throw (0, import_remix_utils.serverError)("Server Exception");
  }
}
async function login({ email, password }) {
  try {
    let userClause = { email }, user = await prisma.user.findUnique({ where: userClause });
    if (!user)
      throw (0, import_remix_utils.forbidden)("User not found");
    if (!await bcryptjs.compare(password, user.password))
      throw (0, import_remix_utils.forbidden)("Password is invalid");
    return createUserSession(user.id, "/dashboard");
  } catch (error) {
    throw console.error(error), (0, import_remix_utils.serverError)("Server Exception");
  }
}
function getUserSession(request) {
  return storage.getSession(request.headers.get("Cookie"));
}
async function getUserId(request) {
  let userId = (await getUserSession(request)).get("userId");
  return !userId || typeof userId != "string" ? null : userId;
}
async function getUser(request) {
  let userId = await getUserId(request);
  if (typeof userId != "string")
    throw (0, import_remix_utils.notFound)("User not found");
  try {
    let user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: !0, email: !0 }
    });
    if (user)
      return user;
    throw (0, import_remix_utils.notFound)("User not found");
  } catch {
    throw logout(request);
  }
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  let userId = (await getUserSession(request)).get("userId");
  if (!userId || typeof userId != "string") {
    let searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_node.redirect)(`/login?${searchParams}`);
  }
  return userId;
}
async function logout(request) {
  let session = await getUserSession(request);
  return (0, import_node.redirect)("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session)
    }
  });
}

// app/components/dashboard/loaders/opportunities.ts
var import_node2 = require("@remix-run/node"), OpportunityLoader = async ({ request }) => {
  let { id: userId } = await getUser(request), userProfile = await prisma.userProfile.findUnique({
    where: {
      userId
    },
    select: {
      streamId: !0
    }
  });
  if (!userProfile)
    throw new import_node2.Response("Not Found", {
      status: 404,
      statusText: "No profile found for this user, Please visit profile section to update profile and see opportunitites"
    });
  if (!(userProfile != null && userProfile.streamId))
    throw new import_node2.Response("Not Found", {
      status: 404,
      statusText: "No stream found for this user, Please visit profile section to update profile and see opportunitites"
    });
  return (0, import_node2.json)({
    opportunities: await prisma.opportunity.findMany({
      where: {
        OpportunityStreamLink: {
          every: {
            streamId: userProfile.streamId
          }
        }
      }
    })
  });
};

// app/routes/dashboard._dashboard.opportunities.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function DashboardOpportunities() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Opportunities2, {}, void 0, !1, {
    fileName: "app/routes/dashboard._dashboard.opportunities.tsx",
    lineNumber: 7,
    columnNumber: 10
  }, this);
}
var loader = OpportunityLoader;
function ErrorBoundary() {
  let { status, statusText, data: data4 } = (0, import_react6.useRouteError)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(ErrorPage, { statusCode: status, message: statusText, name: data4 }, void 0, !1, {
    fileName: "app/routes/dashboard._dashboard.opportunities.tsx",
    lineNumber: 14,
    columnNumber: 10
  }, this);
}

// app/routes/dashboard._dashboard.contacts.tsx
var dashboard_dashboard_contacts_exports = {};
__export(dashboard_dashboard_contacts_exports, {
  default: () => DashboardContacts
});

// app/components/dashboard/contacts.tsx
var import_react7 = require("react"), import_core7 = require("@mantine/core"), import_icons_react5 = require("@tabler/icons-react"), import_utils = require("@mantine/utils"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), useStyles5 = (0, import_core7.createStyles)((theme2) => ({
  rowSelected: {
    backgroundColor: theme2.colorScheme === "dark" ? theme2.fn.rgba(theme2.colors[theme2.primaryColor][7], 0.2) : theme2.colors[theme2.primaryColor][0]
  },
  th: {
    padding: "0 !important"
  },
  control: {
    width: "100%",
    padding: `${theme2.spacing.xs} ${theme2.spacing.md}`,
    "&:hover": {
      backgroundColor: theme2.colorScheme === "dark" ? theme2.colors.dark[6] : theme2.colors.gray[0]
    }
  },
  icon: {
    width: (0, import_core7.rem)(21),
    height: (0, import_core7.rem)(21),
    borderRadius: (0, import_core7.rem)(21)
  },
  inputRow: {
    backgroundColor: "red",
    margin: `${theme2.spacing.md}`
  }
}));
function Th({ children, reversed, sorted, onSort }) {
  let { classes } = useStyles5(), Icon = sorted ? reversed ? import_icons_react5.IconChevronUp : import_icons_react5.IconChevronDown : import_icons_react5.IconSelector;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("th", { className: classes.th, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core7.UnstyledButton, { onClick: onSort, className: classes.control, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core7.Group, { position: "apart", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core7.Text, { fw: 500, fz: "sm", children }, void 0, !1, {
      fileName: "app/components/dashboard/contacts.tsx",
      lineNumber: 92,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core7.Center, { className: classes.icon, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Icon, { size: "0.9rem", stroke: 1.5 }, void 0, !1, {
      fileName: "app/components/dashboard/contacts.tsx",
      lineNumber: 96,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/dashboard/contacts.tsx",
      lineNumber: 95,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/dashboard/contacts.tsx",
    lineNumber: 91,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/dashboard/contacts.tsx",
    lineNumber: 90,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/dashboard/contacts.tsx",
    lineNumber: 89,
    columnNumber: 5
  }, this);
}
function filterData(data4, search) {
  let query = search.toLowerCase().trim();
  return data4.filter(
    (item) => (0, import_utils.keys)(data4[0]).some((key) => item[key].toLowerCase().includes(query))
  );
}
function sortData(data4, payload) {
  let { sortBy } = payload;
  return filterData(
    sortBy ? [...data4].sort((a, b) => payload.reversed ? b[sortBy].localeCompare(a[sortBy]) : a[sortBy].localeCompare(b[sortBy])) : data4,
    payload.search
  );
}
function Contacts({ data: data4 }) {
  let { classes, cx } = useStyles5(), [selection, setSelection] = (0, import_react7.useState)([]), [search, setSearch] = (0, import_react7.useState)(""), [sortedData, setSortedData] = (0, import_react7.useState)(data4), [sortBy, setSortBy] = (0, import_react7.useState)(null), [reverseSortDirection, setReverseSortDirection] = (0, import_react7.useState)(!1), toggleRow = (id) => setSelection(
    (current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
  ), toggleAll = () => setSelection(
    (current) => current.length === data4.length ? [] : data4.map((item) => item.id)
  ), setSorting = (field) => {
    let reversed = field === sortBy ? !reverseSortDirection : !1;
    setReverseSortDirection(reversed), setSortBy(field), setSortedData(sortData(data4, { sortBy: field, reversed, search }));
  }, handleSearchChange = (event) => {
    let { value } = event.currentTarget;
    setSearch(value), setSortedData(
      sortData(data4, {
        sortBy,
        reversed: reverseSortDirection,
        search: value
      })
    );
  }, rows = sortedData.map((item) => {
    let selected = selection.includes(item.id);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("tr", { className: cx({ [classes.rowSelected]: selected }), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        import_core7.Checkbox,
        {
          checked: selection.includes(item.id),
          onChange: () => toggleRow(item.id),
          transitionDuration: 0
        },
        void 0,
        !1,
        {
          fileName: "app/components/dashboard/contacts.tsx",
          lineNumber: 176,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/dashboard/contacts.tsx",
        lineNumber: 175,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("td", { children: item.company }, void 0, !1, {
        fileName: "app/components/dashboard/contacts.tsx",
        lineNumber: 182,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core7.Group, { spacing: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core7.Text, { size: "sm", weight: 500, children: item.name }, void 0, !1, {
        fileName: "app/components/dashboard/contacts.tsx",
        lineNumber: 185,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/dashboard/contacts.tsx",
        lineNumber: 184,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/dashboard/contacts.tsx",
        lineNumber: 183,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("td", { children: item.email }, void 0, !1, {
        fileName: "app/components/dashboard/contacts.tsx",
        lineNumber: 190,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("td", { children: item.mobile }, void 0, !1, {
        fileName: "app/components/dashboard/contacts.tsx",
        lineNumber: 191,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("td", { children: item.position }, void 0, !1, {
        fileName: "app/components/dashboard/contacts.tsx",
        lineNumber: 192,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("td", { children: item.addedBy }, void 0, !1, {
        fileName: "app/components/dashboard/contacts.tsx",
        lineNumber: 193,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core7.Button, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_icons_react5.IconBrandTelegram, { size: 18 }, void 0, !1, {
          fileName: "app/components/dashboard/contacts.tsx",
          lineNumber: 197,
          columnNumber: 13
        }, this),
        "Send mail"
      ] }, void 0, !0, {
        fileName: "app/components/dashboard/contacts.tsx",
        lineNumber: 196,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/dashboard/contacts.tsx",
        lineNumber: 195,
        columnNumber: 9
      }, this)
    ] }, item.id, !0, {
      fileName: "app/components/dashboard/contacts.tsx",
      lineNumber: 174,
      columnNumber: 7
    }, this);
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core7.ScrollArea, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core7.Title, { order: 2, size: "h1", mb: "md", weight: 900, children: "Contacts Database" }, void 0, !1, {
      fileName: "app/components/dashboard/contacts.tsx",
      lineNumber: 207,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      import_core7.TextInput,
      {
        placeholder: "Search by any field",
        mb: "md",
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_icons_react5.IconSearch, { size: "0.9rem", stroke: 1.5 }, void 0, !1, {
          fileName: "app/components/dashboard/contacts.tsx",
          lineNumber: 213,
          columnNumber: 15
        }, this),
        value: search,
        onChange: handleSearchChange
      },
      void 0,
      !1,
      {
        fileName: "app/components/dashboard/contacts.tsx",
        lineNumber: 210,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core7.Table, { miw: 800, verticalSpacing: "sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("th", { style: { width: (0, import_core7.rem)(40) }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          import_core7.Checkbox,
          {
            onChange: toggleAll,
            checked: selection.length === data4.length,
            indeterminate: selection.length > 0 && selection.length !== data4.length,
            transitionDuration: 0
          },
          void 0,
          !1,
          {
            fileName: "app/components/dashboard/contacts.tsx",
            lineNumber: 221,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/dashboard/contacts.tsx",
          lineNumber: 220,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          Th,
          {
            sorted: sortBy === "company",
            reversed: reverseSortDirection,
            onSort: () => setSorting("company"),
            children: "Company"
          },
          void 0,
          !1,
          {
            fileName: "app/components/dashboard/contacts.tsx",
            lineNumber: 230,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          Th,
          {
            sorted: sortBy === "name",
            reversed: reverseSortDirection,
            onSort: () => setSorting("name"),
            children: "Name"
          },
          void 0,
          !1,
          {
            fileName: "app/components/dashboard/contacts.tsx",
            lineNumber: 237,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          Th,
          {
            sorted: sortBy === "email",
            reversed: reverseSortDirection,
            onSort: () => setSorting("email"),
            children: "Email"
          },
          void 0,
          !1,
          {
            fileName: "app/components/dashboard/contacts.tsx",
            lineNumber: 244,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          Th,
          {
            sorted: sortBy === "mobile",
            reversed: reverseSortDirection,
            onSort: () => setSorting("mobile"),
            children: "Mobile"
          },
          void 0,
          !1,
          {
            fileName: "app/components/dashboard/contacts.tsx",
            lineNumber: 251,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          Th,
          {
            sorted: sortBy === "position",
            reversed: reverseSortDirection,
            onSort: () => setSorting("position"),
            children: "Position"
          },
          void 0,
          !1,
          {
            fileName: "app/components/dashboard/contacts.tsx",
            lineNumber: 258,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          Th,
          {
            sorted: sortBy === "addedBy",
            reversed: reverseSortDirection,
            onSort: () => setSorting("addedBy"),
            children: "Added By User"
          },
          void 0,
          !1,
          {
            fileName: "app/components/dashboard/contacts.tsx",
            lineNumber: 265,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("th", { children: "Action" }, void 0, !1, {
          fileName: "app/components/dashboard/contacts.tsx",
          lineNumber: 272,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/dashboard/contacts.tsx",
        lineNumber: 219,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/dashboard/contacts.tsx",
        lineNumber: 218,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("tbody", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("td", {}, void 0, !1, {
            fileName: "app/components/dashboard/contacts.tsx",
            lineNumber: 277,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core7.TextInput, { placeholder: "Enter Company Name" }, void 0, !1, {
            fileName: "app/components/dashboard/contacts.tsx",
            lineNumber: 279,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/components/dashboard/contacts.tsx",
            lineNumber: 278,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core7.TextInput, { placeholder: "Enter Name" }, void 0, !1, {
            fileName: "app/components/dashboard/contacts.tsx",
            lineNumber: 282,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/components/dashboard/contacts.tsx",
            lineNumber: 281,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core7.TextInput, { placeholder: "Enter email" }, void 0, !1, {
            fileName: "app/components/dashboard/contacts.tsx",
            lineNumber: 285,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/components/dashboard/contacts.tsx",
            lineNumber: 284,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core7.TextInput, { placeholder: "Enter mobile" }, void 0, !1, {
            fileName: "app/components/dashboard/contacts.tsx",
            lineNumber: 288,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/components/dashboard/contacts.tsx",
            lineNumber: 287,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core7.TextInput, { placeholder: "Enter position" }, void 0, !1, {
            fileName: "app/components/dashboard/contacts.tsx",
            lineNumber: 291,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/components/dashboard/contacts.tsx",
            lineNumber: 290,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("td", { children: "Manav Arora" }, void 0, !1, {
            fileName: "app/components/dashboard/contacts.tsx",
            lineNumber: 293,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core7.Button, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_icons_react5.IconAddressBook, {}, void 0, !1, {
              fileName: "app/components/dashboard/contacts.tsx",
              lineNumber: 296,
              columnNumber: 17
            }, this),
            " Add"
          ] }, void 0, !0, {
            fileName: "app/components/dashboard/contacts.tsx",
            lineNumber: 295,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/components/dashboard/contacts.tsx",
            lineNumber: 294,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/dashboard/contacts.tsx",
          lineNumber: 276,
          columnNumber: 11
        }, this),
        rows
      ] }, void 0, !0, {
        fileName: "app/components/dashboard/contacts.tsx",
        lineNumber: 275,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/dashboard/contacts.tsx",
      lineNumber: 217,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/dashboard/contacts.tsx",
    lineNumber: 206,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard._dashboard.contacts.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), data = {
  data: [
    {
      id: "1",
      name: "Robert Wolfkisser",
      position: "Engineer",
      email: "rob_wolf@gmail.com",
      mobile: "8745007937",
      addedBy: "Manav",
      company: "Google"
    },
    {
      id: "2",
      name: "Jill Jailbreaker",
      position: "Engineer",
      email: "jj@breaker.com",
      mobile: "8745007937",
      addedBy: "Manav",
      company: "Google"
    },
    {
      id: "3",
      name: "Henry Silkeater",
      position: "Designer",
      email: "henry@silkeater.io",
      mobile: "8745007937",
      addedBy: "Manav",
      company: "Google"
    },
    {
      id: "4",
      name: "Bill Horsefighter",
      position: "Designer",
      email: "bhorsefighter@gmail.com",
      mobile: "8745007937",
      addedBy: "Manav",
      company: "Microsoft"
    },
    {
      id: "5",
      name: "Jeremy Footviewer",
      position: "Manager",
      email: "jeremy@foot.dev",
      mobile: "8745007937",
      addedBy: "Manav",
      company: "Microsoft"
    }
  ]
};
function DashboardContacts() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Contacts, { data: data.data }, void 0, !1, {
    fileName: "app/routes/dashboard._dashboard.contacts.tsx",
    lineNumber: 54,
    columnNumber: 10
  }, this);
}

// app/routes/dashboard._dashboard.profile.tsx
var dashboard_dashboard_profile_exports = {};
__export(dashboard_dashboard_profile_exports, {
  default: () => AddOpportunity4
});

// app/components/dashboard/profile.tsx
var import_core8 = require("@mantine/core"), import_form2 = require("@mantine/form"), import_icons_react6 = require("@tabler/icons-react"), import_react8 = require("react"), import_core9 = require("@mantine/core"), import_dropzone2 = require("@mantine/dropzone"), import_icons_react7 = require("@tabler/icons-react"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), useStyles6 = (0, import_core9.createStyles)((theme2) => ({
  wrapper: {
    position: "relative",
    marginBottom: (0, import_core9.rem)(30)
  },
  dropzone: {
    borderWidth: (0, import_core9.rem)(1),
    paddingBottom: (0, import_core9.rem)(50)
  },
  icon: {
    color: theme2.colorScheme === "dark" ? theme2.colors.dark[3] : theme2.colors.gray[4]
  },
  control: {
    position: "absolute",
    width: (0, import_core9.rem)(250),
    left: `calc(50% - ${(0, import_core9.rem)(125)})`,
    bottom: (0, import_core9.rem)(-20)
  },
  linksContainer: {
    width: "100%",
    display: "flex",
    alignItems: "flex-end"
  },
  linksInput: {
    flex: 1,
    marginRight: theme2.spacing.md
  }
}));
function DropzoneButton2({ formProps }) {
  let { classes, theme: theme2 } = useStyles6(), openRef = (0, import_react8.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: classes.wrapper, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      import_core8.TextInput,
      {
        label: "Resume",
        placeholder: "Resume URL",
        mt: "md",
        name: "subject",
        variant: "filled",
        ...formProps
      },
      void 0,
      !1,
      {
        fileName: "app/components/dashboard/profile.tsx",
        lineNumber: 67,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      import_dropzone2.Dropzone,
      {
        openRef,
        onDrop: () => {
        },
        className: classes.dropzone,
        radius: "md",
        mt: "md",
        accept: [import_dropzone2.MIME_TYPES.pdf],
        maxSize: 5 * 1024 ** 2,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { style: { pointerEvents: "none" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core8.Group, { position: "center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_dropzone2.Dropzone.Accept, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
              import_icons_react7.IconDownload,
              {
                size: (0, import_core9.rem)(50),
                color: theme2.colors[theme2.primaryColor][6],
                stroke: 1.5
              },
              void 0,
              !1,
              {
                fileName: "app/components/dashboard/profile.tsx",
                lineNumber: 87,
                columnNumber: 15
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/dashboard/profile.tsx",
              lineNumber: 86,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_dropzone2.Dropzone.Reject, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_icons_react7.IconX, { size: (0, import_core9.rem)(50), color: theme2.colors.red[6], stroke: 1.5 }, void 0, !1, {
              fileName: "app/components/dashboard/profile.tsx",
              lineNumber: 94,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/components/dashboard/profile.tsx",
              lineNumber: 93,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_dropzone2.Dropzone.Idle, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
              import_icons_react7.IconCloudUpload,
              {
                size: (0, import_core9.rem)(50),
                color: theme2.colorScheme === "dark" ? theme2.colors.dark[0] : theme2.black,
                stroke: 1.5
              },
              void 0,
              !1,
              {
                fileName: "app/components/dashboard/profile.tsx",
                lineNumber: 97,
                columnNumber: 15
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/dashboard/profile.tsx",
              lineNumber: 96,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/dashboard/profile.tsx",
            lineNumber: 85,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core9.Text, { ta: "center", fw: 700, fz: "lg", mt: "xl", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_dropzone2.Dropzone.Accept, { children: "Drop files here" }, void 0, !1, {
              fileName: "app/components/dashboard/profile.tsx",
              lineNumber: 110,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_dropzone2.Dropzone.Reject, { children: "Pdf file less than 5mb" }, void 0, !1, {
              fileName: "app/components/dashboard/profile.tsx",
              lineNumber: 111,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_dropzone2.Dropzone.Idle, { children: "Upload Resume/ Enter URL Above" }, void 0, !1, {
              fileName: "app/components/dashboard/profile.tsx",
              lineNumber: 112,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/dashboard/profile.tsx",
            lineNumber: 109,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core9.Text, { ta: "center", fz: "sm", mt: "xs", c: "dimmed", children: [
            "Drag'n'drop files here to upload. We can accept only",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("i", { children: ".pdf" }, void 0, !1, {
              fileName: "app/components/dashboard/profile.tsx",
              lineNumber: 116,
              columnNumber: 13
            }, this),
            " files that are less than 2mb in size."
          ] }, void 0, !0, {
            fileName: "app/components/dashboard/profile.tsx",
            lineNumber: 114,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/dashboard/profile.tsx",
          lineNumber: 84,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/dashboard/profile.tsx",
        lineNumber: 75,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      import_core8.Button,
      {
        className: classes.control,
        size: "md",
        onClick: () => {
          var _a;
          return (_a = openRef.current) == null ? void 0 : _a.call(openRef);
        },
        children: "Select files"
      },
      void 0,
      !1,
      {
        fileName: "app/components/dashboard/profile.tsx",
        lineNumber: 121,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/dashboard/profile.tsx",
    lineNumber: 66,
    columnNumber: 5
  }, this);
}
function TypeInput() {
  let data4 = [
    {
      label: "Github",
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_icons_react6.IconBrandGithub, { size: 16 }, void 0, !1, {
        fileName: "app/components/dashboard/profile.tsx",
        lineNumber: 136,
        columnNumber: 13
      }, this)
    },
    {
      label: "Linkedin",
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_icons_react6.IconBrandLinkedin, { size: 16 }, void 0, !1, {
        fileName: "app/components/dashboard/profile.tsx",
        lineNumber: 140,
        columnNumber: 13
      }, this)
    },
    {
      label: "Behance",
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_icons_react6.IconBrandBehance, { size: 16 }, void 0, !1, {
        fileName: "app/components/dashboard/profile.tsx",
        lineNumber: 144,
        columnNumber: 13
      }, this)
    }
  ], [selected, setSelected] = (0, import_react8.useState)(data4[0]), items = data4.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
    import_core8.Menu.Item,
    {
      icon: item.icon,
      onClick: () => setSelected(item),
      children: item.label
    },
    item.label,
    !1,
    {
      fileName: "app/components/dashboard/profile.tsx",
      lineNumber: 150,
      columnNumber: 5
    },
    this
  ));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core8.Menu, { radius: "md", withinPortal: !0, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core8.Menu.Target, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core8.Button, { children: [
      selected.icon,
      " \xA0",
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", { children: selected.label }, void 0, !1, {
        fileName: "app/components/dashboard/profile.tsx",
        lineNumber: 164,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_icons_react6.IconChevronDown, { size: "1rem", stroke: 1.5 }, void 0, !1, {
        fileName: "app/components/dashboard/profile.tsx",
        lineNumber: 165,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/dashboard/profile.tsx",
      lineNumber: 162,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/dashboard/profile.tsx",
      lineNumber: 161,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core8.Menu.Dropdown, { children: items }, void 0, !1, {
      fileName: "app/components/dashboard/profile.tsx",
      lineNumber: 168,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/dashboard/profile.tsx",
    lineNumber: 160,
    columnNumber: 5
  }, this);
}
function LinkInput({
  placeholder,
  label,
  formInputProps,
  onPress
}) {
  let { classes } = useStyles6();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: classes.linksContainer, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      import_core8.TextInput,
      {
        className: classes.linksInput,
        placeholder,
        label,
        mt: "md",
        variant: "filled",
        rightSection: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(TypeInput, {}, void 0, !1, {
          fileName: "app/components/dashboard/profile.tsx",
          lineNumber: 194,
          columnNumber: 23
        }, this),
        rightSectionWidth: 92,
        ...formInputProps
      },
      void 0,
      !1,
      {
        fileName: "app/components/dashboard/profile.tsx",
        lineNumber: 188,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core8.Button, { onClick: onPress, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_icons_react6.IconPlus, { size: 16 }, void 0, !1, {
        fileName: "app/components/dashboard/profile.tsx",
        lineNumber: 200,
        columnNumber: 9
      }, this),
      " Add"
    ] }, void 0, !0, {
      fileName: "app/components/dashboard/profile.tsx",
      lineNumber: 199,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/dashboard/profile.tsx",
    lineNumber: 187,
    columnNumber: 5
  }, this);
}
function Profile() {
  let form = (0, import_form2.useForm)({
    initialValues: {
      firstName: "",
      lastName: "",
      streamId: "",
      marks10: "",
      marks12: "",
      marksGrad: "",
      marksPost: "",
      resumeURL: ""
    },
    validate: {}
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core8.Grid, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core8.Grid.Col, { lg: 10, xl: 5, md: 12, sm: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("form", { onSubmit: form.onSubmit(() => {
  }), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core8.Title, { order: 2, size: "h1", mb: "md", weight: 900, children: "Your Profile" }, void 0, !1, {
      fileName: "app/components/dashboard/profile.tsx",
      lineNumber: 225,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      import_core8.TextInput,
      {
        label: "First Name",
        placeholder: "First Name",
        name: "position",
        mt: "md",
        variant: "filled",
        ...form.getInputProps("firstName")
      },
      void 0,
      !1,
      {
        fileName: "app/components/dashboard/profile.tsx",
        lineNumber: 228,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      import_core8.TextInput,
      {
        label: "Last Name",
        placeholder: "Last Name",
        name: "position",
        mt: "md",
        variant: "filled",
        ...form.getInputProps("lastName")
      },
      void 0,
      !1,
      {
        fileName: "app/components/dashboard/profile.tsx",
        lineNumber: 236,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      import_core8.Select,
      {
        mt: "md",
        withinPortal: !0,
        data: ["React", "Angular", "Svelte", "Vue"],
        placeholder: "Pick your stream",
        label: "Stream",
        variant: "filled",
        ...form.getInputProps("streamId")
      },
      void 0,
      !1,
      {
        fileName: "app/components/dashboard/profile.tsx",
        lineNumber: 245,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      import_core8.TextInput,
      {
        label: "10th Marks",
        placeholder: "10th Marks",
        name: "url",
        mt: "md",
        variant: "filled",
        ...form.getInputProps("marks10")
      },
      void 0,
      !1,
      {
        fileName: "app/components/dashboard/profile.tsx",
        lineNumber: 255,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      import_core8.TextInput,
      {
        label: "12th Marks",
        placeholder: "12th Marks",
        name: "url",
        mt: "md",
        variant: "filled",
        ...form.getInputProps("marks12")
      },
      void 0,
      !1,
      {
        fileName: "app/components/dashboard/profile.tsx",
        lineNumber: 263,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      import_core8.TextInput,
      {
        label: "Marks in Graduation/ CGPA",
        placeholder: "Marks/ CGPA",
        name: "url",
        mt: "md",
        variant: "filled",
        ...form.getInputProps("marksGrad")
      },
      void 0,
      !1,
      {
        fileName: "app/components/dashboard/profile.tsx",
        lineNumber: 271,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      import_core8.TextInput,
      {
        label: "Marks in Post Graduation",
        placeholder: "Marks in Post Graduation",
        name: "url",
        mt: "md",
        variant: "filled",
        ...form.getInputProps("marksPost")
      },
      void 0,
      !1,
      {
        fileName: "app/components/dashboard/profile.tsx",
        lineNumber: 279,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      LinkInput,
      {
        placeholder: "Enter the url",
        label: "Project Links",
        formInputProps: form.getInputProps("projects"),
        onPress: () => {
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/dashboard/profile.tsx",
        lineNumber: 287,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      LinkInput,
      {
        placeholder: "Enter the url",
        label: "Portfolio Links",
        formInputProps: form.getInputProps("portfolio"),
        onPress: () => {
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/dashboard/profile.tsx",
        lineNumber: 293,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(DropzoneButton2, { formProps: form.getInputProps("resume") }, void 0, !1, {
      fileName: "app/components/dashboard/profile.tsx",
      lineNumber: 300,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core8.Tooltip, { label: "Save Profile", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core8.Button, { type: "submit", mt: "md", size: "md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_icons_react6.IconFileUpload, { size: 18 }, void 0, !1, {
        fileName: "app/components/dashboard/profile.tsx",
        lineNumber: 304,
        columnNumber: 15
      }, this),
      "\xA0Save Profile"
    ] }, void 0, !0, {
      fileName: "app/components/dashboard/profile.tsx",
      lineNumber: 303,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/dashboard/profile.tsx",
      lineNumber: 302,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/dashboard/profile.tsx",
    lineNumber: 224,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/dashboard/profile.tsx",
    lineNumber: 223,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/dashboard/profile.tsx",
    lineNumber: 222,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard._dashboard.profile.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function AddOpportunity4() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Profile, {}, void 0, !1, {
    fileName: "app/routes/dashboard._dashboard.profile.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

// app/routes/dashboard._dashboard._index.tsx
var dashboard_dashboard_index_exports = {};
__export(dashboard_dashboard_index_exports, {
  default: () => dashboard_dashboard_index_default
});
var import_react_router_dom = require("react-router-dom"), import_react9 = require("react"), Dashboard = () => {
  let navigate = (0, import_react_router_dom.useNavigate)();
  return (0, import_react9.useEffect)(() => {
    navigate("/dashboard/opportunities");
  }, [navigate]), null;
}, dashboard_dashboard_index_default = Dashboard;

// app/routes/dashboard._dashboard.emails.tsx
var dashboard_dashboard_emails_exports = {};
__export(dashboard_dashboard_emails_exports, {
  default: () => Emails
});
var import_editor = __toESM(require_editor()), import_remix_utils2 = require("remix-utils"), import_core10 = require("@mantine/core"), import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function Emails() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_remix_utils2.ClientOnly, { fallback: null, children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "App", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core10.Title, { order: 2, size: "h1", mb: "md", weight: 900, children: "Email Template Editor" }, void 0, !1, {
      fileName: "app/routes/dashboard._dashboard.emails.tsx",
      lineNumber: 10,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_editor.default, {}, void 0, !1, {
      fileName: "app/routes/dashboard._dashboard.emails.tsx",
      lineNumber: 13,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard._dashboard.emails.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboard._dashboard.emails.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard._dashboard.admin.tsx
var dashboard_dashboard_admin_exports = {};
__export(dashboard_dashboard_admin_exports, {
  default: () => DashboardAddUsers
});

// app/components/dashboard/admin.tsx
var import_core11 = require("@mantine/core"), import_icons_react8 = require("@tabler/icons-react"), import_react10 = require("react"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
var useStyles7 = (0, import_core11.createStyles)((theme2, { opened }) => ({
  control: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${theme2.spacing.xs} ${theme2.spacing.md}`,
    borderRadius: theme2.radius.md,
    border: `${(0, import_core11.rem)(1)} solid ${theme2.colorScheme === "dark" ? theme2.colors.dark[6] : theme2.colors.gray[2]}`,
    transition: "background-color 150ms ease",
    backgroundColor: theme2.colorScheme === "dark" ? theme2.colors.dark[opened ? 5 : 6] : opened ? theme2.colors.gray[0] : theme2.white,
    "&:hover": {
      backgroundColor: theme2.colorScheme === "dark" ? theme2.colors.dark[5] : theme2.colors.gray[0]
    }
  },
  label: {
    fontWeight: 500,
    fontSize: theme2.fontSizes.sm
  },
  icon: {
    transition: "transform 150ms ease",
    transform: opened ? "rotate(180deg)" : "rotate(0deg)"
  },
  reportOppSelector: {
    display: "flex"
  }
}));
function Admin() {
  let data4 = [
    { label: "English" },
    { label: "German" },
    { label: "Italian" },
    { label: "French" },
    { label: "Polish" }
  ], [opened, setOpened] = (0, import_react10.useState)(!1), { classes } = useStyles7({ opened }), [selected, setSelected] = (0, import_react10.useState)(data4[0]), items = data4.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core11.Menu.Item, { onClick: () => setSelected(item), children: item.label }, item.label, !1, {
    fileName: "app/components/dashboard/admin.tsx",
    lineNumber: 78,
    columnNumber: 5
  }, this));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core11.Title, { order: 2, size: "h1", mb: "md", weight: 900, children: "Admin Dashboard" }, void 0, !1, {
      fileName: "app/components/dashboard/admin.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core11.Grid, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core11.Grid.Col, { lg: 6, sm: 12, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core11.Title, { order: 2, size: "h2", mb: "md", weight: 600, children: "Generate Report" }, void 0, !1, {
          fileName: "app/components/dashboard/admin.tsx",
          lineNumber: 91,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: classes.reportOppSelector, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
            import_core11.Menu,
            {
              onOpen: () => setOpened(!0),
              onClose: () => setOpened(!1),
              radius: "md",
              width: "target",
              withinPortal: !0,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core11.Menu.Target, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core11.UnstyledButton, { className: classes.control, children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core11.Group, { spacing: "xs", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: classes.label, children: selected.label }, void 0, !1, {
                    fileName: "app/components/dashboard/admin.tsx",
                    lineNumber: 105,
                    columnNumber: 21
                  }, this) }, void 0, !1, {
                    fileName: "app/components/dashboard/admin.tsx",
                    lineNumber: 104,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
                    import_icons_react8.IconChevronDown,
                    {
                      size: "1rem",
                      className: classes.icon,
                      stroke: 1.5
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/dashboard/admin.tsx",
                      lineNumber: 107,
                      columnNumber: 19
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/components/dashboard/admin.tsx",
                  lineNumber: 103,
                  columnNumber: 17
                }, this) }, void 0, !1, {
                  fileName: "app/components/dashboard/admin.tsx",
                  lineNumber: 102,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core11.Menu.Dropdown, { children: items }, void 0, !1, {
                  fileName: "app/components/dashboard/admin.tsx",
                  lineNumber: 114,
                  columnNumber: 15
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/dashboard/admin.tsx",
              lineNumber: 95,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core11.Space, { w: "md" }, void 0, !1, {
            fileName: "app/components/dashboard/admin.tsx",
            lineNumber: 116,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core11.Button, { children: " Generate Report " }, void 0, !1, {
            fileName: "app/components/dashboard/admin.tsx",
            lineNumber: 117,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/dashboard/admin.tsx",
          lineNumber: 94,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/dashboard/admin.tsx",
        lineNumber: 90,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core11.Grid.Col, { lg: 6, sm: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core11.Title, { order: 2, size: "h2", mb: "md", weight: 600, children: "Generate Report" }, void 0, !1, {
        fileName: "app/components/dashboard/admin.tsx",
        lineNumber: 121,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/dashboard/admin.tsx",
        lineNumber: 120,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/dashboard/admin.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/dashboard/admin.tsx",
    lineNumber: 84,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard._dashboard.admin.tsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function DashboardAddUsers() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Admin, {}, void 0, !1, {
    fileName: "app/routes/dashboard._dashboard.admin.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

// app/routes/dashboard._dashboard.tsx
var dashboard_dashboard_exports = {};
__export(dashboard_dashboard_exports, {
  default: () => DashboardLayout,
  loader: () => loader2
});
var import_core12 = require("@mantine/core"), import_icons_react9 = require("@tabler/icons-react"), import_react12 = require("@remix-run/react");

// app/components/landing/logo.tsx
var import_react11 = require("@remix-run/react");

// assets/logo.png
var logo_default = "/build/_assets/logo-MLLT3XH6.png";

// app/components/landing/logo.tsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), Logo = ({ height = 32, width = 130 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react11.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("img", { height, width, src: logo_default, alt: "WorkHub Logo" }, void 0, !1, {
  fileName: "app/components/landing/logo.tsx",
  lineNumber: 6,
  columnNumber: 5
}, this) }, void 0, !1, {
  fileName: "app/components/landing/logo.tsx",
  lineNumber: 5,
  columnNumber: 3
}, this), logo_default2 = Logo;

// app/routes/dashboard._dashboard.tsx
var import_react13 = require("react");

// assets/user.png
var user_default = "/build/_assets/user-XNN6RYSJ.png";

// app/components/dashboard/loaders/dashboard.ts
var dashboardLoader = async ({ request }) => await requireUserId(request, "/");

// app/routes/dashboard._dashboard.tsx
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), useStyles8 = (0, import_core12.createStyles)((theme2) => ({
  footer: {
    paddingTop: theme2.spacing.md,
    marginTop: theme2.spacing.md,
    borderTop: `${(0, import_core12.rem)(1)} solid ${theme2.colorScheme === "dark" ? theme2.colors.dark[4] : theme2.colors.gray[2]}`
  },
  link: {
    ...theme2.fn.focusStyles(),
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    fontSize: theme2.fontSizes.sm,
    color: theme2.colorScheme === "dark" ? theme2.colors.dark[1] : theme2.colors.gray[7],
    padding: `${theme2.spacing.xs} ${theme2.spacing.sm}`,
    borderRadius: theme2.radius.sm,
    fontWeight: 500,
    "&:hover": {
      backgroundColor: theme2.colorScheme === "dark" ? theme2.colors.dark[6] : theme2.colors.gray[0],
      color: theme2.colorScheme === "dark" ? theme2.white : theme2.black,
      [`& .${(0, import_core12.getStylesRef)("icon")}`]: {
        color: theme2.colorScheme === "dark" ? theme2.white : theme2.black
      }
    }
  },
  linkIcon: {
    ref: (0, import_core12.getStylesRef)("icon"),
    color: theme2.colorScheme === "dark" ? theme2.colors.dark[2] : theme2.colors.gray[6],
    marginRight: theme2.spacing.sm
  },
  linkActive: {
    "&, &:hover": {
      backgroundColor: theme2.fn.variant({
        variant: "light",
        color: theme2.primaryColor
      }).background,
      color: theme2.fn.variant({ variant: "light", color: theme2.primaryColor }).color,
      [`& .${(0, import_core12.getStylesRef)("icon")}`]: {
        color: theme2.fn.variant({ variant: "light", color: theme2.primaryColor }).color
      }
    }
  },
  height100: {
    height: "100%"
  }
})), USER_ROLES = Object.freeze({
  USER: "USER",
  SUB_ADMIN: "SUB_ADMIN",
  ADMIN: "ADMIN",
  SUPER_ADMIN: "SUPER_ADMIN"
}), data2 = [
  {
    link: "opportunities",
    label: "Opportunities",
    icon: import_icons_react9.IconClipboardList,
    roles: [
      USER_ROLES.USER,
      USER_ROLES.SUB_ADMIN,
      USER_ROLES.ADMIN,
      USER_ROLES.SUPER_ADMIN
    ]
  },
  {
    link: "application-tracker",
    label: "Application Tracker",
    icon: import_icons_react9.IconBrandGoogleAnalytics,
    roles: [
      USER_ROLES.USER,
      USER_ROLES.SUB_ADMIN,
      USER_ROLES.ADMIN,
      USER_ROLES.SUPER_ADMIN
    ]
  },
  {
    link: "profile",
    label: "Profile",
    icon: import_icons_react9.IconUserCircle,
    roles: [
      USER_ROLES.USER,
      USER_ROLES.SUB_ADMIN,
      USER_ROLES.ADMIN,
      USER_ROLES.SUPER_ADMIN
    ]
  },
  {
    link: "admin",
    label: "Admin",
    icon: import_icons_react9.IconUserBolt,
    roles: [USER_ROLES.ADMIN, USER_ROLES.SUPER_ADMIN]
  },
  {
    link: "add-opportunity",
    label: "Add Opportunity",
    icon: import_icons_react9.IconClipboardData,
    roles: [USER_ROLES.SUB_ADMIN, USER_ROLES.ADMIN, USER_ROLES.SUPER_ADMIN]
  },
  {
    link: "contacts",
    label: "Contacts",
    icon: import_icons_react9.IconServerBolt,
    roles: [USER_ROLES.SUB_ADMIN, USER_ROLES.ADMIN, USER_ROLES.SUPER_ADMIN]
  },
  {
    link: "emails",
    label: "Emails",
    icon: import_icons_react9.IconMailForward,
    roles: [USER_ROLES.ADMIN, USER_ROLES.SUPER_ADMIN]
  },
  {
    link: "resume-builder",
    label: "Resume Builder",
    icon: import_icons_react9.IconClipboardText,
    roles: [
      USER_ROLES.USER,
      USER_ROLES.SUB_ADMIN,
      USER_ROLES.ADMIN,
      USER_ROLES.SUPER_ADMIN
    ]
  }
], loader2 = dashboardLoader;
function DashboardLayout() {
  let { classes } = useStyles8(), [opened, setOpened] = (0, import_react13.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
    import_core12.AppShell,
    {
      padding: "md",
      navbarOffsetBreakpoint: "sm",
      fixed: !0,
      navbar: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(DashNavbar, { opened: [opened, setOpened] }, void 0, !1, {
        fileName: "app/routes/dashboard._dashboard.tsx",
        lineNumber: 192,
        columnNumber: 15
      }, this),
      header: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core12.Header, { height: 60, px: "md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core12.Group, { position: "apart", className: classes.height100, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core12.Group, { position: "apart", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(logo_default2, {}, void 0, !1, {
            fileName: "app/routes/dashboard._dashboard.tsx",
            lineNumber: 197,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core12.Code, { sx: { fontWeight: 700 }, children: "v1.0.0" }, void 0, !1, {
            fileName: "app/routes/dashboard._dashboard.tsx",
            lineNumber: 198,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard._dashboard.tsx",
          lineNumber: 196,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core12.Group, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core12.MediaQuery, { largerThan: "sm", styles: { display: "none" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
            import_core12.Burger,
            {
              opened,
              onClick: () => setOpened((o) => !o),
              size: "sm",
              mr: "xl"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/dashboard._dashboard.tsx",
              lineNumber: 202,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/dashboard._dashboard.tsx",
            lineNumber: 201,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("a", { href: "/dashboard/profile", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core12.Avatar, { size: 40, src: user_default, radius: 40 }, void 0, !1, {
            fileName: "app/routes/dashboard._dashboard.tsx",
            lineNumber: 210,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/dashboard._dashboard.tsx",
            lineNumber: 209,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard._dashboard.tsx",
          lineNumber: 200,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard._dashboard.tsx",
        lineNumber: 195,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard._dashboard.tsx",
        lineNumber: 194,
        columnNumber: 9
      }, this),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react12.Outlet, {}, void 0, !1, {
        fileName: "app/routes/dashboard._dashboard.tsx",
        lineNumber: 217,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/dashboard._dashboard.tsx",
      lineNumber: 188,
      columnNumber: 5
    },
    this
  );
}
var DashNavbar = ({
  opened: [opened, setOpened]
}) => {
  let { classes, cx } = useStyles8(), location = (0, import_react12.useLocation)(), [role] = (0, import_react13.useState)(USER_ROLES.SUPER_ADMIN), links2 = data2.filter((item) => item.roles.includes(role)).map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
    "a",
    {
      className: cx(classes.link, {
        [classes.linkActive]: location.pathname.includes(
          `/dashboard/${item.link}`
        )
      }),
      href: `/dashboard/${item.link}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(item.icon, { className: classes.linkIcon, stroke: 1.5 }, void 0, !1, {
          fileName: "app/routes/dashboard._dashboard.tsx",
          lineNumber: 246,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", { children: item.label }, void 0, !1, {
          fileName: "app/routes/dashboard._dashboard.tsx",
          lineNumber: 247,
          columnNumber: 9
        }, this)
      ]
    },
    item.label,
    !0,
    {
      fileName: "app/routes/dashboard._dashboard.tsx",
      lineNumber: 237,
      columnNumber: 7
    },
    this
  ));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
    import_core12.Navbar,
    {
      hiddenBreakpoint: "sm",
      hidden: !opened,
      width: { sm: 300 },
      p: "md",
      mr: 10,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core12.Navbar.Section, { grow: !0, children: links2 }, void 0, !1, {
          fileName: "app/routes/dashboard._dashboard.tsx",
          lineNumber: 258,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core12.Navbar.Section, { className: classes.footer, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
          "a",
          {
            href: "/",
            className: classes.link,
            onClick: () => localStorage.removeItem("placementToken"),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_icons_react9.IconLogout, { className: classes.linkIcon, stroke: 1.5 }, void 0, !1, {
                fileName: "app/routes/dashboard._dashboard.tsx",
                lineNumber: 265,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", { children: "Logout" }, void 0, !1, {
                fileName: "app/routes/dashboard._dashboard.tsx",
                lineNumber: 266,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/dashboard._dashboard.tsx",
            lineNumber: 260,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/dashboard._dashboard.tsx",
          lineNumber: 259,
          columnNumber: 7
        }, this),
        " "
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/dashboard._dashboard.tsx",
      lineNumber: 251,
      columnNumber: 5
    },
    this
  );
};

// app/routes/register.tsx
var register_exports = {};
__export(register_exports, {
  action: () => action,
  default: () => Index
});

// app/components/auth/register.tsx
var import_core14 = require("@mantine/core");

// app/components/landing/navbar.tsx
var import_core13 = require("@mantine/core"), import_react14 = require("@remix-run/react");
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function Navbar2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core13.Box, { pb: 120, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core13.Header, { height: 60, px: "md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core13.Group, { position: "apart", sx: { height: "100%" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(logo_default2, {}, void 0, !1, {
      fileName: "app/components/landing/navbar.tsx",
      lineNumber: 10,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core13.Group, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react14.Link, { to: "/login", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core13.Button, { variant: "default", children: "Login" }, void 0, !1, {
        fileName: "app/components/landing/navbar.tsx",
        lineNumber: 13,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/landing/navbar.tsx",
        lineNumber: 12,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react14.Link, { to: "/register", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core13.Button, { children: "Register" }, void 0, !1, {
        fileName: "app/components/landing/navbar.tsx",
        lineNumber: 16,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/landing/navbar.tsx",
        lineNumber: 15,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/landing/navbar.tsx",
      lineNumber: 11,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/landing/navbar.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/landing/navbar.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/landing/navbar.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/components/auth/register.tsx
var import_react15 = require("@remix-run/react"), import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
function Signup() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_jsx_dev_runtime21.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Navbar2, {}, void 0, !1, {
      fileName: "app/components/auth/register.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core14.Container, { size: 600, my: 40, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core14.Title, { align: "center", weight: 900, children: "Create your Account" }, void 0, !1, {
        fileName: "app/components/auth/register.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core14.Text, { color: "dimmed", size: "sm", align: "center", mt: 5, children: [
        "Already have an account?",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core14.Anchor, { size: "sm", href: "/login", children: "Login" }, void 0, !1, {
          fileName: "app/components/auth/register.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/auth/register.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react15.Form, { method: "POST", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core14.Paper, { withBorder: !0, shadow: "md", p: 30, mt: 30, radius: "md", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
          import_core14.TextInput,
          {
            label: "Name",
            placeholder: "john doe",
            name: "name",
            required: !0,
            mt: "md"
          },
          void 0,
          !1,
          {
            fileName: "app/components/auth/register.tsx",
            lineNumber: 32,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
          import_core14.TextInput,
          {
            label: "Email",
            name: "email",
            placeholder: "johndoe@example.com",
            required: !0,
            mt: "md"
          },
          void 0,
          !1,
          {
            fileName: "app/components/auth/register.tsx",
            lineNumber: 39,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
          import_core14.PasswordInput,
          {
            label: "Password",
            placeholder: "+(XX) XXXXX XXXXX",
            name: "password",
            required: !0,
            mt: "md"
          },
          void 0,
          !1,
          {
            fileName: "app/components/auth/register.tsx",
            lineNumber: 46,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
          import_core14.TextInput,
          {
            label: "Mobile Number",
            placeholder: "999-999-9999",
            name: "mobile",
            required: !0,
            mt: "md"
          },
          void 0,
          !1,
          {
            fileName: "app/components/auth/register.tsx",
            lineNumber: 53,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core14.Group, { position: "left", mt: "lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core14.Checkbox, {}, void 0, !1, {
            fileName: "app/components/auth/register.tsx",
            lineNumber: 61,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core14.Text, { size: "sm", children: [
            "You agree to our",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core14.Anchor, { component: "button", size: "sm", children: "Terms and Conditions" }, void 0, !1, {
              fileName: "app/components/auth/register.tsx",
              lineNumber: 64,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/auth/register.tsx",
            lineNumber: 62,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/auth/register.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core14.Button, { type: "submit", fullWidth: !0, mt: "xl", children: "Register" }, void 0, !1, {
          fileName: "app/components/auth/register.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/auth/register.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/auth/register.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/auth/register.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/auth/register.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/utils/auth/types.server.ts
var import_zod = require("zod"), import_client2 = require("@prisma/client"), LoginSchema = import_zod.z.object({
  email: import_zod.z.string().email(),
  password: import_zod.z.string()
}), RegisterSchema = LoginSchema.extend({
  name: import_zod.z.string(),
  mobile: import_zod.z.string(),
  role: import_zod.z.nativeEnum(import_client2.UserRole)
}), PropertySchema = import_zod.z.object({
  property: import_zod.z.string()
}), VerifySchema = import_zod.z.object({
  token: import_zod.z.string()
});

// app/utils/auth/actions.ts
var import_client3 = require("@prisma/client"), LoginAction = async ({ request }) => {
  let form = await request.formData(), email = form.get("email"), password = form.get("password");
  return LoginSchema.parse({ email, password }), await login({
    email,
    password
  });
}, RegisterAction = async ({ request }) => {
  let form = await request.formData(), email = form.get("email"), password = form.get("password"), name = form.get("name"), mobile = form.get("mobile"), role = import_client3.UserRole.USER, body = { email, password, name, mobile, role };
  return RegisterSchema.parse(body), await register(body);
};

// app/routes/register.tsx
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Signup, {}, void 0, !1, {
    fileName: "app/routes/register.tsx",
    lineNumber: 5,
    columnNumber: 10
  }, this);
}
var action = RegisterAction;

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index2
});
var import_core17 = require("@mantine/core");

// app/components/landing/dots.tsx
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime");
function Dots({ size = 185, radius = 2.5, ...others }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
    "svg",
    {
      "aria-hidden": !0,
      xmlns: "http://www.w3.org/2000/svg",
      fill: "currentColor",
      viewBox: "0 0 185 185",
      width: size,
      height: size,
      ...others,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 18,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "60", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 19,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "120", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 20,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "20", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 21,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "80", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 22,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "140", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 23,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "40", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 24,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "100", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 25,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "160", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 26,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "180", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 27,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", y: "20", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 28,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "60", y: "20", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 29,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "120", y: "20", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 30,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "20", y: "20", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 31,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "80", y: "20", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 32,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "140", y: "20", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 33,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "40", y: "20", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 34,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "100", y: "20", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 35,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "160", y: "20", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 36,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "180", y: "20", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 37,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", y: "40", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 38,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "60", y: "40", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 39,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "120", y: "40", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 40,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "20", y: "40", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 41,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "80", y: "40", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 42,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "140", y: "40", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 43,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "40", y: "40", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 44,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "100", y: "40", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 45,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "160", y: "40", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 46,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "180", y: "40", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 47,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", y: "60", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 48,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "60", y: "60", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 49,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "120", y: "60", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 50,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "20", y: "60", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 51,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "80", y: "60", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 52,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "140", y: "60", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 53,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "40", y: "60", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 54,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "100", y: "60", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 55,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "160", y: "60", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 56,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "180", y: "60", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 57,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", y: "80", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 58,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "60", y: "80", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 59,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "120", y: "80", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 60,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "20", y: "80", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 61,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "80", y: "80", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 62,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "140", y: "80", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 63,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "40", y: "80", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 64,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "100", y: "80", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 65,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "160", y: "80", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 66,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "180", y: "80", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 67,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", y: "100", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 68,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "60", y: "100", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 69,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "120", y: "100", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 70,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "20", y: "100", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 71,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "80", y: "100", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 72,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "140", y: "100", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 73,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "40", y: "100", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 74,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "100", y: "100", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 75,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "160", y: "100", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 76,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "180", y: "100", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 77,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", y: "120", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 78,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "60", y: "120", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 79,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "120", y: "120", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 80,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "20", y: "120", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 81,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "80", y: "120", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 82,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "140", y: "120", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 83,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "40", y: "120", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 84,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "100", y: "120", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 85,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "160", y: "120", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 86,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "180", y: "120", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 87,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", y: "140", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 88,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "60", y: "140", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 89,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "120", y: "140", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 90,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "20", y: "140", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 91,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "80", y: "140", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 92,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "140", y: "140", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 93,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "40", y: "140", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 94,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "100", y: "140", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 95,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "160", y: "140", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 96,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "180", y: "140", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 97,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", y: "160", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 98,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "60", y: "160", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 99,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "120", y: "160", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 100,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "20", y: "160", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 101,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "80", y: "160", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 102,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "140", y: "160", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 103,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "40", y: "160", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 104,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "100", y: "160", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 105,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "160", y: "160", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 106,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "180", y: "160", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 107,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", y: "180", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 108,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "60", y: "180", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 109,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "120", y: "180", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 110,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "20", y: "180", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 111,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "80", y: "180", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 112,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "140", y: "180", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 113,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "40", y: "180", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 114,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "100", y: "180", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 115,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "160", y: "180", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 116,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { width: "5", height: "5", x: "180", y: "180", rx: radius }, void 0, !1, {
          fileName: "app/components/landing/dots.tsx",
          lineNumber: 117,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/landing/dots.tsx",
      lineNumber: 9,
      columnNumber: 5
    },
    this
  );
}

// app/components/landing/features.tsx
var import_core15 = require("@mantine/core"), import_icons_react10 = require("@tabler/icons-react"), import_jsx_dev_runtime24 = require("react/jsx-dev-runtime"), featuresData = [
  {
    title: "Employer Profiles",
    description: "Workhub's in-depth employer profiles give students valuable insights into company culture, mission, and values. This helps students make informed decisions and stand out in the application process.",
    icon: import_icons_react10.IconUserShield
  },
  {
    title: "Privacy focused",
    description: "Workhub prioritizes data privacy with industry-standard security measures, transparency, and no selling or sharing of personal data without explicit consent. Trust us with your sensitive information.",
    icon: import_icons_react10.IconCookie
  },
  {
    title: "Email Templates",
    description: "Workhub's email template builder creates custom emails with pre-designed templates that make a strong impression on employers. Save time and effort while enhancing the job search experience.",
    icon: import_icons_react10.IconMailBolt
  }
], useStyles9 = (0, import_core15.createStyles)((theme2) => ({
  title: {
    fontSize: (0, import_core15.rem)(20),
    fontWeight: 700,
    [theme2.fn.smallerThan("sm")]: {
      fontSize: (0, import_core15.rem)(24)
    }
  },
  description: {
    maxWidth: 600,
    margin: "auto",
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme2.fn.primaryColor(),
      width: (0, import_core15.rem)(45),
      height: (0, import_core15.rem)(2),
      marginTop: theme2.spacing.sm,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  card: {
    border: `${(0, import_core15.rem)(1)} solid ${theme2.colorScheme === "dark" ? theme2.colors.dark[5] : theme2.colors.gray[1]}`
  },
  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme2.fn.primaryColor(),
      width: (0, import_core15.rem)(45),
      height: (0, import_core15.rem)(2),
      marginTop: theme2.spacing.sm
    }
  }
}));
function FeaturesCards() {
  let { classes, theme: theme2 } = useStyles9(), features = featuresData.map((feature) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
    import_core15.Card,
    {
      shadow: "md",
      radius: "md",
      className: classes.card,
      padding: "xl",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(feature.icon, { size: (0, import_core15.rem)(50), stroke: 2, color: theme2.fn.primaryColor() }, void 0, !1, {
          fileName: "app/components/landing/features.tsx",
          lineNumber: 87,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core15.Text, { fz: "lg", fw: 500, className: classes.cardTitle, mt: "md", children: feature.title }, void 0, !1, {
          fileName: "app/components/landing/features.tsx",
          lineNumber: 88,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core15.Text, { fz: "sm", c: "dimmed", mt: "sm", children: feature.description }, void 0, !1, {
          fileName: "app/components/landing/features.tsx",
          lineNumber: 91,
          columnNumber: 7
        }, this)
      ]
    },
    feature.title,
    !0,
    {
      fileName: "app/components/landing/features.tsx",
      lineNumber: 80,
      columnNumber: 5
    },
    this
  ));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core15.Container, { size: "lg", py: "xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core15.Title, { className: classes.title, ta: "center", mt: "sm", children: "Integrate effortlessly with any number of students" }, void 0, !1, {
      fileName: "app/components/landing/features.tsx",
      lineNumber: 99,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_core15.Text, { c: "dimmed", className: classes.description, ta: "center", mt: "md", children: "Workhub is the go-to placement portal for college placement cells, connecting students with top companies and job opportunities. Join now for a seamless and successful job search experience." }, void 0, !1, {
      fileName: "app/components/landing/features.tsx",
      lineNumber: 103,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      import_core15.SimpleGrid,
      {
        cols: 3,
        spacing: "xl",
        mt: 50,
        breakpoints: [{ maxWidth: "md", cols: 1 }],
        children: features
      },
      void 0,
      !1,
      {
        fileName: "app/components/landing/features.tsx",
        lineNumber: 109,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/landing/features.tsx",
    lineNumber: 98,
    columnNumber: 5
  }, this);
}

// app/components/landing/footer.tsx
var import_core16 = require("@mantine/core"), import_icons_react11 = require("@tabler/icons-react");
var import_jsx_dev_runtime25 = require("react/jsx-dev-runtime"), useStyles10 = (0, import_core16.createStyles)((theme2) => ({
  footer: {
    marginTop: (0, import_core16.rem)(120),
    paddingTop: `calc(${theme2.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme2.spacing.xl} * 2)`,
    backgroundColor: theme2.colorScheme === "dark" ? theme2.colors.dark[6] : theme2.colors.gray[0],
    borderTop: `${(0, import_core16.rem)(1)} solid ${theme2.colorScheme === "dark" ? theme2.colors.dark[5] : theme2.colors.gray[2]}`
  },
  logo: {
    maxWidth: (0, import_core16.rem)(200),
    [theme2.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  },
  description: {
    marginTop: (0, import_core16.rem)(5),
    [theme2.fn.smallerThan("sm")]: {
      marginTop: theme2.spacing.xs,
      textAlign: "center"
    }
  },
  inner: {
    display: "flex",
    justifyContent: "space-between",
    [theme2.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center"
    }
  },
  groups: {
    display: "flex",
    flexWrap: "wrap",
    [theme2.fn.smallerThan("sm")]: {
      display: "none"
    }
  },
  wrapper: {
    width: (0, import_core16.rem)(160)
  },
  link: {
    display: "block",
    color: theme2.colorScheme === "dark" ? theme2.colors.dark[1] : theme2.colors.gray[6],
    fontSize: theme2.fontSizes.sm,
    paddingTop: (0, import_core16.rem)(3),
    paddingBottom: (0, import_core16.rem)(3),
    "&:hover": {
      textDecoration: "underline"
    }
  },
  title: {
    fontSize: theme2.fontSizes.lg,
    fontWeight: 700,
    marginBottom: `calc(${theme2.spacing.xs} / 2)`,
    color: theme2.colorScheme === "dark" ? theme2.white : theme2.black
  },
  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme2.spacing.xl,
    paddingTop: theme2.spacing.xl,
    paddingBottom: theme2.spacing.xl,
    borderTop: `${(0, import_core16.rem)(1)} solid ${theme2.colorScheme === "dark" ? theme2.colors.dark[4] : theme2.colors.gray[2]}`,
    [theme2.fn.smallerThan("sm")]: {
      flexDirection: "column"
    }
  },
  social: {
    [theme2.fn.smallerThan("sm")]: {
      marginTop: theme2.spacing.xs
    }
  }
})), data3 = [
  {
    title: "About",
    links: [
      {
        label: "Features",
        link: "#"
      },
      {
        label: "Pricing",
        link: "#"
      },
      {
        label: "Support",
        link: "#"
      },
      {
        label: "Forums",
        link: "#"
      }
    ]
  },
  {
    title: "Project",
    links: [
      {
        label: "Contribute",
        link: "#"
      },
      {
        label: "Media assets",
        link: "#"
      },
      {
        label: "Changelog",
        link: "#"
      },
      {
        label: "Releases",
        link: "#"
      }
    ]
  },
  {
    title: "Community",
    links: [
      {
        label: "Join Discord",
        link: "#"
      },
      {
        label: "Follow on Twitter",
        link: "#"
      },
      {
        label: "Email newsletter",
        link: "#"
      },
      {
        label: "GitHub discussions",
        link: "#"
      }
    ]
  }
];
function Footer() {
  let { classes } = useStyles10(), groups = data3.map((group) => {
    let links2 = group.links.map((link, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
      import_core16.Text,
      {
        className: classes.link,
        component: "a",
        href: link.link,
        onClick: (event) => event.preventDefault(),
        children: link.label
      },
      index,
      !1,
      {
        fileName: "app/components/landing/footer.tsx",
        lineNumber: 188,
        columnNumber: 7
      },
      this
    ));
    return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: classes.wrapper, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core16.Text, { className: classes.title, children: group.title }, void 0, !1, {
        fileName: "app/components/landing/footer.tsx",
        lineNumber: 201,
        columnNumber: 9
      }, this),
      links2
    ] }, group.title, !0, {
      fileName: "app/components/landing/footer.tsx",
      lineNumber: 200,
      columnNumber: 7
    }, this);
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("footer", { className: classes.footer, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core16.Container, { className: classes.inner, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: classes.logo, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(logo_default2, {}, void 0, !1, {
          fileName: "app/components/landing/footer.tsx",
          lineNumber: 211,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core16.Text, { size: "xs", color: "dimmed", className: classes.description, children: "Build fully functional accessible web applications faster than ever" }, void 0, !1, {
          fileName: "app/components/landing/footer.tsx",
          lineNumber: 212,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/landing/footer.tsx",
        lineNumber: 210,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: classes.groups, children: groups }, void 0, !1, {
        fileName: "app/components/landing/footer.tsx",
        lineNumber: 216,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/landing/footer.tsx",
      lineNumber: 209,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core16.Container, { className: classes.afterFooter, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core16.Text, { color: "dimmed", size: "sm", children: "\xA9 2020 mantine.dev. All rights reserved." }, void 0, !1, {
        fileName: "app/components/landing/footer.tsx",
        lineNumber: 219,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core16.Group, { spacing: 0, className: classes.social, position: "right", noWrap: !0, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core16.ActionIcon, { size: "lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_icons_react11.IconBrandTwitter, { size: "1.05rem", stroke: 1.5 }, void 0, !1, {
          fileName: "app/components/landing/footer.tsx",
          lineNumber: 225,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/landing/footer.tsx",
          lineNumber: 224,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core16.ActionIcon, { size: "lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_icons_react11.IconBrandYoutube, { size: "1.05rem", stroke: 1.5 }, void 0, !1, {
          fileName: "app/components/landing/footer.tsx",
          lineNumber: 228,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/landing/footer.tsx",
          lineNumber: 227,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core16.ActionIcon, { size: "lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_icons_react11.IconBrandInstagram, { size: "1.05rem", stroke: 1.5 }, void 0, !1, {
          fileName: "app/components/landing/footer.tsx",
          lineNumber: 231,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/landing/footer.tsx",
          lineNumber: 230,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/landing/footer.tsx",
        lineNumber: 223,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/landing/footer.tsx",
      lineNumber: 218,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/landing/footer.tsx",
    lineNumber: 208,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime"), useStyles11 = (0, import_core17.createStyles)((theme2) => ({
  wrapper: {
    position: "relative",
    paddingTop: (0, import_core17.rem)(120),
    paddingBottom: (0, import_core17.rem)(80),
    [theme2.fn.smallerThan("sm")]: {
      paddingTop: (0, import_core17.rem)(80),
      paddingBottom: (0, import_core17.rem)(60)
    }
  },
  inner: {
    position: "relative",
    zIndex: 1
  },
  dots: {
    position: "absolute",
    color: theme2.colorScheme === "dark" ? theme2.colors.dark[5] : theme2.colors.gray[1],
    [theme2.fn.smallerThan("sm")]: {
      display: "none"
    }
  },
  dotsLeft: {
    left: 0,
    top: 0
  },
  title: {
    textAlign: "center",
    fontWeight: 800,
    fontSize: (0, import_core17.rem)(40),
    letterSpacing: -1,
    color: theme2.colorScheme === "dark" ? theme2.white : theme2.black,
    marginBottom: theme2.spacing.xs,
    [theme2.fn.smallerThan("xs")]: {
      fontSize: (0, import_core17.rem)(28),
      textAlign: "left"
    }
  },
  highlight: {
    textAlign: "center",
    fontSize: (0, import_core17.rem)(80),
    color: theme2.colors[theme2.primaryColor][theme2.colorScheme === "dark" ? 4 : 6]
  },
  description: {
    textAlign: "center",
    [theme2.fn.smallerThan("xs")]: {
      textAlign: "left",
      fontSize: theme2.fontSizes.md
    }
  },
  controls: {
    marginTop: theme2.spacing.lg,
    display: "flex",
    justifyContent: "center",
    [theme2.fn.smallerThan("xs")]: {
      flexDirection: "column"
    }
  },
  control: {
    "&:not(:first-of-type)": {
      marginLeft: theme2.spacing.md
    },
    [theme2.fn.smallerThan("xs")]: {
      height: (0, import_core17.rem)(42),
      fontSize: theme2.fontSizes.md,
      "&:not(:first-of-type)": {
        marginTop: theme2.spacing.md,
        marginLeft: 0
      }
    }
  }
}));
function Index2() {
  let { classes } = useStyles11();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_jsx_dev_runtime26.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(Navbar2, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 110,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core17.Container, { className: classes.wrapper, size: 2100, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(Dots, { className: classes.dots, style: { left: 0, top: 0 } }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 112,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(Dots, { className: classes.dots, style: { left: 60, top: 0 } }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 113,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(Dots, { className: classes.dots, style: { left: 0, top: 140 } }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 114,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(Dots, { className: classes.dots, style: { right: 0, top: 60 } }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 115,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: classes.inner, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core17.Title, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core17.Text, { className: classes.highlight, inherit: !0, children: "WorkHub" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 119,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 118,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core17.Title, { className: classes.title, children: "A Perfect Placement Portal For Your Dream Job" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 123,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core17.Container, { p: 0, size: 600, children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core17.Text, { size: "lg", color: "dimmed", className: classes.description, children: "Find Your Dream Job with Ease: Explore Our Comprehensive Placement Portal for Career Opportunities" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 127,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 126,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: classes.controls, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
            import_core17.Button,
            {
              className: classes.control,
              size: "lg",
              variant: "default",
              color: "gray",
              children: "Book a demo"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 133,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_core17.Button, { className: classes.control, size: "lg", children: "Purchase a license" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 141,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 132,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 117,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 111,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(FeaturesCards, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 147,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 148,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 109,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action2,
  default: () => Index3,
  loader: () => loader3
});
var import_node3 = require("@remix-run/node");

// app/components/auth/login.tsx
var import_react16 = require("react"), import_core18 = require("@mantine/core");
var import_react17 = require("@remix-run/react"), import_jsx_dev_runtime27 = require("react/jsx-dev-runtime");
function Login() {
  let [user, setUser] = (0, import_react16.useState)({
    email: "",
    password: ""
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_jsx_dev_runtime27.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(Navbar2, {}, void 0, !1, {
      fileName: "app/components/auth/login.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core18.Container, { size: 600, my: 40, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core18.Title, { align: "center", weight: 900, children: "Welcome back!" }, void 0, !1, {
        fileName: "app/components/auth/login.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core18.Text, { color: "dimmed", size: "sm", align: "center", mt: 5, children: [
        "Do not have an account yet?",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core18.Anchor, { size: "sm", href: "/register", children: "Create account" }, void 0, !1, {
          fileName: "app/components/auth/login.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/auth/login.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react17.Form, { method: "POST", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core18.Paper, { withBorder: !0, shadow: "md", p: 30, mt: 30, radius: "md", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
          import_core18.TextInput,
          {
            label: "Email",
            name: "email",
            placeholder: "johndoe@example.com",
            required: !0,
            value: user.email,
            onChange: (e) => setUser({ ...user, email: e.currentTarget.value })
          },
          void 0,
          !1,
          {
            fileName: "app/components/auth/login.tsx",
            lineNumber: 38,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
          import_core18.PasswordInput,
          {
            label: "Password",
            name: "password",
            placeholder: ".........",
            required: !0,
            value: user.password,
            onChange: (e) => setUser({ ...user, password: e.currentTarget.value }),
            mt: "md"
          },
          void 0,
          !1,
          {
            fileName: "app/components/auth/login.tsx",
            lineNumber: 48,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core18.Group, { position: "apart", mt: "lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core18.Checkbox, { label: "Remember me" }, void 0, !1, {
            fileName: "app/components/auth/login.tsx",
            lineNumber: 60,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core18.Anchor, { component: "button", size: "sm", children: "Forgot password?" }, void 0, !1, {
            fileName: "app/components/auth/login.tsx",
            lineNumber: 61,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/auth/login.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_core18.Button, { type: "submit", fullWidth: !0, mt: "xl", children: "Login" }, void 0, !1, {
          fileName: "app/components/auth/login.tsx",
          lineNumber: 65,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/auth/login.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/auth/login.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/auth/login.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/auth/login.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var import_jsx_dev_runtime28 = require("react/jsx-dev-runtime");
function Index3() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(Login, {}, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 8,
    columnNumber: 10
  }, this);
}
var loader3 = async ({ request }) => await getUser(request) ? (0, import_node3.redirect)("/dashboard/opportunities") : null, action2 = LoginAction;

// app/routes/$.tsx
var __exports = {};
__export(__exports, {
  default: () => NotFoundImage
});
var import_core19 = require("@mantine/core");

// assets/404.svg
var __default = "/build/_assets/404-RXV5TVF2.svg";

// app/routes/$.tsx
var import_jsx_dev_runtime29 = require("react/jsx-dev-runtime"), useStyles12 = (0, import_core19.createStyles)((theme2) => ({
  root: {
    paddingTop: (0, import_core19.rem)(80),
    paddingBottom: (0, import_core19.rem)(80)
  },
  title: {
    fontWeight: 900,
    fontSize: (0, import_core19.rem)(34),
    marginBottom: theme2.spacing.md,
    [theme2.fn.smallerThan("sm")]: {
      fontSize: (0, import_core19.rem)(32)
    }
  },
  control: {
    [theme2.fn.smallerThan("sm")]: {
      width: "100%"
    }
  },
  mobileImage: {
    [theme2.fn.largerThan("sm")]: {
      display: "none"
    }
  },
  desktopImage: {
    [theme2.fn.smallerThan("sm")]: {
      display: "none"
    }
  }
}));
function NotFoundImage() {
  let { classes } = useStyles12();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core19.Container, { className: classes.root, children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
    import_core19.SimpleGrid,
    {
      spacing: 80,
      cols: 2,
      breakpoints: [{ maxWidth: "sm", cols: 1, spacing: 40 }],
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core19.Image, { src: __default, className: classes.mobileImage }, void 0, !1, {
          fileName: "app/routes/$.tsx",
          lineNumber: 59,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core19.Title, { className: classes.title, children: "Something is not right..." }, void 0, !1, {
            fileName: "app/routes/$.tsx",
            lineNumber: 61,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core19.Text, { color: "dimmed", size: "lg", children: "Page you are trying to open does not exist. You may have mistyped the address, or the page has been moved to another URL. If you think this is an error contact support." }, void 0, !1, {
            fileName: "app/routes/$.tsx",
            lineNumber: 62,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
            import_core19.Button,
            {
              variant: "outline",
              size: "md",
              mt: "xl",
              className: classes.control,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core19.Anchor, { href: "/", children: "Get back to home page" }, void 0, !1, {
                fileName: "app/routes/$.tsx",
                lineNumber: 73,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/$.tsx",
              lineNumber: 67,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/$.tsx",
          lineNumber: 60,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_core19.Image, { src: __default, className: classes.desktopImage }, void 0, !1, {
          fileName: "app/routes/$.tsx",
          lineNumber: 76,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/$.tsx",
      lineNumber: 54,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/$.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "59ec92f3", entry: { module: "/build/entry.client-JZMDDSPH.js", imports: ["/build/_shared/chunk-MLOGHEN4.js", "/build/_shared/chunk-GF42AMKY.js", "/build/_shared/chunk-HATW4RK6.js", "/build/_shared/chunk-OQXYZEBT.js", "/build/_shared/chunk-CZ6M6RY7.js", "/build/_shared/chunk-KCDW4FMX.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-TL65Z3KO.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$": { id: "routes/$", parentId: "root", path: "*", index: void 0, caseSensitive: void 0, module: "/build/routes/$-5RGJTBJV.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-5KDNQXZR.js", imports: ["/build/_shared/chunk-5XNIE2II.js", "/build/_shared/chunk-PEJBOKBU.js", "/build/_shared/chunk-UFHA7U3J.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard._dashboard": { id: "routes/dashboard._dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard._dashboard-I7IHMJGE.js", imports: ["/build/_shared/chunk-PEJBOKBU.js", "/build/_shared/chunk-UFHA7U3J.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard._dashboard._index": { id: "routes/dashboard._dashboard._index", parentId: "routes/dashboard._dashboard", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/dashboard._dashboard._index-NWH3L2K2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard._dashboard.add-opportunity": { id: "routes/dashboard._dashboard.add-opportunity", parentId: "routes/dashboard._dashboard", path: "add-opportunity", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard._dashboard.add-opportunity-S6J47LST.js", imports: ["/build/_shared/chunk-LAFKUNSN.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard._dashboard.admin": { id: "routes/dashboard._dashboard.admin", parentId: "routes/dashboard._dashboard", path: "admin", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard._dashboard.admin-DJBNZA3S.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard._dashboard.application-tracker": { id: "routes/dashboard._dashboard.application-tracker", parentId: "routes/dashboard._dashboard", path: "application-tracker", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard._dashboard.application-tracker-DH3P757C.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard._dashboard.contacts": { id: "routes/dashboard._dashboard.contacts", parentId: "routes/dashboard._dashboard", path: "contacts", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard._dashboard.contacts-HU3UHVPK.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard._dashboard.emails": { id: "routes/dashboard._dashboard.emails", parentId: "routes/dashboard._dashboard", path: "emails", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard._dashboard.emails-XOTHLEZ5.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard._dashboard.opportunities": { id: "routes/dashboard._dashboard.opportunities", parentId: "routes/dashboard._dashboard", path: "opportunities", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard._dashboard.opportunities-TVEDIX4I.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/dashboard._dashboard.profile": { id: "routes/dashboard._dashboard.profile", parentId: "routes/dashboard._dashboard", path: "profile", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard._dashboard.profile-EU2ENDOC.js", imports: ["/build/_shared/chunk-LAFKUNSN.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard._dashboard.resume-builder": { id: "routes/dashboard._dashboard.resume-builder", parentId: "routes/dashboard._dashboard", path: "resume-builder", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard._dashboard.resume-builder-6U3S5FOF.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-24HME75T.js", imports: ["/build/_shared/chunk-5XNIE2II.js", "/build/_shared/chunk-PEJBOKBU.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/register": { id: "routes/register", parentId: "root", path: "register", index: void 0, caseSensitive: void 0, module: "/build/routes/register-UIVB3OTT.js", imports: ["/build/_shared/chunk-5XNIE2II.js", "/build/_shared/chunk-PEJBOKBU.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-59EC92F3.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/dashboard._dashboard.application-tracker": {
    id: "routes/dashboard._dashboard.application-tracker",
    parentId: "routes/dashboard._dashboard",
    path: "application-tracker",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_dashboard_application_tracker_exports
  },
  "routes/dashboard._dashboard.add-opportunity": {
    id: "routes/dashboard._dashboard.add-opportunity",
    parentId: "routes/dashboard._dashboard",
    path: "add-opportunity",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_dashboard_add_opportunity_exports
  },
  "routes/dashboard._dashboard.resume-builder": {
    id: "routes/dashboard._dashboard.resume-builder",
    parentId: "routes/dashboard._dashboard",
    path: "resume-builder",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_dashboard_resume_builder_exports
  },
  "routes/dashboard._dashboard.opportunities": {
    id: "routes/dashboard._dashboard.opportunities",
    parentId: "routes/dashboard._dashboard",
    path: "opportunities",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_dashboard_opportunities_exports
  },
  "routes/dashboard._dashboard.contacts": {
    id: "routes/dashboard._dashboard.contacts",
    parentId: "routes/dashboard._dashboard",
    path: "contacts",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_dashboard_contacts_exports
  },
  "routes/dashboard._dashboard.profile": {
    id: "routes/dashboard._dashboard.profile",
    parentId: "routes/dashboard._dashboard",
    path: "profile",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_dashboard_profile_exports
  },
  "routes/dashboard._dashboard._index": {
    id: "routes/dashboard._dashboard._index",
    parentId: "routes/dashboard._dashboard",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: dashboard_dashboard_index_exports
  },
  "routes/dashboard._dashboard.emails": {
    id: "routes/dashboard._dashboard.emails",
    parentId: "routes/dashboard._dashboard",
    path: "emails",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_dashboard_emails_exports
  },
  "routes/dashboard._dashboard.admin": {
    id: "routes/dashboard._dashboard.admin",
    parentId: "routes/dashboard._dashboard",
    path: "admin",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_dashboard_admin_exports
  },
  "routes/dashboard._dashboard": {
    id: "routes/dashboard._dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_dashboard_exports
  },
  "routes/register": {
    id: "routes/register",
    parentId: "root",
    path: "register",
    index: void 0,
    caseSensitive: void 0,
    module: register_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
