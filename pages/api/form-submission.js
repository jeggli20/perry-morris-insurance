// /api/form-submission

const handler = (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    console.log(data);
  } else {
    console.log("oops!");
  }
};

export default handler;
