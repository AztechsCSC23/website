fetch("https://boiling-fjord-00108-52329a44ed31.herokuapp.com/all")
  .then((data) => {
    return data.json(); // Convert the response to an object
  })
  .then((responseData) => {
    const objectData = responseData.collection1; // Access the desired collection

    let tableData = "";
    objectData.forEach((values) => {
      tableData += `<tr>
        <td>${values._id}</td>
        <td>${values["Item Name"]}</td> <!-- Access "Item Name" using square brackets notation -->
        <td>${values.Price}</td>
        <td><img src="${values.Image}"/></td>
      </tr>`;
    });

    document.getElementById("table_body").innerHTML = tableData;
  })
  .catch((error) => {
    console.log(error);
  });
