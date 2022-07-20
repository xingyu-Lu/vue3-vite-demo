<template>
	<el-row style="margin-bottom: 20px;">
		<el-col>
			<el-image style="width: 100%;" src="https://www.ybssyy.com/images/images/ad_08.jpg" lazy></el-image>
		</el-col>
	</el-row>

	<el-breadcrumb separator="/" style="margin-bottom: 20px;">
		<el-breadcrumb-item :to="{ path: '/' }">宜宾市第三人民医院</el-breadcrumb-item>
		<el-breadcrumb-item>出诊信息</el-breadcrumb-item>
	</el-breadcrumb>

	<p style="text-align:center;"><strong>宜宾市第三人民医院院本部门诊专科专家一览表</strong></p>
	<p style="text-align:center;"><strong><img src="https://www.ybssyy.com/uploadfiles/2013/0309/09171070/image/20210906171040_6798.png"
				alt="" /></strong></p>

</template>

<script>
</script>

<style scoped>
	/* table 样式 */
	:deep() table {
	  border-top: 1px solid #ccc;
	  border-left: 1px solid #ccc;
	}
	:deep() table td,
	:deep() table th {
	  border-bottom: 1px solid #ccc;
	  border-right: 1px solid #ccc;
	  padding: 3px 5px;
	}
	:deep() table th {
	 border-bottom: 2px solid #ccc;
	  text-align: center;
	  background-color: #f5f2f0
	}
	
	/* blockquote 样式 */
	:deep() blockquote {
	  display: block;
	  border-left: 8px solid #d0e5f2;
	  padding: 5px 10px;
	  margin: 10px 0;
	  line-height: 1.4;
	  font-size: 100%;
	  background-color: #f5f2f0;
	}
	
	/* code 样式 */
	:deep() code {
	  display: inline-block;
	  background-color: #f5f2f0;
	  border-radius: 3px;
	  padding: 3px 5px;
	  margin: 0 3px;
	}
	:deep() pre code {
	  display: block;
	}
	
	/* ul ol 样式 */
	:deep() ul, ol {
	  margin: 10px 0 10px 20px;
	}
	
	:deep() input[type="checkbox"] {
	  margin-right: 5px;
	}
	
	:deep() div[data-w-e-type="video"] {
		text-align: center;
	}
</style>
