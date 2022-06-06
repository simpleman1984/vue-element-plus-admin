<script setup lang="ts">
import { ElDivider } from 'element-plus'
import { reactive } from 'vue'

const position = reactive({
  init: false,
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  isDragging: false,
  dragStartX: 0,
  dragStartY: 0
})
const mousedown = (e: MouseEvent) => {
  let { clientX, clientY } = e
  console.info(e)
  position.dragStartX = clientX - position.x
  position.dragStartY = clientY - position.y
  position.isDragging = true
  document.addEventListener('mouseup', mouseup)
  document.addEventListener('mousemove', mousemove)
  let element = (e.target as HTMLElement).parentElement
  let rect = (element as HTMLElement).getBoundingClientRect()
  position.x = Math.round(rect.x)
  position.y = Math.round(rect.y)
  position.width = Math.round(rect.width)
  position.height = Math.round(rect.height)
  console.info(position)
}

const min = (v1, v2) => (v1 > v2 ? v2 : v1)

const max = (v1, v2) => (v1 > v2 ? v1 : v2)

const mousemove = (e) => {
  let { clientX, clientY } = e
  position.x = min(max(0, clientX - position.dragStartX), window.innerWidth - position.width)
  position.y = min(max(0, clientY - position.dragStartY), window.innerHeight - position.height)
}

const mouseup = () => {
  position.isDragging = false
  document.removeEventListener('mouseup', mouseup)
  document.removeEventListener('mousemove', mousemove)
}
</script>
<template>
  <section
    class="rtc-panel fixed w-640px h-480px bg-gray-900 z-10000"
    :style="{ left: `${position.x}px`, top: `${position.y}px` }"
  >
    <div
      class="rtc-header w-full h-32px leading-32px bg-black-500 cursor-move pl-10px"
      @mousedown.self.stop.prevent="mousedown"
    >
      aihua aihua
      <ElDivider direction="vertical" />
      1008
      <Icon :size="22" class="float-right my-5px mr-5px" icon="bx:fullscreen" color="#fff" />
      <Icon
        :size="22"
        class="float-right my-5px mr-5px"
        icon="prime:window-minimize"
        color="#fff"
      />
    </div>
    <div class="rtc-body bg-gray-500 h-358px leading-358px pt-107px">
      <div class="w-144px h-144px m-auto pt-13px bg-gray-100 rounded-1/2 text-center align-middle">
        <div
          class="w-118px h-118px m-auto leading-118px bg-sky-500 rounded-1/2 text-center align-middle"
        >
          A
        </div>
      </div>
    </div>
    <div class="rtc-controller h-88px">
      <div class="w-60px px-4px pt-20px text-center float-left">
        <div class="w-40px h-40px rounded-1/2 bg-gray-50 m-auto">
          <Icon
            :size="28"
            class="text-black-500 pt-5px"
            icon="ant-design:plus-outlined"
            color="black"
          />
        </div>
        <div class="text-xs text-center pt-10px">New Call</div>
      </div>
      <div class="w-60px px-4px pt-20px text-center float-right">
        <div class="w-40px h-40px rounded-1/2 bg-gray-50 m-auto">
          <Icon
            :size="28"
            class="text-black-500 pt-5px"
            icon="flat-color-icons:end-call"
            color="black"
          />
        </div>
        <div class="text-xs text-center pt-10px">End Call</div>
      </div>
      <div class="w-60px px-4px pt-20px text-center float-right">
        <div class="w-40px h-40px rounded-1/2 bg-gray-50 m-auto">
          <Icon
            :size="28"
            class="text-black-500 pt-5px"
            icon="fluent:call-transfer-20-filled"
            color="black"
          />
        </div>
        <div class="text-xs text-center pt-10px">Transfer</div>
      </div>
      <div class="w-60px px-4px pt-20px text-center float-right">
        <div class="w-40px h-40px rounded-1/2 bg-gray-50 m-auto">
          <Icon
            :size="28"
            class="text-black-500 pt-5px px-0px"
            icon="bi:record-fill"
            color="black"
          />
        </div>
        <div class="text-xs text-center pt-10px">Record</div>
      </div>
      <div class="w-60px px-4px pt-20px text-center float-right">
        <div class="w-40px h-40px rounded-1/2 bg-gray-50 m-auto">
          <Icon
            :size="28"
            class="text-black-500 pt-5px"
            icon="fluent:dialpad-20-filled"
            color="black"
          />
        </div>
        <div class="text-xs text-center pt-10px">Dialpad</div>
      </div>
      <div class="w-60px px-4px pt-20px text-center float-right">
        <div class="w-40px h-40px rounded-1/2 bg-gray-50 m-auto">
          <Icon
            :size="28"
            class="text-black-500 pt-5px px-0px px-0px"
            icon="bi:pause"
            color="black"
          />
        </div>
        <div class="text-xs text-center pt-10px">Hold</div>
      </div>
      <div class="w-60px px-4px pt-20px text-center float-right">
        <div class="w-40px h-40px rounded-1/2 bg-gray-50 m-auto">
          <Icon
            :size="28"
            class="text-black-500 pt-5px px-0px"
            icon="bi:mic-mute-fill"
            color="black"
          />
        </div>
        <div class="text-xs text-center pt-10px">Mute</div>
      </div>
      <div class="w-60px px-4px pt-20px text-center float-right">
        <div class="w-40px h-40px rounded-1/2 bg-gray-50 m-auto">
          <Icon
            :size="28"
            class="text-black-500 pt-5px"
            icon="bi:camera-video-fill"
            color="black"
          />
        </div>
        <div class="text-xs text-center pt-10px">Video</div>
      </div>
    </div>
  </section>
</template>
