// new Date().toISOString(); - '2023-04-10T11:43:03.508Z'
export const formatDateTime = (dateTime: string) => {
  const dateTimeSplit = dateTime.split("T");
  const fullDate = dateTimeSplit[0];
  const fullTime = dateTimeSplit[1];
  const dateInstance = new Date(fullDate);
  let day = "";
  let month = "";
  const date = dateInstance.getDate();
  const year = dateInstance.getFullYear();
  switch (dateInstance.getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Moday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
  }

  switch (dateInstance.getMonth()) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "Jully";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
  }

  return {
    getDate: `${day}, ${date} ${month}, ${year}`,
  };
  // Friday, 4 Nov, 2023
};
