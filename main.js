const data = [
    {
      id: "1",
      question: "Why is it a good idea to practice accordion components?",
      answer:
        "Because I think the information could be very valuable to possess and be able to reproduce in a real world environment.",
    },
    {
      id: "2",
      question: "What are accordions used for?",
      answer:
        "FAQs are frequently asked questions. Accordions can be used to display frequently asked questions and their answers.",
    },
    {
      id: "3",
      question: "Could they also be used in e-commerce?",
      answer:
        "Certainly! Accordions can be used in e-commerce to display frequently asked questions and their answers.",
    },
    {
      id: "4",
      question: "How difficult is it to code an accordion?",
      answer:
        "Not very. Howeer, you do need to know how to use CSS and JavaScript.",
    },
  ];
  
  const accordionWrapper = document.querySelector(".accordion");
  
  function createAccordionData() {
    accordionWrapper.innerHTML = data
      .map(
        (dataItem) => `
      <div class="accordion_item">
      <div class="accordion_title">
      <h3>${dataItem.question}</h3>
      <i class="fa-solid fa-arrow-down"></i>
      </div>
      <div class="accordion_content">
      <p>${dataItem.answer}</p>
      </div>
      </div>
      `
      )
      .join(" ");
  }
  
  createAccordionData();
  
  const getAccordionTitles = document.querySelectorAll(".accordion_title");
  
  console.log("====================================");
  console.log(getAccordionTitles);
  console.log("====================================");
  
  getAccordionTitles.forEach((currentItem) => {
    currentItem.addEventListener("click", (event) => {
      if (currentItem.classList.contains("active")) {
        currentItem.classList.remove("active");
      } else {
        let getAlreadyAddedActiveClasses = document.querySelectorAll(".active");
  
        getAlreadyAddedActiveClasses.forEach((currentActiveItem) => {
          currentActiveItem.classList.remove("active");
        });
  
        currentItem.classList.add("active");
      }
    });
  });