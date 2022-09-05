const CreateService = async (Request, DataModel) => {
  try {
    let PostBody = Request.body;
    PostBody.UserEmail = Request.headers["email"];
    let data = await DataModel.create(PostBody);
    // console.log(data);
    return { status: "success", data: data };
  } catch (err) {
    return { status: "fail", data: err.toString() };
  }
};
module.exports = CreateService;
