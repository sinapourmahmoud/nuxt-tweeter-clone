<template>
  <div class="flex items-center justify-evenly mt-3">
    <FeedActionsIcon color="blue">
      <template v-slot:icon="{ classes }">
        <ChatBubbleLeftIcon :class="classes" />
      </template>
    </FeedActionsIcon>
    <FeedActionsIcon color="red">
      <template v-slot:icon="{ classes }">
        <ArrowPathIcon :class="classes" />
      </template>
    </FeedActionsIcon>
    <FeedActionsIcon color="green">
      <template v-slot:icon="{ classes }">
        <HeartIcon :class="classes" />
      </template>
    </FeedActionsIcon>
    <FeedActionsIcon color="yellow">
      <template v-slot:icon="{ classes }">
        <ArrowDownTrayIcon :class="classes" />
      </template>
    </FeedActionsIcon>
  </div>
</template>
<script setup>
import {
  ChatBubbleLeftIcon,
  ArrowPathIcon,
  ArrowDownTrayIcon,
  HeartIcon,
} from "@heroicons/vue/24/outline";
</script>
