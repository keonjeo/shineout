webpackJsonpShineoutDoc([11],{268:function(e,n,t){"use strict";var o=t(27);n.a=Object(o.m)("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css","FontAwesome","fa")},803:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),a=t.n(o),r=t(79),l=t(78),i=t(50),c=t(804),s=t.n(c),u=t(805),d=t.n(u),m=Object(i.a)(s.a,d.a),p=[{name:"1-base",title:Object(i.a)("基本用法 \n 基础的文件上传","Base \n Basic usage for uploading file"),component:t(806).default,rawText:t(807)},{name:"2-image",title:Object(i.a)("上传图片 \n 使用 Upload.Image 处理带预览的图片上传","Image \n Use Upload.Image to upload and preview images."),component:t(808).default,rawText:t(809)},{name:"3-validator",title:Object(i.a)("校验 \n 通过 validator.imageSize 校验图片长宽，本例为 200px * 100px","Validator \n Set validator.imageSize to validate the width and height of the image."),component:t(810).default,rawText:t(811)},{name:"4-filesize",title:Object(i.a)("文件大小 \n 文件大小校验，本例为 10KB"," \n Set validator.size to validate the size of the file. This example is 10KB."),component:t(812).default,rawText:t(813)},{name:"5-error",title:Object(i.a)("异常处理 \n onError 用来处理上传到服务器返回的异常","Error \n Set onError to handle exceptions returned by uploading to the server."),component:t(814).default,rawText:t(815)},{name:"6-recover",title:Object(i.a)("恢复删除 \n 设置 recoverAble 为 true，点击删除后，文件会标记为已删除，可以通过恢复图标恢复","Recover \n Set reconverAble to true, Clicking delete icon will not remove the file, but will mark it as deleted."),component:t(816).default,rawText:t(817)},{name:"7-request",title:Object(i.a)("自定义上传 \n 通过 request 函数，替代默认上传方法","Custom Request \n Set request property to use your own XMLHttpRequest."),component:t(818).default,rawText:t(819)},{name:"8-zip",title:Object(i.a)(" \n 此事例演示通过自定义函数压缩文件后上传"," \n Zip file and upload."),component:t(820).default,rawText:t(821)},{name:"9-defaultValue",title:Object(i.a)("默认值 \n 默认值示例","defaultValue \n defaultValue example"),component:t(822).default,rawText:t(823)}];n.default=Object(r.a)(function(e){return a.a.createElement(l.b,Object.assign({},e,{codes:void 0,source:m,examples:p}))})},804:function(e,n){e.exports="# Upload\n\n<br />\n\n本页中的示例服务端限制为 10 KB，大于此限制的文件会上传失败\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| accept | string | 无 | 上传文件类型 |\n| action | string | 必填 | 上传地址 |\n| children | any | 必填 | 上传占位内容 |\n| className | string | 无 | 扩展className |\n| defaultValue | array | 无 | 默认值 |\n| headers | object | 无 | 请求头部信息 |\n| htmlName | string | 无 | 服务端接收的 filename，不填使用 name |\n| limit | number | 100 | 最大上传文件数 |\n| name | string | 无 | Form 内存取数据的 key |\n| onChange | func(values) | 无 | 值改变回调(上传成功，删除)<br />values: 数组 |\n| onSuccess | func(res, file):value | 无 | 上传成功回调，返回结果作为新的 value<br />res: 上传接口返回结果<br />file: 选择的文件 |\n| onError | func(xhr):string | 无 | 上传失败时回调，返回结果作为错误内容提示 |\n| params | object | 无 | 提交到服务端的额外参数 |\n| recoverAble | bool | false | 是否可以恢复已删除的value |\n| renderResult | func | a => a | 结果展示 |\n| validator | object | 无 | 上传前文件校验 |\n| value | array | \\[] | defaultValue 和 value 可以同时设置，defaultValue 会被value覆盖<br />在Form中，value会被表单接管，value无效 |\n| withCredentials | bool | false | 是否携带 cookie |\n\n\n### Image\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| children | any | 无 | 上传按钮内容，可为空 |\n| renderResult | func | a => a | 返回图片 url 链接地址 |\n\n\n### validator 属性\n\n| 属性 | 类型 | 说明 |\n| --- | --- | --- |\n| ext | func(string):Error | 判断后缀名，传入参数为文件后缀，校验失败返回 Error |\n| size | func(number):Error | 判断文件大小，校验失败返回 Error |\n| imageSize | func(Image):Error | 只对 Image 有效，判断图片尺寸，校验失败返回 Error |\n"},805:function(e,n){e.exports="# Upload\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| accept | string | none | The type of the upload file |\n| action | string | required | The address for uploading |\n| children | any | required | Upload placeholder |\n| className | string | none | Extend className |\n| headers | object | none | Request headers |\n| htmlName | string | none | The filename received by the server. If it is not filled in, use the name. |\n| limit | number | 100 | Maximum number of uploaded files |\n| name | string | none | The key access data in the Form  |\n| onChange | func(values) | none | The callback function when the value is changing(Upload successfully, delete)<br />values: Array |\n| onSuccess | func(res, file):value | none | The callback function when to upload successfully. The returned result is as the new value. <br />res: the result that the upload interface returns<br />file: selected file |\n| onError | func(xhr):string | none | The callback function when to upload unsuccessfully. The returned result is as the error message. |\n| params | object | none | Additional parameters submitted to the server |\n| recoverAble | bool | true | Whether to recover deleted values. |\n| renderResult | func | a => a | Display results |\n| request | func | - | Custom request method |\n| validator | object | none | Check file before uploading |\n| value | array | \\[] | value |\n| withCredentials | bool | false | Whether to take the cookie |\n\n\n### Image\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| children | any | none | The content of the upload button. It can be empty. |\n| renderResult | func | a => a | Return the link address of the url of the image.|\n\n\n### Validator\n\n| Property | Type | Description |\n| --- | --- | --- |\n| ext | func(string):Error | Judge the file extension, return the Error when the verification fails. |\n| size | func(number):Error | Judge the size of the file and return the Error when the verification fails. |\n| imageSize | func(Image):Error | It is only valid for Image to determine the size of images and return the Error when the verification fails. |"},806:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),a=t.n(o),r=t(27),l=t(268);n.default=function(){return a.a.createElement(r.G,{action:"http://jsonplaceholder.typicode.com/posts",accept:"image/*",name:"file",onSuccess:function(e,n){return n.name},limit:3,style:{width:300}},a.a.createElement(r.c,null,a.a.createElement(l.a,{name:"upload"})," Upload file"))}},807:function(e,n){e.exports='/**\n * cn - 基本用法\n *    -- 基础的文件上传\n * en - Base\n *    -- Basic usage for uploading file\n\n */\nimport React from \'react\'\nimport { Upload, Button } from \'shineout\'\nimport FontAwesome from \'../Icon/FontAwesome\'\n\nexport default function () {\n  return (\n    <Upload\n      action="http://jsonplaceholder.typicode.com/posts"\n      accept="image/*"\n      name="file"\n      onSuccess={(res, file) => file.name}\n      limit={3}\n      style={{ width: 300 }}\n    >\n      <Button><FontAwesome name="upload" /> Upload file</Button>\n    </Upload>\n  )\n}\n'},808:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),a=t.n(o),r=t(27);n.default=function(){return a.a.createElement(r.G.Image,{action:"http://jsonplaceholder.typicode.com/posts",accept:"image/*",name:"file",onSuccess:function(e,n,t){return{data:t}},renderResult:function(e){return e.data},limit:3})}},809:function(e,n){e.exports='/**\n * cn - 上传图片\n *    -- 使用 Upload.Image 处理带预览的图片上传\n * en - Image\n *    -- Use Upload.Image to upload and preview images.\n */\nimport React from \'react\'\nimport { Upload } from \'shineout\'\n\nexport default function () {\n  return (\n    <Upload.Image\n      action="http://jsonplaceholder.typicode.com/posts"\n      accept="image/*"\n      name="file"\n      onSuccess={(res, file, data) => ({ data })}\n      renderResult={f => f.data}\n      limit={3}\n    />\n  )\n}\n'},810:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),a=t.n(o),r=t(27),l=t(268);n.default=function(){return a.a.createElement(r.G.Image,{action:"http://jsonplaceholder.typicode.com/posts",accept:"image/*",name:"file",onSuccess:function(e,n,t){return{data:t}},width:200,height:100,limit:1,renderResult:function(e){return e.data},validator:{ext:function(e){return["jpg","png"].includes(e)?void 0:new Error("File extension must be jpg or png")}}},a.a.createElement("div",{style:{margin:"auto",color:"#999",textAlign:"center"}},a.a.createElement(l.a,{name:"upload"})," Upload Image",a.a.createElement("br",null),"Allow size 200 * 100"))}},811:function(e,n){e.exports="/**\n * cn - 校验\n *    -- 通过 validator.imageSize 校验图片长宽，本例为 200px * 100px\n * en - Validator\n *    -- Set validator.imageSize to validate the width and height of the image.\n */\nimport React from 'react'\nimport { Upload } from 'shineout'\nimport FontAwesome from '../Icon/FontAwesome'\n\nexport default function () {\n  return (\n    <Upload.Image\n      action=\"http://jsonplaceholder.typicode.com/posts\"\n      accept=\"image/*\"\n      name=\"file\"\n      onSuccess={(res, file, data) => ({ data })}\n      width={200}\n      height={100}\n      limit={1}\n      renderResult={f => f.data}\n      validator={{\n        // imageSize: img => ((img.width !== 200 || img.height !== 100) ? new Error('only allow 200px * 100px') : undefined),\n        ext: ext => (['jpg', 'png'].includes(ext) ? undefined : new Error('File extension must be jpg or png')),\n      }}\n    >\n      <div style={{ margin: 'auto', color: '#999', textAlign: 'center' }}>\n        <FontAwesome name=\"upload\" /> Upload Image\n        <br />\n        Allow size 200 * 100\n      </div>\n    </Upload.Image>\n  )\n}\n"},812:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),a=t.n(o),r=t(27),l=t(268);n.default=function(){return a.a.createElement("div",null,a.a.createElement(r.G,{action:"http://jsonplaceholder.typicode.com/posts",accept:"image/*",multiple:!0,name:"file",onSuccess:function(e,n){return n.name},style:{width:300,marginBottom:30},validator:{size:function(e){return e>10240?new Error("max file size is 10KB"):void 0}}},a.a.createElement(r.c,null,a.a.createElement(l.a,{name:"upload"})," Upload file")),a.a.createElement(r.G.Image,{action:"http://jsonplaceholder.typicode.com/posts",accept:"image/*",multiple:!0,name:"file",onSuccess:function(e,n,t){return{data:t}},validator:{size:function(e){return e>10240?new Error("max file size is 10KB"):void 0}},renderResult:function(e){return e.data}}))}},813:function(e,n){e.exports='/**\n * cn - 文件大小\n *    -- 文件大小校验，本例为 10KB\n * en -\n *    -- Set validator.size to validate the size of the file. This example is 10KB.\n */\nimport React from \'react\'\nimport { Upload, Button } from \'shineout\'\nimport FontAwesome from \'../Icon/FontAwesome\'\n\nexport default function () {\n  return (\n    <div>\n      <Upload\n        action="http://jsonplaceholder.typicode.com/posts"\n        accept="image/*"\n        multiple\n        name="file"\n        onSuccess={(res, file) => file.name}\n        style={{ width: 300, marginBottom: 30 }}\n        validator={{\n          size: s => (s > 10240 ? new Error(\'max file size is 10KB\') : undefined),\n        }}\n      >\n        <Button><FontAwesome name="upload" /> Upload file</Button>\n      </Upload>\n\n      <Upload.Image\n        action="http://jsonplaceholder.typicode.com/posts"\n        accept="image/*"\n        multiple\n        name="file"\n        onSuccess={(res, file, data) => ({ data })}\n        validator={{\n          size: s => (s > 10240 ? new Error(\'max file size is 10KB\') : undefined),\n        }}\n        renderResult={f => f.data}\n      />\n    </div>\n  )\n}\n'},814:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),a=t.n(o),r=t(27),l=t(268);n.default=function(){return a.a.createElement("div",null,a.a.createElement(r.G,{action:"/path-no-exist",accept:"image/*",name:"file",onSuccess:function(e,n){return n.name},onError:function(e){return console.log(e),404===e.status?"Url not found.":"Upload Fail."},limit:3,style:{width:300,marginBottom:30}},a.a.createElement(r.c,null,a.a.createElement(l.a,{name:"upload"})," Upload file")),a.a.createElement(r.G.Image,{action:"/path-no-exist",accept:"image/*",name:"file",onSuccess:function(e,n,t){return{data:t}},onError:function(e){return console.log(e),404===e.status?"Url not found.":"Upload Fail."},renderResult:function(e){return e.data}}))}},815:function(e,n){e.exports="/**\n * cn - 异常处理\n *    -- onError 用来处理上传到服务器返回的异常\n * en - Error\n *    -- Set onError to handle exceptions returned by uploading to the server.\n */\nimport React from 'react'\nimport { Upload, Button } from 'shineout'\nimport FontAwesome from '../Icon/FontAwesome'\n\nexport default function () {\n  return (\n    <div>\n      <Upload\n        action=\"/path-no-exist\"\n        accept=\"image/*\"\n        name=\"file\"\n        onSuccess={(res, file) => file.name}\n        onError={(xhr) => {\n          console.log(xhr)\n          if (xhr.status === 404) return 'Url not found.'\n          return 'Upload Fail.'\n        }}\n        limit={3}\n        style={{ width: 300, marginBottom: 30 }}\n      >\n        <Button><FontAwesome name=\"upload\" /> Upload file</Button>\n      </Upload>\n\n      <Upload.Image\n        action=\"/path-no-exist\"\n        accept=\"image/*\"\n        name=\"file\"\n        onSuccess={(res, file, data) => ({ data })}\n        onError={(xhr) => {\n          console.log(xhr)\n          if (xhr.status === 404) return 'Url not found.'\n          return 'Upload Fail.'\n        }}\n        renderResult={f => f.data}\n      />\n    </div>\n  )\n}\n"},816:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),a=t.n(o),r=t(27),l=t(268);n.default=function(){return a.a.createElement("div",null,a.a.createElement(r.G,{action:"http://jsonplaceholder.typicode.com/posts",accept:"image/*",multiple:!0,limit:2,name:"file",onSuccess:function(e,n){return n.name},style:{width:300,marginBottom:30}},a.a.createElement(r.c,null,a.a.createElement(l.a,{name:"upload"})," Upload file")),a.a.createElement(r.G.Image,{action:"http://jsonplaceholder.typicode.com/posts",accept:"image/*",multiple:!0,name:"file",limit:1,recoverAble:!0,onSuccess:function(e,n,t){return{data:t}},renderResult:function(e){return e.data}}))}},817:function(e,n){e.exports='/**\n * cn - 恢复删除\n *    -- 设置 recoverAble 为 true，点击删除后，文件会标记为已删除，可以通过恢复图标恢复\n * en - Recover\n *    -- Set reconverAble to true, Clicking delete icon will not remove the file, but will mark it as deleted.\n */\nimport React from \'react\'\nimport { Upload, Button } from \'shineout\'\nimport FontAwesome from \'../Icon/FontAwesome\'\n\nexport default function () {\n  return (\n    <div>\n      <Upload\n        action="http://jsonplaceholder.typicode.com/posts"\n        accept="image/*"\n        multiple\n        limit={2}\n        name="file"\n        onSuccess={(res, file) => file.name}\n        style={{ width: 300, marginBottom: 30 }}\n      >\n        <Button><FontAwesome name="upload" /> Upload file</Button>\n      </Upload>\n\n      <Upload.Image\n        action="http://jsonplaceholder.typicode.com/posts"\n        accept="image/*"\n        multiple\n        name="file"\n        limit={1}\n        recoverAble\n        onSuccess={(res, file, data) => ({ data })}\n        renderResult={f => f.data}\n      />\n    </div>\n  )\n}\n'},818:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),a=t.n(o),r=t(27),l=t(268),i=function(e){var n=e.file,t=e.onLoad,o=e.onError,a=e.onProgress,r=new XMLHttpRequest;r.open("post","http://jsonplaceholder.typicode.com/posts");var l=new FormData;return l.append("test",n),r.upload.onprogress=a,r.onload=function(){return t(r)},r.onerror=function(){return o({statusText:"error message"})},r.send(l),r};n.default=function(){return a.a.createElement(r.G,{accept:"image/*",onSuccess:function(e,n){return{name:"upload ".concat(n.name)}},limit:3,style:{width:300},request:i,renderResult:function(e){return e.name}},a.a.createElement(r.c,null,a.a.createElement(l.a,{name:"upload"})," Upload file"))}},819:function(e,n){e.exports="/**\n * cn - 自定义上传\n *    -- 通过 request 函数，替代默认上传方法\n * en - Custom Request\n *    -- Set request property to use your own XMLHttpRequest.\n */\nimport React from 'react'\nimport { Upload, Button } from 'shineout'\nimport FontAwesome from '../Icon/FontAwesome'\n\nconst request = (options) => {\n  const {\n    file, onLoad, onError, onProgress,\n  } = options\n  const xhr = new XMLHttpRequest()\n  xhr.open('post', 'http://jsonplaceholder.typicode.com/posts')\n\n  const data = new FormData()\n  data.append('test', file)\n  xhr.upload.onprogress = onProgress\n  xhr.onload = () => onLoad(xhr)\n  xhr.onerror = () => onError({ statusText: 'error message' })\n  xhr.send(data)\n\n  return xhr\n}\n\nexport default function () {\n  return (\n    <Upload\n      accept=\"image/*\"\n      onSuccess={(res, file) => ({ name: `upload ${file.name}` })}\n      limit={3}\n      style={{ width: 300 }}\n      request={request}\n      renderResult={d => d.name}\n    >\n      <Button><FontAwesome name=\"upload\" /> Upload file</Button>\n    </Upload>\n  )\n}\n"},820:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),a=t.n(o),r=t(27),l=t(268),i=function(e){var n=e.file,t=e.onLoad,o=e.onError,a=e.onProgress,r=new XMLHttpRequest;r.open("post","http://jsonplaceholder.typicode.com/posts");var l=new window.JSZip;return l.file(n.name,n),l.generateInternalStream({type:"blob"}).accumulate(function(e){a(e,"zipping...")}).then(function(e){var l=new File([e],"".concat(n.name,".zip")),i=new FormData;i.append("file",l),r.upload.onprogress=function(e){return a(e,"sending...")},r.onload=function(){return t(r)},r.onerror=function(){return o({statusText:"error message"})},r.send(i)}),r};n.default=function(){return a.a.createElement(r.G,{onSuccess:function(e,n){return{name:"upload ".concat(n.name)}},limit:3,style:{width:300},request:i,renderResult:function(e){return e.name}},a.a.createElement(r.c,null,a.a.createElement(l.a,{name:"upload"})," Upload file"))}},821:function(e,n){e.exports="/**\n * cn -\n *    -- 此事例演示通过自定义函数压缩文件后上传\n * en -\n *    -- Zip file and upload.\n */\nimport React from 'react'\nimport { Upload, Button } from 'shineout'\nimport FontAwesome from '../Icon/FontAwesome'\n\nconst request = (options) => {\n  const {\n    file, onLoad, onError, onProgress,\n  } = options\n\n  const xhr = new XMLHttpRequest()\n  xhr.open('post', 'http://jsonplaceholder.typicode.com/posts')\n\n  const zip = new window.JSZip()\n  zip.file(file.name, file)\n  zip.generateInternalStream({ type: 'blob' })\n    .accumulate((e) => {\n      onProgress(e, 'zipping...')\n    })\n    .then((content) => {\n      const zipFile = new File([content], `${file.name}.zip`)\n      const data = new FormData()\n      data.append('file', zipFile)\n      xhr.upload.onprogress = m => onProgress(m, 'sending...')\n      xhr.onload = () => onLoad(xhr)\n      xhr.onerror = () => onError({ statusText: 'error message' })\n      xhr.send(data)\n    })\n\n  return xhr\n}\n\nexport default function () {\n  return (\n    <Upload\n      onSuccess={(res, file) => ({ name: `upload ${file.name}` })}\n      limit={3}\n      style={{ width: 300 }}\n      request={request}\n      renderResult={d => d.name}\n    >\n      <Button><FontAwesome name=\"upload\" /> Upload file</Button>\n    </Upload>\n  )\n}\n"},822:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),a=t.n(o),r=t(27),l=t(268);n.default=function(){var e=[{name:"test file.png",url:"../images/1_s.jpg"}];return a.a.createElement("div",null,a.a.createElement(r.G,{action:"http://jsonplaceholder.typicode.com/posts",accept:"image/*",multiple:!0,limit:2,name:"file",onSuccess:function(e,n){return{name:n.name}},style:{width:300,marginBottom:30},defaultValue:e,renderResult:function(e){return e.name}},a.a.createElement(r.c,null,a.a.createElement(l.a,{name:"upload"})," Upload file")),a.a.createElement(r.G.Image,{action:"http://jsonplaceholder.typicode.com/posts",accept:"image/*",multiple:!0,name:"file",limit:1,recoverAble:!0,onSuccess:function(e,n,t){return{url:t}},renderResult:function(e){return e.url},defaultValue:e}))}},823:function(e,n){e.exports='/**\n * cn - 默认值\n *    -- 默认值示例\n * en - defaultValue\n *    -- defaultValue example\n */\nimport React from \'react\'\nimport { Upload, Button } from \'shineout\'\nimport FontAwesome from \'../Icon/FontAwesome\'\n\n\nexport default function () {\n  const defaultValue = [{\n    name: \'test file.png\',\n    url: \'../images/1_s.jpg\',\n  }]\n\n  return (\n    <div>\n      <Upload\n        action="http://jsonplaceholder.typicode.com/posts"\n        accept="image/*"\n        multiple\n        limit={2}\n        name="file"\n        onSuccess={(res, file) => ({ name: file.name })}\n        style={{ width: 300, marginBottom: 30 }}\n        defaultValue={defaultValue}\n        renderResult={f => f.name}\n      >\n        <Button><FontAwesome name="upload" /> Upload file</Button>\n      </Upload>\n\n      <Upload.Image\n        action="http://jsonplaceholder.typicode.com/posts"\n        accept="image/*"\n        multiple\n        name="file"\n        limit={1}\n        recoverAble\n        onSuccess={(res, file, data) => ({ url: data })}\n        renderResult={f => f.url}\n        defaultValue={defaultValue}\n      />\n    </div>\n  )\n}\n'}});