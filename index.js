const { Telegraf, session } = require("telegraf");
const { default: axios } = require("axios");

const bot = new Telegraf("6832227287:AAEWpLUCSgXTnLnzYhVJAoidyYt_6YnlelE");
const fs = require("fs");

bot.start((ctx) => {
  var dbfilename = "./db.txt";
  var dbtxt = fs.readFileSync(dbfilename, "utf8");
  var userArray = dbtxt.split(",");
  if (ctx.update.message.chat.type !== "private") {
    ctx.reply(
      " شما نمی توانید این دستور را در گروه اجرا کنید ",
      Object.assign({ reply_to_message_id: ctx.message.message_id })
    );
    for (let i = 0; i < 1; i++) {
      if (userArray.includes("1234")) {
        break;
      } else {
        fs.appendFile(dbfilename, "," + "1234", (err) => {
          if (err) throw err;
          ctx.reply("12345");
        });
      }
    }
  } else {
    ctx.reply(
      `🤟🗿 سلام ${ctx.chat.first_name} به ربات آ موسی خوش اومدین ` +
        "\n آ موسی همیشه برنده اس" +
        "\n برای اطلاعات بیشتر روی گزینه زیر کلیک کنین" +
        "\n /help"
    );
    ctx.telegram.sendMessage(
      "-4104468904",
      "کابر : " +
        "\n FirstName : " +
        ctx.message.chat.first_name +
        "\n LastName: " +
        ctx.message.chat.last_name +
        "\n آیدی : " +
        "@" +
        ctx.chat.username +
        "\n دستور : " +
        "/start" +
        "\n" +
        "```" +
        ctx.message.chat.id +
        "```"
    );
      if (!userArray.includes(ctx.message.chat.id)) {
       fs.appendFile("./db.txt", "," + ctx.message.chat.id, (err) => {
          if (err) throw err;
        });
      } 
    
  }
});

