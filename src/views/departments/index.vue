<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card class="tree-card">
        <!-- 用了一个行列布局 -->
        <tree-item :t-node="company" :is-root="true" />
        <el-tree :data="departs" :props="defaultProps" :default-expand-all="true">
          <tree-item slot-scope="{ data }" :t-node="data" />
        </el-tree>
      </el-card>
    </div>
  </div>
</template>

<script>
import treeItem from './components/treeItem.vue'
export default {
  components: { treeItem },
  data() {
    return {
      departs: [
        {
          name: '总裁办',
          manager: '曹操',
          children: [
            {
              name: '董事会',
              manager: '曹丕'
            }
          ]
        },
        {
          name: '行政部',
          manager: '刘备'
        },
        {
          name: '人事部',
          manager: '孙权'
        }
      ],
      defaultProps: {
        label: 'name'
      },
      company: {
        name: '有梦想就想办法实现科技有限公司',
        manager: '负责人'
      }
    }
  }
}
</script>

<style>
.tree-card {
  padding: 30px  140px;
  font-size:14px;
}
</style>
