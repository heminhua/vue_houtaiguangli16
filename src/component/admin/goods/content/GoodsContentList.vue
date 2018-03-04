<template>
  <div class="goodsList">
    <el-table ref="multipleTable" :data="goodsList" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column label="标题" width="260">
        <template slot-scope="scope"><router-link :to="{path:`edit/${scope.row.id}`}">{{ scope.row.title }}</router-link></template>
      </el-table-column>
      <el-table-column prop="categoryname" label="所属类别" width="120">
      </el-table-column>
      <el-table-column prop="stock_quantity" label="库存" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="market_price" label="市场价" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="sell_price" label="销售价" show-overflow-tooltip>
      </el-table-column>
      <el-table-column label="属性" show-overflow-tooltip>
        <template slot-scope="scope">
          <i prop="is_msg" :class="['el-icon-picture',scope.row.is_msg==1?'active':'']"></i>
          <i prop="is_top" :class="['el-icon-upload',scope.row.is_top==1?'active':'']"></i>
          <i prop="is_hot" :class="['el-icon-star-on',scope.row.is_hot==1?'active':'']"></i>
          
        </template>

      </el-table-column>
      <el-table-column label="操作" show-overflow-tooltip>
         <template slot-scope="scope">
           <router-link :to="{name:'gcte'}">操作</router-link>
         </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsList: [],
      multipleSelection: []
    };
  },

  methods: {
    //
    handleSelectionChange(val) {
      // this.multipleSelection = val;
    },
    //从后台获取商品列表的数据
    getGoodsList() {
      //   console.log(11);pageIndex=页码&pageSize=每页显示条数&searchvalue=模糊匹配标题条件
      this.$http
        .get(this.$api.gsList + "?pageIndex=1&pageSize=10")
        .then(res => {
          console.log(res);
          // console.log(1);
          this.goodsList = res.data.message;
        });
    }
  },
  //页面加载完显示数据  created()钩子函数
  created() {
    this.getGoodsList();
  }
};
</script>

<style scoped lang="less">
.goodsList {
  margin-top: 20px;
  [class^="el-icon"].active{
    color:#000;
    font-weight: bold;
  }
}
</style>