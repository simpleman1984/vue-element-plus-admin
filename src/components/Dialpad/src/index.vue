<script setup lang="ts">
import { ref } from 'vue'
import { useDesign } from '@/hooks/web/useDesign'
import { ElCard, ElRow, ElInput, ElCol } from 'element-plus'
const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('setting')
const drawer = ref(false)
const dialNumber = ref('')
const dial = (num) => {
  console.info('num', num, dialNumber)
}
</script>
<template>
  <div
    :class="prefixCls"
    class="fixed phonering bottom-50px right-50px w-50px h-50px text-center leading-50px bg-[var(--el-color-primary)] cursor-pointer"
    @click="drawer = true"
    :style="{
      borderRadius: `50%`
    }"
  >
    <Icon :size="32" icon="material-symbols:dialer-sip-rounded" color="#fff" />
  </div>
  <div class="fixed right-100px bottom-100px w-320px">
    <Icon :size="32" icon="ep:circle-close" color="#fff" class="dialpad_close" />
    <ElCard class="box-card" :body-style="{ padding: '0px' }">
      <template #header>
        <div class="card-header">
          <ElInput placeholder="Enter the number" class="dialpad_number" clearable />
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
          <div class="grid-content text-center bg-purple-light">
            <Icon icon="fa6-solid:delete-left" color="#fff" />
          </div>
        </ElCol>
      </ElRow>
    </ElCard>
  </div>
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
