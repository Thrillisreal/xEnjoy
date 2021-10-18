<template>
 <div class="about-contain" >
   <div class="about-card">
    <div class="about-question">
      <h2>What Is <span>xEnjoy?</span></h2>
      <p>
        xEnjoy is an app for bookmarking your favorite anime/manga and reviewing other user's favorites!
      </p>
    </div>
    <h2></h2>
    <div>
      <div class="person-card">
        <h2>Who Am I?</h2>
        <h3>Micah Stewart:</h3>
        <img src=""/>
        <div>
          <ul>
            <li>
              <a href="https://github.com/thrillisreal" target="blank">
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/micahdstewart/"
                target="blank"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <h6>.</h6>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
*{
  background-color: #0C0C10;
}
.about-contain{
  height: 100vh;
}
.person-card h3{
  color: #66FCF1;
  font-size: 50px;
}
.person-card h2{
  color: #45A29E;
  font-size: 25px;
}
.person-card a{
  color: white;
  margin-top: 30px;
}

li{
  list-style-type: none;
  line-height: 50px;
}

a:hover {
  color: #66FCF1;
}
/* a:visited {
  background-color: #f44336;
  color: white;
  /* padding: 14px 25px; */
  /* text-align: center;
} */ 
span{
  color: #66FCF1;
}
.about-question{
  color: white;
}
.about-question h2{
  margin-bottom: 30px;
}
.about-card{
  margin-left: 30px;
}
.person-card{
  margin-top: 120px;
  border: 2px solid #66FCF1;
  border-radius: 5px;
  height: 300px;
  width: 700px;
  padding: 45px;
}
</style>