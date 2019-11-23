import Vue from "vue";
import SvgIcon from "../../components/svgicon";

const req = require.context("./svg", false, /\.svg/);
req.keys().map(req);

Vue.component("svg-icon", SvgIcon)

// // 上面代码中我们使用require.context设置了当前目录下的./svg文件为上下文，使用正则匹配了它需要检测的文件名，这样它就会在当前目录的svg文件夹下去匹配符合规则的文件名
// // 然后我们使用req.keys拿到所有文件名数组，再使用map遍历加载req方法，这样当该文件被调用时会遍历加载所有匹配到的文件，这就很nice了