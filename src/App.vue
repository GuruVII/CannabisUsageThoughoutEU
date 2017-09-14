<template>
    <div id="map">
        <vue-chart chart-type="GeoChart" :columns="columns" :rows="rows" :options="options"></vue-chart>
        <vue-slider @click.native="inputClicked = true" v-model.number="year" v-if="sliderWidth != 0" :min="inputStyle.min" :max="inputStyle.max" :width="sliderWidth" :piecewise="inputStyle.piecewise" :piecewise-style="inputStyle.piecewiseStyle" :tooltip="options.tooltip"></vue-slider>
    </div>
</template>

<script>
    import allData from './mixins/allData';
    import vueSlider from 'vue-slider-component';
    import inViewport from 'vue-in-viewport-mixin';

    export default {
        name: 'map',
        mixins: [allData, inViewport],
        components: {
            vueSlider
        },
        data() {
            return {
                sliderWidth: 0,
                year: 1950,
                started: false,
                inputClicked: false,
                columns: [{
                    'type': 'string',
                    'label': 'Država'
                }, {
                    'type': 'number',
                    'label': 'Zakonodaja'
                }, {
                    'type': 'string',
                    'role': 'tooltip',
                }],
                options: {
                    region: 150,
                    title: 'Zakonodaja glede konoplje v EU (brez Cipra)',
                    colorAxis: {
                        values: [0, 10, 20, 30, 40], //unknown, forbidden, forbidden, but not enforced, medical use, allowed
                        colors: ['#d9d9d9', '#ff0000', '#ffc400', '#ffff00', '#28d761'] },
                    width: 700,
                    height: 420,
                    legend: 'none',
                },
                inputStyle: {
                    min: 1950,
                    max: 2017,
                    piecewise: true,
                    piecewiseStyle: {
                        'backgroundColor': '#fff',
                        'width': '1px',
                    },
                },
            }
        },
        computed: {
            rows: function () {
                return [...this.allData[this.year]]
            },
        },
        methods: {
            responsiveMap: function () { 
            //this gives the page some responsivness. This is done becuase I can't ensure that years on sliders are aligned and so that
            //the map doesn't become too small
                    if (screen.width >= 1200 ){
                        this.sliderWidth = 700;
                        this.options.width = 700;
                        this.options.height = 420;
                    } else if (screen.width >= 991 ) {
                        this.sliderWidth = 616;
                        this.options.width = 616;
                        this.options.height = 370;
                    } else if (screen.width > 750){
                        this.sliderWidth = 700;
                        this.options.width = 700;
                        this.options.height = 420;
                    } else {
                        this.sliderWidth = 300;
                        this.options.width = 300;
                        this.options.height = 180;
                    }
            },
            autoplay: function () {
                setTimeout( () => {
                    if (this.inputClicked == false) {
                        this.year += 1;
                        if (this.inViewport.fully == true && this.year < this.inputStyle.max) {
                            this.autoplay();
                        }
                    }

                }, 1000 )


            }
        },
        watch: {
            'inViewport.fully': function (visible) { //
                if (this.started == false){
                    console.log("test")
                    this.autoplay();
                }
                this.started = true;

            },
        },
        mounted () {
        this.responsiveMap()
        window.addEventListener("resize", () => {
            this.responsiveMap();
        });

        
    },
}

</script>

<style lang="scss">
    @mixin flex-box($flex-flow) {
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-flow: $flex-flow;
        flex-flow: $flex-flow;
    }
    @mixin justify-content($position) {
        -webkit-justify-content: $position;
        justify-content: $position;
    }
    @mixin align-items($position) {
        -webkit-align-items: $position;
        align-items: $position;
    }
    #map {
        @include flex-box (column wrap);
        @include justify-content (center);
        @include align-items (center);
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        width: 100%;
        .vue-slider-component {
            .vue-slider-process{
                background-color: #f78f35;
            }
            .vue-slider-tooltip {
                background-color: #fff;
                border-color: #f78f35;
                color: black;
            }
            .vue-slider-dot {
                background-color: #fff;
                border: 1px solid  #f78f35;
            }
        }
    }
    h1,
    h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }
    // this is a workaround that adds numbers to the slider input
    li {
        &:nth-child(5n){
            span{
                background-color: grey !important;
            }            
        }
        &:nth-child(10n){
            span{
                background-color: black !important;
                width: 2px;
            }            
        }
        &:nth-child(1){
           &:after {
            font-size: 0.5em;
            content: "1950";
           }
        }
        &:nth-child(9){
           &:after {
            font-size: 0.5em;
            content: "1960";
            margin-left: 80%;
                @media(max-width:750px) {
                    margin-left: -10%;
                }
           }
        }
        &:nth-child(19){
            &:after {
                font-size: 0.5em;
                content: "1970";
                text-align: center;
                margin-left: 80%;
                @media(max-width:750px) {
                        margin-left: -10%;
                }
            }
        }
        &:nth-child(29){
           &:after {
            font-size: 0.5em;
            content: "1980";
            margin-left: 80%;
            @media(max-width:750px) {
                    margin-left: -10%;
                }
           }
        }
        &:nth-child(39){
            &:after {
                font-size: 0.5em;
                content: "1990";
                margin-left: 80%;
                @media(max-width:750px) {
                    margin-left: -10%;
                }
            }
        }
        &:nth-child(49){
            &:after {
                font-size: 0.5em;
                content: "2000";
                margin-left: 80%;
                @media(max-width:750px) {
                    margin-left: -10%;
                }
            }
        }
        &:nth-child(59){
            &:after {
                font-size: 0.5em;
                content: "2010";
                margin-left: 80%;
                @media(max-width:750px) {
                    margin-left: -10%;
                }
            }
        }
        &:last-child {
            &:after {
                font-size: 0.5em;
                content: "2017";
            }
        }
    }

    a {
        color: #42b983;
    }
</style>
