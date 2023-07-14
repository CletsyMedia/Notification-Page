/**
This function handles the click event for marking all notifications as read.
It updates the notification count to 0 and hides the notification unread icons.
*/
MarklAllRead = () => {
  const notifyNum = document.querySelector(".notify-num");
  const notifyIcons = document.querySelectorAll(".notification-unread-icon");
  // Update the notification count to 0
  notifyNum.textContent = "0";
  
  // Hide the notification unread icons
  notifyIcons.forEach((icon) => {
  icon.style.display = "none";
  });
  };