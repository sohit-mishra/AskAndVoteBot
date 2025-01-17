const express = require('express');
const app = express();

const {Telegraf} = require('telegraf');
require('dotenv').config();
const token = process.env.BOT_TOKEN;
const PORT = process.env.PORT || 3000;
const bot = new Telegraf(token);

const polls = {};


bot.start((ctx) => {
    ctx.reply('Welcome to Pollster Bot! Use /createpoll <question> to create a poll.');
})

bot.command('createpoll', (ctx) => {
    const chatId = ctx.chat.id;
    const question = ctx.message.text.split(' ').slice(1).join(' ');

    if (!question) {
        ctx.reply('Please provide a poll question. Example: /createpoll What is your favorite color?')
        return;
    }

    polls[chatId] = {
        question,
        options: [],
        votes: {},
    }

    ctx.reply('Poll created: "${question}".\nUse /addoption <option> to add poll options.');
})

bot.command('addoption', (ctx) => {
    const chatId = ctx.chat.id;
    const option = ctx.message.text.split(' ').slice(1).join(' ');

    if (!polls[chatId]) {
        ctx.reply('No active poll. Use /createpoll to start one.');
        return;
    }

    if (!option) {
        ctx.reply('Please provide an option. Example: /addoption Red');
        return;
    }

    polls[chatId].options.push(option);

    ctx.reply('Option added: "${option}". Use /listpoll to see all options.');
})

bot.command('listpoll', (ctx) => {
    const chatId = ctx.chat.id;

    if (!polls[chatId]) {
        ctx.reply('No active poll. Use /createpoll to start one.');
        return;
    }

    const poll = polls[chatId];
    let message = `Poll: "${poll.question}"\nOptions:\n`;

    poll.options.forEach((option, index) => {
        message += `${index + 1}. ${option}\n`;
    });

    message += '\nUse /vote <option_number> to cast your vote.';
    ctx.reply(message);
})

bot.command('vote', (ctx) => {
    const chatId = ctx.chat.id;
    const optionIndex = parseInt(ctx.message.text.split(' ')[1], 10) - 1;

    if (!polls[chatId]) {
        ctx.reply('No active poll. Use /createpoll to start one.');
        return;
    }

    const poll = polls[chatId];

    if (isNaN(optionIndex) || optionIndex < 0 || optionIndex >= poll.options.length) {
        ctx.reply('Invalid option number. Use /listpoll to see options.');
        return;
    }

    const userId = ctx.from.id;
    poll.votes[userId] = optionIndex;

    ctx.reply(`Your vote for "${poll.options[optionIndex]}" has been recorded.`);
});


bot.command('results', (ctx) => {
    const chatId = ctx.chat.id;

    if (!polls[chatId]) {
        ctx.reply('No active poll. Use /createpoll to start one.');
        return;
    }

    const poll = polls[chatId];
    const results = {};

    Object.values(poll.votes).forEach((vote) => {
        results[vote] = (results[vote] || 0) + 1;
    });

    let message = `Results for: "${poll.question}"\n`;
    poll.options.forEach((option, index) => {
        message += `${option}: ${results[index] || 0} votes\n`;
    });

    ctx.reply(message);
});

bot.launch();

console.log('Pollster Bot is running...');


app.get('',(req,res)=>{
    res.send({message:"Hello World"});
})

app.listen(PORT,()=>{
    console.log(`Server is working`);
})