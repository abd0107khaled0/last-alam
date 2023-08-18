<template>
  <div class="register">
    <v-container>
      <v-row>
        <v-col cols="12" class="colOne d-flex justify-center">
          <v-form v-model="valid" ref="form" class="mx-2" lazy-validation>
            <v-text-field
              v-model="email"
              variant="solo"
              placeholder="Email"
              required
            ></v-text-field>
            <v-text-field
              v-model="phone"
              variant="solo"
              required
              placeholder="Phone Number"
            ></v-text-field>
            <v-text-field
              v-model="password"
              variant="solo"
              required
              placeholder="Password"
            ></v-text-field>
            <v-btn class="bg-gray font-weight-bold" @click="validForm">
              Login
            </v-btn>
            <p style="color: #fff" class="mt-5">
              don't have account ?
              <a href="/registerFirst" style="color: #00f6ff; font-weight: bold"
                >Register</a
              >
            </p>
          </v-form>
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
      email: "",
      valid: true,
      name: "",
      nameRules: [(v) => !!v || "should name"],
      icons: [
        {
          link: "/",
          icon: "facebook",
        },
        {
          link: "/",
          icon: "whatsapp",
        },
        {
          link: "/",
          icon: "youtube",
        },
      ],
    };
  },
  methods: {
    // check() {
    //   console.log(this.$store);
    //   this.$store.dispatch("rName");
    //   console.log("check");
    // },
    validForm() {
      this.$refs.form.validate();
      if (this.email && this.password && this.phone) {
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
  background: #14365d;

  .v-container {
    height: 100vh;
    .v-form {
      width: 700px;
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
