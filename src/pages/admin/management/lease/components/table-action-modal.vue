<template>
  <n-modal v-model:show="modalVisible" preset="card" :title="title" class="w-700px">
    <n-form ref="formRef" label-placement="left" :label-width="80" :model="formModel" :rules="rules">
      <n-grid :cols="24" :x-gap="18">
        <n-form-item-grid-item :span="12" label="反馈用户" path="leaveword_id">
          <n-input disabled v-model:value="formModel.user_id" />
        </n-form-item-grid-item>
        <n-form-item-grid-item :span="12" label="反馈内容" path="content">
          <n-input v-model:value="formModel.content" clearable />
        </n-form-item-grid-item>

        <n-form-item-grid-item :span="12" label="留言用户" path="user_id">
          <n-input v-model:value="formModel.user_id" />
        </n-form-item-grid-item>
        <n-form-item-grid-item :span="12" label="状态" path="recovery_state">
          <n-select v-model:value="formModel.status" :options="FeedbackOptions" />
        </n-form-item-grid-item>
      </n-grid>
      <n-space class="w-full pt-16px" :size="24" justify="end">
        <n-button class="w-72px" @click="closeModal">取消</n-button>
        <n-button class="w-72px" type="primary" @click="handleSubmit">确定</n-button>
      </n-space>
    </n-form>
  </n-modal>
</template>

<script setup lang="ts">
import { ref, computed, reactive, watch } from "vue";
import type { FormInst, FormItemRule } from "naive-ui";
import {  FeedbackOptions } from "@/constants";
import { formRules, createRequiredFormRule } from "@/utils";
import {
  fetchFeedbackAdd,
  fetchFeedbackUpdate,
  type FeedbackFormModel
} from "@/service";

export interface Props {
  /** 弹窗可见性 */
  visible: boolean;
  /**
   * 弹窗类型
   * add: 新增
   * edit: 编辑
   */
  type?: "add" | "edit";
  /** 编辑的表格行数据 */
  editData?: FeedbackManagement.Feedback | null;
}

export type ModalType = NonNullable<Props["type"]>;

defineOptions({ name: "TableActionModal" });

const props = withDefaults(defineProps<Props>(), {
  type: "add",
  editData: null,
});

interface Emits {
  (e: "update:visible", visible: boolean): void;
  (e: "update-action"): void;
}

const emit = defineEmits<Emits>();

const modalVisible = computed({
  get() {
    return props.visible;
  },
  set(visible) {
    emit("update:visible", visible);
  },
});
const closeModal = () => {
  modalVisible.value = false;
};

const title = computed(() => {
  const titles: Record<ModalType, string> = {
    add: "添加留言",
    edit: "编辑留言",
  };
  return titles[props.type];
});

const formRef = ref<HTMLElement & FormInst>();



const formModel = reactive<FeedbackFormModel>(createDefaultFormModel());
const rules: Record<keyof FeedbackFormModel, FormItemRule | FormItemRule[]> = {
  title: createRequiredFormRule("请输入留言id"),
  content: createRequiredFormRule("请输入留言内容"),
  user_id: createRequiredFormRule("请输入留言用户ID"),
  status: createRequiredFormRule("请选择状态"),
};

function createDefaultFormModel(): FeedbackFormModel {
  return {
    title: "",
    content: "",
    user_id: "",
    status: "2",
  };
}
/**将从props获取的数据填入formModel */
function handleUpdateFormModel(model: Partial<FeedbackFormModel>) {
  Object.assign(formModel, model);
}
function updateOrDelteDate() {
  const fetchHandlers: Record<ModalType, () => Promise<boolean>> = {
    add: async () => {
      let { error, data } = await fetchFeedbackAdd(formModel);
      if (!error) {
        emit("update-action");
        return true;
      }
      return false;
    },
    edit: async () => {
      const { _id } = props.editData as FeedbackManagement.Feedback;
      let { error, data } = await fetchFeedbackUpdate(_id as string, formModel);
      if (!error) {
        emit("update-action");
        return true;
      }
      return false;
    },
  };
  return fetchHandlers[props.type]();
}

function handleUpdateFormModelByModalType() {
  const handlers: Record<ModalType, () => void> = {
    add: () => {
      const defaultFormModel = createDefaultFormModel();
      handleUpdateFormModel(defaultFormModel);
    },
    edit: () => {
      if (props.editData) {
        handleUpdateFormModel(props.editData);
      }
    },
  };

  handlers[props.type]();
}

async function handleSubmit() {
  await formRef.value?.validate();
  //调用数据修改的函数
  let flag = await updateOrDelteDate();

  if (flag) {
    window.$message?.success("新增成功!");
    closeModal();
  }
}

watch(
  () => props.visible,
  (newValue) => {
    if (newValue) {

      handleUpdateFormModelByModalType();
    }
  }
);
</script>

<style scoped></style>
