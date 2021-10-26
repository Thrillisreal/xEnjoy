<template>
  <div class="comment-comment">
    <p v-if="!edit">{{ description }}</p>
    <textarea v-else :value="description" @input="handleChange"></textarea>
    <div>
      <button class="editbtn" v-if="!edit" @click="toggleEdit">Edit</button>
      <button v-else @click="handleSubmit">Saved Changes</button>
      <button class="deletebtn" @click="deleteComment">X</button>
    </div>
  </div>
</template>

<script>
import {Client} from '../../globals'
export default {
  name: 'Comment',
  props: {
    description: String,
    commentId: Number
  },
  data: () => ({
    edit: false
  }),
  methods: {
    toggleEdit() {
      this.edit = true
    },
    handleChange(e) {
      this.description = e.target.value
    },
    async handleSubmit(e) {
      e.preventDefault()
      await Client.put(
        `/comment/updatecomment/${this.commentId}`,
        { description: this.description }
      )
    },
    async deleteComment() {
      await Client.delete(
        `/comment/deletecomment/${this.commentId}`
      )
    }
  }
}
</script>

<style scoped>
.comment-comment {
  background-color: #1f2833;
}
.deletebtn {
  color: #66fcf1;
  padding: 5px 5px;
  margin-left: 4px;
}
.editbtn {
  padding: 5px 5px;
}
</style>