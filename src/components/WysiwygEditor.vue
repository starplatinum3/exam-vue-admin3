<template>
  <div>
    <div class="flex flex-wrap">
      <button @click="applyBold" class="button">
        <font-awesome-icon :icon="['fas', 'bold']" />
      </button>
      <button @click="applyItalic" class="button">
        <font-awesome-icon :icon="['fas', 'italic']" />
      </button>
      <button @click="applyHeading" class="button">
        <font-awesome-icon :icon="['fas', 'heading']" />
      </button>
      <button @click="applyUl" class="button">
        <font-awesome-icon :icon="['fas', 'list-ul']" />
      </button>
      <button @click="applyOl" class="button">
        <font-awesome-icon :icon="['fas', 'list-ol']" />
      </button>
      <button @click="undo" class="button">
        <font-awesome-icon :icon="['fas', 'undo']" />
      </button>
      <button @click="redo" class="button">
        <font-awesome-icon :icon="['fas', 'redo']" />
      </button>
    </div>

    <div class="col-md-12 tags buttons">
    </div>

    <div
      @input="onInput"
      v-html="innerValue"
      contenteditable="true"
      class="wysiwyg-output outline-none border-2 p-4 rounded-lg border-gray-300 focus:border-green-300"
    />
  </div>
</template>

<script>
  import { Marked } from '@ts-stack/markdown'
  import TurndownService from 'turndown'
  // import { init } from '../utils/ExecCommand'
  // ExecC


  export default {
    name: 'WysiwygEditor',

    props: ['value'],

    data() {
      console.log("this.value in")
      console.log(this.value)
      return {
        innerValue: Marked.parse(this.value) || '<p><br></p>'
      }
    },

    mounted() {
      document.execCommand('defaultParagraphSeparator', false, 'p')
      init()


    },

    methods: {
      onInput(event) {
        console.log("onInput")
        const turndown = new TurndownService({
          emDelimiter: '_',
          linkStyle: 'inlined',
          headingStyle: 'atx'
        })
        console.log("event.target.innerHTML")
        console.log(event.target.innerHTML)
        console.log(event.target.innerHTML.textContent)
        // let markdownTxt=event.target.innerHTML.textContent
        let markdownTxt=event.target.innerHTML
        if(markdownTxt==undefined){
          markdownTxt=""
        }
        let mockTxt="## hello"
        let turndownTxt= turndown.turndown(markdownTxt)
        // let turndownTxt=  Marked.parse(markdownTxt)
        console.log("turndownTxt")
        console.log(turndownTxt)

        // this.innerValue=turndownTxt
        console.log("this.innerValue")
        console.log(this.innerValue)
        this.$emit('input', turndownTxt)
        // this.$emit('input', turndown.turndown(mockTxt))
      },
      applyBold() {
        document.execCommand('bold')
      },
      applyItalic() {
        document.execCommand('italic')
      },
      applyHeading() {
        document.execCommand('formatBlock', false, '<h1>')
      },
      applyUl() {
        document.execCommand('insertUnorderedList')
      },
      applyOl() {
        document.execCommand('insertOrderedList')
      },
      undo() {
        document.execCommand('undo')
      },
      redo() {
        document.execCommand('redo')
      },
      foreColor() {
        document.execCommand('foreColor')
      },
    }
  }
</script>

<style scoped>
  @import url(https://fonts.googleapis.com/css?family=Inconsolata:400,700|Open+Sans:400,800);

  @tailwind base;
  @tailwind components;
  @tailwind utilities;


  .button {
    @apply border-2;
    @apply border-gray-300;
    @apply rounded-lg;
    @apply px-3 py-1;
    @apply mb-3 mr-3;
  }
  .button:hover {
    @apply border-green-300;
  }


  .wysiwyg-output h1 {
    @apply text-2xl;
    @apply font-bold;
    @apply pb-4;
  }
  .wysiwyg-output p {
    @apply pb-4;
  }
  .wysiwyg-output p {
    @apply pb-4;
  }
  .wysiwyg-output ul {
    @apply ml-6;
    @apply list-disc;
  }
  .wysiwyg-output ol {
    @apply ml-6;
    @apply list-decimal;
  }


  body {
    font-family: 'Open Sans', sans-serif;
  }

  .jumbotron {
    padding: 0 0 20px;
    font-family: 'Inconsolata', monospace;
  }

  .btn-succes {
    background-color: green;
    color: yellow;
  }

  .btn-error {
    background-color: grey;
    color: black;
  }

  .btn-succes,
  .btn-succes {
    margin: 5px;
  }

  i {
    color: white;
  }

  .btn-error i {
    color: black;
  }


  .btn {
    -webkit-user-select: none;
    /* webkit (safari, chrome) browsers */
    -moz-user-select: none;
    /* mozilla browsers */
    -khtml-user-select: none;
    /* webkit (konqueror) browsers */
    -ms-user-select: none;
    /* IE10+ */
  }

  :focus {
    outline: none;
  }
</style>