bot.help((ctx) => {
  if (
    ctx.message.chat.id == "1211815869" ||
    ctx.message.chat.id == "5857189528" ||
    ctx.message.chat.id == "6140619154"
  ) {
    ctx.reply(
      " دستورات تعریف شده برای من  " +
        "\n \n 📣 آدرس چنل موسیاسیون : " +
        "\n /channel " +
        "\n 🔗 آدرس گپ موسیاسیون : " +
        "\n /group " +
        "\n 🔢 یک عدد رندوم بین 0 تا 10 بده :" +
        "\n /random" +
        "\n 📉 درصد  برد عا موسی رو بهم بگو  :" +
        "\n /winpercent" +
        "\n 🌡 دیدن آب و هوای شهر ها  :" +
        "\n /weather" +
        "\n ◽️ تشخیص گراف ساده  :" +
        "\n /graph" +
        "\n 💬 بازگو کردن یک پیام  :" +
        "\n /say" +
        "\n 🧩 بازی سنگ کاغذ قیچی  :" +
        "\n /rps" +
        "\n 🚪 بازی اتاق فرار  :" +
        "\n /escaperoom" +
        "\n ➕ جمع چند تا عدد  :" +
        "\n /sum" +
        "\n ⚜️ ارسال پیام توسط بات به گپ موسیاسیون (دسترسی فقط برای کاربران ویژه)  :" +
        "\n /sendmessage" +
        "\n ⚜️ ارسال پیام توسط بات به کانال موسیاسیون (دسترسی فقط برای کاربران ویژه)  :" +
        "\n /sendmessagechannel" +
        "\n \n" +
        "----◽️------------------------------------" +
        "\n \n 🌐 برای دریافت پروکسی کلمه «پروکسی»  را تایپ کنید  " +
        "\n \n 🌄 برای دریافت گیف رندوم کلمه «گیف»  را تایپ کنید  " +
        "\n \n 📢 برای دریافت پست رندوم کلمه «پست»  را تایپ کنید  " +
        "\n \n 🦶 برای دریافت عکس پا کلمه «عکس پا»  را تایپ کنید  " +
        "\n \n",
      Object.assign({ reply_to_message_id: ctx.message.message_id })
    );
    ctx.telegram.sendMessage(
      "-4104468904",
      "کاربر (ادمین) : " +
        "\n FirstName : " +
        ctx.message.chat.first_name +
        "\n LastName: " +
        ctx.message.chat.last_name +
        "\n آیدی : " +
        "@" +
        ctx.chat.username +
        "\n دستور : " +
        "/help" +
        "\n" +
        " ``` " +
        ctx.message.chat.id +
        " ``` "
    );
  } else {
    ctx.reply(
      " دستورات تعریف شده برای من  " +
        "\n \n 📣 آدرس چنل موسیاسیون : " +
        "\n /channel " +
        "\n 🔗 آدرس گپ موسیاسیون : " +
        "\n /group " +
        "\n 🔢 یک عدد رندوم بین 0 تا 10 بده :" +
        "\n /random" +
        "\n 📉 درصد  برد عا موسی رو بهم بگو  :" +
        "\n /winpercent" +
        "\n 🌡 دیدن آب و هوای شهر ها  :" +
        "\n ◽️ تشخیص گراف ساده  :" +
        "\n /graph" +
        "\n /weather" +
        "\n 💬 بازگو کردن یک پیام  :" +
        "\n /say" +
        "\n 🧩 بازی سنگ کاغذ قیچی  :" +
        "\n /rps" +
        "\n 🚪 بازی اتاق فرار  :" +
        "\n /escaperoom" +
        "\n ➕ جمع چند تا عدد  :" +
        "\n /sum" +
        "\n \n" +
        "----------------------------------------" +
        "\n \n 🌐 برای دریافت پروکسی کلمه «پروکسی»  را تایپ کنید  " +
        "\n \n 🌄 برای دریافت گیف رندوم کلمه «گیف»  را تایپ کنید  " +
        "\n \n 📢 برای دریافت پست رندوم کلمه «پست»  را تایپ کنید  " +
        "\n \n 🦶 برای دریافت عکس پا کلمه «عکس پا»  را تایپ کنید  " +
        "\n \n",
      Object.assign({ reply_to_message_id: ctx.message.message_id })
    );
    ctx.telegram.sendMessage(
      "-4104468904",
      "کابر : " +
        "\n FirstName : " +
        ctx.message.chat.first_name +
        "\n LastName: " +
        ctx.message.chat.last_name +
        "\n آیدی : " +
        "@" +
        ctx.chat.username +
        "\n دستور : " +
        "/help" +
        "\n" +
        " ``` " +
        ctx.message.chat.id +
        " ``` "
    );
  }
});
bot.command("channel", (ctx) => {
  ctx.reply("https://t.me/mosasion");
  ctx.telegram.sendMessage(
    "-4104468904",
    "کابر : " +
      "\n FirstName : " +
      ctx.message.chat.first_name +
      "\n LastName: " +
      ctx.message.chat.last_name +
      "\n آیدی : " +
      "@" +
      ctx.chat.username +
      "\n دستور : " +
      "/channel" +
      "\n" +
      "```" +
      ctx.message.chat.id +
      "```"
  );
});
bot.command("group", (ctx) => {
  ctx.reply("https://t.me/+IjlwVcgnJGlmYWQ0");
  ctx.telegram.sendMessage(
    "-4104468904",
    "کابر : " +
      "\n FirstName : " +
      ctx.message.chat.first_name +
      "\n LastName: " +
      ctx.message.chat.last_name +
      "\n آیدی : " +
      "@" +
      ctx.chat.username +
      "\n دستور : " +
      "/group" +
      "\n" +
      "```" +
      ctx.message.chat.id +
      "```"
  );
});
bot.command("random", (ctx) => {
  ctx.reply(
    Math.floor(Math.random() * 10).toString(),
    Object.assign({ reply_to_message_id: ctx.message.message_id })
  );
  ctx.telegram.sendMessage(
    "-4104468904",
    "کابر : " +
      "\n FirstName : " +
      ctx.message.chat.first_name +
      "\n LastName: " +
      ctx.message.chat.last_name +
      "\n آیدی : " +
      "@" +
      ctx.chat.username +
      "\n دستور : " +
      "/random" +
      "\n" +
      "```" +
      ctx.message.chat.id +
      "```"
  );
});
bot.command("say", (ctx) => {
  var msg = ctx.message.text;
  var msgArray = msg.split(" ");
  if (msgArray.length < 2) {
    ctx.reply(
      " پس از دستور /say کلمه ای بنویس تا اونو بگم ",
      Object.assign({ reply_to_message_id: ctx.message.message_id })
    );
    ctx.telegram.sendMessage(
      "-4104468904",
      "کابر : " +
        "\n FirstName : " +
        ctx.message.chat.first_name +
        "\n LastName: " +
        ctx.message.chat.last_name +
        "\n آیدی : " +
        "@" +
        ctx.chat.username +
        "\n دستور : " +
        "/say" +
        "\n" +
        "```" +
        ctx.message.chat.id +
        "```"
    );
  } else {
    msgArray.shift();
    newMsg = msgArray.join(" ");
    ctx.reply(
      newMsg,
      Object.assign({ reply_to_message_id: ctx.message.message_id })
    );
  }
});
bot.command("rps", (ctx) => {
  var rps = ctx.message.text;
  var rpsArray = rps.split(" ");
  if (rpsArray.length < 2) {
    ctx.reply(
      " پس از دستور /rps سنگ یا کاغذ یا قیچی رو بنویس تا بازی رو شروع کنیم ",
      Object.assign({ reply_to_message_id: ctx.message.message_id })
    );
  } else {
    var items = Array("r", "p", "s");
    var item = items[Math.floor(Math.random() * items.length)];
    if (rpsArray[1] == "سنگ" && item == "s") {
      ctx.reply(
        "انتخاب من : قیچی" + "\n" + "🌝" + "تو بردی",
        Object.assign({ reply_to_message_id: ctx.message.message_id })
      );
    }
    if (rpsArray[1] == "کاغذ" && item == "r") {
      ctx.reply(
        "انتخاب من : سنگ" + "\n" + "🌝" + "تو بردی",
        Object.assign({ reply_to_message_id: ctx.message.message_id })
      );
    }
    if (rpsArray[1] == "قیچی" && item == "p") {
      ctx.reply(
        "انتخاب من : کاغذ" + "\n" + "🌝" + "تو بردی",
        Object.assign({ reply_to_message_id: ctx.message.message_id })
      );
    }
    if (
      (rpsArray[1] == "قیچی" && item == "s") ||
      (rpsArray[1] == "کاغذ" && item == "p") ||
      (rpsArray[1] == "سنگ" && item == "r")
    ) {
      ctx.reply(
        "انتخاب من : " + rpsArray[1] + "\n" + "🗿" + " مساوی شدیم ",
        Object.assign({ reply_to_message_id: ctx.message.message_id })
      );
    }
    if (rpsArray[1] == "قیچی" && item == "r") {
      ctx.reply(
        "انتخاب من : سنگ" + "\n" + "🌚" + " باختی ! ",
        Object.assign({ reply_to_message_id: ctx.message.message_id })
      );
    }
    if (rpsArray[1] == "سنگ" && item == "p") {
      ctx.reply(
        "انتخاب من : کاغذ" + "\n" + "🌚" + " باختی ! ",
        Object.assign({ reply_to_message_id: ctx.message.message_id })
      );
    }
    if (rpsArray[1] == "کاغذ" && item == "s") {
      ctx.reply(
        "انتخاب من : قیچی" + "\n" + "🌚" + " باختی ! ",
        Object.assign({ reply_to_message_id: ctx.message.message_id })
      );
    }
    ctx.telegram.sendMessage(
      "-4104468904",
      "کابر : " +
        "\n FirstName : " +
        ctx.message.chat.first_name +
        "\n LastName: " +
        ctx.message.chat.last_name +
        "\n آیدی : " +
        "@" +
        ctx.chat.username +
        "\n دستور : " +
        "/rps" +
        "\n" +
        "```" +
        ctx.message.chat.id +
        "```"
    );
  }
});
bot.command("sum", (ctx) => {
  var msg = ctx.message.text;
  var msgArray = msg.split(" ");
  if (msgArray.length < 2) {
    ctx.reply(
      " پس از دستور /sum اعداد رو با فاصله وارد کن تا جمعشو بگم ",
      Object.assign({ reply_to_message_id: ctx.message.message_id })
    );
  } else {
    msgArray.shift();
    var sum = 0;
    for (i = 0; i < msgArray.length; i++) {
      sum = parseInt(msgArray[i]) + sum;
    }
    ctx.reply(
      sum.toString(),
      Object.assign({ reply_to_message_id: ctx.message.message_id })
    );
    ctx.telegram.sendMessage(
      "-4104468904",
      "کابر : " +
        "\n FirstName : " +
        ctx.message.chat.first_name +
        "\n LastName: " +
        ctx.message.chat.last_name +
        "\n آیدی : " +
        "@" +
        ctx.chat.username +
        "\n دستور : " +
        "/sum" +
        "\n" +
        "```" +
        ctx.message.chat.id +
        "```"
    );
  }
});
bot.command("winpercent", (ctx) => {
  ctx.reply(
    "درصد برد آ موسی به بی نهایت میل میکنه و اگه با اون وارد هر بازی بشی باختی ",
    Object.assign({ reply_to_message_id: ctx.message.message_id })
  );
});

