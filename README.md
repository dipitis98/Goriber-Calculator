# 🧮 GORIBER CALCULATOR

A simple, beginner-friendly JavaScript-based calculator that runs directly in the browser using prompts and alerts.  
This project was built to practice **loops**, **conditional statements**, **input validation**, and **switch-case** logic in JavaScript.

---

## 🚀 Project Overview

The **GORIBER CALCULATOR** (a fun term meaning “Poor Man’s Calculator” 😄) lets users perform basic arithmetic operations — addition, subtraction, multiplication, and division — right inside the browser, without any fancy UI.

It runs continuously until the user decides to stop.

---

## ⚙️ Features

✅ Takes **two numeric inputs** from the user  
✅ Supports **four operators**: `+`, `-`, `*`, `/`  
✅ Handles **invalid inputs** with proper alerts  
✅ Prevents **division by zero**  
✅ Offers a choice to **continue or exit** after each calculation  

---

## 🧠 How It Works

1. The program starts with a `while` loop that keeps running as long as `calculation = true`.
2. It asks the user for:
   - First number  
   - Operator (`+`, `-`, `*`, `/`)  
   - Second number  
3. Input validation ensures:
   - No blank or invalid inputs (`isNaN()` check)
   - Operator must be one of the four supported ones  
   - Division by zero is not allowed  
4. A `switch` statement performs the calculation.
5. The result is shown in an `alert()` popup.
6. Finally, the user decides whether to continue or exit by typing `y` or `n`.

---

## 🧑‍💻 Author

**GORIBER CALCULATOR** created by [Dip](#) — a MERN stack learner exploring JavaScript fundamentals the smart way. 💪

---

## 🏁 License

This project is open-source and free to use for learning purposes.
