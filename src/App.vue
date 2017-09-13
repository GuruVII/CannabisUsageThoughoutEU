<template>
    <div id="app">
        <vue-chart
            chart-type="GeoChart"
            :columns="columns"
            :rows="rows"
            :options="options"
></vue-chart>
    </div>
</template>

<script>
    import allData from './mixins/allData';
    export default {
        name: 'app',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                columns: [{
                    'type': 'string',
                    'label': 'Country'
                }, {
                    'type': 'number',
                    'label': 'Popularity'
                }, {
                    'type': 'string',
                    'role': 'tooltip'
                }],
                rows: [
                    ['Austria', 0, 'Nejasna zakonodaja'],
                    ['Belgium', 10, 'Prepovedano'],
                    ['Bulgaria', 20, 'Dekriminalizirano oz. Prepovedano a se zakon ne izvršuje'],
                    ['Croatia', 40, 'Popolna legalizacija'],
                    ['Cyprus', 0, 'Nejasna zakonodaja'],
                    ['Czechia', 0, 'Nejasna zakonodaja'],
                    ['Denmark', 40, 'Popolna legalizacija'],
                    ['Estonia', 20, 'Dekriminalizirano oz. Prepovedano a se zakon ne izvršuje'],
                    ['Finland', 0, 'Nejasna zakonodaja'],
                    ['France', 10, 'Prepovedano'],
                    ['Germany', 0, 'Nejasna zakonodaja'],
                    ['Greece', 20, 'Dekriminalizirano oz. Prepovedano a se zakon ne izvršuje'],
                    ['Hungary', 0, 'Nejasna zakonodaja'],
                    ['Ireland', 10, 'Prepovedano'],
                    ['Italy', 0, 'Nejasna zakonodaja'],
                    ['Latvia', 20, 'Dekriminalizirano oz. Prepovedano a se zakon ne izvršuje'],
                    ['Lithuania', 20, 'Dekriminalizirano oz. Prepovedano a se zakon ne izvršuje'],
                    ['Luxembourg', 10, 'Prepovedano'],
                    ['Malta', 0, 'Nejasna zakonodaja'],
                    ['Netherlands', 0, 'Nejasna zakonodaja'],
                    ['Poland', 0, 'Nejasna zakonodaja'],
                    ['Portugal', 0, 'Nejasna zakonodaja'],
                    ['Romania', 10, 'Prepovedano'],
                    ['Slovakia', 0, 'Nejasna zakonodaja'],
                    ['Slovenia', 40, 'Popolna legalizacija'],
                    ['Spain', 10, 'Prepovedano'],
                    ['Sweden', 10, 'Prepovedano'],
                    ['United Kingdom', 20, 'Dekriminalizirano oz. Prepovedano a se zakon ne izvršuje'],
                    ['China', 0, 'fake data, so that the colors are correct'],
                    ['Taiwan', 10, 'fake data, so that the colors are correct'],
                    ['Thailand', 20, 'fake data, so that the colors are correct'],
                    ['Australia', 30, 'fake data, so that the colors are correct'],
                    ['Kuwait', 40, 'fake data, so that the colors are correct']
                ],
                options: {
                    region: 150,
                    title: 'Popularity by Countries',
                    colorAxis: {colors: ['#d9d9d9', '#ff0000', '#ffcc00', 'black', '#99cc66', '#00b050']},
                    width: 900,
                    height: 500,
                    legend: 'none'
                }
            }
        },
        mixins: [allData],
    }

</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1,
    h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

</style>
