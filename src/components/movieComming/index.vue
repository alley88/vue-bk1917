<template>
  <Alley-scroll ref="scroll">
    <div class="movie_body">
      <div class="movie_item" v-for="(item,index) in comingList" :key="index">
        <div class="movie_item_pic">
          <img :src="item.img | toImg('128.180')" />
        </div>
        <div class="movie_item_info">
          <h2>{{item.nm}}</h2>
          <p>
            <span>{{item.wish}}</span>人想看
          </p>
          <p>
            主演：
            <span>{{item.star}}</span>
          </p>
          <p>
            <span>{{item.rt}}</span>上映
          </p>
        </div>
        <div
          :class="item.showst == 4?'movie_item_btn ticket':'movie_item_btn wish'"
        >{{item.showst==4?'预售':'想看'}}</div>
      </div>
    </div>
  </Alley-scroll>
</template>

<script>
import { moviecommingApi } from "@api/movie";
export default {
  name: "MovieComming",
  data() {
    return {
      comingList: []
    };
  },
   created() {
     this.handleGetMoviecooming(1);
  },
  methods: {
    async handleGetMoviecooming(cityId) {
      let data = await moviecommingApi(cityId);
      this.comingList = data.data.comingList;
    }
  },
  watch: {
    comingList() {
      this.$refs.scroll.handleRefreshDown();
    }
  },
  mounted() {
    this.$refs.scroll.handleScroll();
    //下拉刷新
    this.$refs.scroll.handlepullingDown(() => {
      var arr = [20, 42, 50, 56, 60, 10];
      var index = parseInt(Math.random() * 6);
      this.handleGetMoviecooming(arr[index]);
    });
    //上拉加载更多
    this.$refs.scroll.handlepullingUp(() => {
      console.log(1111);
    });
  }
};
</script>

<style>
/*movie_body*/
#content .movie_body {
  padding-bottom: 1rem;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  overflow-x: hidden;
}
#content .movie_body .movie_item {
  padding: 0.2rem 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
#content .movie_body .movie_item .movie_item_pic {
  width: 1.28rem;
  height: 1.8rem;
}
#content .movie_body .movie_item .movie_item_pic img {
  width: 100%;
  height: 100%;
}
#content .movie_body .movie_item .movie_item_info {
  margin-left: 0.2rem;
  flex: 1;
  height: 100%;
}
#content .movie_body .movie_item .movie_item_info h2 {
  font-size: 0.34rem;
  line-height: 0.5rem;
  width: 3rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
#content .movie_body .movie_item .movie_item_info p {
  font-size: 0.26rem;
  line-height: 0.45rem;
  color: #666;
  width: 4rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
#content .movie_body .movie_item .movie_item_btn {
  width: 1rem;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  color: #fff;
  border-radius: 4px;
  font-size: 0.26rem;
  cursor: pointer;
}
#content .movie_body .movie_item .ticket {
  background-color: #3c9fe6;
}

#content .movie_body .movie_item .wish {
  background-color: #faaf00;
}
</style>