bot.command("sendmessage", (ctx) => {
  var msg = ctx.message.text;
  var msgArray = msg.split(" ");
  if (msgArray.length < 2) {
    ctx.reply(
      " پس از دستور /sendmessage کلمه ای بنویس تا اونو بگم ",
      Object.assign({ reply_to_message_id: ctx.message.message_id })
    );
  } else if (
    ctx.message.chat.id == "1211815869" ||
    ctx.message.chat.id == "5857189528" ||
    ctx.message.chat.id == "6140619154"
  ) {
    msgArray.shift();
    newMsg = msgArray.join(" ");
    bot.telegram.sendMessage("-1001918329412", newMsg);
    ctx.reply(
      "پیام ارسال شد",
      Object.assign({ reply_to_message_id: ctx.message.message_id })
    );
    ctx.telegram.sendMessage(
      "-4104468904",
      "کابر : " +
        "\n FirstName : " +
        ctx.message.chat.first_name +
        "\n LastName: " +
        ctx.message.chat.last_name +
        "\n آیدی : " +
        "@" +
        ctx.chat.username +
        "\n دستور : " +
        "/sendmessage" +
        "\n" +
        "```" +
        ctx.message.chat.id +
        "```"
    );
  } else {
    ctx.reply(
      " شما مجاز به ارسال پیام نیستید ",
      Object.assign({ reply_to_message_id: ctx.message.message_id })
    );
  }
});

