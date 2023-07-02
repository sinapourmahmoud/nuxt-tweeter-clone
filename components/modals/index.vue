<template>
  <TransitionRoot appear :show="openToggle" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <FeedBodyItem
                v-if="!!toggleValue"
                :id="toggleValue?.id"
                :key="toggleValue?.id"
                :name="toggleValue?.name"
                :profile="toggleValue?.profile"
                :userName="toggleValue?.userName"
                :createdAt="toggleValue?.createdAt"
                :image="toggleValue?.image"
                :text="toggleValue?.text"
                :replyId="toggleValue?.replyId"
                :replyUserName="toggleValue?.replyUserName"
                :fromModal="true"
              />
              <FeedTweetForm :fromModal="true" :replyToId="toggleValue?.id" />
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
} from "@headlessui/vue";
let { openToggle, toggleValue } = useModalVariables();
console.log(toggleValue.value.id);

function closeModal() {
  openToggle.value = false;
}
</script>
