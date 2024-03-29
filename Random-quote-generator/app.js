'use strict';

const quote = document.querySelector('.quotes-p');
const btnQuoteGen = document.querySelector('.quotes-btn');

const randomQuoteArr = [
  'The only way to do great work is to love what you do. - Steve Jobs',
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  'Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill',
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  'Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis',
  'The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt',
  'Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson',
  'If you can dream it, you can do it. - Walt Disney',
  'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer',
  'The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson',
  'Start where you are. Use what you have. Do what you can. - Arthur Ashe',
  'The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt',
  'In the middle of every difficulty lies opportunity. - Albert Einstein',
  'Strive not to be a success, but rather to be of value. - Albert Einstein',
  'Your attitude, not your aptitude, will determine your altitude. - Zig Ziglar',
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  'Success is stumbling from failure to failure with no loss of enthusiasm. - Winston S. Churchill',
  'The road to success and the road to failure are almost exactly the same. - Colin R. Davis',
  'A successful man is one who can lay a firm foundation with the bricks others have thrown at him. - David Brinkley',
  'Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers, you cannot be successful or happy. - Norman Vincent Peale',
  'The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh',
  'Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill',
  "The biggest risk is not taking any risk. In a world that's changing quickly, the only strategy that is guaranteed to fail is not taking risks. - Mark Zuckerberg",
  "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
  'The future belongs to the competent. Get good, get better, be the best! - Brian Tracy',
  'The only place where success comes before work is in the dictionary. - Vidal Sassoon',
  'Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau',
  'The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt',
  "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  'I find that the harder I work, the more luck I seem to have. - Thomas Jefferson',
  'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer',
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
  'The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson',
  "You don't have to be great to start, but you have to start to be great. - Zig Ziglar",
  'You are never too old to set another goal or to dream a new dream. - C.S. Lewis',
  'The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt',
  'Success is not in what you have, but who you are. - Bo Bennett',
  'The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh',
  'The road to success and the road to failure are almost exactly the same. - Colin R. Davis',
  'The only way to do great work is to love what you do. - Steve Jobs',
  'Strive not to be a success, but rather to be of value. - Albert Einstein',
  'Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill',
  'A successful man is one who can lay a firm foundation with the bricks others have thrown at him. - David Brinkley',
  'Your attitude, not your aptitude, will determine your altitude. - Zig Ziglar',
  'Success is stumbling from failure to failure with no loss of enthusiasm. - Winston S. Churchill',
  'Success is how high you bounce when you hit bottom. - George S. Patton',
  'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer',
  'Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau',
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
  'The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt',
  'I find that the harder I work, the more luck I seem to have. - Thomas Jefferson',
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  'The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson',
  "You don't have to be great to start, but you have to start to be great. - Zig Ziglar",
  'Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson',
  'The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt',
  'Success is not in what you have, but who you are. - Bo Bennett',
  'Your attitude, not your aptitude, will determine your altitude. - Zig Ziglar',
  'Strive not to be a success, but rather to be of value. - Albert Einstein',
  'Success is stumbling from failure to failure with no loss of enthusiasm. - Winston S. Churchill',
  'The road to success and the road to failure are almost exactly the same. - Colin R. Davis',
  'The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh',
  'The only way to do great work is to love what you do. - Steve Jobs',
  'Success is not final, failure is not fatal: It',
];

btnQuoteGen.addEventListener('click', function () {
  // Here is a string randomly chosen from randomQuoteArr
  const randomizeQuote = randomQuoteArr[Math.trunc(Math.random() * randomQuoteArr.length)];

  // Randomized string will dispaly into html element
  quote.innerHTML = randomizeQuote;
});
