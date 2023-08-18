<template>
  <div class="register">
    <v-container>
      <v-row>
        <v-col cols="12" lg="6" class="colOne">
          <v-form v-model="valid" ref="form" class="mx-2" lazy-validation>
            <v-text-field
              v-model="name"
              variant="solo"
              placeholder="Name"
              required
            ></v-text-field>
            <v-text-field
              v-model="phone"
              type="number"
              variant="solo"
              placeholder="Phone Number"
              required
            ></v-text-field>
            <v-text-field
              v-model="email"
              type="email"
              variant="solo"
              placeholder="Email"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              variant="solo"
              required
              placeholder="Password"
            ></v-text-field>
            <v-btn class="bg-gray font-weight-bold" @click="validForm">
              Sign Up
            </v-btn>
            <p style="color: #fff">
              you have account ?
              <a href="/login" style="color: #00f6ff; font-weight: bold"
                >Login</a
              >
            </p>
          </v-form>
          <ul
            class="d-flex justify-center align-center mt-16"
            style="gap: 30px"
          >
            <li v-for="icon in icons" :key="icon.id">
              <a :href="icon.link">
                <v-icon color="#fff">mdi-{{ icon.icon }}</v-icon>
              </a>
            </li>
          </ul>
        </v-col>
        <v-col cols="12" lg="6" class="colTwo">
          <div class="registerTwo">
            <span>Ayman Allam</span>
            <h1 class="my-3">CEMcourses</h1>
            <p>Learn Chemistry Like YOU Have Never Learned It Before</p>
            <div class="icon d-flex justify-center my-8" style="gap: 20px">
              <img
                :src="require('@/assets/img/icon.png')"
                alt=""
                style="width: 60px"
              />
              <img
                :src="require('@/assets/img/icon2.png')"
                alt=""
                style="width: 60px"
              />
            </div>
            <div>
              <v-btn class="bg-outline"> Learn More </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "RegisterVV",
  data() {
    return {
      phone: "",
      password: "",
      valid: true,
      name: "",
      email: "",
      icons: [
        {
          link: "https://www.facebook.com/profile.php?id=100094380951384&mibextid=ZbWKwL",
          icon: "facebook",
        },
        {
          link: "",
          icon: "whatsapp",
        },
        {
          link: "https://www.youtube.com/@aymanalam1412",
          icon: "youtube",
        },
      ],
    };
  },
  methods: {
    validForm() {
      this.$refs.form.validate();
      if (
        this.name.length > 5 &&
        this.email &&
        this.phone == 11 &&
        this.password
      ) {
        console.log("yes");
      } else {
        console.log("no");
      }
      this.$refs.form.reset();
    },
  },
};
</script>

<style lang="scss" scoped>
.register {
  background-image: url("../assets/img/loginP.png");
  background-size: cover;
  // background: #14365d;

  .v-container {
    height: 100vh;
    // position: relative;
    // &::before {
    //   position: absolute;
    //   width: 80%;
    //   content: "";
    //   top: 0;
    //   left: -30%;
    //   height: 100%;
    //   background: #14365d;
    // }
    .v-row {
    }
    .v-form {
      margin: 250px auto;
      margin-bottom: 0;
    }
    .registerTwo {
      margin-top: 250px;
      span,
      h1,
      p {
        color: #14365d;
        font-weight: bold;
      }
      span {
        font-size: 24px;
      }
      h1 {
        font-size: 48px;
      }
      p {
        font-size: 30px;
      }
    }
  }
}
@media (max-width: 1279px) {
  .register {
    background: #14365d;
    .v-container {
      .v-form {
        margin: 100px auto;
      }
      .colTwo {
        z-index: 5;
      }
      .registerTwo {
        margin-top: 50px !important;
        z-index: 5;
        span,
        h1,
        p {
          color: #fff;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
