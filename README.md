# AskMeVoteBot Telegram Bot 🤖

AskMeVoteBot is a simple Telegram bot that allows users to create polls, add options, vote, and view results. 📊✨

## Features ✨

- Create a new poll with a question. 📝💬
- Add multiple options to the poll. 🔢➕
- View all poll options. 👀📋
- Vote for a specific option. ✅🎯
- View the poll results. 📈🔍

## Requirements 🧑‍💻💻

- Node.js 🟢
- npm (Node Package Manager) 📦
- Telegram Bot Token (from BotFather) 🧑‍💻🔑

## Setup ⚙️

1. **Clone the Repository** (or download the files):  
    ```bash
    git clone https://github.com/sohit-mishra/AskAndVoteBot.git
    cd askmevotebot
    ```

2. **Install Dependencies**:  
    Run the following command to install the required Node.js dependencies:  
    ```bash
    npm install
    ```

3. **Create a `.env` File**:  
    Create a `.env` file in the project root and add your bot token like so:  
    ```
    BOT_TOKEN=your_telegram_bot_token
    PORT=3000
    ```

4. **Set Up the Bot**:  
    1. Go to Telegram and search for `BotFather` 🤖.  
    2. Create a new bot by typing `/newbot` and follow the instructions. 📝  
    3. Copy the API token given by BotFather 🔑.  
    4. Paste it into your `.env` file as `BOT_TOKEN=your_telegram_bot_token`.  

5. **Run the Bot**:  
    After setting up your `.env` file, you can run the bot with:  
    ```bash
    node bot.js
    ```  
    The bot will be running and listening for commands. 📲🎧

## Bot Commands 📝

- `/start` - Welcomes the user. 👋😊
- `/createpoll <question>` - Starts a new poll. 🆕✍️
- `/addoption <option>` - Adds an option to the poll. ➕📋
- `/listpoll` - Lists all options for the current poll. 📑🔍
- `/vote <option_number>` - Votes for a specific option. ✅🗳️
- `/results` - Shows the poll results. 📊🎉

## Example Workflow 🛠️🚀

1. **Create Poll**: `/createpoll What is your favorite color?` 🎨  
2. **Add Options**: `/addoption Red`, `/addoption Blue` 🟥🟦  
3. **List Options**: `/listpoll` 📝  
4. **Vote**: `/vote 1` 🗳️  
5. **View Results**: `/results` 📊👀

## 🌐 Visit Link  
If you are using this project via the live bot, click here to visit:

**Name**: AskAndVoteBot  
🤖 [Bot Live Link](https://web.telegram.org/k/#@AskAndVoteBot) 🌍

---

## 🤝 Like This Project? Connect With Me!  
If you like this project and want to create more Telegram bots, feel free to connect with me on LinkedIn:  
🔗 [Your LinkedIn Profile](https://www.linkedin.com/in/sohitmishra/) 💼🌟