bot.command("weather", (ctx) => {
  var msg = ctx.message.text;
  var msgArray = msg.split(" ");
  if (msgArray.length < 2) {
    ctx.reply(
      " پس از دستور /weather اسم شهر مورد نظرت رو وارد کن ",
      Object.assign({ reply_to_message_id: ctx.message.message_id })
    );
  } else {
    msgArray.shift();
    newMsg = msgArray.join(" ");
    const apikey = "7c5d46349f96365660fa95f4e1c703b8";
    const apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" +
      newMsg +
      `&appid=${apikey}`;
    axios.get(apiUrl).then((res) => {
      ctx.reply(
        "🌡 دمای شهر " +
          newMsg +
          " : \n \n " +
          res.data.main.temp.toString() +
          "°C",
        Object.assign({ reply_to_message_id: ctx.message.message_id })
      );
      ctx.telegram.sendMessage(
        "-4104468904",
        "کابر : " +
          "\n FirstName : " +
          ctx.message.chat.first_name +
          "\n LastName: " +
          ctx.message.chat.last_name +
          "\n آیدی : " +
          "@" +
          ctx.chat.username +
          "\n دستور : " +
          "/weather" +
          "\n" +
          "```" +
          ctx.message.chat.id +
          "```"
      );
    });
  }
});

