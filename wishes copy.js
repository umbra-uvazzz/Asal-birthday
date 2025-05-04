const wishes = [
    `Happy Birthday, Asal! 💖
You're not just my best friend—you’re my chosen family. Thank you for always being there, for the laughs, the rants, and the unconditional love. May this year bring you everything your heart desires. You deserve the absolute best. Love you always! 💫🎂`,
  
    `You're one of a kind!
  Hope your birthday is as unforgettable as you are.
  Here's to another year of wonderful memories.`,
  
    `Happy Birthday to someone special!
  Let the cake be sweet and your heart even sweeter.
  Celebrate like there's no tomorrow.`,
  
    `You light up the lives of everyone around you.
  Wishing you a birthday full of blessings and surprises.
  Stay awesome!`,
  
    `Another year older, another year bolder!
  Keep chasing your dreams and spreading happiness.
  Have an epic birthday.`,
  
    `On your special day, may all the stars align.
  Hope today marks the beginning of a great new chapter.
  Happy Birthday!`,
  
    `May your smile shine brighter than candles today.
  Wishing you hugs, happiness, and heaps of cake!
  Cheers to your journey.`,
  
    `Happy birthday, Asal! 🥳
You light up my life in so many ways. Here’s to more memories, laughter, and late-night talks. Love you forever! 💗`,
  
    `To the birthday legend:
  You make every moment magical and memorable.
  Here's to you and everything you are.`,
  
    `Let this year be the one where all your wishes come true.
  You're not aging, you're leveling up!
  Have an amazing birthday.`,
  
    `HAPPY BIRTHDAY, ASAL! 🎉
Another year older, wiser, and still as fabulous (and chaotic) as ever. I honestly don’t know how the world would survive without your energy and my sanity without your rants. Let’s make this year as unforgettable as your voice notes. 😂💕`
  ];
  
  const columns = [col1, col2, col3, col4]; // Assuming col1, col2, col3, col4 are already defined in your HTML
  
  wishes.forEach((wish, i) => {
    const div = document.createElement("div");
    div.className = "wish";
    div.innerText = wish;
  
    // Click-to-expand
    div.addEventListener("click", () => expandWish(div));
  
    columns[i % 4].appendChild(div);
  });
  
  function expandWish(elem) {
    // Remove any already expanded wishes
    const existing = document.getElementById("expandedWish");
    if (existing) existing.remove();
  
    // Clone and expand
    const clone = elem.cloneNode(true);
    clone.className = "wish expanded";
    clone.id = "expandedWish";
    document.body.appendChild(clone);
  }
  
  // Close expanded wish on outside click
  document.addEventListener("click", (e) => {
    const expanded = document.getElementById("expandedWish");
    if (
      expanded &&
      !expanded.contains(e.target) &&
      !e.target.classList.contains("wish")
    ) {
      expanded.remove();
    }
  });
  