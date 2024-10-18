let isLoading = false;

const handleSubmit = async (e) => {
  e.preventDefault();

  isLoading = true;

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
    isLoading = false;
    alert(error.message);
    console.log(error);
  } finally {
    isLoading = false;
  }
};

console.log(isLoading);

document.getElementById("form-datas").addEventListener("submit", handleSubmit);
