<template>
<Layout>
    <div class="container">
        <div class="contact-header">
            <h1 class="contact-title">给我留言</h1>
            <p>Leave me a note with any questions you might have, I'll get back to you as soon as possible.</p>
        </div>
        <div name="contact" class="contact-form">
            <div class="sender-info">
                <div>
                    <label for="name" class="label">怎么称呼您</label>
                    <input type="text" v-model="submitdata.custmerName" name="name">
                </div>
                <div>
                    <label for="email" class="label">您的邮箱</label>
                    <input type="email" v-model="submitdata.email" name="email">
                </div>
            </div>
            <div class="message">
                <label for="message" class="label">留言</label>
                <textarea name="message" v-model="submitdata.message"></textarea>
            </div>
            <button class="button" @click="submit">提交</button>
        </div>
    </div>
</Layout>
</template>

<script>
import axios from 'axios'
export default {
    metaInfo() {
        return {
        // title: this.$page.post.title
        }
    },
    data(){
        return {
            submitdata: {
                custmerName:"",
                email: "",
                message: "",
            }
        }
    },
    mounted() {

    },
    methods: {
        async submit(){
            const { data } = await axios.post(`/customs`,this.submitdata)
            console.log(data)
        }
    },
}
</script>

<style scoped>
@media (min-width: 860px)
{.container {
    padding: 0 6rem;
}}
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}
.contact-header {
    padding: 2rem 0 4rem;
}
.contact-title {
    font-size: 4rem;
    margin: 0 0 4rem;
    padding: 0;
}
p {
    line-height: 1.5;
    font-size: 1.15rem;
}
.sender-info {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 2rem;
}
.sender-info>div {
    flex: 1;
    margin-right: 4rem;
}
.label {
    display: block;
    font-weight: 700;
    margin-bottom: .5rem;
}
input, textarea {
    background: transparent;
    border: 1px solid #f3f3f3;
    outline: none;
    border-radius: .3rem;
    padding: .8rem 1rem;
    color: inherit;
    font-size: 1rem;
    width: 100%;
}
textarea {
    resize: none;
    height: 140px;
}
.button:hover{
    background: #2b2b2b;
}
.button {
    color: #fff;
    background: #000;
    outline: none;
    border: 0;
    font-size: .8rem;
    padding: .8rem 1.6rem;
    border-radius: .3rem;
    margin-top: 2rem;
    cursor: pointer;
    transition: opacity .25s ease;
    font-size: 500;
    letter-spacing: .035em;
}
</style>