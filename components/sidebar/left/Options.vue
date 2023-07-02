<template>
  <div class="flex flex-col gap-2">
    <SidebarLeftOption :active="true">
      <template v-slot:icon>
        <HomeIcon class="w-6 dark:text-white" />
      </template>
      <template v-slot:title><p class="dark:text-white">Title</p></template>
    </SidebarLeftOption>
    <SidebarLeftOption>
      <template v-slot:icon>
        <HashtagIcon class="w-6 dark:text-white" />
      </template>
      <template v-slot:title><p class="dark:text-white">Explore</p></template>
    </SidebarLeftOption>
    <SidebarLeftOption>
      <template v-slot:icon>
        <BellIcon class="w-6 dark:text-white" />
      </template>
      <template v-slot:title
        ><p class="dark:text-white">Notifications</p>
      </template>
    </SidebarLeftOption>
    <SidebarLeftOption>
      <template v-slot:icon>
        <InboxIcon class="w-6 dark:text-white" />
      </template>
      <template v-slot:title><p class="dark:text-white">Messages</p></template>
    </SidebarLeftOption>
    <SidebarLeftOption>
      <template v-slot:icon>
        <BookmarkIcon class="w-6 dark:text-white" />
      </template>
      <template v-slot:title><p class="dark:text-white">Bookmarks</p></template>
    </SidebarLeftOption>
    <SidebarLeftOption>
      <template v-slot:icon>
        <DocumentTextIcon class="w-6 dark:text-white" />
      </template>
      <template v-slot:title><p class="dark:text-white">Links</p></template>
    </SidebarLeftOption>
    <SidebarLeftOption>
      <template v-slot:icon>
        <UserIcon class="w-6 dark:text-white" />
      </template>
      <template v-slot:title><p class="dark:text-white">Profile</p></template>
    </SidebarLeftOption>
    <SidebarLeftOption>
      <template v-slot:icon>
        <EllipsisHorizontalCircleIcon class="w-6 dark:text-white" />
      </template>
      <template v-slot:title><p class="dark:text-white">More</p></template>
    </SidebarLeftOption>
    <Button
      @clicked="handleClick"
      type="button"
      text="Tweet"
      size="lg"
      customClass="hidden lg:block"
    />
  </div>
</template>
<script setup>
import { HomeIcon } from "@heroicons/vue/24/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  DocumentTextIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/vue/24/outline";
const { defaultTransition } = useTailwind();
let { openToggle, toggleValue } = useModalVariables();

const handleClick = () => {
  toggleValue.value = null;
  openToggle.value = true;
};
</script>
