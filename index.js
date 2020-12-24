const circlesLogic = () => {
  const circles = [...document.querySelectorAll(".circle")].filter(
    (circle) => !circle.classList.contains("main")
  );
  const circlesAmount = circles.length;
  const tension = 12;
  const mainCircle = document.querySelector(".main");
  const carouselRadius = 120;
  const angle = 360 / circlesAmount;

  window.addEventListener("mousemove", (e) => {
    let moveX = (e.pageX * 2 - window.innerWidth) / tension;
    let moveY = (e.pageY * 2 - window.innerHeight) / tension;
    if (mainCircle.classList.contains("active")) {
      mainCircle.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
  });

  const activate = () => {
    mainCircle.classList.toggle("active");
    circles.forEach((circle, i) => {
      const angleInRads = (angle * i * Math.PI) / 180;
      const x = carouselRadius * Math.cos(angleInRads);
      const y = carouselRadius * Math.sin(angleInRads);
      circle.style.transform = `translate(${x}px, ${y}px)`;
    });
  };

  activate();
};

circlesLogic();
