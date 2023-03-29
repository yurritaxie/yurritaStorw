<!-- <template>
  <div class="container">
    <div class="editorArea" ref="editorArea"></div>
    <div class="previewArea" ref="previewArea" v-html="htmlStr"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import CodeMirror from "codemirror";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

// CodeMirror编辑器实例
let editor = null;
// 编辑区域容器节点
const editorArea = ref(null);
// 预览区域容器节点
const previewArea = ref(null);
// markdown转换成的html字符串
const htmlStr = ref("");

// 编辑器文本发生变化后进行转换工作
const onChange = (instance: any) => {
  unified()
    .use(remarkParse) // 将markdown转换成语法树
    .use(remarkRehype) // 将markdown语法树转换成html语法树，转换之后就可以使用rehype相关的插件
    .use(rehypeStringify) // 将html语法树转换成html字符串
    .process(instance.doc.getValue())// 输入编辑器的文本内容
    .then(
      (file) => {
        // 将转换后得到的html插入到预览区节点内
        htmlStr.value = String(file);
      },
      (error) => {
        throw error;
      }
    );
};

onMounted(() => {
  // 创建编辑器
//   editor = CodeMirror(editorArea.value, {
//     mode: "markdown",
//     lineNumbers: true,
//     lineWrapping: true,
//   });
  // 监听编辑器文本修改事件
//   editor.on("change", onChange);
});

</script>

<style scoped>

</style> -->
<template>
    <div>

    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>

</style>