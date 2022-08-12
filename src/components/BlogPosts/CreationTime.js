const CreationTime = (props) => {
  const currentTime = new Date();
  const currentMinutes = currentTime.getMinutes();
  // const currentHours = currentTime.getHours();
  // const currentDate = currentTime.getDate();

  let creationTime = "";

  const date = new Date(props.date);
  const minutes = date.getMinutes();
  let minutesDifference = Math.abs(currentMinutes - minutes);
  // const hours = date.getHours();
  // const hoursDifference = currentHours - hours;

  const day = date.getDate();
  // const dateDifference = currentDate - day;

  if (minutesDifference === 0) {
    creationTime = "less than a minute ago";
  } else if (minutesDifference < 60 && minutesDifference > 0) {
    creationTime = `about ${minutesDifference} minutes ago`;
  } else if (minutesDifference < 0) {
    creationTime = `about ${minutesDifference + 60} minutes ago`;
  }

  return <div>&#160;{creationTime}</div>;
};

export default CreationTime;
