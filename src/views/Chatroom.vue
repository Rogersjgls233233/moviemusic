<template>
  <div id="chatroom">
    <div class="header">
      <h1>WebRTC聊天</h1>
      <div>
        <el-row>
          <el-col :span="6">
            <el-input v-model="room" placeholder></el-input>
          </el-col>
          <el-button type="success" @click="choose">进入房间</el-button>
        </el-row>
      </div>
    </div>

    <el-container>
      <el-aside width="400px">
        <el-card id="chat">
          <div class="msgs" id="msgs"></div>
          <el-row class="sendf">
            <el-col :span="12">
              <input type="file" id="fileIpt" class="fileIpt" />
            </el-col>
            <el-col :span="3" :offset="3">
              <el-button type="primary" id="sendFileBtn" class="sendFileBtn btn btn-primary">发送文件</el-button>
            </el-col>
          </el-row>
          <el-row class="sendmessege">
            <el-col :span="20">
              <el-input type="text" id="msgIpt" class="msgIpt form-control" v-model="msg" />
            </el-col>
            <el-col :span="3" :offset="1">
              <el-button type="primary" id="sendBtn" class="sendBtn btn btn-primary">发送</el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-aside>
      <el-main>
        <div id="videos">
          <video id="me" autoplay></video>
        </div>

        <div id="files"></div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { SkyRTC } from "../js/SkyRTC-client";
import { usesky } from "../js/usesky";
export default {
  name: "Chatroom",
  data() {
    return {
      msg: "",
      room: ""
    };
  },
  created() {
    usesky(SkyRTC);
  },
  methods: {
    choose() {
      window.location.replace("#" + this.room);
      window.location.reload();
    }
  }
};
</script>

<style>
#option {
  margin-top: 100px;
}

.header {
  background-color: #6e3907;
  color: #ffffff;
  padding: 10px;
}
#videos {
  position: fixed;
  left: 450px;
  top: 200px;
  bottom: 0;
  right: 0;
  overflow: auto;
}

#videos video {
  display: inline-block;
  width: 40%;
}
#chat {
  margin: 20px;
  height: 750px;
}
.sendf {
  position: fixed;
  bottom: 100px;
}

.sendmessege {
  position: fixed;
  bottom: 50px;
}
</style>