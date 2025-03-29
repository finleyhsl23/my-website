// Make windows draggable
document.querySelectorAll('.window').forEach(windowElement => {
    let header = windowElement.querySelector('.window-header');
    let isDragging = false;
    let offsetX, offsetY;
  
    header.addEventListener('mousedown', (e) => {
      isDragging = true;
      offsetX = e.clientX - windowElement.offsetLeft;
      offsetY = e.clientY - windowElement.offsetTop;
    });
  
    document.addEventListener('mousemove', (e) => {
      if (isDragging) {
        windowElement.style.left = ${e.clientX - offsetX}px;
        windowElement.style.top = ${e.clientY - offsetY}px;
      }
    });
  
    document.addEventListener('mouseup', () => {
      isDragging = false;
    });
  });
  
  // Close window function
  function closeWindow(id) {
    const window = document.getElementById(id);
    window.style.display = 'none';
  }
  
  // Call function (for phone dialer)
  function dialNumber() {
    const phoneNumber = 'tel:‪+447787241521‬';
    window.location.href = phoneNumber;
  }