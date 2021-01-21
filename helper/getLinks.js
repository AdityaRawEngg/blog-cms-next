import Stack from "../contentstack/Stack";

export const getLinks = async (contentType) => {
  let Query = Stack.ContentType(contentType).Query();
  return await Query.toJSON()
    .find()
    .then(
      function success(result) {
        return result[0][0];
      },
      function error(err) {
        return err;
      }
    );
};
