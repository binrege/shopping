import Mock from "mockjs";

Mock.mock("api/SearchList_", "get", {
  //code为200代表请求成功
  code: 200,
  msg: "success",
  "data|20": [
    {
      image: "@dataImage(150x150,@cname)",
      county: "@county(true)",
      date: "@date",
      name: "@cname",

    }
  ]
});
