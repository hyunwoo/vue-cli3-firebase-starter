<template>
  <v-container>
    <!-- <img alt="Vue logo"
         src="../../assets/logo.png"> -->
    <h1>Vue with Vuetify & Ant Design Vue on Firebase example</h1>
    <v-layout>
      <v-flex xs12
              pa-4
              md6>
        <div class="components-input-demo-presuffix pb-">
          <a-input placeholder="Input User Name"
                   class="mb-1"
                   v-model="formMessage.data.name"
                   ref="userNameInput">
            <a-icon slot="prefix"
                    type="user" />
            <a-icon v-if="formMessage.data.name"
                    slot="suffix"
                    type="close-circle"
                    @click="formMessage.data.name = ''" />
          </a-input>
          <a-input placeholder="Input Message"
                   class="mb-1"
                   @keyup.enter="sendMessage"
                   v-model="formMessage.data.message"
                   ref="userNameInput">
            <a-icon slot="prefix"
                    type="message" />
            <a-icon v-if="formMessage.data.message"
                    slot="suffix"
                    type="close-circle"
                    @click="formMessage.data.message = ''" />
          </a-input>
          <a-button type="primary"
                    :icon="sending ? 'loading' : 'login'"
                    class="font-weight-bold"
                    @click="sendMessage"
                    block>SEND</a-button>
        </div>
        <v-divider class="my-3"></v-divider>
        <div style="height:400px; overflow-y:scroll;">
          <a-list itemLayout="horizontal"
                  :dataSource="messages">
            <a-list-item slot="renderItem"
                         slot-scope="item">
              <a-list-item-meta :description="`${item.data.message}`">
                <div slot="title">
                  {{item.data.name}} <small>{{new Date(item.data.createdAt).toLocaleString()}}</small>
                </div>
                <a-avatar slot="avatar"
                          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />

              </a-list-item-meta>
              <a slot="actions">
                <a-icon type="delete"
                        @click="removeMessage(item)"></a-icon>
              </a>
            </a-list-item>

          </a-list>
        </div>
      </v-flex>
      <v-flex xs12
              pa-4
              style="border-left:solid 1px #eee;"
              md6>
        <v-text-field v-model="formMessage.data.name"
                      hide-details
                      solo
                      label="Input Name"
                      prepend-icon="account_box"
                      block></v-text-field>
        <v-text-field v-model="formMessage.data.message"
                      hide-details
                      solo
                      prepend-icon="message"
                      :append-icon="sending ? '' : 'send'"
                      class="mb-4"
                      @click:append="sendMessage"
                      label="Input Message"
                      @keyup.enter="sendMessage"
                      block></v-text-field>
        <v-divider class="my-3 "></v-divider>
        <div>
          <v-list two-line
                  style="height: 400px; overflow-y:scroll;"
                  subheader
                  class="elevation-1">
            <v-subheader>Incomming Message</v-subheader>
            <v-divider></v-divider>
            <template v-for=" (message,i)
                       in
                       messages">
              <v-list-tile :key="`message-${i}`"
                           avatar>
                <v-list-tile-avatar>
                  <v-icon>message</v-icon>
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title>{{ message.data.name }}</v-list-tile-title>
                  <v-list-tile-sub-title>{{ message.data.message }}</v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-action>
                  <v-btn icon
                         ripple>
                    <v-icon color="red lighten-1"
                            @click="removeMessage(message)">remove</v-icon>
                  </v-btn>
                </v-list-tile-action>
              </v-list-tile>
              <v-divider :key="`divider-${i}`"></v-divider>
            </template>
          </v-list>

        </div>
      </v-flex>
    </v-layout>

    <!-- <a-icon type="loading" /> -->
    <!-- <div>
      <a-button type="primary">Primary</a-button>
      <a-button>Default</a-button>
      <a-button type="dashed">Dashed</a-button>
      <a-button type="danger">Danger</a-button>
    </div>
    <v-divider class="my-5"></v-divider>
    <p class="display-2">VUETIFY MATERIAL DESIGN</p>
    <div class="elevation-2 pa-3">
      <v-btn color="primary">ACTION</v-btn>
      <v-btn color="secondary">ACTION</v-btn>
      <v-btn color="info">ACTION</v-btn>
      <v-btn color="error">ACTION</v-btn>
    </div> -->
  </v-container>
</template>

<script src="./main.ts">

</script>
<style lang="scss" scoped>
@import './main.scss';
</style>

