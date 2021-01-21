import Stack from "../contentstack/Stack";

export const getAllEntries = async () => {
  let Query = Stack.ContentType("blogs").Query();
  return await Query.only(["title", "blog_image", "author_details"])
    .toJSON()
    .find()
    .then(
      function success(result) {
        return result[0];
      },
      function error(err) {
        return err;
      }
    );
};

export const getSingleEntry = async (id) => {
  let Query = Stack.ContentType("blogs").Entry(id);
  return await Query.includeReference("related_links")
    .toJSON()
    .fetch()
    .then(
      function success(entry) {
        return entry;
      },
      function error(err) {
        return err;
      }
    );
};
