<template>
  <div class="show-cource">
    <v-container>
      <v-row>
        <v-col cols="12" lg="6" class="colOne">
          <img :src="require('@/assets/img/course.png')" alt="" />
          <div class="img">
            <span>C O U R S E N A M E</span>
          </div>
        </v-col>
        <v-col cols="12" lg="6" class="colTwo mt-16">
          <h1 class="mb-5">
            Cource <br />
            Name
          </h1>
          <p class="mb-10">Number Of Lessons</p>
          <ul>
            <li>Description Of Course :</li>
            <li>DESCRIPTION OF COURSE</li>
          </ul>
          <v-select
            label="LESSON NAME"
            variant="solo"
            :items="[
              'California',
              'Colorado',
              'Florida',
              'Georgia',
              'Texas',
              'Wyoming',
            ]"
            rounded="xl"
            class="mt-16"
          >
          </v-select>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CourseC2",
  data() {
    return {
      courseData: null,
    };
  },
  async mounted() {
    try {
      let course = await axios(
        `http://localhost:5000/cource/${this.$route.params.id}`
      );
      console.log(course);
      if (course.data.length > 0) {
        this.courseData = course.data;
      }
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style lang="scss">
.v-field {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}
.v-field__field {
  direction: rtl;
}
.show-cource {
  background: #14365d;
  height: 100vh;
  color: #f6f4ff !important;
  .colOne {
    position: relative;
    img {
      width: 500px;
      height: 500px;
      border-radius: 50%;
    }
    .img {
      position: absolute;
      left: 27%;
      bottom: -2%;
      background: #f6f4ff;
      width: 160px;
      height: 160px;
      padding: 10px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      span {
        font-size: 14px;
        font-weight: bold;
        margin: 0 auto;
        color: #14365d;
      }
    }
  }
  .colTwo {
    h1 {
      font-size: calc(20px + 2vw);
      line-height: 1.2;
      color: #fff;
    }
    p {
      font-size: calc(10px + 1vw);
      color: #fff;
    }
    ul {
      li {
        color: #fff;
        font-size: 18px;
      }
      li:first-of-type {
        font-weight: bold;
      }
    }
  }
}
</style>
