const exerciseData = {
 full: [
    "Push-ups – 3 sets",
    "Squats – 3 sets",
    "Plank – 30 seconds",
    "Jumping Jacks – 2 minutes"
  ],
  cardio: [
    "Running – 15 minutes",
    "Cycling – 20 minutes",
    "Jump Rope – 5 minutes",
    "High Knees – 2 minutes"
  ],
  strength: [
    "Dumbbell Curls – 3 sets",
    "Bench Press – 3 sets",
    "Deadlift – 3 sets",
    "Shoulder Press – 3 sets"
  ]
};

const cards = document.querySelectorAll(".exercise-card");
const detailsBox = document.getElementById("exercise-details");
const list = document.getElementById("exercise-list");

cards.forEach(card => {
  card.addEventListener("click", () => {
    const type = card.getAttribute("data-type");
    const exercises = exerciseData[type];

    list.innerHTML = "";

    exercises.forEach(exercise => {
      const li = document.createElement("li");
      li.textContent = exercise;
      list.appendChild(li);
    });

    detailsBox.style.display = "block";
    detailsBox.scrollIntoView({ behavior: "smooth" });
  });
});
 const dietPlans = {
  1: `Breakfast: 2 boiled eggs  ,  whole wheat bread  , vegetables
Snack: Apple 🍎
Lunch: Grilled chicke , brown rice , salad
Snack: Nuts
Dinner: Light labneh , vegetables`,

  2: `Breakfast: Yogurt + oatmeal + banana 🍌
Snack: 2 dates
Lunch: Chicken salad + grilled fish + boiled potato
Snack: Yogurt
Dinner: Quinoa + egg + tuna + vegetables`,

  3: `Breakfast: Smoothie + whole wheat toast + low-fat cheese
Snack: Orange 🍊
Lunch: Turkey or grilled meat + pita + salad
Snack: Fruits
Dinner: Rice + lentil soup`,

  4: `Breakfast: Omelet + whole wheat bread
Snack: Apple
Lunch: Tuna or Maqluba (moderate) + salad
Snack: Nuts
Dinner: Chicken + vegetables`,

  5: `Breakfast: Avocado toast + oatmeal with honey
Snack: Banana
Lunch: Soup + cooked chicken + salad
Snack: Date + black coffee
Dinner: Tuna + vegetables`,

  6: `Breakfast: Pancakes + boiled eggs + toast
Snack: Orange
Lunch: Salmon + salad + roasted potato
Snack: Yogurt
Dinner: Lentils + vegetable soup`,

  7: `Breakfast: Omelet + fruits + yogurt
Snack: Apple
Lunch: Free meal (avoid fried & soda ⚠)
Dinner: Roast veggies + labneh or egg`
};

const listItems = document.querySelectorAll('li[data-day]');
const output = document.getElementById('diet-output');

listItems.forEach(item => {
  item.addEventListener('click', () => {
    const day = item.getAttribute('data-day');
    output.style.display = 'block';
    output.innerText = dietPlans[day];
  });
});