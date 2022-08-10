<template>
    <div>
        <el-row id="test" :style="{width: '650px', height: '300px'}"></el-row>
        <el-row id="test2" :style="{width: '650px', height: '300px'}"></el-row>
        <el-row id="test3" :style="{width: '650px', height: '300px'}"></el-row>
    </div>
</template>

<script>
//    官网：https://echarts.apache.org/handbook/zh/basics/download
    import * as echarts from 'echarts';

    import { BarChart } from 'echarts/charts';
    export default {
        name: "echartsTest",
        mounted() {
            this.initData()
            this.initData2()
            this.initData3()
        },
        methods: {
            initData() {
                let myChart = echarts.init(document.getElementById('test'));
                // 绘制图表
                myChart.setOption({
                    title: {
                        text: 'ECharts 入门示例'
                    },
                    tooltip: {},
                    xAxis: {
                        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                    },
                    yAxis: {},
                    series: [
                        {
                            name: '销量',
                            type: 'bar',
                            data: [25, 500, 50, 100, 60, 5],
                            stack: 'x'
                        },
                        {
                            name: '实际成本',
                            type: 'bar',
                            data: [20, 200, 20, 50, 30, 2],
                            stack: 'x'
                        }
                    ]
                })
            },
            initData2() {
                let myChart = echarts.init(document.getElementById('test2'));
                // 绘制图表
                myChart.setOption({
                    title: {
                        text: 'ECharts 入门示例'
                    },
                    tooltip: {},
                    legend: {
                        data: ['销量','实际成本']
                    },
                    xAxis: {
                        data: ['A', 'B', 'C', 'D', 'E']
                    },
                    yAxis: {},
                    series: [
                        {
                            name: '销量',
                            data: [10, 22, 28, 43, 49],
                            type: 'line',
                            stack: 'x'
                        },
                        {
                            name: '实际成本',
                            data: [5, 4, 3, 5, 10],
                            type: 'line',
                            stack: 'x'
                        }
                    ]
                })
            },
            initData3() {
                let myChart = echarts.init(document.getElementById('test3'));
                // 绘制图表
                myChart.setOption({
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: { type: 'cross' }
                    },
                    legend: {},
                    xAxis: [
                        {
                            type: 'category',
                            axisTick: {
                                alignWithLabel: true
                            },
                            data: ['1月', '2月', '3月', '4月', '5月', '6月','7月', '8月','9月', '10月', '11月', '12月']
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            name: '降水量',
                            min: 0,
                            max: 250,
                            position: 'right',
                            axisLabel: {formatter: '{value} ml'}
                        },
                        {
                            type: 'value',
                            name: '温度',
                            min: 0,
                            max: 25,
                            position: 'left',
                            axisLabel: {formatter: '{value} °C'}
                        }
                    ],
                    series: [
                        {
                            name: '降水量',
                            type: 'bar',
                            yAxisIndex: 0,
                            data: [6, 32, 70, 86, 68.7, 100.7, 125.6, 112.2, 78.7, 48.8, 36.0, 19.3]
                        },
                        {
                            name: '温度',
                            type: 'line',
                            smooth: true,
                            yAxisIndex: 1,
                            data: [6.0, 10.2, 10.3, 11.5, 10.3, 13.2, 14.3, 16.4, 18.0, 16.5, 12.0, 5.2]
                        }
                    ]
                })
            },
        }
    }
</script>

<style scoped>

</style>
