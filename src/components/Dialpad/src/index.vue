<script setup lang="ts">
import { ref } from 'vue'
import { useDesign } from '@/hooks/web/useDesign'
import { ElCard, ElRow, ElInput, ElCol, ElDivider } from 'element-plus'
const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('setting')
const drawer = ref(false)
const dialNumber = ref('')
const dial = (num) => {
  dialNumber.value += '' + num
  console.info('num', num, dialNumber)
}
const clearDial = () => {
  dialNumber.value = ''
}
</script>
<template>
  <div
    :class="prefixCls"
    class="fixed phonering bottom-50px right-50px w-50px h-50px text-center leading-50px rounded-1/2 bg-[var(--el-color-primary)] cursor-pointer"
    @click="drawer = true"
  >
    <Icon :size="32" icon="material-symbols:dialer-sip-rounded" color="#fff" />
  </div>
  <div class="fixed right-100px bottom-100px w-270px z-9999">
    <Icon :size="32" icon="ep:circle-close" color="#fff" class="dialpad_close" />
    <ElCard class="box-card" :body-style="{ padding: '0px' }">
      <template #header>
        <div class="card-header">
          <ElInput
            v-model="dialNumber"
            placeholder="Enter the number"
            class="dialpad_number"
            clearable
          />
        </div>
      </template>
      <ElRow>
        <ElCol :span="8">
          <div class="grid-content text-center bg-purple" @click="dial(1)">1</div>
        </ElCol>
        <ElCol :span="8">
          <div class="grid-content text-center bg-purple-light" @click="dial(2)">
            2
            <div class="sub">ABC</div>
          </div>
        </ElCol>
        <ElCol :span="8">
          <div class="grid-content text-center bg-purple-light" @click="dial(3)">
            3
            <div class="sub">DEF</div>
          </div>
        </ElCol>
      </ElRow>
      <ElRow>
        <ElCol :span="8">
          <div class="grid-content text-center bg-purple" @click="dial(4)">
            4
            <div class="sub">GHI</div>
          </div>
        </ElCol>
        <ElCol :span="8">
          <div class="grid-content text-center bg-purple-light" @click="dial(5)">
            5
            <div class="sub">JKL</div>
          </div>
        </ElCol>
        <ElCol :span="8">
          <div class="grid-content text-center bg-purple-light" @click="dial(6)">
            6
            <div class="sub">MNO</div>
          </div>
        </ElCol>
      </ElRow>
      <ElRow>
        <ElCol :span="8">
          <div class="grid-content text-center bg-purple" @click="dial(7)">
            7
            <div class="sub">PQRS</div>
          </div>
        </ElCol>
        <ElCol :span="8">
          <div class="grid-content text-center bg-purple-light" @click="dial(8)">
            8
            <div class="sub">TUV</div>
          </div>
        </ElCol>
        <ElCol :span="8">
          <div class="grid-content text-center bg-purple-light" @click="dial(9)">
            9
            <div class="sub">WXYZ</div>
          </div>
        </ElCol>
      </ElRow>
      <ElRow>
        <ElCol :span="8">
          <div class="grid-content text-center bg-purple" @click="dial('*')">*/+</div>
        </ElCol>
        <ElCol :span="8">
          <div class="grid-content text-center bg-purple-light" @click="dial(0)">0</div>
        </ElCol>
        <ElCol :span="8">
          <div class="grid-content text-center bg-purple-light" @click="dial('#')">#</div>
        </ElCol>
      </ElRow>
      <ElRow>
        <ElCol :span="8"><div class="grid-content text-center bg-purple"></div></ElCol>
        <ElCol :span="8">
          <div class="grid-content text-center bg-purple-light">
            <Icon :size="18" icon="fluent:call-24-filled" color="#fff" class="align-middle" />
          </div>
        </ElCol>
        <ElCol :span="8">
          <div class="grid-content text-center bg-purple-light" @click="clearDial()">
            <Icon icon="fa6-solid:delete-left" color="#fff" />
          </div>
        </ElCol>
      </ElRow>
    </ElCard>
  </div>
  <section class="rtc-panel fixed w-640px h-480px bg-gray-900 z-10000">
    <div class="rtc-header w-full bg-black-500">
      aihua aihua
      <ElDivider direction="vertical" />
      1008
      <Icon :size="25" class="float-right py-5px" icon="ep:circle-close" color="#fff" />
      <Icon :size="25" class="float-right" icon="ep:circle-close" color="#fff" />
    </div>
    <div class="rtc-body bg-gray-500 h-358px">3</div>
    <div class="rtc-controller h-88px">
      <div class="w-60px px-4px pt-20px text-center float-left">
        <div class="w-40px h-40px rounded-1/2 bg-gray-50">
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
        <div class="w-40px h-40px rounded-1/2 bg-gray-50">
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
        <div class="w-40px h-40px rounded-1/2 bg-gray-50">
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
        <div class="w-40px h-40px rounded-1/2 bg-gray-50">
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
        <div class="w-40px h-40px rounded-1/2 bg-gray-50">
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
        <div class="w-40px h-40px rounded-1/2 bg-gray-50">
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
        <div class="w-40px h-40px rounded-1/2 bg-gray-50">
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
        <div class="w-40px h-40px rounded-1/2 bg-gray-50">
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
<style lang="less" scoped>
.phonering {
  animation: swing 1.5s infinite;
  animation-iteration-count: infinite;
}
.grid-content {
  border-radius: 4px;
  vertical-align: middle;
  cursor: pointer;
  @apply min-h-46px;
  @apply hover: bg-blue-700;
}
.sub {
  font-size: 6px;
  color: #feebe3;
}

.dialpad_close {
  position: absolute;
  right: -16px;
  top: -16px;
  transform: rotate(0deg);
  transition: width 2s, height 2s, transform 2s;
  cursor: pointer;
}

.dialpad_close:hover {
  transition: width 2s, height 2s, transform 2s;
  transition-timing-function: ease;
  transform: rotate(360deg);
}

.dialpad_number {
  height: 40px;
  text-align: center;
}
</style>
