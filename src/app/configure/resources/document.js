module.exports = [
  {
    "id": "Options()",
    "longname": "Options",
    "name": "Options",
    "kind": "constructor",
    "description": "Class to set options on generating chart.\r- It's instantiated internally, not exposed for public.",
    "memberof": "Options",
    "order": 1
  },
  {
    "id": "Options",
    "longname": "Options",
    "name": "Options",
    "kind": "class",
    "scope": "global",
    "see": [
      "{@link bb.generate} to use these options on generating the chart"
    ],
    "meta": {
      "lineno": 5,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 0
  },
  {
    "id": "Options.bindto",
    "longname": "Options.bindto",
    "name": "bindto",
    "kind": "member",
    "scope": "static",
    "description": "bindto The CSS selector or the element which the chart will be set to. D3 selection object can be specified. If other chart is set already, it will be replaced with the new one (only one chart can be set in one element).<br><br>\rIf this option is not specified, the chart will be generated but not be set. Instead, we can access the element by chart.element and set it by ourselves.<br>\r- **NOTE:**\r > When chart is not binded, bb starts observing if chart.element is binded by MutationObserver.\r > In this case, polyfill is required in IE9 and IE10 becuase they do not support MutationObserver.\r > On the other hand, if chart always will be binded, polyfill will not be required because MutationObserver will never be called.",
    "memberof": "Options",
    "examples": [
      "bindto: \"#myContainer\"\r\r// or element\rbindto: document.getElementById(\"myContainer\")\r\r// or D3 selection object\rbindto: d3.select(\"#myContainer\")"
    ],
    "type": {
      "names": [
        "String"
      ]
    },
    "defaultvalue": "#chart",
    "meta": {
      "lineno": 14,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 2
  },
  {
    "id": "Options.svg",
    "longname": "Options.svg",
    "name": "svg",
    "kind": "member",
    "scope": "static",
    "description": "Set svg element's class name",
    "memberof": "Options",
    "examples": [
      "svg: {\r  classname: \"test_class\"\r}"
    ],
    "type": {
      "names": [
        "Object"
      ]
    },
    "properties": [
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "optional": true,
        "description": "class name for svg element",
        "name": "svg.classname"
      }
    ],
    "meta": {
      "lineno": 36,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 3
  },
  {
    "id": "Options.size",
    "longname": "Options.size",
    "name": "size",
    "kind": "member",
    "scope": "static",
    "description": "The desired size of the chart element.\rIf value is not specified, the width of the chart will be calculated by the size of the parent element it's appended to.",
    "memberof": "Options",
    "examples": [
      "size: {\r  width: 640,\r  height: 480\r}"
    ],
    "type": {
      "names": [
        "Object"
      ]
    },
    "properties": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "optional": true,
        "description": "width of the chart element",
        "name": "size.width"
      },
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "optional": true,
        "description": "height of the chart element",
        "name": "size.height"
      }
    ],
    "meta": {
      "lineno": 49,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 4
  },
  {
    "id": "Options.padding",
    "longname": "Options.padding",
    "name": "padding",
    "kind": "member",
    "scope": "static",
    "description": "The padding of the chart element.",
    "memberof": "Options",
    "examples": [
      "padding: {\r  top: 20,\r  right: 20,\r  bottom: 20,\r  left: 20\r}"
    ],
    "type": {
      "names": [
        "Object"
      ]
    },
    "properties": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "optional": true,
        "description": "padding on the top of chart",
        "name": "padding.top"
      },
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "optional": true,
        "description": "padding on the right of chart",
        "name": "padding.right"
      },
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "optional": true,
        "description": "padding on the bottom of chart",
        "name": "padding.bottom"
      },
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "optional": true,
        "description": "padding on the left of chart",
        "name": "padding.left"
      }
    ],
    "meta": {
      "lineno": 66,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 5
  },
  {
    "id": "Options.resize",
    "longname": "Options.resize",
    "name": "resize",
    "kind": "member",
    "scope": "static",
    "description": "Set chart resize options",
    "memberof": "Options",
    "examples": [
      "resize: {\r     auto: false\r }"
    ],
    "type": {
      "names": [
        "Object"
      ]
    },
    "properties": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "optional": true,
        "defaultvalue": true,
        "description": "Set chart resize automatically on viewport changes.",
        "name": "resize.auto"
      }
    ],
    "meta": {
      "lineno": 88,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 6
  },
  {
    "id": "Options.zoom",
    "longname": "Options.zoom",
    "name": "zoom",
    "kind": "member",
    "scope": "static",
    "description": "Set zoom options",
    "memberof": "Options",
    "examples": [
      "zoom: {\r     enabled: true,\r     rescale: true,\r     extent: [1, 100]  // enable more zooming\r     onzoom: function(domain) { ... },\r     onzoomstart: function(event) { ... },\r     onzoomend: function(domain) { ... }\r }"
    ],
    "type": {
      "names": [
        "Object"
      ]
    },
    "properties": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "optional": true,
        "defaultvalue": false,
        "description": "Enable zooming.",
        "name": "zoom.enabled"
      },
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "optional": true,
        "defaultvalue": false,
        "description": "Enable to rescale after zooming.<br>\r If true set, y domain will be updated according to the zoomed region.",
        "name": "zoom.rescale"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "optional": true,
        "defaultvalue": "[1, 10]",
        "description": "Change zoom extent.",
        "name": "zoom.extent"
      },
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "optional": true,
        "defaultvalue": "function(){}",
        "description": "Set callback that is called when the chart is zooming.<br>\r Specified function receives the zoomed domain.",
        "name": "zoom.onzoom"
      },
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "optional": true,
        "defaultvalue": "function(){}",
        "description": "Set callback that is called when zooming starts.<br>\r Specified function receives the zoom event.",
        "name": "zoom.onzoomstart"
      },
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "optional": true,
        "defaultvalue": "function(){}",
        "description": "Set callback that is called when zooming ends.<br>\r Specified function receives the zoomed domain.",
        "name": "zoom.onzoomend"
      }
    ],
    "meta": {
      "lineno": 101,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 7
  },
  {
    "id": "Options.interaction",
    "longname": "Options.interaction",
    "name": "interaction",
    "kind": "member",
    "scope": "static",
    "description": "Interaction options",
    "memberof": "Options",
    "examples": [
      "interaction: {\r   enabled: false,\r   inputType: {\r       mouse: true,\r       touch: false\r   }\r}"
    ],
    "type": {
      "names": [
        "Object"
      ]
    },
    "properties": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "optional": true,
        "defaultvalue": true,
        "description": "Indicate if the chart should have interactions.<br>\r    If `false` is set, all of interactions (showing/hiding tooltip, selection, mouse events, etc) will be disabled.",
        "name": "interaction.enabled"
      },
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "optional": true,
        "defaultvalue": true,
        "name": "interaction.brighten"
      },
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "optional": true,
        "defaultvalue": true,
        "description": "enable or disable mouse interaction",
        "name": "interaction.inputType.mouse"
      },
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "optional": true,
        "defaultvalue": true,
        "description": "enable or disable  touch interaction",
        "name": "interaction.inputType.touch"
      }
    ],
    "meta": {
      "lineno": 136,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 8
  },
  {
    "id": "Options.onover",
    "longname": "Options.onover",
    "name": "onover",
    "kind": "member",
    "scope": "static",
    "description": "Set a callback to execute when mouse/touch enters the chart.",
    "memberof": "Options",
    "examples": [
      "onover: function() {\r  ...\r}"
    ],
    "type": {
      "names": [
        "function"
      ]
    },
    "defaultvalue": "function(){}",
    "meta": {
      "lineno": 160,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 9
  },
  {
    "id": "Options.onout",
    "longname": "Options.onout",
    "name": "onout",
    "kind": "member",
    "scope": "static",
    "description": "Set a callback to execute when mouse/touch leaves the chart.",
    "memberof": "Options",
    "examples": [
      "onout: function() {\r  ...\r}"
    ],
    "type": {
      "names": [
        "function"
      ]
    },
    "defaultvalue": "function(){}",
    "meta": {
      "lineno": 173,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 10
  },
  {
    "id": "Options.onresize",
    "longname": "Options.onresize",
    "name": "onresize",
    "kind": "member",
    "scope": "static",
    "description": "Set a callback to execute when user resizes the screen.",
    "memberof": "Options",
    "examples": [
      "onresize: function() {\r  ...\r}"
    ],
    "type": {
      "names": [
        "function"
      ]
    },
    "defaultvalue": "function(){}",
    "meta": {
      "lineno": 186,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 11
  },
  {
    "id": "Options.onresized",
    "longname": "Options.onresized",
    "name": "onresized",
    "kind": "member",
    "scope": "static",
    "description": "SSet a callback to execute when screen resize finished.",
    "memberof": "Options",
    "examples": [
      "onresized: function() {\r  ...\r}"
    ],
    "type": {
      "names": [
        "function"
      ]
    },
    "defaultvalue": "function(){}",
    "meta": {
      "lineno": 199,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 12
  },
  {
    "id": "Options.oninit",
    "longname": "Options.oninit",
    "name": "oninit",
    "kind": "member",
    "scope": "static",
    "description": "Set a callback to execute when the chart is initialized.",
    "memberof": "Options",
    "examples": [
      "oninit: function() {\r  ...\r}"
    ],
    "type": {
      "names": [
        "function"
      ]
    },
    "defaultvalue": "function(){}",
    "meta": {
      "lineno": 212,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 13
  },
  {
    "id": "Options.onrendered",
    "longname": "Options.onrendered",
    "name": "onrendered",
    "kind": "member",
    "scope": "static",
    "description": "Set a callback which is executed when the chart is rendered. Basically, this callback will be called in each time when the chart is redrawed.",
    "memberof": "Options",
    "examples": [
      "onrendered: function() {\r  ...\r}"
    ],
    "type": {
      "names": [
        "function"
      ]
    },
    "defaultvalue": "function(){}",
    "meta": {
      "lineno": 225,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 14
  },
  {
    "id": "Options.transition",
    "longname": "Options.transition",
    "name": "transition",
    "kind": "member",
    "scope": "static",
    "description": "Set duration of transition (in milliseconds) for chart animation.<br><br>\r- **NOTE:** If `0 `or `null` set, transition will be skipped. So, this makes initial rendering faster especially in case you have a lot of data.",
    "memberof": "Options",
    "examples": [
      "transition: {\r duration: 500\r}"
    ],
    "type": {
      "names": [
        "Object"
      ]
    },
    "properties": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "optional": true,
        "defaultvalue": 350,
        "description": "duration in milliseconds",
        "name": "transition.duration"
      }
    ],
    "meta": {
      "lineno": 238,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 15
  },
  {
    "id": "Options.data:x",
    "longname": "Options.data:x",
    "name": "data:x",
    "kind": "member",
    "scope": "static",
    "description": "Specify the key of x values in the data.<br><br>\rWe can show the data with non-index x values by this option. This option is required when the type of x axis is timeseries. If this option is set on category axis, the values of the data on the key will be used for category names.",
    "memberof": "Options",
    "examples": [
      "data: {\r  x: \"date\"\r}"
    ],
    "type": {
      "names": [
        "String"
      ]
    },
    "defaultvalue": "undefined",
    "meta": {
      "lineno": 252,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 16
  },
  {
    "id": "Options.data:xs",
    "longname": "Options.data:xs",
    "name": "data:xs",
    "kind": "member",
    "scope": "static",
    "description": "Specify the keys of the x values for each data.<br><br>\rThis option can be used if we want to show the data that has different x values.",
    "memberof": "Options",
    "examples": [
      "data: {\r  xs: {\r   data1: \"x1\",\r   data2: \"x2\"\r  }\r}"
    ],
    "type": {
      "names": [
        "Object"
      ]
    },
    "defaultvalue": "{}",
    "meta": {
      "lineno": 266,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 17
  },
  {
    "id": "Options.data:xFormat",
    "longname": "Options.data:xFormat",
    "name": "data:xFormat",
    "kind": "member",
    "scope": "static",
    "description": "Set a format to parse string specifed as x.",
    "memberof": "Options",
    "examples": [
      "data: {\r  xFormat: \"%Y-%m-%d %H:%M:%S\"\r}"
    ],
    "type": {
      "names": [
        "String"
      ]
    },
    "defaultvalue": "%Y-%m-%d",
    "see": [
      "[D3's time specifier](https://npm.runkit.com/d3-time-format)"
    ],
    "meta": {
      "lineno": 283,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 18
  },
  {
    "id": "Options.data:xLocaltime",
    "longname": "Options.data:xLocaltime",
    "name": "data:xLocaltime",
    "kind": "member",
    "scope": "static",
    "description": "Set localtime format to parse x axis.",
    "memberof": "Options",
    "examples": [
      "data: {\r  xLocaltime: false\r}"
    ],
    "type": {
      "names": [
        "Boolean"
      ]
    },
    "defaultvalue": "true",
    "meta": {
      "lineno": 297,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 19
  },
  {
    "id": "Options.data:xSort",
    "longname": "Options.data:xSort",
    "name": "data:xSort",
    "kind": "member",
    "scope": "static",
    "description": "Sort on x axis.",
    "memberof": "Options",
    "examples": [
      "data: {\r  xSort: false\r}"
    ],
    "type": {
      "names": [
        "Boolean"
      ]
    },
    "defaultvalue": "true",
    "meta": {
      "lineno": 310,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 20
  },
  {
    "id": "Options.data:names",
    "longname": "Options.data:names",
    "name": "data:names",
    "kind": "member",
    "scope": "static",
    "description": "Set custom data name.",
    "memberof": "Options",
    "examples": [
      "data: {\r  names: {\r    data1: \"Data Name 1\",\r    data2: \"Data Name 2\"\r  }\r}"
    ],
    "type": {
      "names": [
        "Object"
      ]
    },
    "defaultvalue": "{}",
    "meta": {
      "lineno": 324,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 21
  },
  {
    "id": "Options.data:classes",
    "longname": "Options.data:classes",
    "name": "data:classes",
    "kind": "member",
    "scope": "static",
    "description": "Set custom data class.<br><br>\rIf this option is specified, the element g for the data has an additional class that has the prefix 'bb-target-' (eg. bb-target-additional-data1-class).",
    "memberof": "Options",
    "examples": [
      "data: {\r  classes: {\r    data1: \"additional-data1-class\",\r    data2: \"additional-data2-class\"\r  }\r}"
    ],
    "type": {
      "names": [
        "Object"
      ]
    },
    "defaultvalue": "{}",
    "meta": {
      "lineno": 340,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 22
  },
  {
    "id": "Options.data:groups",
    "longname": "Options.data:groups",
    "name": "data:groups",
    "kind": "member",
    "scope": "static",
    "description": "Set groups for the data for stacking.",
    "memberof": "Options",
    "examples": [
      "data: {\r  groups: [\r    [\"data1\", \"data2\"],\r    [\"data3\"]\r  ]\r}"
    ],
    "type": {
      "names": [
        "Array"
      ]
    },
    "defaultvalue": "[]",
    "meta": {
      "lineno": 357,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 23
  },
  {
    "id": "Options.data:axes",
    "longname": "Options.data:axes",
    "name": "data:axes",
    "kind": "member",
    "scope": "static",
    "description": "Set y axis the data related to. y and y2 can be used.",
    "memberof": "Options",
    "examples": [
      "data: {\raxes: {\r    data1: \"y\",\r    data2: \"y2\"\r  }\r}"
    ],
    "type": {
      "names": [
        "Object"
      ]
    },
    "defaultvalue": "{}",
    "meta": {
      "lineno": 373,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 24
  },
  {
    "id": "Options.data:type",
    "longname": "Options.data:type",
    "name": "data:type",
    "kind": "member",
    "scope": "static",
    "description": "Set chart type at once.<br><br>\rIf this option is specified, the type will be applied to every data. This setting can be overwritten by data.types.<br><br>\r**Available Values:**\r- line\r- spline\r- step\r- area\r- area-spline\r- area-step\r- bar\r- scatter\r- pie\r- donut\r- gauge",
    "memberof": "Options",
    "examples": [
      "data: {\r type: \"bar\"\r}"
    ],
    "type": {
      "names": [
        "String"
      ]
    },
    "defaultvalue": "line",
    "meta": {
      "lineno": 389,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 25
  },
  {
    "id": "Options.data:types",
    "longname": "Options.data:types",
    "name": "data:types",
    "kind": "member",
    "scope": "static",
    "description": "Set chart type for each data.<br>\rThis setting overwrites data.type setting.",
    "memberof": "Options",
    "examples": [
      "data: {\r  types: {\r    data1: \"bar\",\r    data2: \"spline\"\r  }\r}"
    ],
    "type": {
      "names": [
        "Object"
      ]
    },
    "defaultvalue": "{}",
    "meta": {
      "lineno": 415,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 26
  },
  {
    "id": "Options.data:labels:format",
    "longname": "Options.data:labels:format",
    "name": "data:labels:format",
    "kind": "member",
    "scope": "static",
    "description": "Set formatter function for data labels.<br>\rThe formatter function receives 4 arguments such as v, id, i, j and it must return a string that will be shown as the label. The arguments are:<br>\r - `v` is the value of the data point where the label is shown.\r - `id` is the id of the data where the label is shown.\r - `i` is the index of the data point where the label is shown.\r - `j` is the sub index of the data point where the label is shown.<br><br>\rFormatter function can be defined for each data by specifying as an object and D3 formatter function can be set (ex. d3.format('$'))",
    "memberof": "Options",
    "examples": [
      "data: {\r  labels: {\r    format: function(v, id, i, j) { ... }\r    // it's possible to set for each data\r    //format: {\r    //    data1: function(v, id, i, j) { ... },\r    //    ...\r    //}\r  }\r}"
    ],
    "type": {
      "names": [
        "Object"
      ]
    },
    "defaultvalue": "{}",
    "meta": {
      "lineno": 443,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 27
  },
  {
    "id": "Options.data:labels",
    "longname": "Options.data:labels",
    "name": "data:labels",
    "kind": "member",
    "scope": "static",
    "description": "Show labels on each data points.",
    "memberof": "Options",
    "examples": [
      "data: {\r  labels: true\r}"
    ],
    "type": {
      "names": [
        "Boolean"
      ]
    },
    "defaultvalue": "false",
    "meta": {
      "lineno": 432,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 28
  },
  {
    "id": "Options.data:order",
    "longname": "Options.data:order",
    "name": "data:order",
    "kind": "member",
    "scope": "static",
    "description": "This option changes the order of stacking the data and pieces of pie/donut. If `null` specified, it will be the order the data loaded. If function specified, it will be used to sort the data and it will recieve the data as argument.<br><br>\r **Available Values:**\r - desc\r - asc\r - function(data1, data2) { ... }\r - null",
    "memberof": "Options",
    "examples": [
      "data: {\r  order: \"asc\"\r}"
    ],
    "type": {
      "names": [
        "String",
        "function"
      ]
    },
    "defaultvalue": "desc",
    "meta": {
      "lineno": 469,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 29
  },
  {
    "id": "Options.data:regions",
    "longname": "Options.data:regions",
    "name": "data:regions",
    "kind": "member",
    "scope": "static",
    "description": "Define regions for each data.<br><br>\rThe values must be an array for each data and it should include an object that has start, end, style. If start is not set, the start will be the first data point. If end is not set, the end will be the last data point.<br>\rCurrently this option supports only line chart and dashed style. If this option specified, the line will be dashed only in the regions.",
    "memberof": "Options",
    "examples": [
      "data: {\r  regions: {\r    data1: [{\r        \"start\": 1,\r        \"end\": 2,\r        \"style\": \"dashed\"\r    }, {\r        \"start\":3\r    }],\r    ...\r  }\r}"
    ],
    "type": {
      "names": [
        "Object"
      ]
    },
    "defaultvalue": "{}",
    "meta": {
      "lineno": 487,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 30
  },
  {
    "id": "Options.data:color",
    "longname": "Options.data:color",
    "name": "data:color",
    "kind": "member",
    "scope": "static",
    "description": "Set color converter function.<br><br>\rThis option should a function and the specified function receives color (e.g. '#ff0000') and d that has data parameters like id, value, index, etc. And it must return a string that represents color (e.g. '#00ff00').",
    "memberof": "Options",
    "examples": [
      "data: {\r  color: function(color, d) { ... }\r}"
    ],
    "type": {
      "names": [
        "function"
      ]
    },
    "defaultvalue": "undefined",
    "meta": {
      "lineno": 511,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 31
  },
  {
    "id": "Options.data:colors",
    "longname": "Options.data:colors",
    "name": "data:colors",
    "kind": "member",
    "scope": "static",
    "description": "Set color for each data.",
    "memberof": "Options",
    "examples": [
      "data: {\r  colors: {\r    data1: \"#ff0000\",\r    ...\r  }\r}"
    ],
    "type": {
      "names": [
        "Object"
      ]
    },
    "defaultvalue": "{}",
    "meta": {
      "lineno": 525,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 32
  },
  {
    "id": "Options.data:hide",
    "longname": "Options.data:hide",
    "name": "data:hide",
    "kind": "member",
    "scope": "static",
    "description": "Hide each data when the chart appears.<br><br>\rIf true specified, all of data will be hidden. If multiple ids specified as an array, those will be hidden.",
    "memberof": "Options",
    "examples": [
      "data: {\r  // all of data will be hidden\r  hide: true\r  // specified data will be hidden\r  hide: [\"data1\", ...]\r}"
    ],
    "type": {
      "names": [
        "Boolean",
        "Array"
      ]
    },
    "defaultvalue": "false",
    "meta": {
      "lineno": 541,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 33
  },
  {
    "id": "Options.data:selection:enabled",
    "longname": "Options.data:selection:enabled",
    "name": "data:selection:enabled",
    "kind": "member",
    "scope": "static",
    "description": "Set data selection enabled.<br><br>\rIf this option is set true, we can select the data points and get/set its state of selection by API (e.g. select, unselect, selected).",
    "memberof": "Options",
    "examples": [
      "data: {\r    selection: {\r      enabled: true\r  }\r}"
    ],
    "type": {
      "names": [
        "Boolean"
      ]
    },
    "defaultvalue": "false",
    "meta": {
      "lineno": 559,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 34
  },
  {
    "id": "Options.data:selection:grouped",
    "longname": "Options.data:selection:grouped",
    "name": "data:selection:grouped",
    "kind": "member",
    "scope": "static",
    "description": "Set grouped selection enabled.<br><br>\rIf this option set true, multiple data points that have same x value will be selected by one selection.",
    "memberof": "Options",
    "examples": [
      "data: {\r    selection: {\r      grouped: true\r  }\r}"
    ],
    "type": {
      "names": [
        "Boolean"
      ]
    },
    "defaultvalue": "false",
    "meta": {
      "lineno": 575,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 35
  },
  {
    "id": "Options.data:selection:isselectable",
    "longname": "Options.data:selection:isselectable",
    "name": "data:selection:isselectable",
    "kind": "member",
    "scope": "static",
    "description": "Set a callback for each data point to determine if it's selectable or not.<br><br>\rThe callback will receive d as an argument and it has some parameters like id, value, index. This callback should return boolean.",
    "memberof": "Options",
    "examples": [
      "data: {\r    selection: {\r      isselectable: function(d) { ... }\r  }\r}"
    ],
    "type": {
      "names": [
        "function"
      ]
    },
    "defaultvalue": "function() { return true; }",
    "meta": {
      "lineno": 591,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 36
  },
  {
    "id": "Options.data:selection:multiple",
    "longname": "Options.data:selection:multiple",
    "name": "data:selection:multiple",
    "kind": "member",
    "scope": "static",
    "description": "Set multiple data points selection enabled.<br><br>\rIf this option set true, multile data points can have the selected state at the same time. If false set, only one data point can have the selected state and the others will be unselected when the new data point is selected.",
    "memberof": "Options",
    "examples": [
      "data: {\r    selection: {\r      multiple: false\r  }\r}"
    ],
    "type": {
      "names": [
        "Boolean"
      ]
    },
    "defaultvalue": "true",
    "meta": {
      "lineno": 607,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 37
  },
  {
    "id": "Options.data:selection:draggable",
    "longname": "Options.data:selection:draggable",
    "name": "data:selection:draggable",
    "kind": "member",
    "scope": "static",
    "description": "Enable to select data points by dragging.<br><br>\rIf this option set true, data points can be selected by dragging.\r**NOTE:** If this option set true, scrolling on the chart will be disabled because dragging event will handle the event.",
    "memberof": "Options",
    "examples": [
      "data: {\r    selection: {\r      draggable: true\r  }\r}"
    ],
    "type": {
      "names": [
        "Boolean"
      ]
    },
    "defaultvalue": "false",
    "meta": {
      "lineno": 623,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 38
  },
  {
    "id": "Options.data:onclick",
    "longname": "Options.data:onclick",
    "name": "data:onclick",
    "kind": "member",
    "scope": "static",
    "description": "Set a callback for click event on each data point.<br><br>\rThis callback will be called when each data point clicked and will receive d and element as the arguments. d is the data clicked and element is the element clicked. In this callback, this will be the Chart object.",
    "memberof": "Options",
    "examples": [
      "data: {\r    onclick: function(d, element) { ... }\r}"
    ],
    "type": {
      "names": [
        "function"
      ]
    },
    "defaultvalue": "function() {}",
    "meta": {
      "lineno": 640,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 39
  },
  {
    "id": "Options.data:onover",
    "longname": "Options.data:onover",
    "name": "data:onover",
    "kind": "member",
    "scope": "static",
    "description": "Set a callback for mouse/touch over event on each data point.<br><br>\rThis callback will be called when mouse cursor or via touch moves onto each data point and will receive d as the argument. d is the data where mouse cursor moves onto. In this callback, this will be the Chart object.",
    "memberof": "Options",
    "examples": [
      "data: {\r    onover: function(d) { ... }\r}"
    ],
    "type": {
      "names": [
        "function"
      ]
    },
    "defaultvalue": "function() {}",
    "meta": {
      "lineno": 654,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 40
  },
  {
    "id": "Options.data:onout",
    "longname": "Options.data:onout",
    "name": "data:onout",
    "kind": "member",
    "scope": "static",
    "description": "Set a callback for mouse/touch out event on each data point.<br><br>\rThis callback will be called when mouse cursor or via touch moves out each data point and will receive d as the argument. d is the data where mouse cursor moves out. In this callback, this will be the Chart object.",
    "memberof": "Options",
    "examples": [
      "data: {\r    onout: function(d) { ... }\r}"
    ],
    "type": {
      "names": [
        "function"
      ]
    },
    "defaultvalue": "function() {}",
    "meta": {
      "lineno": 668,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 41
  },
  {
    "id": "Options.data:onselected",
    "longname": "Options.data:onselected",
    "name": "data:onselected",
    "kind": "member",
    "scope": "static",
    "description": "Set a callback for on data selection.",
    "memberof": "Options",
    "examples": [
      "data: {\r    onselected: function(d) { ... }\r}"
    ],
    "type": {
      "names": [
        "function"
      ]
    },
    "defaultvalue": "function() {}",
    "meta": {
      "lineno": 682,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 42
  },
  {
    "id": "Options.data:onunselected",
    "longname": "Options.data:onunselected",
    "name": "data:onunselected",
    "kind": "member",
    "scope": "static",
    "description": "Set a callback for on data un-selection.",
    "memberof": "Options",
    "examples": [
      "data: {\r    onunselected: function(d) { ... }\r}"
    ],
    "type": {
      "names": [
        "function"
      ]
    },
    "defaultvalue": "function() {}",
    "meta": {
      "lineno": 695,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 43
  },
  {
    "id": "Options.data:url",
    "longname": "Options.data:url",
    "name": "data:url",
    "kind": "member",
    "scope": "static",
    "description": "Load a CSV or JSON file from a URL. NOTE that this will not work if loading via the \"file://\" protocol as the most browsers will block XMLHTTPRequests.",
    "memberof": "Options",
    "examples": [
      "data: {\r    url: \"/data/c3_test.csv\"\r}"
    ],
    "type": {
      "names": [
        "String"
      ]
    },
    "defaultvalue": "undefined",
    "meta": {
      "lineno": 708,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 44
  },
  {
    "id": "Options.data:json",
    "longname": "Options.data:json",
    "name": "data:json",
    "kind": "member",
    "scope": "static",
    "description": "Parse a JSON object for data. See also data.keys.",
    "memberof": "Options",
    "examples": [
      "data: {\r    json: [\r      {name: \"www.site1.com\", upload: 200, download: 200, total: 400},\r      {name: \"www.site2.com\", upload: 100, download: 300, total: 400},\r      {name: \"www.site3.com\", upload: 300, download: 200, total: 500},\r      {name: \"www.site4.com\", upload: 400, download: 100, total: 500}\r    ],\r    keys: {\r      // x: \"name\", // it's possible to specify 'x' when category axis\r      value: [\"upload\", \"download\"]\r    }\r}"
    ],
    "type": {
      "names": [
        "Array"
      ]
    },
    "defaultvalue": "undefined",
    "see": [
      "data:keys"
    ],
    "meta": {
      "lineno": 722,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 45
  },
  {
    "id": "Options.data:rows",
    "longname": "Options.data:rows",
    "name": "data:rows",
    "kind": "member",
    "scope": "static",
    "description": "Load data from a multidimensional array, with the first element containing the data names, the following containing related data in that order.",
    "memberof": "Options",
    "examples": [
      "data: {\r  rows: [\r    [\"A\", \"B\", \"C\"],\r    [90, 120, 300],\r    [40, 160, 240],\r    [50, 200, 290],\r    [120, 160, 230],\r    [80, 130, 300],\r    [90, 220, 320]\r  ]\r}"
    ],
    "type": {
      "names": [
        "Array"
      ]
    },
    "defaultvalue": "undefined",
    "meta": {
      "lineno": 745,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 46
  },
  {
    "id": "Options.data:columns",
    "longname": "Options.data:columns",
    "name": "data:columns",
    "kind": "member",
    "scope": "static",
    "description": "Load data from a multidimensional array, with each element containing an array consisting of a datum name and associated data values.",
    "memberof": "Options",
    "examples": [
      "data: {\r  columns: [\r     [\"data1\", 30, 20, 50, 40, 60, 50],\r     [\"data2\", 200, 130, 90, 240, 130, 220],\r     [\"data3\", 300, 200, 160, 400, 250, 250]\r  ]\r}"
    ],
    "type": {
      "names": [
        "Array"
      ]
    },
    "defaultvalue": "undefined",
    "meta": {
      "lineno": 766,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 47
  },
  {
    "id": "Options.data:mimeType",
    "longname": "Options.data:mimeType",
    "name": "data:mimeType",
    "kind": "member",
    "scope": "static",
    "description": "Used if loading JSON via data.url.",
    "memberof": "Options",
    "examples": [
      "data: {\r   {\r      mimeType: \"json\"\r   }\r}"
    ],
    "type": {
      "names": [
        "String"
      ]
    },
    "defaultvalue": "undefined",
    "meta": {
      "lineno": 783,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 48
  },
  {
    "id": "Options.data:keys",
    "longname": "Options.data:keys",
    "name": "data:keys",
    "kind": "member",
    "scope": "static",
    "description": "Choose which JSON object keys correspond to desired data.",
    "memberof": "Options",
    "examples": [
      "data: {\r    json: [\r      {name: \"www.site1.com\", upload: 200, download: 200, total: 400},\r      {name: \"www.site2.com\", upload: 100, download: 300, total: 400},\r      {name: \"www.site3.com\", upload: 300, download: 200, total: 500},\r      {name: \"www.site4.com\", upload: 400, download: 100, total: 500}\r    ],\r    keys: {\r      // x: \"name\", // it's possible to specify 'x' when category axis\r      value: [\"upload\", \"download\"]\r    }\r}"
    ],
    "type": {
      "names": [
        "String"
      ]
    },
    "defaultvalue": "undefined",
    "meta": {
      "lineno": 798,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 49
  },
  {
    "id": "Options.data:empty:label:text",
    "longname": "Options.data:empty:label:text",
    "name": "data:empty:label:text",
    "kind": "member",
    "scope": "static",
    "description": "Set text displayed when empty data.",
    "memberof": "Options",
    "examples": [
      "data: {\r  empty: {\r    label: {\r      text: \"No Data\"\r    }\r  }\r}"
    ],
    "type": {
      "names": [
        "String"
      ]
    },
    "defaultvalue": "\"\"",
    "meta": {
      "lineno": 820,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 50
  },
  {
    "id": "Options.subchart",
    "longname": "Options.subchart",
    "name": "subchart",
    "kind": "member",
    "scope": "static",
    "description": "Set subchart options",
    "memberof": "Options",
    "examples": [
      "subchart: {\r     show: true,\r     size: {\r         height: 20\r     },\r     onbrush: function(domain) { ... }\r }"
    ],
    "type": {
      "names": [
        "Object"
      ]
    },
    "properties": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "optional": true,
        "defaultvalue": false,
        "description": "Show sub chart on the bottom of the chart.",
        "name": "subchart.show"
      },
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "optional": true,
        "description": "Change the height of the subchart.",
        "name": "subchart.size.height"
      },
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "optional": true,
        "description": "Set callback for brush event.<br>\r Specified function receives the current zoomed x domain.",
        "name": "subchart.onbrush"
      }
    ],
    "meta": {
      "lineno": 837,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 51
  },
  {
    "id": "Options.color",
    "longname": "Options.color",
    "name": "color",
    "kind": "member",
    "scope": "static",
    "description": "Set color of the data values",
    "memberof": "Options",
    "examples": [
      "color: {\r     pattern: [\"#1f77b4\", \"#aec7e8\", ...]\r }"
    ],
    "type": {
      "names": [
        "Object"
      ]
    },
    "properties": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "optional": true,
        "description": "custom color pattern",
        "name": "color.pattern"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "optional": true,
        "description": "color threshold",
        "name": "color.threshold"
      },
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "optional": true,
        "description": "unit",
        "name": "color.threshold.unit"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "optional": true,
        "description": "value",
        "name": "color.threshold.value"
      },
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "optional": true,
        "defaultvalue": 100,
        "description": "max value",
        "name": "color.threshold.max"
      }
    ],
    "meta": {
      "lineno": 860,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 52
  },
  {
    "id": "Options.legend",
    "longname": "Options.legend",
    "name": "legend",
    "kind": "member",
    "scope": "static",
    "description": "Legend options",
    "memberof": "Options",
    "examples": [
      "legend: {\r     show: true,\r     hide: true,\r     //or hide: \"data1\"\r     //or hide: [\"data1\", \"data2\"]\r     position: \"bottom\",  // bottom, right, inset\r     inset: {\r         anchor: \"top-right\"  // top-left, top-right, bottom-left, bottom-right\r         x: 20,\r         y: 10,\r         step: 2\r     },\r     onclick: function(id) { ... },\r     onover: function(id) { ... },\r     onout: function(id) { ... }\r }"
    ],
    "type": {
      "names": [
        "Object"
      ]
    },
    "properties": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "optional": true,
        "defaultvalue": true,
        "description": "Show or hide legend.",
        "name": "legend.show"
      },
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "optional": true,
        "defaultvalue": false,
        "description": "Hide legend\r If true given, all legend will be hidden. If string or array given, only the legend that has the id will be hidden.",
        "name": "legend.hide"
      },
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "optional": true,
        "defaultvalue": "bottom",
        "description": "Change the position of legend.<br>\r Available values are: `bottom`, `right` and `inset` are supported.",
        "name": "legend.position"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "optional": true,
        "defaultvalue": "{anchor: 'top-left',x: 10,y: 0,step: undefined}",
        "description": "Change inset legend attributes.<br>\r     This option accepts object that has the keys anchor, x, y and step.\r     anchor decides the position of the legend. These anchors are available:\r     - top-left\r     - top-right\r     - bottom-left\r     - bottom-right\r x and y set the position of the legend based on the anchor.<br>\r step defines the max step the lagend has (e.g. If 2 set and legend has 3 legend item, the legend 2 columns).",
        "name": "legend.inset"
      },
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "optional": true,
        "description": "Set click event handler to the legend item.",
        "name": "legend.item.onclick"
      },
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "optional": true,
        "description": "Set mouse/touch over event handler to the legend item.",
        "name": "legend.item.onover"
      },
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "optional": true,
        "description": "Set mouse/touch out event handler to the legend item.",
        "name": "legend.item.onout"
      }
    ],
    "meta": {
      "lineno": 878,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 53
  },
  {
    "id": "Options.axis:rotated",
    "longname": "Options.axis:rotated",
    "name": "axis:rotated",
    "kind": "member",
    "scope": "static",
    "description": "Switch x and y axis position.",
    "memberof": "Options",
    "examples": [
      "axis: {\r  rotated: true\r}"
    ],
    "type": {
      "names": [
        "Boolean"
      ]
    },
    "defaultvalue": "false",
    "meta": {
      "lineno": 933,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 54
  },
  {
    "id": "Options.axis:x:show",
    "longname": "Options.axis:x:show",
    "name": "axis:x:show",
    "kind": "member",
    "scope": "static",
    "description": "Show or hide x axis.",
    "memberof": "Options",
    "examples": [
      "axis: {\r  x: {\r    show: false\r  }\r}"
    ],
    "type": {
      "names": [
        "Boolean"
      ]
    },
    "defaultvalue": "true",
    "meta": {
      "lineno": 946,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 55
  },
  {
    "id": "Options.axis:x:type",
    "longname": "Options.axis:x:type",
    "name": "axis:x:type",
    "kind": "member",
    "scope": "static",
    "description": "Set type of x axis.<br><br>\r**Available Values:**\r- timeseries\r- category\r- indexed",
    "memberof": "Options",
    "examples": [
      "axis: {\r  x: {\r    type: \"timeseries\"\r  }\r}"
    ],
    "type": {
      "names": [
        "String"
      ]
    },
    "defaultvalue": "indexed",
    "meta": {
      "lineno": 961,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 56
  },
  {
    "id": "Options.axis:x:localtime",
    "longname": "Options.axis:x:localtime",
    "name": "axis:x:localtime",
    "kind": "member",
    "scope": "static",
    "description": "Set how to treat the timezone of x values.<br>\rIf true, treat x value as localtime. If false, convert to UTC internally.",
    "memberof": "Options",
    "examples": [
      "axis: {\r  x: {\r    localtime: false\r  }\r}"
    ],
    "type": {
      "names": [
        "Boolean"
      ]
    },
    "defaultvalue": "true",
    "meta": {
      "lineno": 980,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 57
  },
  {
    "id": "Options.axis:x:categories",
    "longname": "Options.axis:x:categories",
    "name": "axis:x:categories",
    "kind": "member",
    "scope": "static",
    "description": "Set category names on category axis.\rThis must be an array that includes category names in string. If category names are included in the date by data.x option, this is not required.",
    "memberof": "Options",
    "examples": [
      "axis: {\r  x: {\r    categories: [\"Category 1\", \"Category 2\", ...]\r  }\r}"
    ],
    "type": {
      "names": [
        "Array"
      ]
    },
    "defaultvalue": "[]",
    "meta": {
      "lineno": 996,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 58
  },
  {
    "id": "Options.axis:x:tick:centered",
    "longname": "Options.axis:x:tick:centered",
    "name": "axis:x:tick:centered",
    "kind": "member",
    "scope": "static",
    "description": "Centerise ticks on category axis.",
    "memberof": "Options",
    "examples": [
      "axis: {\r  x: {\r    tick: {\r      centered: true\r    }\r  }\r}"
    ],
    "type": {
      "names": [
        "Boolean"
      ]
    },
    "defaultvalue": "false",
    "meta": {
      "lineno": 1012,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 59
  },
  {
    "id": "Options.axis:x:tick:format",
    "longname": "Options.axis:x:tick:format",
    "name": "axis:x:tick:format",
    "kind": "member",
    "scope": "static",
    "description": "A function to format tick value. Format string is also available for timeseries data.",
    "memberof": "Options",
    "examples": [
      "axis: {\r  x: {\r    tick: {\r      format: function(x) {\r          return x.getFullYear();\r      }\r    }\r  }\r}"
    ],
    "type": {
      "names": [
        "function"
      ]
    },
    "defaultvalue": "undefined",
    "meta": {
      "lineno": 1029,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 60
  },
  {
    "id": "Options.axis:x:tick:culling",
    "longname": "Options.axis:x:tick:culling",
    "name": "axis:x:tick:culling",
    "kind": "member",
    "scope": "static",
    "description": "Setting for culling ticks.<br><br>\rIf true is set, the ticks will be culled, then only limitted tick text will be shown. This option does not hide the tick lines. If false is set, all of ticks will be shown.<br><br>\rWe can change the number of ticks to be shown by axis.x.tick.culling.max.",
    "memberof": "Options",
    "examples": [
      "axis: {\r  x: {\r    tick: {\r      culling: false\r    }\r  }\r}"
    ],
    "type": {
      "names": [
        "function"
      ]
    },
    "defaultvalue": "- true for indexed axis and timeseries axis\r- false for category axis",
    "meta": {
      "lineno": 1048,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 61
  },
  {
    "id": "Options.axis:x:tick:culling:max",
    "longname": "Options.axis:x:tick:culling:max",
    "name": "axis:x:tick:culling:max",
    "kind": "member",
    "scope": "static",
    "description": "The number of tick texts will be adjusted to less than this value.",
    "memberof": "Options",
    "examples": [
      "axis: {\r  x: {\r    tick: {\r      culling: {\r          max: 5\r      }\r    }\r  }\r}"
    ],
    "type": {
      "names": [
        "Number"
      ]
    },
    "defaultvalue": "10",
    "meta": {
      "lineno": 1069,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 62
  },
  {
    "id": "Options.axis:x:tick:count",
    "longname": "Options.axis:x:tick:count",
    "name": "axis:x:tick:count",
    "kind": "member",
    "scope": "static",
    "description": "The number of x axis ticks to show.<br><br>\rThis option hides tick lines together with tick text. If this option is used on timeseries axis, the ticks position will be determined precisely and not nicely positioned (e.g. it will have rough second value).",
    "memberof": "Options",
    "examples": [
      "axis: {\r  x: {\r    tick: {\r      count: 5\r    }\r  }\r}"
    ],
    "type": {
      "names": [
        "Number"
      ]
    },
    "defaultvalue": "undefined",
    "meta": {
      "lineno": 1088,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 63
  },
  {
    "id": "Options.axis:x:tick:fit",
    "longname": "Options.axis:x:tick:fit",
    "name": "axis:x:tick:fit",
    "kind": "member",
    "scope": "static",
    "description": "Fit x axis ticks.<br><br>\rIf true set, the ticks will be positioned nicely. If false set, the ticks will be positioned according to x value of the data points.",
    "memberof": "Options",
    "examples": [
      "axis: {\r  x: {\r    tick: {\r      fit: false\r    }\r  }\r}"
    ],
    "type": {
      "names": [
        "Boolean"
      ]
    },
    "defaultvalue": "true",
    "meta": {
      "lineno": 1106,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 64
  },
  {
    "id": "Options.axis:x:tick:values",
    "longname": "Options.axis:x:tick:values",
    "name": "axis:x:tick:values",
    "kind": "member",
    "scope": "static",
    "description": "Set the x values of ticks manually.<br><br>\rIf this option is provided, the position of the ticks will be determined based on those values. This option works with timeseries data and the x values will be parsed accoding to the type of the value and data.xFormat option.",
    "memberof": "Options",
    "examples": [
      "axis: {\r  x: {\r    tick: {\r      values: [1, 2, 4, 8, 16, 32, ...]\r    }\r  }\r}"
    ],
    "type": {
      "names": [
        "Array"
      ]
    },
    "defaultvalue": "null",
    "meta": {
      "lineno": 1124,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 65
  },
  {
    "id": "Options.axis:x:tick:rotate",
    "longname": "Options.axis:x:tick:rotate",
    "name": "axis:x:tick:rotate",
    "kind": "member",
    "scope": "static",
    "description": "Rotate x axis tick text.<br>\rIf you set negative value, it will rotate to opposite direction.",
    "memberof": "Options",
    "examples": [
      "axis: {\r  x: {\r    tick: {\r      rotate: 60\r    }\r  }\r}"
    ],
    "type": {
      "names": [
        "Number"
      ]
    },
    "defaultvalue": "0",
    "meta": {
      "lineno": 1142,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 66
  },
  {
    "id": "Options.axis:x:tick:outer",
    "longname": "Options.axis:x:tick:outer",
    "name": "axis:x:tick:outer",
    "kind": "member",
    "scope": "static",
    "description": "Show x axis outer tick.",
    "memberof": "Options",
    "examples": [
      "axis: {\r  x: {\r    tick: {\r      outer: false\r    }\r  }\r}"
    ],
    "type": {
      "names": [
        "Boolean"
      ]
    },
    "defaultvalue": "true",
    "meta": {
      "lineno": 1160,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 67
  },
  {
    "id": "Options.axis:x:tick:multiline",
    "longname": "Options.axis:x:tick:multiline",
    "name": "axis:x:tick:multiline",
    "kind": "member",
    "scope": "static",
    "description": "Set tick text to be multiline",
    "memberof": "Options",
    "examples": [
      "axis: {\r  x: {\r    tick: {\r      multiline: false\r    }\r  }\r}"
    ],
    "type": {
      "names": [
        "Boolean"
      ]
    },
    "defaultvalue": "true",
    "meta": {
      "lineno": 1177,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 68
  },
  {
    "id": "Options.axis:x:tick:width",
    "longname": "Options.axis:x:tick:width",
    "name": "axis:x:tick:width",
    "kind": "member",
    "scope": "static",
    "description": "Set tick width",
    "memberof": "Options",
    "examples": [
      "axis: {\r  x: {\r    tick: {\r      width: 50\r    }\r  }\r}"
    ],
    "type": {
      "names": [
        "Number"
      ]
    },
    "defaultvalue": "null",
    "meta": {
      "lineno": 1195,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 69
  },
  {
    "id": "Options.axis:x:max",
    "longname": "Options.axis:x:max",
    "name": "axis:x:max",
    "kind": "member",
    "scope": "static",
    "description": "Set max value of x axis range.",
    "memberof": "Options",
    "examples": [
      "axis: {\r  x: {\r    max: 100\r  }\r}"
    ],
    "type": {
      "names": [
        "Number"
      ]
    },
    "defaultvalue": "undefined",
    "meta": {
      "lineno": 1212,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 70
  },
  {
    "id": "Options.axis:x:min",
    "longname": "Options.axis:x:min",
    "name": "axis:x:min",
    "kind": "member",
    "scope": "static",
    "description": "Set min value of x axis range.",
    "memberof": "Options",
    "examples": [
      "axis: {\r  x: {\r    min: -100\r  }\r}"
    ],
    "type": {
      "names": [
        "Number"
      ]
    },
    "defaultvalue": "undefined",
    "meta": {
      "lineno": 1227,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 71
  },
  {
    "id": "Options.axis:x:padding",
    "longname": "Options.axis:x:padding",
    "name": "axis:x:padding",
    "kind": "member",
    "scope": "static",
    "description": "Set padding for x axis.<br><br>\rIf this option is set, the range of x axis will increase/decrease according to the values.\rIf no padding is needed in the rage of x axis, 0 should be set.\r- **NOTE:**\r  The padding values aren't based on pixels. It differs according axis types<br>\r  - **category:** The unit of tick value\r    ex. the given value `1`, is same as the width of 1 tick width\r  - **timeseries:** Numeric time value\r    ex. the given value `1000*60*60*24`, which is numeric time equivalent of a day, is same as the width of 1 tick width",
    "memberof": "Options",
    "examples": [
      "axis: {\r  x: {\r    padding: {\r      // when axis type is 'category'\r      left: 1,  // set left padding width of equivalent value of a tick's width\r      right: 0.5  // set right padding width as half of equivalent value of tick's width\r\r      // when axis type is 'timeseries'\r      left: 1000*60*60*24,  // set left padding width of equivalent value of a day tick's width\r      right: 1000*60*60*12   // set right padding width as half of equivalent value of a day tick's width\r    }\r  }\r}"
    ],
    "type": {
      "names": [
        "Object"
      ]
    },
    "defaultvalue": "{}",
    "meta": {
      "lineno": 1242,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 72
  },
  {
    "id": "Options.axis:x:height",
    "longname": "Options.axis:x:height",
    "name": "axis:x:height",
    "kind": "member",
    "scope": "static",
    "description": "Set height of x axis.<br><br>\rThe height of x axis can be set manually by this option. If you need more space for x axis, please use this option for that. The unit is pixel.",
    "memberof": "Options",
    "examples": [
      "axis: {\r  x: {\r    height: 20\r  }\r}"
    ],
    "type": {
      "names": [
        "Number"
      ]
    },
    "defaultvalue": "undefined",
    "meta": {
      "lineno": 1273,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 73
  },
  {
    "id": "Options.axis:x:extent",
    "longname": "Options.axis:x:extent",
    "name": "axis:x:extent",
    "kind": "member",
    "scope": "static",
    "description": "Set default extent for subchart and zoom. This can be an array or function that returns an array.",
    "memberof": "Options",
    "examples": [
      "axis: {\r  x: {\r    // [[x0, y0], [x1, y1]], where [x0, y0] is the top-left corner and [x1, y1] is the bottom-right corner\r    // https://github.com/d3/d3-brush/blob/master/src/brush.js#L521\r    extent: [[0, 0], [200, 60]]\r  }\r}"
    ],
    "type": {
      "names": [
        "Array"
      ]
    },
    "defaultvalue": "undefined",
    "meta": {
      "lineno": 1289,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 74
  },
  {
    "id": "Options.axis:x:label",
    "longname": "Options.axis:x:label",
    "name": "axis:x:label",
    "kind": "member",
    "scope": "static",
    "description": "Set label on x axis.<br><br>\r You can set x axis label and change its position by this option. string and object can be passed and we can change the poisiton by passing object that has position key. Available position differs according to the axis direction (vertical or horizontal). If string set, the position will be the default.\r - If it's horizontal axis:\r   - inner-right [default]\r   - inner-center\r   - inner-left\r   - outer-right\r   - outer-center\r   - outer-left\r - If it's vertical axis:\r   - inner-top [default]\r   - inner-middle\r   - inner-bottom\r   - outer-top\r   - outer-middle\r   - outer-bottom",
    "memberof": "Options",
    "examples": [
      "axis: {\r  x: {\r    label: \"Your X Axis\"\r  }\r}\r\raxis: {\r  x: {\r    label: {\r       text: \"Your X Axis\",\r       position: \"outer-center\"\r    }\r  }\r}"
    ],
    "type": {
      "names": [
        "String",
        "Object"
      ]
    },
    "defaultvalue": "undefined",
    "meta": {
      "lineno": 1306,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 75
  },
  {
    "id": "Options.axis:y:show",
    "longname": "Options.axis:y:show",
    "name": "axis:y:show",
    "kind": "member",
    "scope": "static",
    "description": "Show or hide y axis.",
    "memberof": "Options",
    "examples": [
      "axis: {\r  y: {\r    show: false\r  }\r}"
    ],
    "type": {
      "names": [
        "Boolean"
      ]
    },
    "defaultvalue": "true",
    "meta": {
      "lineno": 1345,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 76
  },
  {
    "id": "Options.axis:y:type",
    "longname": "Options.axis:y:type",
    "name": "axis:y:type",
    "kind": "member",
    "scope": "static",
    "description": "Set type of y axis.<br><br>\r**Available Values:**\r  - timeseries\r  - category\r  - indexed",
    "memberof": "Options",
    "examples": [
      "axis: {\r  y: {\r    type: \"timeseries\"\r  }\r}"
    ],
    "type": {
      "names": [
        "String"
      ]
    },
    "defaultvalue": "undefined",
    "meta": {
      "lineno": 1360,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 77
  },
  {
    "id": "Options.axis:y:max",
    "longname": "Options.axis:y:max",
    "name": "axis:y:max",
    "kind": "member",
    "scope": "static",
    "description": "Set max value of y axis.\r- **NOTE:** Padding will be added based on this value, so if you don't need the padding, please set axis.y.padding to disable it (e.g. axis.y.padding = 0).",
    "memberof": "Options",
    "examples": [
      "axis: {\r  y: {\r    max: 1000\r  }\r}"
    ],
    "type": {
      "names": [
        "Number"
      ]
    },
    "defaultvalue": "undefined",
    "meta": {
      "lineno": 1379,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 78
  },
  {
    "id": "Options.axis:y:min",
    "longname": "Options.axis:y:min",
    "name": "axis:y:min",
    "kind": "member",
    "scope": "static",
    "description": "Set min value of y axis.\r- **NOTE:**\r  Padding will be added based on this value, so if you don't need the padding, please set axis.y.padding to disable it (e.g. axis.y.padding = 0).",
    "memberof": "Options",
    "examples": [
      "axis: {\r  y: {\r    min: 1000\r  }\r}"
    ],
    "type": {
      "names": [
        "Number"
      ]
    },
    "defaultvalue": "undefined",
    "meta": {
      "lineno": 1395,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 79
  },
  {
    "id": "Options.axis:y:inverted",
    "longname": "Options.axis:y:inverted",
    "name": "axis:y:inverted",
    "kind": "member",
    "scope": "static",
    "description": "Change the direction of y axis.<br><br>\rIf true set, the direction will be from the top to the bottom.",
    "memberof": "Options",
    "examples": [
      "axis: {\r  y: {\r    inverted: true\r  }\r}"
    ],
    "type": {
      "names": [
        "Boolean"
      ]
    },
    "defaultvalue": "false",
    "meta": {
      "lineno": 1412,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 80
  },
  {
    "id": "Options.axis:y:center",
    "longname": "Options.axis:y:center",
    "name": "axis:y:center",
    "kind": "member",
    "scope": "static",
    "description": "Set center value of y axis.",
    "memberof": "Options",
    "examples": [
      "axis: {\r  y: {\r    center: 0\r  }\r}"
    ],
    "type": {
      "names": [
        "Number"
      ]
    },
    "defaultvalue": "undefined",
    "meta": {
      "lineno": 1428,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 81
  },
  {
    "id": "Options.axis:y:inner",
    "longname": "Options.axis:y:inner",
    "name": "axis:y:inner",
    "kind": "member",
    "scope": "static",
    "description": "Show y axis inside of the chart.",
    "memberof": "Options",
    "examples": [
      "axis: {\r  y: {\r    inner: true\r  }\r}"
    ],
    "type": {
      "names": [
        "Boolean"
      ]
    },
    "defaultvalue": "false",
    "meta": {
      "lineno": 1443,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 82
  },
  {
    "id": "Options.axis:y:label",
    "longname": "Options.axis:y:label",
    "name": "axis:y:label",
    "kind": "member",
    "scope": "static",
    "description": "Set label on y axis.<br><br>\rYou can set y axis label and change its position by this option. This option works in the same way as axis.x.label.",
    "memberof": "Options",
    "examples": [
      "axis: {\r  y: {\r    label: \"Your Y Axis\"\r  }\r}\r\raxis: {\r  y: {\r    label: {\r       text: \"Your Y Axis\",\r       position: \"outer-middle\"\r    }\r  }\r}"
    ],
    "type": {
      "names": [
        "String",
        "Object"
      ]
    },
    "defaultvalue": "{}",
    "meta": {
      "lineno": 1458,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 83
  },
  {
    "id": "Options.axis:y:format",
    "longname": "Options.axis:y:format",
    "name": "axis:y:format",
    "kind": "member",
    "scope": "static",
    "description": "Set formatter for y axis tick text.<br><br>\rThis option accepts d3.format object as well as a function you define.",
    "memberof": "Options",
    "examples": [
      "axis: {\r  x: {\r    tick: {\r      format: function(x) {\r          return x.getFullYear();\r      }\r    }\r  }\r}"
    ],
    "type": {
      "names": [
        "function"
      ]
    },
    "defaultvalue": "undefined",
    "meta": {
      "lineno": 1483,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 84
  },
  {
    "id": "Options.axis:y:tick:outer",
    "longname": "Options.axis:y:tick:outer",
    "name": "axis:y:tick:outer",
    "kind": "member",
    "scope": "static",
    "description": "Show y axis outer tick.",
    "memberof": "Options",
    "examples": [
      "axis: {\r  y: {\r    tick: {\r      outer: false\r    }\r  }\r}"
    ],
    "type": {
      "names": [
        "Boolean"
      ]
    },
    "defaultvalue": "true",
    "meta": {
      "lineno": 1503,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 85
  },
  {
    "id": "Options.axis:y:tick:values",
    "longname": "Options.axis:y:tick:values",
    "name": "axis:y:tick:values",
    "kind": "member",
    "scope": "static",
    "description": "Set y axis tick values manually.",
    "memberof": "Options",
    "examples": [
      "axis: {\r  y: {\r    tick: {\r      values: [100, 1000, 10000]\r    }\r  }\r}"
    ],
    "type": {
      "names": [
        "Array"
      ]
    },
    "defaultvalue": "null",
    "meta": {
      "lineno": 1520,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 86
  },
  {
    "id": "Options.axis:y:tick:count",
    "longname": "Options.axis:y:tick:count",
    "name": "axis:y:tick:count",
    "kind": "member",
    "scope": "static",
    "description": "Set the number of y axis ticks.<br><br>\r- **NOTE:** The position of the ticks will be calculated precisely, so the values on the ticks will not be rounded nicely. In the case, axis.y.tick.format or axis.y.tick.values will be helpful.",
    "memberof": "Options",
    "examples": [
      "axis: {\r  y: {\r    tick: {\r      count: 5\r    }\r  }\r}"
    ],
    "type": {
      "names": [
        "Number"
      ]
    },
    "defaultvalue": "undefined",
    "meta": {
      "lineno": 1538,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 87
  },
  {
    "id": "Options.axis:y:tick:time",
    "longname": "Options.axis:y:tick:time",
    "name": "axis:y:tick:time",
    "kind": "member",
    "scope": "static",
    "description": "Set the number of y axis ticks.<br><br>\r**NOTE:** The position of the ticks will be calculated precisely, so the values on the ticks will not be rounded nicely. In the case, axis.y.tick.format or axis.y.tick.values will be helpful.",
    "memberof": "Options",
    "examples": [
      "axis: {\r  y: {\r    tick: {\r      time: {\r         // ticks at 15-minute intervals\r         // https://github.com/d3/d3-scale/blob/master/README.md#time_ticks\r         value: d3.timeMinute.every(15)\r      }\r    }\r  }\r}"
    ],
    "type": {
      "names": [
        "Object"
      ]
    },
    "properties": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "optional": true,
        "description": "D3's time interval function (https://github.com/d3/d3-time#intervals)",
        "name": "time.value"
      }
    ],
    "access": "private",
    "meta": {
      "lineno": 1556,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 88
  },
  {
    "id": "Options.axis:y:padding",
    "longname": "Options.axis:y:padding",
    "name": "axis:y:padding",
    "kind": "member",
    "scope": "static",
    "description": "Set padding for y axis.<br><br>\rYou can set padding for y axis to create more space on the edge of the axis. This option accepts object and it can include top and bottom. top, bottom will be treated as pixels.",
    "memberof": "Options",
    "examples": [
      "axis: {\r  y: {\r    padding: {\r      top: 0,\r      bottom: 0\r    }\r  }\r}"
    ],
    "type": {
      "names": [
        "Object"
      ]
    },
    "defaultvalue": "{}",
    "meta": {
      "lineno": 1580,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 89
  },
  {
    "id": "Options.axis:y:default",
    "longname": "Options.axis:y:default",
    "name": "axis:y:default",
    "kind": "member",
    "scope": "static",
    "description": "Set default range of y axis.<br><br>\rThis option set the default value for y axis when there is no data on init.",
    "memberof": "Options",
    "examples": [
      "axis: {\r  y: {\r    default: [0, 1000]\r  }\r}"
    ],
    "type": {
      "names": [
        "Array"
      ]
    },
    "defaultvalue": "undefined",
    "meta": {
      "lineno": 1599,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 90
  },
  {
    "id": "Options.axis:y2:show",
    "longname": "Options.axis:y2:show",
    "name": "axis:y2:show",
    "kind": "member",
    "scope": "static",
    "description": "Show or hide y2 axis.",
    "memberof": "Options",
    "examples": [
      "axis: {\r  y2: {\r    show: true\r  }\r}"
    ],
    "type": {
      "names": [
        "Boolean"
      ]
    },
    "defaultvalue": "false",
    "meta": {
      "lineno": 1615,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 91
  },
  {
    "id": "Options.axis:y2:max",
    "longname": "Options.axis:y2:max",
    "name": "axis:y2:max",
    "kind": "member",
    "scope": "static",
    "description": "Set max value of y2 axis.",
    "memberof": "Options",
    "examples": [
      "axis: {\r  y2: {\r    max: 1000\r  }\r}"
    ],
    "type": {
      "names": [
        "Number"
      ]
    },
    "defaultvalue": "undefined",
    "meta": {
      "lineno": 1630,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 92
  },
  {
    "id": "Options.axis:y2:min",
    "longname": "Options.axis:y2:min",
    "name": "axis:y2:min",
    "kind": "member",
    "scope": "static",
    "description": "Set min value of y2 axis.",
    "memberof": "Options",
    "examples": [
      "axis: {\r  y2: {\r    min: -1000\r  }\r}"
    ],
    "type": {
      "names": [
        "Number"
      ]
    },
    "defaultvalue": "undefined",
    "meta": {
      "lineno": 1645,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 93
  },
  {
    "id": "Options.axis:y2:inverted",
    "longname": "Options.axis:y2:inverted",
    "name": "axis:y2:inverted",
    "kind": "member",
    "scope": "static",
    "description": "Change the direction of y2 axis.<br><br>\rIf true set, the direction will be from the top to the bottom.",
    "memberof": "Options",
    "examples": [
      "axis: {\r  y2: {\r    inverted: true\r  }\r}"
    ],
    "type": {
      "names": [
        "Boolean"
      ]
    },
    "defaultvalue": "false",
    "meta": {
      "lineno": 1660,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 94
  },
  {
    "id": "Options.axis:y2:center",
    "longname": "Options.axis:y2:center",
    "name": "axis:y2:center",
    "kind": "member",
    "scope": "static",
    "description": "Set center value of y2 axis.",
    "memberof": "Options",
    "examples": [
      "axis: {\r  y2: {\r    center: 0\r  }\r}"
    ],
    "type": {
      "names": [
        "Number"
      ]
    },
    "defaultvalue": "undefined",
    "meta": {
      "lineno": 1676,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 95
  },
  {
    "id": "Options.axis:y2:inner",
    "longname": "Options.axis:y2:inner",
    "name": "axis:y2:inner",
    "kind": "member",
    "scope": "static",
    "description": "Show y2 axis inside of the chart.",
    "memberof": "Options",
    "examples": [
      "axis: {\r  y2: {\r    inner: true\r  }\r}"
    ],
    "type": {
      "names": [
        "Boolean"
      ]
    },
    "defaultvalue": "false",
    "meta": {
      "lineno": 1691,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 96
  },
  {
    "id": "Options.axis:y2:label",
    "longname": "Options.axis:y2:label",
    "name": "axis:y2:label",
    "kind": "member",
    "scope": "static",
    "description": "Set label on y2 axis.<br><br>\rYou can set y2 axis label and change its position by this option. This option works in the same way as axis.x.label.",
    "memberof": "Options",
    "examples": [
      "axis: {\r  y2: {\r    label: \"Your Y2 Axis\"\r  }\r}\r\raxis: {\r  y2: {\r    label: {\r       text: \"Your Y2 Axis\",\r       position: \"outer-middle\"\r    }\r  }\r}"
    ],
    "type": {
      "names": [
        "String",
        "Object"
      ]
    },
    "defaultvalue": "{}",
    "meta": {
      "lineno": 1706,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 97
  },
  {
    "id": "Options.axis:y2:tick:format",
    "longname": "Options.axis:y2:tick:format",
    "name": "axis:y2:tick:format",
    "kind": "member",
    "scope": "static",
    "description": "Set formatter for y2 axis tick text.<br><br>\rThis option works in the same way as axis.y.format.",
    "memberof": "Options",
    "examples": [
      "axis: {\r  y2: {\r    tick: {\r      format: d3.format(\"$,\")\r      //or format: function(d) { return \"$\" + d; }\r    }\r  }\r}"
    ],
    "type": {
      "names": [
        "function"
      ]
    },
    "defaultvalue": "undefined",
    "meta": {
      "lineno": 1731,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 98
  },
  {
    "id": "Options.axis:y2:tick:outer",
    "longname": "Options.axis:y2:tick:outer",
    "name": "axis:y2:tick:outer",
    "kind": "member",
    "scope": "static",
    "description": "Show or hide y2 axis outer tick.",
    "memberof": "Options",
    "examples": [
      "axis: {\r  y2: {\r    tick: {\r      outer: false\r    }\r  }\r}"
    ],
    "type": {
      "names": [
        "Boolean"
      ]
    },
    "defaultvalue": "true",
    "meta": {
      "lineno": 1750,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 99
  },
  {
    "id": "Options.axis:y2:tick:values",
    "longname": "Options.axis:y2:tick:values",
    "name": "axis:y2:tick:values",
    "kind": "member",
    "scope": "static",
    "description": "Set y2 axis tick values manually.",
    "memberof": "Options",
    "examples": [
      "axis: {\r  y2: {\r    tick: {\r      values: [100, 1000, 10000]\r    }\r  }\r}"
    ],
    "type": {
      "names": [
        "Array"
      ]
    },
    "defaultvalue": "null",
    "meta": {
      "lineno": 1767,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 100
  },
  {
    "id": "Options.axis:y2:tick:count",
    "longname": "Options.axis:y2:tick:count",
    "name": "axis:y2:tick:count",
    "kind": "member",
    "scope": "static",
    "description": "Set the number of y2 axis ticks.\r- **NOTE:** This works in the same way as axis.y.tick.count.",
    "memberof": "Options",
    "examples": [
      "axis: {\r  y2: {\r    tick: {\r      count: 5\r    }\r  }\r}"
    ],
    "type": {
      "names": [
        "Number"
      ]
    },
    "defaultvalue": "undefined",
    "meta": {
      "lineno": 1784,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 101
  },
  {
    "id": "Options.axis:y2:padding",
    "longname": "Options.axis:y2:padding",
    "name": "axis:y2:padding",
    "kind": "member",
    "scope": "static",
    "description": "Set the number of y2 axis ticks.\r- **NOTE:** This works in the same way as axis.y.tick.count.",
    "memberof": "Options",
    "examples": [
      "axis: {\r  y2: {\r    padding: {\r      top: 100,\r      bottom: 100\r    }\r  }\r}"
    ],
    "type": {
      "names": [
        "Number"
      ]
    },
    "defaultvalue": "{}",
    "meta": {
      "lineno": 1802,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 102
  },
  {
    "id": "Options.axis:y2:default",
    "longname": "Options.axis:y2:default",
    "name": "axis:y2:default",
    "kind": "member",
    "scope": "static",
    "description": "Set default range of y2 axis.<br><br>\rThis option set the default value for y2 axis when there is no data on init.",
    "memberof": "Options",
    "examples": [
      "axis: {\r  y2: {\r    default: [0, 1000]\r  }\r}"
    ],
    "type": {
      "names": [
        "Array"
      ]
    },
    "defaultvalue": "undefined",
    "meta": {
      "lineno": 1821,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 103
  },
  {
    "id": "Options.grid",
    "longname": "Options.grid",
    "name": "grid",
    "kind": "member",
    "scope": "static",
    "description": "Set related options",
    "memberof": "Options",
    "examples": [
      "grid: {\r  x: {\r    show: true,\r    lines: [\r      {value: 2, text: \"Label on 2\"},\r      {value: 5, text: \"Label on 5\", class: \"label-5\"}\r      {value: 6, text: \"Label on 6\", position: \"start\"}\r    ]\r  },\r\t y: {\r    show: true,\r    lines: [\r      {value: 100, text: \"Label on 100\"},\r      {value: 200, text: \"Label on 200\", class: \"label-200\"}\r      {value: 300, text: \"Label on 300\", position: 'middle'}\r    ],\r    ticks: 5\r  },\r  focus: {\r     show: false\r  },\r  lines: {\r     front: false\r  }\r}"
    ],
    "type": {
      "names": [
        "Object"
      ]
    },
    "defaultvalue": "undefined",
    "properties": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "optional": true,
        "defaultvalue": false,
        "description": "Show grids along x axis.",
        "name": "grid.x.show"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "optional": true,
        "defaultvalue": "[]",
        "description": "Show additional grid lines along x axis.<br>\r This option accepts array including object that has value, text, position and class. text, position and class are optional. For position, start, middle and end (default) are available.\r If x axis is category axis, value can be category name. If x axis is timeseries axis, value can be date string, Date object and unixtime integer.",
        "name": "grid.x.lines"
      },
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "optional": true,
        "defaultvalue": false,
        "description": "Show grids along x axis.",
        "name": "grid.y.show"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "optional": true,
        "defaultvalue": "[]",
        "description": "Show additional grid lines along y axis.<br>\r This option accepts array including object that has value, text, position and class.",
        "name": "grid.y.lines"
      },
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "optional": true,
        "defaultvalue": 10,
        "name": "grid.y.ticks"
      },
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "optional": true,
        "defaultvalue": true,
        "description": "Show grids when focus.",
        "name": "grid.focus.show"
      },
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "optional": true,
        "defaultvalue": true,
        "name": "grid.lines.front"
      }
    ],
    "meta": {
      "lineno": 1837,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 104
  },
  {
    "id": "Options.point",
    "longname": "Options.point",
    "name": "point",
    "kind": "member",
    "scope": "static",
    "description": "Set point options",
    "memberof": "Options",
    "examples": [
      "point: {\r     show: false,\r     r: 5,\r     focus: {\r         expand: {\r             enabled: true,\r             r: 1\r         }\r     },\r     select: {\r         r: 3\r     }\r }"
    ],
    "type": {
      "names": [
        "Object"
      ]
    },
    "properties": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "optional": true,
        "defaultvalue": true,
        "description": "Whether to show each point in line.",
        "name": "point.show"
      },
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "optional": true,
        "defaultvalue": 2.5,
        "description": "The radius size of each point.",
        "name": "point.r"
      },
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "optional": true,
        "defaultvalue": true,
        "description": "Whether to expand each point on focus.",
        "name": "point.focus.expand.enabled"
      },
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "optional": true,
        "defaultvalue": "point.r*1.75",
        "description": "The radius size of each point on focus.",
        "name": "point.focus.expand.r"
      },
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "optional": true,
        "defaultvalue": "point.r*4",
        "description": "The radius size of each point on selected.",
        "name": "point.select.r"
      }
    ],
    "meta": {
      "lineno": 1889,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 105
  },
  {
    "id": "Options.line",
    "longname": "Options.line",
    "name": "line",
    "kind": "member",
    "scope": "static",
    "description": "Set line options",
    "memberof": "Options",
    "examples": [
      "line: {\r     connectNull: true,\r     step: {\r         type: \"step-after\"\r     }\r }"
    ],
    "type": {
      "names": [
        "Object"
      ]
    },
    "properties": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "optional": true,
        "defaultvalue": false,
        "description": "Set if null data point will be connected or not.<br>\r If true set, the region of null data will be connected without any data point. If false set, the region of null data will not be connected and get empty.",
        "name": "line.connectNull"
      },
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "optional": true,
        "defaultvalue": "step",
        "description": "Change step type for step chart.<br>\r**Available values:**\r- step\r- step-before\r- step-after",
        "name": "line.step_type"
      }
    ],
    "meta": {
      "lineno": 1921,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 106
  },
  {
    "id": "Options.bar",
    "longname": "Options.bar",
    "name": "bar",
    "kind": "member",
    "scope": "static",
    "description": "Set bar options",
    "memberof": "Options",
    "examples": [
      "bar: {\r     width: 10,\r     // or\r     width: {\r         ratio: 0.2,\r         max: 200\r     },\r     zerobased: false\r }"
    ],
    "type": {
      "names": [
        "Object"
      ]
    },
    "properties": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "optional": true,
        "description": "Change the width of bar chart.",
        "name": "bar.width"
      },
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "optional": true,
        "defaultvalue": 0.6,
        "description": "Change the width of bar chart by ratio.",
        "name": "bar.width.ratio"
      },
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "optional": true,
        "name": "bar.width.max"
      },
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "optional": true,
        "defaultvalue": true,
        "description": "Set if min or max value will be 0 on bar chart.",
        "name": "bar.zerobased"
      }
    ],
    "meta": {
      "lineno": 1944,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 107
  },
  {
    "id": "Options.area",
    "longname": "Options.area",
    "name": "area",
    "kind": "member",
    "scope": "static",
    "description": "Set area options",
    "memberof": "Options",
    "examples": [
      "area: {\r     zerobased: false,\r     above: true\r }"
    ],
    "type": {
      "names": [
        "Object"
      ]
    },
    "properties": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "optional": true,
        "defaultvalue": true,
        "description": "Set if min or max value will be 0 on area chart.",
        "name": "area.zerobased"
      },
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "optional": true,
        "defaultvalue": false,
        "name": "area.above"
      }
    ],
    "meta": {
      "lineno": 1969,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 108
  },
  {
    "id": "Options.pie",
    "longname": "Options.pie",
    "name": "pie",
    "kind": "member",
    "scope": "static",
    "description": "Set pie options",
    "memberof": "Options",
    "examples": [
      "pie: {\r     label: {\r         show: false,\r         format: function(value, ratio, id) {\r             return d3.format(\"$\")(value);\r         },\r         threshold: 0.1\r     },\r     expand: false,\r     padAngle: 0.1\r }"
    ],
    "type": {
      "names": [
        "Object"
      ]
    },
    "properties": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "optional": true,
        "defaultvalue": true,
        "description": "Show or hide label on each pie piece.",
        "name": "pie.label.show"
      },
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "optional": true,
        "description": "Set formatter for the label on each pie piece.",
        "name": "pie.label.format"
      },
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "optional": true,
        "defaultvalue": 0.05,
        "description": "Set threshold to show/hide labels.",
        "name": "pie.label.threshold"
      },
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "optional": true,
        "defaultvalue": true,
        "description": "Enable or disable expanding pie pieces.",
        "name": "pie.expand"
      },
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "optional": true,
        "defaultvalue": 0,
        "description": "Set padding between data.",
        "name": "pie.padAngle"
      }
    ],
    "meta": {
      "lineno": 1985,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 109
  },
  {
    "id": "Options.gauge",
    "longname": "Options.gauge",
    "name": "gauge",
    "kind": "member",
    "scope": "static",
    "description": "Set gauge options",
    "memberof": "Options",
    "examples": [
      "gauge: {\r     label: {\r         show: false,\r         format: function(value, ratio) {\r             return value;\r         }\r     },\r     expand: false,\r     min: -100,\r     max: 200,\r     units: \"%\",\r     width: 10\r }"
    ],
    "type": {
      "names": [
        "Object"
      ]
    },
    "properties": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "optional": true,
        "defaultvalue": false,
        "name": "gauge.fullCircle"
      },
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "optional": true,
        "defaultvalue": true,
        "description": "Show or hide label on gauge.",
        "name": "gauge.label.show"
      },
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "optional": true,
        "description": "Set formatter for the label on gauge.",
        "name": "gauge.label.format"
      },
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "optional": true,
        "defaultvalue": true,
        "description": "Enable or disable expanding gauge.",
        "name": "gauge.expand"
      },
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "optional": true,
        "defaultvalue": 50,
        "name": "gauge.expand.duration"
      },
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "optional": true,
        "defaultvalue": 0,
        "description": "Set min value of the gauge.",
        "name": "gauge.min"
      },
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "optional": true,
        "defaultvalue": 100,
        "description": "Set max value of the gauge.",
        "name": "gauge.max"
      },
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "optional": true,
        "defaultvalue": "-1 * Math.PI / 2",
        "name": "gauge.startingAngle"
      },
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "optional": true,
        "description": "Set units of the gauge.",
        "name": "gauge.units"
      },
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "optional": true,
        "description": "Set width of gauge chart.",
        "name": "gauge.width"
      }
    ],
    "meta": {
      "lineno": 2016,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 110
  },
  {
    "id": "Options.donut",
    "longname": "Options.donut",
    "name": "donut",
    "kind": "member",
    "scope": "static",
    "description": "Set donut options",
    "memberof": "Options",
    "examples": [
      "donut: {\r     label: {\r         show: false,\r         format: function(value, ratio, id) {\r             return d3.format(\"$\")(value);\r         },\r         threshold: 0.1\r     },\r     expand: false,\r     width: 10,\r     title: \"Donut Title\",\r     padAngle: 0.2\r }"
    ],
    "type": {
      "names": [
        "Object"
      ]
    },
    "properties": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "optional": true,
        "defaultvalue": true,
        "description": "Show or hide label on each donut piece.",
        "name": "donut.label.show"
      },
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "optional": true,
        "description": "Set formatter for the label on each donut piece.",
        "name": "donut.label.format"
      },
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "optional": true,
        "defaultvalue": 0.05,
        "description": "Set threshold to show/hide labels.",
        "name": "donut.label.threshold"
      },
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "optional": true,
        "defaultvalue": true,
        "description": "Enable or disable expanding donut pieces.",
        "name": "donut.expand"
      },
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "optional": true,
        "description": "Set width of donut chart.",
        "name": "donut.width"
      },
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "optional": true,
        "defaultvalue": "\"\"",
        "description": "Set title of donut chart.",
        "name": "donut.title"
      },
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "optional": true,
        "defaultvalue": 0,
        "description": "Set padding between data.",
        "name": "donut.padAngle"
      }
    ],
    "meta": {
      "lineno": 2058,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 111
  },
  {
    "id": "Options.spline",
    "longname": "Options.spline",
    "name": "spline",
    "kind": "member",
    "scope": "static",
    "description": "Set spline options",
    "memberof": "Options",
    "examples": [
      "spline: {\r     interpolation: {\r         type: \"cardinal\"\r     }\r }"
    ],
    "type": {
      "names": [
        "Object"
      ]
    },
    "properties": [
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "optional": true,
        "defaultvalue": "cardinal",
        "name": "spline.interpolation.type"
      }
    ],
    "meta": {
      "lineno": 2095,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 112
  },
  {
    "id": "Options.regions",
    "longname": "Options.regions",
    "name": "regions",
    "kind": "member",
    "scope": "static",
    "description": "Show rectangles inside the chart.<br><br>\rThis option accepts array including object that has axis, start, end and class. The keys start, end and class are optional.\raxis must be x, y or y2. start and end should be the value where regions start and end. If not specified, the edge values will be used. If timeseries x axis, date string, Date object and unixtime integer can be used. If class is set, the region element will have it as class.",
    "memberof": "Options",
    "examples": [
      "regions: [\r\t {\r\t     axis: \"x\",\r\t     start: 1,\r\t     end: 4,\r\t     class: \"region-1-4\"\r\t }\r ]"
    ],
    "type": {
      "names": [
        "Array"
      ]
    },
    "defaultvalue": "[]",
    "meta": {
      "lineno": 2110,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 113
  },
  {
    "id": "Options.tooltip",
    "longname": "Options.tooltip",
    "name": "tooltip",
    "kind": "member",
    "scope": "static",
    "description": "Tooltip options",
    "memberof": "Options",
    "examples": [
      "tooltip: {\r     show: true,\r     grouped: false,\r     format: {\r         title: function(x) { return \"Data \" + x; },\r         name: function(name, ratio, id, index) { return name; },\r         value: function(value, ratio, id, index) { return ratio; }\r     },\r     position: function(data, width, height, element) {\r         return {top: 0, left: 0}\r     },\r     contents: function(d, defaultTitleFormat, defaultValueFormat, color) {\r         return ... // formatted html as you want\r     }\r }"
    ],
    "type": {
      "names": [
        "Object"
      ]
    },
    "properties": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "optional": true,
        "defaultvalue": true,
        "description": "Show or hide tooltip.<br>",
        "name": "tooltip.show"
      },
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "optional": true,
        "defaultvalue": true,
        "description": "Set if tooltip is grouped or not for the data points.",
        "name": "tooltip.grouped"
      },
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "optional": true,
        "description": "Set format for the title of tooltip.<br>\r Specified function receives x of the data point to show.",
        "name": "tooltip.format.title"
      },
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "optional": true,
        "description": "Set format for the name of each data in tooltip.<br>\r Specified function receives name, ratio, id and index of the data point to show. ratio will be undefined if the chart is not donut/pie/gauge.",
        "name": "tooltip.format.name"
      },
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "optional": true,
        "description": "Set format for the value of each data in tooltip.<br>\r Specified function receives name, ratio, id and index of the data point to show. ratio will be undefined if the chart is not donut/pie/gauge.\r If undefined returned, the row of that value will be skipped.",
        "name": "tooltip.format.value"
      },
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "optional": true,
        "description": "Set custom position for the tooltip.<br>\r This option can be used to modify the tooltip position by returning object that has top and left.",
        "name": "tooltip.position"
      },
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "optional": true,
        "description": "Set custom HTML for the tooltip.<br>\r Specified function receives data, defaultTitleFormat, defaultValueFormat and color of the data point to show. If tooltip.grouped is true, data includes multiple data points.",
        "name": "tooltip.contents"
      }
    ],
    "meta": {
      "lineno": 2130,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 114
  },
  {
    "id": "Options.title",
    "longname": "Options.title",
    "name": "title",
    "kind": "member",
    "scope": "static",
    "description": "Set title options",
    "memberof": "Options",
    "examples": [
      "title: {\r     text: \"Title Text\",\r     padding: {\r         top: 10,\r         right: 10,\r         bottom: 10,\r         left: 10\r     },\r     position: \"top-center\"\r }"
    ],
    "type": {
      "names": [
        "Object"
      ]
    },
    "properties": [
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "optional": true,
        "name": "title.text"
      },
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "optional": true,
        "defaultvalue": 0,
        "name": "title.padding.top"
      },
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "optional": true,
        "defaultvalue": 0,
        "name": "title.padding.right"
      },
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "optional": true,
        "defaultvalue": 0,
        "name": "title.padding.bottom"
      },
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "optional": true,
        "defaultvalue": 0,
        "name": "title.padding.left"
      },
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "optional": true,
        "defaultvalue": "top-center",
        "name": "title.position"
      }
    ],
    "meta": {
      "lineno": 2184,
      "filename": "Options.js",
      "path": "/Users/Naver/Documents/projects/oss/personal_repo/billboardjs-playground/node_modules/billboard.js/src/config"
    },
    "order": 115
  }
]
