<script setup lang="ts">
defineOptions({
  name: 'Help',
});
</script>

<template>
  <div class="flex h-full flex-col items-center justify-center p-8">
    <div class="max-w-2xl text-center">
      <div class="mb-6">
        <h1 class="mb-4 text-3xl font-bold">问题 & 帮助</h1>
        <p class="text-muted-foreground text-lg">
          如果您在使用过程中遇到任何问题，可以通过以下方式获取帮助：
        </p>
      </div>

      <div class="space-y-4 text-left">
        <div class="rounded-lg border p-4">
          <h2 class="mb-2 text-xl font-semibold">常见问题</h2>
          <p class="text-muted-foreground">
            您可以查看常见问题文档，了解常见问题的解决方案。
          </p>
        </div>

        <div class="rounded-lg border p-4">
          <h2 class="mb-2 text-xl font-semibold">联系支持</h2>
          <p class="text-muted-foreground">
            如果您的问题无法通过文档解决，请联系我们的技术支持团队。
          </p>
        </div>

        <div class="rounded-lg border p-4">
          <h2 class="mb-2 text-xl font-semibold">反馈建议</h2>
          <p class="text-muted-foreground">
            我们欢迎您提供宝贵的意见和建议，帮助我们改进系统。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
