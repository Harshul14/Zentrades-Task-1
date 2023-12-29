fetch("https://s3.amazonaws.com/open-to-cors/assignment.json")
  .then((data) => {
    return data.json();
  })
  .then((responseData) => {
    const objectData = responseData.products;
    const dataArray = Object.keys(objectData).map((key) => ({
      id: key,
      ...objectData[key],
    }));
    const sortedData = dataArray.sort((a, b) => b.popularity - a.popularity);

    let tableData = "";
    sortedData.forEach((values, index) => {
      tableData += `<tr>
        <th scope="row">${index + 1}</th>
        <td>${values.title}</td>
        <td>${values.price}</td>
      </tr>`;
    });

    document.getElementById("table_body").innerHTML = tableData;
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });
