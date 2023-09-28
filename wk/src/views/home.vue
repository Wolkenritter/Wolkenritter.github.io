<template>
    <div :class="{ start: !isScrolled }" class="app-page">
        <div :style="{ height: titleHeight }" class="title">
            <p class="title-name">{{ title }}</p>
            <p :style="{ top: titleTop, left: titleLeft }" class="title-desc">
                {{ titleDesc }}
            </p>
        </div>
        <div class="content-box">
            <div
                v-for="(item, index) of data"
                :id="item.id"
                :ref="'content_' + index + 1"
                :style="{
                    backgroundImage: 'url(' + item.url + ')',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center'
                }"
                class="content"
            >
                <div class="content-item-box">
                    <div class="content-left"></div>
                    <div class="content-right"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import background1 from '@/assets/images/background1.jpg'
import background2 from '@/assets/images/background2.jpg'
import background3 from '@/assets/images/background3.jpg'
import background4 from '@/assets/images/background4.jpg'
import background5 from '@/assets/images/background5.jpg'

interface Rules {
    [key: string]: string | number | any
}

export default {
    data() {
        return {
            background1,
            background2,
            background3,
            background4,
            background5,
            dataLen: 5,
            scrollSpeed: 0.5,
            data: [
                {
                    animationIn: '',
                    animationOut: '',
                    url: '',
                    id: ''
                },
                {
                    animationIn: '',
                    animationOut: '',
                    url: '',
                    id: ''
                },
                {
                    animationIn: '',
                    animationOut: '',
                    url: '',
                    id: ''
                },
                {
                    animationIn: '',
                    animationOut: '',
                    url: '',
                    id: ''
                },
                {
                    animationIn: '',
                    animationOut: '',
                    url: '',
                    id: ''
                }
            ],
            isScrolled: false,
            scrollTop: 0,
            scrollLimit: 40,
            title: '归心',
            titleDesc: '山幽玉珂，盈盈一水。花开清靖，舒心自在。'
        } as Rules
    },
    computed: {
        titleHeight() {
            let top = 140 - this.scrollTop
            return top + 'px'
        },
        titleTop() {
            let top = 90 - (this.scrollTop * 3) / 2
            return top > 30 ? top + 'px' : '30px'
        },
        titleLeft() {
            let top = 16 + this.scrollTop * 2.5
            return top < 120 ? (top > 16 ? top + 'px' : '16px') : '120px'
        }
    },
    methods: {
        initData() {
            for (let i = 0; i < this.dataLen; i++) {
                if (this.isKey('background' + (i + 1), this)) {
                    let imgUrl = this['background' + (i + 1)]
                    this.data[i].url = imgUrl
                    this.data[i].id = 'content_' + (i + 1)
                }
            }
        },
        isKey(key: string, object: object) {
            return key in object
        },
        parallaxScroll() {
            let scrollTop = window.scrollY
            this.scrollTop = scrollTop
            this.isScrolled = scrollTop > this.scrollLimit

            let windowHeight = window.innerHeight
            this.data.forEach((item: any, index: number) => {
                let backgroundPosition =
                    'center ' + Math.ceil(-scrollTop / windowHeight) * this.scrollSpeed + 'px'
                let element = document.getElementById(item.id)
                if (element != null) {
                    element.style.backgroundPosition = backgroundPosition
                    let elementBoxPosition = element.children[0].getBoundingClientRect().top
                }
            })
        }
    },
    async created() {
        this.initData()
    },
    mounted() {
        document.addEventListener('scroll', () => {
            this.parallaxScroll()
        })
    }
}
</script>

<style lang="less" scoped>
.app-page {
    overflow-x: hidden;
    overflow-y: auto;

    .title {
        min-height: 75px;
        padding: 16px;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: linear-gradient(to bottom, #7faeab 25%, rgba(127, 174, 171, 0.2) 100%);
        box-sizing: border-box;
        transition: all 0.3s;
        transform: rotate(180%);

        & * {
            transition: all 0.3s;
        }

        .title-name {
            font-size: 36px;
            color: #fff;
        }

        .title-desc {
            position: absolute;
            left: 120px;
            top: 30px;
            line-height: 22px;
            font-size: 14px;
            color: #fff;
        }
    }

    .content {
        width: 100%;
        height: 100vh;
        background-attachment: fixed;
        background-size: cover;
        background-repeat: no-repeat;
        background-color: rgba(255, 255, 255, 0.5);

        &:first-of-type {
            margin-top: 73px;
        }

        &:nth-child(2n) {
            background: #f2f2f2;
        }

        .content-item-box {
            width: 60%;
            margin: 10% auto;
            display: inline-block;
        }
    }

    &.start {
        .title {
            max-height: 140px;
            transition: all 0.3s;

            & * {
                transition: all 0.3s;
            }

            .title-name {
                font-size: 56px;
                color: #000;
            }

            .title-desc {
                position: absolute;
                left: 16px;
                top: 90px;
                line-height: 22px;
                font-size: 12px;
                color: #000;
            }
        }

        .content {
            &:first-of-type {
                margin-top: 140px;
            }
        }
    }
}
</style>