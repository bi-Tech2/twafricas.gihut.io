const handleSubmit = async (e) => {
  e.preventDefault();

  const secDiv = document.getElementById("register-sec");

  let formData = {};

  secDiv.querySelectorAll("input, select, textarea").forEach((element) => {
    let name = element.name;
    let value = element.value;

    if (name) {
      formData[name] = value;
    }
  });

  console.log(formData);

  try {
    const response = await axios.post(
      "http://localhost:4444/info-tnas/register",
      { formData }
    );

    alert("Registration Complete!✅");
  } catch (error) {
    alert(error.message);
    console.log(error);
  }
};

document.getElementById("form-datas").addEventListener("submit", handleSubmit);
