<template>
  <div
    class="flex flex-col border-b gap-5 dark:border-dim-200 p-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-dim-300"
    :class="defaultTransition"
  >
    <div class="flex gap-6">
      <img
        :src="profile"
        alt="profile-image"
        class="w-10 h-10 rounded-full object-cover"
      />
      <div class="flex items-center gap-2">
        <p class="text-lg font-semibold dark:text-white">{{ name }}</p>
        <small class="text-gray-500 text-xs dark:text-gray-400"
          >@{{ userName }}</small
        >
        <small class="text-gray-500 text-xs dark:text-gray-400">{{
          createdAt
        }}</small>
      </div>
    </div>
    <strong
      @click="redirectPage(replyId)"
      class="text-sm pl-16 font-medium text-gray-500"
      v-if="!!replyUserName"
      >Replayed to :
      <small class="text-blue-500 text-sm font-semibold"
        >@ {{ replyUserName }}</small
      >
    </strong>
    <p
      class="text-base font-medium pl-16 dark:text-white"
      @click="redirectPage(id)"
    >
      {{ text }}
    </p>
    <img
      :src="image"
      class="w-full rounded-2xl object-cover"
      v-if="image"
      alt="poster"
    />
    <FeedActions :id="id" />
  </div>
</template>

<script setup>
let {
  name,
  userName,
  createdAt,
  id,
  image,
  text,
  profile,
  replyId,
  replyUserName,
} = defineProps({
  name: {
    type: String,
  },
  id: {
    type: String,
  },
  profile: {
    type: String,
  },
  replyId: {
    type: String,
  },
  replyUserName: {
    type: String,
  },
  userName: {
    type: String,
  },
  createdAt: {
    type: String,
  },
  image: {
    type: String,
  },
  text: {
    type: String,
  },
});
let { defaultTransition } = useTailwind();
const redirectPage = (id) => {
  useRouter().push(`/tweet/${id}`);
};
</script>