bot.command("sendmessagechannel", (ctx) => {
  var msg = ctx.message.text;
  var msgArray = msg.split(" ");
  if (msgArray.length < 2) {
    ctx.reply(
      " پس از دستور /sendmessagechannel کلمه ای بنویس تا اونو بگم ",
      Object.assign({ reply_to_message_id: ctx.message.message_id })
    );
  } else if (
    ctx.message.chat.id == "1211815869" ||
    ctx.message.chat.id == "5857189528" ||
    ctx.message.chat.id == "6140619154"
  ) {
    msgArray.shift();
    newMsg = msgArray.join(" ");
    bot.telegram.sendMessage("-1001837086040", newMsg);
    ctx.reply(
      "پیام ارسال شد",
      Object.assign({ reply_to_message_id: ctx.message.message_id })
    );
    ctx.telegram.sendMessage(
      "-4104468904",
      "کابر : " +
        "\n FirstName : " +
        ctx.message.chat.first_name +
        "\n LastName: " +
        ctx.message.chat.last_name +
        "\n آیدی : " +
        "@" +
        ctx.chat.username +
        "\n دستور : " +
        "/sendmessagechannel"
    );
  } else {
    ctx.reply(
      " شما مجاز به ارسال پیام نیستید ",
      Object.assign({ reply_to_message_id: ctx.message.message_id })
    );
  }
});

bot.hears("پروکسی", (ctx) => {
  ctx.telegram.forwardMessage(ctx.message.chat.id, "-1001997444188", 7);
  ctx.telegram.sendMessage(
    "-4104468904",
    "کابر : " +
      "\n FirstName : " +
      ctx.message.chat.first_name +
      "\n LastName: " +
      ctx.message.chat.last_name +
      "\n آیدی : " +
      "@" +
      ctx.chat.username +
      "\n دستور : " +
      "پروکسی " +
      "\n" +
      "```" +
      ctx.message.chat.id +
      "```"
  );
});
bot.hears("گیف", (ctx) => {
  ctx.telegram.forwardMessage(
    ctx.message.chat.id,
    "-1001912443665",
    Math.floor(Math.random() * 400) + 1
  );
  ctx.telegram.sendMessage(
    "-4104468904",
    "کابر : " +
      "\n FirstName : " +
      ctx.message.chat.first_name +
      "\n LastName: " +
      ctx.message.chat.last_name +
      "\n آیدی : " +
      "@" +
      ctx.chat.username +
      "\n دستور : " +
      "گیف" +
      "\n" +
      "```" +
      ctx.message.chat.id +
      "```"
  );
});
bot.hears("سلام", (ctx) => {
  ctx.reply(
    "سلام",
    Object.assign({ reply_to_message_id: ctx.message.message_id })
  );
});
bot.hears("ریدم", (ctx) => {
  ctx.telegram.forwardMessage(ctx.message.chat.id, "-1001912443665", 344);
});
bot.hears("بای", (ctx) => {
  ctx.sendMessage(
    " خداحافظ ",
    Object.assign({ reply_to_message_id: ctx.message.message_id })
  );
});
bot.hears("شب بخیر", (ctx) => {
  ctx.sendMessage(
    " شب خوش " + "🌚",
    Object.assign({ reply_to_message_id: ctx.message.message_id })
  );
});
bot.hears("پست", (ctx) => {
  ctx.telegram.forwardMessage(
    ctx.message.chat.id,
    "-1001837086040",
    Math.floor(Math.random() * 2550) + 1
  );
  ctx.telegram.sendMessage(
    "-4104468904",
    "کابر : " +
      "\n FirstName : " +
      ctx.message.chat.first_name +
      "\n LastName: " +
      ctx.message.chat.last_name +
      "\n آیدی : " +
      "@" +
      ctx.chat.username +
      "\n دستور : " +
      "پست" +
      "\n" +
      "```" +
      ctx.message.chat.id +
      "```"
  );
});
bot.hears("عکس پا", (ctx) => {
  if (ctx.message.chat.id == "5765574017") {
    ctx.reply(
      "نیما بسه کم دنبال عکس پا باش 🗿 ",
      Object.assign({ reply_to_message_id: ctx.message.message_id })
    );
    ctx.telegram.forwardMessage(
      ctx.message.chat.id,
      "-1001885484252",
      Math.floor(Math.random() * 60) + 1
    );
  } else {
    ctx.telegram.forwardMessage(
      ctx.message.chat.id,
      "-1001885484252",
      Math.floor(Math.random() * 60) + 1
    );
  }
  ctx.telegram.sendMessage(
    "-4104468904",
    "کابر : " +
      "\n FirstName : " +
      ctx.message.chat.first_name +
      "\n LastName: " +
      ctx.message.chat.last_name +
      "\n آیدی : " +
      "@" +
      ctx.chat.username +
      "\n دستور : " +
      "عکس پا" +
      "\n" +
      "```" +
      ctx.message.chat.id +
      "```"
  );
});

