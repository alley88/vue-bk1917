import http from "@utils/request";

/*
*@params cityId:城市Id
*接口：正在热映
*
*/
export const movienowApi = (cityId=10)=>http({
    method:"get",
    url:"/api/movieOnInfoList",
    data:{
        cityId:cityId
    }
})
/*
*@params cityId:城市Id
*接口：即将上映
*/
export const moviecommingApi = (cityId=10)=>http({
    method:"get",
    url:"/api/movieComingList",
    data:{
        cityId:cityId
    }
})


/*
*@params movieId:电影ID值
*接口：电影详情
*/
export const movieDetailApi = (movieId)=>http({
    method:"get",
    url:"/api/detailmovie",
    data:{
        movieId
    }
})

/*

@params 
    cityId:城市ID
    kw：搜索的关键字

接口：电影搜索
*/

export const movieSearch = (cityId,kw)=>http({
    method:"get",
    url:"/api/searchList",
    data:{
        cityId,
        kw
    }
})