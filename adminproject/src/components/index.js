/**
 * @param {vue} vue对象
 */

const requireComponent = require.context('./common',true,/.vue$/)
export const componentMount = function(vue) {
    requireComponent.keys().forEach(fileName => {
        //获取组件文件配置信息
        const componentConfig = requireComponent(fileName)
        const componentName = fileName.replace(/^\.\//,'').replace(/\.vue$/,'');
        vue.component(
            componentName,
            componentConfig.default || componentConfig
        )
    });
}