// graph

bot.command("graph", (ctx) => {
  var msg = ctx.message.text;
  var msgArray = msg.split(" ");
  if (msgArray.length < 2) {
    ctx.reply(
      " پس از دستور /graph درجه رئوس را به صورت پشت سر هم (یک عدد) بنویسید",
      Object.assign({ reply_to_message_id: ctx.message.message_id })
    );
    ctx.telegram.sendMessage(
      "-4104468904",
      "کابر : " +
        "\n FirstName : " +
        ctx.message.chat.first_name +
        "\n LastName: " +
        ctx.message.chat.last_name +
        "\n آیدی : " +
        "@" +
        ctx.chat.username +
        "\n دستور : " +
        "/graph"
    );
  } else {
    let myInt = parseInt(msgArray[1]);
    let myFunc = (num) => Number(num);
    let intArr = Array.from(String(myInt), myFunc);

    var tp = easyOrComplex(intArr);
    if (tp == "c") {
      ctx.reply(
        "گراف شما ساده نیست",
        Object.assign({ reply_to_message_id: ctx.message.message_id })
      );
    } else if (tp == "e") {
      ctx.reply(
        "گراف شما ساده است \n" +
          "برای رسم گراف خود به لینک زی مراجعه کنید \n \n \n " +
          "http://matt.blogfa.com/?num=" +
          myInt,
        Object.assign({ reply_to_message_id: ctx.message.message_id })
      );
    }
  }
  ctx.telegram.sendMessage(
    "-4104468904",
    "کابر : " +
      "\n FirstName : " +
      ctx.message.chat.first_name +
      "\n LastName: " +
      ctx.message.chat.last_name +
      "\n آیدی : " +
      "@" +
      ctx.chat.username +
      "\n دستور : " +
      "/graph" +
      "\n" +
      "```" +
      ctx.message.chat.id +
      "```"
  );
});

function easyOrComplex(darajat) {
  for (let i = 0; i < darajat.length; i++) {
    darajat.sort((a, b) => b - a);
    const max = darajat[0];
    darajat.splice(0, 1);

    for (let index = 0; index < max; index++) {
      darajat[index] = darajat[index] - 1;
    }

    if (darajat.every((item) => item === 0)) {
      type = "e";
      break;
    } else {
      type = "c";
    }
  }
  return type;
}
//escape room

bot.use(session());

bot.command("escaperoom", (ctx) => {
  if (ctx.update.message.chat.type !== "private") {
    ctx.reply(
      " شما نمی توانید این بازی را در گروه ها انجام دهید ",
      Object.assign({ reply_to_message_id: ctx.message.message_id })
    );
  } else {
    session.user = {
      curentRoom: "room1",
      inventory: [],
    };
    ctx.reply(
      "شما و گروهتان در آرامگاهی باستانی به دنبال گنجینه‌ای افسانه‌ای از دوران فرعون می‌گشتید. اما درب ورودی پشت سر شما بسته شد و از دوستان خود جدا شدید، بلافاصله دودی در محیط پخش شد و باعث بیهوشی شما شد. \n بعد از چند ساعت به هوش اومدید و حالا شما باید با حل معماها و پیدا کردن کلیدها، به گنجینه دست یابید و از این آرامگاه فرار کنید.🧐 \n تو این اتاق رو به روت یک در هست و در سمت راستت یه صندوق، میخوای بریم سمت کدوم؟ \n یکی از گزینه های زیر را انتخاب کن😉",
      {
        reply_markup: {
          inline_keyboard: [
            [{ text: "برو به سمت در🚪", callback_data: "room1_door" }],
            [{ text: "برو به سمت صندوق📦", callback_data: "room1_chest" }],
            [{ text: "برگرد بخواب", callback_data: "gameOver" }],
          ],
        },
      }
    );
  }
});
//Room 1 Action
bot.action("room1_door", (ctx) => {
  if (!session.user.inventory.indexOf("KeyRoom1")) {
    session.user.curentRoom = "room2";
    ctx.reply(
      "عالیه، موفق شدم درو باز کنم🙂 \n وارد اتاق جدیدی شدم و یک دروازه بزرگ جلومه و در کنار دروازه یه کتبیه میبینم🤨 \n چیکار کنیم؟",
      {
        reply_markup: {
          inline_keyboard: [
            [{ text: "برو به سمت در🚪", callback_data: "room2_door" }],
            [{ text: "برو به سمت کتیبه📄", callback_data: "room2_mystery" }],
          ],
        },
      }
    );
  } else {
    ctx.reply("در قفل است.");
  }
});

