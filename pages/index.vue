<template>
  <v-row justify="center" align="center">
    <h1>Index</h1>
    {{ loginStatus }}
    <div
      v-if="loginStatus!= 'connected'"
      class="fb-login-button"
      data-size="large"
      data-button-type="continue_with"
      data-layout="default"
      data-auto-logout-link="false"
      data-use-continue-as="false"
      data-width=""
    />
    <v-btn v-else @click="getData()">
      Click
    </v-btn>
  </v-row>
</template>

<script>
export default {

  data () {
    return {
      loginStatus: null,
      authResponse: null,
      base_url: 'https://graph.facebook.com/v9.0/me/accounts'
    }
  },
  computed: {
    url () {
      return `${this.base_url}?access_token=${this.authResponse.accessToken}`
    }
  },
  mounted () {
    this.getLoginStatus()
  },
  methods: {
    getLoginStatus () {
      const self = this
      window.FB.getLoginStatus(function (response) {
        self.statusChangeCallback(response)
      })
    },
    statusChangeCallback (response) {
      this.loginStatus = response.status
      this.authResponse = response.authResponse
    },
    getData () {
      this.$axios.get(this.url).then((res) => {
        console.log(res)
      }).catch(e => console.error(e))
    }
  }

}
</script>
