<template>
  <div>
    <div>
      <forum>
        <input @input='handleChange' type=""/>
        <button>Send</button>
      </forum>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  data: ()=>({
  typecomment: ''
  }),
  methods:{
  handleChange(){
    this.typecomment = event.target.value
  }
  }
}
</script>