bot.action("room1_chest", (ctx) => {
  session.user.inventory = "KeyRoom1";
  ctx.reply("اوه یک کلید اینجاس برداشتمش🧐", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "برو به سمت در🚪", callback_data: "room1_door" }],
      ],
    },
  });
});
bot.action("gameOver", (ctx) => {
  ctx.reply(
    "باشه میتونی بری و به زندگی گشاد گونه ات ادامه بدی  \n برای بازی مجدد میتونید روی /escaperoom کلیک کنید."
  );
});

//Room 2 Action
bot.action("room2_door", (ctx) => {
  ctx.reply(
    'روی قفل دروازه 6 تا حرف نوشته تنها حروفی که میتونم بخونم این ها هستن: \n  "ک" , "ش" , "ا" \n ولی متوجه منظورش نمیشم! حدس میزنم برای باز کردن دروازه باید این حروف رو طبق شکل خاصی مرتب کنم! \n یا کلمه مناسب را وارد کن یا یکی از گزینه های زیرو انتخاب کن:',
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "برو به سمت کتیبه📄", callback_data: "room2_mystery" }],
        ],
      },
    }
  );
});
bot.action("room2_mystery", (ctx) => {
  ctx.reply(
    "روی کتیبه اینو نوشته: \n آن چیست که سخت است ولی سنگ نیست تخم می‌گذارد و مرغ نیست چهار پا دارد و سگ نیست؟ \n یعنی منظورش چیه؟🤨",
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "برو به سمت در🚪", callback_data: "room2_door" }],
        ],
      },
    }
  );
});
//if text
bot.on("text", (ctx) => {
  if (ctx.message.text == "لاک پشت" && session.user.curentRoom == "room2") {
    session.user.curentRoom = "room3";
    ctx.replyWithPhoto({ url: "https://i.ibb.co/VTX7DHW/img.jpg" });
    ctx.reply(
      "واااو رسیدم به دوتا اتاق مشابه که درون هر دو اتاق فرعون و گنج اسرار آمیزش هست برای باز کردن آخرین دروازه باید ببینم بین دو اتاق چند تا تفاوت وجود داره و از این آرامگاه فرار کنم🤩😍 \n تعداد تفاوت های موجود را بنویس ( با اعداد انگلیسی):"
    );
  } else if (ctx.message.text == "2" && session.user.curentRoom == "room3") {
    ctx.reply(
      "تبریک میگم شما تونستین بازی رو تموم کنین و از اتاق فرار کنین 🌝🌚 \n برای بازی مجدد میتونید روی /escaperoom کلیک کنید."
    );
    ctx.telegram.sendMessage(
      "-4104468904",
      "کابر : " +
        "\n FirstName : " +
        ctx.message.chat.first_name +
        "\n LastName: " +
        ctx.message.chat.last_name +
        "\n آیدی : " +
        "@" +
        ctx.chat.username +
        "\n تونست بازی اتاق فرار رو حل کنه " +
        "\n" +
        "```" +
        ctx.message.chat.id +
        "```"
    );
  } else if (ctx.message.text != "2" && session.user.curentRoom == "room3") {
    ctx.reply("غلطه ! دوباره امتحان کن");
  }
});

bot.launch();
