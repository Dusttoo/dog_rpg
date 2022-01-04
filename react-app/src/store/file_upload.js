export const uploadFile = (fileForm) => async (dispatch) => {
  console.log(fileForm)
  const {
    user_id,
    /* all,
           other,
           form,
           fields, */
    file, // this is the file for uploading
  } = fileForm;

  console.log(file, user_id)

  const form = new FormData();
  console.log('before: ', form)
  form.append("user_id", user_id);
  console.log("after id: ", form.getAll("user_id"));

  // repeat as necessary  for each required form field
  form.append("file", file);
  console.log(form.getAll('file'))

  const res = await fetch("/api/file/", {
    method: "POST",
    body: form,
  });

  console.log(res)
};
