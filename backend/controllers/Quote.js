import mongoose from 'mongoose';
import Quote from '../models/Quote.js';

export const createQuote = async (req, res) => {
  const quote = req.body;

  if (!quote.quote || !quote.author) {
    return res.status(400).json({success: false, message: "Please fill out required fields"});
  }

  const newQuote = new Quote(quote);

  try {
    await newQuote.save();
    res.status(201).json({success: true, message: "Quote successfully created"});
  } catch (e)  {
    console.error(`Error: ${e}`);
    res.status(500).json({success: false, message: "Internal server error"});
  }
}

export const getQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find({});
    res.status(200).json({success: true, data: quotes});  
  } catch (e) {
    console.error(`Error: ${e}`);
    res.status(500).json({success: false, message: "Internal server error"});
  }
}

export const getRandomQuote = async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  const quotes = await Quote.find({});
  const getRandomIndex = (max) => {
    return Math.floor(Math.random() * max);
  }
  if (quotes.length === 0) {
    return res.status(400).json({success: false, message: "No quotes available"})
  }
  try {
    const randomQuote = quotes[getRandomIndex(quotes.length)];
    res.status(200).json({success: true, quote: randomQuote.quote, author: randomQuote.author});
  } catch (e) {
    console.error(`Error: ${e}`);
    res.status(500).json({success: false, message: "Internal server error"});
  }
}
