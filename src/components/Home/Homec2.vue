<template>
  <div class="homec2">
    <v-container>
      <h1 color="white" class="mb-16">Best Reviews</h1>
      <v-row>
        <!-- <v-col
          cols="12"
          lg="4"
          md="6"
          sm="12"
          xs="12"
          v-for="n in 3"
          :key="n.id"
        >
          <v-card class="pa-10 card" rounded="xl" style="background: #14365d">
            <v-card-title>
              <img :src="require('@/assets/img/course.png')" alt="" />
            </v-card-title>
            <v-card-text>
              <p class="mt-10 mb-10">
                Rewiew will be written here Rewiew will be written here Rewiew
                will be written here Name
              </p>
              <span> Name </span>
            </v-card-text>
          </v-card>
        </v-col> -->

        <!-- getReviewData if data exist -->
        <v-col
          cols="12"
          lg="4"
          md="6"
          sm="12"
          xs="12"
          v-for="n in getReviewData"
          :key="n.id"
        >
          <v-card
            class="pa-10 card"
            rounded="xl"
            style="background: #14365d"
            v-if="getReviewData"
          >
            <v-card-title>
              <img
                :src="n.image ? n.image : require('@/assets/img/course.png')"
                alt=""
              />
            </v-card-title>
            <v-card-text>
              <p class="mt-10 mb-10">
                {{ n.description }}
              </p>
              <span> {{ n.name }} </span>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HomeC2",
  data() {
    return {
      getReviewData: null,
    };
  },
  async mounted() {
    let test = await axios.get("http://localhost:5000/profile/1");
    console.log(test.data);
    this.getReview();
  },
  methods: {
    async getReview() {
      try {
        let review = await axios.get("http://localhost:5000/review");
        if (review.data.length > 0) {
          console.log("data form reviews", review);
          this.getReviewData = review.data;
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.homec2 {
  background: #fff;
  padding: 90px 0;

  h1 {
    color: #14365d;
  }

  .card {
    color: #fff !important;
    min-height: 450px !important;
    img {
      height: 100px;
      width: 100px;
      border-radius: 10px;
    }
    p {
      font-weight: bold;
      line-height: 1.9;
      font-size: 18px;
    }

    span {
      font-weight: bold;
      line-height: 1.9;
      font-size: 18px;
      color: #fff;
      position: relative;

      &::before {
        position: absolute;
        content: "";
        left: -15px;
        top: 0;
        height: 55px;
        width: 5px;
        background: #794cec;
        padding: 4px;
        border-radius: 4px;
      }
    }
  }
}
</style>
