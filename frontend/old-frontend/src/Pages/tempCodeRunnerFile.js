 function submitForm(e) {
    e.preventDefault();
  
    // Perform login logic here
    const loginData = { stu_num: studentNo, password: password };
    console.log(loginData);
    fetch("https://gymbro-mysql-6b313f0f66bb.herokuapp.com/api/records/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Check if login is successful based on the response
        if (data.data) {
          navigate("/main"); // Redirect to the "Main" page
        } else {
          console.log("Login failed");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }